import { useState } from "react";
import { sendHitCount } from "./api/endpoints";
import "./App.css";
import Button from "./components/button";

function App() {
  const [hits, setHits] = useState("");
  const handleButtonClick = async () => {
    let data = await sendHitCount();
    setHits(data.value);
  };

  return (
    <div className="App h-screen flex flex-wrap content-center justify-center">
      <div>{hits && <h1>Hits to API: {hits}</h1>}</div>
      <Button label="Click to Hit API!" onClick={handleButtonClick} />
    </div>
  );
}

export default App;
