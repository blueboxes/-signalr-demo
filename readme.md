Simple Blob Trigger function that broadcasts when a file is added to storage using serverless signalr. There is a simple react UI that subscribes and will show the boradcasted file link.

You will need to have created azure storage with a public container of media and serverless signalr. You must also set the following as vars in the function:

* StorageConnectionString  
* AzureSignalRConnectionString  

The functions and UI run locally though you need to setup [Azure SignalR](https://docs.microsoft.com/en-us/azure/azure-signalr/signalr-quickstart-azure-functions-javascript#create-an-azure-signalr-service-instance) and run it in Azure (set to serverless as per the guide). 

To run the UI run `yarn start` from the UI folder and to run the functions use the launcher. Any errors are shown in the console.

Once running any files dropped in to the media folder will show as links on the page without the page needing to be refreshed.

If you are seeing cors issues in the console make sure you have setup cors in the portal on the functions or  in local.settings.json 

```
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage":  "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "StorageConnectionString": "",
    "AzureSignalRConnectionString": ""
  },
  "ConnectionStrings": {},
  "Host": {
    "LocalHttpPort": 7071,
    "CORS": "http://localhost:3000",
    "CORSCredentials": true
  }
}
```
