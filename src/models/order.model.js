import joi from "joi";

export const orderSchema = joi.object({
    adress: joi.string().required(),
    method: joi.string().valid("Cartão de Crédito/Débito","PIX","Boleto").required(),
    status: joi.string().valid("Pending","In transit","Delivered").default("Pending")
});
