import Button from "./Button"
const ButtonContainer = (props) => {
  return (
    <div className="btncontainer">
      <Button title="Flower" favType = {props.favType} setFavType={props.setFavType} />
      <Button title="Root" favType = {props.favType} setFavType={props.setFavType} />
      <Button title="Stem" favType = {props.favType} setFavType={props.setFavType} />
    </div>
    
  )
}

export default ButtonContainer