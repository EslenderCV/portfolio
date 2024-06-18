import { Box } from "@mui/material";

const index = () => {
  return (
    <section id="home">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 50px",
        }}
      >
        {/* <h1 className="nameTitle">
          Eslender <br /> Cruz Valerio
        </h1> */}
        <Box
          sx={{
            background: "#FFF",
            padding: "10px 10px 0px",
            border: "1px solid #000",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px 15px 5px 5px",
          }}
        >
          <img
            src="../../../src/assets/photo.jpg"
            width="400px"
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

export default index;
