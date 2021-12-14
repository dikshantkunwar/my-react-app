import Button from "./Button"
const ButtonContainer = (props) => {
  const list = props.types.map(type => {
    return (<Button title={type} favType={props.favType} setFavType={props.setFavType}> </Button>)
  });

  return (
    <div className="btncontainer">
      { list }
    </div>
  )
}

export default ButtonContainer