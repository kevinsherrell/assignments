var ask = require("readline-sync");
var name = ask.question("What is your name? ");
console.log("Welcome " + name + ". " + "You have now entered the world of Final Fantasy")
var gameOver = false




// EQUIPMENT
// ------WEAPONS
function Weapon(name, attack, attackP, magic, materiaSlots) {
    this.name = name
    this.attack = attack
    this.attackP = attackP
    this.magic = magic
    this.materiaSlots = materiaSlots
}
var busterSword = new Weapon('Buster Sword', 18, 96, 2, 2)
var leatherKnuckles = new Weapon('Leather Knuckles', 13, 99, 0, 0)
var gatlingGun = new Weapon('Gatling Gun', 14, 97, 0, 1)

// ------ARMOR
function Armor(name, defense, defenseP, magicDefense, magicDefenseP, materiaSlots) {
    this.name = name
    this.defense = defense
    this.defenseP = defenseP
    this.magicDefense = magicDefense
    this.magicDefenseP = magicDefenseP
    this.materiaSlots = materiaSlots
}

var bronzeBangle = new Armor('Bronze Bangle', 8, 0, 0, 0, 0)
console.log(bronzeBangle)

// ACTIONS


// todo list

// character creation
function Character(cName, level, hp, exp, weapon, armor) {
    this.name = cName
    this.level = level
    this.hp = hp
    this.exp = exp
    this.weapon = weapon
    this.armor = armor

    Character.prototype.attack = function () {
        var damage = (this.weapon.attack / 100) * Math.floor(Math.random() * 33) + 1
        // console.log(Math.floor(Math.random() * damage) + 1)
        console.log(Math.floor(damage))
    }
}
// CLOUD STRIFE ----------------------
var cloud = new Character('Cloud Strife', 1, 45, 0, busterSword, bronzeBangle)


//  -----------------------------------

// TIFA LOCKHART ----------------------
var tifa = new Character('Tifa Lockhart', 1, 38, 0, leatherKnuckles, bronzeBangle)
// console.log(tifa)
// ------------------------------------
// Barret Wallace----------------------
var barret = new Character('Barret Wallace', 1, 54, 0, gatlingGun, bronzeBangle)
// console.log(barret)
// ------------------------------------
console.log(cloud, tifa, barret)

// walking
// running from a fight
// fighting
// enemy creation
function Enemy(eName, level, hp, exp, item) {
    this.name = eName
    this.level = level
    this.hp = hp
    this.exp = exp
    this.win = item
}

var characterOptions = [cloud.name, tifa.name, barret.name]
var militaryPolice = new Enemy('Military-Police', 2, 30, 16, 'potion')
var monoDrive = new Enemy('Mono-Drive', 2, 28, 18, 'potion')
var guardDog = new Enemy('Guard-Dog', 3, 42, 20, 'ether')

// console.log(militaryPolice)

// attacking enemy
// enemy attacking
// enemy dying (including dropping an item)
// character dying

// console.log(characterOptions)

// while (!gameOver) {
//     var characterChoice = ask.keyInSelect(characterOptions, "Choose Your Character")
//     if (characterChoice === 0) {
//         characterChoice = cloud
//         console.log("You have chosen " + characterChoice.name)
//     } else if (characterChoice === 1) {
//         characterChoice = tifa
//         console.log("You have chosen " + characterChoice.name)
//     } else if (characterChoice === 2) {
//         characterChoice = barret
//         console.log("You have chosen " + characterChoice.name)
//     }
//     console.log(characterChoice)
// }
