const express =  require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/',(req,res) => res.send('Ankit Pandey is full stack developer.'));
app.listen(port,() => console.log(`example appon port ${port}`))
