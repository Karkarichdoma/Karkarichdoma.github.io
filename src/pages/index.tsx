import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="A Docusaurus-based template for GitHub Pages."
    >
      <main className="hero">
        <section className="container">
          <p className="heroSubtitle">welcome to</p>
          <h1 className="heroTitle">Chemistry Honors</h1>
          <p className="heroDescription">source of chemistry notes, practice problems, and formula sheets.</p>
          <div className="heroButtons">
            <Link className="button button--primary" to="/docs/intro">
              Continue
            </Link>
          </div>

          <div className="homeCards">
            <Link className="homeCard" to="/docs/chemistry-units/intro">
              <h3>Chemistry Units</h3>
              <p>Explore chapter-by-chapter notes across the full course.</p>
            </Link>
            <Link className="homeCard" to="/docs/practice-problems/intro">
              <h3>Practice Problems</h3>
              <p>Work through exercises and step-by-step examples.</p>
            </Link>
            <Link className="homeCard" to="/docs/formula-sheets/intro">
              <h3>Formula Sheets</h3>
              <p>Keep key equations and constants handy in one place.</p>
            </Link>
          </div>

          <div className="homeUnitList">
            <h2>Popular units</h2>
            <div className="unitLinks">
              <Link to="/docs/chemistry-units/chapter-1-chemical-foundations/intro">Chapter 1</Link>
              <Link to="/docs/chemistry-units/chapter-3-stoichiometry/intro">Chapter 3</Link>
              <Link to="/docs/chemistry-units/chapter-6-thermochemistry/intro">Chapter 6</Link>
              <Link to="/docs/chemistry-units/chapter-10-liquids-and-solids/intro">Chapter 10</Link>
              <Link to="/docs/chemistry-units/chapter-13-chemical-equilibrium/intro">Chapter 13</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
