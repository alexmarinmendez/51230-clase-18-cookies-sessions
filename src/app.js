import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()
app.use(cookieParser('victoriasecret'))

app.get('/', (req, res) => {
    //detectar el pais del client
    res.cookie('location', 'PE', { signed: true }).send('Bienvenido!')
})

app.get('/preference', (req, res) => {
    res.cookie('preference', 'dark', { signed: true }).json({ message: 'Configuración guardada con éxito!'})
})

app.get('/mode', (req, res) => {
    // res.send(req.cookies)
    res.send(req.signedCookies)
})

app.get('/logout', (req, res) => {
    res.clearCookie('location').send('Cookie removed!')
})

app.listen(8080, () => console.log('Server Up'))