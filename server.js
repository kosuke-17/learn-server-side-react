import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './src/App'

const PORT = 3000
const app = express()

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />)

  const funcApp = <App />

  console.log({ app, func: funcApp })

  const html = `
        <html lang="ja">
        <head>
            <script src="client.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `

  res.send(html)
})

app.use(express.static('./build'))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
