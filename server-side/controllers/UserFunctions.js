import User from '../models/UserSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Criar usuário (POST /api/create-user)
export const CreateUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: "Username and password are required." });
        }

        // Verifica se o username já existe
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ msg: "Username already taken." });
        }

        // Criptografar senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar novo usuário
        const newUser = await User.create({ username, password: hashedPassword });

        // Responder com sucesso e dados do usuário
        res.status(201).json({ msg: "User created successfully!", user: newUser });

    } catch (error) {
        res.status(500).json({ message: "Error creating user", error: error.message });
    }
};


// Login do usuário
export const LoginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: "Username and password are required." });
        }

        // Verifica se o usuário existe
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Compara a senha
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ msg: "Invalid Credentials" });
        }

        // Criar token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Retornar o username junto com o token
        res.status(200).json({ msg: "Login Successful!", token, user: { username: user.username } });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
};

// Middleware de Autenticação
export const authenticateToken = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ msg: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1];

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(403).json({ msg: "Invalid token." });
    }
};

// Buscar todos os usuários (GET /api/users) - Somente para usuários autenticados
export const GetUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
};
