
function Counter({data}) {
  const countStyles = {
    color: "green",
  };

  if (data.length < 3) {
    countStyles.color = "yellowgreen";
  }

  if (data.length < 2) {
    countStyles.color = "red";
    countStyles.textTransform = "uppercase";
  }
  return (
    <div className="count-wrap" style={countStyles}>
      <h2>Количество людей: {data.length}</h2>
    </div>
  );
}

export default Counter;
