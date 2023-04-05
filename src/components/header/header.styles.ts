import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin: 30px 0px 23px 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  position: absolute;
  width: 49px;
  height: 21px;
  left: 50px;
  top: 32px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #323232;
`;

export const Calendar = styled.div`
  position: relative;
  width: 17px;
  height: 14px;
  left: -3.5px;
  top: 5px;
  border: 1px solid #3d82eb;
  border-radius: 3px 3px 3px 3px;
`;

export const CalendarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3d82eb;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 5px;
  line-height: 6px;
  color: #ffffff;
`;

export const CalendarNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 7px;
  line-height: 8px;
  text-align: center;
  letter-spacing: 0.03em;
  color: #3d82eb;
`;
