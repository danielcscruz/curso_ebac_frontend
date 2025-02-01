
function Pokemon (name, number, type){
    this.number = number;
    this.name = name;
    this.type = type;
    this.move = Move(type);
    this.attack = function(){
        console.log(this.name + " used " + this.move + "!!!")
    }
}

function Pokemon_gen2 (name, number, type, gender, shiny){
    Pokemon.call(this, name, number, type);
    this.gender = gender;
    this.shiny = shiny;
}

function Pokemon_gen3 (name, number, type, gender, shiny, ability){
    Pokemon_gen2.call(this, name, number, type, gender, shiny);
    this.ability = ability;
}


function Move(type){
    switch(type){
        case "electric": return "Thundershock"; break;
        case "water": return "Water Gun"; break;
        case "fire": return "Ember"; break;
        case "normal": return "Scratch"; break;
        case "ice": return "Blizzard"; break;
        case "fighting": return "Punch"; break;
        case "poison": return "Toxic"; break;
        case "ground": return "Stomp"; break;
        case "flying": return "Dust"; break;
        case "psychic": return "Confusion"; break;
        case "bug": return "Bug Bite"; break;
        case "rock": return "Rock Throw"; break;
        case "ghost": return "Lick"; break;
        case "Dragon": return "Razor leaf"; break;
        case "grass": return "Gragon Claw"; break;
        default: return "Scratch";
    }
}

const pikachu = new Pokemon("pikachu", 25, "electric");
const pikachu_gen2 = new Pokemon_gen2("pikachu", 25, "electric", "male", false)
const pikachu_gen3 = new Pokemon_gen3("pikachu", 25, "electric", "male", false, "Static" )

console.log(pikachu)
console.log(pikachu_gen2)
console.log(pikachu_gen3)

pikachu_gen3.attack();



