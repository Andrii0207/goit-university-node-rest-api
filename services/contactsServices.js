import Contact from "../models/Contact.js"

// const listContacts = () => Contact.find();

function listContacts() {
    return Contact.find();
}

async function getContactById(id) {

}

async function removeContact(id) {

}

async function addContact(data) {

}

async function updateContact(id, data) {

}

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact
}