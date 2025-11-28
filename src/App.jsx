import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Eagerly load critical components for the landing page
import Cursor from "./components/Cursor"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/compo/service";
import WorkProcess from "./components/compo/WorkProcess";

// Lazy load secondary routes and non-critical components
const Login = lazy(() => import("./components/Login"));
const Register = lazy(() => import("./components/Register"));
const Dashboard = lazy(() => import("./components/compo/Dasboard"));
const ChatWidget = lazy(() => import("./components/ChatWidget"));
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";

// Simple loading spinner or fallback
const LoadingFallback = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'var(--bg-color, #0f0f0f)',
    color: 'var(--text-color, #fff)'
  }}>
    Loading...
  </div>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show preloader for 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Cursor />
                <Header />
                <Hero />
                <Projects />
                <Skills />
                <Services />
                <WorkProcess />
                <Education />
                <Experience />
                <About />
                <Contact />
                <Footer />
                <Suspense fallback={null}>
                  <ChatWidget />
                </Suspense>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
