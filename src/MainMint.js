import React from "react";
import splootsvid from "./assets/video/splootsvid_final.mp4";
import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { ethers } from "ethers";
import splootsNFT from "./SplootsNFT.json";
import { splootsNFTAddress } from "./constants";





const MainMint = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        splootsNFTAddress,
        splootsNFT.abi,
        signer
      );
      try {
        // Get the current mint price from the contract
        const mintPrice = await contract.getMintPrice();

        const response = await contract.mint(
          ethers.BigNumber.from(mintAmount),
          {
            // Use the fetched mintPrice for the value
            value: mintPrice.mul(ethers.BigNumber.from(mintAmount)),
          }
        );
        console.log("response: ", response);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  async function handleWhitelist() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        splootsNFTAddress,
        splootsNFT.abi,
        signer
      );
      try {
        // Get the current mint price from the contract
        const claimMint = await contract.claimMint();

        console.log("claimMint: ", claimMint);
      } catch (err) {
        console.log("error: ", err);
      }
    }
  }

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 1) return;
    setMintAmount(mintAmount + 1);
  };

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      minHeight="100vh"
      overflowY="auto"
    >
      <Box width="520px">
        <div>
          <Text fontSize="48px" textShadow="0 5px #000000">
            Sploots
          </Text>
          <Text
            fontSize="30px"
            textShadow="0 2px 2px #000000"
            fontFamily="VT323"
            letterSpacing="-5.5%"
          >
            You miss 100% of the sploots you don't take
          </Text>

          <Text
            fontSize="40px"
            textShadow="0 2px 2px #000000"
            fontFamily="VT323"
            letterSpacing="-5.5%"
            fontStyle="italic"
            style={{
              background:
                "-webkit-linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            FREE MINT COMING SOON!!!
          </Text>

          <video width="500" height="500" autoPlay loop muted controls>
            <source src={splootsvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* enable the mint button after the whitelist has ended */}

        {/* {isConnected ? (
          <div>
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="25px"
              marginBottom="50px"
              onClick={handleMint}
            >
              Mint Now
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
            paddingBottom="50px"
          >
            Must be connected to mint.
          </Text>
        )} */}

        {/* disable the claim whitelist button after the whitelist has ended */}

        {isConnected ? (
          <div>
            <Button
              backgroundColor="#D6517D"
              borderRadius="5px"
              boxShadow="0px 2px 2px 1px #0F0F0F"
              color="white"
              cursor="pointer"
              fontFamily="inherit"
              padding="15px"
              marginTop="25px"
              marginBottom="50px"
              onClick={handleWhitelist}
            >
              Claim Whitelist
            </Button>
          </div>
        ) : (
          <Text
            marginTop="70px"
            fontSize="30px"
            letterSpacing="-5.5%"
            fontFamily="VT323"
            textShadow="0 3px #000000"
            color="#D6517D"
            paddingBottom="50px"
          >
            Must be connected to claim whitelist.
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
