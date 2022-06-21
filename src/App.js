import "./App.css";
import { useEffect } from "react";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import styled from "styled-components";

export default function App() {
  return (
    <CardMain>
      <Cards
        number={"1234123412341234"}
        name={"name"}
        expiry={"2010"}
        cvc={"123"}
        focus={"name"}
      />
      <form>
        <label>Full Name</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Your name'
        />
        <label>Card Number</label>
        <input
          type='number'
          name='number'
          id='number'
          placeholder='1234 1234 1234 1234'
        />
        <label>Expiration</label>
        <input
          type='number'
          name='expiry'
          id='expiry'
          placeholder='MM/YY'
        />
        <label>CVV</label>
        <input
          type='password'
          name='cvc'
          id='cvc'
          placeholder='***'
        />
        <label>Zip Code</label>
        <input
          type='number'
          name='zip-code'
          id='zip-code'
          placeholder='3615'
        />

        <div>
          <button>Confirm Payment</button>
          <span>You verify that this info is correct</span>
        </div>
      </form>
    </CardMain>
  );
}

const CardMain = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: #fbfbfb;
`;
