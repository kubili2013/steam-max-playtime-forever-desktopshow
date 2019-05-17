# 使用手册

> 这是一个`NB Desktop`的插件，想要使用你首先拥有这款软件。[NB Desktop 获取地址](https://store.steampowered.com/app/1064820/NB_Desktop/)

* 请准备你的 `steam api key`，也就是你的 Steam 开发者秘钥，每个人都可以获取,[获取地址请点击这里](https://steamcommunity.com/dev/apikey)(Steam 社区网址，国内需要自行科学上网)
* 在 `plugin.json` 的补全配置，一个是 `devkey`，一个是你的`steamid`。
* 重启打开 `NB Desktop`，启用本插件。
```json
{
    "name":"Steam 游戏展示",
    "desc":"展示你最经常玩的八个游戏，带游玩时间。需要打开配置文件进行设置。",
    "type":"desktop-widget",
    "author":"kubili2013",
    "main":"index.js",
    "image":"logo.png",
    "url":"",
    "setting":{
        "devkey":"你的开发者秘钥请填写在这里。",
        "steamid":"你的 Steamid 请填写在这里。"
    }
}
```