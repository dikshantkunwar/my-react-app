const Button = (props) =>{
  const {favType, setFavType} = props;
  const switchType = () => {
    setFavType(props.title)
  }
  return (
    <button onClick={switchType} style={{margin: 5 + 'px'}}> {props.title}</button>
  )
}

export default Button;