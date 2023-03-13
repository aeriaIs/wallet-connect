import { Web3Modal } from "@web3modal/react";
import { providers, w3mProvider, w3mConnectors, EthereumClient } from "@web3modal/ethereum";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { arbitrum, bscTestnet, mainnet, polygon } from "wagmi/chains";
import HomePage from "./Homepage";

// Define the chains
const chains = [arbitrum, mainnet, polygon, bscTestnet];
// Define the project id
const projectId = "9ef4da27a2dbe857bd606c824a089e91";

// Configure the chains and the provider
const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
// Create the wagmi client
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
// Create the ethereum client
const ethereumClient = new EthereumClient(wagmiClient, chains);

// Wrap the app with the WagmiConfig and Web3Modal components
export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <HomePage />
      </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
