import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // 엔터키 입력 이벤트
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      alert(`입력한 값: ${text}`);
    }
  };

  return (
    <div className="App">
      <h2>엔터키 입력 시 alert 예제</h2>

      <input
        type="text"
        placeholder="입력 후 엔터키를 눌러보세요"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default App;
