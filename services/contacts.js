// import { nanoid } from 'nanoid'
// import fs from "fs/promises"
// import path from "path"

// const contactsPath = path.resolve("db", "contacts.json")

// export async function listContacts() {

//     const contactList = await fs.readFile(contactsPath, "utf-8")
//     return JSON.parse(contactList);
// }

// export async function getContactById(contactId) {
//     const contactList = await listContacts();

//     const result = contactList.find(item => item.id === contactId)
//     return result || null;
// }

// export async function removeContact(contactId) {

//     const contactList = await listContacts();
//     const index = contactList.findIndex(item => item.id === contactId);

//     if (index === - 1) {
//         return null;
//     }
//     const [result] = contactList.splice(index, 1);

//     fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2))
//     return result;
// }

// export async function addContact(name, email, phone) {
//     const contactList = await listContacts();

//     const newContact = { id: nanoid(), name, email, phone };

//     contactList.push(newContact);

//     await fs.writeFile(contactsPath, JSON.stringify(contactList, null, 2));
//     return newContact;
// }
