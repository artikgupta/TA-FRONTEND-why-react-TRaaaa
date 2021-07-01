function Button(props){
    const {disabled, label, onClickHandler, size, type}=props;
    return(
        <button disabled={disabled} onClick={()=> onClickHandler()} className={size? size : ''} className={type} >
         {label}
        </button>
    )
}

export default Button