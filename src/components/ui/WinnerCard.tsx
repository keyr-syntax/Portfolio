import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card flex flex-col">
        <h4>Congratulations</h4>
        <p>
          As part of a team internship, I led the development of{" "}
          <Link
            className="text-blue-600 font-bold"
            to="https://calmify-ai-mental-health-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calmify
          </Link>{" "}
          , an AI-powered mental health support app, which chosen as the Best
          App by the Go2Cod community. I served as the team leader, built the
          entire backend, and contributed to the frontend development, ensuring
          a seamless user experience.
        </p>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 80%;
    height: auto;
    background: #09090b;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
    padding: 15px;
    border: solid;
    border-color: rgb(255, 255, 255, 0.2);
    margin: auto;
    max-width: 500px;
    text-align: center;
  }

  .card p {
    z-index: 1;
    color: white;
    font-size: 16px;
    font-weight: normal;
  }
  .card h4 {
    z-index: 1;
    color: white;
    font-size: 20px;
    font-weight: normal;
    text-decoration: underline;
  }
  .card::before {
    content: "";
    position: absolute;
    width: 100%;
    background-image: linear-gradient(
      180deg,
      rgb(0, 183, 255),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: "";
    position: absolute;
    background: #09090b;
    inset: 5px;
    border-radius: 15px;
  }
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */
`;

export default Card;
