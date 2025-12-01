import { useEffect,useState } from "react";

function BasicOfAPI4(){
    const [posts,setPosts]=useState([]);
    const [loading,setLoading]=useState([]);
    const [error,setError]=useState(null);

    useEffect(()=>{
        async function fetchData() {
            try{
                setLoading(true);
                
                await new Promise((r)=>setTimeout(r,1500));
                const res=await fetch("https://jsonplaceholder.typicode.com/comments");
                if(!res.ok){
                    throw new Error("네트워크 에러");
                }
                
                const data=await res.json();
                setPosts(data);
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    if(loading)return<p>로딩 중 입니다....</p>;
    if(error)return<p style={{color:"red"}}>에러발생:{error}</p>;
    if(posts.length===0)return<p>데이터가 없습니다.</p>;

    return(
        <div>
            <h1>게시글 목록</h1>

            {posts
            .filter((post)=>post.id<11)//
            .map((post)=>(
                <div
                key={post.id}
                style={{
                    border:"1px solid #ccc",
                    padding:"10px",
                    marginTop:"10px",
                }}
                >
                    <p1>{post.id}</p1>
                    <h3>{post.name}</h3>
                    <p>{post.email}</p>
                    <h1>{post.body}</h1>
                    </div>
            ))}
        </div>
    );
}

export default BasicOfAPI4;