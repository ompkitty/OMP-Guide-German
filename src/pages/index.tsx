import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

const features = [
  {
    title: 'Terminal-nativ',
    description: 'Läuft direkt im Terminal – auf macOS, Linux und Windows.',
  },
  {
    title: 'IDE-Integration',
    description: 'Navigation, Refactorings und Debugging wie in einer IDE.',
  },
  {
    title: 'Subagenten',
    description: 'Größere Aufgaben parallel an mehrere Helfer verteilen.',
  },
  {
    title: 'Konfigurierbar',
    description: 'Modelle, Rollen und Designs nach deinem Geschmack anpassen.',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/einstieg/was-ist-oh-my-pi">
            Dokumentation lesen
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/installation/anleitung">
            Installation
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Deutschsprachige Dokumentation zu Oh My Pi (OMP), dem Coding-Agent fürs Terminal.">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((feature, idx) => (
                <div key={idx} className={clsx('col col--3', styles.feature)}>
                  <Heading as="h3">{feature.title}</Heading>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}