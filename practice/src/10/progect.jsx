import {useState} from'react';

function Name(){
    const [isLogin,setIsLogin]=useState(false);
    
    const handleLogin=()=>{
        setIsLogin(prev=>!prev);
    };
    return(
        <div>
            <button onClick={handleLogin}>
                {isLogin ? '로그아웃':'로그인'}
            </button>
            
            <div>
                {isLogin ?(
                    <h1>로그인 성공! 환영합니다.</h1>
                ) :(
                    <h2>로그인이 필요합니다.</h2>
                )} 
            </div>
        </div>
    );
}

export default Name;