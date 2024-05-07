import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 80%;
  max-width: 25em;
  margin: 1em auto;
  box-shadow: var(--box--shadow);

  .service-box__img {
    width: 100;
    max-width: 4em;
    margin: 1em auto 0 auto;
  }

  .service-box__title {
    color: var(--color--dark);
    width: 90%;
    margin: 0.3em auto 0.5em auto;
    max-width: 18em;
  }

  .service-box__text {
    color: var(--color--dark);
    width: 90%;
    margin: 1em auto 0.5em auto;
    max-width: 18em;
  }

  .service-box__button {
    width: 90%;
    max-width: 18em;
    margin: 0.5em auto;
  }

  .service-box__link {
    cursor: pointer;
    color: var(--color--dark);
    border-bottom: 1px solid var(--color--dark);
    max-width: 10em;
    margin: 0.5em auto;

    &:hover {
      color: var(--color--dark-hover);
    }
  }
`;
