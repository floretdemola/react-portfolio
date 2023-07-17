import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const styles = {
    navbar: {
        margin: 7,
        marginright: 1,
        display: "flex",
        flexdirection: 'row',
        justifycontent: 'space-between',
        color: 'aba9b3',
    },
    button: {
        display: 'flex',
        alignitems:'center',
        color: '2c2c2c',
    },
};

function Navbar({setPage}) {
    return (
        <nav className="button btn-group-toggle" data-toggle="buttons" style={styles.navbar}>
            <button className="button btn-secondary active" style={styles.button}
        href="#projectAboutMe" onClick={() => setPage('projectAboutMe')}>
          About Me
      </button>
      <button className="button"   style={styles.button}
        href="#projectPortfolio" onClick={() => setPage('projectPortfolio')}>
         Portfolio
      </button>
      <button className="button"  style={styles.button}
        href="#projectContact" onClick={() => setPage('projectContact')}>
         Contact
      </button>
      <button className="button"   style={styles.button}
        href="#projectResume" onClick={() => setPage('projectResume')}>
         Resume
      </button>
    </nav>
    );
}

export default Navbar