"use client";
import { useState } from "react";

const skills = [
  ["Languages", ["Python", "Java", "C/C++", "SQL"]],
  ["AI / Machine Learning", ["PyTorch", "Edge Impulse", "Machine Learning"]],
  ["Embedded & Hardware", ["Arduino IDE", "Microcontrollers", "Sensors", "RGB LEDs"]],
  ["Tools & Platforms", ["GitHub", "Google Cloud Platform", "Git"]],
];
const projects = [
  {name:"Raahé",subtitle:"AI-powered travel assistant · February 2026",description:"An AI-powered navigation assistant designed for Indian cities, with personalized routes based on fastest, cheapest, and traffic-avoiding preferences. Planned capabilities include multilingual support, live GPS navigation, voice alerts, transport-mode detection, route recalculation, and cost estimation.",tags:["Python","AI/ML","GUI Development","Navigation"],url:"https://github.com/Spadyyy"},
  {name:"Password Generator",subtitle:"Python · Tkinter · March 2026",description:"A GUI password generator that creates secure, memorable passwords from user-defined words. Combines words, numbers, and special characters, with one-click clipboard copying and no-space generation.",tags:["Python","Tkinter","GUI Development"],url:"https://github.com/Spadyyy"},
];
export default function Home(){
 const [dark,setDark]=useState(false);
 return <main className={dark?"dark":""} style={{background:"var(--background)",color:"var(--foreground)",minHeight:"100vh"}}>
  <div className="shell">
   <header id="home" className="hero">
    <div><div className="eyebrow">Computer Science · Kolkata, India</div><h1>Spandan Saha</h1><p className="lead">Computer Science student exploring AI/ML, embedded systems, and software development — turning ideas into useful, real-world projects.</p><div className="actions"><a className="pill" href="mailto:sahaspandan0@gmail.com">✉ Email me</a><a className="pill" href="https://github.com/Spadyyy" target="_blank" rel="noreferrer">↗ GitHub</a><a className="pill" href="https://linkedin.com/in/spandan0212" target="_blank" rel="noreferrer">↗ LinkedIn</a></div></div>
    <img className="avatar" src="https://avatars.githubusercontent.com/u/213771445?v=4" alt="Spandan Saha profile" />
   </header>
   <section id="about"><h2 className="section-title">About</h2><p className="bodycopy">I’m Spandan, a Computer Science student at the Institute of Engineering and Management. I’m interested in building practical systems at the intersection of AI, machine learning, electronics, and software. I enjoy experimenting with hardware and intelligent models, from embedded prototypes to tools that solve everyday problems.</p></section>
   <section id="experience"><h2 className="section-title">Experience</h2><article className="item"><div className="mark">IEM</div><div className="item-main"><div className="item-head"><div><h3>Intern · Chrysalis – IEM Research Foundation</h3><div className="sub">Kolkata, West Bengal · Internship</div></div><div className="date">May – July 2026</div></div><p className="desc">Worked on AI- and electronics-based smart souvenirs for academic conferences, spanning product design, hardware/software development, embedded systems, and prototyping. Implemented Arduino-based systems with sensors and RGB LEDs. Trained, optimized, and deployed machine-learning models with PyTorch and Edge Impulse for edge-device inference, contributing to integration, testing, debugging, and deployment.</p></div></article></section>
   <section id="education"><h2 className="section-title">Education</h2><article className="item"><div className="mark">IEM</div><div className="item-main"><div className="item-head"><div><h3>Institute of Engineering and Management</h3><div className="sub">Bachelor of Technology · Computer Science</div></div><div className="date">Jul 2024 – May 2028</div></div><p className="desc">Relevant coursework includes Cyber Security Fundamentals, Security and Privacy in TOR Network, Advanced System Security Design, DDoS Attacks and Defenses, Cloud Computing, Machine Learning, and Prompt Essentials.</p></div></article><article className="item"><div className="mark">SMI</div><div className="item-main"><div className="item-head"><div><h3>Sudhir Memorial Institute</h3><div className="sub">School education</div></div><div className="date">Apr 2010 – Mar 2024</div></div><p className="desc">AISSE: 94% · AISSCE: 84.2%</p></div></article></section>
   <section id="skills"><h2 className="section-title">Skills</h2>{skills.map(([group,items])=><div key={group as string} style={{marginBottom:16}}><div className="eyebrow" style={{marginBottom:9}}>{group as string}</div><div className="skills">{(items as string[]).map(s=><span className="skill" key={s}>{s}</span>)}</div></div>)}</section>
   <section id="projects"><h2 className="section-title">Selected Projects</h2><div className="project-grid">{projects.map(p=><a className="project" href={p.url} target="_blank" rel="noreferrer" key={p.name}><h3>{p.name} ↗</h3><div className="sub">{p.subtitle}</div><p>{p.description}</p><div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></a>)}</div></section>
   <section id="contact"><h2 className="section-title">Get in touch</h2><p className="bodycopy">Have an idea, collaboration, or opportunity in mind? Feel free to reach out.</p><div className="actions"><a className="pill" href="mailto:sahaspandan0@gmail.com">sahaspandan0@gmail.com</a><a className="pill" href="tel:+918336820736">+91 83368 20736</a><a className="pill" href="https://linkedin.com/in/spandan0212" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="pill" href="https://github.com/Spadyyy" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
   <footer className="footer">Designed and built for Spandan Saha · © 2026</footer>
  </div>
  <nav className="nav" aria-label="Main navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a><button onClick={()=>setDark(!dark)} aria-label="Toggle theme">{dark?"☀":"☾"}</button></nav>
 </main>
}
