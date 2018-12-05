var json = `{
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
}`;

obj = JSON.parse(json);
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
console.log("=====");
console.log();

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





