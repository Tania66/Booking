import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { FaDotCircle } from "react-icons/fa";
import { Container, Header, Link, LogoLink, LogoText, NavList } from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
        <LogoLink to="/">
        
        <FaDotCircle size={25} color='orange'/>
        <LogoText>Booking</LogoText>
        
        </LogoLink>
<nav>
  <NavList>
    <li>
    <Link to="/">Home</Link>
    </li>
    <li>
     <Link to="/about" >About</Link>
    </li>

  </NavList>
</nav>
      </Header>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
</Suspense>
      </main>
      <footer>

      </footer>
    </Container>
  )
}

export default Layout
