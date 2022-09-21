import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      {/* <Link to="/">Home</Link>
    <Link to="/movies">Movies</Link> */}
      <NavLink
        to='/home'
        className={({ isActive }) => (isActive ? 'selected' : '')}
      >
        Home
      </NavLink>

      <NavLink
        to='/movies'
        className={({ isActive }) => (isActive ? 'selected' : '')}
      >
        Movies
      </NavLink>
    </>
  );
};

export default NavBar;
