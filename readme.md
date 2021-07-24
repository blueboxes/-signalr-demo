Simple Blob Trigger that broadcasts when a file is dropped using serverless signalr. This is shown in a simple react UI.

You will need to have created azure storage with a public container of media and serverless signalr and set the following as vars in the function:

* StorageConnectionString  
* AzureSignalRConnectionString  

The functions and UI run locally thought AzureSignalR needs to be the hosted version in Azure (set to serverless). 

To run the use use `yarn start` from the UI folder to run the functions use the launcher.

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