const path = require('path')
const express = require('express')
const serveStatic = require('serve-static')
const serveFavicon = require('serve-favicon')

const app = express()

app.use(serveStatic(path.join(__dirname, '..', 'build')))
app.use(serveStatic(path.join(__dirname, '..', 'node_modules/react/umd')))
app.use(serveStatic(path.join(__dirname, '..', 'node_modules/react-dom/umd')))

app.use(serveFavicon(path.join(__dirname, 'favicon.ico')))

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.listen(8080, '0.0.0.0', () => {
	console.log('Dev server listening at http://0.0.0.0:8080')
})
