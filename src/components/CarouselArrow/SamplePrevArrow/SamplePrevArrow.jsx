import { IoIosArrowBack } from "react-icons/io";

function SamplePrevArrow(props) {
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
        left: "-20px",
        top: "45%",
      }}
      onClick={onClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

export default SamplePrevArrow;
