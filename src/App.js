import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 
import Amplify, { API, Storage, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifyS3Album, AmplifyS3ImagePicker, AmplifyS3Image} from "@aws-amplify/ui-react";
import { listTodos } from './graphql/queries';

Amplify.configure(awsconfig)



function refreshPage() {
    window.location.reload(false);
  }

function App(){
	
	const [todos, setTodos] = useState([])
	
	useEffect(() => {
    fetchTodos();
	}, []);
	
	const fetchTodos = async () =>{
		try{
			const todoData = await API.graphql(graphqlOperation(listTodos));;
			const todoList = todoData.data.listTodos.items;
			console.loge('item list', todoList);
			setTodos(todoList)
		}
		catch(error){
			console.log('error on fetching items', error)
		}
	};

 return (
    <div className="App">
      <h1>Production Cell</h1>
		<Tabs>
			<div label="Quality Results">
			<table class="center">
				<tr><th colspan="2">
				<button class="buttonStyle" onClick={refreshPage}>Update the Quality-Results</button>
				</th></tr>
				<tr>
				<td width="750">
					<div className="App">
					<AmplifyS3Album 
						picker="false"
						sort ={(list: StorageObject[]) => {
								console.log('default acended sorted, before sort output', list);
								const sortedList: StorageObject[] = list.sort((a:any, b:any) => b['key'].localeCompare(a['key'])); 
								console.log('after decended sort', sortedList);
								return sortedList;
						}}
					/>
					</div>
				</td>
				<td>
					here
				</td>
				</tr>
			</table>
			
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