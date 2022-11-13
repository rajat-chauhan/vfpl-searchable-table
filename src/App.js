import React from 'react';
import data from './data.json';
import Table from "./components/table";



const colNames = ['Id', 'Name', 'Username', 'Email', 'Address','Phone', 'Website']

function App() {
  return  <Table list={data} colNames={colNames} />
}

export default App;
