import { AcademicCapIcon } from "@heroicons/react/16/solid";
import { Box } from "@mui/material";

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
  {
    name: "Git",
    img: "../../src/assets/gitLogo.png",
  },
];

const Toolset = () => {
  return (
    <section id="toolset">
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
              sm: "auto auto",
              xs: "auto",
            },
            maxHeight: "700px",
            width: "80%",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 1,
            paddingTop: 3,
            marginTop: 6,
            backgroundColor: "#EEEEFF" /* #FFF7FC */,
            borderRadius: 4,
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
                      fontWeight: "bold",
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
    </section>
  );
};

export default Toolset;
