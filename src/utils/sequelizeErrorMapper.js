function mapSequelizeError(exception) {
  const errors = exception.errors.map((error) => ({
    [error.path]: error.message,
  }));

  return errors;
}

module.exports = { mapSequelizeError };
