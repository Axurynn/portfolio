function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "var(--decoration-color)",
        borderRadius: "50%",
        opacity: "0.8",
      }}
      onClick={onClick}
    />
  );
}

export default SampleNextArrow;
