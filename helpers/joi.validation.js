const Joi = require('joi');

const userParamsValidation = {
	createUser: {
		body: {
			email: Joi.string().required(),
			name: Joi.string().required(),
			phone: Joi.string().required()
		}
	}
};

module.exports = {
	userParamsValidation
};
