local items = require "data.items"

AddEventHandler('onResourceStart', function(resource)
    if resource == GetCurrentResourceName() then
        Wait(1000)
        local statusItems = {}
        for i = 1, #items, 1 do
            table.insert(statusItems, {
                label = items[i].label,
                name = items[i].name,
                items = items[i].items
            })
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
