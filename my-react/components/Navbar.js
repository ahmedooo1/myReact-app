import Link from 'next/link';
import { Icon } from 'semantic-ui-react';






const Navbar = () => (

  <nav className="navbar">
    <Link href="/">
      <a className="navbar-brand">My Library  <Icon link name='home' /></a>
    </Link>


       <Link href="/new">
      <a className="create"> <Icon link name='add circle' /></a>
    </Link>
  </nav>

)

export default Navbar
