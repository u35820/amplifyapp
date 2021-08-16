import React, { useState, useEffect, Component } from 'react';
import './App.css';
import Tabs from "./components/Tabs"; 
import Amplify, { API, Storage, Auth, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifyS3Album, AmplifyS3Image} from "@aws-amplify/ui-react";
import { listTodos, itemsByImagename }  from './graphql/queries';

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
			const todoData = await API.graphql(graphqlOperation(itemsByImagename, {
																StationID: 'AC-01',
																sortDirection: 'DESC'
		}																));
			const todoList = todoData.data.itemsByImagename.items;
			console.log('item list', todoList);
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
				<tr><th colSpan="2">
				<button class="buttonStyle" onClick={refreshPage}>Update Quality-Results</button>
				</th></tr>
				<tr>
				<th>
				Result images:
				</th>
				<th>
				Result information:
				</th>
				</tr>
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
				<td width="800">
					<div className="todoList">
						{
						todos.map(note => (
						<div key={note.id}>
						<table class="tableborder">
						<tr class="datarow">
						<th colSpan="6"><h3>{note.Imagename}</h3></th></tr>
						<tr height="90"></tr>						
						<tr class="schrift">
						<td>Time</td>
						<td>Type</td>
						<td>Classification</td>
						<td>Confidence</td>
						<td>ConfigurationID</td>
						<td>RecipeID</td>
						</tr>
						<tr height="51">
						<td>{note.id}</td>
						<td>{note.Type}</td>
						<td>{note.Classification}</td>
						<td>{note.Confidence}</td>
						<td>{note.ConfigurationID}</td>
						<td>{note.RecipeID}</td>
						</tr>
						<tr height="90"></tr>
						</table>
						</div>
						))
						}
		</div>
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