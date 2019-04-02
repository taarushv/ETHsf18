//import Web3 from "web3";

export const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", () => {
      let web3 = window.web3;

      // Checking if Web3 has been injected by the browser (Mist/MetaMask).
      const alreadyInjected = typeof web3 !== "undefined";

      if (alreadyInjected) {
        // Use Mist/MetaMask's provider.
        web3 = new Web3(web3.currentProvider);
        console.log(
          "Injected web3 detected. Provider: ",
          web3.eth.currentProvider
        );
        resolve(web3);
      } else {
        // Fallback to localhost if no web3 injection. We've configured this to
        // use the development console's port by default.
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        web3 = new Web3(provider);
        console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export const checkValidAddress = function(address) {
    if (address == '0x0000000000000000000000000000000000000000' || !web3.utils.isAddress(address)) throw new Error('Address is not valid.');
    return true;
  }
