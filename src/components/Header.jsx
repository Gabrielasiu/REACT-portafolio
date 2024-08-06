// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Header from './UI/Header';

export default function Header() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <>
    <h1>This is a header</h1>
    <Navbar
      links={[
        <Link key={1} className="nav-link text-light" to="/">
          Home
        </Link>,
        <Link key={2} className="nav-link text-light" to="/about">
          About Us
        </Link>,
         <Link key={3} className="nav-link text-light" to="/contact">
         contact
       </Link>, 
       <Link key={4} className="nav-link text-light" to="/porfolio">
          porfolio
        </Link>,
         <Link key={5} className="nav-link text-light" to="/resume">
          resume
        </Link>,
      ]}
    />
    </>
  );
}
