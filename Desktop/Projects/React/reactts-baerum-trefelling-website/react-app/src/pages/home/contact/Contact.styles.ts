import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: var(--max--section--width);
  margin: 5em auto 2em auto;

  .contact__inner-container {
    margin: 2em auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .contact__text {
    margin-top: 1em;
    width: 90%;
  }
`;
