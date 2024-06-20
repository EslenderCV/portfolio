import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ setPage }: Props) => {
  return (
    <motion.section id="projects" onViewportEnter={() => setPage("projects")}>
      <code>
        <h2 className="int dev" style={{ fontSize: "22px" }}>
          These are my projects!
        </h2>
      </code>
    </motion.section>
  );
};

export default Projects;
