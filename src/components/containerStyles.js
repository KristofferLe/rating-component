import styled from "styled-components";

export const StyledContainer = styled.section`
  height: 416px;
  width: 100%;
  max-width: 412px;
  margin: 32px;
  border-radius: 12px;
  background: radial-gradient(
    circle at top right,
    #262e38,
    rgba(105, 105, 105, 0.2)
  );
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
`;

export const Rate = styled.article`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  i {
    height: 48px;
    width: 48px;
    color: #fc7614;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    border-radius: 50%;
    background-color: #262e38;
  }

  .message {
    color: white;
    font-size: 1.8rem;
    letter-spacing: 1px;
    transform: translateY(10px);
  }

  .description {
    color: #969fad;
    line-height: 175%;
    font-weight: 500;
    font-size: 15px;
  }

  .rating-numbers {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    button {
      height: 51px;
      width: 51px;
      border-radius: 50%;
      background-color: #262e38;
      color: rgba(255, 255, 255, 0.4);
      border: none;
      cursor: pointer;
      &:hover {
        background-color: white;
        color: #000;
      }
      &:active {
        background-color: #fc7614;
      }
      &.active {
        color: black;
        background-color: white;
      }
      transition: 0.4s ease-in-out;
    }
  }
  .submit {
    width: 100%;
    padding: 14px;
    border-radius: 24px;
    border: none;
    background-color: #fc7614;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: white;
    }
    transition: 0.4s ease-in-out;
  }
`;

export const ThankYou = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  img {
    height: 96px;
    width: 144px;
  }

  span {
    background-color: #262e38;
    padding: 4px 12px;
    border-radius: 24px;
    font-size: 14px;
    color: #fc7614;
    text-align: center;
    height: 32px;
    display: grid;
    place-items: center;
    letter-spacing: 0.5px;
  }

  .thanks {
    color: white;
    font-size: 1.8rem;
    letter-spacing: 1px;
    transform: translateY(10px);
  }

  .message {
    text-align: center;
    color: #969fad;
    line-height: 175%;
    font-weight: 400;
    font-size: 15px;
  }
`;
