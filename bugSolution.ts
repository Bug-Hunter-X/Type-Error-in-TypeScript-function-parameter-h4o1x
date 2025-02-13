function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(people: string[]): string[] {
  return people.map(person => greeter(person));
}

let user = ["Jane User", "John User"];
console.log(greeterArray(user)); // This will work correctly

//Alternatively, you could handle single string input like this:
function greeterSingleOrArray(person: string | string[]): string | string[] {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return person.map(p => "Hello, " + p);
  }
}
console.log(greeterSingleOrArray(user));
console.log(greeterSingleOrArray("Jane User"));