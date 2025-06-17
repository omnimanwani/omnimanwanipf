import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* align items at top */
  background: transparent;

  .hero-text {
    flex: 1;

    & > p {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 7rem;
      margin: 0;
    }

    h3 {
      color: var(--green);
      margin: 1rem 0;
    }

    p.small-resume {
      margin-bottom: 0rem;
    }

    .button {
      margin-top: 2rem;
      padding: 1.4rem 6rem;
      font-size: 1.6rem;
      cursor: pointer;
      border-radius: 6px;

      /* center button horizontally */
      display: inline-block;
      text-align: center;
      /* To center when block level */
      @media (max-width: 960px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1.5rem;
      padding-top: 5rem;
      padding-left: 0;

      img,
      span {
        width: 3.5rem;
        height: 3.5rem;
        font-size: 3rem;
        cursor: pointer;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }

      @media (max-width: 960px) {
        justify-content: center;
      }
    }
  }

  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 500px;
      width: 100%;
      height: auto;
      border-radius: 8px;
      transition: filter 0.3s ease;

      &:hover {
        filter: brightness(1.05);
      }
    }
  }

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding-top: 10%;

    .hero-text {
      text-align: center;

      h1 {
        font-size: 5rem;
      }

      .button {
        margin-top: 3rem;
      }

      .social-media {
        padding-top: 3rem;
      }
    }

    .hero-image {
      margin-top: 3rem;
      max-width: 100%;
      img {
        max-width: 400px;
      }
    }
  }

  @media (max-width: 600px) {
    padding-top: 35%;

    .hero-text {
      & > p {
        font-size: 1.6rem;
      }

      h3 {
        font-size: 1.8rem;
      }

      h1 {
        font-size: 4rem;
      }
    }

    .hero-image {
      img {
        max-width: 300px;
      }
    }
  }

  @media (max-width: 480px) {
    padding-top: 45%;

    .hero-text {
      h1 {
        font-size: 3.5rem;
      }

      p,
      h3 {
        font-size: 1.4rem;
      }
    }

    .hero-image {
      img {
        max-width: 332px;
      }
    }
  }
`;
