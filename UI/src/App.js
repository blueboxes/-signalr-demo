import React from 'react';
import './App.css';
import * as signalR from '@microsoft/signalr'


class App extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {files: []};
  }

  componentDidMount()
  {
    const apiBaseUrl = "http://localhost:7071/";

    var connection = new signalR.HubConnectionBuilder()
    .withUrl(apiBaseUrl + "api")
    .configureLogging(signalR.LogLevel.Information)
    .build();

    connection.on("newfile", (name,uri) => {
         
      let { files } = this.state;
      files.push({name:name, uri: uri });
      this.setState({ files: files });
    });

    connection.start().then(function () {
      console.log("connected");
    }).catch(function (err) {
        return console.error(err.toString());
    });
  }


  render() {
    return (
      <div>
        <h1>Media Files</h1>
        <ul>
          {this.state.files.map((file,index)=>{
          return <li key={index}><a href={file.uri}>{file.name}</a></li>
        })}
        </ul>
        
      </div>
    );
  }
}
  
export default App;
