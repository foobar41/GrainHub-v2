import { Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    margin-top: -15px;
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
   font-size: 14px;

  cursor: pointer;

`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  text-decoration: none;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  text-decoration: underline;
  font-size: 17px;
  cursor: pointer;
  margin-left: 25px;
`;


const Navbar = () => {
    const quantity = 0;
    const user = false;



    if (!user) {
        return (
            <Container>
                <Wrapper>
                    <Center>
                        <Logo><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Grain Hub</Link></Logo>
                    </Center>
                    <Right>
                        <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}>SHOP</MenuItem>
                        </Link>
                        <Link to="/register" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}>REGISTER </MenuItem>
                        </Link>
                        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}>SIGN IN</MenuItem>
                        </Link>
                        <Link to="/contactus" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}>CONTACT US</MenuItem>
                        </Link>
                        <Link to="/login">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </Right>
                </Wrapper>
            </Container>


        );
    }
    else {
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Language><Link to={`/`}><img src="../favicon.ico" width="45" height="35" alt=""></img></Link></Language>
                    </Left>
                    <Center>
                        <Logo><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Grain hub</Link></Logo>
                    </Center>
                    <Right>
                        <Link to="/shop" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}>SHOP</MenuItem>
                        </Link>

                        <Link to={"/user/" + user._id} style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}>Hello, {user.username.toUpperCase()} </MenuItem>
                        </Link>
                        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem style={{ textDecoration: 'none', color: 'black' }}><b>Logout</b></MenuItem>
                        </Link>
                        <Link to="/cart">
                            <MenuItem>
                                <Badge badgeContent={quantity} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </Right>
                </Wrapper>
            </Container>
        );
    }
};

export default Navbar;