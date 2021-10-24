import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Спонсор',
    Svg: require('../../static/img/macloud-logo-2.svg').default,
    description: (
      <>
        Данный проект стал возможным благодаря поддержке{' '}
        <a
          href='https://macloud.ru/?partner=typescript'
          target='_blank'
          rel='noopener noreferrer'
        >
          хостинга VPS-серверов Маклауд
        </a>
        . При переходе по ссылке вы получите десятипроцентную скидку на аренду
        сервера
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='d-flex justify-content-center'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
