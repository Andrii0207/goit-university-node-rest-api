import Contact from "../models/Contact.js"


const listContacts = (search = {}) => {
    const { filter = {}, fields = "" } = search;
    return Contact.find(filter, fields)
};

const getContactById = _id => Contact.findById(_id)

const removeContact = id => Contact.findByIdAndDelete(id)

const addContact = data => Contact.create(data);

const updateContact = (id, data) => Contact.findByIdAndUpdate(id, data)

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact
} 
