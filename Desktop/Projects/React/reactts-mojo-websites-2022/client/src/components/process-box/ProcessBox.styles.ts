import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 80%;
  max-width: 25em;
  margin: 1em auto;

  .process-box__img {
    width: 100;
    max-width: 4em;
    margin: 0 auto;
  }

  .process-box__text {
    color: var(--color--light);
    width: 90%;
    margin: 0.3em auto 0.5em auto;
    max-width: 18em;
  }

  .process-box__link {
    color: var(--color--light);
    border-bottom: 1px solid var(--color--light);
    max-width: 10em;
    margin: 0.5em auto;
  }
`;
