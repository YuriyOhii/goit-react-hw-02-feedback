import styled from '@emotion/styled';

export const FeedbackSection = styled.section`
  width: 50%;
  padding: 20px;
  border: 2px solid #212121;
  border-radius: 4px;

  line-height: 1.5;
  letter-spacing: 0.02em;
`;

export const Caption = styled.b`
  display: block;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

export const ControlsBox = styled.ul`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  justify-content: center;
  list-style: none;
`;

export const BtnFeedback = styled.button`
  width: 70px;
  height: 20px;

  font-weight: 700;
  font-family: inherit;

  border: none;
  border-radius: 4px;

  background-color: blue;
  color: #fff;

  cursor: pointer;
  outline: none;
  box-shadow: 1px 2px 2px 0 rgb(0 0 0 / 0.5);
  transition: box-shadow 250ms linear;
  :active {
    box-shadow: 2px 5px 2px 0 rgb(0 0 0 / 0.5);
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const StatBox = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;

  list-style: none;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  font-size: 20px;
  font-weight: 700;
`;

export const Tablo = styled.span`
  width: 70px;

  font-weight: 700;
  font-size: 30px;
  line-height: 2, 5;
  text-align: center;
  border: none;
  border-radius: 4px;

  background-color: blue;
  color: #fff;
`;

export const TotalText = styled.p`
  margin: 10px 0 10px 20px;
  font-size: 20px;
  color: #212121;
`;

export const TotalVal = styled.span`
  color: red;
`;
