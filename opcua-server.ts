import { OPCUAServer, DataType } from 'node-opcua'


const server = new OPCUAServer({
    port: 62640,
    resourcePath: "/UA/MyServer",
});

const post_initialize = () => {
    console.log("OPC UA server initialized");

    const addressSpace = server.engine.addressSpace;
    if (addressSpace) {
        const namespace = addressSpace.getOwnNamespace();

        const variable = namespace.addVariable({
            organizedBy: addressSpace.rootFolder.objects,
            nodeId: "ns=1;s=MyVariable",
            browseName: "MyVariable",
            dataType: "Double",
            value: { dataType: DataType.Double, value: 10.0 },
        });

        setInterval(() => {
            variable.setValueFromSource({ dataType: DataType.Double, value: (Math.random() * 100).toFixed(1) });
        }, 5000);
    }

    server.start(function () {
        console.log("OPC UA server is running on port:", server.endpoints[0].port);
    });
}

server.initialize(function () {
    post_initialize();
});