import React, {useState} from "react";

const SocialMedia = ({socialMedias}) => {
    return (
        <div className="social-media">
            <h4 className="f-widget-heading follow">Follow Us</h4>
            <ul className="list-unstyled social-network">
                {socialMedias.map(socialMedia => {

                    if(socialMedia.icon==='faFacebook'){
                        return (
                            <li className="social-media"  key={socialMedia.id}>
                                <a href={`${socialMedia.link}`} target={"_blank"}>                                
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                        )                        
                    }else if(socialMedia.icon==='faInstagram'){
                        return (
                            <li className="social-media"  key={socialMedia.id}>
                                <a href={`${socialMedia.link}`} target={"_blank"}>                                
                                    <i className="fa fa-instagram"></i>
                                </a>
                            </li>
                        )             

                    }else if(socialMedia.icon==='faTwitter'){
                        return (
                            <li className="social-media"  key={socialMedia.id}>
                                <a href={`${socialMedia.link}`} target={"_blank"}>                                
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                        )             
                    }
                })}
            </ul>
        </div>
    )
};

export default SocialMedia;