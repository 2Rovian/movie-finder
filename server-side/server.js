import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/api', userRoutes);

// Rota inicial
app.get('/', (req, res) => {
    res.json({ msg: "Hello World!" });
});

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Conectado ao MongoDB!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
});
