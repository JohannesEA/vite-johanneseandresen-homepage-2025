import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 30em;
  max-width: var(--max--section--width);
  margin: 2em auto 0 auto;

  @media (min-width: 800px) {
    margin: 5em auto 0 auto;
  }
`;
