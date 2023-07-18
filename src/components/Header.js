import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const styles = {
    header: {
        paddingtop: 4,
        paddingbottom: 4,
        paddingleft: 0,
        background: "#2c2c2c",
        display: "flex",
        margin: 20,
        justifycontent: "center",
    },
    h1: {
        fontSize: "36px",
        fontweight: "bolder",
        color: "#aba9b3",

    },
    h3: {
        fontSize: "30px",
        fontWeight: "bolder",
        color: "#aba9b3",
    },
};

function Header() {
    return (
      <header style={styles.header}>
        <h1 style={styles.h1}>Fernando Loret de Mola</h1>
        <h3 style={styles.h3}>My React Portfolio</h3>
      </header>
    );
  }
  
  export default Header;