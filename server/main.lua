local config = require "data.config"

lib.callback.register('zh_statusitem:server:Craft', function(source, itemData)
    local src = source
    for i = 1, #itemData.items, 1 do
        local item = itemData.items[i]
        if exports.ox_inventory:Search(src, 'count', item.name) < item.count then
            return false, 'Not enough ' .. item.name
        end
    end
    for i = 1, #itemData.items, 1 do
        local item = itemData.items[i]
        exports.ox_inventory:RemoveItem(src, item.name, item.count)
    end
    local metadata = {
        label = itemData.label,
        image = itemData.name,
        name = itemData.name,
        description = itemData.description
    }
    exports.ox_inventory:AddItem(src, config.item, 1, metadata)
    return true, 'Crafted ' .. itemData.name
end)
