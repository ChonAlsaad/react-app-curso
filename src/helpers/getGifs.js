
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=dF6hq0h7nRt6BjublZa8aZXNF5qg5k2D&q=${ category }&limit=6`

    const respuesta = await fetch( url );
    const { data } = await respuesta.json();
    
    const gifs = data.map( img => ( {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );

    console.log(gifs)
    return gifs;
}