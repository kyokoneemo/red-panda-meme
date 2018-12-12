const obj = {
    "animals": [
        {
            "name": "Fido",
            "gender": "Male",
            "specie": "Dog"
        },
        {
            "name": "Cooper",
            "gender": "Male",
            "specie": "Dog"
        },
        {
            "name": "Fida",
            "gender": "Female",
            "specie": "Dog"
        },
        {
            "name": "Ben",
            "gender": "Male",
            "specie": "Dog"
        },
        {
            "name": "Simona",
            "gender": "Female",
            "specie": "Dog"
        },
        {
            "name": "Minnie",
            "gender": "Female",
            "specie": "Mouse"
        },
        {
            "name": "Roger",
            "gender": "Male",
            "specie": "Rabbit"
        },
        {
            "name": "Mickey",
            "gender": "Male",
            "specie": "Mouse"
        },
        {
            "name": "Bugs",
            "gender": "Male",
            "specie": "Rabbit"
        }
    ]
};

var matchedAnimals = [];
//Using a collection of matched Animals
//Happy path, checks if an animal does have a match
for (var i = 0; i < obj.animals.length; i++) {
    for (var j = i + 1; j < obj.animals.length; j++){
        if ((obj.animals[i]["specie"] == obj.animals[j]["specie"])
            && (obj.animals[i]["gender"] !== obj.animals[j]["gender"])
            && !matchedAnimals.includes(i)
            && !matchedAnimals.includes(j))
        {
            //console.log('We made a lovely couple out of '+ obj.animals[i]["name"] + ' '+ obj.animals[j]["name"]);
            matchedAnimals.push(i);
            matchedAnimals.push(j);
        }
    }
}
console.log(matchedAnimals)

//Using a new property on our animal pointing to it's match
for (var i = 0; i < obj.animals.length; i++) {
    for (var j = i + 1; j < obj.animals.length; j++){
        if ((obj.animals[i]["specie"] == obj.animals[j]["specie"])
            && (obj.animals[i]["gender"] !== obj.animals[j]["gender"])
            && obj.animals[i]["partner"] == null
            && obj.animals[j]["partner"] == null)
        {
            //console.log('We made a lovely couple out of '+ obj.animals[i]["name"] + ' '+ obj.animals[j]["name"]);
            obj.animals[i]["partner"] = obj.animals[j];
            obj.animals[j]["partner"] = obj.animals[i];
        }
    }
}
console.log(obj.animals[0]["name"])
console.log(obj.animals[0]["partner"]["name"])


//---------------------------------------------------------------
// an example result of matchedAnimalsObject object:
// matchedAnimals = {
//      1: [2, 5, 6] // 1 can be a good fit for 2 or 5 or 6
//      3: [4, 8, 7] // 3 can be a good fit for 4 or 8 or 7
// }
function getMatchedAnimalsObject(obj) {
    var matchedAnimalsObject = {};
    var animals = obj.animals;

    for (var i=0, l=animals.length; i<l; i++) {
        matchedAnimalsObject[i] = [];
        for (var j=0; j<l; j++) {
            if (
                i!==j &&
                animals[i].specie === animals[j].specie &&
                animals[i].gender !== animals[j].gender
            )
                matchedAnimalsObject[i].push(j);
        }
    }

    return matchedAnimalsObject;
}

// group animals into "matching" groups
let matchedAnimalsObject = getMatchedAnimalsObject(obj);
 //console.log(matchedAnimalsObject);

// get an unmatched list of animals
let unmatched = [];
for (let i in matchedAnimalsObject) {
    if (!matchedAnimalsObject[i].length) unmatched.push(parseInt(i));
}
//console.log(unmatched);
// add information about unmatched to the table
function $(s) {}
for (let i=0; i<unmatched.length; i++){
    $("#table").prepend(`<tr><td><strong>${obj.animals[unmatched[i]].name}</strong></td><td>${obj.animals[unmatched[i]].gender}</td><td>${obj.animals[unmatched[i]].specie}</td></tr>`);
}

let matched = [];
for (let i in matchedAnimalsObject) {
    if (matchedAnimalsObject[i].length) {
        for (let j=0; j<matchedAnimalsObject[i].length; j++) {
            let pair = [parseInt(i), matchedAnimalsObject[i][j]].sort().join("");
            if (matched.indexOf(pair) === -1) matched.push(pair);
        }
    }
}
// console.log(matched);
// add information about matched to the table
for (let i=0; i<matched.length; i++){
    let pair = matched[i].split("");
    $("#SpeciesMatched").after(`<tr><td><strong>${obj.animals[pair[0]].name}</strong></td><td>${obj.animals[pair[1]].name}</td><td>${obj.animals[pair[0]].specie}</td></tr>`);
}




