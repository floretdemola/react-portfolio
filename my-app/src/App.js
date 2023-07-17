import React, { useState } from 'react';
import Navbar from './components/Navigation';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

const styles = {
  main: {
    background: "#858585",
    paddingTop: 0.1,
    minHeight: '100vh',
  },
}



function App() {

  const [page, setPage] = useState('AboutMe');

  let CurrentPage;

  if (page === 'AboutMe') CurrentPage = AboutMe;
  if (page === 'Contact') CurrentPage = Contact;
  if (page === 'Portfolio') CurrentPage = Portfolio;
  if (page === 'Resume') CurrentPage = Resume;

  return (
    <div style={styles.main}>
      <>
      <Header />
      <Navbar setPage={setPage} />
      <CurrentPage />
      <Footer />
      </>
    </div>
  );
}

export default App;
