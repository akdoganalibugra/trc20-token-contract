declare namespace NodeJS {
    export interface ProcessEnv {
        // Project params
        NODE_ENV: "development" | "production";
        PORT?: string;
        MODE?: string;
        PROJECT_NAME: string;

        // Hardhat params
        TRON_RPC_URL: string;
        DEPLOYER_PRIVATE_KEY: string;
    }
}
