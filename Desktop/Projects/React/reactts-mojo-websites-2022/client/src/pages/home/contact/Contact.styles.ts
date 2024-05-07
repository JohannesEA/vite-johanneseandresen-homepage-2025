import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 2em;
  padding-bottom: 2em;
  width: 100%;

  max-width: var(--max--section--width);
  margin: 2em auto 0 auto;
  background-color: var(--color--primary);

  .contact__title {
    color: var(--color--light);
  }

  .contact__text {
    color: var(--color--light);
    margin: 1em auto;
    width: 90%;
  }

  .contact-info__container {
    margin: 1em auto;
    box-shadow: 1px 2px 1px 1px var(--color--primary);
    border-radius: var(--border-radius);
    width: 90%;
  }

  .contact__form {
    padding-top: 1em;
    padding-bottom: 1em;
    width: 90%;
    margin: 1em auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--color--light);
    box-shadow: var(--box--shadow);
  }

  .contact__button {
    background-color: rgba(0, 0, 0, 0.7);
    color: var(--color--light);

    &:hover {
      background-color: rgba(80, 80, 80, 0.7);
    }
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  margin: 0.5em auto;
`;
export const ConfirmMessage = styled.p`
  font-size: 1.2rem;
  color: var(--color-text-dark)
  margin: 0.5em auto;
`;
