import React,{useState} from 'react'

export default function Child({value}) {

    const [input , Setinput] = useState(null)

    const chnage =(e)=>{
        value(e.target.value)
    }

    return (
        <div>
            <h1>Name</h1>
            <input value= {input} onChange={chnage} />
            
        </div>
    )
}
