const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
	const { username } = req.body;

	try {
		const r = await axios.put(
			'https://api.chatengine.io/users/',
			{username: username, secret: username, first_name: username},
			{headers: {"private-key": process.env.PRIVATE_KEY}}
		)
		return res.status(r.status).json(r.data);
	} catch (e) {
		return res.status(e.r.status).json(e.r.data);
	}
});


app.listen(process.env.PORT || 3001, ()  =>  console.log("Server is running on port 3001"));