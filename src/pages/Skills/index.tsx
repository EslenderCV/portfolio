import { AcademicCapIcon } from "@heroicons/react/16/solid";
import { Box } from "@mui/material";

const skills = [
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
    name: "Spring Boot",
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
];

const Skills = () => {
  return (
    <section id="skills">
      <Box
        sx={{
          height: "89vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
            Get to know my skills!
            <AcademicCapIcon style={{ width: "22px" }} />
          </h2>
        </code>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            overflow: "hidden",
            gap: 3,
            justifyContent: "center",
            padding: 2,
          }}
        >
          {skills.map((item) => {
            return (
              <>
                <Box>
                  <img src={item.img} height="50px" width="auto" />
                </Box>
              </>
            );
          })}
        </Box>
      </Box>
    </section>
  );
};

export default Skills;
