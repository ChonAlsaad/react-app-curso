
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs.js";
import { GifItem } from "./GifItem.jsx";
import { useFetchGifs } from '../hooks/useFetchGifs.js';




export const GifGrid = ( { category } ) => {

    const { images, isLoading } = useFetchGifs( category );

    console.log

    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //     getImages();
    // }, [] )
    



    return (

        <>
            <h4>{ category }</h4>
            {
                isLoading && ( <h2>Cargando...</h2>) //tambien puedo crear un componente de loading y llamarlo aqui
            }

            <div className="card-grid">
                {
                    images.map( (image) => (
                        <GifItem 
                            key = { image.id }
                            title = { image.title }
                            url = { image.url }

                            // se puede usar el operador spread (...) para repartir las props, asi ↓:

                            //* <GifItem  */
                            // key = { image.id }
                            // { ...image }

                        />
                    ))
                }
            </div>

        </>


    )
}
