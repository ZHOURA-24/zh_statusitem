local config = require "data.config"
local items = require "data.items"

lib.callback.register('zh_statusitem:server:Craft', function(source, name)
    local src = source
    local item = items[name]
    for i = 1, #item.items, 1 do
        local itemData = item.items[i]
        if exports.ox_inventory:Search(src, 'count', itemData.name) < itemData.count then
            return false, 'Not enough ' .. itemData.name
        end
    end
    for i = 1, #item.items, 1 do
        local itemData = item.items[i]
        exports.ox_inventory:RemoveItem(src, itemData.name, itemData.count)
    end
    local metadata = {
        label = item.label,
        image = item.name,
        name = item.name,
        description = item.description
    }
    exports.ox_inventory:AddItem(src, config.item, 1, metadata)
    return true, 'Crafted ' .. item.name
end)
