////////////////////////////////////////////////////////////////////////////////////////////
//Hercules RPG game v.1
//By. Garett M. Bare
//Created Feb 17 2022
////////////////////////////////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////////////////////////////
"Use Strict";


let attributes = {
    Hercules: {
        name: "Hercules",
        maxHealth: 300,
        // atkPwr: 0,
        atkMoves: ['strike', 'kick', 'smash', 'boulder_throw'],
        atkPwr: {
            strike: 40,
            kick: 60,
            smash: 80,
            boulder_throw: 160
        }

    },

    NemeanLion: {
        name: "Nemean Lion",
        maxHealth: 300,
        // atkPwr: 0,
        atkMoves: ['claw', 'bite', 'rush', 'roar'],
        atkPwr: {
            claw: 20,
            bite: 60,
            rush: 50,
            roar: 30

        }
    },

    LerneanHydra: {
        name: "Lernean Hydra",
        maxHealth: 450,
        atkMoves: ['claw', 'bite', 'roar', 'spit'],
        atkPwr: {
            claw: 20,
            bite: 30,
            roar: 30,
            spit: 70

        }
    },

    Cerberus: {
        name: "Cerberus",
        maxHealth: 900,
        // atkPwr: 40,
        atkMoves: ['claw', 'bite', 'roar', 'bark'],
        atkPwr: {
            claw: 20,
            bite: 30,
            roar: 30,
            bark: 90

        }
    }
}


let storyElements = {
    NemeanLion: {
        name: "Nemean Lion"
        , locationOne: ['Forest', 'Plains', 'Island']
        , locationTwo: ['Triton', 'Desolation', 'Covetous Desire']
        , sizeOne: ['remarkably', 'incredibly', 'stupendously', 'disappointingly']
        , sizeTwo: ['Large', 'Small', 'Average']
        , restingAction: ['resting', 'eating', 'wandering']
        , noticedAction: ['snarl', 'roar', 'single tear']
        , combatStartAction: ['pounces', 'swipes', 'bites']
    },
    LerneanHydra: {
        name: "Lernean Hydra"
        , locationOne: ['Swamps', 'Marshes', 'Sewers']
        , locationTwo: ['Odysseus', 'Fetid Dreams', 'Untimely Demise']
        , sizeOne: ['remarkably', 'incredibly', 'stupendously', 'disappointingly']
        , sizeTwo: ['Large', 'Small', 'Average']
        , restingAction: ['resting', 'eating', 'wandering']
        , noticedAction: ['snarl', 'roar', 'single tear on each head']
        , combatStartAction: ['pounces', 'swipes', 'bites']
    },

    Cerberus: {
        name: "Cerberus"
        , locationOne: ['Pits', 'Gates', 'Bridge']
        , locationTwo: ['Underworld', 'Tartarus', 'Hades']
        , sizeOne: ['remarkably', 'incredibly', 'stupendously', 'disappointingly']
        , sizeTwo: ['Large', 'Small', 'Average']
        , restingAction: ['resting', 'eating', 'wandering']
        , noticedAction: ['snarl', 'bark', 'yip']
        , combatStartAction: ['pounces', 'swipes', 'bites']
    }
}

let enemies = ['NemeanLion', 'LerneanHydra', 'Cerberus']
// console.log(AttackResolve(Cerberus, Hercules, 0))

function Attack(player, combatantTwo) {
    let playerAtk ="";
    for(let i = 0; i < player.atkMoves.length; i++){
        playerAtk = `${playerAtk}${i +1}: ${player.atkMoves[i].replace("_"," ")} - ${player.atkPwr[player.atkMoves[i]]} dmg\n`
    }
    while (player.maxHealth > 0 && combatantTwo.maxHealth > 0) {
        console.log(AttackResolve(player, combatantTwo, (parseInt(prompt(`please enter a value from 1 to ${player.atkMoves.length}\n${playerAtk}`)))))
        console.log(AttackResolve(combatantTwo, player, (Math.floor(Math.random() * (combatantTwo.atkMoves.length)) + 1)))
    }
};

function AttackResolve(atkCharacter, defChar, atkAction) {
    let damage = atkCharacter.atkPwr[atkCharacter.atkMoves[atkAction - 1]];
    defChar.maxHealth = defChar.maxHealth - damage
    console.log(atkAction - 1)
    return (`${atkCharacter.name} attacked ${defChar.name} with a ${atkCharacter.atkMoves[atkAction -1].replace("_"," ")} for ${damage} damage!\n${defChar.name} has ${defChar.maxHealth} left!`)
};

function StoryTime(player, sceneActor) {
    // return (sceneActor) 
    return(`The ${sceneActor.name} lives within the ${sceneActor.locationOne[Math.floor(Math.random() * ((sceneActor.locationOne.length)))]} of ${sceneActor.locationTwo[Math.floor(Math.random() * (sceneActor.locationTwo.length ))]}. Contrary to popular belief, the ${sceneActor.name} is actually ${sceneActor.sizeOne[Math.floor(Math.random() * (sceneActor.sizeOne.length ))]} ${sceneActor.sizeTwo[Math.floor(Math.random() * (sceneActor.sizeTwo.length ))]}. When ${player.name} comes across the ${sceneActor.name} it is ${sceneActor.restingAction[Math.floor(Math.random() * (sceneActor.restingAction.length ))]}. Suddenly with a ${sceneActor.noticedAction[Math.floor(Math.random() * (sceneActor.noticedAction.length ))]} , the ${sceneActor.name} ${sceneActor.combatStartAction[Math.floor(Math.random() * (sceneActor.combatStartAction.length ))]} `)
}

function RunGame() {
    let i = 0;
    while ((attributes.Hercules.maxHealth > 0) && (attributes.NemeanLion.maxHealth > 0 || attributes.LerneanHydra.maxHealth > 0 || attributes.Cerberus.maxHealth > 0)) {
        alert(StoryTime(attributes.Hercules, storyElements[enemies[i]]))
        Attack(attributes.Hercules, attributes[enemies[i]])
        i++
        // alert(StoryTime(Hercules, storyElements.NemeanLion))
        // Attack(Hercules, NemeanLion)
        // alert(StoryTime(Hercules, storyElements.LerneanHydra))
        // Attack(Hercules, LerneanHydra)
        // alert(StoryTime(Hercules, storyElements.Cerberus))
        // Attack(Hercules, Cerberus)
    }
    let winORlose = attributes.Hercules.maxHealth > 0 ? alert("Congradulations!\nYou have successfully slain all that was set before you") : alert("You Died\nBetter Luck Next Time")
}

RunGame()