import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background-color: var(--color--dark);
  padding-top: 1em;
  padding-bottom: 0.5em;
  min-height: 10em;

  .footer__inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    height: 100%;
    min-height: 10em;
    max-width: var(--max--section--width);
  }

  .footer__inner-container--top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .footer__inner-container--bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .footer__text {
    color: var(--color--light);
  }

  .footer__logo {
    color: var(--color--light);
  }
  .footer__item {
    margin: 1em auto;

    @media (min-width: 800px) {
      margin: 0;
    }
  }
`;
