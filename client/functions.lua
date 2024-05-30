function ToggleFrame(show)
    local visible = not IsNuiFocused() or show
    SendNUIMessage({
        action = "setVisible",
        data = visible
    })
    SetNuiFocus(visible, visible)
end
