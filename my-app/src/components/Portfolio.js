import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const brewsomeWeatherApp = "https://floretdemola.github.io/brewsome-weather/";
const brewsomeWeatherGitHub = "https://github.com/floretdemola/brewsome-weather";
const techBlogApp = "https://geekblog2000.herokuapp.com/";
const techBlogGitHub ="https://github.com/floretdemola/techblog";
const noteTakerApp = "https://note-taker-floretdemola.herokuapp.com/";
const noteTakerGitHub = "https://github.com/floretdemola/note-taker";
const sciptScoutApp = "https://script-scout.herokuapp.com/";
const sciptScoutGitHub = "https://github.com/TheMaddoxJ/ScriptScout"

const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

const styles = {
    card: {
        background: "#aba9b3",
        margin: 20,
        borderRadius: 6,
    },
    heading: {
        padding: "0 20px",
        background: "#858585",
        fontWeight: 600,
        fontSize: 18,
        borderTopLeftRadius: 6,
        borderBottomRightRadius: 6,
        minHeight: 50,
        lineHeeight: 3.5,
    },
    content: {
        color: '#aba9b3',
        textAlign:'justify',
        padding: 20,
        alightItems: "center",
        display: "flex",
    },
    button: {
        display: 'flex',
        alignitems:'center',
        color: '2c2c2c',
    },
    input: {
        padding: 6,
        height: 150,
        width: "auto",
    },
    section: {
        marginTop: 40,
        marginBottom: 40,
        backgroundColor: "#858585",
        textalign: "center",
        alignitems: "center",
        justifycontent: "space-between",
        padding: "0 20px",
        fontSize: "large",
    },
};

function Card() {
    return (
        <div style={styles.card}>
            <h1 className="d-flex align-items-center" styles={styles.heading}>Portfolio</h1>

            <div className="d-flex flex-wrap" style={styles.content}>
                <section style={styles.section}>
                    <h3>Brewsome Weather</h3>
                    <input
                        style={styles.input}
                        type="image"
                        src={require("./assets/Project_Pictue_1.png")}
                        alt="brewsomeweatherapp">
                    </input>
                    <button style={styles.button}
                    onClick={() => openInNewTab(brewsomeWeatherApp)}>Brewsome Weather App</button>
                    <button style={styles.button}
                    onClick={() => openInNewTab(brewsomeWeatherGitHub)}>Brewsome Weather GitHub</button>
                </section>
                <br></br>
                <section style={styles.section}>
                    <h3>ScriptScout</h3>
                    <input
                        style={styles.input}
                        type="image"
                        src={require("./assets/scriptscout.png")}
                        alt="brewsomeweatherapp">
                    </input>
                    <button style={styles.button}
                    onClick={() => openInNewTab(sciptScoutApp)}>ScriptScout App</button>
                    <button style={styles.button}
                    onClick={() => openInNewTab(sciptScoutGitHub)}>ScriptScout GitHub</button>
                </section>
                <br></br>
                <section style={styles.section}>
                    <h3>NoteTaker App</h3>
                    <input
                        style={styles.input}
                        type="image"
                        src={require("./assets/noteTakerApp.png")}
                        alt="brewsomeweatherapp">
                    </input>
                    <button style={styles.button}
                    onClick={() => openInNewTab(noteTakerApp)}>NoteTaker App</button>
                    <button style={styles.button}
                    onClick={() => openInNewTab(noteTakerGitHub)}>NoteTaker GitHub</button>
                </section>
                <br></br>
                <section style={styles.section}>
                    <h3>Tech Blog</h3>
                    <input
                        style={styles.input}
                        type="image"
                        src={require("./assets/techBlog.png")}
                        alt="brewsomeweatherapp">
                    </input>
                    <button style={styles.button}
                    onClick={() => openInNewTab(techBlogApp)}>Tech Blog App</button>
                    <button style={styles.button}
                    onClick={() => openInNewTab(techBlogGitHub)}>Tech Blog GitHub</button>
                </section>
            </div>
        </div>
    );
}

export default Card;