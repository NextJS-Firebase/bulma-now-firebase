import styled from "styled-components";
const PageWrapper = styled.div`
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    max-width: 160px;
  }
`;

const Tesla = (props) => {
  return (
    <PageWrapper>
      <p>Tesla</p>
    </PageWrapper>
  );
};

export default Tesla;
