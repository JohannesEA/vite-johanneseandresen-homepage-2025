import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: var(--max--section--width);
  position: relative;

  .service-info-top__container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color--primary);
    width: 100%;
    padding-top: 9em;
    padding-bottom: 2em;
  }

  .service__top-title,
  .service__top-text {
    color: var(--color--light);
  }

  .service__top-title {
    @media (min-width: 800px) {
      margin-bottom: 1em;
    }
  }

  .service-info-top-inner_container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    min-height: 30em;
    max-height: auto;
    margin: 0 auto;
    border-radius: var(--border-radius);

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }

    @media (prefers-color-scheme: dark) {
      background-color: var(--color-1);
      color: var(--color-text-dark);
    }
  }

  .service-info-top-image-container {
    text-align: center;
    max-width: 300px;

    @media (max-width: 800px) {
      margin: 0 auto var(--margin-xl) auto;
    }
  }

  .service-info-top-image {
    width: 80%;
    height: 80%;
  }

  .service-info-top-text-container {
    width: 90%;
    margin: 0 auto;
  }

  //middle

  .service-info-middle__container {
    margin: 0 auto 80px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    max-width: 600px;
  }

  .service-info-middle__title {
    margin-top: 2em;
    margin-bottom: 1em;
    text-align: center;
  }

  .service-info-middle__container ul li {
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .service-info-middle__container ul li:before {
    content: "☑️";
    width: "10px";
    margin-right: var(--margin-small);
  }

  //bottom
  .service-info-bottom__container {
    min-height: 30em;
    width: min(90%, 100em);
    margin: 2em auto;

    @media (max-width: 500px) {
      margin-bottom: var(--margin-xl);
    }
  }

  .service-info-bottom-title {
    width: min(90%, 100em);
    margin: 0 auto var(--margin-large) auto;
    text-align: center;
  }
`;

export const BackToLastPageButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 6em;
  left: 5%;
  min-height: 30px;
  width: 80%;
  max-width: 120px;
  outline: none;
  border: none;
  background-color: var(--color--secondary);
  color: var(--color--light);
  transition: all 0.5s ease;
  font-size: var(--font-small);
  cursor: pointer;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: var(--color--secondary--hover);
  }
`;

const animationOne = keyframes`
0%{
  opacity:0;
}
100%{
  opacity:1;
}

`;

const animationTwo = keyframes`
0%{
  width:0px;

}
100%{
  width:50px;
}

`;

export const FloatingActionButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: var(--margin-small);
  right: var(--margin-small);
  max-width: 5em;
  height: 50px;
  z-index: 999;
  outline: none;
  border: none;
  background-color: var(--color--secondary);
  color: var(--color--light);
  transition: all 0.5s ease;
  font-size: var(--font-small);
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  animation: ${animationOne} 0.5s linear, ${animationTwo} 0.5s linear;

  &:hover {
    background-color: var(--color--secondary-hover);
  }
`;
