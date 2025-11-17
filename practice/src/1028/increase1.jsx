import React, {useState} from "react";

function Increase1(){
    const [count,setCount]=useState(0);
    
    return (
        <>
            <h3>현재 수:{count}</h3>
            <button onClick={()=> setCount(count-1)}>-1</button>
        </>
    );
}
export default Increase1;