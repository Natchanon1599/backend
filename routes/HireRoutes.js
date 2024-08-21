const express = require('express');
const router = express.Router();
const { Hire } = require('../server');  // Import Hire model

// POST route for submitting the hire form
router.post('/', async (req, res) => {
    try {
        const { name, company, email, message } = req.body;
        
        // Validate input
        if (!name || !company || !email || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create new hire record
        const newHire = await Hire.create({
            name,
            company,
            email,
            message,
        });

        res.status(201).json({ message: 'Form submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
