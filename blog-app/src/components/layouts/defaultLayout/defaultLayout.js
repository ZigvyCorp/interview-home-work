import Header from "./header";
import Footer from "./footer";
import './DefaultLayout.css'

function DefaultLayout({ children }) {
  return (
    <div className='wrapper'>
      <Header />
      <div className='container'>
        <div className='content'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
