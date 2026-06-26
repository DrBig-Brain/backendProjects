const parseValue = (req) => {
    const { val } = req.query;
    const numericValue = Number(val);

    if (val === undefined || val === "" || Number.isNaN(numericValue)) {
        throw new Error("Please provide a valid numeric value");
    }

    return numericValue;
};

exports.fromCelciusToFahrenheit = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: (value * (9 / 5)) + 32 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.fromFahreneheitToCelcius = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: (value - 32) * 5 / 9 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.fromCelciusToKelvin = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value + 273 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};