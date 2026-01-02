import React, { useState } from "react";

const App = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  console.log('rating',rating);
  console.log('hover',hover);
  console.log('(rating && hover) || hover',(rating && hover) || hover)

  return (
    <div className="text-center flex flex-col gap-5">
      <h1>Star Rating</h1>
      <div>
        {[1, 2, 3, 4, 5].map((item,index) => (
          <button
            key={index}
            onClick={() => setRating(item)}
            onMouseOver={()=>setHover(item)}
            onMouseLeave={()=>setHover(rating)}
            className="bg-transparent border-0 outline-none cursor-pointer"
          >
            <span className={`m-1.5 text-4xl ${item<=(rating  || hover) ? 'text-black':'text-zinc-300'}`}>&#9733;</span>
          </button>
        ))
        }
      </div>
    </div>
  );
};

export default App;
