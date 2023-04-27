import styled from "@emotion/styled";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const StatusContainer = styled.div`
  cursor: pointer;
`;

export const InProgressStatus = styled(RadioButtonUncheckedIcon)`
  color: #CBCBCB;
  margin-right: 20px;
  width: 12px;
  height: 12px;
`;

export const DoneStatus = styled(CheckCircleIcon)`
  color: #4E4E4E;
  margin-right: 20px;
  width: 12px;
  height: 12px;
`;
