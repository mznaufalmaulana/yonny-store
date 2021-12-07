import React, {useState} from "react";

const SocialMedia = ({socialMedias}) => {

    return (
        <div className="social-media">
            <h4 className="f-widget-heading follow">Follow Us</h4>
            <ul className="list-unstyled social-network">
                {socialMedias.map(socialMedia => {
                    return (
                        <li className="social-media"  key={socialMedia.id}>
                            <a href={socialMedia.link} target={"_blank"}>
                                <i className={socialMedia.icon}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default SocialMedia;