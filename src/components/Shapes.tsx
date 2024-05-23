import CirclePattern from "../assets/images/circlepattern.svg";
import RectanglePattern from "../assets/images/rectangles.svg";

export default function Shapes() {
  return (
    <>
      <img
        className="fixed left-0 z-[-1]"
        src={RectanglePattern}
        alt="not found"
      />

      <img
        className="fixed right-0 top-0 z-0"
        src={CirclePattern}
        alt="not found"
      />
    </>
  );
}
