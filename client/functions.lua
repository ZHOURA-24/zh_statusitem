function Notify(title, description, type)
    lib.notify({
        title = title,
        description = description,
        type = type
    })
end

function ToggleFrame(show)
    local visible = not IsNuiFocused() or show
    SendNUIMessage({
        action = "setVisible",
        data = visible
    })
    SetNuiFocus(visible, visible)
end

function CheckItems(items, count)
    for i = 1, #items, 1 do
        local item = items[i]
        if exports.ox_inventory:Search('count', item.name) < item.count * count then
            return false
        end
    end
    return true
end
