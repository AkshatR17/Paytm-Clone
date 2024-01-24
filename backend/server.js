const express = require("express");
const rootRouter = require('./routes/index');

const app = express();

app.use('api/v1', rootRouter);

app.use(cors());
app.use(express.json());

app.listen(3000, ()=>{
   console.log(`Server is listening on port 3000`); 
});