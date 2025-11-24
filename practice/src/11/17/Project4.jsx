import { useState } from "react";

function Name4(){
    const [isLogin, setIsLogin]=useState(false);
    
    const users=[
        {id:1, name:'민기', hobby:'코딩'},
        {id:1, name:'연희', hobby:'독서'},
        {id:1, name:'민지', hobby:'운동'},
        
    ];
    
    let message;
    if(isLogin){
        message=
                <ul>
                    {users.map(user=>(
                        <li key={user.id}>
                            {user.name}-{user.hobby}
                        </li>
                    ))}
                </ul>
    
    } 
    else{
        message =<h2>로그인이 필요합니다.</h2>;
    }
    return(
        <div>   
            <button onClick={()=> setIsLogin(prev=>!prev)}>
                {isLogin ?'로그아웃':'로그인'}
            </button>
            {message}
        </div>
    )
}
export default Name4;