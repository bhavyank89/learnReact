import express from 'express';
import { body, validationResult } from 'express-validator';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetchuser from '../middleware/fetchuser.js';

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// ROUTE 1 : Create a user at /auth/createuser (No Login Required)
router.post('/createuser', [
    // Validation
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
], async (req, res) => {

    // Check for error in validation
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
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
        success = true;

        // sending JWT Token
        res.json({ success, JWTToken });

    } catch (error) {
        // Check for error such as if user Email already exists or not
        res.status(500).send({ success, error: error.message });
    }
});

// ROUTE 2 : Authenticate a user at /auth/login (No Login Required)
router.post('/login', [
    // Validation
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must not be empty').exists(),
], async (req, res) => {

    // Check for error in validation
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        // check if user email exists in database
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            // if user email does not exists
            return res.status(400).json({ success, error: "Please login with correct credential" });
        }

        // check if password is correct
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            // if password does not match
            return res.status(400).json({ success, error: "Please login with correct credential" });
        }

        // return a token if password matches
        // creating JWT Tokens
        const userId = {
            user: {
                id: user.id
            }
        }
        const JWT_Signature = "inotebookisagre@t"
        const JWTToken = jwt.sign(userId, JWT_Signature);
        success = true;

        // sending JWT Token
        res.json({ success, JWTToken });

    } catch (e) {
        res.status(500).send({ success, error: e.message });
    }

})


// ROUTE 3 : get user data from /auth/getuser (Login Required)
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {
        res.status(500).send({ error: error.message });
    }

})

export default router;
