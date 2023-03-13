import { Web3Button } from "@web3modal/react";
import { useAccount, useContract, useSigner, useBalance } from "wagmi";

function HomePage() {
  const { address, isConnected } = useAccount();
  const { data, isError, isLoading } = useBalance({
    address, // Your address
    chainId: 97, // BSC testet
    token: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7', // BUSD Token
  });
  const signer = useSigner();

  console.log("account", { address, signer: signer.data, balances: data });
  return <Web3Button />;
}

export default HomePage;
