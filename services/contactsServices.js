import fs from "fs/promises"
import path from "path"
import { nanoid } from "nanoid"

const contactsPath = path.resolve("db", "contacts.json")
const updateMovies = contacts => fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));


async function listContacts() {
    const contactList = await fs.readFile(contactsPath)
    return JSON.parse(contactList);
}

async function getContactById(id) {
    const contactList = await listContacts();
    const contact = contactList.find(item => item.id === id)
    return contact || null;
}

async function removeContact(id) {
    const contactList = await listContacts();
    const index = contactList.findIndex(item => item.id === id)

    if (index === -1) {
        return null;
    }

    const [result] = contactList.splice(index, 1)
    // fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2));
    await updateMovies(contactList)
    return result;
}

async function addContact(data) {
    const newContact = {
        id: nanoid(),
        ...data
    }
    const contactList = await listContacts();
    contactList.push(newContact)
    updateMovies(contactList)
    return newContact;
}

export default {
    listContacts,
    getContactById,
    removeContact,
    addContact
}