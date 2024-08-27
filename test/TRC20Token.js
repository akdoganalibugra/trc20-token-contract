const { expect } = require("chai");

describe("TRC20Token", function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const TRC20Token = await ethers.getContractFactory("TRC20Token");
        const trc20Token = await TRC20Token.deploy();
        const ownerBalance = await trc20Token.balanceOf(owner.address);
        expect(await trc20Token.totalSupply()).to.equal(ownerBalance);
    });
});
