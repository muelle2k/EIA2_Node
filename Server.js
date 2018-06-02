"use strict";
const Url = require("url"); // URL 
const Http = require("http"); //HTTP wird erstellt im Code erstellt, damit einzelne HTTP.Objekte im Code angehängt werden können
var Node;
(function (Node) {
    let port = process.env.PORT; //process.env.PORT wird als Umgebungsvar festgelegt für den gegebenen PORT
    if (port == undefined)
        port = 8100; //dann port = 8100
    let server = Http.createServer(); //eigenen server creieren
    server.addListener("listening", handleListen); //wenn server 'listening dann function handleListen aufrufen
    server.addListener("request", handleRequest); //sever 'requeste' reagieren beibringen
    server.listen(port);
    function handleListen() {
        console.log("Ich höre?"); //ausgabe in console oder terminal
    }
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!");
        let query = Url.parse(_request.url, true).query; //übersetzung in assoziatives array und umwandeln in js (/?a=10&b=20)
        let a = parseInt(query["a"]);
        let b = parseInt(query["b"]);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("Ich habe dich gehört<br/>");
        for (let key in query)
            _response.write("Die eingegebenen Query-Informationen: " + (query[key]) + "<br>");
        _response.write("Das Ergebnis lautet: " + (a + b));
        _response.end();
    }
})(Node || (Node = {}));
//# sourceMappingURL=Server.js.map