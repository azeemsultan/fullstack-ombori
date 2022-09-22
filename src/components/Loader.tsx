import "../assets/css/component.css";
const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <span className="rip"></span>
      <span className="ripple r1"></span>
    </div>
  );
};

export default Loading;
