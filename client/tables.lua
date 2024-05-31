local tables = require "data.tables"
local items = require "data.items"
local tableObjects = {}

---@param model string
---@param coords vector4
---@return integer
local function SpawnTable(model, coords)
    lib.requestModel(model)
    local entity = CreateObject(GetHashKey(model), coords.x, coords.y, coords.z, false, false, false)
    while not DoesEntityExist(entity) do Wait(50) end
    SetEntityHeading(entity, coords.w)
    FreezeEntityPosition(entity, true)
    SetEntityAsMissionEntity(entity, true, true)
    SetModelAsNoLongerNeeded(model)
    return entity
end

local function DeleteAllObjects()
    for i = 1, #tableObjects, 1 do
        local table = tableObjects[i]
        if DoesEntityExist(table) then
            DeleteEntity(table)
        end
    end
    tableObjects = {}
end

for i = 1, #tables, 1 do
    local tableData = tables[i]
    local entity = SpawnTable(tableData.model, tableData.coords)
    table.insert(tableObjects, entity)
    exports.ox_target:addLocalEntity(entity, {
        {
            label = "Open table",
            icon = "fa-solid fa-table",
            groups = tableData.groups,
            onSelect = function()
                ToggleFrame(true)
                local statusItems = {}
                for _, v in pairs(items) do
                    if tableData.category == "all" or tableData.category == v.category then
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
                end
                SendNUIMessage({
                    action = "setItems",
                    data = statusItems
                })
            end
        }
    })
end

AddEventHandler('onResourceStop', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then return end
    DeleteAllObjects()
end)
