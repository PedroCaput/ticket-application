import app from './config/express'
import db from './config/database'

const PORT = process.env.PORT || 3000

app.get('/', async (req, res) => {
  const result = await db.any('SELECT NOW()')
  res.send(result)
})

app.post('/auth/register', async (req, res) => {
  const {name, email, password, confirmPassword} = req.body

  if(!name) {
    return res.status(422).json({msg: 'o nome é obrigatório!'})
  }
  return res.status(200).json({msg: 'não deu erro'})
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
