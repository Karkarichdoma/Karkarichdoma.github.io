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
        </section>
      </main>
    </Layout>
  );
}
