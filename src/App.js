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
          <SubmitButton>Confirm Payment</SubmitButton>
          <Message>You verify that this info is correct</Message>
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
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;

  & input {
    height: 40px;
    border: 1px solid #a7bac5;
    border-radius: 8px;
    padding: 12px;
  }

  & input:focus-visible {
    outline: none;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.4);
  }
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
  gap: 5px;
`;

const SubmitButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  background: #6e41e2;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-weight: 500;
  font-size: 14px;
`;

const Message = styled.span`
  font-weight: 300;
  font-size: 12px;
  color: #5f6974;
  text-align: center;
`;
