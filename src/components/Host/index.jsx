import React from "react";

import Account from "../Account";
import Profile from "../Profile";

const Host = () => {
  return (
    <main className="main bg-dark">
      <Profile />
      <h2 class="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        amount_description="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        amount_description="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        amount_description="Current Balance"
      />
    </main>
  );
};

export default Host;
