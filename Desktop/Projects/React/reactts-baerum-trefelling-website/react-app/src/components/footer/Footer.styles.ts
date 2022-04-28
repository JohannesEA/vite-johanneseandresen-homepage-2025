import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 8em;
  background-color: var(--color--primary);
  color: white;

  .footer__inner-container {
    max-width: var(--max--section--width);
    margin: 0 auto;
  }

  .footer__img {
    max-width: 8em;
  }

  .footer__mojo-websites-link {
    width: 100%;
    height: 2em;
    background-color: var(--color--secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0 0 0;
    bottom: 0;
  }
`;
