import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Spandan Saha, Computer Science student interested in AI/ML, embedded systems, and software development.",
};

export default function ResumePage() {
  return <main className="resume-page">
    <div className="resume-toolbar"><a href="/">← Back to portfolio</a><button onClick={() => window.print()}>Print / Save as PDF</button></div>
    <article className="resume-sheet">
      <header className="resume-header"><h1>Spandan Saha</h1><p>Madhyamgram, Barasat, Kolkata, West Bengal</p><p><a href="mailto:sahaspandan0@gmail.com">sahaspandan0@gmail.com</a> · +91 83368 20736</p><p><a href="https://linkedin.com/in/spandan0212">linkedin.com/in/spandan0212</a> · <a href="https://github.com/Spadyyy">github.com/Spadyyy</a></p></header>
      <section><h2>Education</h2><div className="resume-row"><strong>Institute of Engineering and Management</strong><span>Jul 2024 – May 2028</span></div><p>Bachelor of Technology in Computer Science · Kolkata, West Bengal</p><div className="resume-row"><strong>Sudhir Memorial Institute</strong><span>Apr 2010 – Mar 2024</span></div><p>AISSE: 94% · AISSCE: 84.2%</p><p><b>Relevant coursework:</b> Security and Privacy in TOR Network, Advanced System Security Design, DDoS Attacks and Defenses, Machine Learning, Cyber Security Fundamentals, Cloud Computing, Prompt Essentials.</p></section>
      <section><h2>Experience</h2><div className="resume-row"><strong>Chrysalis – IEM Research Foundation · Intern</strong><span>May – Jul 2026</span></div><p>Kolkata, West Bengal</p><ul><li>Developed AI- and electronics-based smart souvenirs for academic conferences, spanning product design, hardware/software development, embedded systems, and prototyping.</li><li>Implemented embedded systems using Arduino microcontrollers, sensors, RGB LEDs, and Arduino IDE.</li><li>Trained, optimized, and deployed machine-learning models using PyTorch and Edge Impulse for edge-device inference.</li><li>Contributed to end-to-end product development, including prototyping, hardware-software integration, testing, debugging, and deployment.</li></ul></section>
      <section><h2>Projects</h2><div className="resume-row"><strong>Raahé – AI-Powered Travel Assistant</strong><span>Feb 2026</span></div><ul><li>Designed an AI-powered navigation concept for Indian cities addressing traffic complexity, multimodal transport, and language barriers.</li><li>Planned personalized route recommendations by fastest, cheapest, and traffic-avoiding preferences, with traffic analysis, transport-mode detection, and route recalculation.</li><li>Designed for 20+ Indian languages, conversational AI, live GPS navigation, voice alerts, walking-distance evaluation, and cost estimation.</li></ul><div className="resume-row"><strong>Password Generator · Python, Tkinter</strong><span>Mar 2026</span></div><ul><li>Created a GUI password generator using user-defined words, combined with numbers and special characters.</li><li>Added one-click clipboard copying and password generation without spaces.</li></ul></section>
      <section><h2>Technical Skills</h2><p><b>Languages:</b> Python, Java, C, C++, SQL</p><p><b>Developer tools:</b> VS Code, Git, GitHub, Google Cloud Platform, Edge Impulse</p><p><b>Technologies:</b> Tkinter, basic AI/ML, GUI development, Arduino IDE, PyTorch</p></section>
      <section><h2>Leadership &amp; Extracurricular</h2><p><b>Class Captain:</b> Served as class monitor for 7 years, bridging teacher–student communication and maintaining classroom discipline.</p><p><b>Arts and Creativity (2010–2022):</b> Diploma holder; developed visual design and creative skills through artwork, enhancing design thinking for GUI/UX.</p><p><b>Technical Exploration (2024–Present):</b> Self-learning and building projects in web, app development, and AI/ML focused on GUI design and practical problem-solving.</p></section>
    </article>
  </main>;
}
