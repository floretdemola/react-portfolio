import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { validateEmail } from "../utils/helpers";

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
    },
    input: {
        padding: 10,
        margin: 4,
        borderRadius: 6,
    },
    button: {
        display: 'flex',
        alignitems:'center',
        color: '2c2c2c',
    },
};

function Card() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
    const handleInputChange = (e) => {
      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  
      if (inputType === "email") {
        setEmail(inputValue);
      } else if (inputType === "name") {
        setName(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
    
      const submitFormHandler = () => {
        e.preventDefault();
        if (!validateEmail(email)){
            setErrorMessage("Email is invalid, please enter your email");
            setTimeout(() => {
                setErrorMessage("");
                }, 6000);
            return;
        }

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
    };

    return (
        <div style={styles.card}>
            <h1 style={styles.heading}>Contact</h1>
            <div style={styles.content}>
                <div>
                    <p>Hello {name}</p>
                    <form className="form">
                        <input
                            style={styles.input}
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="name"/>
                        <input
                            style={styles.input}
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="email"/>
                        <input
                            style={styles.input}
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="message"/>

                    <button style={styles.button} onClick={submitFormHandler}>
                        Submit
                    </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Card;