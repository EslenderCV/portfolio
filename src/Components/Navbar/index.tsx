import { Box } from "@mui/material";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const index = () => {
  return (
    <nav>
      <Box
        sx={{
          display: "flex",
          position: "fixed",
          width: "100vw",
          justifyContent: "space-between",
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
            <p>Home</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
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
