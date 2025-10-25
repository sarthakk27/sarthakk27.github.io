import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Metaverse Museum',
    url: 'https://dhrm1k.github.io/metaverse-museum/',
    description: 'Immersive, WebGL-powered 3D gallery—walk around and explore artworks in the browser.',
  },
  {
    title: 'Online Payment Integration',
    url: 'https://online-payment-integration.vercel.app',
    description: 'End‑to‑end checkout demo showing client + server flow, test cards, and success/failure states.',
  },
  {
    title: 'N8n Feedback Email Automation',
    url: 'https://github.com/sarthakk27/n8n-feedback-email-automation',
    description: 'Automates feedback intake in n8n—parses submissions, routes conditionally, and sends templated emails.'
  },
  {
    title: 'Unleash the GSAP',
    url: 'https://sarthakk27.github.io/unleash-the-gsap/',
    description: 'GSAP motion playground with micro‑interactions, timelines, and scroll‑triggered animations.'
  },
  {
    title: 'PromoCraft',
    url: 'https://promo-craft.vercel.app',
    description: 'Lightweight promo site—clean sections, responsive layout, and snappy Web Vitals.'
  },
];

const getDomain = (href) => {
  try {
    return new URL(href).hostname;
  } catch (_) {
    return href;
  }
};

const faviconFor = (href) => `https://icons.duckduckgo.com/ip3/${getDomain(href)}.ico`;

const ExternalIcon = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ext-icon">
    <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
);

const Projects = () => {
  return (
    <section className="projects">
      <header className="projects-header">
        <h1>Projects</h1>
      </header>
      <ul className="projects-grid" role="list">
        {projects.map((p) => {
          const domain = getDomain(p.url);
          return (
            <li key={p.url} className="project-card">
              <a className="project-link" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="project-top">
                  <img className="project-favicon" src={faviconFor(p.url)} alt="" loading="lazy" />
                </div>
                <h2 className="project-title">{p.title} <ExternalIcon /></h2>
                <p className="project-desc">{p.description}</p>
                <div className="project-meta">
                  <span className="project-domain">{domain}</span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
