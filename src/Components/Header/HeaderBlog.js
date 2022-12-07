function HeaderBlog({ isMobile }) {
  return (
    <div
      style={{ flex: 1 }}
      className="d-flex justify-content-center align-items-center"
    >
      <button type="button" className="btn btn-light">
        <p className={`${isMobile ? "h6" : "h5"} m-0`}>Blogs</p>
      </button>
    </div>
  );
}

export default HeaderBlog;
