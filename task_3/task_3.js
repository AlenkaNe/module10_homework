const wsUri = " wss://echo-ws-service.herokuapp.com";
const geoUri = "https://www.openstreetmap.org/ ";
const inpText = document.getElementById('inp');
const btnSend = document.querySelector('.btn');
const btnGeo = document.querySelector('.btnGeo');
const context = document.querySelector('.context');

let websocket;
function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  context.appendChild(pre);
};


  websocket = new WebSocket(wsUri);
  
  websocket.onopen = function(evt) {

  };
  websocket.onmessage = function(evt) {
    writeToScreen(
      '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
    );
  };
  websocket.onerror = function(evt) {
    writeToScreen(
      '<span style="color: red;">ERROR:</span> ' + evt.data
    );
  };

btnSend.addEventListener('click', () => {
  const message = inpText.value;
  writeToScreen(message);
  websocket.send(message);
});

btnGeo.addEventListener('click', () => {
  const message = geoUri;
  writeToScreen(message);
});