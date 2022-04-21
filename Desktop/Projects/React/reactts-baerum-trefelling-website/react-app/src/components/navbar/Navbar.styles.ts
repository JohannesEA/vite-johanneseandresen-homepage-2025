import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
0%{
    right: -100%;
}
50%{
    right: -50%;
}
100%{
    right: 0;
}
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--color--primary);
  z-index: 1000000;

  .navbar__inner-container {
    z-index: 1000000;
    position: relative;
    width: 100%;
    max-width: var(--max--section--width);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    background-color: var(--color--primary);

    @media (min-width: 800px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }

  .navbar__links {
    z-index: 1000000;
    position: absolute;
    width: 80%;
    min-height: 100vh;
    top: 4em;
    right: -100%;
    background-color: var(--color--primary);
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;

    @media (min-width: 800px) {
      position: relative;
      width: 100%;
      min-height: auto;
      top: 0;
      margin: 0 auto;
      right: 0;
      background-color: var(--color--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
    }
  }

  .navbar__links--active {
    animation: ${slideInAnimation} 0.3s linear forwards;
  }

  .navbar__link {
    cursor: pointer;
    margin: 10px;
    color: var(--color--light);
    font-size: clamp(1rem, 4vw, 1.2rem);

    &:hover {
      color: var(--color--secondary);
    }
  }

  .navbar__logo {
    width: 100%;
    max-width: 4em;

    @media (min-width: 800px) {
      max-width: 6em;
    }
  }
`;
