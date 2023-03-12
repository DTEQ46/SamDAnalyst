import {
  Facebook,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="top">
        Thanks for reading, and feel free to reach out to me.
      </div>
      <div className="bottom">
        <div className="icons">
          <Twitter className="icon" />
          <Facebook className="icon" />
          <GitHub className="icon" />
          <LinkedIn className="icon" />
          <YouTube className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
