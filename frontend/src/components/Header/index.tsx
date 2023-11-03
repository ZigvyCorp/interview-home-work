import './header.styles.css'

function Header() {
  return (
    <header className="header">
    <div className="header-logo">
      <img src="your-logo.png" alt="Logo" />
    </div>
    <div className="header-blog-name">
      {'treomang'}
    </div>
    <div className="header-user">
      <span className="user-name">{'treomangne'}</span>
    </div>
  </header>
  );
}

export default Header;
