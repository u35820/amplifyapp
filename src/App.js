import React, { useState, useEffect } from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 
import Amplify, { API, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator, S3Image } from 'aws-amplify-react-native';

Amplify.configure(awsconfig)

function App() { 
 return (
    <div className="App">
      <h1>Production Cell</h1>
		<Tabs>
			<div label="Quality Results">
				<S3Image imgKey={public/_2021-5-10-85354_01a0c537-9269-4bf1-9ef4-4c081b4fe3f0.jpg} />
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

export default App;