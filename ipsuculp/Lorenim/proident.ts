interface Person {
  age: number;
}

function createPerson(age: number): Person {
  if (age <= 0) {
    throw new Error('Age must be a positive number.');
  }
  return { age };
}

const person = createPerson(26);
console.log(`Person's age: ${person.age}`);
