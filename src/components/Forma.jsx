import React from 'react'
import { useState } from 'react'

function forma() {
  let binary =0;
  let [data, setData] = useState(binary)
 
  return (
    <div className=' h-screen flex  justify-center flex-col mx-96 '>
 
      <p className='text-4xl font-extrabold text-center text-blue-700' >{data}</p> 
      <button onClick={ 
        
        function inovat(){
         if(binary<60){
          binary=binary+1;
         }
    // if(binary==1){
    //   var a = prompt("");
    //   console.log(a);
    //   console.log(binary);
    setData(binary)
    setTimeout(inovat, 1000);
    
      
    //   binary=0;
    // }
    // else{
    //   var a = prompt("");
    //   console.log(a);
    //   console.log(binary);
    //   setData(a)
    //    binary=1;
    // }
  }} 
  className='h-11 my-2 w-36 mx-52 text-white font-bold outline-none rounded-md bg-blue-600'>change</button>
      
   
    </div>
  )
}

export default forma
