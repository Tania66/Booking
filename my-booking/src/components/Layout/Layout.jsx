import { Suspense } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <div>
      <header>
<nav>
  <ul>
    <li>
    <NavLink to="/" >Home</NavLink>
    </li>
    <li>
     <NavLink to="/about" >About</NavLink>
    </li>

  </ul>
</nav>
      </header>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
    <Outlet/>
</Suspense>
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout
