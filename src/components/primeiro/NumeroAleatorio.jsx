//() => {} função anonima

export default (props) => {

    const min = props.min;
    const max = props.max;
    
    const random = parseInt((Math.random() * (max-min) + min))

    return(
        <div>
            <h2>Random value</h2>
            <p><strong>Min value:</strong> {min} </p>
            <p><strong>Max value:</strong> {max} </p>
            <p><strong>Valor Sorteado</strong> {random} </p>
        </div>
    )
}