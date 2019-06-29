import React from 'react'
import Navigation from '../components/Navigation/index'
import App, { Container } from 'next/app'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Navigation />
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp