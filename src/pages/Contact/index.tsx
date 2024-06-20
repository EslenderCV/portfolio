import { UserCircleIcon } from "@heroicons/react/16/solid";
import { Box } from "@mui/material";
import { BiPhoneCall } from "react-icons/bi";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <Box
        sx={{
          margin: "20px",
          width: "93%",
          padding: 2,
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
            Don't be shy, contact me!
            <UserCircleIcon style={{ width: "22px" }} />
          </h2>
        </code>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            gap: 2,
            justifyContent: "center",
            marginTop: "20px",
            fontWeight: "italic",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: 2,
              paddingTop: 0,
              paddingBottom: 0,
              border: "1px solid black",
              borderRadius: 2,
              transition: ".4s",
              height: "40px",
              "&:hover": {
                backgroundColor: "white",
                scale: "1.05",
                cursor: "pointer",
              },
            }}
          >
            <FaMailBulk />
            <p>eslendercruz45@gmail.com</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: 2,
              paddingTop: 0,
              paddingBottom: 0,
              border: "1px solid black",
              borderRadius: 2,
              transition: ".4s",
              height: "40px",
              "&:hover": {
                scale: "1.05",
                cursor: "pointer",
                backgroundColor: "white",
              },
            }}
          >
            <BiPhoneCall />
            <p>+1 829 464-6454</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              padding: 2,
              paddingTop: 0,
              paddingBottom: 0,
              border: "1px solid black",
              borderRadius: 2,
              transition: ".4s",
              height: "40px",
              "&:hover": {
                scale: "1.05",
                cursor: "pointer",
                backgroundColor: "white",
              },
            }}
          >
            <FaLinkedin />
            <p>Eslender Cruz</p>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Contact;
