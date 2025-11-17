import React, { useState } from "react";

function Increase2() {
  const [showMajor, setShowMajor] = useState(false);

  const name = "권민기";
  const major = "항공소프트웨어공학과";

  const handleClick = () => {
    setShowMajor(true);
  };

  return (
    <div>
      <h1>{name}</h1>

      {showMajor && <h2>{major}</h2>}

      <button onClick={handleClick}>변환</button>
    </div>
  );
}

export default Increase2;
