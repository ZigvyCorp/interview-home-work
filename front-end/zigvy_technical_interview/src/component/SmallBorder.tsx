const SmallBorder = ({ color }: { color: string }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center px-3"
      style={{
        height: "30px",
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: `${color}`,
        borderRadius: "5px",
        marginLeft: "10px",
        marginBottom: "5px",
      }}
    >
      <p className="m-1 text-center" style={{ color: `${color}` }}>
        {color}
      </p>
    </div>
  );
};

export default SmallBorder;
