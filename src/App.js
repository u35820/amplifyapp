import React, { useState, useEffect } from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 
import Amplify, { API, Storage } from 'aws-amplify';
import awsconfig from './aws-exports';
import {  StyleSheet,  Text,  Button,  View,  Image} from 'react-native';

Amplify.configure(awsconfig)

async getFile() {
    let name = 'public/_2021-5-10-85354_01a0c537-9269-4bf1-9ef4-4c081b4fe3f0.jpg';
    let fileUrl = await Storage.get(name);
    this.setState({
      url: fileUrl
    })
  }

function App() { 
 return (
    <div className="App">
      <h1>Production Cell</h1>
		<Tabs>
			<div label="Quality Results">
				<View style={styles.container}>
					<Text>Storage</Text>
					<Button
						title="Get Image"
						onPress={this.getFile.bind(this)}
					/>
					{
						this.state.url !== '' && (
							<Image
								source={{ uri: this.state.url }}
								style={{ width: 300, height: 300 }}
							/>
						)
					}
      </View>
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