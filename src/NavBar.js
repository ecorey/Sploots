import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link as ChakraLink,
  Spacer,
} from "@chakra-ui/react";
import Twitter from "./assets/social-media-icons/twitter.png";
import { Link } from "react-router-dom";

const NavBar = ({ accounts, setAccounts }) => {
  // will detect if account is connected
  const isConnected = Boolean(accounts[0]);

  // async will allow function to run 'out' of order in code
  async function connectAccount() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  }

  const navStyle = {
    color: "#4682B4",
    textDecoration: "none",
    marginRight: "1rem",
  };

  return (
    <Flex justify="space-between" align="center" padding="30px">
      {/* Left Side - social media */}
      <Flex justify="flex-start" width="40%" padding="0 75px">
        <ChakraLink
          href="https://twitter.com/splootsnft/status/1670083936955908097?s=20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Twitter} boxSize="42px" margin="0 15px" />
        </ChakraLink>
      </Flex>

      {/* Right Side - Sections and Connect */}
      <Flex align="center" width="40%" padding="30px">
        <Spacer />
        <Link to="/about" style={navStyle}>
          <Box ml="auto">About</Box>
          <span
            role="img"
            aria-label="orange-fruit"
            style={{ marginLeft: "5px" }}
          >
            🍊
          </span>
        </Link>

        <Link to="/stats" style={navStyle}>
          <Box ml="1rem">Stats</Box>
          <span
            role="img"
            aria-label="orange-fruit"
            style={{ marginLeft: "5px" }}
          >
            🍊
          </span>
        </Link>

        {/* Connect */}
        {isConnected ? (
          <Box margin="0 15px">Connected</Box>
        ) : (
          <Button
            backgroundColor="#D6517D"
            borderRadius="5px"
            boxShadow="0px 2px 2px 1px #0F0F0F"
            color="white"
            cursor="pointer"
            fontFamily="inherit"
            padding="15px"
            margin="0 15px"
            onClick={connectAccount}
          >
            Connect
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default NavBar;
