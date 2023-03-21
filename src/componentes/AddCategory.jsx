
import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
    
    const [inputoValue, setInputValue] = useState('');

    const onInputChange = (event) => { 
        // console.log(event.target.value)
        setInputValue(event.target.value) };

        const onSubmit = (event) => {
            event.preventDefault();

            if ( inputoValue.trim().length <= 1) 
                return;

            onNewCategory( inputoValue.trim() );
            setInputValue('');
        };


    return (
        <form onSubmit= { (event) => onSubmit(event)}>
        {/* onSumit usa un argumento (evento) que es usado inmediatamente, se puede borrar quedando asi: { onSubmit } */}
            <input
                type="text"
                placeholder="Buscar Gif"
                value= {inputoValue}
                onChange = { onInputChange }
            />
        </form>
    )
}
