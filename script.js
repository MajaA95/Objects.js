class Dog{
    constructor(name,kind,){
        this.name=name;
        this.kind=kind;
        

        
        console.log(`Dog ${this.name} is ${this.kind} `)
    }
    makeSound (sound){
console.log(`${this.name} make this sound: ${sound}`)};

}

let dog1=new Dog("Leo","Minispitz")
let dog2=new Dog("Bigi","Beagle")
let dog3=new Dog("Luna","Minispitz")

dog1.makeSound('Avavva')












