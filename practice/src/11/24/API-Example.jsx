import { useEffect,useState } from "react";

function Example(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const res=await fetch("https://jsonplaceholder.typicode.com/users");
            const json=await res.json();
            setData(json);
        }
        fetchData();
    },[]);
    return(
        <div>
            <h1>API테스트</h1>
        </div>
    );
}

export default Example;
