const Joi = require('joi');

const validateSignUpData = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().max(30).required(),
    lastName: Joi.string().max(30).required(),
    phoneNumber: Joi.string()
      .length(11)
      .pattern(/^[0-9]+$/)
      .required(),
    password: Joi.string()
      .min(8)
      .pattern(/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
      .required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = { validateSignUpData };
