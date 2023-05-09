const Button = () => {
  return (
    // Style attributes cannot be passed to fragments, which is why a div is being used here.
    <div style={{ textAlign: "center" }}>
      <button style={{ width: 200, height: 50, fontSize: 24 }}>
        <strong>I &#x1F497; div soup!</strong>
      </button>
    </div>
  );
};

export default Button;
