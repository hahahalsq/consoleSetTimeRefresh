


var timeout = prompt("Set timeout (Second):");
var count = 0;
var current = location.href;
if (timeout > 0) {
    setTimeout('reload()', 1000 * timeout);
} else {
    location.replace(current);
}

function reload() {
    count++;
    console.log('每（' + timeout + '）秒自动刷新,刷新次数：' + count);
    var fr4me = '<frameset cols=\'*\'>\n<frame src=\'' + current + '\'/>';
    fr4me += '</frameset>';
    with (document) {
        write(fr4me);
        void(close())
    }
    setTimeout('reload()', 1000 * timeout);
}

console.log('aaaaaa')
