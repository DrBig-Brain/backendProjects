const parseValue = (req) => {
    const { val } = req.query;
    const numericValue = Number(val);

    if (val === undefined || val === "" || Number.isNaN(numericValue)) {
        throw new Error("Please provide a valid numeric value");
    }

    return numericValue;
};

exports.fromKg = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value * 1000 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.fromPound = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value * 453.592 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.fromOunce = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value * 28.3495 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.toKg = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value / 1000 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.toPound = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value / 453.592 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.toOunce = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value / 28.3495 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};