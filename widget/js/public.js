
function currentWifi() {
    wifi.currentWifi(function(ret, err) {
        if (ret.status) {
            api.alert({ msg: ret.ssid + "*" + ret.bssid });
        } else {
            api.alert({ msg: ret.msg });
        }
    });
}

function f() {
    photoPicker.addPhoto({
        photoMaxNum : 5,
        videoMaxNum:2,
        rowCount:3,
        selectTogether:true,
        selectedType:2,
        lookGifPhoto:true,
        lookLivePhoto:true,
        outerCamera:false,
        time:8
    },function(ret, err){
        alert(JSON.stringify(ret));
    });
}