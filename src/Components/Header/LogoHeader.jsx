import LogoImg from "../../assets/Logo.jpg";
import "./style.css";
function LogoHeader(params) {
  return (
    <>
      <div className="header_logo">
        <img src={LogoImg}></img>
      </div>
    </>
  );
}
export default LogoHeader;
