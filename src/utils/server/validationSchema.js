import Joi from "joi";

export const contactSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot exceed 50 characters",
  }),

  email: Joi.string().email({ minDomainSegments: 2 }).required().messages({
    "string.empty": "Email is required",
    "string.email": "Please enter a valid email address",
  }),

  message: Joi.string().min(10).max(1000).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message must be at least 10 characters long",
    "string.max": "Message cannot exceed 1000 characters",
  }),
});

export const signupSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  name: Joi.string().min(2).required(),
});

export const jobSchema = Joi.object({
  role: Joi.string().required(),
});

export const jobContentSchema = Joi.object({
  job_id:Joi.string().required(),
  heading	: Joi.string().required(),
  content:Joi.string().required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
