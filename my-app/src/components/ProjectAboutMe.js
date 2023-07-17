import React from "react";
import pic from "../../../images/IMG_8704.png";
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
    },
    image:  {
        width: "auto" ,
        margin: "auto",
        display: "block",
        borderRadius: 6,
        boxShadow: "rgba(0, 0, 0, 0.3)",
        marginBottom: '2rem',
    },
    picture: {
        paddingLeft: 20,
        paddingBottom: 20,
        paddingRight: 20,
        textAlign: "center",
    }
};

function Card() {
    return (
        <div style={styles.card}>
      <h1 style={styles.heading}>About Me</h1>
      <div style={styles.content}>
        <div style={styles.picture}>
        <img style={styles.image} src={pic} alt="Me" />
        </div>
        <p>
            My name is Fernando Loret de Mola. I live in Florida and I am pursuing a career in Software Engineering.</p>
            <p>
            I am a graduate from Florida Southern College where I earned my Bachelors of Science degree in Business Administration and Psychology in 2014. 
            I've worked at Publix for over 10 years and have recently decided to learn a new set of skills that will help me approach upcoming projects with a holisitic point of view. 
            I've worked on several projects where I managed a team to help create several sites and that helped my interest in this software development role. I am eager to learn and grow in this new field. 
        </p>
      </div>
    </div>
  );
}
export default Card;