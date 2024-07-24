import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.post('/createuser', [
    // Validation
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
], async (req, res) => {

    // Check for error in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Encrypting password using salt and hash
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // creating user
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });

        // creating JWT Tokens
        const userId = {
            user: {
                id: user.id
            }
        }
        const JWT_Signature = "inotebookisagre@t"
        const JWTToken = jwt.sign(userId, JWT_Signature);

        // sending JWT Token
        res.json({ JWTToken });

    } catch (error) {
        // Check for error such as if user Email already exists or not
        res.status(500).send({ error: error.message });
    }
});

export default router;
