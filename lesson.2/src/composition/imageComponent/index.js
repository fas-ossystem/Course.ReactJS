import image from "./logo.svg";
import "./style.css";

function ImageComponent(props) {
  return <img src={image} className="image-component" />;
}

export default ImageComponent;
