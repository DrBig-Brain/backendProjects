exports.fromKg = (req,res) => {
    const {val} = req.query;
    res.json({result:val*1000})
}
exports.fromPound = (req,res) => {
    const {val} = req.query;
    res.json({result:val*453.592});
}
exports.fromOunce = (req,res) => {
    const {val} = req.query;
    res.json({result:val*28.3495});
}

exports.toKg = (req,res) => {
    const {val} = req.query;
    res.json({result:val/1000})
}

exports.toPound = (req,res) => {
    const {val} = req.query;
    res.json({result:val/453.592});
}

exports.toOunce = (req,res) => {
    const {val} = req.query;
    res.json({result:val/28.3495});
}