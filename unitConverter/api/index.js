const express = require('express');
const weightRouter = require('./routes/WeightRoutes')
const app = express();
const PORT = 5000;

app.use("/weight",weightRouter)

app.get("/api/health", (req,res) => {
	res.send(`<h1>Hello World</h1>`)
})


app.listen(PORT, () => {
	console.log(`The API is listening to PORT:${PORT}`)
})
