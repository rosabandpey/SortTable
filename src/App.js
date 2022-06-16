import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { Component } from 'react';


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render:(field,record)=>{

      var boolVar =   typeof (field )
        
        if (boolVar=="object"){
          return `${field.street}${field.suite} ${record.phone}`
        }
        else{
          return `${field}`
        }
      
    }
  }
  
];




class App extends Component {


  state={
    user:[]
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(data=>this.setState({user:data}))
  }

  render() {
    return (
      <div className="App">
      <Table  columns={columns} data={this.state.user} rowKey={record => `${record.name}${record.age}`}/>
     </div>
    );
  }
}



export default App;
