import Navbar from "../src/Components/Navbar";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Toolset from "./pages/Toolset";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  const [page, setPage] = useState("home");
  const [isOnTop, setIsOnTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsOnTop(true);
        setPage("home");
      }
      console.log(window.scrollY);
      if (window.scrollY !== 0) {
        setIsOnTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="app">
        <Navbar isOnTop={isOnTop} page={page} setPage={setPage} />
        <Home page={page} setPage={setPage} />
        <Toolset setPage={setPage} />
        <Projects setPage={setPage} />
        <Contact setPage={setPage} />
      </div>
    </>
  );
}

export default App;
