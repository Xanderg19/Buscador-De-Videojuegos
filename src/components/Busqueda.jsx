import React from 'react';
import { useSearch } from '../context/searchContext';
import { useLocation, Outlet, Link } from 'react-router-dom';
import './searchResults.css'

const Busqueda = () => {
  const {
    searchTerm,
    setSerchtTerm,
    handleSearch,
  } = useSearch();
   
  const location = useLocation();
  const principal = location.pathname === '/';
  
  return(
    <>
      <nav className="listo navbar bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
        <Link to={'/'}><a className="navbar-brand">PortalGame</a></Link>    
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" type="search" placeholder="Buscar juegos..." aria-label="Search" onChange={(e) => setSerchtTerm(e.target.value)}></input>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Busqueda;
