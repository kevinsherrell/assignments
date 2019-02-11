var ask = require("readline-sync");
var gameOver = false

// --------------------------------------------------------------
// WEAPONS
// --------------------------------------------------------------

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

// --------------------------------------------------------------
// ARMOR
// --------------------------------------------------------------

function Armor(name, defense, defenseP, magicDefense, magicDefenseP, materiaSlots) {
    this.name = name
    this.defense = defense
    this.defenseP = defenseP
    this.magicDefense = magicDefense
    this.magicDefenseP = magicDefenseP
    this.materiaSlots = materiaSlots
}

var bronzeBangle = new Armor('Bronze Bangle', 8, 0, 0, 0, 0)

// --------------------------------------------------------------
// CHARACTERS
// --------------------------------------------------------------

function Character(cName, level, hp, exp, weapon, armor) {
    this.name = cName
    this.level = level
    this.hp = hp
    this.exp = exp
    this.weapon = weapon
    this.armor = armor
}
Character.prototype.attack = function () {
    var damage = (this.weapon.attack / 100) * Math.floor(Math.random() * 33) + 1
    return Math.floor(damage)
}

var cloud = new Character('Cloud Strife', 1, 45, 0, busterSword, bronzeBangle)
var tifa = new Character('Tifa Lockhart', 1, 38, 0, leatherKnuckles, bronzeBangle)
var barret = new Character('Barret Wallace', 1, 54, 0, gatlingGun, bronzeBangle)
var characterOptions = [cloud.name, tifa.name, barret.name]

function switchCharacter() {
    characterChoice = ask.keyInSelect(characterOptions, "Choose Your Character")
    if (characterChoice === 0) {
        characterChoice = cloud
        console.log("You have chosen " + characterChoice.name)
        // console.log(characterChoice)
    } else if (characterChoice === 1) {
        characterChoice = tifa
        console.log("You have chosen " + characterChoice.name)
        // console.log(characterChoice)
    } else if (characterChoice === 2) {
        characterChoice = barret
        console.log("You have chosen " + characterChoice.name)
        // console.log(characterChoice)
    }
}


// --------------------------------------------------------------
// ENEMIES
// --------------------------------------------------------------

function Enemy(eName, level, hp, attackValue, defense, magicAttack, magicDefense, exp, item) {
    this.name = eName
    this.level = level
    this.hp = hp
    this.attackValue = attackValue
    this.defense = defense
    this.magicAttack = magicAttack
    this.magicDense = magicDefense
    this.exp = exp
    this.win = item
}
Enemy.prototype.attack = function () {
    var damage = 3
    // (this.attack / 100) * Math.floor(Math.random() * 33) + 1
    return Math.floor(damage)
}

var militaryPolice = new Enemy('Military-Police', 2, 30, 6, 4, 0, 0, 16, 'potion')
var monoDrive = new Enemy('Mono-Drive', 2, 28, 3, 6, 3, 4, 18, 'potion')
var guardDog = new Enemy('Guard-Dog', 3, 42, 8, 4, 2, 2, 20, 'ether')







// --------------------------------------------------------------
// WALKING
// --------------------------------------------------------------

function walk() {
    console.log('You are walking')
    var encounterChance = Math.floor(Math.random() * 4) + 1
    var enemyOption = [militaryPolice, monoDrive, guardDog]
    var enemyIndex = enemyOption[Math.floor(Math.random() * 3)]
    console.log("you have chosen to walk")
    if (encounterChance === 1) {
        console.log('You have encountered ' + enemyIndex.name)
        battle()

    }
// --------------------------------------------------------------
// BATTLE
// --------------------------------------------------------------
function battle() {
    var battle = ask.keyInSelect(battleOptions, 'Choose your action')
    if (battle === 0) {
         enemyIndex.hp = enemyIndex.hp - characterChoice.attack()
         characterChoice.hp = characterChoice.hp - enemyIndex.attack()
    }
    console.log(enemyIndex.hp)
    console.log(cloud.hp)
}
}
var battleOptions = ['Attack', 'Defend', "Flee"]

var walkingActions = ['Walk', 'inventory', 'switch character']


var name = ask.question("What is your name? ");
console.log("Welcome " + name + ". " + "You have now entered the world of Final Fantasy")

var characterChoice = ask.keyInSelect(characterOptions, "Choose Your Character")


if (characterChoice === 0) {
    characterChoice = cloud
    console.log("You have chosen " + characterChoice.name)
    // console.log(characterChoice)
} else if (characterChoice === 1) {
    characterChoice = tifa
    console.log("You have chosen " + characterChoice.name)
    // console.log(characterChoice)
} else if (characterChoice === 2) {
    characterChoice = barret
    console.log("You have chosen " + characterChoice.name)
    // console.log(characterChoice)
}

while (!gameOver) {



    while (characterChoice.hp != 0) {
        var nonBattleOptions = ask.keyInSelect(walkingActions, 'What action will you take? ')
        if (nonBattleOptions === 0) {
            walk()
        } else if (nonBattleOptions === 1) {
            nonBattleOptions = inventory
        } else if (nonBattleOptions === 2) {
            console.log('You have chosen to switch your character')
            switchCharacter()
        }
    }
}
console.log(walk())