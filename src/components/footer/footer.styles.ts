import styled from "@emotion/styled";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const Wrapper = styled.div`
  margin-top: 8px;
  padding: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AddIcon = styled(AddCircleOutlineIcon)`
  color: #3D82EB;
  widht: 12px;
  height: 12px;
  margin-right: 16px;
`

export const AddText = styled.span`
  color: #3D82EB;
  font-size: 10px;
`