module.exports = async function (context, myBlob) {
        
    context.log("JavaScript blob trigger function processed blob \n Blob:", context.bindingData.blobTrigger, "\n Blob Size:", myBlob.length, "Bytes");

    context.bindings.signalRMessages = [{
        "target": "newFile",
        "arguments": [ context.bindingData.blobTrigger, context.bindingData.uri ]
    }];
    
    context.done();
};