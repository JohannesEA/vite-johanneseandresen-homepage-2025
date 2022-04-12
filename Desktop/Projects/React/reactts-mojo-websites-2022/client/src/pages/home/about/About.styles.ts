import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  min-height: 25em;
  margin: 0 auto;
  padding-top: 2em;
  padding-bottom: 1em;
  width: 100%;
  max-width: var(--max--section--width);
  background-color: var(--color--primary);
  @media (min-width: 800px) {
    min-height: 30em;
  }

  .about__title {
    color: var(--color--light);
  }

  .about__title--process {
    margin-top: 1em;
    margin-bottom: 1em;
  }

  .about__text {
    margin: 1em auto;
    color: var(--color--light);
    width: 90%;
  }

  .about__process-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    margin: 0 auto 1em auto;

    @media (min-width: 800px) {
      flex-direction: row;
    }
  }
`;
