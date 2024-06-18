import Navbar from "../src/Components/Navbar";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <div className="app">
        <Navbar page={page} setPage={setPage} />
      </div>
    </>
  );
}

export default App;
