local tables = require "data.tables"
local tableObjects = {}
local models = {}

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
    table.insert(models, tableData.model)
end

AddEventHandler('onResourceStop', function(resourceName)
    if (GetCurrentResourceName() ~= resourceName) then return end
    DeleteAllObjects()
end)

exports.ox_target:addModel(models, {
    {
        label = "Open table",
        icon = "fa-solid fa-table",
        onSelect = ToggleFrame
    }
})
