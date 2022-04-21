import styled from "styled-components";

export const Wrapper = styled.div`
  .fab__button {
    z-index: 999;
    position: fixed;
    bottom: 1em;
    right: 1em;
    cursor: pointer;

    &:hover {
      color: var(--color--secondary--hover);
    }
  }
`;
