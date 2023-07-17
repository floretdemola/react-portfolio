import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const gitHub = "https://github.com/floretdemola";
const linkedIn = "https://www.linkedin.com/in/fernando-loret-de-mola-3797b68b/";

const styles = {
    footer: {
        padding: 10,
        color: "#000000",
        textdecoration: "none",
        letterspacing: 2,
        position: "relative",
        whitespace: "nowrap",
        fontsize: 'large',
        fontweight: 500,
        margin: 4,
    },
    h2: {
        fontsize: "20px",
        marginTop: 15,
        marginRight: 15,
        marginBottom: 15,
        marginLeft: 5,
    },
    button: {
        display: "flex",
        background: "#858585",
        fontsize: "15px",
        color: "#2c2c2c",
        borderradius: ".5rem",
        cursor: "pointer",
        alignitems: "center",
        justifycontent: "space-between"
    },
};

const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

function Footer() {
    return (
      <footer style={styles.footer}>
        <h2 style={styles.h2}>Links:</h2>
        <button   style={styles.button}
          onClick={() => openInNewTab(gitHub)}>
          GitHub
        </button>

        <button   style={styles.button}
          onClick={() => openInNewTab(linkedIn)}>
          LinkedIn
        </button>
  
      </footer>
    );
  }
  
export default Footer;