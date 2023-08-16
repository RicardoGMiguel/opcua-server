import { OPCUAServer, DataType } from 'node-opcua'
import 'dotenv/config';


// const server = new OPCUAServer({
//     port: Number(process.env.OPCUA_PORT) || 62640,
//     resourcePath: process.env.RESOURCE_PATH || "/UA/MyServer",
// });

const server = new OPCUAServer({
    hostname: process.env.OPCUA_HOSTNAME || '192.168.1.8',
    port: Number(process.env.OPCUA_PORT) || 62640,
    resourcePath: process.env.RESOURCE_PATH || "/UA/MyServer",
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
        console.log("OPC UA server is running on:", server.getEndpointUrl());
    });
}

server.initialize(function () {
    post_initialize();
});