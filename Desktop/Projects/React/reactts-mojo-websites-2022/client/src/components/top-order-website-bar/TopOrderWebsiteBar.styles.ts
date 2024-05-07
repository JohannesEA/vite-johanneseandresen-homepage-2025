import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 2em;
  width: 100%;

  background-color: var(--color--primary);
  z-index: 1000;

  .top-order-website-bar__link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12em;
    background-color: var(--color--primary);
    cursor: pointer;
    color: var(--color--light);
    border-bottom: 1px solid var(--color--light);
    margin: 0.5em auto;
    transition: all 300ms;

    &:hover {
      color: var(--color--light-hover);
    }
  }
`;
