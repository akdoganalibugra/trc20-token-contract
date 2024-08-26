import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
    solidity: "0.8.24",
    networks: {
        tron: {
            url: process.env.TRON_RPC_URL,
            accounts: [process.env.DEPLOYER_PRIVATE_KEY || ""],
        },
    },
};

export default config;
