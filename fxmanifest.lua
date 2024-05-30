fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'ZHOURA-24'

shared_script '@ox_lib/init.lua'

client_script 'client/*.lua'
server_script 'server/*.lua'

ui_page 'web/dist/index.html'

files {
    'data/*.lua',
    'web/dist/**'
}
