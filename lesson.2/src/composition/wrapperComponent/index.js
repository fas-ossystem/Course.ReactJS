import CardComponent from "../cardComponent";
import ImageComponent from "../imageComponent";
import TextComponent from "../textComponent";

export default function CompositionExample(props) {
  return (
    <div>
      <CardComponent left={<ImageComponent />} right={<TextComponent />} />
      <u>{props.svoystvo}</u>
    </div>
  );
}
