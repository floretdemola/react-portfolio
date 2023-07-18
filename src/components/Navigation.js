import React from "react";
import 'bootstrap/dist/css/bootstrap.css';


const styles = {
    navbar: {
        margin: 20,
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
        href="#AboutMe" onClick={() => setPage('AboutMe')}>
          About Me
      </button>
      <button className="button"   style={styles.button}
        href="#Portfolio" onClick={() => setPage('Portfolio')}>
         Portfolio
      </button>
      <button className="button"  style={styles.button}
        href="#Contact" onClick={() => setPage('Contact')}>
         Contact
      </button>
      <button className="button"   style={styles.button}
        href="#Resume" onClick={() => setPage('Resume')}>
         Resume
      </button>
    </nav>
    );
}

export default Navbar