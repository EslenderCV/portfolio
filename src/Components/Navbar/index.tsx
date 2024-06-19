import { Box } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "../Link";
import { Dispatch, SetStateAction } from "react";

interface Props {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
  isOnTop: boolean;
}

const index = ({ page, setPage, isOnTop }: Props) => {
  return (
    <nav className="navBar">
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          width: "100vw",
          justifyContent: "space-between",
          zIndex: 30,
          background: "rgb(234, 246, 255)",
          filter: isOnTop
            ? ""
            : "drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            padding: "10px 43px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2 className="title">
              Eslender<span className="dev">.dev</span>
            </h2>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 3,
            }}
          >
            <Link pageName="Home" page={page} setPage={setPage} />
            <Link pageName="Skills" page={page} setPage={setPage} />
            <Link pageName="Projects" page={page} setPage={setPage} />
            <Link pageName="Contact" page={page} setPage={setPage} />
            <p> | </p>
            <a
              href="https://www.linkedin.com/in/eslender-cruz/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a href="https://www.github.com/eslendercv" target="_blank">
              <FaGithub />
            </a>
          </Box>
        </Box>
      </Box>
    </nav>
  );
};

export default index;
