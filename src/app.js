import express from 'express'
// import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
// app.use(cookieParser('victoriasecret'))
app.use(session({
    secret: 'victoriasecret',
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    //detectar el pais del client
    // res.cookie('location', 'PE', { signed: true }).send('Bienvenido!')
    req.session.user = {
        name: 'Alex',
        role: 'teacher'
    }
    res.send('ok')
})

app.get('/preference', (req, res) => {
    // res.cookie('preference', 'dark', { signed: true }).json({ message: 'Configuración guardada con éxito!'})
    req.session.preference = 'dark'
    res.send('ok')
})

app.get('/mode', (req, res) => {
    // res.send(req.cookies)
    // res.send(req.signedCookies)
    res.send(req.session.user)
})

app.get('/logout', (req, res) => {
    res.clearCookie('location').send('Cookie removed!')
})

app.listen(8080, () => console.log('Server Up'))