import styled, { keyframes } from "styled-components";

//animations
export const animationTwo = keyframes`
0%{
  right: -100%;
},
100%{
  right: 0;
}
`;

export const animationOne = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;
  left: 0;
}
`;

//styles

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 2em;
  height: 5em;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
  background-color: var(--color--light);

  .active {
    box-shadow: rgba(27, 31, 35, 0.4) 0px 1px 0px,
      rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  }

  .logo-active {
    border-bottom: none;
    background-color: transparent;
    box-shadow: none;
  }

  .navbar__inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    max-width: var(--max--section--width);
    margin: 0 auto;
  }
`;

interface MenuProps {
  isOpen: boolean;
}

export const Menu = styled.div<MenuProps>`
  display: flex;
  flex-direction: row;
  transition: all 1s ease;
  background-color: var(--color--light);
  @media (max-width: 800px) {
    z-index: 99999;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    height: var(--min-section-height);
    position: fixed;
    top: 2em;
    left: auto;
    animation: ${animationTwo} 0.3s linear, ${animationOne} 0.3s linear;
    right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  }
`;

export const Menulink = styled.p`
  margin: auto var(--margin-medium);
  font-size: var(--font-medium);
  cursor: pointer;
  color: var(--color--dark);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: rgba(27, 31, 35, 0.4) 0px 1px 0px,
      rgba(255, 255, 255, 0.25) 0px 1px 0px inset;
  }

  @media (max-width: 800px) {
    margin: var(--margin-medium) auto;
  }
`;

export const HamburgerContainer = styled.div`
  margin: auto var(--margin-medium);
  margin-right: var(--margin-large) !important;
  @media (max-width: 800px) {
    margin: var(--margin-medium) auto;
  }
`;
