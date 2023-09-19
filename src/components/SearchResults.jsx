import React from 'react';
import { Link } from 'react-router-dom';
import './searchResults.css'

const SearchResults = ({ results }) => {
    console.log(results)
  return (
    
    <div className='contenido'>
      {results.map((result) => (
        <Link to={`/detalle-juego/${result.id}`}>
          <div key={result.id} className="card card-contenedor" style={{ width: '18rem' }}>
            <img src={result.background_image} className="card-img-top imagen-card" alt={result.name} />
            <div className="card-body card-sub"> 
              <h5>{result.name}</h5>
                <p className="card-text">Calificación: {result.rating}</p>
                <p className="card-text">Fecha de Lanzamiento: {result.released}</p>
                <ul>
                {result.platforms.map((platform) => (
                    
                  <li key={platform.platform.name}> <span className="badge rounded-pill bg-secondary">{platform.platform.name}</span> </li>
                ))}
              </ul>
            </div>
         
        </div>
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
