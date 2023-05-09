const Header = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "white",
        height: 90,
        marginBottom: 20,
      }}
    >
      <h1 style={{margin: 0}}>
        <strong>View in the Inspector!</strong>
      </h1>
      <p style={{ textAlign: "center", fontWeight: 500 }}>
        View html under "Elements." Expand the "body" tag, expand the "div" tag
        with the "id" of "root" then expand all of the nested "div" tags to see
        the soup!
      </p>
    </div>
  );
};

export default Header;
