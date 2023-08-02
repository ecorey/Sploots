// About.js
import React from "react";
import { Box, Link, Image, Text } from "@chakra-ui/react";
import FairLaunch from "./assets/logos/fairLaunch.png";

const About = () => {
  return (
    <Box
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      height="100vh"
      Repeat="no-repeat"
    >
      <h1>About Page</h1>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        textAlign="center"
        height="100vh"
        paddingX="20%"
        backgroundColor="rgba(0, 0, 0, 0.75)"
        zIndex={-1} // Move the background behind the text
      >
        <Text lineHeight="2" color="white">
          ⸜(*ˊᗜˋ*)⸝ <br /> <br />
          50 Sploots. <br />
          One Sploot per wallet. <br />
          100% Free Mint. <br />
          All personally crafted, no repeats. <br /> <br />
          ⸜(*ˊᗜˋ*)⸝ <br />
        </Text>
        <Box height="50px" /> {/* This is the spacer */}
        <Link href="/" color="#4682B4" textDecoration="underline" marginTop="2">
          Go to Home
        </Link>
        <div style={{ margin: "2rem" }} />
        <Image
          src={FairLaunch}
          boxSize="150px"
          alt="Description of the image"
          marginBottom="4rem" // Adds space at the bottom of the image
        />
        <Text marginTop="2" fontSize="sm" color="white">
          Music by{" "}
          <a
            href="https://pixabay.com/users/ummbrella-26083253/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=84075"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4682B4" }}
          >
            ummbrella
          </a>{" "}
          from{" "}
          <a
            href="https://pixabay.com/music//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=84075"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4682B4" }}
          >
            Pixabay
          </a>
        </Text>
      </Box>
    </Box>
  );
};

export default About;
