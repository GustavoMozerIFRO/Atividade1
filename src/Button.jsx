import './Button.css'
function Button(props){
    const titulo = props.titulo;
    const descr = props.descr;
    return(
        
        <div className='principal'>

            <button className='titulo'>
                
                <p>{titulo}</p>
                
                {descr}

            </button>

        </div>
    );
}

export default Button;