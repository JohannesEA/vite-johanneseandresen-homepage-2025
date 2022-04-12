import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 2em auto 0 auto;

  @media (min-width: 800px) {
    margin: 5em auto 0 auto;
  }
  .services__box-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 60em;
    margin: 1em auto 0 auto;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }
`;
