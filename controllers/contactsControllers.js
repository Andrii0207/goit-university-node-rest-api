import { json } from "express";
import contactsService from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js"
// import createContactSchema from "../schemas/contactsSchemas.js"


export const getAllContacts = async (req, res, next) => {
    try {
        const contactList = await contactsService.listContacts();
        res.json(contactList);

    } catch (error) {
        next(error);
    }
};

export const getOneContact = async (req, res, next) => {
    const { id } = req.params;
    try {
        const contact = await contactsService.getContactById(id);
        if (!contact) {
            throw HttpError(404, "Not found");
        }
        res.json(contact);

    } catch (error) {
        next(error);
    }
}

export const deleteContact = async (req, res, next) => {
    const { id } = req.params;
    try {
        const responce = await contactsService.removeContact(id);
        if (!responce) {
            throw HttpError(404, "Not found")
        }

        res.json(responce);
    } catch (error) {
        next(error);
    }
};

export const createContact = async (req, res, next) => {
    // const checkData = createContactSchema(req)
    try {
        const responce = await contactsService.addContact(req.body)
        console.log("POST >", responce)
        res.json(responce)

    } catch (error) {
        next(error)
    }

};

export const updateContact = (req, res) => { };


