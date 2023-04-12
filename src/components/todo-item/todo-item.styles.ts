import styled from "@emotion/styled";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px;
  &:hover {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;

export const TodoDescription = styled.div`
  font-size: 10px;
`

export const TodoRemove = styled(HighlightOffIcon)`
  margin-left: 20px;
  width: 12px;
  height: 12px;
  &:hover{
    color: #EB3D3D;
  }
`;
