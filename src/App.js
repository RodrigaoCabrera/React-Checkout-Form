import "./App.css";

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
      <Form>
        <InputContainer>
          <label>Full Name</label>
          <input type="text" name="name" id="name" placeholder="Your name" />
        </InputContainer>
        <InputContainer>
          <label>Card Number</label>
          <input
            type="number"
            name="number"
            id="number"
            placeholder="1234 1234 1234 1234"
          />
        </InputContainer>
        <ExpirationCvv>
          <InputContainer>
            <label>Expiration</label>
            <input
              type="number"
              name="expiry"
              id="expiry"
              placeholder="MM/YY"
            />
          </InputContainer>
          <InputContainer>
            <label>CVV</label>
            <input type="password" name="cvc" id="cvc" placeholder="***" />
          </InputContainer>
        </ExpirationCvv>
        <InputContainer>
          <label>Zip Code</label>
          <input
            type="number"
            name="zip-code"
            id="zip-code"
            placeholder="3615"
          />
        </InputContainer>
        <SubmitContainer>
          <button>Confirm Payment</button>
          <span>You verify that this info is correct</span>
        </SubmitContainer>
      </Form>
    </CardMain>
  );
}

const CardMain = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: #dadada;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: min(319px, 90%);
  margin: 0 auto;
  padding: 32px;
  gap: 24px;
  position: relative;
  background: #ffffff;
  border-radius: 8px;
`;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ExpirationCvv = styled.div`
  display: flex;
  gap: 20px;
  & input {
    width: 100%;
  }
`;

const SubmitContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
