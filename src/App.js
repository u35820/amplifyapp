import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 
import Amplify, { API, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import { listNotes } from './graphql/queries';
import { withAuthenticator, AmplifySignOut, S3Album, S3Image } from '@aws-amplify-react'


Amplify.configure(awsconfig)



class App extends Component {
	

render() { 
 return (
    <div className="App">
      <h1>Production Cell</h1>
		<Tabs>
			<table>
				<tr>
				<td>
				
				</td>
				<td>
					<div className="App">
					<S3Album path="public/" picker />
					</div>
				</td>
				</tr>
			</table>
			
			
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