import styled, { keyframes } from "styled-components";

const box_slide = keyframes`
  0% {
    left: 0;
    width: 0%;
  }
  50% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0%;
  }
  `;

const text__appear = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
  `;

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

  .hero__modal-overlay {
    margin-top: 2em;
  }

  .hero__container {
    margin-top: 5em;
    background-image: url("/assets/images/img7.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    min-height: 40em;
  }

  .hero__text-container {
    margin: 0 auto;
    background-color: transparent;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
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
    opacity: 0;
    animation: ${text__appear} 1.5s linear forwards;
    animation-delay: 0.5s;
  }

  .hero__logo--title--mojo {
    opacity: 0;
    animation: ${text__appear} 1.5s linear forwards;
    animation-delay: 2s;
  }

  .hero__text-container--animation {
    display: flex;
    position: relative;
  }

  .animation--one {
    position: absolute;
    background-color: white;
    height: 100%;
    width: 0%;
    animation: ${box_slide} 1s linear forwards;
  }

  .animation--two {
    position: absolute;
    background-color: white;
    height: 100%;
    width: 0;
    animation: ${box_slide} 1.5s linear forwards;
    animation-delay: 1s;
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
  .hero__button--active {
    margin-top: 5em;
  }
`;
