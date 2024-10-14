	chrome.tabs.query({
        active:true,
        lastFocusedWindow:true
    }
    , function (tab) {
        $('#code').qrcode(tab[0].url);
            // 生成二维码--中间自定义图片
            $("#code canvas")[0].getContext('2d').drawImage($("#qrCodeIco")[0], 100, 100, 65, 65);
    });

