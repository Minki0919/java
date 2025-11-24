import {useState} from'react';

function Name1(){
    const [isLogin,setIsLogin,]=useState(false);
    const handleLogin=() => {
        setIsLogin(prev=>!prev);
    }
    return(
        <div>
            <button onClick={handleLogin}>
                {isLogin ? '로그아웃':'로그인'}
            </button>
            {isLogin&&<h2>로그인 성공! 한영합니다.</h2>}
            {!isLogin&&<h2>로그인이 필요합니다.</h2>}
        </div>
    );
}

export default Name1;