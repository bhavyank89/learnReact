import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import Notes from '../models/Notes.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();

// ROUTE 1 : fetching all notes of a user GET : /notes/fetchall ( Login Required )
router.get('/fetchall', fetchuser, async (req, res) => {
    try {

        const allNotes = await Notes.find({ user: req.user.id });
        console.log(allNotes);
        res.json(allNotes);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

// ROUTE 2 : create note for a user POST : /notes/create ( Login Required )
router.post('/create', fetchuser, [
    // Validation
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    // Check for error in validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        const { title, description, tag } = req.body;
        const newNote = await Notes.create({
            user: req.user.id,
            title: title,
            description: description,
            tag: tag
        })
        console.log(newNote);
        res.status(200).json(newNote);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;