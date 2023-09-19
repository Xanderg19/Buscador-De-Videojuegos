import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import Busqueda from './Busqueda';
import './detalles.css'
import { useSearch } from '../context/searchContext';
const DetalleJuego = () => {
  const { id } = useParams();
  const [gameDetails, setGameDetails] = useState(null);
  const API_KEY = 'd7afdbcaa9934143b40796fdbd6507dc';
  const {
    searchTerm,
    setSerchtTerm,
    searchResults,
    handleSearch,
  } = useSearch();
  
  
  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
        const data = await response.json();

        setGameDetails(data);
      } catch (error) {
        console.log('Error en detalle juego:', error);
      }
    };

    fetchGameDetails();
  }, [id]);

  if (!gameDetails) {
    return  <div className="lds-spinner spiner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;
  }

  const stores = gameDetails.stores;
  return (

    <div className='container-fluid contenedor'>
      <section className='sub-container col-xs-12 '>
        <div className='titulo d-flex'>
        <h1>{gameDetails.name_original}</h1>
        <p>Calificación: <span className="badge bg-secondary">{gameDetails.rating}</span></p>
        <p>Valoraciones: <span className="badge bg-secondary">{gameDetails.ratings_count}</span></p>
        </div>
    
        <div className='content-img'>
        <img src={gameDetails.background_image} className=" img-dev"  alt={gameDetails.name} />
        </div>

        </section>  

        

       {/*  listas */}
      <section className='listas'>
        <div className='container text-center '>
          <div className='row'>
            <div className=' compras col-12 col-md-6 col-lg-4'>
                <h4 className='title'>Tiendas de compras:</h4>
                <ul>
                  {stores.map(store => (
                      <li key={store.store.id}>
                        <a href={store.url} >
                          {store.store.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <h4  className='title'>Plataformas:</h4>
                    <ul >
                      {gameDetails.platforms.map((platform) => (
                                
                                <li key={platform.platform.name}>{platform.platform.name}</li>
                              ))}
                    </ul>     
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <h4>Detalles adicionales</h4>
                <p className="card-text"> <span> Fecha de Lanzamiento: </span> {gameDetails.released}</p>
                <p> <span>Género: </span> {gameDetails.genres.map((genre) => genre.name).join(', ')}</p>
                <p> <span>Editor: </span> {gameDetails.publishers[0].name}</p>
              </div>
            </div>
          </div>
      </section>
        
    </div>
  );
};

export default DetalleJuego;
