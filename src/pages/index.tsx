import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
    {
        title: <>拥抱 React</>,
        imageUrl: 'img/undraw_react.svg',
        description: (
            <>
                探索 React 新技术在 Taro3 中的可行性，挖掘 Taro3 潜能。
            </>
        ),
    },
    {
        title: <>易于整合</>,
        imageUrl: 'img/undraw_product_teardown.svg',
        description: (
            <>
                开箱即用，快速上手，屏蔽不必要的实现细节。
            </>
        ),
    },
    {
        title: <>持续构建</>,
        imageUrl: 'img/undraw_building_blocks.svg',
        description: (
            <>
                不断发掘，持续更新；拥抱开源，欢迎参与提交代码，共同完善，共同提高。
            </>
        ),
    },
]

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl)
    return (
        <div className={classnames('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

function Home() {
    const context = useDocusaurusContext()
    const { siteConfig = {} } = context
    return (
        <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">
            <header className={classnames('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs')}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    )
}

export default Home
