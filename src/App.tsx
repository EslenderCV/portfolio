import Navbar from "../src/Components/Navbar";
import { useState } from "react";

const [page, setPage] = useState("");

function App() {
  return (
    <>
      <div className="app">
        <Navbar page={page} />
      </div>
    </>
  );
}

export default App;
