import React, { useEffect, useState } from "react";
import { Box, Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ethers } from "ethers";
import splootsNFT from "./SplootsNFT.json";
import { splootsNFTAddress } from "./constants";



const Stats = () => {
  const [mintPrice, setMintPrice] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Connect to the Sepolia network
      const provider = new ethers.providers.JsonRpcProvider(
        "https://mainnet.infura.io/v3/4dbb85c307a6468cac25195a1aa39f31"
      );
      const network = await provider.getNetwork();

      // Get the contract instance
      const contract = new ethers.Contract(
        splootsNFTAddress,
        splootsNFT.abi,
        provider
      );

      // Retrieve the stats from the contract
      console.log("Fetching stats...");

      let mintPrice, totalSupply;
      try {
        mintPrice = await contract.getMintPrice();
        mintPrice = ethers.utils.formatEther(mintPrice); // Convert Wei to Ether
        console.log("Mint Price:", mintPrice);
      } catch (error) {
        console.error("Error fetching mint price:", error);
        mintPrice = 0;
      }

      try {
        totalSupply = await contract.getNumMintedNFTs();
        console.log("Total Minted:", totalSupply.toString());
      } catch (error) {
        console.error("Error fetching total supply:", error);
        totalSupply = 0;
      }

      // Update the state variables with the retrieved values
      setMintPrice(mintPrice);
      setTotalSupply(totalSupply.toString());
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  return (
    <Box bgPosition="center" bgRepeat="no-repeat" bgSize="cover" height="100vh">
      <h1 style={{ color: "black", textAlign: "center" }}>Stats Page</h1>
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
        <Text
          lineHeight="2"
          color="white"
          fontSize="xl"
          fontWeight="bold"
          marginBottom="1rem"
        >
          Current Mint Price: {mintPrice} ETH
        </Text>
        <Text fontSize="xl" fontWeight="bold" marginBottom="1rem" color="white">
          Total Minted: {totalSupply}
        </Text>
        <Box height="30px" /> {/* This is the spacer */}
        <Link href="/" color="#4682B4" textDecoration="underline">
          Go Home
        </Link>
      </Box>
    </Box>
  );
};

export default Stats;
