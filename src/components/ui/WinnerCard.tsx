import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card flex flex-col">
        <h4>Congratulations</h4>
        <p>
          As part of a team internship, I led the development of{" "}
          <a
            className="text-blue-600 font-bold cursor-pointer"
            href="https://calmify-ai-mental-health-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Calmify
          </a>{" "}
          , an AI-powered mental health support app, which was chosen as the
          Best App by the Go2Cod internship community. I served as the team
          leader, built the entire backend, and contributed to the frontend
          development, ensuring a seamless user experience.
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
    padding: 15px 5px;
    border: solid;
    border-color: rgb(255, 255, 255, 0.2);
    border-width: 1px;
    margin: auto;
    max-width: 500px;
    text-align: center;
    z-index: 0;
  }

  .card p,
  .card h4 {
    position: relative;
    z-index: 1;
    color: white;
  }

  .card p {
    font-size: 18px;
    font-weight: lighter;
    padding: 15px 10px;
  }

  .card h4 {
    font-size: 24px;
    font-weight: normal;
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
    animation: rotBGimg 5s linear infinite;
    transition: all 0.5s linear;
    z-index: 0;
    pointer-events: none;
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
    inset: 2px;
    border-radius: 15px;
    z-index: 0;
    pointer-events: none;
  }
`;

export default Card;
