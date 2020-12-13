import React , {useState} from 'react'
import './App.css';
import Child from './Child'

const  App =()=> {
  const [name , setName] = useState(null)
const change=(abc)=>{
  setName(abc)
  console.log(name)
}

  return (
    <div >
      <Child value ={change}/>
      <h1>{name}</h1>
     
    </div>
  );
}

export default App;
