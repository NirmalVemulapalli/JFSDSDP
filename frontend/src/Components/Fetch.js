import React,{useState} from 'react'
import axios from 'axios'

const Fetch = () => {
    const [res,setresult]=useState(null)
    if(res==null){
    axios.get('http://localhost:8080/retrieve',{
        
    })
    .then((response)=>{
      setresult(response.data)
      console.log(response.data)
    })
}
    return (
      <div>
          <h1>Registrations</h1>
          {JSON.stringify(res)}
      </div>
    )
  
}

export default Fetch