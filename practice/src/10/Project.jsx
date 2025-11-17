import {useState} from'react';

function Name2(){
    const [isLogin,setIsLogin]=useState(false);

    let message;
    if(isLogin){
        message=<h2>로그인 성공! 환영합니다</h2>;
    } else{
        message =<h2>로그인이 필요합니다.</h2>;
    }
    return (
        <div>
            <button onClick={()=> setIsLogin(prev=>!prev)}>
                {isLogin ?'로그아웃':'로그인'}
            </button>
            {message}
        </div>
    );
    }
export default Name2;