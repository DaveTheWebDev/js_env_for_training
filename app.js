import { v4 as uuidv4 } from 'uuid';

class Contact {
  constructor(name, surname, email) {
    this.uuid = uuidv4();
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.creationDate = new Date();
    this.modificationDate = new Date();
  }
  updateModificationDate() {
    this.modificationDate = new Date();
  }
  updateName(name) {
    this.updateModificationDate();
    this.name = name;
  }
  updateSurname(surname) {
    this.updateModificationDate();
    this.surname = surname;
  }
}

class Group {
  constructor(name, listArray) {
    this.uuid = uuidv4();
    this.name = name;
    this.list = listArray;
  }
  updateListName(listName) {
    this.name = listName;
  }
  addContact(contact) {
    this.list.push(contact);
  }
  removeContact(contact) {
    const list = [...this.list];
    const contactId = list.indexOf(contact);
    list.splice(contactId, 1);
    this.list = list;
  }
  isInGroup(contact) {
    return !!this.list.find((contactEl) => contactEl.uuid === contact.uuid);
  }
}

class AddressBook {
  constructor(contactsList, groupsList) {
    this.contactsList = contactsList;
    this.groupsList = groupsList;
  }

  addContact(contact) {
    this.groupsList.push(contact);
  }
  removeContact(contact) {
    const list = [...this.groupsList];
    const contactIndex = list.findIndex(
      (contactEl) => contactEl.uuid === contact.uuid
    );
    if (contactIndex !== -1) {
      list.splice(contactIndex, 1);
      this.groupsList = list;
    }
  }
  modifyContact(contact, field, value) {
    const list = [...this.groupsList];
    const contactIndex = list.findIndex(
      (contactEl) => contactEl.uuid === contact.uuid
    );
    if (contactIndex === -1) {
      console.log('nie ma takiego kontakut');
    } else {
      if (field in contact) {
        contact[field] = value;
      } else {
        console.log('nie ma tekiego pola');
      }
    }
  }
  addGroup(group) {
    this.groupsList.push(group);
  }
  removeGroup(group) {
    const list = [...this.groupsList];
    const groupIndex = list.findIndex((groupEl) => groupEl.uuid === group.uuid);
    if (groupIndex !== -1) {
      list.splice(groupIndex, 1);
      this.groupsList = list;
    }
  }
  modifyGroup(group, field, value) {
    const list = [...this.groupsList];
    const groupIndex = list.findIndex((groupEl) => groupEl.uuid === group.uuid);
    if (groupIndex === -1) {
      console.log('nie ma takiego kontakut');
    } else {
      if (field in group) {
        group[field] = value;
      } else {
        console.log('nie ma tekiego pola');
      }
    }
  }
  findContactByPharse(pharse) {
    const regExp = new RegExp(pharse, 'gi');
    const result = this.contactsList.filter((contact) => {
      const objValues = Object.values(contact);
      const cheked = objValues.filter((objValue) => {
        return regExp.test(objValue);
      });
      return cheked.length;
    });
    console.log(result);
    return result;
  }
}

const dupa = new Contact('daw1', 'ant', 'ddd');
const dupa1 = new Contact('daw2', 'ant', 'ddd');
const dupa2 = new Contact('daw3', 'ant', 'ddd');

const grupa = new Group('ziomki', [dupa, dupa1, dupa2]);

const listt = new AddressBook([dupa, dupa1, dupa2], [grupa]);

listt.findContactByPharse('ant');

// console.log(listt);
