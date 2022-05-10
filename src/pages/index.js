import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle hero__subtitle--custom'>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'
          >
            Начать изучение
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <>
      <Layout
        title={`${siteConfig.title}`}
        description='Карманная книга по TypeScript'
      >
        <HomepageHeader />
        <main>
          <div className='text--center'>
            <img src='/img/js256.png' alt='' />
          </div>
          <div className='text--center padding-horiz--md'>
            <h3>MyJavaScript</h3>
            <p>
              <a
                href='https://my-js.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Руководства, шпаргалки, вопросы и другие материалы по
                JavaScript, React, TypeScript, Node.js, Express, Prisma,
                GraphQL, Docker и множеству других технологий, связанных с
                разработкой веб-приложений
              </a>
            </p>
          </div>
        </main>
      </Layout>
    </>
  )
}
