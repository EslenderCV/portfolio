import { AcademicCapIcon } from "@heroicons/react/16/solid";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { SetStateAction, Dispatch } from "react";

const tools = [
  {
    name: "Typescript",
    img: "../../../src/assets/typescriptLogo.png",
  },
  {
    name: "ReactJS",
    img: "../../../src/assets/reactLogo.png",
  },
  {
    name: "Java",
    img: "../../../src/assets/javaLogo.png",
  },
  {
    name: "Spring",
    img: "../../../src/assets/spring.png",
  },
  {
    name: "MongoDB",
    img: "../../../src/assets/mongodbLogo.png",
  },
  {
    name: "Material UI",
    img: "../../../src/assets/muiLogo.png",
  },
  {
    name: "MySQL",
    img: "../../../src/assets/mysqlLogo.png",
  },
  {
    name: "Git",
    img: "../../src/assets/gitLogo.png",
  },
];

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const Toolset = ({ setPage }: Props) => {
  return (
    <motion.section id="toolset" onViewportEnter={() => setPage("toolset")}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <code className="int dev">
          <h2
            style={{
              textAlign: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            Get to know my Toolset!
            <AcademicCapIcon style={{ width: "22px" }} />
          </h2>
        </code>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "auto auto auto auto",
              md: "auto auto auto",
              sm: "auto auto",
              xs: "auto",
            },
            maxHeight: "700px",
            width: "100%",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 1,
            paddingTop: 3,
            marginTop: 6,
            backgroundColor: "#548CA8" /* #FFF7FC */,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {tools.map((item) => {
            return (
              <>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: 2,
                    transition: ".15s",
                    "&:hover": {
                      scale: "1.05",
                      cursor: "pointer",
                    },
                  }}
                >
                  <img src={item.img} height="90px" width="auto" />
                  <p className="title">{item.name}</p>
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </motion.section>
  );
};

export default Toolset;
