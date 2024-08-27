require("dotenv").config();
const fs = require("fs");
const path = require("path");
const TronWeb = require("tronweb");

const tronWeb = new TronWeb({
    fullHost: process.env.TRON_RPC_URL,
    privateKey: process.env.DEPLOYER_PRIVATE_KEY,
});

const deployContract = async () => {
    const contractPath = path.resolve(
        __dirname,
        "../artifacts/contracts/TRC20Token.sol/TRC20Token.json"
    );
    const { abi, bytecode } = JSON.parse(fs.readFileSync(contractPath, "utf8"));

    try {
        const contractInstance = await tronWeb.contract().new({
            abi: abi,
            bytecode: bytecode,
            feeLimit: 1000000000,
            callValue: 0,
            userFeePercentage: 30,
            originEnergyLimit: 10000000,
            parameters: ["Test Token", "TT", 1000000000],
        });

        const hexAddress = contractInstance.address;
        const base58Address = tronWeb.address.fromHex(hexAddress);
        console.log("Contract deployed at address:", base58Address);
    } catch (error) {
        console.error("Deployment failed:", error.message, error.stack);
    }
};

deployContract()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Deployment failed:", error);
        process.exit(1);
    });
