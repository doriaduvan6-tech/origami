const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); 


const infoList = [1,2,3]

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/items', (req, res) => {
    res.status(200).json({
        ms:"mensaje de prueba",
        data: infoList
        
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});