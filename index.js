
let steam_game_plugin = getPluginByName("Steam 游戏展示");
let steam_game_area = document.createElement('webview');
steam_game_area.setAttribute("src",steam_game_plugin.path + "index.html");
steam_game_area.setAttribute("style","position:absolute;top:0px;left:0px;")
document.body.append(steam_game_area);
steam_game_area.addEventListener('dom-ready', e => {
    steam_game_area.executeJavaScript("var devkey = '" + steam_game_plugin.setting.devkey + "';var steamid = '" + steam_game_plugin.setting.steamid + "';loadSteamGame();");
});