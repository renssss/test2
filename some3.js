const Animal = function(options){
    this.name = options.name;
    this.color = options.color;
}

const dog = new Animal({name: "Alpha", color: "blue"});

console.log(dog);