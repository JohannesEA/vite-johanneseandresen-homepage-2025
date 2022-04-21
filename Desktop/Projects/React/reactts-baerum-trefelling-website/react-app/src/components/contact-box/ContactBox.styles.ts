import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.5em;
  padding: 0.5em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 90%;
  max-width: 30em;
  min-height: 15em;

  .contact-box__img {
    width: 100%;
    max-width: 4em;
    height: 4em;
    margin: 1em auto;
    border-radius: 50%;
  }
`;
