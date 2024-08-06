import express from 'express';
import fetchuser from '../middleware/fetchuser.js';
import Notes from '../models/Notes.js';

const router = express.Router();

// ROUTE 1 : fetching all notes of a user GET : /notes/fetchall ( Login Required )
router.get('/fetchall', fetchuser, async (req, res) => {

    try {
        const allNotes = await Notes.findOne({ user: req.user.id });
        console.log(req.body);
        res.json(allNotes);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }


})

export default router;