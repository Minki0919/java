import { useState, useEffect } from 'react'

function Name3(){
    const [count, setCount]=useState(0);
    const [message, setMessage]=useState('');

    useEffect(()=>{
        setMessage(`count가 변경되었습니다 : ${count}`);
    },[count]);

    return(
        <div>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <h2>{message}</h2>
        </div>
    );
}

export default Name3;