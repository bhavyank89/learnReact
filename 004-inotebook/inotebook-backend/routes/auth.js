import express from 'express';
import User from '../models/User.js'

const router = express.Router();

router.post('/', async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);

    res.send("Hello Auth");
})

export default router;