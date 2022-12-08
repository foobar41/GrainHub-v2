import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background-color: pink;
  border-radius: 5px;
  height: 450px;
  border-radius: 15px;
`;

const Title = styled.h1`
  margin: 20px;
  padding: 20px;
`;



const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items:center;
  margin: auto;
  width: 60%;
`;


const NavLink = styled(Link)`
  position: relative;
  text-align: center;
  font-size: 20px;
  padding: 10px;
  color: white;
  font-weight: 600;
  border-style: solid;
  border-color: coral;
  border-width: 2px;
  border-radius: 6%;
  transition: all 0.5s ease;
  &:hover {
    background-color: coral;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  border-radius: 5%;
  width: 200px;
  height: 300px;
`;

const Button = styled.button`
  width: 70%;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  padding: 10px;
  color: black;
  cursor: pointer;
  font-weight: 600;
`

const Shop = () => {

  const navigate = useNavigate()

  const handleUser = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
      alert("You are not logged in")
      navigate("/")
    }
  }
  return (
    <Container>
      <Title>Products</Title>
      <List>
        <NavLink to="/grain" onClick={handleUser}>
          <Button>Grains</Button>
          <Image alt="Grain" src="https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </NavLink>

        <NavLink to="/vegetable">
          <Button>Vegetables</Button>
          <Image alt="Veggie" src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&w=1000&q=80" />
        </NavLink>

        <NavLink to="/fruit">
          <Button>Fruits</Button>
          <Image alt="Fruits" src="https://www.agmrc.org/media/cms/fruit_3F888C649E704.jpg" />
        </NavLink>
      </List>
    </Container>
  );
};

export default Shop;