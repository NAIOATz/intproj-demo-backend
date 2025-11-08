module.exports = (err, req, res, next) => {
    const code = err.message === 'Not found' ? 404 : 500;
    res.status(code).json({ error: err.message });
};
