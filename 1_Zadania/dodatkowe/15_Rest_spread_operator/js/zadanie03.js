let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];
console.log("Zadanie 03:");

function setFunnyName(...param) {
    people.push(...people, ...param)
}

setFunnyName({person: "Antoni", profession: "drwal"}, {person: "Janusz", profession: "kierowca"});
console.log(people);
