var message = 'Hello World';
console.log(message);
var domain = 'localhost:8080';
var username = 'ditto';
var password = 'ditto';
// could also use newWebSocketClient() for the WebSocket implementation
var client = DittoNodeClient.newHttpClient()
    .withoutTls()
    .withDomain(domain)
    .withAuthProvider(NodeHttpBasicAuth.newInstance(username, password))
    .build();
//# sourceMappingURL=helloworld.js.map