import { useState } from "react";
import { sendHitCount } from "./api/endpoints";
import "./App.css";
import Button from "./components/button";
import CountDisplay from "./components/countDisplay";

function App() {
  const [hits, setHits] = useState("");
  const handleButtonClick = async () => {
    let data = await sendHitCount();
    setHits(data.value);
  };

  return (
    <div className="App h-screen px-3 py-16 bg-orange-600">
      <div className="max-w-md mx-auto bg-white p-3 rounded">
        {hits && <CountDisplay hits={hits} />}
        <Button label="Click to Hit API!" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
