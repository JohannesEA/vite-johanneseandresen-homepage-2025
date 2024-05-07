import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 90%;
  max-width: 15em;
  min-height: 10em;
  margin: 1em auto;
  box-shadow: var(--box--shadow);
  background-color: transparent;
  padding-bottom: 1em;

  .imageslider-box__img {
    width: 100%;
    max-width: 15em;
    margin: 0 auto;
  }

  .imageslider-box__title {
    color: var(--color--dark);
    width: 90%;
    margin: 10px auto;
    max-width: 18em;
  }

  .imageslider-box__link {
    color: var(--color--dark);
    border-bottom: 1px solid var(--color--dark);
    max-width: 10em;
    margin: 0 auto;

    &:hover {
      color: var(--color--dark-hover);
    }
  }
`;
