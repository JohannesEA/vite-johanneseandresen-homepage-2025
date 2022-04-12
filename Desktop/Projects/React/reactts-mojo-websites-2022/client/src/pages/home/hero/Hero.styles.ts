import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: var(--max--section--width);
  min-height: 35em;
  position: relative;
  margin: 0 auto;

  .hero__container {
    background-image: url("/assets/images/img5.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* filter: blur(8px);
    -webkit-filter: blur(3px); */
    height: 100%;
    width: 100%;
    min-height: 35em;
  }

  .hero__text-container {
    margin: 4em auto 0 auto;
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 31em;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .hero__logo--title {
    color: var(--color--light);
    font-weight: bold;
  }

  .hero__logo--title--welcome {
    font-weight: 300;
  }

  .hero__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2em auto 0 auto;
    width: 100%;
  }

  .hero__button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3em;
    width: 80%;
    max-width: 20em;
  }
`;
