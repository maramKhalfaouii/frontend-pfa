import React from "react";
import styled from "styled-components";

const CustomFooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  line-height: 60px;
  background-color: #f5f5f5;

  &.bg-dark {
    background-color: #343a40; /* Adjust background color as needed */
    color: #ffffff; /* Adjust text color as needed */
  }
`;

export const Footer = ({ className }) => {
  return (
    <CustomFooterWrapper className={className}>
      <div className="container">
        <span className="text-white">
          &#169;
          {`${new Date().getFullYear()} Company Inc. All Rights Reserved`}
        </span>
        <div className="float-right">
          <a
            href="https://github.com/martindavid/flask-react-docker-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </CustomFooterWrapper>
  );
};

Footer.displayName = "Footer";
