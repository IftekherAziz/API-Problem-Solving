const person = {
    found: 2,
    message: "Found 2 persons",
    result: [
      {
        name: {
          common: "John",
          fullName: ["John", "Doe"]
        },
        age: 32,
        isMale: false,
        address: {
          street: "13/A St Joseph",
          house: 10,
        },
      },
      {
        name: {
          common: "Humayoun",
          fullName: ["Humayoun", "Kabir"]
        },
        age: 33,
        isMale: false,
        address: {
          street: "13/A St Lucia",
          house: 11,
        },
      },
    ]
  };

// console.log(personJson);

const personCount = document.getElementById('person-count');
personCount.innerText = person.message;

const personName = document.getElementById('person-name');
const personAge = document.getElementById('person-age');
const personAddress = document.getElementById('person-address');
const personHouse = document.getElementById('person-house');


personName.innerText = person.result[0].name.common;
personAge.innerText = person.result[0].age;
personAddress.innerText = person.result[0].address.street;
personHouse.innerText = person.result[0]. address.house;

const personName2 = document.getElementById('person-name2');
const personAge2 = document.getElementById('person-age2');
const personAddress2 = document.getElementById('person-address2');
const personHouse2 = document.getElementById("person-house");

personName2.innerText = person.result[1].name.common;
personAge2.innerText = person.result[1].age;
personAddress2.innerText = person.result[1].address.street;
personHouse2.innerText = person.result[0].address.house;








