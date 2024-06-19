import Navbar from "../src/Components/Navbar";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
function App() {
  const [page, setPage] = useState("home");
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsOnTop(true);
        setPage("home");
      }

      if (window.scrollY !== 0) setIsOnTop(false);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="app">
        <Navbar isOnTop={isOnTop} page={page} setPage={setPage} />
        <Home page={page} setPage={setPage} />
        <Skills />
      </div>
    </>
  );
}

export default App;
