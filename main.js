////////////////////////////////////////////////////////////////////////////////////////////
//Hercules RPG game v.1
//By. Garett M. Bare
//Created Feb 17 2022
////////////////////////////////////////////////////////////////////////////////////////////
//
//
///////////////////////////////////////////////////////////////////////////////////////////
"use strict";

//To-Do for entity: determine best way to handle the attack menu/is there stamina? PP? attributes?





let races = {

    Human: {
        name:"Human",
        attributes: {
            strength:10,
            dexterity:10,
            constitution:10,
            perception:10
        },
        healthMod:1,
        speed:35,
        resistances:{
            slash:0,
            pierce:0,
            blunt:0,
            fire:0,
            frost:0,
            electric:0,
            sonic:0,
        }
    },

    NemeanLion: {
        name:"Nemean Lion",
        attributes: {
            strength:12,
            dexterity:13,
            constitution:8,
            perception:12
        },
        healthMod:1.5,
        speed:45,
        resistances:{
            slash:30,
            pierce:30,
            blunt:-15,
            fire:5,
            frost:5,
            electric:5,
            sonic:5,
        }
    },

    LerneanHydra: {
        name:"Lernean Hydra",
        attributes: {
            strength:15,
            dexterity:5,
            constitution:18,
            perception:12
        },
        healthMod:3,
        speed:15,
        resistances:{
            slash:-20,
            pierce:0,
            blunt:5,
            fire:-10,
            frost:10,
            electric:5,
            sonic:-10,
        },
    },

    Cerberus: {
        name:"Cerberus",
        attributes: {
            strength:12,
            dexterity:15,
            constitution:20,
            perception:18
        },
        healthMod:5,
        speed:15,
        resistances:{
            slash:-20,
            pierce:0,
            blunt:5,
            fire:-10,
            frost:10,
            electric:5,
            sonic:-10,
        },
    }, 

    DemiGod: {
        name:"Demi-God",
        attributes: {
            strength:15,
            dexterity:15,
            constitution:15,
            perception:15
        },
        healthMod:2,
        speed:35,
        resistances:{
            slash:10,
            pierce:10,
            blunt:10,
            fire:10,
            frost:10,
            electric:10,
            sonic:10,
        },
    },

    Harpy: {        
        name:"Harpy",
        attributes: {
            strength:5,
            dexterity:15,
            constitution:5,
            perception:15
        },
        healthMod:.75,
        speed:60,
        resistances:{
            slash:0,
            pierce:0,
            blunt:0,
            fire:0,
            frost:0,
            electric:0,
            sonic:0,
        },
    },
    
    Medusa: {        
        name:"Medusa",
        attributes: {
            strength:7,
            dexterity:18,
            constitution:10,
            perception:10
        },
        healthMod:1.75,
        speed:45,
        resistances:{
            slash:10,
            pierce:10,
            blunt:10,
            fire:10,
            frost:10,
            electric:10,
            sonic:10,
        },
    },

    Faun: {        
        name:"Faun",
        attributes: {
            strength:10,
            dexterity:15,
            constitution:10,
            perception:12
        },
        healthMod:1,
        speed:50,
        resistances:{
            slash:0,
            pierce:0,
            blunt:0,
            fire:0,
            frost:0,
            electric:0,
            sonic:0,
        },
    },
}

function attributeAllocation(strength,dexterity,constitution,perception, race){

};

Hercules: new entity("Hercules",({races.Human.attributes.strength + 2,races.Human.attributes.dexterity + 0,races.Human.attributes.constitution + 3,races.Human.attributes.perception + 0}) 5, 1, {strike: [10,100], throw_boulder:[60,80], bite:[25,100]}, 5, 0, , 100),

function entity(eName,eAttributes,eSpecies,eLevel,eAtk,eSpeed,eArmour,eResistances,eAccuracy,eExperience){
    this.name = eName;
    this.race = eSpecies;    
    this.attributes = eAttributes;
    this.maxHealth = this.healthMod + (this.healthMod * this.level)
    this.level = eLevel;
    this.atk = eAtk;
    this.speed = eSpeed;
    this.armour = eArmour;
    this.resistances = eResistances;
    this.accuracy = eAccuracy;
    this.experience = eExperience
};


function entity(eName, eSpecies, eAttributes,){
    this.name = eName;
    this.race = eSpecies;    
    this.attributes = (for(let i =0;i<Object.keys(eSpecies.attributes);i++)){

    }

    };

    // this.maxHealth = this.healthMod + (this.healthMod * this.level)
    // this.level = eLevel;
    // this.atk = eAtk;
    // this.speed = eSpeed;
    // this.armour = eArmour;
    // this.resistances = eResistances;
    // this.accuracy = eAccuracy;
    // this.experience = eExperience
};

let hello = {
    test:2,
    prod:1,
}
let goodbye = {
    test:2,
    prod:1,
}


// for (let i = 0; i < Object.keys(goodbye).length; i++){
//     console.log(Object.keys(goodbye)[i])
//     //onsole.log(hello[Object.keys(goodbye)] + goodbye[i])
// }
let characters = {

    Hercules: new entity("Hercules", 5, 1, {strike: [10,100], throw_boulder:[60,80], bite:[25,100]}, 5, 0, {}, 100),
    NemeanLion: new entity("Nemean Lion", 15, 1, {swipe: 30, peck: 12}, 5, 15, {slash:20, pierce:20, blunt:-10}, 100),
    
    
    
    
    // NemeanLion: {
    //     name: "Nemean Lion",
    //     maxHealth: 300,
    //     // atkPwr: 0,
    //     atkPwr: {
    //         claw: 20,
    //         bite: 60,
    //         rush: 50,
    //         roar: 30

    //     }
    // },

    LerneanHydra: {
        name: "Lernean Hydra",
        maxHealth: 450,
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

let enemies = ['NemeanLion', 'Harpies', 'Charybydis', 'Medusa', 'LerneanHydra', 'Cerberus']
// console.log(AttackResolve(Cerberus, Hercules, 0))

function Attack(player, combatantTwo) {
    let playerAtk ="";
    for(let i = 0; i < Object.keys(player.atkPwr).length; i++){
        playerAtk = `${playerAtk}${i +1}: ${Object.keys(player.atkPwr)[i].replace("_"," ")} - ${player.atkPwr[Object.keys(player.atkPwr)[i]]} dmg\n`
    }
    while (player.maxHealth > 0 && combatantTwo.maxHealth > 0) {
        console.log(AttackResolve(player, combatantTwo, (parseInt(prompt(`please enter a value from 1 to ${Object.keys(player.atkPwr).length}\n${playerAtk}`)))))
        console.log(AttackResolve(combatantTwo, player, (Math.floor(Math.random() * (Object.keys(player.atkPwr).length)) + 1)))
    }
};

function AttackResolve(atkCharacter, defChar, atkAction) {
    let damage = atkCharacter.atkPwr[Object.keys(atkCharacter.atkPwr)[atkAction - 1]];
    defChar.maxHealth = defChar.maxHealth - damage
    console.log(atkAction - 1)
    return (`${atkCharacter.name} attacked ${defChar.name} with a ${Object.keys(atkCharacter.atkPwr)[atkAction -1].replace("_"," ")} for ${damage} damage!\n${defChar.name} has ${defChar.maxHealth} left!`)
};

function StoryTime(player, sceneActor) {
    // return (sceneActor) 
    return(`The ${sceneActor.name} lives within the ${sceneActor.locationOne[Math.floor(Math.random() * ((sceneActor.locationOne.length)))]} of ${sceneActor.locationTwo[Math.floor(Math.random() * (sceneActor.locationTwo.length ))]}. Contrary to popular belief, the ${sceneActor.name} is actually ${sceneActor.sizeOne[Math.floor(Math.random() * (sceneActor.sizeOne.length ))]} ${sceneActor.sizeTwo[Math.floor(Math.random() * (sceneActor.sizeTwo.length ))]}. When ${player.name} comes across the ${sceneActor.name} it is ${sceneActor.restingAction[Math.floor(Math.random() * (sceneActor.restingAction.length ))]}. Suddenly with a ${sceneActor.noticedAction[Math.floor(Math.random() * (sceneActor.noticedAction.length ))]} , the ${sceneActor.name} ${sceneActor.combatStartAction[Math.floor(Math.random() * (sceneActor.combatStartAction.length ))]} `)
}

function RunGame() {
    let i = 0;
    while ((characters.Hercules.maxHealth > 0) && (characters.NemeanLion.maxHealth > 0 || characters.LerneanHydra.maxHealth > 0 || characters.Cerberus.maxHealth > 0)) {
        alert(StoryTime(characters.Hercules, storyElements[enemies[i]]))
        Attack(characters.Hercules, attributes[enemies[i]])
        i++
        // alert(StoryTime(Hercules, storyElements.NemeanLion))
        // Attack(Hercules, NemeanLion)
        // alert(StoryTime(Hercules, storyElements.LerneanHydra))
        // Attack(Hercules, LerneanHydra)
        // alert(StoryTime(Hercules, storyElements.Cerberus))
        // Attack(Hercules, Cerberus)
    }
    let winORlose = characters.Hercules.maxHealth > 0 ? alert("Congradulations!\nYou have successfully slain all that was set before you") : alert("You Died\nBetter Luck Next Time")
}

// RunGame()