import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: orange;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Today's Discount - corn at ₹100</Container>;
};

export default Announcement;