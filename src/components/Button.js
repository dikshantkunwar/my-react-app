const Button = (props) =>{
  const handleClick = (event) => {
    console.log(event);
    alert(`you clicked on ${ props.title }`)
  }

  return (
    <button onClick={handleClick}> {props.title}</button>
  )
}



export default Button;