var ask = require("readline-sync");



var gameOver = false
var endBattle = false

var inventory = []

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

function Character(cName, level, hp, exp, weapon, armor, inventory) {
    this.name = cName
    this.level = level
    this.hp = hp
    this.exp = exp
    this.weapon = weapon
    this.armor = armor
    this.inventoruy = inventory
}
Character.prototype.attack = function () {
    var damage = (this.weapon.attack / 100) * Math.floor(Math.random() * 33) + 1
    return Math.floor(damage)
}

var cloud = new Character('Cloud Strife', 1, 45, 0, busterSword, bronzeBangle, inventory)
var tifa = new Character('Tifa Lockhart', 1, 38, 0, leatherKnuckles, bronzeBangle,inventory)
var barret = new Character('Barret Wallace', 1, 54, 0, gatlingGun, bronzeBangle,inventory)
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
    var damage = Math.floor(Math.random() * this.attackValue) + 1
    // console.log("You have inflicted " + damage + " points of damage")

    return Math.floor(damage)
}

var militaryPolice = new Enemy('Military-Police', 2, 30, 6, 4, 0, 0, 16, 'potion')
var monoDrive = new Enemy('Mono-Drive', 2, 28, 3, 6, 3, 4, 18, 'potion')
var guardDog = new Enemy('Guard-Dog', 3, 42, 8, 4, 2, 2, 20, 'ether')





// console.log(monoDrive)

// --------------------------------------------------------------
// WALKING
// --------------------------------------------------------------

function walk() {
    endBattle = false
    console.log('You are walking')
    var encounterChance = Math.floor(Math.random() * 4) + 1
    var enemyOption = [militaryPolice, monoDrive, guardDog]
    var enemyIndex = enemyOption[Math.floor(Math.random() * 3)]
    console.log("you have chosen to walk")
    if (encounterChance === 1) {
        console.log('You have encountered ' + enemyIndex.name)
        battle()

    }

    // FLEE
    function flee() {
        fleeChance = Math.floor(Math.random() * 3) + 1
        if (fleeChance === 3) {
            console.log("You have fleed the battle! ")
            endBattle = true
        } else {
            console.log("Fleeing was unsuccessful")
        }

    }
    // --------------------------------------------------------------
    // BATTLE
    // --------------------------------------------------------------
    function battle() {
        endBattle = false
        while (characterChoice.hp > 0 && enemyIndex.hp > 0 && endBattle === false) {
            var battle = ask.keyInSelect(battleOptions, 'Choose your action')
            if (battle === 0) {
                enemyIndex.hp = enemyIndex.hp - characterChoice.attack()
                console.log("You have inflicted " + characterChoice.attack() + " points of damage")
                console.log(enemyIndex.name + "'s" + " hp" + " is now " + enemyIndex.hp + " points")
                characterChoice.hp = characterChoice.hp - enemyIndex.attack()
                console.log(enemyIndex.name + " Has inflicted " + enemyIndex.attack() + " points of damage")
                console.log(characterChoice.name + "'s " + " hp" + " is now " + characterChoice.hp + " points")
            }
            if (characterChoice.hp <= 0) {
                console.log(enemyIndex.name + " has defeated you")

                endBattle = true
            } else if (enemyIndex.hp <= 0) {
                console.log("You have defeated " + enemyIndex.name)
                characterChoice.exp = characterChoice.exp + enemyIndex.exp;
                console.log(characterChoice.exp)
                console.log("You have earned " + enemyIndex.exp + " experience points")
                inventory.push(enemyIndex.win)
                console.log("You received a " + enemyIndex.win)
                endBattle = true
            }
            else if (battle === 1) {
                flee()
            }



        }

        // console.log(enemyIndex.hp)
        // console.log(characterChoice.hp)
    }
}
var battleOptions = ['Attack', "Flee"]

var walkingActions = ['(W)alk', '(I))nventory', '(S)witch character']


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
console.log(characterChoice.hp)
// while (!gameOver) {



while (characterChoice.hp >= 0) {

    var nonBattleOptions = ask.keyIn(walkingActions, 'What action will you take? ')
    if (nonBattleOptions === 'w') {
        walk()
        // if(gameOver === true){
        //     break;
        // }
    } else if (nonBattleOptions === "i") {
        nonBattleOptions = inventory
    } else if (nonBattleOptions === 's') {
        console.log('You have chosen to switch your character')
        switchCharacter()
    }
    if (gameOver === true) {
        break;
    }
}
// }
