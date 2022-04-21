import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 5em auto 2em auto;
  max-width: var(--max--section--width);

  .about__title {
    margin-bottom: 0.5em;
  }

  .about__text {
    margin-bottom: 0.5em;
  }

  .about__content-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 90%;
    margin: 0 auto;
    padding: 0.5em;

    @media (min-width: 800px) {
      flex-direction: row;
      padding: 0 0 0 1em;
    }
  }

  .about__list-container {
    display: flex;
    flex-direction: column;
    margin: 1em auto;
  }

  .about__list {
    margin: 0 auto;
  }

  .about__list ul {
    margin: 0 auto;
  }

  .about__list ul li {
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    list-style-type: none;
    display: flex;
    align-items: center;
  }

  .about__list ul li:before {
    content: "🪵";
    width: "10px";
    margin-right: var(--margin-small);
  }

  .about__img {
    width: 100%;
    max-width: 15em;
  }
`;
