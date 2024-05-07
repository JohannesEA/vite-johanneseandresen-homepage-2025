import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  min-height: 25em;
  max-height: 80vh;
  padding-top: 0;
  margin: 1em auto;
  width: 90%;
  max-width: 40em;
  background-color: var(--color--light);
  box-shadow: 0.8px 0.8px 0.8px var(--color--secondary),
    0.8px 1.6px 0.8px var(--color--secondary),
    0.8px 2.5px 0.8px var(--color--secondary),
    0.8px 2px 0.8px var(--color--secondary),
    0.8px 2.5px 0.8px var(--color--secondary),
    0.8px 4px 0.8px var(--color--secondary),
    0.8px 4.5px 0.8px var(--color--secondary),
    0.8px 6px 0.8px var(--color--secondary),
    0.8px 6.5px 0.8px var(--color--secondary),
    0.8px 6px 0.8px var(--color--secondary), 0.8px 3px 1px rgba(16, 16, 16, 0.4),
    0.8px 10px 2px rgba(16, 16, 16, 0.2), 0.8px 5px 8px rgba(16, 16, 16, 0.2),
    0.5px 16px 10px rgba(16, 16, 16, 0.4);

  .order-website-modal__close-button {
    cursor: pointer;
    margin: 1em auto;
    min-width: 1em;
    min-height: 1em;
  }

  .order-website-modal-contact__form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    box-shadow: 0px 0px 3px 0px var(--color--primary);
    overflow-y: scroll;
  }

  .order-website-modal-contact__form-text {
    width: 90%;
  }
  .order-website-modal__select {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    max-width: 20em;
    min-width: 5em;
    padding: 0.5em;
    margin: 0.5em auto;
    box-shadow: 0px 0px 2px 0px var(--color--secondary);
    background-color: var(--color--light);

    &:hover {
      box-shadow: 0px 0px 4px 0px var(--color--secondary);
    }

    @media (min-width: 800px) {
      max-width: 12em;
    }
  }

  .order-website-modal__select--information {
    background-color: var(--color--secondary);
  }

  .order-website-modal__select--ecommerce {
    background-color: var(--color--secondary);
  }

  .order-website-modal__img {
    width: 100%;
    max-width: 3em;
  }

  .order-website-modal__select-container {
    width: 90%;
    margin: 0.5em auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }

  .order-website__button {
    &:hover {
      background-color: var(--color--light-hover);
    }
  }
`;
