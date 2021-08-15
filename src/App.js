import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 
import Amplify, { API, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig)

class App extends Component {
	state = {fileUrl: ''}
	componentDidMount(){
		Storage.get('_2021-5-10-85354_01a0c537-9269-4bf1-9ef4-4c081b4fe3f0.jpg')
			.then(data => {
				this.setState({
					fileUrl: data
				})
			})
			.catch(err =>{
				console.log('error fetching image')
			})
	}

render() { 
 return (
    <div className="App">
      <h1>Production Cell</h1>
		<Tabs>
			<div label="Quality Results">
				<img src={this.state.fileUrl} />
			</div>
			<div label="Logistic Results">
				No results yet
			</div>
			<div label="Orchestrator">
				No results yet
			</div>
			<div label="Robotics">
				No results yet
			</div>
		</Tabs>
	  

    </div>
  );
}
}

export default App;