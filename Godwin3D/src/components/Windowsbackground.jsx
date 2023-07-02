import React from "react";
import grassday from '../assets/grassday.png';

const WindowsBackground = ({ children }) => {
  const containerStyles = {
    position: "relative",
    width: "auto",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundImage: `url(${grassday})`, // Corrected interpolation
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    opacity: 0.8
    //background: "white"
  };
  
    const rectangleStyles = {
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, #FFFFFF 0%, rgba(252, 252, 252, 0.99) 100%)",
      border: "1px solid #000000",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.8), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      marginTop: "56px"
    };
  
    const titlebarStyles = {
      boxSizing: "border-box",
      width: "100%",
      height: "56px",
      background: "linear-gradient(180deg, #217DD2 0%, rgba(26, 66, 211, 0.9) 83.33%)",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
      position: "absolute",
      top: 0,
      left: 0,
    };

    const titleTextStyles = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#FFFFF",
        marginLeft: "10px",
        letterSpacing: "1px",
        fontFamily: "system-ui"
      };

      const subTextStyles = {
        fontSize: "1.5rem",
        fontWeight: "bold",
        left: "absolute",
        marginBottom: "0.5rem",
        color: "lightblue",
        marginLeft: "10px",
        letterSpacing: "1px",
        fontFamily: "system-ui"
      };
  const closeButtonStyles = {
    boxSizing: "border-box",
    position: "absolute",
    width: "25px",
    height: "25px",
    right: "52px",
    top: "15px",
    border: "2px solid #FFFFFF",
    borderRadius: "4px",
  };

  const minimizeButtonStyles = {
    boxSizing: "border-box",
    position: "absolute",
    width: "25px",
    height: "25px",
    right: "80px",
    top: "15px",
    border: "2px solid #FFFFFF",
    borderRadius: "4px",
  };

  const titlebarLineStyles = {
    position: "absolute",
    width: "14px",
    height: "3.5px",
    right: "85px",
    top: "27px",
    background: "#FFFFFF",
  };

  const resizeButtonStyles = {
    boxSizing: "border-box",
    position: "absolute",
    width: "15px",
    height: "15px",
    right: "56.75px",
    top: "20px",
    border: "2px solid #FFFFFF",
    borderRadius: "10%",
  };

  const redBoxStyles = {
    boxSizing: "border-box",
    position: "absolute",
    width: "25px",
    height: "25px",
    right: "25px",
    top: "15px",
    background: "rgba(255, 0, 0, 0.65)",
    border: "2px solid #FFFFFF",
    borderRadius: "4px",
  };

  const diagonalLine1Styles = {
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "#FFFFFF",
    top: "11px",
    transform: "rotate(45deg)",
  };

  const diagonalLine2Styles = {
    position: "absolute",
    width: "100%",
    height: "2px",
    background: "#FFFFFF",
    top: "11px",
    transform: "rotate(-45deg)",
  };

  return (
    <div className="windows-background-wrapper relative" style={containerStyles}>
      <div className="windows-background rectangle" style={rectangleStyles}></div>
      <div className="windows-background titlebar" style={titlebarStyles}>
      <h2 style={titleTextStyles}>Skills.com<span style={subTextStyles}>/Languages/Tools</span></h2>
        <div className="windows-background close-button" style={closeButtonStyles}></div>
        <div className="windows-background minimize-button" style={minimizeButtonStyles}></div>
        <div className="windows-background titlebar-line" style={titlebarLineStyles}></div>
        <div className="windows-background resize-button" style={resizeButtonStyles}></div>
        <div className="windows-background red-box" style={redBoxStyles}>
          <div className="diagonal-line1" style={diagonalLine1Styles}></div>
          <div className="diagonal-line2" style={diagonalLine2Styles}></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default WindowsBackground;