import React, { useState, useEffect, Component, Fragment } from 'react';
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
				<h3>Result images:</h3>
				</th>
				<th>
				<h3>Result information:</h3>
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
						<div class="container">
							<li class="table-header2">
							{note.Imagename}
							</li>
							<ul class="responsive-table">
							<li class="table-header">
								<div class="col col-1">Time</div>
								<div class="col col-2">Type</div>
								<div class="col col-3">Classification</div>
								<div class="col col-4">Confidence</div>
								<div class="col col-5">ConfigurationID</div>
								<div class="col col-6">RecipeID</div>				
							</li>
							<li class="table-row">
								<div class="col col-1" data-label="Time">{note.id}</div>
								<div class="col col-2" data-label="Type">{note.Type}</div>
								<div class="col col-3" data-label="Classification">{note.Classification}</div>
								<div class="col col-4" data-label="Confidence">{note.Confidence}</div>
								<div class="col col-5" data-label="ConfigurationID">{note.ConfigurationID}</div>
								<div class="col col-6" data-label="RecipeID">{note.RecipeID}</div>
							</li>							
							</ul>
						</div>
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
		</Tabs>
	  

    </div>
  );
}


export default App;