import styled from "styled-components";

export const Wrapper = styled.div`
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 30em;
  max-width: var(--max--section--width);
  background: url("/assets/images/img2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin: 0 auto;

  .hero__text {
    color: var(--color--light);
    margin-bottom: 0.5em;
  }

  .hero__title {
    color: var(--color--light);
    margin-bottom: 0.5em;
  }

  .hero__text-and-buttons-container {
    padding: 1em;
    position: absolute;
    bottom: 0;
    min-height: 15em;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .hero__buttons {
    text-align: center;
    margin: 0 auto;
    width: 100%;
  }
`;
