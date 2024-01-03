
//https://fallout.fandom.com/wiki/Fallout_76_legendary_weapon_effects
const firstRoll = ["Bloodied", "Junkies", "Aristocrats", "Mutants"];
const secondRoll = ["+25% Faster firerate", " +50% crit damage", "-25% vats cost", "explosive bullets"];
const thirdRoll = ["+1 Agility", "+1 Intelligence", "+1 Strength", "+1 Charisma"];

const roll = () => {
    const starsAsciiArt = `★★★`;
  
    const first = firstRoll[Math.floor(Math.random() * firstRoll.length)];
    const second = secondRoll[Math.floor(Math.random() * secondRoll.length)];
    const third = thirdRoll[Math.floor(Math.random() * thirdRoll.length)];
  
    return `${starsAsciiArt} You rolled a legendary ${first} weapon with ${second} and ${third}`;
  };
console.log(roll());