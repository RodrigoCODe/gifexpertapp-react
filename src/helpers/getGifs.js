

export  const getGifs = async(category) => {

        // const url = 'https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=WC6tP28b29A7KJ8XJWnRN7BCbu4hu5xz';
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=WC6tP28b29A7KJ8XJWnRN7BCbu4hu5xz`;
        const respuesta = await fetch( url );
        const {data} = await respuesta.json();
  
        const gifs = data.map( img => {
  
          return { 
                id: img.id,
                title: img.title,
                //con ? pregunta si vienen las imagenes y usa esa
                url: img.images?.downsized_medium.url
          }
  
        })
  
        // console.log(gifs);
        return gifs;
  
      }