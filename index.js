const express = require('express');
const connectDB = require('./config/config'); 
const dotenv = require('dotenv');
const tasks = require('./routes/task');


dotenv.config();

connectDB(); 

const app = express();

app.use(express.json());

app.use('/tasks', tasks);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Servidor corriendo en el puerto ${PORT}`);
});