const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
    const mongoURI = process.env.MONGO_URI;

    if (!mongoURI) {
        throw new Error('MONGO_URI no está definida en el archivo .env');
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB conectado');
} catch (error) {
    console.error('Error conectando a MongoDB:', error);
    process.exit(1); 
}
};

module.exports = connectDB;