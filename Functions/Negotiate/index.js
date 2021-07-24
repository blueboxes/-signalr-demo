//https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-signalr-service-input?tabs=javascript
module.exports = async function (context, req, connectionInfo) {
    context.res.body = connectionInfo;
};