import { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const Projects = ({ setPage }: Props) => {
  return (
    <motion.section
      id="projects"
      onViewportEnter={() => setPage("projects")}
    ></motion.section>
  );
};

export default Projects;
