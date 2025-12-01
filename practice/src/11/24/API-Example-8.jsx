import { useEffect, useState } from "react";

function BasicOfAPI7() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [inputId, setInputId] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);

                await new Promise((r) => setTimeout(r, 1500));
                const res = await fetch("https://jsonplaceholder.typicode.com/comments");
                if (!res.ok) throw new Error("네트워크 에러");

                const data = await res.json();
                setPosts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) return <p>로딩 중 입니다....</p>;
    if (error) return <p style={{ color: "red" }}>에러발생: {error}</p>;
    if (posts.length === 0) return <p>데이터가 없습니다.</p>;

    const selectedPost = posts.find((post) => post.id === Number(inputId));

    return (
        <div>
            <h1>게시글 검색</h1>

            <input
                type="number"
                placeholder="ID 입력"
                value={inputId}
                onChange={(e) => setInputId(e.target.value)}
            />

            <hr />

            {selectedPost && (
                <div style={{ border: "1px solid #ccc", padding: "10px" }}>
                    <p>ID: {selectedPost.id}</p>
                    <h3>{selectedPost.name}</h3>
                    <p>{selectedPost.email}</p>
                    <p>{selectedPost.body}</p>
                </div>
            )}
        </div>
    );
}

export default BasicOfAPI7;
