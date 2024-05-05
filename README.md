# Створення REST API для роботи з колекцією контактів.

## REST API повинен підтримувати такі раути:

| Routes                | comments                                                                                                                                  |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>__GET__</kbd> /api/contacts     | * Викликає функцію-сервіс <kbd>listContacts</kbd> для роботи з json-файлом <kbd>contacts.json</kbd>. Повертає масив всіх контактів в json-форматі зі статусом <kbd>200</kbd> |
| <kbd>__GET__</kbd> /api/contacts/:id | * Викликає функцію-сервіс <kbd>getContactById</kbd> для роботи з json-файлом <kbd>contacts.json</kbd>, * Якщо контакт за id знайдений, повертає об'єкт контакту в json-форматі зі статусом <kbd>200</kbd>, * Якщо контакт за id не знайдено, повертає json формату <kbd>{"message": "Not found"}</kbd> зі статусом <kbd>404</kbd> |
| <kbd>__DELETE__</kbd> /api/contacts/:id | * Викликає функцію-сервіс removeContact для роботи з json-файлом <kbd>contacts.json</kbd>, * Якщо контакт за <kbd>id</kbd> знайдений і видалений, повертає об'єкт видаленого контакту в json-форматі зі статусом <kbd>200</kbd>, * Якщо контакт за <kbd>id</kbd> не знайдено, повертає <kbd>json</kbd> формату <kbd>{"message": "Not found"}</kbd> зі статусом <kbd>404</kbd> |
| <kbd>__POST__</kbd> /api/contacts | * Отримує <kbd>body</kbd> в json-форматі з полями <kbd>{name, email, phone}</kbd>. Усі поля є обов'язковими - для валідації створи у файлі <kbd>contactsSchemas.js</kbd> (знаходиться у папці <kbd>schemas</kbd>) схему з використаням пакета <kbd>Joi</kbd>,   *Якщо в <kbd>body</kbd> немає якихось обов'язкових полів (або передані поля мають не валідне значення), повертає json формату <kbd>{"message": error.message}</kbd> (де <kbd>error.message</kbd> - змістовне повідомлення з суттю помилки) зі статусом <kbd>400</kbd>, * Якщо <kbd>body</kbd> валідне, викликає функцію-сервіс <kbd>addContact</kbd> для роботи з json-файлом <kbd>contacts.json</kbd>, з передачею їй даних з <kbd>body</kbd>, * За результатом роботи функції повертає новостворений об'єкт з полями <kbd>{id, name, email, phone}</kbd> і статусом <kbd>201</kbd> |
| <kbd>__PUT__</kbd> /api/contacts/:id | * Отримує <kbd>body</kbd> в json-форматі з будь-яким набором оновлених полів <kbd>(name, email, phone)</kbd> (всі поля вимагати в боді як обов'язкові не потрібно: якщо якесь із полів не передане, воно має зберегтись у контакта зі значенням, яке було до оновлення), * Якщо запит на оновлення здійснено без передачі в <kbd>body</kbd> хоча б одного поля, повертає json формату <kbd>{"message": "Body must have at least one field"}</kbd> зі статусом <kbd>400</kbd>, * Передані в боді поля мають бути провалідовані - для валідації створи у файлі <kbd>contactsSchemas.js</kbd> (знаходиться у папці <kbd>schemas</kbd>) схему з використанням пакета <kbd>Joi</kbd>. Якщо передані поля мають не валідне значення, повертає json формату <kbd>{"message": error.message}</kbd> (де <kbd>error.message</kbd> - змістовне повідомлення з суттю помилки) зі статусом <kbd>400</kbd>, * Якщо з <kbd>body</kbd> все добре, викликає функцію-сервіс <kbd>updateContact</kbd>, яку слід створити в файлі <kbd>contactsServices.js</kbd> (знаходиться в папці <kbd>services</kbd>). Ця функція має приймати <kbd>id</kbd> контакта, що підлягає оновленню, та дані з <kbd>body</kbd>, і оновити контакт у json-файлі <kbd>contacts.json</kbd>, * За результатом роботи функції повертає оновлений об'єкт контакту зі статусом <kbd>200</kbd>, * Якщо контакт за <kbd>id</kbd> не знайдено, повертає json формату <kbd>{"message": "Not found"}</kbd> зі статусом <kbd>404</kbd> |

