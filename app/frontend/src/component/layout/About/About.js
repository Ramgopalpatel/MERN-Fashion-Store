import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
const About = () => {
  
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dipak05aw/image/upload/v1678446810/avatars/qlnawbfskbltlngvnwdk.png"
              alt="Founder"
            />
            <Typography>Ramgopal Patel</Typography>
            <a href="https://wa.me/7691912149" target='blank'>
              <Button color="primary">
                Visit Whatsapp
              </Button>
            </a>
            <span>
              This is a sample website made by rgpatel119. Only with the purpose
              to achieve dream job on MERN technology.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">How to reach me??</Typography>
            <a
              href="https://www.linkedin.com/in/ramgopal-patel-1bb669209/"
              target="blank"
            >
              <GitHubIcon className="githubSvgIcon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ramgopal-patel-1bb669209/"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>

            <a href="https://www.instagram.com/rgpatel119/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
