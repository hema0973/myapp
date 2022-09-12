import fb from '../images/facebook.png'
import git from '../images/github.png'
import gplus from'../images/google.png'
import insta from '../images/insta.png'
import reddit from '../images/reddit.png'
import twitter from '../images/twitter.png'


const Footer = () => {
    return (  
        <div className="footer">
            <div>
                 <img src= {fb} alt="" />
           <p>facebook <br></br> premier level <br></br> partner agency</p>
           </div>

            <div>
                <img src= {git} alt=""/>
             <p>facebook <br></br> premier level<br></br> partner agency</p>
            </div>

            <div>
            <img src= {gplus } alt=""/>
            <p>facebook <br></br> premier level<br></br> partner agency</p>
            </div>

            <div>
            <img src= {insta} alt=""/>
            <p>facebook <br></br> premier level<br></br> partner agency</p>
            </div>

            <div>
            <img src= {reddit} alt=""/>
            <p>facebook <br></br> premier level<br></br> partner agency</p>
            </div>

            <div>
            <img src= {twitter} alt=""/>
            <p>facebook <br></br> premier level<br></br> partner agency</p>
            </div>

        </div>
    );
}
 
export default Footer;