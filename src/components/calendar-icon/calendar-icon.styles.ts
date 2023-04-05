import styled from "@emotion/styled";

export const Time = styled.time`
  display: block;
  position: relative;
  width: 17px;
  height: 16px;
  background-color: #FFF;
  border-radius: 4px;
  border-style: solid;
  border-color: #3D82EB;
  border-width: 1.5px;
  overflow: hidden;
  font-size: 5px;
`;

export const Month = styled.strong`
  position: absolute;
  width: 100%;
  text-align: center;
  padding-bottom: 1px;
  color: #FFF;
  background-color: #3D82EB;
`;

export const Day = styled.p`
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 7px;
  font-weight: 700;
  line-height: 8px;
  letter-spacing: 0.03em;
  color: #3D82EB;
`;