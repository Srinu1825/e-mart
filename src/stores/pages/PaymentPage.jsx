import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! ");
    navigate("/"); 
  };

  if (!product) {
    return <h2>No product selected for payment</h2>;
  }

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <div className="payment-product">
        <img src={product.image} alt={product.model} width="150" />
        <h2>{product.company} {product.brand}</h2>
        <h3>{product.model}</h3>
        <h3>Price: ₹{product.price}</h3>
      </div>

      <form className="payment-form" onSubmit={handlePayment}>
        <div>
          <label>Card Number:</label>
          <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx" required />
        </div>
        <div>
          <label>Expiry Date:</label>
          <input className="expiry" type="text" placeholder="MM/YY" required />
        </div>
        <div>
          <label>CVV:</label>
          <input className="cvv" type="password" placeholder="***" required />
        </div>
        <div>
          <label>Name on Card:</label>
          <input type="text" placeholder="John Doe" required />
        </div>
        <button type="submit" className="pay-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
