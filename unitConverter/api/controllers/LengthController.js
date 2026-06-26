const parseValue = (req) => {
    const { val } = req.query;
    const numericValue = Number(val);

    if (val === undefined || val === "" || Number.isNaN(numericValue)) {
        throw new Error("Please provide a valid numeric value");
    }

    return numericValue;
};

exports.fromKm = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value * 1000 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.fromMile = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value * 1609.34 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.fromFeet = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value * 0.3048 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.toKm = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value / 1000 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.toMile = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value / 1609.34 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.toFeet = (req, res) => {
    try {
        const value = parseValue(req);
        res.json({ result: value / 0.3048 });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};