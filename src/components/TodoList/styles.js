import styled from 'styled-components';

const StyledText = styled.span`
  ${(props) => props.isCompleted && 'text-decoration: line-through'};
`;

export default StyledText;
