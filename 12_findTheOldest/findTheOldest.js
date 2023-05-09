const findTheOldest = function(people) {

    people.sort((a, b) => (getAge(a.yearOfBirth, a.yearOfDeath)) > (getAge(b.yearOfBirth, b.yearOfDeath)) ? -1 : 1);
    return people[0];
};

function getAge(birth, death) {
    if (!death) death = new Date().getFullYear();
    let age = death - birth; 
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;
