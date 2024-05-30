local items = require "data.items"
local config = require "data.config"

local busy = false

AddEventHandler('onResourceStart', function(resource)
    if resource == GetCurrentResourceName() then
        Wait(1000)
        local statusItems = {}
        for _, v in pairs(items) do
            table.insert(statusItems,
                {
                    label = v.label,
                    name = v.name,
                    image = v.image,
                    description = v.description,
                    items = v.items
                }
            )
        end
        SendNUIMessage({
            action = "setItems",
            data = statusItems
        })
    end
end)

RegisterNUICallback('hideFrame', function(data, cb)
    ToggleFrame(false)
    cb({})
end)

RegisterNUICallback('startCraft', function(data, cb)
    if busy and lib.progressActive() then
        return Notify('Error', 'Please wait...', 'error')
    end
    if not CheckItems(data.items, data.count or 1) then
        cb(false)
        return Notify('Error', 'Not enough items', 'error')
    end
    busy = true
    ToggleFrame(false)
    for _ = 1, data.count, 1 do
        if lib.progressCircle({
                duration = 5000,
                position = 'bottom',
                useWhileDead = false,
                canCancel = true,
                disable = {
                    car = true,
                    combat = true,
                    mouse = true,
                    move = true
                },
                label = ('Crafting %s'):format(data.label),
                anim = {
                    dict = "amb@prop_human_bbq@male@idle_a",
                    clip = "idle_b",
                },
                prop = {
                    model = `prop_fish_slice_01`,
                    pos = vec3(0.0, 0.0, 0.0),
                    rot = vec3(0.0, 0.0, 0.0),
                    bone = 28422
                },
            }) then
            local result, message = lib.callback.await('zh_statusitem:server:Craft', false, data.name)
            if not result then
                Notify('Error', message, 'error')
                busy = false
                break
            else
                Notify('Success', message, 'success')
                data.count = data.count - 1
                SendNUIMessage({
                    action = "updateSelectedItem",
                    data = data
                })
            end
        else
            busy = false
            Notify('Error', 'Cancelled...', 'error')
            break
        end
    end
    busy = false
end)

RegisterNUICallback('canCraft', function(data, cb)
    cb(CheckItems(data.items, data.count or 1))
end)

exports(config.item, function(data, slot)
    local metadata = slot.metadata
    local item = items[metadata.name]
    if not item then
        return
    end
    if lib.progressCircle(item.progress) then
        exports.ox_inventory:useItem(data, function(result)
            if result then
                for k, v in pairs(item.status) do
                    config.setStatus(k, v)
                end
                Notify('Success', 'Used ' .. item.label, 'success')
            end
        end)
    else
        Notify('Error', 'Cancelled...', 'error')
    end
end)
