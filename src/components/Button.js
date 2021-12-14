const Button = (props) =>{
  const {favType, setFavType} = props;
  const switchType = () => {
    setFavType(props.title)
  }

  return (
    <button onClick={switchType}> {props.title}</button>
  )
}

export default Button;