module.exports = (role) => (req, res, next) => {
  if (req.user.role !== role)
    return res.status(401).json({
      error: "You do not have the permissions to access this endpoint",
    });

  next();
};
