import Contact from "../models/Contact.js"

// const listContacts = () => Contact.find();

const listContacts = () => Contact.find();


async function getContactById(id) {

}

async function removeContact(id) {

}

const addContact = data => Contact.create(data);

async function updateContact(id, data) {

}

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact
}