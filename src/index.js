import React from 'react'
import ReactDom from 'react-dom'
import ApolloCient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import { App } from './App'

const client = new ApolloCient({
  uri: 'https://petgram-server-cris-criistianrod.vercel.app/graphql',
})

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
)
