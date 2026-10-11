import { LazyMotion, MotionConfig, domMax } from "motion/react";
import { ThemeProvider } from "./context/ThemeContext";
import MainLayout from "./layout/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <ThemeProvider>
      {/* LazyMotion + `m` components keep the animation bundle small;
          reducedMotion="user" turns movement off for visitors who ask for it. */}
      <LazyMotion features={domMax} strict>
        <MotionConfig reducedMotion="user">
          <MainLayout>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Contact />
          </MainLayout>
        </MotionConfig>
      </LazyMotion>
    </ThemeProvider>
  );
}
