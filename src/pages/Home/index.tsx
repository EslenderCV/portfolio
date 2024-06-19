import { Box } from "@mui/material";
import Link from "../../Components/Link";
import { SetStateAction, Dispatch } from "react";

interface Props {
  page: string;
  setPage: Dispatch<SetStateAction<string>>;
}

const Home = ({ page, setPage }: Props) => {
  return (
    <section id="home">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "20px 10px 10px 10px",
          alignItems: "center",
          height: "89vh",
          marginTop: "88x",
        }}
      >
        <Box
          sx={{
            width: "600px",
            height: "300px",
          }}
        >
          <code className="int">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  color: "#028391",
                }}
              >
                &#60;/&#62; Full-Stack Developer
              </h2>
              <p>
                Hello and welcome! I'm Eslender, a dedicated full stack
                developer deeply enthusiastic about crafting robust web
                applications and delivering seamless user experiences. I thrive
                on tackling challenges and continuously expanding my skills to
                create innovative solutions.
              </p>
              <p>
                Take a look at my{" "}
                <u>
                  <Link pageName="skills" page={page} setPage={setPage} />
                </u>{" "}
                and{" "}
                <u>
                  <Link pageName="projects" page={page} setPage={setPage} />
                </u>
                .
              </p>
            </Box>
          </code>
        </Box>
        <Box
          sx={{
            background: "#FFF",
            padding: "10px 10px 0px",
            border: "1px solid #000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "7px 7px 5px 5px",
          }}
        >
          <img
            src="../../../src/assets/photo.jpg"
            width="340px"
            className="photo"
          />
          <h2>
            <code>Eslender Cruz</code>
          </h2>
        </Box>
      </Box>
    </section>
  );
};

export default Home;
