import {GiAbstract013 } from "react-icons/gi";
import { TiSocialFacebook } from "react-icons/ti";
import './Footer.css';
let Footer=()=>{


    return(

      <div className='my-4'>


 <footer>
    <div className="content">
      <div className="top">
        <div className="logo-details">
          <i className="fab fa-slack"></i>
          <span className="logo_name">Event <span>2k24</span></span>
        </div>
        <div className="media-icons">
          <a href="/"><TiSocialFacebook/></a>
          <a href="/"><TiSocialFacebook/></a>
          <a href="/"><TiSocialFacebook/></a>
          <a href="/"><TiSocialFacebook/></a>
          <a href="/"><TiSocialFacebook/></a>
        </div>
      </div>
      <div className="link-boxes">
        <ul className="box">
          <li className="link_name">Events</li>
          <li><a href="/">Technical</a></li>
          <li><a href="/">Non teacg</a></li>
          <li><a href="/">Cultural</a></li>
          <li><a href="/">Fest</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Cordinators</li>
          <li><a href="/">App design</a></li>
          <li><a href="/">Web design</a></li>
          <li><a href="/">Logo design</a></li>
          <li><a href="/">Banner design</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Prices</li>
          <li><a href="/">GRand Price</a></li>
          <li><a href="/">My account</a></li>
          <li><a href="/">Prefrences</a></li>
          <li><a href="/">Purchase</a></li>
        </ul>
        <ul className="box">
          <li className="link_name">Contact</li>
          <li><a href="/">Collage</a></li>
          <li><a href="/">Faculty</a></li>
          <li><a href="/">Student</a></li>
          <li><a href="/">Cordinator</a></li>
        </ul>
        <ul className="box input-box">
          <li className="link_name">FeedBack</li>
          <li><input type="text" placeholder="Enter your email"/></li>
          <li><input type="button" value="Send"/></li>
        </ul>
      </div>
    </div>
    <div className="bottom-details">
      <div className="bottom_text">
        <span className="copyright_text">Copyright © 2021 <a href="/">Anuj.</a>All rights reserved</span>
        <span className="policy_terms">
          <a href="/">Privacy policy</a>
          <a href="/">Terms & condition</a>
        </span>
      </div>
    </div>


    </footer>

      </div>  
    );


}
export default Footer;
