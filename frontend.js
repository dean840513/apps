const ws = new WebSocket("ws://192.168.1.128:8080");

ws.onopen = function(){
	document.getElementById('status').innerText = '已连接';
	// ws.send('leafpad&\r');
};

var term = new window.Terminal({
    cursorBlink: true
});
term.open(document.getElementById('terminal'));

// term.onKey(function(key){
	// console.log(key);
	// ws.send(key.key);
// });

ws.onmessage = function(event){
	// console.log(event);
    term.write(event.data);
}

ws.onclose = function(event){
	document.getElementById('status').innerText = '!!!!!连接已断开!!!!!!';
}

window.onbeforeunload = function(event) {
	ws.close();
};