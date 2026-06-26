const express = require('express');
const weightRouter = require('./routes/WeightRoutes');
const lengthRouter = require('./routes/LengthRoutes');
const TempRouter = require('./routes/TemperatureRoutes');
const app = express();
const PORT = 5000;

app.use("/weight", weightRouter);
app.use("/length", lengthRouter);
app.use("/temp", TempRouter);

app.get("/api/health", (req,res) => {
	res.send(`<h1>Hello World</h1>`)
})


app.listen(PORT, () => {
	console.log(`The API is listening to PORT:${PORT}`)
})
