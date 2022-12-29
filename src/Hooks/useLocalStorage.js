import { useEffect, useState } from "react"




 const useLocalStorage = (key) => {

    const [data, setData] = useState("")
    
   useEffect(()=> {
    const returnedData = localStorage.getItem(key)
    if(returnedData){
     setData(returnedData) // setting the value of local storage to the returned data
    }
    },[key])
   


    const insertData =(data)=>{
        localStorage.setItem(key, typeof data !== "string" ? JSON.stringify(data) : data)
        setData(data)
      }

      return [data, insertData]
    
}


export default useLocalStorage