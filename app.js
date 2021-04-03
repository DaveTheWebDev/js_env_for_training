import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const generateNameAndSurname = () => {
  return axios
    .get('https://randomuser.me/api/')
    .then((res) => res.data.results[0].name)
    .catch((err) => console.log(err));
};
const generateId = () => {
  return uuidv4();
};
const generateAge = (max = 85, min = 18) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const generatePhoneNumber = (numberLength = 9) => {
  let phoneNumber = '';
  for (let index = 0; index < numberLength; index++) {
    const number = Math.floor(Math.random() * 10);
    phoneNumber += number;
  }
  return phoneNumber;
};
const generateCountry = () => {
  return axios
    .get('https://restcountries.eu/rest/v2/all?fields=name')
    .then((res) => {
      const countries = res.data;
      const randomId = Math.floor(Math.random() * countries.length);
      return countries[randomId].name;
    })
    .catch((err) => console.log(err));
};

const generateHuman = async () => {
  const names = await generateNameAndSurname();
  const name = names.first;
  const surname = names.last;
  const email = `${name}${surname}@test.pl`;
  const age = generateAge();
  const phone = generatePhoneNumber();
  const country = await generateCountry();
  const id = generateId();
  const human = {
    name,
    surname,
    email,
    age,
    phone,
    country,
    id,
  };
  console.log(human);
  return human;
};

generateHuman();
