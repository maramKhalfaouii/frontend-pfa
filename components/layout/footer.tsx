import React from "react";
import styled from "styled-components";

const CustomFooter = styled.footer`
  position: fixed; /* Fixed position to keep footer at the bottom of the viewport */
  bottom: 0;
  width: 100%;
  line-height: 60px;
  background-color: #f5f5f5;
  color: #ffffff; /* Set text color */
  padding: 0 20px; /* Add padding for better spacing */
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; /* Limit width to prevent stretching on larger screens */
  margin: 0 auto; /* Center align content */
`;

const FooterLink = styled.a`
  color: #ffffff; /* Set link color */
  text-decoration: none; /* Remove default underline */
  transition: color 0.3s ease; /* Add smooth transition for color change */
  &:hover {
    color: #cccccc; /* Change color on hover */
  }
`;

const Footer = () => {
  return (
    <CustomFooter className="bg-dark">
      <FooterContent>
        <span>&#169; {new Date().getFullYear()} Company Inc. All Rights Reserved</span>
        <div>
          <FooterLink
            href="https://github.com/martindavid/flask-react-docker-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </FooterLink>
        </div>
      </FooterContent>
    </CustomFooter>
  );
};

Footer.displayName = "Footer";

export default Footer;
