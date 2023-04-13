import React, { useState } from "react";

const MetaMaskConnection = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      setErrorMsg("Install MeatMask please!");
    }
  };

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
  };

  return (
    <div>
      <h1>MetMask Wallet Connection</h1>
      <button
        type="button"
        style={{ background: "red" }}
        onClick={connectWallet}
      >
        Connect Wallet Button
      </button>
      <h3>Address:{defaultAccount}</h3>
      <h3>Balance:$</h3>
      <p>{errorMsg}</p>
    </div>
  );
};

export default MetaMaskConnection;
