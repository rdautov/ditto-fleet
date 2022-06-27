let message: string = 'Hello World';
console.log(message);

const domain = 'localhost:8080';
const username = 'ditto';
const password = 'ditto';

// could also use newWebSocketClient() for the WebSocket implementation
const client = DittoNodeClient.newHttpClient()
            .withoutTls()
            .withDomain(domain)
            .withAuthProvider(NodeHttpBasicAuth.newInstance(username, password))
            .build();