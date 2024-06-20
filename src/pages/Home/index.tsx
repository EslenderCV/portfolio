import { Box } from "@mui/material";
import Link from "../../Components/Link";
import { SetStateAction, Dispatch } from "react";
import { TypeAnimation } from "react-type-animation";

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
          alignItems: "center",
          height: "89vh",
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
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <h2 className="dev" style={{ display: "flex", gap: 1 }}>
                <TypeAnimation
                  sequence={[
                    "<Front-end",
                    1000,
                    "<Back-end",
                    1000,
                    "<Full-Stack Developer />",
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                />
              </h2>
              <p>
                Hello and welcome! I'm Eslender, a dedicated full stack
                developer deeply enthusiastic about crafting robust web
                applications and delivering seamless user experiences. I thrive
                on tackling challenges and continuously expanding my Toolset to
                create innovative solutions.
              </p>
              <p>
                Take a look at my{" "}
                <u>
                  <Link pageName="toolset" page={page} setPage={setPage} />
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
