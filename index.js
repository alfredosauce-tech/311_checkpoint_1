const express = require('express');

const routes =require ('./routes/users')
const app = express();
app.use(express.json());

const port = process.env.PORT || 4000

app.get('/', (req, res) => res.send('default route'))
app.use(routes)

app.listen(port, () => {
  console.log('app is listening on:', port)
})
