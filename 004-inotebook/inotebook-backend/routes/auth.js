import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

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
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        });
        res.json(user);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

export default router;
