import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0.5em;
  min-height: 25em;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  .service-box__img {
    width: 100%;
    max-width: 4em;
    height: 4em;

    margin: 1em auto;
    border-radius: 50%;
  }

  .service-box__points-container {
    width: 80%;
    margin: 1em auto;
  }

  .service-box__points {
    margin: 0 auto;
  }

  .service-box__points li {
    font-size: clamp(0.8rem, 4vw, 1.5rem);
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0.5em auto;
  }

  .service-box__points li:before {
    content: "🪵";
    width: "10px";
    margin-right: var(--margin-small);
  }
`;
