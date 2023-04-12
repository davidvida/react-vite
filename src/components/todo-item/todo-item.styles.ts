import styled from "@emotion/styled";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  &:hover {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;

export const TodoDescription = styled.div`
  font-size: 10px;
  align-self: center;
`
export const RemoveIcon = styled(HighlightOffIcon)`
  color: #EB3D3D;
  width: 12px;
  height: 12px;
`;