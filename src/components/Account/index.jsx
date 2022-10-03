import React from "react";

const Account = ({ title, amount, amount_description }) => {
  return (
    <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{title}</h3>
        <p class="account-amount">{amount}</p>
        <p class="account-amount-description">{amount_description}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
    </section>
  );
};

export default Account;
