○	const express = require ‘express’
const app = express();

const port = 3000;
app.use(express.json());



app.static('/client')

app.listen(port, (err)=> {
  if (err){
    console.err(err);
  }
  console.log(`server listening on port ${port}`)
})ç