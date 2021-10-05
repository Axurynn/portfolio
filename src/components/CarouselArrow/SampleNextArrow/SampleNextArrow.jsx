import { IoIosArrowForward } from "react-icons/io";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{
        ...style,
        display: "inline-block",
        color: "var(--text-color)",
        opacity: "0.8",
        position: "absolute",
        right: "-20px",
        top: "45%",
      }}
      onClick={onClick}
    >
      <IoIosArrowForward />
    </div>
  );
}

export default SampleNextArrow;
