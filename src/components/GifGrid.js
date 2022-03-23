import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( {category} ) => {


  const {data:images, loading} = useFetchGifs( category);


    // useEffect( () => {
    //   getGifs(category)
    //       .then(setImages)
    //    //arreglo de dependencias (para que se dispare una sola vez)
    // }, [category]) //me pide el warning que use category en dependencia aunque no se use..

  // getGifs();

  return ( 
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3> 

      {loading && <p className='animate__animated animate__flash'>Loading...</p>}


      <div className='card-grid'>
            {
              //expresion js, se usa parentesis despues de la flecha
              images.map( img => (
                <GifGridItem 
                  key={img.id} 
                  {...img}
                />
              ))
            }
      </div>
   </>
  )
}
