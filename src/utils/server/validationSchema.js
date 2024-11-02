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
