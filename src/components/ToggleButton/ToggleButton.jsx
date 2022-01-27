import './ToggleButton.css';

function ToggleButton({ isShow, setIsShow }) {
  const buttonStyle = { margin: "1rem 0" };

  const btnClasses = ["btn"];

  if (!isShow) {
    btnClasses.push("btn--danger");
  }
  return (
    <button
      className={btnClasses.join(" ")}
      style={buttonStyle}
      onClick={() => setIsShow(!isShow)}
    >
      Toggle Button
    </button>
  );
}

export default ToggleButton;
