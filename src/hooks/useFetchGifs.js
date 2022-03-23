import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    
    //los efectos no pueden ser async
    useEffect( () => {
        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });
         
            });  

    }, [category]);

    //el state en este caso es un objeto
    return state; // {data: [] , loading: true};


}