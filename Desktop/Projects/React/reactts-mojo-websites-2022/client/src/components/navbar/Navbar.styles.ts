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
  top: 0;
  height: 5em;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
  background-color: var(--color--light);

  .active {
    border-bottom: 2px solid var(--color--dark);
  }

  .logo-active {
    border-bottom: none;
  }

  .navbar__inner-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
    z-index: 100;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    height: var(--min-section-height);
    position: absolute;
    top: 80px;
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

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }
  &:hover:before {
    visibility: visible;
    width: 100%;
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
