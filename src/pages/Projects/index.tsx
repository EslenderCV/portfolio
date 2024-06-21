import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import { WrenchIcon } from "@heroicons/react/16/solid";
import Carrousel from "../../Components/Carrousel";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ setPage }: Props) => {
  return (
    <motion.section id="projects" onViewportEnter={() => setPage("projects")}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "left",
        }}
      >
        <code>
          <h2
            className="int dev"
            style={{ fontSize: "22px", display: "flex", alignItems: "center" }}
          >
            These are my projects!
            <WrenchIcon style={{ width: "22px" }} />
          </h2>
        </code>
        <Carrousel />
      </Box>
    </motion.section>
  );
};

export default Projects;
