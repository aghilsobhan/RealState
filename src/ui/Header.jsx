import React from "react";
import logos from "/assets/images/logo.png"
import styled from "styled-components";

const NavbarContainer = styled.nav`
  padding: 20px;
  display: flex;
  text-align:center;
  align-items:center;
  justify-content:space-between;
  height: 50px;
  width: 100%;
  background-color:var( --header-color);
`;

// Styled component for the list within the navbar
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  text-align:center;

`;

// Styled component for the individual items in the navbar
const NavItem = styled.li`
  margin-right: 1rem;
  margin-left:1rem;
  &:last-child {
    margin-right: 0;
  }
`;

// Styled component for the links within the navbar
const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition:  0.3s ease;
  &:hover {
    color:var(--color-grey-400);
    cursor:pointer;
  }
    `;
const IMAGE =styled.img`
height: 40px;
width:40px;
`    
    function Header(props) {
      return <>


      <NavbarContainer >
   
      <NavList>
        <NavItem>
          <NavLink href="#">صفحه اصلی</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">فروش</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">خرید</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">نماینده</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">درباره ما</NavLink>
        </NavItem>
      </NavList>
      <NavList>
        <NavLink>
        ورود
        </NavLink>
        <NavLink>
        ثبت نام
        </NavLink>
        <IMAGE src={logos}/>
      </NavList>
    </NavbarContainer>

  </>;
}

export default Header;
