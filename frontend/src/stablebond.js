import { StablebondProgram } from "@etherfuse/stablebond-sdk";

// Configure the SDK with RPC endpoint and wallet
export const setupStablebondProgram = (rpcEndpoint, wallet) => {
    return new StablebondProgram(rpcEndpoint, wallet);
};
