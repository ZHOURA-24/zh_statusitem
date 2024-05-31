return {
    burger = {
        label = 'Burger',
        name = 'burger',
        description = 'Hamburger with cheese and lettuce',
        status = { hunger = 10 },
        category = 'food',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_cs_burger_01`, pos = vec3(0.02, 0.02, -0.02), rot = vec3(0.0, 0.0, 0.0) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    pasta = {
        label = 'Pasta',
        name = 'pasta',
        description = 'Pasta with cheese and sauce',
        status = { hunger = 10 },
        category = 'food',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_cs_burger_01`, pos = vec3(0.02, 0.02, -0.02), rot = vec3(0.0, 0.0, 0.0) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    sushi = {
        label = 'Sushi',
        name = 'sushi',
        description = 'Sushi with rice',
        status = { hunger = 10 },
        category = 'food',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_cs_burger_01`, pos = vec3(0.02, 0.02, -0.02), rot = vec3(0.0, 0.0, 0.0) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    ramen = {
        label = 'Ramen',
        name = 'ramen',
        description = 'Ramen with vegetables',
        status = { hunger = 10 },
        category = 'food',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_inteat@burger', clip = 'mp_player_int_eat_burger_fp' },
            prop = { model = `prop_cs_burger_01`, pos = vec3(0.02, 0.02, -0.02), rot = vec3(0.0, 0.0, 0.0) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    cocktail = {
        label = 'Cocktail',
        name = 'cocktail',
        description = 'Cocktail with gin and lime juice',
        status = { thirst = 10 },
        category = 'drink',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    lemonade = {
        label = 'Lemonade',
        name = 'lemonade',
        description = 'Lemonade with sugar and water',
        status = { thirst = 10 },
        category = 'drink',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    milkteaboba = {
        label = 'Milk Tea Boba',
        name = 'milkteaboba',
        description = 'Milk Tea Boba with milk and ice cubes',
        status = { thirst = 10 },
        category = 'drink',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    },
    wine = {
        label = 'Wine',
        name = 'wine',
        description = 'Wine with red and white wine',
        status = { thirst = 10 },
        category = 'drink',
        progress = {
            duration = 5000,
            position = 'bottom',
            useWhileDead = false,
            canCancel = true,
            disable = {
                car = true,
            },
            anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
            prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
        },
        items = {
            {
                name = 'water',
                count = 2,
            },
            {
                name = 'phone',
                count = 1,
            }
        }
    }
}
