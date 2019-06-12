let steamgameshow_plugin = Plugin.getPluginByName("Steam 游戏展示");
let steamgameshow_config = JSON.parse(fs.readFileSync(steamgameshow_plugin.path + "plugin.json"))

let steamgameshow_template_tab = `
<div class="tab">
<h2>Steam 常玩游戏展示</h2>

<div class="list">
<span >Steam开发秘钥：</span><input id="steamgameshow_dev_key" type="text" value="{devkey}" style="margin-top: 2px;margin-bottom: 4px;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);-webkit-border-radius: 8-moz-border-radius: 8;border-radius: 8px;text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;font-size: 16px;padding: 10px 25px 10px 25px;text-decoration: none;">
<br><br>
<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SteamID：</span><input value="{steamid}" id="steamgameshow_id" type="text" style="margin-top: 2px;margin-bottom: 4px;background: #599bb3;background-image: linear-gradient(to bottom, #599bb3, #408c99);-webkit-border-radius: 8-moz-border-radius: 8;border-radius: 8px;text-shadow: 0px 1px 0px #3d768a;box-shadow: 0px 10px 14px -7px #276873;font-family: Arial;color: #ffffff;font-size: 16px;padding: 10px 25px 10px 25px;text-decoration: none;">     
<br><br>
<button id="steamgameshow-setting-btn" onclick="settingsteamgameshow()">开启插件</button>&nbsp;&nbsp;<button id="steamgameshow-setting-btn" onclick="Plugin.endPlugin('Steam 游戏展示')">移除插件</button>
</div>
</div>
<script>Controller.reInit();</script>
`;

function loadsteamgameshow() {
    $(".menu").append('<li><a href="javascript:void(0)"><img src="' + steamgameshow_plugin.path + '/' + steamgameshow_plugin.image + '"><span>Steam 游戏展示</span></a></li>');
    $(".content").append(steamgameshow_template_tab.replace('{devkey}',steamgameshow_config.setting.devkey).replace("{steamid}",steamgameshow_config.setting.steamid));
}

function settingsteamgameshow(){
    steamgameshow_config.setting.devkey =  $("#steamgameshow_dev_key").val();
    steamgameshow_config.setting.steamid =  $("#steamgameshow_id").val();
    fs.writeFileSync(steamgameshow_plugin.path + "plugin.json", JSON.stringify(steamgameshow_config, null, 4));
    // refresh
    ipcRenderer.send("reload-plugins");
    Plugin.startDesktopWidgetPlugin('Steam 游戏展示')
}

$(function () {
    loadsteamgameshow();
});