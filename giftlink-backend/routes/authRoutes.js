router.post('/register', async (req, res) => {
    try {
        // Task 1: Connect to `giftsdb` in MongoDB through `connectToDatabase` in `db.js`
		 // {{insert code here}}

        // Task 2: Access MongoDB collection
		 // {{insert code here}}

		//Task 3: Check for existing email
		 // {{insert code here}}

		const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);
		const email = req.body.email;

		// {{insert code here}} //Task 4: Save user details in database
		 // {{insert code here}} //Task 5: Create JWT authentication with user._id as payload
        logger.info('User registered successfully');
        res.json({authtoken,email});
    } catch (e) {
         return res.status(500).send('Internal server error');
    }
});
