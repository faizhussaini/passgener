import { useState } from "react";

function App() {
  const [colour, setColour] = useState("red");

  return (
    <>
      <div className="w-full h-screen " style={{ backgroundColor: colour }}>
        <div className="fixed  flex flex-wrap py-2  text-black bg-white justify-center bottom-12 inset-x-0 px-2">
          <button id="green"  className=" rounded-full px-2 py-2 m-5 bg-green-600 text-white" onClick={()=>{setColour('green')}}>
            GReeN
          </button>
          <button className="px-2 py-2 rounded-full m-5 bg-yellow-300 text-white" onClick={()=>{setColour('yellow')}}>
            yellow
          </button>
          <button className="px-2 py-2 m-5 bg-blue-500 rounded-full text-white" onClick={()=>{setColour('blue')}}>
            Blue
          </button>
          <button className="px-2 py-2 m-5 bg-pink-400 rounded-full text-white" onClick={()=>{setColour('pink')}}>
            Pink
          </button>
          <button className="px-2 py-2 m-5 bg-orange-400 rounded-full text-white" onClick={()=>{setColour('orange')}}>
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
