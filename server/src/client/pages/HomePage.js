import React from "react";

const HomePage = () => {
  return (
    <div>
      <div>HOME</div>
      <button onClick={() => console.log("pressed")}>Press me</button>
    </div>
  );
};

export default { component: HomePage };
