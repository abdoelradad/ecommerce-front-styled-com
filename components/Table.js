import styled from "styled-components";

const StyledTable = styled.table`
  width: 100%;
  thead {
    text-align: left;
    text-transform: uppercase;
    color: #999;
    font-weight: 600;
    font-size: 0.8rem;
  }
  td {
    padding: 10px 0;
  }
`;

export default function Table(props) {
  return <StyledTable {...props} />;
}
