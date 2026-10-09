import Experience from "./Experience";

// Put your photo (transparent-background PNG works best) in /public and change this path:
const PHOTO = "/photo.png";

const systems = [
  ["DevOps", "Git, Docker, CI / CD"],
  ["Firewalls & Network", "Fortinet, Sophos, Cisco Meraki, MikroTik"],
  ["Servers & Virtualization", "Proxmox, VMware, Windows Server, Linux"],
  ["Web apps & REST APIs", "Laravel, CodeIgniter, React, Next.js"],
];

const skills = [
  ["IT support", "End-user and remote support, hardware, software and network troubleshooting, incident resolution"],
  ["Infrastructure", "Windows, Linux, Windows Server, Proxmox, VMware, server maintenance, system backup"],
  ["Network & security", "Fortinet, Sophos, Cisco Meraki, MikroTik, VPN, firewall administration, wireless"],
  ["Development", "PHP (Laravel, CodeIgniter), JavaScript (React, Next.js), HTML, CSS, REST APIs"],
  ["Data & platforms", "MySQL, PostgreSQL, Google Workspace, Microsoft 365, Intune, Odoo, SAP"],
  ["DevOps & operations", "Docker, CI/CD, GitLab, Git, Zabbix, Grafana, Prometheus, asset and vendor management"],
];

const earlier = [
  ["Full Stack Developer", "PT Mitra Pembangunan International", "2018 to 2019"],
  ["IT Supervisor", "PT Adelphi Transasia Indonesia", "2017 to 2018"],
  ["IT Specialist", "Cekindo Business Group", "2016 to 2017"],
  ["IT Staff", "PT Inkha Belyan International", "2015 to 2016"],
];

const certs = ["MTCNA, MikroTik Certified Network Associate (ID Network)", "Cisco Meraki Training (Udemy)", "Data Science Bootcamp (Dibimbing)", "Web Programming (Codepolitan)", "Business English Conversation (LIA)"];

export default function Home() {
  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">Billy Prasasti</a>
        <nav>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="pill">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero-photo" src={PHOTO} alt="Billy Prasasti" />
          <div className="hero-text">
            <span className="bar" />
            <h1>IT Specialist &amp; Full Stack Developer</h1>
            <p className="lead">
              11+ years across support, networks and web development.
            </p>
            <a className="down" href="#running" aria-label="Scroll down">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
            </a>
          </div>
          <div className="hero-side">
            <div>
              <h4>About me</h4>
              <p>Senior IT Infrastructure at Cartrack Indonesia. Based in Jakarta, open to new roles.</p>
              <a className="more" href="/Billy_Prasasti_CV.pdf" download>Download CV</a>
            </div>
            <div>
              <h4>My work</h4>
              <p>Support, Firewalls, Servers, DevOps, Web apps.</p>
              <a className="more" href="#experience">See experience</a>
            </div>
            <div>
              <h4>Follow me</h4>
              <div className="social">
                <a href="https://linkedin.com/in/billy-prasasti" aria-label="LinkedIn">in</a>
                <a href="https://wa.me/6285882391230" aria-label="WhatsApp">wa</a>
                <a href="mailto:Billyprasasti@gmail.com" aria-label="Email">@</a>
              </div>
            </div>
          </div>
        </section>

        <section id="running" className="strip">
          <div className="board-head"><span>What I keep running</span><span className="live"><i /> All systems operational</span></div>
          <div className="strip-grid">
            {systems.map(([n, d]) => (
              <div className="row" key={n}>
                <i className="pip" />
                <div><strong>{n}</strong><small>{d}</small></div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <p className="sub">Filter by the side of the work you care about.</p>
          <Experience />
          <h3>Earlier roles</h3>
          <ul className="earlier">
            {earlier.map(([r, c, y]) => (
              <li key={c}><strong>{r}</strong><span>{c}</span><em>{y}</em></li>
            ))}
          </ul>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <p className="sub">One person who can cover the whole stack, from the wall socket to the browser.</p>
          <div className="skills">
            {skills.map(([t, d]) => (
              <div key={t}><h3>{t}</h3><p>{d}</p></div>
            ))}
          </div>
        </section>

        <section className="section two">
          <div>
            <h2>Education</h2>
            <p><strong>Bachelor of Information Technology (S.Kom)</strong><br />Pamulang University, 2011 to 2017<br />GPA 3.10</p>
            <h3>Languages</h3>
            <p>Indonesian (native)<br />English (professional working proficiency)</p>
          </div>
          <div>
            <h2>Certifications</h2>
            <ul className="plain">{certs.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Need someone who can run IT and build software?</h2>
          <p>I reply fast. Let&apos;s talk about what your team needs.</p>
          <div className="cta center">
            <a className="btn light" href="mailto:Billyprasasti@gmail.com">Billyprasasti@gmail.com</a>
            <a className="btn ghost" href="https://wa.me/6285882391230">WhatsApp +62 858 8239 1230</a>
            <a className="btn ghost" href="https://linkedin.com/in/billy-prasasti">LinkedIn</a>
          </div>
        </section>
      </main>
      <footer className="foot">© {new Date().getFullYear()} Billy Prasasti</footer>
    </>
  );
}
