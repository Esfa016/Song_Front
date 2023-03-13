import styled from "@emotion/styled";

import {Link} from "react-router-dom"

export function NavBar() {
    return (
        <Container>
      <Nav>

            <NavLink to="/">Songs</NavLink>

            <NavLink to="/add">AddSongs</NavLink>

            <NavLink to="/stastics">Stastics</NavLink>
       
      </Nav>
      </Container>
    );
  }
  

  const Container = styled.div`
  margin:20px;
  padding:10px
  `

  const Nav = styled.div`
  background: blue;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;

  `

  const NavLink = styled(Link)`
  color:white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
  `


  