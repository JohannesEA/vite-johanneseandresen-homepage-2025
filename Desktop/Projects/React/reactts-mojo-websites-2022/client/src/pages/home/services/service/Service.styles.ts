import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--max--section--width);
  .service-info-top__container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color--primary);
    width: 100%;
    padding-top: 2em;
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
