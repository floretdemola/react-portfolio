import React from "react";
import "bootstrap/dist/css/bootstrap.css";

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
        color: "#2c2c2c",
        alightItems: "center",
        display: "flex",
    },
    button: {
        display: 'flex',
        alignitems:'center',
        color: '2c2c2c',
    },
    resume: {
        display: "flex",
        flexDirection: "column",
        alignitems: "center",
        width: "100vw",
    }
};

function Resume() {
    return (
        <div style={styles.card}>
            <h1 style={styles.heading}>Resume</h1>
            <div style={styles.content}>
                <h2>Skills</h2>
                <ul>
                    <li>Project Management</li>
                    <li>Agile Project Management</li>
                </ul>
                <h2>Languages</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>SQL</li>
                    <li>NoSQL</li>
                </ul>
                <h2>Applications</h2>
                <ul>
                    <li>Infor MRM</li>
                    <li>Infor MRM Marketing Anayltics</li>
                    <li>GitHub</li>
                    <li>Heroku</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                </ul>
                <h2>Tools</h2>
                <ul>
                    <li>VS Code</li>
                    <li>Git</li>
                    <li>Node</li>
                    <li>Web APIs</li>
                    <li>Third Party APIs</li>
                    <li>Server Side APIs</li>
                    <li>OOP</li>
                    <li>MVC</li>
                    <li>PWA</li>
                    <li>React</li>
                    <li>MERN</li>
                </ul>
            </div>
            <div style={styles.resume}>
                <a href="https://docs.google.com/document/d/13wgubLoO05UT-smM2d87l9ZUgbWhbILTBTm4uI2aoXk/edit?usp=sharing" styles={styles.button}>Download Resume</a>
            </div>
        </div>
    );
};

export default Resume;