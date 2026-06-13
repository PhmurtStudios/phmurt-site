const DND_DATA = {
races: {
  human: { name:"Human", asi:{str:1,dex:1,con:1,int:1,wis:1,cha:1}, speed:30, size:"Medium", languages:["Common"], extraLanguages:1, traits:[{name:"Extra Language",desc:"You can speak, read, and write one extra language of your choice."},{name:"Ability Score Increase",desc:"Your ability scores each increase by 1."}], subraces:[] },
  'human-variant': { name:"Human (Variant)", asi:{}, asiChoice:2, speed:30, size:"Medium", languages:["Common"], extraLanguages:1, skillChoice:1, featChoice:true, traits:[{name:"Ability Score Increases",desc:"Increase two different ability scores of your choice by 1."},{name:"Skills",desc:"You gain proficiency in one skill of your choice."},{name:"Feat",desc:"You gain one feat of your choice."},{name:"Extra Language",desc:"You can speak, read, and write one additional language of your choice."}], subraces:[] },
  elf: { name:"Elf", asi:{dex:2}, speed:30, size:"Medium", languages:["Common","Elvish"], skills:["Perception"], traits:[{name:"Darkvision",desc:"60 ft. darkvision."},{name:"Keen Senses",desc:"Proficiency in Perception."},{name:"Fey Ancestry",desc:"Advantage on saving throws against being charmed, and magic can't put you to sleep."},{name:"Trance",desc:"Elves don't need to sleep. You can finish a long rest in 4 hours."}],
    subraces:[
      {id:"high-elf", name:"High Elf", asi:{int:1}, extraLanguages:1, traits:[{name:"Cantrip",desc:"You know one wizard cantrip of your choice."},{name:"Extra Language",desc:"You can read, speak, and write one extra language."}]},
      {id:"wood-elf", name:"Wood Elf", asi:{wis:1}, speed:35, traits:[{name:"Fleet of Foot",desc:"Your base walking speed increases to 35 feet."},{name:"Mask of the Wild",desc:"You can attempt to hide even when only lightly obscured by natural phenomena."}]},
      {id:"dark-elf", name:"Dark Elf (Drow)", asi:{cha:1}, traits:[{name:"Superior Darkvision",desc:"120 ft. darkvision."},{name:"Sunlight Sensitivity",desc:"Disadvantage on attack rolls and Perception checks in direct sunlight."},{name:"Drow Magic",desc:"You know the Dancing Lights cantrip. At 3rd level, Faerie Fire. At 5th level, Darkness."}]}
    ]
  },
  dwarf: { name:"Dwarf", asi:{con:2}, speed:25, size:"Medium", languages:["Common","Dwarvish"], traits:[{name:"Darkvision",desc:"60 ft. darkvision."},{name:"Dwarven Resilience",desc:"Advantage on saving throws against poison, resistance against poison damage."},{name:"Stonecunning",desc:"Double proficiency bonus on History checks related to stonework."}],
    subraces:[
      {id:"hill-dwarf", name:"Hill Dwarf", asi:{wis:1}, traits:[{name:"Dwarven Toughness",desc:"Your HP maximum increases by 1 per level."}]},
      {id:"mountain-dwarf", name:"Mountain Dwarf", asi:{str:2}, traits:[{name:"Dwarven Armor Training",desc:"Proficiency with light armor, medium armor, and shields."}]}
    ]
  },
  halfling: { name:"Halfling", asi:{dex:2}, speed:25, size:"Small", languages:["Common","Halfling"], traits:[{name:"Lucky",desc:"When you roll a 1 on a d20, you can reroll and must use the new result."},{name:"Brave",desc:"Advantage on saving throws against being frightened."},{name:"Halfling Nimbleness",desc:"You can move through the space of any creature larger than you."}],
    subraces:[
      {id:"lightfoot", name:"Lightfoot", asi:{cha:1}, traits:[{name:"Naturally Stealthy",desc:"You can attempt to hide even when obscured only by a creature one size larger."}]},
      {id:"stout", name:"Stout", asi:{con:1}, traits:[{name:"Stout Resilience",desc:"Advantage on saving throws against poison, resistance against poison damage."}]}
    ]
  },
  gnome: { name:"Gnome", asi:{int:2}, speed:25, size:"Small", languages:["Common","Gnomish"], traits:[{name:"Darkvision",desc:"60 ft. darkvision."},{name:"Gnome Cunning",desc:"Advantage on all Intelligence, Wisdom, and Charisma saving throws against magic."}],
    subraces:[
      {id:"forest-gnome", name:"Forest Gnome", asi:{dex:1}, traits:[{name:"Natural Illusionist",desc:"You know the Minor Illusion cantrip."},{name:"Speak with Small Beasts",desc:"Through sounds and gestures, you can communicate with Small and Tiny beasts."}]},
      {id:"rock-gnome", name:"Rock Gnome", asi:{con:1}, traits:[{name:"Artificer's Lore",desc:"Double proficiency on History checks related to magic items, alchemical objects, or tech."},{name:"Tinker",desc:"You can spend 1 hour to construct a Tiny clockwork device."}]}
    ]
  },
  halfelf: { name:"Half-Elf", asi:{cha:2}, asiChoice:2, speed:30, size:"Medium", languages:["Common","Elvish"], extraLanguages:1, traits:[{name:"Darkvision",desc:"60 ft. darkvision."},{name:"Fey Ancestry",desc:"Advantage on saving throws against being charmed."},{name:"Skill Versatility",desc:"You gain proficiency in two skills of your choice."},{name:"Ability Score Increase",desc:"+2 Charisma, +1 to two ability scores of your choice."}], subraces:[] },
  halforc: { name:"Half-Orc", asi:{str:2,con:1}, speed:30, size:"Medium", languages:["Common","Orc"], skills:["Intimidation"], traits:[{name:"Darkvision",desc:"60 ft. darkvision."},{name:"Menacing",desc:"Proficiency in Intimidation."},{name:"Relentless Endurance",desc:"When reduced to 0 HP but not killed, drop to 1 HP instead. Once per long rest."},{name:"Savage Attacks",desc:"On a critical hit with a melee weapon, add one extra damage die."}], subraces:[] },
  tiefling: { name:"Tiefling", asi:{int:1,cha:2}, speed:30, size:"Medium", languages:["Common","Infernal"], traits:[{name:"Darkvision",desc:"60 ft. darkvision."},{name:"Hellish Resistance",desc:"Resistance to fire damage."},{name:"Infernal Legacy",desc:"You know Thaumaturgy. At 3rd level, Hellish Rebuke. At 5th level, Darkness."}], subraces:[] },
  dragonborn: { name:"Dragonborn", asi:{str:2,cha:1}, speed:30, size:"Medium", languages:["Common","Draconic"], traits:[{name:"Breath Weapon",desc:"You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. Each creature in the area must make a saving throw (DC = 8 + your Constitution modifier + your proficiency bonus). A creature takes 2d6 damage on a failed save, and half as much on a success. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. You can use this once per short or long rest."},{name:"Damage Resistance",desc:"You have resistance to the damage type associated with your draconic ancestry."}],
    subraces:[
      {id:"black",  name:"Black Dragonborn",  asi:{}, traits:[{name:"Draconic Ancestry: Black",desc:"Damage Type: Acid. Breath Weapon: 5 by 30 ft. line (Dex. save). You have resistance to acid damage."}]},
      {id:"blue",   name:"Blue Dragonborn",   asi:{}, traits:[{name:"Draconic Ancestry: Blue",desc:"Damage Type: Lightning. Breath Weapon: 5 by 30 ft. line (Dex. save). You have resistance to lightning damage."}]},
      {id:"brass",  name:"Brass Dragonborn",  asi:{}, traits:[{name:"Draconic Ancestry: Brass",desc:"Damage Type: Fire. Breath Weapon: 5 by 30 ft. line (Dex. save). You have resistance to fire damage."}]},
      {id:"bronze", name:"Bronze Dragonborn", asi:{}, traits:[{name:"Draconic Ancestry: Bronze",desc:"Damage Type: Lightning. Breath Weapon: 5 by 30 ft. line (Dex. save). You have resistance to lightning damage."}]},
      {id:"copper", name:"Copper Dragonborn", asi:{}, traits:[{name:"Draconic Ancestry: Copper",desc:"Damage Type: Acid. Breath Weapon: 5 by 30 ft. line (Dex. save). You have resistance to acid damage."}]},
      {id:"gold",   name:"Gold Dragonborn",   asi:{}, traits:[{name:"Draconic Ancestry: Gold",desc:"Damage Type: Fire. Breath Weapon: 15 ft. cone (Dex. save). You have resistance to fire damage."}]},
      {id:"green",  name:"Green Dragonborn",  asi:{}, traits:[{name:"Draconic Ancestry: Green",desc:"Damage Type: Poison. Breath Weapon: 15 ft. cone (Con. save). You have resistance to poison damage."}]},
      {id:"red",    name:"Red Dragonborn",    asi:{}, traits:[{name:"Draconic Ancestry: Red",desc:"Damage Type: Fire. Breath Weapon: 15 ft. cone (Dex. save). You have resistance to fire damage."}]},
      {id:"silver", name:"Silver Dragonborn", asi:{}, traits:[{name:"Draconic Ancestry: Silver",desc:"Damage Type: Cold. Breath Weapon: 15 ft. cone (Con. save). You have resistance to cold damage."}]},
      {id:"white",  name:"White Dragonborn",  asi:{}, traits:[{name:"Draconic Ancestry: White",desc:"Damage Type: Cold. Breath Weapon: 15 ft. cone (Con. save). You have resistance to cold damage."}]}
    ]
  }
},

classes: {
  barbarian: { name:"Barbarian", hitDie:12, saves:["str","con"], primaryAbility:"str", armorProf:["Light armor","Medium armor","Shields"], weaponProf:["Simple weapons","Martial weapons"], skillCount:2, skillOptions:["Animal Handling","Athletics","Intimidation","Nature","Perception","Survival"],
    subclasses:["Berserker","Totem Warrior"],
    features:[{level:1,name:"Rage",desc:"Enter a rage as a bonus action. Advantage on Str checks/saves, bonus melee damage, resistance to bludgeoning/piercing/slashing."},{level:1,name:"Unarmored Defense",desc:"While not wearing armor, AC = 10 + DEX mod + CON mod."}],
    equipment:[["Greataxe","Any martial melee weapon"],["Two handaxes","Any simple weapon"],["Explorer's pack"]]
  },
  bard: { name:"Bard", hitDie:8, saves:["dex","cha"], primaryAbility:"cha", spellcastingAbility:"cha", armorProf:["Light armor"], weaponProf:["Simple weapons","Hand crossbows","Longswords","Rapiers","Shortswords"], skillCount:3, skillOptions:["Any three skills"],
    subclasses:["Lore","Valor"],
    features:[{level:1,name:"Spellcasting",desc:"Cha-based spellcasting. You know 2 cantrips and 4 spells. Spell slots start at 2 first-level slots."},{level:1,name:"Bardic Inspiration",desc:"Bonus action: grant a creature a d6 Bardic Inspiration die to add to one check/save/attack. Uses = CHA mod."}],
    equipment:[["Rapier","Longsword","Any simple weapon"],["Diplomat's pack","Entertainer's pack"],["Lute","Any musical instrument"],["Leather armor","Dagger"]]
  },
  cleric: { name:"Cleric", hitDie:8, saves:["wis","cha"], primaryAbility:"wis", spellcastingAbility:"wis", armorProf:["Light armor","Medium armor","Shields"], weaponProf:["Simple weapons"], skillCount:2, skillOptions:["History","Insight","Medicine","Persuasion","Religion"],
    features:[{level:1,name:"Spellcasting",desc:"Wis-based spellcasting. Prepare spells = Wis mod + Cleric level. Ritual Casting."},{level:1,name:"Divine Domain",desc:"Choose your domain — grants bonus spells and features from 1st level."}],
    subclasses:["Life","Light","Trickery","War","Nature","Tempest","Knowledge"],
    equipment:[["Mace","Warhammer"],["Scale mail","Leather armor","Chain mail"],["Light crossbow & 20 bolts","Any simple weapon"],["Priest's pack","Explorer's pack"],["Shield","Any simple weapon"]]
  },
  druid: { name:"Druid", hitDie:8, saves:["wis","int"], primaryAbility:"wis", spellcastingAbility:"wis", armorProf:["Light armor","Medium armor","Shields (nonmetal)"], weaponProf:["Clubs","Daggers","Darts","Javelins","Maces","Quarterstaffs","Scimitars","Sickles","Slings","Spears"], skillCount:2, skillOptions:["Arcana","Animal Handling","Insight","Medicine","Nature","Perception","Religion","Survival"],
    subclasses:["Land","Moon"],
    features:[{level:1,name:"Spellcasting",desc:"Wis-based spellcasting. Prepare spells = Wis mod + Druid level. Ritual Casting."},{level:1,name:"Druidic",desc:"You know Druidic, a secret language. You can speak it and leave hidden messages."}],
    equipment:[["Wooden shield","Any simple weapon"],["Scimitar","Any simple melee weapon"],["Leather armor","Explorer's pack","Druidic focus"]]
  },
  fighter: { name:"Fighter", hitDie:10, saves:["str","con"], primaryAbility:"str", armorProf:["All armor","Shields"], weaponProf:["Simple weapons","Martial weapons"], skillCount:2, skillOptions:["Acrobatics","Animal Handling","Athletics","History","Insight","Intimidation","Perception","Survival"],
    subclasses:["Champion","Battle Master","Eldritch Knight"],
    features:[{level:1,name:"Fighting Style",desc:"Choose a fighting style: Archery (+2 ranged attack rolls), Defense (+1 AC in armor), Dueling (+2 damage with one weapon), Great Weapon Fighting (reroll 1s and 2s on damage), Protection (impose disadvantage on attacks against allies), Two-Weapon Fighting (add ability mod to second attack)."},{level:1,name:"Second Wind",desc:"Bonus action: regain 1d10 + Fighter level HP. Recharges on short or long rest."}],
    equipment:[["Chain mail","Leather armor + longbow + 20 arrows"],["Martial weapon + shield","Two martial weapons"],["Light crossbow + 20 bolts","Two handaxes"],["Dungeoneer's pack","Explorer's pack"]]
  },
  monk: { name:"Monk", hitDie:8, saves:["str","dex"], primaryAbility:"dex", armorProf:[], weaponProf:["Simple weapons","Shortswords"], skillCount:2, skillOptions:["Acrobatics","Athletics","History","Insight","Religion","Stealth"],
    subclasses:["Open Hand","Shadow"],
    features:[{level:1,name:"Unarmored Defense",desc:"AC = 10 + DEX mod + WIS mod while not wearing armor or wielding a shield."},{level:1,name:"Martial Arts",desc:"Use DEX instead of STR for unarmed strikes and monk weapons. Unarmed strike = 1d4. Bonus action unarmed strike after attack."}],
    equipment:[["Shortsword","Any simple weapon"],["Dungeoneer's pack","Explorer's pack"],["10 darts"]]
  },
  paladin: { name:"Paladin", hitDie:10, saves:["wis","cha"], primaryAbility:"cha", spellcastingAbility:"cha", armorProf:["All armor","Shields"], weaponProf:["Simple weapons","Martial weapons"], skillCount:2, skillOptions:["Athletics","Insight","Intimidation","Medicine","Persuasion","Religion"],
    subclasses:["Devotion","Vengeance"],
    features:[{level:1,name:"Divine Sense",desc:"Action: know the location of celestials, fiends, undead within 60 ft. Uses = 1 + CHA mod per long rest."},{level:1,name:"Lay on Hands",desc:"Touch to restore HP from a pool of 5 × Paladin level. Or expend 5 to cure one disease or poison."}],
    equipment:[["Martial weapon + shield","Two martial weapons"],["Five javelins","Any simple melee weapon"],["Priest's pack","Explorer's pack"],["Chain mail","Leather armor + longbow + 20 arrows"]]
  },
  ranger: { name:"Ranger", hitDie:10, saves:["str","dex"], primaryAbility:"dex", spellcastingAbility:"wis", armorProf:["Light armor","Medium armor","Shields"], weaponProf:["Simple weapons","Martial weapons"], skillCount:3, skillOptions:["Animal Handling","Athletics","Insight","Investigation","Nature","Perception","Stealth","Survival"],
    subclasses:["Hunter","Beast Master"],
    features:[{level:1,name:"Favored Enemy",desc:"Choose a type of enemy. Advantage on Survival checks to track them, advantage on Intelligence checks to recall info about them."},{level:1,name:"Natural Explorer",desc:"Choose a favored terrain. Bonuses to travel, foraging, tracking, and navigation in that terrain."}],
    equipment:[["Scale mail","Leather armor"],["Two shortswords","Two simple melee weapons"],["Dungeoneer's pack","Explorer's pack"],["Longbow + 20 arrows"]]
  },
  rogue: { name:"Rogue", hitDie:8, saves:["dex","int"], primaryAbility:"dex", armorProf:["Light armor"], weaponProf:["Simple weapons","Hand crossbows","Longswords","Rapiers","Shortswords"], skillCount:4, skillOptions:["Acrobatics","Athletics","Deception","Insight","Intimidation","Investigation","Perception","Performance","Persuasion","Sleight of Hand","Stealth"],
    subclasses:["Thief","Assassin","Arcane Trickster"],
    features:[{level:1,name:"Expertise",desc:"Choose 2 proficient skills. Your proficiency bonus is doubled for those skills."},{level:1,name:"Sneak Attack",desc:"Once per turn, you can deal extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or ranged weapon. You don't need advantage if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll."},{level:1,name:"Thieves' Cant",desc:"A secret mix of dialect, jargon, and code used by rogues and criminals."}],
    equipment:[["Rapier","Shortsword"],["Shortbow + 20 arrows","Shortsword"],["Burglar's pack","Dungeoneer's pack","Explorer's pack"],["Leather armor","Daggers x2","Thieves' tools"]]
  },
  sorcerer: { name:"Sorcerer", hitDie:6, saves:["con","cha"], primaryAbility:"cha", spellcastingAbility:"cha", armorProf:[], weaponProf:["Daggers","Darts","Slings","Quarterstaffs","Light crossbows"], skillCount:2, skillOptions:["Arcana","Deception","Insight","Intimidation","Persuasion","Religion"],
    subclasses:["Draconic Bloodline","Wild Magic"],
    features:[{level:1,name:"Spellcasting",desc:"Cha-based spellcasting. Know 4 spells, 2 cantrips. 2 first-level spell slots."},{level:1,name:"Sorcerous Origin",desc:"Choose your magical origin: Draconic Bloodline or Wild Magic."}],
    equipment:[["Light crossbow + 20 bolts","Any simple weapon"],["Component pouch","Arcane focus"],["Dungeoneer's pack","Explorer's pack"],["Two daggers"]]
  },
  warlock: { name:"Warlock", hitDie:8, saves:["wis","cha"], primaryAbility:"cha", spellcastingAbility:"cha", armorProf:["Light armor"], weaponProf:["Simple weapons"], skillCount:2, skillOptions:["Arcana","Deception","History","Intimidation","Investigation","Nature","Religion"],
    subclasses:["Archfey","Fiend","Great Old One"],
    features:[{level:1,name:"Otherworldly Patron",desc:"Choose your patron: Archfey, Fiend, or Great Old One. Grants expanded spell list and bonus features."},{level:1,name:"Pact Magic",desc:"Cha-based spellcasting. Spell slots recharge on short rest. 2 cantrips known, 2 spells known, 1 first-level slot."}],
    equipment:[["Light crossbow + 20 bolts","Any simple weapon"],["Component pouch","Arcane focus"],["Scholar's pack","Dungeoneer's pack"],["Leather armor","Any simple weapon","Two daggers"]]
  },
  wizard: { name:"Wizard", hitDie:6, saves:["int","wis"], primaryAbility:"int", spellcastingAbility:"int", armorProf:[], weaponProf:["Daggers","Darts","Slings","Quarterstaffs","Light crossbows"], skillCount:2, skillOptions:["Arcana","History","Insight","Investigation","Medicine","Religion"],
    features:[{level:1,name:"Spellcasting",desc:"Int-based spellcasting. Spellbook starts with 6 first-level spells. Prepare Int mod + Wizard level spells. Ritual Casting."},{level:1,name:"Arcane Recovery",desc:"Once per long rest, during a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher."}],
    subclasses:["Abjuration","Conjuration","Divination","Enchantment","Evocation","Illusion","Necromancy","Transmutation"],
    equipment:[["Quarterstaff","Dagger"],["Component pouch","Arcane focus"],["Scholar's pack","Explorer's pack"],["Spellbook"]]
  },
  // ── SOUP SAVANT (Phmurt Studios homebrew) ───────────────
  // Charisma-based "spellcaster" whose spells are soup recipes
  // and whose spell slots are thermoses — all thermoses are
  // the same level at any given time. See spellSlots.soupsavant
  // for the unique progression.
  soupsavant: {
    name:"Soup Savant", hitDie:6, saves:["cha","con"], primaryAbility:"cha", spellcastingAbility:"cha",
    armorProf:["Light armor"], weaponProf:["Simple weapons","Nets"],
    toolProf:["Cook's utensils","Alchemist's supplies"],
    skillCount:2, skillOptions:["Animal Handling","Arcana","Deception","Medicine","Nature","Performance","Persuasion"],
    features:[
      {level:1,name:"Soupcooking (Spellcasting)",desc:"Cha-based 'spellcasting' that uses a magical cookbook (spellbook) and bandolier of arcane thermoses (spell slots). All your thermoses are the same level. Soup save DC = 8 + PB + CHA mod. Soup attack = PB + CHA mod. Cantrip-equivalent recipes are 'Instant Soups' served from Insta-cups. You start knowing 2 instant soups and 6 first-level soup recipes."},
      {level:1,name:"Soup Cabinet",desc:"Action: create cabinet doors (1 ft × 2.5 ft) on any flat surface. Interior is an extradimensional space (2 ft × 1 ft × 2.5 ft) for storing soups, ingredients, and supplies. Persists until your next long rest. Expands at 5th and 10th level."}
    ],
    subclasses:[],
    equipment:[["Magical soup cookbook"],["Bandolier of magical thermoses"],["Butcher's knife (functions as a dagger)","A net"],["Pack: cook's utensils, alchemist's supplies, hatchet, tinderbox"],["Leather armor"]]
  }
},

backgrounds: {
  acolyte: { name:"Acolyte", skills:["Insight","Religion"], languages:2, feature:"Shelter of the Faithful", featureDesc:"You can call on the aid of religious establishments that share your faith.", equipment:"Holy symbol, prayer book, 5 sticks incense, vestments, common clothes, 15 gp" },
  charlatan: { name:"Charlatan", skills:["Deception","Sleight of Hand"], tools:["Disguise kit","Forgery kit"], feature:"False Identity", featureDesc:"You have a false identity with documentation and a disguise.", equipment:"Fine clothes, disguise kit, con tools, 15 gp" },
  criminal: { name:"Criminal", skills:["Deception","Stealth"], tools:["Gaming set","Thieves' tools"], feature:"Criminal Contact", featureDesc:"You have a reliable criminal contact who can find information.", equipment:"Crowbar, dark common clothes with hood, 15 gp" },
  entertainer: { name:"Entertainer", skills:["Acrobatics","Performance"], tools:["Disguise kit","Musical instrument"], feature:"By Popular Demand", featureDesc:"You can always find a place to perform and earn free lodging.", equipment:"Musical instrument, favor of admirer, costume, 15 gp" },
  folkhero: { name:"Folk Hero", skills:["Animal Handling","Survival"], tools:["Artisan's tools","Vehicles (land)"], feature:"Rustic Hospitality", featureDesc:"Common folk will shelter and hide you.", equipment:"Artisan's tools, shovel, iron pot, common clothes, 10 gp" },
  guildartisan: { name:"Guild Artisan", skills:["Insight","Persuasion"], tools:["Artisan's tools"], languages:1, feature:"Guild Membership", featureDesc:"Guild members will provide you lodging and legal assistance.", equipment:"Artisan's tools, letter of introduction, traveler's clothes, 15 gp" },
  hermit: { name:"Hermit", skills:["Medicine","Religion"], tools:["Herbalism kit"], languages:1, feature:"Discovery", featureDesc:"Your seclusion gave you access to a unique discovery.", equipment:"Scroll case, winter blanket, common clothes, herbalism kit, 5 gp" },
  noble: { name:"Noble", skills:["History","Persuasion"], tools:["Gaming set"], languages:1, feature:"Position of Privilege", featureDesc:"People assume the best of you and defer to your wishes.", equipment:"Fine clothes, signet ring, scroll of pedigree, 25 gp" },
  outlander: { name:"Outlander", skills:["Athletics","Survival"], tools:["Musical instrument"], languages:1, feature:"Wanderer", featureDesc:"You can always find food and fresh water, and remember geography.", equipment:"Staff, hunting trap, trophy, traveler's clothes, 10 gp" },
  sage: { name:"Sage", skills:["Arcana","History"], languages:2, feature:"Researcher", featureDesc:"If you don't know information, you know where to find it.", equipment:"Bottle ink, quill, small knife, letters from colleague, common clothes, 10 gp" },
  sailor: { name:"Sailor", skills:["Athletics","Perception"], tools:["Navigator's tools","Vehicles (water)"], feature:"Ship's Passage", featureDesc:"You can secure free passage on sailing ships.", equipment:"Belaying pin, silk rope 50ft, lucky charm, common clothes, 10 gp" },
  soldier: { name:"Soldier", skills:["Athletics","Intimidation"], tools:["Gaming set","Vehicles (land)"], feature:"Military Rank", featureDesc:"Soldiers loyal to your former organization recognize your rank.", equipment:"Insignia of rank, trophy, playing cards, common clothes, 10 gp" },
  urchin: { name:"Urchin", skills:["Sleight of Hand","Stealth"], tools:["Disguise kit","Thieves' tools"], feature:"City Secrets", featureDesc:"You know the secret paths of cities, moving twice the normal speed.", equipment:"Small knife, map of home city, pet mouse, token of parents, common clothes, 10 gp" }
},

skills: {
  acrobatics:{name:"Acrobatics",ability:"dex"}, animalhandling:{name:"Animal Handling",ability:"wis"},
  arcana:{name:"Arcana",ability:"int"}, athletics:{name:"Athletics",ability:"str"},
  deception:{name:"Deception",ability:"cha"}, history:{name:"History",ability:"int"},
  insight:{name:"Insight",ability:"wis"}, intimidation:{name:"Intimidation",ability:"cha"},
  investigation:{name:"Investigation",ability:"int"}, medicine:{name:"Medicine",ability:"wis"},
  nature:{name:"Nature",ability:"int"}, perception:{name:"Perception",ability:"wis"},
  performance:{name:"Performance",ability:"cha"}, persuasion:{name:"Persuasion",ability:"cha"},
  religion:{name:"Religion",ability:"int"}, sleightofhand:{name:"Sleight of Hand",ability:"dex"},
  stealth:{name:"Stealth",ability:"dex"}, survival:{name:"Survival",ability:"wis"}
},

spells: {
  wizard: {
    cantrips:["Fire Bolt","Ray of Frost","Shocking Grasp","Mage Hand","Prestidigitation","Minor Illusion","Acid Splash","Poison Spray","True Strike","Light","Message","Dancing Lights","Friends","Blade Ward"],
    level1:["Magic Missile","Sleep","Charm Person","Shield","Mage Armor","Detect Magic","Identify","Comprehend Languages","Feather Fall","Fog Cloud","Thunderwave","Burning Hands","Grease","Jump","Longstrider","Unseen Servant","Alarm","Disguise Self","Illusory Script","Witch Bolt","False Life","Ray of Sickness","Absorb Elements","Catapult","Ice Knife","Chromatic Orb","Expeditious Retreat"]
  },
  sorcerer: {
    cantrips:["Fire Bolt","Chill Touch","Shocking Grasp","Ray of Frost","Mage Hand","Prestidigitation","Minor Illusion","True Strike","Light","Message","Dancing Lights","Friends","Blade Ward","Thunderclap","Acid Splash"],
    level1:["Magic Missile","Sleep","Charm Person","Shield","Burning Hands","Thunderwave","Fog Cloud","Chromatic Orb","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Jump","Mage Armor","Ray of Sickness","Silent Image","Witch Bolt","Absorb Elements","Catapult","Ice Knife"]
  },
  bard: {
    cantrips:["Friends","Light","Mage Hand","Minor Illusion","Prestidigitation","True Strike","Thunderclap","Vicious Mockery","Blade Ward"],
    level1:["Charm Person","Comprehend Languages","Cure Wounds","Detect Magic","Disguise Self","Dissonant Whispers","Earth Tremor","Faerie Fire","Feather Fall","Healing Word","Heroism","Hideous Laughter","Identify","Illusory Script","Longstrider","Silent Image","Sleep","Speak with Animals","Thunderwave","Unseen Servant"]
  },
  cleric: {
    cantrips:["Guidance","Light","Mending","Resistance","Sacred Flame","Spare the Dying","Thaumaturgy","Toll the Dead","Word of Radiance","Blade Ward","True Strike"],
    level1:["Bane","Bless","Command","Create or Destroy Water","Cure Wounds","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Guiding Bolt","Healing Word","Inflict Wounds","Protection from Evil and Good","Purify Food and Drink","Sanctuary","Shield of Faith"]
  },
  druid: {
    cantrips:["Druidcraft","Guidance","Mending","Poison Spray","Produce Flame","Resistance","Shillelagh","Thorn Whip","Thunderclap"],
    level1:["Animal Friendship","Absorb Elements","Charm Person","Create or Destroy Water","Cure Wounds","Detect Magic","Detect Poison and Disease","Earth Tremor","Entangle","Faerie Fire","Fog Cloud","Goodberry","Healing Word","Ice Knife","Jump","Longstrider","Purify Food and Drink","Speak with Animals","Thunderwave"]
  },
  paladin: {
    level1:["Bless","Command","Compelled Duel","Cure Wounds","Detect Evil and Good","Detect Magic","Detect Poison and Disease","Divine Favor","Heroism","Protection from Evil and Good","Purify Food and Drink","Searing Smite","Shield of Faith","Thunderous Smite","Wrathful Smite"]
  },
  ranger: {
    level1:["Absorb Elements","Alarm","Animal Friendship","Cure Wounds","Detect Magic","Detect Poison and Disease","Ensnaring Strike","Fog Cloud","Goodberry","Hail of Thorns","Hunter's Mark","Jump","Longstrider","Speak with Animals"]
  },
  warlock: {
    cantrips:["Blade Ward","Chill Touch","Eldritch Blast","Friends","Mage Hand","Minor Illusion","Poison Spray","Prestidigitation","True Strike","Thunderclap"],
    level1:["Armor of Agathys","Arms of Hadar","Charm Person","Comprehend Languages","Expeditious Retreat","Hellish Rebuke","Hex","Illusory Script","Protection from Evil and Good","Unseen Servant","Witch Bolt"]
  },
  // ── SOUP SAVANT RECIPES ───────────────────────────────
  // "Cantrips" are Instant Soups (served from Insta-cups).
  // "level1" recipes are 1st-level soup recipes shown at the
  // build step. Higher-level recipes live in soupRecipesAll.
  soupsavant: {
    cantrips:["Bad Batch","Hot N' Ready","Quick Fix","Pocket Steam","Pinch of Salt","Mystery Cup","Cold Comfort","Stockpot Light","Whisper Broth","Boilstrike"],
    level1:["Chicken Noodle","Magic Mushroom","Pot of Gold Broth","Spicy Jalapeño","Onion Tear Soup","Peppered Pho","Hearth Stew","Crystal Consommé","Forager's Broth","Carrot Clarity","Berry Bisque","Spinach Surge"]
  }
},

standardArray: [15,14,13,12,10,8],
abilityNames: { str:"Strength", dex:"Dexterity", con:"Constitution", int:"Intelligence", wis:"Wisdom", cha:"Charisma" },
abilityShort: { str:"STR", dex:"DEX", con:"CON", int:"INT", wis:"WIS", cha:"CHA" },

alignments: ["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","True Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"],

profBonus: { 1:2,2:2,3:2,4:2,5:3,6:3,7:3,8:3,9:4,10:4,11:4,12:4,13:5,14:5,15:5,16:5,17:6,18:6,19:6,20:6 },

hpByLevel: { barbarian:12, bard:8, cleric:8, druid:8, fighter:10, monk:8, paladin:10, ranger:10, rogue:8, sorcerer:6, warlock:8, wizard:6, soupsavant:6 }
};

// ── WEAPON LISTS ──
DND_DATA.weapons = {
  simple_melee: [
    {name:"Club",damage:"1d4",type:"Bludgeoning",props:"Light"},
    {name:"Dagger",damage:"1d4",type:"Piercing",props:"Finesse, Light, Thrown"},
    {name:"Greatclub",damage:"1d8",type:"Bludgeoning",props:"Two-handed"},
    {name:"Handaxe",damage:"1d6",type:"Slashing",props:"Light, Thrown"},
    {name:"Javelin",damage:"1d6",type:"Piercing",props:"Thrown"},
    {name:"Light Hammer",damage:"1d4",type:"Bludgeoning",props:"Light, Thrown"},
    {name:"Mace",damage:"1d6",type:"Bludgeoning",props:"—"},
    {name:"Quarterstaff",damage:"1d6",type:"Bludgeoning",props:"Versatile (1d8)"},
    {name:"Sickle",damage:"1d4",type:"Slashing",props:"Light"},
    {name:"Spear",damage:"1d6",type:"Piercing",props:"Thrown, Versatile (1d8)"}
  ],
  simple_ranged: [
    {name:"Crossbow, Light",damage:"1d8",type:"Piercing",props:"Ammunition, Loading, Two-handed"},
    {name:"Dart",damage:"1d4",type:"Piercing",props:"Finesse, Thrown"},
    {name:"Shortbow",damage:"1d6",type:"Piercing",props:"Ammunition, Two-handed"},
    {name:"Sling",damage:"1d4",type:"Bludgeoning",props:"Ammunition"}
  ],
  martial_melee: [
    {name:"Battleaxe",damage:"1d8",type:"Slashing",props:"Versatile (1d10)"},
    {name:"Flail",damage:"1d8",type:"Bludgeoning",props:"—"},
    {name:"Glaive",damage:"1d10",type:"Slashing",props:"Heavy, Reach, Two-handed"},
    {name:"Greataxe",damage:"1d12",type:"Slashing",props:"Heavy, Two-handed"},
    {name:"Greatsword",damage:"2d6",type:"Slashing",props:"Heavy, Two-handed"},
    {name:"Halberd",damage:"1d10",type:"Slashing",props:"Heavy, Reach, Two-handed"},
    {name:"Lance",damage:"1d12",type:"Piercing",props:"Reach, Special"},
    {name:"Longsword",damage:"1d8",type:"Slashing",props:"Versatile (1d10)"},
    {name:"Maul",damage:"2d6",type:"Bludgeoning",props:"Heavy, Two-handed"},
    {name:"Morningstar",damage:"1d8",type:"Piercing",props:"—"},
    {name:"Pike",damage:"1d10",type:"Piercing",props:"Heavy, Reach, Two-handed"},
    {name:"Rapier",damage:"1d8",type:"Piercing",props:"Finesse"},
    {name:"Scimitar",damage:"1d6",type:"Slashing",props:"Finesse, Light"},
    {name:"Shortsword",damage:"1d6",type:"Piercing",props:"Finesse, Light"},
    {name:"Trident",damage:"1d6",type:"Piercing",props:"Thrown, Versatile (1d8)"},
    {name:"War Pick",damage:"1d8",type:"Piercing",props:"—"},
    {name:"Warhammer",damage:"1d8",type:"Bludgeoning",props:"Versatile (1d10)"},
    {name:"Whip",damage:"1d4",type:"Slashing",props:"Finesse, Reach"}
  ],
  martial_ranged: [
    {name:"Blowgun",damage:"1",type:"Piercing",props:"Ammunition, Loading"},
    {name:"Crossbow, Hand",damage:"1d6",type:"Piercing",props:"Ammunition, Light, Loading"},
    {name:"Crossbow, Heavy",damage:"1d10",type:"Piercing",props:"Ammunition, Heavy, Loading, Two-handed"},
    {name:"Longbow",damage:"1d8",type:"Piercing",props:"Ammunition, Heavy, Two-handed"},
    {name:"Net",damage:"—",type:"—",props:"Special, Thrown"}
  ]
};

DND_DATA.weaponCategories = {
  "Any simple weapon":    [...DND_DATA.weapons.simple_melee, ...DND_DATA.weapons.simple_ranged],
  "Any simple melee weapon": DND_DATA.weapons.simple_melee,
  "Any martial weapon":   [...DND_DATA.weapons.martial_melee, ...DND_DATA.weapons.martial_ranged],
  "Any martial melee weapon": DND_DATA.weapons.martial_melee,
  "Any weapon":           [...DND_DATA.weapons.simple_melee, ...DND_DATA.weapons.simple_ranged, ...DND_DATA.weapons.martial_melee, ...DND_DATA.weapons.martial_ranged]
};

// ── ABILITY USE TRACKING ──
DND_DATA.abilityUses = {
  barbarian:[
    {name:'Rage', usesByLevel:[2,2,3,3,3,4,4,4,4,4,4,5,5,5,5,5,6,6,6,6], recharge:'long_rest', desc:'Advantage on STR checks/saves, bonus melee damage, resistance to B/P/S damage. Lasts 1 minute. (Unlimited rages at level 20.)', minLevel:1},
    {name:'Unarmored Defense', uses:0, recharge:'passive', desc:'While not wearing armor: AC = 10 + DEX mod + CON mod.'}
  ],
  bard:[
    {name:'Bardic Inspiration', uses:'cha_mod', recharge:'long_rest', desc:'Bonus action: grant a creature a Bardic Inspiration die (d6; d8 at bard 5, d10 at 10, d12 at 15) to add to one check, save, or attack roll. Recharges on a short rest from bard level 5 (Font of Inspiration).'}
  ],
  cleric:[
    {name:'Channel Divinity', usesByLevel:[0,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3], recharge:'short_rest', desc:'Use your divine connection. Turn Undead plus an effect determined by your chosen domain.', minLevel:2}
  ],
  druid:[
    {name:'Wild Shape', uses:2, recharge:'short_rest', minLevel:2, desc:'Magically assume the shape of a beast you have seen before. Max CR and movement limits scale with druid level (CR 1/4 no fly/swim at 2nd; CR 1/2 no fly at 4th; CR 1 at 8th).'}
  ],
  fighter:[
    {name:'Second Wind', uses:1, recharge:'short_rest', desc:'Bonus action: regain 1d10 + Fighter level HP.'},
    {name:'Action Surge', usesByLevel:[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2], recharge:'short_rest', minLevel:2, desc:'Take one additional action on your turn. Not another Action Surge.'},
    {name:'Indomitable', usesByLevel:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3], recharge:'long_rest', minLevel:9, desc:'Reroll a saving throw that you fail. You must use the new roll.'}
  ],
  monk:[
    {name:'Ki Points', uses:'class_level', recharge:'short_rest', isPool:true, minLevel:2, desc:'Spend ki to fuel Flurry of Blows (1 ki), Patient Defense (1 ki), or Step of the Wind (1 ki). Pool = monk level.'},
    {name:'Unarmored Defense', uses:0, recharge:'passive', desc:'While not wearing armor: AC = 10 + DEX mod + WIS mod.'}
  ],
  paladin:[
    {name:'Divine Sense', uses:'1+cha_mod', recharge:'long_rest', desc:'Detect the presence of powerful celestials, fiends, and undead within 60 feet.'},
    {name:'Lay on Hands', uses:'paladin_pool', recharge:'long_rest', isPool:true, desc:'Touch to restore HP. Pool = 5 × paladin level. Spend 5 to cure one disease or neutralize one poison.'},
    {name:'Channel Divinity', usesByLevel:[0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], recharge:'short_rest', minLevel:3, desc:'Use your oath\'s Channel Divinity option. Regained on a short or long rest.'}
  ],
  ranger:[
    {name:'Favored Enemy', uses:0, recharge:'passive', desc:'Advantage on Survival checks to track chosen enemy type. Advantage on INT checks for info about them.'},
    {name:'Natural Explorer', uses:0, recharge:'passive', desc:'Expertise in chosen terrain: no difficult terrain slow, never lost, advantage on initiative, extra rations, tracking more creatures.'}
  ],
  rogue:[
    {name:'Sneak Attack', uses:0, recharge:'passive', desc:'Once per turn, you can deal extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or ranged weapon. You don\'t need advantage if another enemy of the target is within 5 feet of it, that enemy isn\'t incapacitated, and you don\'t have disadvantage on the attack roll.'},
    {name:'Cunning Action', uses:0, recharge:'passive', desc:'Bonus action: Dash, Disengage, or Hide.'}
  ],
  sorcerer:[
    {name:'Sorcery Points', usesByLevel:[0,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], recharge:'long_rest', isPool:true, minLevel:2, desc:'Spend to create spell slots or fuel Metamagic options like Twinned Spell, Quickened Spell, etc. Pool = sorcerer level.'},
    {name:'Font of Magic', uses:0, recharge:'passive', desc:'At 2nd level: convert spell slots to/from Sorcery Points.'}
  ],
  warlock:[
    {name:'Pact Magic Slots', uses:1, recharge:'short_rest', desc:'Your spell slots recharge on a short or long rest. All slots are the same level.'},
    {name:'Dark One\'s Blessing', uses:0, recharge:'passive', desc:'Fiend patron: when you reduce a creature to 0 HP, gain CHA mod + Warlock level temp HP.'}
  ],
  wizard:[
    {name:'Arcane Recovery', uses:1, recharge:'long_rest', desc:'Once per long rest, during a short rest, you can recover expended spell slots with a combined level equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.'}
  ],
  soupsavant:[
    {name:'Soup Cabinet', uses:1, recharge:'long_rest', desc:'Action: create cabinet doors on any flat surface. Extradimensional storage that persists until your next long rest. Expands to a Pantry (5th) and Kitchen (10th).'},
    {name:'Culinary Edge', uses:2, recharge:'long_rest', isPool:true, desc:'Bonus action: when you cook a soup that deals damage or restores HP, expend one culinary die and add the result. Die size scales: d4 (2nd) → d6 (6th) → d8 (11th) → d10 (17th) → d12 (20th). Dice count: 2 / 3 / 4 / 5 at the same level breakpoints.'},
    {name:'Soup of the Day', uses:1, recharge:'long_rest', desc:'After a long rest, roll on the Soup of the Day table (or twice at 9th). Apply each enhancement to a number of thermoses/Insta-cups equal to one culinary die roll. Lasts until your next long rest.'},
    {name:'Forager Foresight (locate object)', uses:1, recharge:'long_rest', desc:'13th level. 10 minutes of contemplation casts locate object on a previously-encountered ingredient (no thermos cost). On another plane, you instead learn which plane.'},
    {name:'Divinely Delicious Soup', uses:1, recharge:'long_rest', desc:'14th level. Once per day at preparation time, designate up to CHA mod (min 1) thermoses as Divinely Delicious — gain Smell, +3d8 Healing, and a Charming save effect on consumption.'},
    {name:'Interdimensional Cauldron', uses:1, recharge:'long_rest', desc:'18th level. Once per long rest, spend 1 hour cooking a Planar Broth that opens a 10-minute portal to a plane of your choice (Medium creatures pass freely both ways).'},
    {name:'Magnum Opus', uses:1, recharge:'long_rest', desc:'20th level. Once per long rest, spend 1 hour cooking your Magnum Opus — infuse any number of thermoses, double soup healing for 24h, grants frightened/charmed immunity for 24h.'}
  ]
};

// ── STANDARD ACTIONS (D&D 5e rulebook) ──
DND_DATA.standardActions = [
  {name:'Attack',          type:'Action',       desc:'Make one melee or ranged weapon attack (or more with Extra Attack).'},
  {name:'Cast a Spell',    type:'Action/Bonus', desc:'Cast a spell with a casting time of 1 action or 1 bonus action.'},
  {name:'Dash',            type:'Action',       desc:'Gain extra movement equal to your speed for this turn.'},
  {name:'Disengage',       type:'Action',       desc:'Your movement doesn\'t provoke opportunity attacks for the rest of your turn.'},
  {name:'Dodge',           type:'Action',       desc:'Until your next turn: attacks against you have disadvantage, you have advantage on DEX saves.'},
  {name:'Help',            type:'Action',       desc:'Aid an ally: give them advantage on their next ability check or attack roll.'},
  {name:'Hide',            type:'Action',       desc:'Make a DEX (Stealth) check to hide from creatures that can\'t clearly see you.'},
  {name:'Ready',           type:'Action',       desc:'Prepare a reaction trigger and response for later in the round.'},
  {name:'Search',          type:'Action',       desc:'Devote your attention to finding something. WIS (Perception) or INT (Investigation).'},
  {name:'Use an Object',   type:'Action',       desc:'Interact with a second object or use a special object feature (some objects require the Use an Object action).'},
  {name:'Grapple',         type:'Attack',       desc:'Replace one attack: contested STR (Athletics) vs STR (Athletics) or DEX (Acrobatics). On success: target is grappled.'},
  {name:'Shove',           type:'Attack',       desc:'Replace one attack: knock prone or push 5ft. Contested STR (Athletics) vs STR (Athletics) or DEX (Acrobatics).'},
  {name:'Improvise',       type:'Action',       desc:'Do something not covered by another action. DM decides if an ability check is needed.'},
  {name:'Opportunity Attack', type:'Reaction',  desc:'When a creature you can see leaves your reach, you can use your reaction to make one melee attack.'},
  {name:'Dodge (Reaction)', type:'Reaction',    desc:'Some spells and features let you use your reaction to impose disadvantage on an attack or halve damage.'}
];

// ── SPELL SLOT TABLES ──

// ── SPELL DESCRIPTIONS ──
DND_DATA.spellDescriptions = {
  // Cantrips
  "Fire Bolt":           {school:"Evocation", castTime:"1 action", range:"120 ft", duration:"Instantaneous", desc:"Hurl a mote of fire. +d10 fire damage on hit. Hits flammable objects not worn or carried."},
  "Ray of Frost":        {school:"Evocation", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"Beam of blue-white light. +d8 cold damage, target speed reduced by 10 ft until your next turn."},
  "Shocking Grasp":      {school:"Evocation", castTime:"1 action", range:"Touch", duration:"Instantaneous", desc:"+d8 lightning damage. Advantage vs metal armor. Target can't take reactions until next turn."},
  "Mage Hand":           {school:"Conjuration", castTime:"1 action", range:"30 ft", duration:"1 minute", desc:"Spectral hand carries objects up to 10 lbs, opens doors, retrieves items. Can't attack."},
  "Prestidigitation":    {school:"Transmutation", castTime:"1 action", range:"10 ft", duration:"Up to 1 hour", desc:"Minor magical tricks: lights, sounds, smells, marks, trinkets, clean/soil objects."},
  "Minor Illusion":      {school:"Illusion", castTime:"1 action", range:"30 ft", duration:"1 minute", desc:"Create a sound or image. Investigation check to determine it's an illusion."},
  "Vicious Mockery":     {school:"Enchantment", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"Taunt with insults. WIS save or take d4 psychic damage and disadvantage on next attack roll."},
  "Eldritch Blast":      {school:"Evocation", castTime:"1 action", range:"120 ft", duration:"Instantaneous", desc:"Beam of crackling energy. +d10 force damage per beam. Two beams at 5th level."},
  "Sacred Flame":        {school:"Evocation", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"Flame-like radiance descends. DEX save or take d8 radiant damage. No cover bonus."},
  "Guidance":            {school:"Divination", castTime:"1 action", range:"Touch", duration:"Concentration, 1 min", desc:"Add d4 to one ability check of your choice before the spell ends."},
  "Thaumaturgy":         {school:"Transmutation", castTime:"1 action", range:"30 ft", duration:"Up to 1 minute", desc:"Manifest a wonder: tremors, flame flare, thunder clap, eye color change, voice booms."},
  "Produce Flame":       {school:"Conjuration", castTime:"1 action", range:"Self", duration:"10 minutes", desc:"Flame in your hand gives 10ft light. Can hurl it: +d8 fire damage, 30ft range."},
  "Thorn Whip":          {school:"Transmutation", castTime:"1 action", range:"30 ft", duration:"Instantaneous", desc:"+d6 piercing damage. Pull creature up to 10 ft toward you."},
  "Druidcraft":          {school:"Transmutation", castTime:"1 action", range:"30 ft", duration:"Instantaneous", desc:"Predict weather, make flower bloom, create sensory effect, light or snuff a flame."},
  "Shillelagh":          {school:"Transmutation", castTime:"1 bonus action", range:"Touch", duration:"1 minute", desc:"Your club or quarterstaff deals d8 damage using WIS instead of STR."},
  "Toll the Dead":       {school:"Necromancy", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"WIS save or d8 necrotic (d12 if wounded). No attack roll needed."},
  "Thunderclap":         {school:"Evocation", castTime:"1 action", range:"5 ft", duration:"Instantaneous", desc:"CON save or d6 thunder damage. Audible 100 ft away."},
  "Chill Touch":         {school:"Necromancy", castTime:"1 action", range:"120 ft", duration:"1 round", desc:"+d8 necrotic damage. Target can't regain HP. Undead also get disadvantage on attacks vs you."},
  "True Strike":         {school:"Divination", castTime:"1 action", range:"30 ft", duration:"Concentration, 1 round", desc:"Advantage on your next attack roll vs target before end of next turn."},
  "Light":               {school:"Evocation", castTime:"1 action", range:"Touch", duration:"1 hour", desc:"Object glows 20ft bright, 20ft dim. DEX save to avoid if worn/held by hostile creature."},
  "Message":             {school:"Transmutation", castTime:"1 action", range:"120 ft", duration:"1 round", desc:"Whisper a message to a creature. They can reply in a whisper only you hear."},
  "Dancing Lights":      {school:"Evocation", castTime:"1 action", range:"120 ft", duration:"Concentration, 1 min", desc:"Up to four torch-lights move as you direct. Dim light in 10ft area each."},
  "Friends":             {school:"Enchantment", castTime:"1 action", range:"Self", duration:"Concentration, 1 min", desc:"Advantage on CHA checks against one creature. It knows you used magic after spell ends."},
  "Blade Ward":          {school:"Abjuration", castTime:"1 action", range:"Self", duration:"1 round", desc:"Resistance to bludgeoning, piercing, and slashing damage from weapon attacks until next turn."},
  "Acid Splash":         {school:"Conjuration", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"Orb of acid. DEX save or d6 acid damage. Can target two creatures within 5 ft of each other."},
  "Poison Spray":        {school:"Conjuration", castTime:"1 action", range:"10 ft", duration:"Instantaneous", desc:"CON save or d12 poison damage."},
  "Word of Radiance":    {school:"Evocation", castTime:"1 action", range:"5 ft", duration:"Instantaneous", desc:"All chosen creatures within 5ft: CON save or d6 radiant damage."},
  "Spare the Dying":     {school:"Necromancy", castTime:"1 action", range:"Touch", duration:"Instantaneous", desc:"Touch a dying creature (0 HP) to stabilize it. Has no effect on undead or constructs."},
  "Resistance":          {school:"Abjuration", castTime:"1 action", range:"Touch", duration:"Concentration, 1 min", desc:"Touch a creature. Once before spell ends, roll d4 and add to one saving throw."},
  "Mending":             {school:"Transmutation", castTime:"1 minute", range:"Touch", duration:"Instantaneous", desc:"Repair a single break or tear in an object. Invisible seam."},

  // 1st Level Spells
  "Magic Missile":       {school:"Evocation", castTime:"1 action", range:"120 ft", duration:"Instantaneous", desc:"Three darts of magical force. Each hits automatically for d4+1 force damage. Always hits."},
  "Sleep":               {school:"Enchantment", castTime:"1 action", range:"90 ft", duration:"1 minute", desc:"Roll 5d8. Creatures with HP ≤ total fall unconscious, lowest HP first."},
  "Charm Person":        {school:"Enchantment", castTime:"1 action", range:"30 ft", duration:"1 hour", desc:"WIS save or target regards you as a friendly acquaintance. Knows it was charmed after."},
  "Shield":              {school:"Abjuration", castTime:"1 reaction", range:"Self", duration:"1 round", desc:"+5 AC until start of next turn including vs the triggering attack. Also blocks Magic Missile."},
  "Mage Armor":          {school:"Abjuration", castTime:"1 action", range:"Touch", duration:"8 hours", desc:"Willing creature's AC becomes 13 + DEX modifier. Lasts 8 hours or until armor worn."},
  "Detect Magic":        {school:"Divination", castTime:"1 action", range:"Self", duration:"Concentration, 10 min", desc:"Sense presence of magic within 30 ft. See magical auras, learn school of magic. Ritual."},
  "Identify":            {school:"Divination", castTime:"1 minute", range:"Touch", duration:"Instantaneous", desc:"Learn the properties of a magic item, active spells on a creature, or how to activate it. Ritual."},
  "Thunderwave":         {school:"Evocation", castTime:"1 action", range:"Self (15ft cube)", duration:"Instantaneous", desc:"CON save: d8 thunder + 10ft push on fail. Half on save. Audible 300ft."},
  "Burning Hands":       {school:"Evocation", castTime:"1 action", range:"Self (15ft cone)", duration:"Instantaneous", desc:"DEX save: 3d6 fire on fail, half on save. Flammable objects ignite."},
  "Cure Wounds":         {school:"Evocation", castTime:"1 action", range:"Touch", duration:"Instantaneous", desc:"Touch a living creature to restore d8 + spellcasting modifier HP. No effect on undead/constructs."},
  "Healing Word":        {school:"Evocation", castTime:"1 bonus action", range:"60 ft", duration:"Instantaneous", desc:"Bonus action heal: target regains d4 + spellcasting modifier HP. Range 60 ft."},
  "Bless":               {school:"Enchantment", castTime:"1 action", range:"30 ft", duration:"Concentration, 1 min", desc:"Up to 3 creatures add d4 to attack rolls and saving throws."},
  "Bane":                {school:"Enchantment", castTime:"1 action", range:"30 ft", duration:"Concentration, 1 min", desc:"Up to 3 creatures: CHA save or subtract d4 from attack rolls and saving throws."},
  "Guiding Bolt":        {school:"Evocation", castTime:"1 action", range:"120 ft", duration:"1 round", desc:"+4d6 radiant damage. Next attack vs target has advantage before end of your next turn."},
  "Inflict Wounds":      {school:"Necromancy", castTime:"1 action", range:"Touch", duration:"Instantaneous", desc:"Melee spell attack: 3d10 necrotic damage on hit."},
  "Shield of Faith":     {school:"Abjuration", castTime:"1 bonus action", range:"60 ft", duration:"Concentration, 10 min", desc:"Shimmering field gives target +2 AC."},
  "Command":             {school:"Enchantment", castTime:"1 action", range:"60 ft", duration:"1 round", desc:"WIS save or follow one-word command: Approach, Drop, Flee, Grovel, Halt."},
  "Sanctuary":           {school:"Abjuration", castTime:"1 bonus action", range:"30 ft", duration:"1 minute", desc:"Attackers must WIS save to target protected creature. Ends if it attacks or casts."},
  "Entangle":            {school:"Conjuration", castTime:"1 action", range:"90 ft", duration:"Concentration, 1 min", desc:"Grasping weeds fill 20ft square. STR save or restrained. Area is difficult terrain."},
  "Faerie Fire":         {school:"Evocation", castTime:"1 action", range:"60 ft", duration:"Concentration, 1 min", desc:"DEX save or outlined in light. Attacks vs outlined creatures have advantage. No hiding."},
  "Goodberry":           {school:"Transmutation", castTime:"1 action", range:"Touch", duration:"Instantaneous", desc:"Create 10 berries. Each restores 1 HP and provides a day's nourishment."},
  "Fog Cloud":           {school:"Conjuration", castTime:"1 action", range:"120 ft", duration:"Concentration, 1 hour", desc:"20ft radius sphere of fog. Heavily obscured area. Wind disperses it."},
  "Feather Fall":        {school:"Transmutation", castTime:"1 reaction", range:"60 ft", duration:"1 minute", desc:"Up to 5 falling creatures descend 60ft/round and take no fall damage."},
  "Longstrider":         {school:"Transmutation", castTime:"1 action", range:"Touch", duration:"1 hour", desc:"Touch a creature. Its speed increases by 10 ft for the duration."},
  "Jump":                {school:"Transmutation", castTime:"1 action", range:"Touch", duration:"1 minute", desc:"Triple a creature's jump distance for the duration."},
  "Hex":                 {school:"Enchantment", castTime:"1 bonus action", range:"90 ft", duration:"Concentration, 1 hour", desc:"Curse target: deal extra d6 necrotic on hits. Choose ability: target has disadvantage on checks with it."},
  "Hellish Rebuke":      {school:"Evocation", castTime:"1 reaction", range:"60 ft", duration:"Instantaneous", desc:"When damaged: DEX save or 2d10 fire to attacker. Half on save."},
  "Armor of Agathys":    {school:"Abjuration", castTime:"1 action", range:"Self", duration:"1 hour", desc:"Gain 5 temp HP. When hit in melee, attacker takes 5 cold damage."},
  "Arms of Hadar":       {school:"Conjuration", castTime:"1 action", range:"Self (10ft)", duration:"Instantaneous", desc:"STR save or 2d6 necrotic and can't take reactions. Half damage on save."},
  "Witch Bolt":          {school:"Evocation", castTime:"1 action", range:"30 ft", duration:"Concentration, 1 min", desc:"Ranged attack: d12 lightning. Each turn, bonus action to deal d12 again automatically."},
  "Expeditious Retreat":  {school:"Transmutation", castTime:"1 bonus action", range:"Self", duration:"Concentration, 10 min", desc:"Take Dash action as bonus action on each turn."},
  "False Life":          {school:"Necromancy", castTime:"1 action", range:"Self", duration:"1 hour", desc:"Gain 1d4+4 temporary HP."},
  "Disguise Self":       {school:"Illusion", castTime:"1 action", range:"Self", duration:"1 hour", desc:"Change appearance of body and equipment. Investigation vs spell save DC to see through."},
  "Silent Image":        {school:"Illusion", castTime:"1 action", range:"60 ft", duration:"Concentration, 10 min", desc:"Create a visual illusion up to 15ft cube. Investigation check to disbelieve."},
  "Comprehend Languages":{school:"Divination", castTime:"1 action", range:"Self", duration:"1 hour", desc:"Understand any spoken or written language. Touch written surface for word-by-word translation. Ritual."},
  "Unseen Servant":      {school:"Conjuration", castTime:"1 action", range:"60 ft", duration:"1 hour", desc:"Invisible force performs simple tasks: fetch, clean, hold, carry (10lbs). Speed 15ft. Ritual."},
  "Alarm":               {school:"Abjuration", castTime:"1 minute", range:"30 ft", duration:"8 hours", desc:"Mental or audible alarm when tiny+ creature enters 20ft cube. Ritual."},
  "Grease":              {school:"Conjuration", castTime:"1 action", range:"60 ft", duration:"1 minute", desc:"Slick grease in 10ft square. DEX save or fall prone. Difficult terrain."},
  "Chromatic Orb":       {school:"Evocation", castTime:"1 action", range:"90 ft", duration:"Instantaneous", desc:"4\" sphere of energy: choose acid/cold/fire/lightning/poison/thunder. Ranged attack: 3d8 damage."},
  "Ice Knife":           {school:"Conjuration", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"Ranged attack: d10 piercing. Miss or hit: shards explode 5ft, DEX save or 2d6 cold."},
  "Catapult":            {school:"Transmutation", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"Launch a 1-5 lb object 90 ft. DEX save or 3d8 bludgeoning damage."},
  "Absorb Elements":     {school:"Abjuration", castTime:"1 reaction", range:"Self", duration:"1 round", desc:"Resistance to triggering damage type. Next melee hit deals +1d6 of that type."},
  "Hunter's Mark":       {school:"Divination", castTime:"1 bonus action", range:"90 ft", duration:"Concentration, 1 hour", desc:"Mark a creature. Deal +d6 damage to it on weapon hits. Advantage on Perception/Survival to track."},
  "Ensnaring Strike":    {school:"Conjuration", castTime:"1 bonus action", range:"Self", duration:"Concentration, 1 min", desc:"Next hit: STR save or restrained by vines. Repeating save each turn. d6 piercing if restrained."},
  "Hail of Thorns":      {school:"Conjuration", castTime:"1 bonus action", range:"Self", duration:"Concentration, 1 min", desc:"Next ranged hit: d10 piercing burst, 5ft radius DEX save or d10 piercing to others."},
  "Animal Friendship":   {school:"Enchantment", castTime:"1 action", range:"30 ft", duration:"24 hours", desc:"WIS save (DC varies by INT) or beast is charmed by you for 24 hours."},
  "Speak with Animals":  {school:"Divination", castTime:"1 action", range:"Self", duration:"10 minutes", desc:"Comprehend and verbally communicate with beasts. They share knowledge of nearby locations. Ritual."},
  "Compelled Duel":      {school:"Enchantment", castTime:"1 bonus action", range:"30 ft", duration:"Concentration, 1 min", desc:"WIS save or target is drawn to fight only you. Disadvantage attacking others. DEX save to move away."},
  "Divine Favor":        {school:"Evocation", castTime:"1 bonus action", range:"Self", duration:"Concentration, 1 min", desc:"Weapon attacks deal extra d4 radiant damage."},
  "Heroism":             {school:"Enchantment", castTime:"1 action", range:"Touch", duration:"Concentration, 1 min", desc:"Immune to frightened. Gain temp HP equal to spellcasting mod at start of each turn."},
  "Searing Smite":       {school:"Evocation", castTime:"1 bonus action", range:"Self", duration:"Concentration, 1 min", desc:"Next hit: +d6 fire damage. Target ignites: d4 fire each turn until action to extinguish."},
  "Thunderous Smite":    {school:"Evocation", castTime:"1 bonus action", range:"Self", duration:"Concentration, 1 min", desc:"Next hit: +2d6 thunder, STR save or 10ft push and knocked prone. Audible 300ft."},
  "Wrathful Smite":      {school:"Evocation", castTime:"1 bonus action", range:"Self", duration:"Concentration, 1 min", desc:"Next hit: +d6 psychic, WIS save or frightened until sees you succeed a save."},
  "Protection from Evil and Good":{school:"Abjuration", castTime:"1 action", range:"Touch", duration:"Concentration, 10 min", desc:"Protection vs aberrations, celestials, elementals, fey, fiends, undead: no charm/fright/possession, attacks have disadvantage."},
  "Purify Food and Drink":{school:"Transmutation", castTime:"1 action", range:"10 ft", duration:"Instantaneous", desc:"Remove poison and disease from food and drink in 5ft sphere. Ritual."},
  "Create or Destroy Water":{school:"Transmutation", castTime:"1 action", range:"30 ft", duration:"Instantaneous", desc:"Create 10 gallons of clean water in a container, or destroy water in a 30ft cube."},
  "Detect Evil and Good":{school:"Divination", castTime:"1 action", range:"Self", duration:"Concentration, 10 min", desc:"Know if aberration/celestial/elemental/fey/fiend/undead is within 30ft and its location."},
  "Detect Poison and Disease":{school:"Divination", castTime:"1 action", range:"Self", duration:"Concentration, 10 min", desc:"Sense presence and location of poison/disease/poisonous creature within 30ft. Ritual."},
  "Earth Tremor":        {school:"Evocation", castTime:"1 action", range:"10 ft", duration:"Instantaneous", desc:"DEX save or d6 bludgeoning + fall prone. Ground in area becomes difficult terrain."},
  "Dissonant Whispers":  {school:"Enchantment", castTime:"1 action", range:"60 ft", duration:"Instantaneous", desc:"WIS save or 3d6 psychic + use reaction to flee. Half damage, no fleeing on save."},
  "Illusory Script":     {school:"Illusion", castTime:"1 minute", range:"Touch", duration:"10 days", desc:"Write secret message. Others see unintelligible script or a decoy message. Ritual."},

  // 2nd Level Spells
  "Hold Person":         {school:"Enchantment", castTime:"1 action", range:"60 feet", duration:"Concentration, up to 1 minute", desc:"Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target. At Higher Levels: When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd."},
  "Misty Step":          {school:"Conjuration", castTime:"1 bonus action", range:"Self", duration:"Instantaneous", desc:"Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see."},

  // 3rd Level Spells
  "Counterspell":        {school:"Abjuration", castTime:"1 reaction", range:"60 feet", duration:"Instantaneous", desc:"You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell's level. On a success, the creature's spell fails and has no effect. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is equal to or less than the level of the spell slot you used."},
  "Lightning Bolt":      {school:"Evocation", castTime:"1 action", range:"Self (100-foot line)", duration:"Instantaneous", desc:"A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much on a successful one. At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."},
  "Revivify":            {school:"Necromancy", castTime:"1 action", range:"Touch", duration:"Instantaneous", desc:"You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can't return to life a creature that has died of old age, nor can it restore any missing body parts."},

  // 4th Level Spells
  "Polymorph":           {school:"Transmutation", castTime:"1 action", range:"60 feet", duration:"Concentration, up to 1 hour", desc:"This spell transforms a creature that you can see within range into a new form. An unwilling creature must make a Wisdom saving throw to avoid the effect. The transformation lasts for the duration, or until the target drops to 0 hit points or dies. The new form can be any beast whose challenge rating is equal to or less than the target's (or the target's level, if it doesn't have a challenge rating). The target's game statistics are replaced by the statistics of the chosen beast. The target assumes the hit points of its new form. When it reverts, the creature returns to the number of hit points it had before it transformed."},
};

// ── ITEM CATEGORIES (for equipment dropdowns) ──
DND_DATA.itemCategories = {
  "Any musical instrument": [
    "Bagpipes","Drum","Dulcimer","Flute","Lute","Lyre","Horn","Pan flute","Shawm","Viol"
  ],
  "Any artisan's tools": [
    "Alchemist's supplies","Brewer's supplies","Calligrapher's supplies",
    "Carpenter's tools","Cartographer's tools","Cobbler's tools","Cook's utensils",
    "Glassblower's tools","Jeweler's tools","Leatherworker's tools","Mason's tools",
    "Painter's supplies","Potter's tools","Smith's tools","Tinker's tools",
    "Weaver's tools","Woodcarver's tools"
  ],
  "Any gaming set": ["Dice set","Dragonchess set","Playing card set","Three-dragon ante set"],
  "Any simple melee weapon": null,
  "Any martial melee weapon": null,
  "Any simple weapon": null,
  "Any martial weapon": null,
  "Any weapon": null,
  "Any arcane focus": ["Crystal","Orb","Rod","Staff","Wand"],
  "Any druidic focus": ["Sprig of mistletoe","Totem","Wooden staff","Yew wand"],
  "Any holy symbol": ["Amulet","Emblem","Reliquary"],
  "Any musical instrument (one of your choice)": null,
};
// Merge weapon categories into itemCategories
if(DND_DATA.weaponCategories){
  Object.keys(DND_DATA.weaponCategories).forEach(k=>{
    DND_DATA.itemCategories[k] = DND_DATA.weaponCategories[k];
  });
}

// ── LEVEL UP DATA ──
// ══════════════════════════════════════════════════════
// XP THRESHOLDS (index = level - 1)
// ══════════════════════════════════════════════════════
DND_DATA.xpThresholds = [
  0,300,900,2700,6500,14000,23000,34000,
  48000,64000,85000,100000,120000,140000,
  165000,195000,225000,265000,305000,355000
];

// ══════════════════════════════════════════════════════
// SPELL SLOTS — extended to level 20
// index = level-1, array = [1st,2nd,3rd,4th,5th,6th,7th,8th,9th]
// ══════════════════════════════════════════════════════
DND_DATA.spellSlots = {
  // Full casters
  bard:     [
    [2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],
    [4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],
    [4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],
    [4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
  ],
  cleric:   [
    [2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],
    [4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],
    [4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],
    [4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
  ],
  druid:    [
    [2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],
    [4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],
    [4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],
    [4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
  ],
  sorcerer: [
    [2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],
    [4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],
    [4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],
    [4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
  ],
  wizard:   [
    [2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],
    [4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],
    [4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],
    [4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
  ],
  // Half casters (first spell slot at level 2 for paladin/ranger)
  paladin:  [
    null,[2],[3],[3],[4,2],[4,2],[4,3],[4,3],[4,3,2],[4,3,2],
    [4,3,3],[4,3,3],[4,3,3,1],[4,3,3,1],[4,3,3,2],[4,3,3,2],
    [4,3,3,3,1],[4,3,3,3,1],[4,3,3,3,2],[4,3,3,3,2]
  ],
  ranger:   [
    null,[2],[3],[3],[4,2],[4,2],[4,3],[4,3],[4,3,2],[4,3,2],
    [4,3,3],[4,3,3],[4,3,3,1],[4,3,3,1],[4,3,3,2],[4,3,3,2],
    [4,3,3,3,1],[4,3,3,3,1],[4,3,3,3,2],[4,3,3,3,2]
  ],
  // Pact Magic — [slots, slot_level] per level
  warlock: [
    [1,1],[2,1],[2,2],[2,2],[3,3],[3,3],[4,4],[4,4],[5,5],[5,5],
    [3,5],[3,5],[3,5],[3,5],[3,5],[3,5],[4,5],[4,5],[4,5],[4,5]
  ],
  // Soup Savant: all thermoses are the same level at any time.
  // Encoded the same way as full casters but with all entries
  // 0 except the active "thermos level" row. The character-sheet
  // renderer skips zero-count slot rows so only the active level
  // is displayed.
  // Lvl  thermoses  level
  //  1     2         1
  //  2     3         1
  //  3     3         2
  //  4     3         2
  //  5     4         3
  //  6     4         3
  //  7     4         4
  //  8     4         4
  //  9     5         5
  // 10     5         5
  // 11     5         5
  // 12     5         5
  // 13     6         5
  // 14     6         5
  // 15     6         5
  // 16     6         6
  // 17     6         6
  // 18     7         6
  // 19     7         7
  // 20     7         7
  soupsavant: [
    [2],            [3],            [0,3],          [0,3],
    [0,0,4],        [0,0,4],        [0,0,0,4],      [0,0,0,4],
    [0,0,0,0,5],    [0,0,0,0,5],    [0,0,0,0,5],    [0,0,0,0,5],
    [0,0,0,0,6],    [0,0,0,0,6],    [0,0,0,0,6],    [0,0,0,0,0,6],
    [0,0,0,0,0,6],  [0,0,0,0,0,7],  [0,0,0,0,0,0,7],[0,0,0,0,0,0,7]
  ]
};

// ── SOUP SAVANT — Instant Soups (cantrips) known per level ──
// Per the Soup Savant table: 2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5
DND_DATA.soupSavantInstants = [2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,5,5,5,5,5];

// ── SOUP SAVANT — Culinary die size by level ──
// 2nd: d4 · 6th: d6 · 11th: d8 · 17th: d10 · 20th: d12
DND_DATA.soupSavantCulinaryDie = function(level){
  if(level >= 20) return 'd12';
  if(level >= 17) return 'd10';
  if(level >= 11) return 'd8';
  if(level >= 6)  return 'd6';
  return 'd4';
};

// ── SOUP SAVANT — Number of Culinary Edge dice by level ──
DND_DATA.soupSavantCulinaryDiceCount = function(level){
  if(level >= 20) return 5;
  if(level >= 17) return 5;
  if(level >= 11) return 4;
  if(level >= 6)  return 3;
  if(level >= 2)  return 2;
  return 0;
};

// ══════════════════════════════════════════════════════
// LEVEL FEATURES — levels 2-20 for all classes
// Level 1 features live in DND_DATA.classes[cls].features
// isASI: true = Ability Score Improvement at this level
// ══════════════════════════════════════════════════════
DND_DATA.levelFeatures = {

  // ── BARBARIAN ──────────────────────────────────────
  barbarian: {
    2:  [{name:"Reckless Attack",desc:"When you make your first attack on your turn, you can attack recklessly — advantage on melee weapon attack rolls using STR, but attack rolls against you have advantage until your next turn."},
         {name:"Danger Sense",desc:"Advantage on DEX saving throws against effects you can see (e.g. traps, spells). Not while blinded, deafened, or incapacitated."}],
    3:  [{name:"Primal Path",desc:"Choose your Primal Path: Path of the Berserker, Path of the Totem Warrior, or another. Your path grants additional features at levels 3, 6, 10, and 14."},
         {name:"Rage (3/day)",desc:"Rage uses increase to 3 per long rest."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each. Cannot exceed 20."}],
    5:  [{name:"Extra Attack",desc:"You can attack twice, instead of once, whenever you take the Attack action on your turn."},
         {name:"Fast Movement",desc:"Your speed increases by 10 ft while you aren't wearing heavy armor."}],
    6:  [{name:"Primal Path Feature",desc:"You gain a feature from your chosen Primal Path."},
         {name:"Rage (4/day)",desc:"Rage uses increase to 4 per long rest."}],
    7:  [{name:"Feral Instinct",desc:"Advantage on initiative rolls. If surprised at the start of combat, you can act normally if you enter your rage before doing anything else."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Brutal Critical (1 die)",desc:"On a critical hit with a melee weapon, roll one additional weapon damage die."},
         {name:"Rage Damage +3",desc:"Bonus damage while raging increases to +3."}],
    10: [{name:"Primal Path Feature",desc:"You gain a feature from your chosen Primal Path."}],
    11: [{name:"Relentless Rage",desc:"If you drop to 0 HP while raging and don't die outright, make a DC 10 CON save. On success, drop to 1 HP. The DC increases by 5 each time you use this until you finish a short or long rest."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Rage (5/day)",desc:"Rage uses increase to 5 per long rest."}],
    13: [{name:"Brutal Critical (2 dice)",desc:"On a critical hit with a melee weapon, roll two additional weapon damage dice."}],
    14: [{name:"Primal Path Feature",desc:"You gain a feature from your chosen Primal Path."}],
    15: [{name:"Persistent Rage",desc:"Your rage ends early only if you fall unconscious or choose to end it. It no longer ends from not attacking or taking damage."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Rage Damage +4",desc:"Bonus damage while raging increases to +4."}],
    17: [{name:"Brutal Critical (3 dice)",desc:"On a critical hit with a melee weapon, roll three additional weapon damage dice."},
         {name:"Rage (6/day)",desc:"Rage uses increase to 6 per long rest."}],
    18: [{name:"Indomitable Might",desc:"If your total for a STR check is less than your STR score, you can use that score in place of the total."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Primal Champion",desc:"Your STR and CON scores each increase by 4. Their maximum is also now 24."},
         {name:"Unlimited Rages",desc:"You can rage an unlimited number of times per long rest."}]
  },

  // ── BARD ───────────────────────────────────────────
  bard: {
    2:  [{name:"Jack of All Trades",desc:"Add half your proficiency bonus (rounded down) to any ability check that doesn't already include your proficiency bonus."},
         {name:"Song of Rest (d6)",desc:"If you or any friendly creatures who can hear your performance regain HP at the end of a short rest, each regains an extra d6 HP."}],
    3:  [{name:"Bard College",desc:"Choose a Bard College: College of Lore, College of Valor, or another. Grants features at levels 3, 6, and 14."},
         {name:"Expertise",desc:"Choose 2 proficient skills. Your proficiency bonus is doubled for ability checks using those skills."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Bardic Inspiration (d8)",desc:"Your Bardic Inspiration die increases from d6 to d8."},
         {name:"Font of Inspiration",desc:"You regain all uses of Bardic Inspiration on a short or long rest (previously only long rest)."}],
    6:  [{name:"Countercharm",desc:"As an action, start a performance. Friendly creatures within 30 ft have advantage on saving throws against being frightened or charmed as long as you maintain it."},
         {name:"Bard College Feature",desc:"You gain a feature from your Bard College."}],
    7:  [{name:"Spell Progression",desc:"Your spell slots and known spells increase. See your character sheet for current spell progression."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Song of Rest (d8)",desc:"Your Song of Rest die increases from d6 to d8."}],
    10: [{name:"Bardic Inspiration (d10)",desc:"Your Bardic Inspiration die increases from d8 to d10."},
         {name:"Expertise (2 more)",desc:"Choose 2 more proficient skills. Your proficiency bonus is doubled for ability checks using those skills."},
         {name:"Magical Secrets",desc:"Choose 2 spells from any class's spell list. They count as bard spells for you."}],
    11: [{name:"Spell Progression",desc:"Your spell slots and known spells increase (6th-level spell slots unlocked)."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Song of Rest (d10)",desc:"Your Song of Rest die increases from d8 to d10."}],
    14: [{name:"Magical Secrets",desc:"Choose 2 more spells from any class's spell list."},
         {name:"Bard College Feature",desc:"You gain a feature from your Bard College."}],
    15: [{name:"Bardic Inspiration (d12)",desc:"Your Bardic Inspiration die increases from d10 to d12."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Song of Rest (d12)",desc:"Your Song of Rest die increases from d10 to d12."}],
    18: [{name:"Magical Secrets",desc:"Choose 2 more spells from any class's spell list."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Superior Inspiration",desc:"When you roll initiative and have no uses of Bardic Inspiration left, you regain one use."}]
  },

  // ── CLERIC ─────────────────────────────────────────
  cleric: {
    2:  [{name:"Channel Divinity (1/rest)",desc:"You gain the ability to channel divine energy. You have 1 use per short or long rest. You also gain the Turn Undead option and a second Channel Divinity option from your domain."},
         {name:"Divine Domain Feature",desc:"Your chosen Divine Domain grants you an additional feature."}],
    3:  [{name:"Spell Progression",desc:"Your spell slots increase. See your character sheet for current spell progression."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Destroy Undead (CR 1/2)",desc:"When an undead fails its saving throw against your Turn Undead, it is instantly destroyed if its CR is 1/2 or lower."}],
    6:  [{name:"Channel Divinity (2/rest)",desc:"You can now use Channel Divinity twice between rests."},
         {name:"Divine Domain Feature",desc:"Your chosen Divine Domain grants an additional feature."}],
    7:  [{name:"Spell Progression",desc:"Your spell slots increase (4th-level slots unlocked)."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Destroy Undead (CR 1)",desc:"Your Destroy Undead threshold increases to CR 1."},
         {name:"Divine Domain Feature",desc:"Your chosen Divine Domain grants an additional feature."}],
    9:  [{name:"Spell Progression",desc:"Your spell slots increase (5th-level slots unlocked)."}],
    10: [{name:"Divine Intervention",desc:"You can call on your deity for aid. Roll d100. If you roll equal to or lower than your Cleric level, your deity intervenes. Once successful, can't be used again for 7 days."}],
    11: [{name:"Destroy Undead (CR 2)",desc:"Your Destroy Undead threshold increases to CR 2."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Spell Progression",desc:"Your spell slots increase (7th-level slots unlocked)."}],
    14: [{name:"Destroy Undead (CR 3)",desc:"Your Destroy Undead threshold increases to CR 3."}],
    15: [{name:"Spell Progression",desc:"Your spell slots increase (8th-level slots unlocked)."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Destroy Undead (CR 4)",desc:"Your Destroy Undead threshold increases to CR 4."},
         {name:"Divine Domain Feature",desc:"Your chosen Divine Domain grants an additional feature."}],
    18: [{name:"Channel Divinity (3/rest)",desc:"You can now use Channel Divinity three times between rests."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Divine Intervention (Improved)",desc:"Your Divine Intervention call automatically succeeds without rolling. After you use it, you can't use it again for 7 days."}]
  },

  // ── DRUID ──────────────────────────────────────────
  druid: {
    2:  [{name:"Wild Shape (CR 1/4)",desc:"Use your action to transform into a beast with CR 1/4 or lower (no fly or swim speed). You can use this twice per short rest. Lasts up to 1 hour or half your druid level."},
         {name:"Druid Circle",desc:"Choose a Druid Circle: Circle of the Land, Circle of the Moon, or another. Grants features at levels 2, 6, 10, and 14."}],
    3:  [{name:"Spell Progression",desc:"Your spell slots increase (2nd-level slots unlocked)."}],
    4:  [{name:"Wild Shape (CR 1/2)",desc:"You can now assume beast shapes with CR 1/2 or lower (still no fly speed)."},
         {name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Spell Progression",desc:"Your spell slots increase (3rd-level slots unlocked)."}],
    6:  [{name:"Druid Circle Feature",desc:"Your Druid Circle grants an additional feature."}],
    7:  [{name:"Spell Progression",desc:"Your spell slots increase (4th-level slots unlocked)."}],
    8:  [{name:"Wild Shape (CR 1)",desc:"You can now assume beast shapes with CR 1 or lower, as well as creatures with a swim speed."},
         {name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Spell Progression",desc:"Your spell slots increase (5th-level slots unlocked)."}],
    10: [{name:"Druid Circle Feature",desc:"Your Druid Circle grants an additional feature."}],
    11: [{name:"Spell Progression",desc:"Your spell slots increase (6th-level slots unlocked)."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Spell Progression",desc:"Your spell slots increase (7th-level slots unlocked)."}],
    14: [{name:"Druid Circle Feature",desc:"Your Druid Circle grants an additional feature."}],
    15: [{name:"Spell Progression",desc:"Your spell slots increase (8th-level slots unlocked)."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Spell Progression",desc:"Your spell slots increase (9th-level slots unlocked)."}],
    18: [{name:"Timeless Body",desc:"The primal magic you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."},
         {name:"Beast Spells",desc:"You can cast many of your druid spells in any shape you assume using Wild Shape. You perform the somatic and verbal components in beast form."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Archdruid",desc:"You can use Wild Shape an unlimited number of times. Additionally, ignore verbal and somatic spell components while transformed, and maintain concentration on Wild Shape through damage more easily."}]
  },

  // ── FIGHTER ────────────────────────────────────────
  fighter: {
    2:  [{name:"Action Surge (1/rest)",desc:"On your turn, take one additional action. Once per short or long rest."}],
    3:  [{name:"Martial Archetype",desc:"Choose a Martial Archetype: Champion, Battle Master, Eldritch Knight, or another. Grants features at levels 3, 7, 10, 15, and 18."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Extra Attack",desc:"You can attack twice whenever you take the Attack action."}],
    6:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    7:  [{name:"Martial Archetype Feature",desc:"Your Martial Archetype grants an additional feature."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Indomitable (1/long rest)",desc:"Reroll a saving throw that you fail. You must use the new roll. Once per long rest."}],
    10: [{name:"Martial Archetype Feature",desc:"Your Martial Archetype grants an additional feature."}],
    11: [{name:"Extra Attack (2)",desc:"You can now attack three times whenever you take the Attack action."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Indomitable (2/long rest)",desc:"You can now use Indomitable twice between long rests."}],
    14: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    15: [{name:"Martial Archetype Feature",desc:"Your Martial Archetype grants an additional feature."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Action Surge (2/rest)",desc:"You can now use Action Surge twice between short rests (but not twice in the same turn)."},
         {name:"Indomitable (3/long rest)",desc:"You can now use Indomitable three times between long rests."}],
    18: [{name:"Martial Archetype Feature",desc:"Your Martial Archetype grants an additional feature."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Extra Attack (3)",desc:"You can now attack four times whenever you take the Attack action."}]
  },

  // ── MONK ───────────────────────────────────────────
  monk: {
    2:  [{name:"Ki (2 points)",desc:"Gain 2 ki points (equals monk level). Spend to fuel Flurry of Blows (1 ki: 2 bonus unarmed strikes), Patient Defense (1 ki: Dodge as bonus action), or Step of the Wind (1 ki: Dash or Disengage as bonus action). Recharge on short rest."},
         {name:"Unarmored Movement (+10 ft)",desc:"Your speed increases by 10 ft while not wearing armor or wielding a shield."}],
    3:  [{name:"Monastic Tradition",desc:"Choose a Monastic Tradition: Way of the Open Hand, Way of Shadow, Way of the Four Elements, or another. Grants features at levels 3, 6, 11, and 17."},
         {name:"Deflect Missiles",desc:"Use your reaction when hit by a ranged weapon attack to reduce damage by d10 + DEX mod + Monk level. If reduced to 0, catch and throw it as a ranged attack (1 ki)."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Slow Fall",desc:"Reaction: reduce falling damage by 5 × monk level."}],
    5:  [{name:"Extra Attack",desc:"You can attack twice whenever you take the Attack action."},
         {name:"Stunning Strike",desc:"When you hit with a melee weapon attack, spend 1 ki to stun the target. CON save vs your ki save DC. On fail: stunned until end of your next turn (attacks vs it have advantage, it fails DEX/STR saves)."},
         {name:"Martial Arts (d6)",desc:"Your Martial Arts die increases to d6."}],
    6:  [{name:"Ki-Empowered Strikes",desc:"Your unarmed strikes count as magical for the purpose of overcoming resistance and immunity."},
         {name:"Monastic Tradition Feature",desc:"Your Monastic Tradition grants an additional feature."},
         {name:"Unarmored Movement (+15 ft)",desc:"Your speed bonus increases to +15 ft."}],
    7:  [{name:"Evasion",desc:"When subjected to an effect that allows a DEX save for half damage, you take no damage on a success, and only half on a failure."},
         {name:"Stillness of Mind",desc:"Use your action to end one effect on yourself that is causing you to be charmed or frightened."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Unarmored Movement (wall/ceiling)",desc:"You gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."}],
    10: [{name:"Purity of Body",desc:"Your mastery of ki grants immunity to disease and poison."},
         {name:"Unarmored Movement (+20 ft)",desc:"Your speed bonus increases to +20 ft."}],
    11: [{name:"Monastic Tradition Feature",desc:"Your Monastic Tradition grants an additional feature."},
         {name:"Martial Arts (d8)",desc:"Your Martial Arts die increases to d8."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Tongue of the Sun and Moon",desc:"You learn to touch the ki of other minds, allowing you to understand all spoken languages and be understood by any creature that understands language."}],
    14: [{name:"Diamond Soul",desc:"Proficiency in all saving throws. Additionally, when you fail a saving throw, spend 1 ki to reroll and take the new result."}],
    15: [{name:"Timeless Body",desc:"Your ki sustains you so you suffer none of the frailty of old age, and you cannot be aged magically. You still die normally."},
         {name:"Unarmored Movement (+25 ft)",desc:"Your speed bonus increases to +25 ft."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Monastic Tradition Feature",desc:"Your Monastic Tradition grants an additional feature."},
         {name:"Martial Arts (d10)",desc:"Your Martial Arts die increases to d10."}],
    18: [{name:"Empty Body",desc:"Spend 4 ki: become invisible for 1 minute, resist all damage except force. Spend 8 ki: cast Astral Projection without material components for yourself."},
         {name:"Unarmored Movement (+30 ft)",desc:"Your speed bonus increases to +30 ft."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Perfect Self",desc:"When you roll initiative and have no ki points remaining, you regain 4 ki points."}]
  },

  // ── PALADIN ────────────────────────────────────────
  paladin: {
    2:  [{name:"Fighting Style",desc:"Choose a fighting style: Defense (+1 AC in armor), Dueling (+2 damage with one-handed weapon), Great Weapon Fighting (reroll 1s and 2s on two-handed weapon damage), or Protection (use reaction to impose disadvantage on attacker of ally)."},
         {name:"Spellcasting",desc:"You are a half-caster. Use CHA for spellcasting. You prepare paladin spells (CHA mod + half paladin level, rounded down). You also always have your Sacred Oath spells prepared."},
         {name:"Divine Smite",desc:"When you hit with a melee weapon attack, expend a spell slot to deal extra radiant damage: 2d8 for a 1st-level slot, plus 1d8 for each slot level above 1st (max 5d8). The damage increases by 1d8 if the target is an undead or a fiend."}],
    3:  [{name:"Divine Health",desc:"The divine magic flowing through you makes you immune to disease."},
         {name:"Sacred Oath",desc:"Swear an oath: Oath of Devotion, Oath of the Ancients, Oath of Vengeance, or another. Grants Oath spells, Channel Divinity options, and features at levels 3, 7, 15, and 20."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Extra Attack",desc:"You can attack twice whenever you take the Attack action."}],
    6:  [{name:"Aura of Protection",desc:"While conscious, you and friendly creatures within 10 ft add your CHA modifier (minimum +1) to all saving throws."}],
    7:  [{name:"Sacred Oath Feature",desc:"Your Sacred Oath grants an additional feature."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Spell Progression",desc:"Your spell slots increase (3rd-level paladin spells unlocked)."}],
    10: [{name:"Aura of Courage",desc:"While conscious, you and friendly creatures within 10 ft can't be frightened."}],
    11: [{name:"Improved Divine Smite",desc:"Whenever you hit a creature with a melee weapon, you deal an extra 1d8 radiant damage (in addition to any Divine Smite you might add)."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Spell Progression",desc:"Your spell slots increase (4th-level paladin spells unlocked)."}],
    14: [{name:"Cleansing Touch",desc:"Use your action to end one spell on yourself or a willing creature you touch. Uses = CHA modifier (min 1) per long rest."}],
    15: [{name:"Sacred Oath Feature",desc:"Your Sacred Oath grants an additional feature."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Spell Progression",desc:"Your spell slots increase (5th-level paladin spells unlocked)."}],
    18: [{name:"Aura Improvements",desc:"The range of your Aura of Protection and Aura of Courage increases to 30 ft."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Sacred Oath Capstone",desc:"You gain the capstone feature of your Sacred Oath, a powerful ability that defines the pinnacle of your paladin's power."}]
  },

  // ── RANGER ─────────────────────────────────────────
  ranger: {
    2:  [{name:"Fighting Style",desc:"Choose a fighting style: Archery (+2 ranged attack rolls), Defense (+1 AC in armor), Dueling (+2 damage with one-handed weapon), or Two-Weapon Fighting (add ability modifier to off-hand attacks)."},
         {name:"Spellcasting",desc:"You gain spellcasting. WIS-based. You know spells rather than preparing them. Your spell slots update with your level."}],
    3:  [{name:"Ranger Archetype",desc:"Choose a Ranger Archetype: Hunter, Beast Master, or another. Grants features at levels 3, 7, 11, and 15."},
         {name:"Primeval Awareness",desc:"Expend a spell slot to sense for 1 minute per slot level whether aberrations, celestials, dragons, elementals, fey, fiends, or undead are present within 1 mile (6 miles in natural terrain)."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Extra Attack",desc:"You can attack twice whenever you take the Attack action."}],
    6:  [{name:"Favored Enemy (2nd type)",desc:"Choose a second favored enemy type. Also learn one more language associated with your original or new favored enemy."},
         {name:"Natural Explorer (2nd terrain)",desc:"Choose a second favored terrain type."}],
    7:  [{name:"Ranger Archetype Feature",desc:"Your Ranger Archetype grants an additional feature."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Land's Stride",desc:"Moving through nonmagical difficult terrain costs no extra movement. Advantage on saves against magically created plants. No damage from nonmagical plant hazards."}],
    9:  [{name:"Spell Progression",desc:"Your spell slots increase (2nd-level ranger spells unlocked)."}],
    10: [{name:"Natural Explorer (3rd terrain)",desc:"Choose a third favored terrain type."},
         {name:"Hide in Plain Sight",desc:"Spend 1 minute creating camouflage: +10 to Stealth checks while motionless in natural environments."}],
    11: [{name:"Ranger Archetype Feature",desc:"Your Ranger Archetype grants an additional feature."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Spell Progression",desc:"Your spell slots increase (3rd-level ranger spells unlocked)."}],
    14: [{name:"Favored Enemy (3rd type)",desc:"Choose a third favored enemy type."},
         {name:"Vanish",desc:"Use the Hide action as a bonus action. Also, you can't be tracked by nonmagical means unless you choose to leave a trail."}],
    15: [{name:"Ranger Archetype Feature",desc:"Your Ranger Archetype grants an additional feature."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Spell Progression",desc:"Your spell slots increase (4th-level ranger spells unlocked)."}],
    18: [{name:"Feral Senses",desc:"Gain preternatural senses. When attacking a creature you can't see, your inability to see doesn't impose disadvantage. You're also aware of any invisible creature within 30 ft."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Foe Slayer",desc:"Once on each of your turns, add your WIS modifier to an attack roll or damage roll against one of your favored enemies. You can use this before or after rolling."}]
  },

  // ── ROGUE ──────────────────────────────────────────
  rogue: {
    2:  [{name:"Cunning Action",desc:"You can take the Dash, Disengage, or Hide action as a bonus action on each of your turns."}],
    3:  [{name:"Roguish Archetype",desc:"Choose a Roguish Archetype: Thief, Assassin, Arcane Trickster, or another. Grants features at levels 3, 9, 13, and 17."},
         {name:"Sneak Attack (2d6)",desc:"Sneak Attack damage increases to 2d6."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Uncanny Dodge",desc:"When an attacker you can see hits you with an attack, use your reaction to halve the attack's damage against you."},
         {name:"Sneak Attack (3d6)",desc:"Sneak Attack damage increases to 3d6."}],
    6:  [{name:"Expertise (2 more)",desc:"Choose 2 more proficient skills to double your proficiency bonus on."},
         {name:"Sneak Attack (3d6)",desc:"Sneak Attack damage remains 3d6 until level 7."}],
    7:  [{name:"Evasion",desc:"When subjected to an effect that allows a DEX save for half damage, you take no damage on success, and only half on a failure."},
         {name:"Sneak Attack (4d6)",desc:"Sneak Attack damage increases to 4d6."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Sneak Attack (4d6)",desc:"Sneak Attack damage remains 4d6."}],
    9:  [{name:"Roguish Archetype Feature",desc:"Your Roguish Archetype grants an additional feature."},
         {name:"Sneak Attack (5d6)",desc:"Sneak Attack damage increases to 5d6."}],
    10: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Sneak Attack (5d6)",desc:"Sneak Attack damage remains 5d6."}],
    11: [{name:"Reliable Talent",desc:"When you make an ability check using a skill you're proficient in, treat any d20 result of 9 or lower as a 10."},
         {name:"Sneak Attack (6d6)",desc:"Sneak Attack damage increases to 6d6."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Sneak Attack (6d6)",desc:"Sneak Attack damage remains 6d6."}],
    13: [{name:"Roguish Archetype Feature",desc:"Your Roguish Archetype grants an additional feature."},
         {name:"Sneak Attack (7d6)",desc:"Sneak Attack damage increases to 7d6."}],
    14: [{name:"Blindsense",desc:"If you are able to hear, you are aware of the location of any hidden or invisible creature within 10 ft of you."},
         {name:"Sneak Attack (7d6)",desc:"Sneak Attack damage remains 7d6."}],
    15: [{name:"Slippery Mind",desc:"You gain proficiency in WIS saving throws."},
         {name:"Sneak Attack (8d6)",desc:"Sneak Attack damage increases to 8d6."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Sneak Attack (8d6)",desc:"Sneak Attack damage remains 8d6."}],
    17: [{name:"Roguish Archetype Feature",desc:"Your Roguish Archetype grants an additional feature."},
         {name:"Sneak Attack (9d6)",desc:"Sneak Attack damage increases to 9d6."}],
    18: [{name:"Elusive",desc:"No attack roll has advantage against you while you aren't incapacitated."},
         {name:"Sneak Attack (9d6)",desc:"Sneak Attack damage remains 9d6."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Sneak Attack (10d6)",desc:"Sneak Attack damage increases to 10d6."}],
    20: [{name:"Stroke of Luck",desc:"If your attack misses a target within range, you can turn it into a hit. Alternatively, if you fail an ability check, treat the d20 roll as a 20. Once per short or long rest."},
         {name:"Sneak Attack (10d6)",desc:"Sneak Attack damage remains 10d6 at level 20."}]
  },

  // ── SORCERER ───────────────────────────────────────
  sorcerer: {
    2:  [{name:"Font of Magic",desc:"You gain 2 sorcery points (equals your sorcerer level). Use points to create spell slots (2=1st, 3=2nd, 5=3rd, 6=4th, 7=5th) or convert spell slots to sorcery points (slot level). Recharge on long rest."}],
    3:  [{name:"Metamagic (2 options)",desc:"Choose 2 Metamagic options: Careful Spell (protect allies in AoEs), Distant Spell (double range), Empowered Spell (reroll damage dice), Extended Spell (double duration), Heightened Spell (disadvantage on save), Quickened Spell (bonus action cast), Subtle Spell (no verbal/somatic), Twinned Spell (target two creatures)."},
         {name:"Sorcery Points (3)",desc:"Your sorcery point total increases to 3."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Sorcery Points (5)",desc:"Your sorcery point total increases to 5."}],
    6:  [{name:"Sorcerous Origin Feature",desc:"Your Sorcerous Origin grants an additional feature."}],
    7:  [{name:"Sorcery Points (7)",desc:"Your sorcery point total increases to 7."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Sorcery Points (9)",desc:"Your sorcery point total increases to 9."}],
    10: [{name:"Metamagic (3rd option)",desc:"Choose one additional Metamagic option."},
         {name:"Sorcery Points (10)",desc:"Your sorcery point total increases to 10."}],
    11: [{name:"Sorcery Points (11)",desc:"Your sorcery point total increases to 11."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Sorcery Points (13)",desc:"Your sorcery point total increases to 13."}],
    14: [{name:"Sorcerous Origin Feature",desc:"Your Sorcerous Origin grants an additional feature."}],
    15: [{name:"Sorcery Points (15)",desc:"Your sorcery point total increases to 15."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Metamagic (4th option)",desc:"Choose one additional Metamagic option."},
         {name:"Sorcery Points (17)",desc:"Your sorcery point total increases to 17."}],
    18: [{name:"Sorcerous Origin Feature",desc:"Your Sorcerous Origin grants an additional feature."},
         {name:"Sorcery Points (18)",desc:"Your sorcery point total increases to 18."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Sorcery Points (19)",desc:"Your sorcery point total increases to 19."}],
    20: [{name:"Sorcerous Restoration",desc:"Regain 4 expended sorcery points whenever you finish a short rest."},
         {name:"Sorcery Points (20)",desc:"Your sorcery point total increases to 20."}]
  },

  // ── WARLOCK ────────────────────────────────────────
  warlock: {
    2:  [{name:"Eldritch Invocations (2)",desc:"Choose 2 Eldritch Invocations to augment your magical powers. Examples: Agonizing Blast (+CHA to Eldritch Blast), Devil's Sight (darkvision 120ft in magical darkness), Mask of Many Faces (cast Disguise Self at will), Repelling Blast (push targets 10ft)."}],
    3:  [{name:"Pact Boon",desc:"Choose your Pact Boon: Pact of the Chain (find familiar), Pact of the Blade (create a magical weapon), or Pact of the Tome (Book of Shadows with 3 cantrips)."},
         {name:"Eldritch Invocations (3 total)",desc:"Choose one additional Eldritch Invocation (total 3). Your spell slots become 2nd level."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Eldritch Invocations (4 total)",desc:"Choose one additional Eldritch Invocation (total 4)."}],
    5:  [{name:"Eldritch Invocations (5 total)",desc:"Choose one additional Eldritch Invocation (total 5). Your spell slots become 3rd level."}],
    6:  [{name:"Otherworldly Patron Feature",desc:"Your Otherworldly Patron grants an additional feature."},
         {name:"Eldritch Invocations (6 total)",desc:"Choose one additional Eldritch Invocation (total 6)."}],
    7:  [{name:"Eldritch Invocations (7 total)",desc:"Choose one additional Eldritch Invocation (total 7). Your spell slots become 4th level."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Eldritch Invocations (8 total)",desc:"Choose one additional Eldritch Invocation (total 8)."}],
    9:  [{name:"Eldritch Invocations (9 total)",desc:"Choose one additional Eldritch Invocation (total 9). Your spell slots become 5th level."}],
    10: [{name:"Otherworldly Patron Feature",desc:"Your Otherworldly Patron grants an additional feature."},
         {name:"Eldritch Invocations (10 total)",desc:"Choose one additional Eldritch Invocation (total 10)."}],
    11: [{name:"Mystic Arcanum (6th Level)",desc:"You can cast one 6th-level spell from your patron's list once per long rest without using a spell slot. Current 6th-level warlock spells include: Eyebite, Flesh to Stone, Scatter, Soul Cage."},
         {name:"Eldritch Invocations (11 total)",desc:"Choose one additional Eldritch Invocation (total 11)."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Eldritch Invocations (12 total)",desc:"Choose one additional Eldritch Invocation (total 12)."}],
    13: [{name:"Mystic Arcanum (7th Level)",desc:"You can cast one 7th-level spell from your patron's list once per long rest without using a spell slot. Examples: Etherealness, Finger of Death, Forcecage, Plane Shift."}],
    14: [{name:"Otherworldly Patron Feature",desc:"Your Otherworldly Patron grants an additional feature."},
         {name:"Eldritch Invocations (13 total)",desc:"Choose one additional Eldritch Invocation (total 13)."}],
    15: [{name:"Mystic Arcanum (8th Level)",desc:"You can cast one 8th-level spell from your patron's list once per long rest without using a spell slot. Examples: Demiplane, Dominate Monster, Feeblemind, Maddening Darkness."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Eldritch Invocations (14 total)",desc:"Choose one additional Eldritch Invocation (total 14)."}],
    17: [{name:"Mystic Arcanum (9th Level)",desc:"You can cast one 9th-level spell from your patron's list once per long rest without using a spell slot. Examples: Astral Projection, Foresight, True Polymorph, Weird."}],
    18: [{name:"Eldritch Invocations (15 total)",desc:"Choose one additional Eldritch Invocation (total 15)."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Eldritch Invocations (16 total)",desc:"Choose one additional Eldritch Invocation (total 16)."}],
    20: [{name:"Eldritch Master",desc:"You can entreat your patron for aid. Spend 1 minute entreating your patron to regain all expended spell slots from Pact Magic. Once per long rest."}]
  },

  // ── WIZARD ─────────────────────────────────────────
  wizard: {
    2:  [{name:"Arcane Tradition",desc:"Choose an Arcane Tradition: School of Evocation, School of Abjuration, School of Transmutation, School of Illusion, School of Enchantment, School of Divination, School of Conjuration, or School of Necromancy. Grants features at levels 2, 6, 10, and 14."}],
    3:  [{name:"Spell Progression",desc:"Your spell slots increase (2nd-level slots unlocked). Add 2 spells to your spellbook."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    5:  [{name:"Spell Progression",desc:"Your spell slots increase (3rd-level slots unlocked). Add 2 spells to your spellbook."}],
    6:  [{name:"Arcane Tradition Feature",desc:"Your Arcane Tradition grants an additional feature."}],
    7:  [{name:"Spell Progression",desc:"Your spell slots increase (4th-level slots unlocked). Add 2 spells to your spellbook."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Spell Progression",desc:"Your spell slots increase (5th-level slots unlocked). Add 2 spells to your spellbook."}],
    10: [{name:"Arcane Tradition Feature",desc:"Your Arcane Tradition grants an additional feature."}],
    11: [{name:"Spell Progression",desc:"Your spell slots increase (6th-level slots unlocked). Add 2 spells to your spellbook."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Spell Progression",desc:"Your spell slots increase (7th-level slots unlocked). Add 2 spells to your spellbook."}],
    14: [{name:"Arcane Tradition Feature",desc:"Your Arcane Tradition grants an additional feature."}],
    15: [{name:"Spell Progression",desc:"Your spell slots increase (8th-level slots unlocked). Add 2 spells to your spellbook."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    17: [{name:"Spell Progression",desc:"Your spell slots increase (9th-level slots unlocked). Add 2 spells to your spellbook."}],
    18: [{name:"Spell Mastery",desc:"Choose one 1st-level and one 2nd-level wizard spell in your spellbook. You can cast each at their lowest level without expending a spell slot. To cast at a higher level, use a slot as normal."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    20: [{name:"Signature Spells",desc:"You gain mastery over two powerful spells. Choose two 3rd-level wizard spells in your spellbook. You always have them prepared and can cast each once per short rest at 3rd level without a spell slot."}]
  },

  // ── SOUP SAVANT (Phmurt Studios homebrew) ─────────────
  soupsavant: {
    2:  [{name:"Culinary Edge (2 × d4)",desc:"When you cook a soup that deals damage or restores HP, expend one culinary die as a bonus action and add the result to the roll. You have 2 culinary dice (d4). Recharges on a long rest."},
         {name:"Entrepreneur's Expertise",desc:"Choose one Charisma-based skill in which you are proficient. Your proficiency bonus is doubled for any check using it. You have advantage on Charisma checks to sell, barter, or negotiate the value of your soup (up to 10 gp; rises to 25 gp at 5th, 50 gp at 10th, no upper limit at 20th when using a Divinely Delicious soup)."}],
    3:  [{name:"Soup of the Day",desc:"After a long rest, roll on the Soup of the Day table to determine an enhancement. Apply it to a number of your thermoses/Insta-cups equal to one culinary die roll. Triggers when consumed. Requires alchemist's supplies; lasts until your next long rest."},
         {name:"Thermos Progression",desc:"Your thermos level increases to 2nd. Bandolier capacity is 3 thermoses."}],
    4:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each. Cannot exceed 20."}],
    5:  [{name:"Soup Pantry",desc:"Your Soup Cabinet expands. Door is now 2.5 ft × 6.5 ft and the interior is a 3 ft × 2 ft × 7 ft cube with cold storage. Up to 200 lb of material; perishables stay fresh for 1 week."},
         {name:"Gritty Gut",desc:"Advantage on CON saves vs ingested hazards (poison/disease via food/drink). Immunity to the poisoned condition from spoiled food. Can craft soup from any organic/edible material — at 15th level extends to inorganic and inedible materials too."},
         {name:"Thermos Progression",desc:"Your thermos level increases to 3rd. Bandolier capacity rises to 4 thermoses."}],
    6:  [{name:"Culinary Edge (3 × d6)",desc:"You gain a third culinary die and the die size becomes d6."},
         {name:"Trained Tongue",desc:"Advantage on Wisdom (Perception) checks that rely on taste or smell. Identify any nonmagical food, drink, or substance by taste. Automatically know if something has been poisoned or magically altered before swallowing. After 1 minute examining an unusual creature, intuit potential culinary uses (DM determines)."}],
    7:  [{name:"Pop-up Stand",desc:"Gain proficiency with carpenter's tools and woodcarver's tools. With 4 hours of work and basic lumber, you can build a 5 × 5 × 8 ft covered stand with a prep surface and storage for 10 wooden bowls. Operating it for 4+ hours in a settlement: Cha (Persuasion) check vs DM-set DC; on success earn 2d6 sp/hour."},
         {name:"Thermos Progression",desc:"Your thermos level increases to 4th."}],
    8:  [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    9:  [{name:"Soup of the Day Improvement",desc:"You now roll on the Soup of the Day table twice after each long rest and choose which result applies. Each enhancement applies to a separate group of thermoses."},
         {name:"Thermos Progression",desc:"Your thermos level increases to 5th. Bandolier capacity rises to 5 thermoses."}],
    10: [{name:"Soup Kitchen",desc:"Your pantry becomes a fully equipped 10 × 10 × 10 ft soup kitchen with a magical hearth (no fuel; speak a command to adjust heat). You and up to four others can prepare soup recipes in half the normal time. A creature taking a short rest in the kitchen and consuming at least one bowl of your soup regains an extra 1d6 HP per Hit Die spent. Once per long rest, declare a communal meal for up to eight creatures: each gains the benefits of heroes' feast (requires a 5th-level or higher recipe cooked that day)."}],
    11: [{name:"Culinary Edge (4 × d8)",desc:"You gain a fourth culinary die and the die size becomes d8."}],
    12: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."}],
    13: [{name:"Forager Foresight",desc:"Once per long rest, spend 10 minutes in contemplation to cast locate object on a previously-encountered specific ingredient (no thermos cost). On another plane, you instead learn which plane it is on. After 1 hour foraging in a new region, you automatically find 1d4 useful local ingredients (DM determines)."},
         {name:"Bandolier (6 thermoses)",desc:"Your bandolier capacity rises to 6 thermoses (still all at thermos level 5)."}],
    14: [{name:"Divinely Delicious Soup",desc:"Once per day at preparation, designate up to your CHA modifier (min 1) thermoses as Divinely Delicious. They gain: Smell — a creature within 15 ft that can smell an opened thermos must succeed a WIS save vs your Soup save DC or have disadvantage on its next save. Healing — a creature consuming the soup regains an extra 3d8 HP. Charming — on a failed WIS save, the creature is charmed by you for 1 hour or until you/your allies damage it."}],
    15: [{name:"Pop-up Restaurant",desc:"Gain proficiency with mason's tools, glassblower's tools, and painter's supplies. You can design and oversee construction of a permanent restaurant with stone walls, glass windows, full kitchen, and seating for 20 patrons. Build 40 cu. ft. of structure per day with hired labor. A completed restaurant in a settlement of 500+ generates 5 gp/day when staffed. In settlements of 1,000+, 50% chance someone already knows your name or has tasted your soup."},
         {name:"Gritty Gut Improvement",desc:"Your Gritty Gut now extends to inorganic and otherwise inedible materials. Your DM determines what effects, if any, result from incorporating such unusual ingredients."}],
    16: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Thermos Progression",desc:"Your thermos level increases to 6th."}],
    17: [{name:"Culinary Edge (5 × d10)",desc:"You gain a fifth culinary die and the die size becomes d10."}],
    18: [{name:"Interdimensional Cauldron",desc:"Once per long rest, given a cauldron, you can spend 1 hour cooking a Planar Broth. Pour it onto a solid surface to open a portal large enough for a Medium creature. The portal connects your location to a plane of your choice for 10 minutes; creatures pass freely both ways. The DM picks the destination, typically tied to your ingredients."},
         {name:"Bandolier (7 thermoses)",desc:"Your bandolier capacity rises to 7 thermoses."}],
    19: [{name:"Ability Score Improvement",isASI:true,desc:"Increase one ability score by 2, or two scores by 1 each."},
         {name:"Thermos Progression",desc:"Your thermos level increases to 7th — the highest level a soup recipe can be."}],
    20: [{name:"Legendary Chef",desc:"Your CHA score increases by 2, to a maximum of 22. Your culinary die becomes a d12 and you have 5 culinary dice. Once per long rest, spend 1 hour cooking your Magnum Opus (functions as a Divinely Delicious soup, but applies to any number of thermoses). All HP restored by your soups doubled for 24h; consumers gain immunity to frightened/charmed for 24h. Anyone who has ever consumed your soups has advantage on saves vs frightened while they can see or smell you."}]
  }

}; // end DND_DATA.levelFeatures

// ══════════════════════════════════════════════════════════════
// SOUP RECIPE DESCRIPTIONS (Phmurt Studios homebrew)
// Each recipe follows the Soup Spell System from the portfolio:
//   • level — 0 (Instant Soup / Insta-cup) or 1-7 (thermos)
//   • delivery — Served | Thrown | Pressure Cooked | Ranged Spell Attack
//   • cookTime — preparation time (PDF: 10 min × thermos level per recipe)
//   • range — derived from delivery method per the PDF
//   • duration — instant or persistent
//   • ingredients — material components
//   • slowCook — true if the recipe has the Slow Cook (ritual) tag
//   • desc — mechanical effect with thermos-level scaling where applicable
//   • save — 'dex'|'con'|'wis'|... for save-based recipes
//   • attackRoll — true for Ranged Spell Attack delivery
// ══════════════════════════════════════════════════════════════
DND_DATA.soupDescriptions = {
  // ── INSTANT SOUPS (cantrips, no thermos) ────────────────
  "Bad Batch": {
    level:0, delivery:"Pressure Cooked", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"15-ft cone", duration:"Instantaneous",
    ingredients:"A spoonful of an old failed batch you refuse to throw away",
    save:"con",
    desc:"Each creature in the cone makes a Constitution save vs your Soup save DC. On a failure, take 1d8 poison damage and become poisoned until the end of its next turn. Damage rises to 2d8 at savant level 5, 3d8 at 11, 4d8 at 17."
  },
  "Hot N' Ready": {
    level:0, delivery:"Served", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"Reach (1 willing creature)", duration:"Instantaneous (temp HP 1 hr)",
    ingredients:"Pre-mixed broth concentrate, hot water",
    desc:"A creature within reach drinks. It regains 1d4 hit points and gains 1d4 temporary hit points (last 1 hour). Both dice rise to 2d4 at savant level 5, 3d4 at 11, 4d4 at 17."
  },
  "Quick Fix": {
    level:0, delivery:"Served", school:"Instant Soup",
    cookTime:"1 action (drip-feed)", range:"Touch", duration:"Instantaneous",
    ingredients:"A drop of warm bone broth on the lips",
    desc:"A creature with 0 HP within reach is stabilized. Functions as a successful spare-the-dying check made with your Soup attack modifier."
  },
  "Pocket Steam": {
    level:0, delivery:"Pressure Cooked", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"5-ft cone", duration:"Until your next turn",
    ingredients:"A pinch of crushed bay leaf",
    save:"dex",
    desc:"Burst of scalding aromatic steam in a 5-ft cone. Each creature there makes a DEX save or take 1d6 fire damage. The cone leaves the area dimly lit by faint glowing vapor until your next turn. Damage rises to 2d6 at L5, 3d6 at L11, 4d6 at L17."
  },
  "Pinch of Salt": {
    level:0, delivery:"Ranged Spell Attack", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"30 ft", duration:"Until your next turn",
    ingredients:"Coarse blessed salt",
    attackRoll:true,
    desc:"A grain of consecrated salt bursts of light on contact. On a hit, deal 1d6 radiant damage and the target sheds dim light in a 5-ft radius until your next turn (no advantage from being hidden). Damage rises to 2d6 at L5, 3d6 at L11, 4d6 at L17."
  },
  "Mystery Cup": {
    level:0, delivery:"Served", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"Reach (1 willing creature)", duration:"1 minute",
    ingredients:"A small unmarked thermos and your most disarming smile",
    save:"wis",
    desc:"A creature drinks something it cannot identify. It must succeed on a WIS save vs your Soup save DC or be unable to use reactions until the end of its next turn. You also have advantage on the next CHA check you make against it within 1 minute."
  },
  "Cold Comfort": {
    level:0, delivery:"Ranged Spell Attack", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"60 ft", duration:"Until your next turn",
    ingredients:"A handful of crushed mint, served frosted",
    attackRoll:true,
    desc:"A frigid splash of broth strikes a single target. On a hit, deal 1d8 cold damage and reduce its speed by 10 ft until your next turn. Damage rises to 2d8 at L5, 3d8 at L11, 4d8 at L17."
  },
  "Stockpot Light": {
    level:0, delivery:"Served (placed object)", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"Touch", duration:"1 hour",
    ingredients:"A clay stockpot, glow-cap mushroom shavings",
    desc:"You touch a stockpot and it begins to softly luminesce. The pot sheds bright light in a 20-ft radius and dim light for another 20 ft for up to 1 hour. You can dismiss the light or move the pot as a free object interaction."
  },
  "Whisper Broth": {
    level:0, delivery:"Served", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"Touch (one shared cup)", duration:"1 hour",
    ingredients:"Two spoons drawn from the same pot",
    desc:"Two creatures who each take a sip from the same cup can communicate telepathically with one another at distances up to 60 ft for 1 hour. Walls do not block the link, but extradimensional spaces and total cover do."
  },
  "Boilstrike": {
    level:0, delivery:"Pressure Cooked (touch)", school:"Instant Soup",
    cookTime:"5 minutes (Insta-cup)", range:"Touch", duration:"Until start of target's next turn",
    ingredients:"A drop of pure rendered fat",
    attackRoll:true,
    desc:"You release a contact spray of supercharged broth onto a creature you can reach. Make a melee spell attack: on a hit, deal 1d8 lightning damage and the target cannot take reactions until the start of its next turn. Damage rises to 2d8 at L5, 3d8 at L11, 4d8 at L17."
  },

  // ── 1st-LEVEL SOUP RECIPES ──────────────────────────────
  "Chicken Noodle": {
    level:1, delivery:"Served", school:"1st-Level Recipe",
    cookTime:"10 minutes (1 thermos)", range:"Reach (1 willing or incapacitated creature)", duration:"Instantaneous",
    ingredients:"Stewed chicken, root vegetables, hand-pulled noodles, a slow-rendered stock",
    desc:"A creature drinks. It regains 1d8 + your CHA modifier hit points. When you cook this from a higher-level thermos, the healing increases by 1d8 per thermos level above 1st (matching the cure wounds scaling)."
  },
  "Magic Mushroom": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos) · or +10 min as Slow Cook (no thermos)", range:"Reach (1 humanoid)", duration:"1 hour",
    ingredients:"A symbiotic enchanted mushroom that only fruits in moonlit caves",
    save:"wis",
    desc:"A humanoid drinks the soup. It must succeed on a WIS save vs your Soup save DC or be charmed by you for 1 hour or until you or your allies harm it. While charmed it regards you as a friendly acquaintance. When the effect ends it knows it was charmed. WIS save has advantage if currently in combat with you or your companions."
  },
  "Pot of Gold Broth": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Reach (up to 3 willing creatures)", duration:"Concentration, up to 1 minute",
    ingredients:"A flake of gold leaf, a bone marrow stock simmered for a full day",
    desc:"Up to three creatures within reach each take a sip. While you maintain concentration, each blessed creature adds 1d4 to attack rolls and saving throws it makes."
  },
  "Spicy Jalapeño": {
    level:1, delivery:"Pressure Cooked", school:"1st-Level Recipe",
    cookTime:"10 minutes (1 thermos)", range:"15-ft cone", duration:"Instantaneous",
    ingredients:"Roasted jalapeños, smoked paprika, a flash of dragon-pepper oil",
    save:"dex",
    desc:"A blast of capsaicin-laced steam erupts. Each creature in the cone makes a DEX save: 3d6 fire damage on a fail, half on a success. Flammable objects in the area not worn or carried catch fire. +1d6 per thermos level above 1st."
  },
  "Onion Tear Soup": {
    level:1, delivery:"Pressure Cooked", school:"1st-Level Recipe",
    cookTime:"10 minutes (1 thermos)", range:"Single target within 30 ft", duration:"Concentration, up to 1 minute",
    ingredients:"Three pounds of caramelized onion, no salt, an unspoken regret",
    save:"wis",
    desc:"You crack the valve at one creature. WIS save vs your Soup save DC: on a fail, the creature falls prone in a fit of uncontrollable weeping laughter, becoming incapacitated for the duration. It repeats the save at the end of each of its turns and on taking damage."
  },
  "Peppered Pho": {
    level:1, delivery:"Pressure Cooked", school:"1st-Level Recipe",
    cookTime:"10 minutes (1 thermos)", range:"15-ft cone", duration:"Instantaneous",
    ingredients:"Coarse-cracked black pepper, star anise, a stock that has not stopped simmering in three days",
    save:"con",
    desc:"A thunderous gust of fragrant steam slams forward. Each creature in the cone makes a CON save: 2d8 thunder damage and pushed 10 ft back on a fail, half damage and not pushed on a success. Audible from 300 ft. +1d8 per thermos level above 1st."
  },
  "Hearth Stew": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"Concentration, up to 1 minute",
    ingredients:"Slow-braised beef shank, bay leaf, a story told over the fire",
    desc:"A willing creature drinks. It gains 1d8 + your CHA modifier temporary hit points and has advantage on saving throws against being frightened for the duration."
  },
  "Crystal Consommé": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"8 hours",
    ingredients:"A clarified consommé strained through silk three times, a sliver of moonstone",
    desc:"A creature drinks the impossibly clear broth. Until they finish a long rest, the creature's AC is 13 + DEX modifier when not wearing armor (stacks with shield). The benefit ends if the creature dons armor."
  },
  "Forager's Broth": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"10 minutes",
    ingredients:"Wild game stock, foraged herbs identified that morning",
    desc:"For 10 minutes the drinker can comprehend and verbally communicate with beasts. The DM determines the depth of conversation any given beast can hold."
  },
  "Carrot Clarity": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"1 hour",
    ingredients:"Roasted heirloom carrots, a peppercorn that has crossed three borders",
    desc:"For 1 hour the drinker understands the literal meaning of any spoken language they hear and any written language they can see (taking 1 minute per page of unfamiliar script)."
  },
  "Berry Bisque": {
    level:1, delivery:"Served (yields 10 berries)", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Touch", duration:"24 hours",
    ingredients:"A handful of seasonal berries, hedgewitch's invocation",
    desc:"Cooking transforms the berries: a single bowl yields ten enchanted berries. Eating one as an action restores 1 hit point and provides as much nourishment as a full day's food. Unused berries lose their potency after 24 hours."
  },
  "Spinach Surge": {
    level:1, delivery:"Served", school:"1st-Level Recipe", slowCook:true,
    cookTime:"10 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"1 hour",
    ingredients:"A double-handful of fresh leafy greens flash-wilted in a hot stock",
    desc:"For 1 hour the drinker's walking speed increases by 10 ft."
  },

  // ── 2nd-LEVEL ──────────────────────────────────────────
  "Lentil Lockdown": {
    level:2, delivery:"Served", school:"2nd-Level Recipe",
    cookTime:"20 minutes (1 thermos)", range:"Reach (1 humanoid)", duration:"Concentration, up to 1 minute",
    ingredients:"Black lentils slow-cooked with smoked salt", save:"wis",
    desc:"A humanoid drinks. WIS save: on a fail, paralyzed for the duration. Repeats save at end of each of its turns."
  },
  "Cream of Bear": {
    level:2, delivery:"Served", school:"2nd-Level Recipe", slowCook:true,
    cookTime:"20 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"Concentration, up to 1 hour",
    ingredients:"Slow-rendered bear fat, juniper, woodland mushrooms",
    desc:"For the duration, the drinker's skin becomes thick and barklike. AC becomes a minimum of 16 (any DEX bonus still applies, and a higher AC supersedes)."
  },
  "Healing Hot Pot": {
    level:2, delivery:"Served (mass)", school:"2nd-Level Recipe",
    cookTime:"20 minutes (1 thermos)", range:"Touch (up to 3 willing creatures)", duration:"Instantaneous",
    ingredients:"Triple-strength bone broth, a sprig of revivifying mint",
    desc:"Up to three creatures sharing the pot each regain 1d4 + your CHA modifier hit points. +1d4 per thermos level above 2nd."
  },
  "Misty Mushroom Mist": {
    level:2, delivery:"Pressure Cooked", school:"2nd-Level Recipe",
    cookTime:"20 minutes (1 thermos)", range:"15-ft cone, settles into 20-ft radius", duration:"Concentration, up to 1 minute",
    ingredients:"Smoke-cured fungi, a hot vinegar reduction",
    desc:"A roiling cloud of warm aromatic mist fills a 20-ft radius sphere. The area is heavily obscured. A wind of moderate or greater speed disperses it."
  },

  // ── 3rd-LEVEL ──────────────────────────────────────────
  "Phoenix Pho": {
    level:3, delivery:"Pressure Cooked", school:"3rd-Level Recipe",
    cookTime:"30 minutes (1 thermos)", range:"20-ft radius sphere within 150 ft", duration:"Instantaneous",
    ingredients:"A single feather of phoenix down (regrown from any flame), saffron",
    save:"dex",
    desc:"A pillar of fragrant flame erupts at a point you can see. Each creature in the area makes a DEX save: 8d6 fire damage on a fail, half on a success. Flammable objects ignite. +1d6 per thermos level above 3rd."
  },
  "Restorative Ramen": {
    level:3, delivery:"Served (mass)", school:"3rd-Level Recipe", slowCook:true,
    cookTime:"30 minutes (1 thermos)", range:"Touch (up to 6 creatures within reach)", duration:"Instantaneous",
    ingredients:"Hand-pulled noodles in a tonkotsu base reinforced with healing herbs",
    desc:"Up to six creatures sharing the meal each regain 2d4 hit points and are cured of one disease or one effect making them poisoned."
  },
  "Lightning Lassi": {
    level:3, delivery:"Pressure Cooked", school:"3rd-Level Recipe",
    cookTime:"30 minutes (1 thermos)", range:"100-ft line, 5 ft wide", duration:"Instantaneous",
    ingredients:"Yogurt cultured during a thunderstorm, fennel pollen", save:"dex",
    desc:"A snapping bolt of charged broth lances out. Each creature in the line makes a DEX save: 4d10 lightning damage on a fail, half on a success. Ignites flammable unattended objects. +1d10 per thermos level above 3rd."
  },
  "Vacuum-Sealed Stock": {
    level:3, delivery:"Reaction (no delivery)", school:"3rd-Level Recipe",
    cookTime:"Reaction (uncap one prepared thermos)", range:"60 ft", duration:"Instantaneous",
    ingredients:"A thermos sealed with cooling vapor pressure",
    desc:"When you see a creature within 60 ft casting a spell, you can use your reaction to uncap a prepared Vacuum-Sealed Stock thermos. Functions as counterspell at 3rd level (auto-counter spells of 3rd level or lower; ability check vs DC 10 + spell level for higher)."
  },

  // ── 4th-LEVEL ──────────────────────────────────────────
  "Polymorphic Potage": {
    level:4, delivery:"Served", school:"4th-Level Recipe", slowCook:true,
    cookTime:"40 minutes (1 thermos)", range:"Reach (1 creature)", duration:"Concentration, up to 1 hour",
    ingredients:"Shapeshifter blood (any source), root broth, a strand of your own hair",
    save:"wis",
    desc:"A creature drinks. WIS save (auto-fail if willing). On a fail, transformed into a Beast of CR 1 or lower of your choice. Functions as the polymorph spell."
  },
  "Reviving Risotto": {
    level:4, delivery:"Served", school:"4th-Level Recipe", slowCook:true,
    cookTime:"40 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"8 hours",
    ingredients:"Saffron risotto with a rendered phoenix-broth stock",
    desc:"For the duration, the first time the drinker would drop to 0 hit points as a result of taking damage, the creature drops to 1 hit point instead. Functions as death ward."
  },
  "Stoneskin Stew": {
    level:4, delivery:"Served", school:"4th-Level Recipe", slowCook:true,
    cookTime:"40 minutes (1 thermos)", range:"Reach (1 willing creature)", duration:"Concentration, up to 1 hour",
    ingredients:"Dust from a granite quarry, mountain-goat marrow",
    desc:"A creature drinks. For the duration it has resistance to nonmagical bludgeoning, piercing, and slashing damage."
  },

  // ── 5th-LEVEL ──────────────────────────────────────────
  "Animate Brunch": {
    level:5, delivery:"Pressure Cooked (kitchenware)", school:"5th-Level Recipe",
    cookTime:"50 minutes (1 thermos)", range:"120 ft", duration:"Concentration, up to 1 minute",
    ingredients:"Up to ten plates, bowls, ladles, or kitchen implements",
    desc:"Up to ten Tiny utensils animate as constructs. Use the animate objects rules. Each acts on your turn (bonus action to command). Tiny stat block: AC 18, HP 20, attack +8 to hit, 1d4+4 damage."
  },
  "Mass Cure Stew": {
    level:5, delivery:"Served (mass)", school:"5th-Level Recipe",
    cookTime:"50 minutes (1 thermos)", range:"Touch (up to 6 creatures within 30 ft)", duration:"Instantaneous",
    ingredients:"A large communal pot, mass-quantity restorative broth",
    desc:"Up to six creatures of your choice within 30 ft each regain 3d8 + your CHA modifier hit points."
  },
  "Conjuror's Cassoulet": {
    level:5, delivery:"Slow Cook (cauldron)", school:"5th-Level Recipe", slowCook:true,
    cookTime:"60 minutes (1 thermos + Slow Cook)", range:"90 ft (placement)", duration:"Concentration, up to 1 hour",
    ingredients:"A regional cassoulet keyed to one elemental plane (e.g. coal-roasted for fire)",
    desc:"You summon an elemental of CR 5 or lower (your choice) of the appropriate elemental type. Functions as conjure elemental — the elemental is friendly to you and obeys your verbal commands while you concentrate."
  },

  // ── 6th-LEVEL ──────────────────────────────────────────
  "Heroes' Feast": {
    level:6, delivery:"Slow Cook (laid table)", school:"6th-Level Recipe", slowCook:true,
    cookTime:"60 minutes (1 thermos + Slow Cook)", range:"30-ft seating", duration:"24 hours",
    ingredients:"A great pot of stew set with twelve bowls and twelve cups (a 1,000 gp gem of crystal is consumed)",
    desc:"Functions as the heroes' feast spell. Up to twelve creatures who partake gain immunity to poison and frightened, advantage on WIS saves, +2d10 hit points, and +2d10 to maximum HP for 24 hours."
  },
  "Glowing Glow Soup": {
    level:6, delivery:"Pressure Cooked", school:"6th-Level Recipe",
    cookTime:"60 minutes (1 thermos)", range:"60-ft line, 5 ft wide", duration:"Concentration, up to 1 minute",
    ingredients:"Sun-cured tomatoes, a candle made of solar-blessed beeswax",
    save:"con",
    desc:"A 60-ft line of brilliant sunlight pours from the thermos. Each creature in the line: CON save or 6d8 radiant damage (half on success); undead and oozes have disadvantage. You can use an action on each subsequent turn to repeat the line. Sheds bright light 30 ft, dim 30 ft."
  },

  // ── 7th-LEVEL ──────────────────────────────────────────
  "Plane Shift Pho": {
    level:7, delivery:"Slow Cook (cauldron)", school:"7th-Level Recipe", slowCook:true,
    cookTime:"70 minutes (1 thermos + Slow Cook)", range:"Touch (up to 8 willing creatures)", duration:"Instantaneous",
    ingredients:"Pho broth simmered with a tuning fork attuned to the destination plane (worth 250 gp)",
    desc:"Up to eight willing creatures sharing a meal are transported to a plane of existence you name. You arrive in a location chosen by the DM. Functions as plane shift (transport mode)."
  },
  "Regeneration Reduction": {
    level:7, delivery:"Slow Cook (cauldron)", school:"7th-Level Recipe", slowCook:true,
    cookTime:"70 minutes (1 thermos + Slow Cook)", range:"Touch (1 willing creature)", duration:"1 hour",
    ingredients:"A reduction of three legendary stocks combined into a single thick glaze, a drop of troll blood",
    desc:"For 1 hour the drinker regains 1 hit point at the start of each of its turns (10 hit points per minute). Severed body parts are restored over 2 minutes if held in place. The creature also can regrow lost organs and limbs over 2 minutes."
  }
};

// ══════════════════════════════════════════════════════════════
// Extend the Soup Savant cookbook with leveled recipes (2-7)
// so the spell-info popup has a description for every recipe
// even when level-up grants higher-level entries.
// ══════════════════════════════════════════════════════════════
DND_DATA.spells.soupsavant.level2 = ["Lentil Lockdown","Cream of Bear","Healing Hot Pot","Misty Mushroom Mist"];
DND_DATA.spells.soupsavant.level3 = ["Phoenix Pho","Restorative Ramen","Lightning Lassi","Vacuum-Sealed Stock"];
DND_DATA.spells.soupsavant.level4 = ["Polymorphic Potage","Reviving Risotto","Stoneskin Stew"];
DND_DATA.spells.soupsavant.level5 = ["Animate Brunch","Mass Cure Stew","Conjuror's Cassoulet"];
DND_DATA.spells.soupsavant.level6 = ["Heroes' Feast","Glowing Glow Soup"];
DND_DATA.spells.soupsavant.level7 = ["Plane Shift Pho","Regeneration Reduction"];

// ══════════════════════════════════════════════════════════════
// LEGENDARY SOUPS PORTFOLIO (Phmurt Studios)
// Each legendary soup requires a specific ingredient harvested
// from one of the most powerful creatures in existence. The
// soup savant character sheet exposes these via a dedicated
// renderer (renderLegendarySoups, in character-builder.html).
// ══════════════════════════════════════════════════════════════
DND_DATA.legendarySoups = [
  {
    id:'tarrasque-tail',
    name:"Tarrasque Tail Consommé",
    ingredient:"Tarrasque tail marrow, sawn from the carcass within 1 hour of death before its regenerative properties seal the wound.",
    cookingTime:"8 hours over open flame (marrow does not liquefy until the sixth hour; stopping at 6 hours yields lessened effects)",
    serves:"1 creature",
    benefits:[
      "Hit point maximum increases by 50.",
      "Resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.",
      "At the start of each of its turns, regains 10 HP if it has at least 1 HP.",
      "Immunity to the frightened condition.",
      "These benefits are permanent and cannot be dispelled."
    ]
  },
  {
    id:'beholder-eye',
    name:"Beholder Eye Bisque",
    ingredient:"A beholder's central eye, removed whole within 10 minutes of death. The anti-magic humor must be skimmed and discarded throughout cooking or it will curdle into the soup.",
    cookingTime:"12 hours (slow roast; requires constant skimming)",
    serves:"1 creature",
    duration:"7 days",
    benefits:[
      "Truesight out to 120 feet.",
      "Immune to gaze attacks and effects that require eye contact.",
      "Sees invisible creatures and objects as if they were visible.",
      "Once per day, an action emits a 30-ft cone that functions as antimagic field until the start of its next turn (the creature cannot cast spells or use magical abilities while the cone is active)."
    ]
  },
  {
    id:'lich-phylactery',
    name:"Lich Phylactery Potage",
    ingredient:"The phylactery of a lich, shattered over a prepared broth at the exact moment of the lich's final death so that the soul residue is captured in the liquid.",
    cookingTime:"24 hours (the soul residue must be coaxed in slowly; rushing destroys it)",
    serves:"1 creature",
    benefits:[
      "No longer ages and cannot be magically aged. Can still die from other causes.",
      "Advantage on all Intelligence-based ability checks and saving throws.",
      "Once per long rest, when reduced to 0 HP, can choose to drop to 1 HP instead (does not function if killed outright).",
      "Gain proficiency in Arcana, History, and Religion. Already-proficient becomes expertise."
    ]
  },
  {
    id:'ancient-dragon',
    name:"Ancient Dragon Bone Broth",
    ingredient:"The femur of an ancient dragon (CR 20+), cracked and slow-rendered over magical flame. Mundane fire cannot render the marrow.",
    cookingTime:"10 hours (requires a magical heat source)",
    serves:"Up to 4 creatures",
    duration:"30 days",
    benefits:[
      "Immunity to the damage type associated with the dragon's breath weapon.",
      "Strength and Constitution scores each increase by 4, to a maximum of 24.",
      "Advantage on Charisma (Intimidation) checks and saving throws against being frightened.",
      "Once per day, exhale a breath weapon identical to the dragon's, using your Soup save DC."
    ]
  },
  {
    id:'elder-brain',
    name:"Elder Brain Bouillabaisse",
    ingredient:"An elder brain, harvested whole from its brine pool within 30 minutes of death.",
    cookingTime:"8 hours (the cook must succeed on three DC 16 Wisdom saves each hour or take 4d6 psychic damage from residual telepathic signals)",
    serves:"Up to 6 creatures",
    duration:"10 days",
    benefits:[
      "Telepathic communication with any creature within 120 ft that shares a language.",
      "Cast detect thoughts at will, no slot or material components.",
      "Once per day, action to cast dominate monster (save DC 18) on a humanoid, no slot.",
      "Immunity to being charmed or frightened by aberrations."
    ]
  },
  {
    id:'kraken-ink',
    name:"Kraken Ink Ramen",
    ingredient:"The kraken's ink sac, handled only with magically treated gloves and diluted immediately into 100 gallons of pure seawater. Undiluted, the ink corrodes most metals.",
    cookingTime:"8 hours (must be prepared near open water)",
    serves:"Up to 4 creatures",
    duration:"14 days",
    benefits:[
      "Swimming speed of 60 ft and the ability to breathe underwater.",
      "Immunity to lightning damage.",
      "Once per day, action to exhale a 20-ft radius cloud of black ink (heavily obscured for 1 minute; entering or starting a turn there: DC 18 CON save or blinded until leaving).",
      "Communicate with any creature that has a swimming speed, regardless of language."
    ]
  },
  {
    id:'tiamat-spice',
    name:"Tiamat's Five-Spice Hotpot",
    ingredient:"One scale each from Tiamat's five heads — one red, one white, one blue, one green, one black. All five must enter the pot simultaneously.",
    cookingTime:"5 hours (one hour per scale, added in sequence; if the pot boils over at any point the elemental balance collapses)",
    serves:"1 creature (too potent to divide)",
    benefits:[
      "Immunity to fire, cold, lightning, acid, and poison damage.",
      "Once per day, action to exhale a 30-ft cone breath of any one of the five damage types (10d8 damage; DC 20 DEX save for half).",
      "Chromatic dragons regard the creature with involuntary respect; advantage on all Charisma checks vs chromatic dragons."
    ]
  },
  {
    id:'aboleth-memory',
    name:"Aboleth Memory Bisque",
    ingredient:"An aboleth's mucus glands, rendered immediately upon the creature's death. They begin to break down within 2 hours.",
    cookingTime:"16 hours at very low heat (DC 14 WIS save each hour or become lost in visions of the aboleth's memories for that hour; if the cooking time exceeds 20 hours the soup is burnt)",
    serves:"1 creature",
    benefits:[
      "Permanently gains proficiency in every skill in which it is not already proficient.",
      "Cast legend lore at will, no slot. Information reflects the aboleth's memories and is extraordinarily detailed.",
      "Advantage on all Intelligence saving throws and checks, permanently.",
      "Once per week, 1 hour of meditation grants a detailed vision of a specific past event within the last 10,000 years that the aboleth could theoretically have witnessed (DM determines accuracy)."
    ]
  },
  {
    id:'vecna-eye',
    name:"Vecna's Unseen Eye Stew",
    ingredient:"Necrotic residue scraped from the empty eye socket of a creature that previously bore the Eye of Vecna.",
    cookingTime:"6 hours (must be cooked in total darkness; any light source within 30 ft causes it to curdle)",
    serves:"1 creature",
    benefits:[
      "See invisible and hidden creatures and objects within 60 ft, even in magical darkness.",
      "Once per day, action to cast foresight on yourself, no slot.",
      "Always knows whether a creature within 30 ft is lying (provided it is capable of intentional deceit).",
      "Disadvantage on saving throws against effects that originate from Vecna."
    ]
  },
  {
    id:'dracolich-glaze',
    name:"Dracolich Marrow Glaze",
    ingredient:"The crystallized marrow from a dracolich's femur, captured as vapor in a sealed vessel during sublimation.",
    cookingTime:"4 hours to produce the glaze; then applied as a finishing step to a completed non-legendary soup recipe",
    serves:"Applied to another recipe",
    special:"This glaze is applied to a completed non-legendary soup. That recipe gains the listed effects in addition to its normal effects.",
    benefits:[
      "Any healing the recipe provides also grants an equal number of temporary HP for 24 hours.",
      "Resistance to necrotic damage for 7 days.",
      "Does not need to sleep for 7 days; immune to exhaustion during that time.",
      "Once during those 7 days, when reduced to 0 HP and killed, can instead drop to 1 HP and become immune to all damage until the end of its next turn."
    ]
  }
];

// ══════════════════════════════════════════════════════════════
// EXTENDED SPELL LISTS — levels 2 through 9
// These append to DND_DATA.spells[cls] which already has
// cantrips and level1 for each class.
// ══════════════════════════════════════════════════════════════

// ── WIZARD ──────────────────────────────────────────────────
DND_DATA.spells.wizard.level2 = [
  "Alter Self","Arcane Lock","Blindness/Deafness","Blur","Cloud of Daggers",
  "Crown of Madness","Darkness","Darkvision","Detect Thoughts","Enlarge/Reduce","Flaming Sphere","Gentle Repose","Hold Person","Invisibility",
  "Knock","Levitate","Locate Object","Magic Mouth","Melf's Acid Arrow",
  "Mirror Image","Misty Step","Nystul's Magic Aura","Phantasmal Force",
  "Ray of Enfeeblement","Rope Trick","Scorching Ray","See Invisibility","Shatter","Skywrite","Spider Climb","Suggestion","Web"
];
DND_DATA.spells.wizard.level3 = [
  "Animate Dead","Bestow Curse","Blink","Clairvoyance","Counterspell",
  "Dispel Magic","Fear","Feign Death","Fireball",
  "Fly","Gaseous Form","Glyph of Warding","Haste","Hypnotic Pattern","Leomund's Tiny Hut",
  "Lightning Bolt","Magic Circle","Major Image","Nondetection","Phantom Steed","Protection from Energy","Remove Curse","Sending",
  "Sleet Storm","Slow","Stinking Cloud","Summon Lesser Demons","Tongues","Vampiric Touch","Water Breathing"
];
DND_DATA.spells.wizard.level4 = [
  "Arcane Eye","Banishment","Black Tentacles","Blight","Charm Monster","Confusion",
  "Conjure Minor Elementals","Control Water","Dimension Door","Divination",
  "Elemental Bane","Fabricate","Fire Shield","Greater Invisibility","Hallucinatory Terrain",
  "Ice Storm","Leomund's Secret Chest","Locate Creature","Mordenkainen's Faithful Hound",
  "Mordenkainen's Private Sanctum","Otiluke's Resilient Sphere",
  "Phantasmal Killer","Polymorph","Sickening Radiance",
  "Stone Shape","Stoneskin","Storm Sphere","Summon Construct","Summon Elemental",
  "Summon Greater Demon","Vitriolic Sphere","Wall of Fire","Watery Sphere"
];
DND_DATA.spells.wizard.level5 = [
  "Animate Objects","Bigby's Hand","Cloudkill","Cone of Cold","Conjure Elemental",
  "Contact Other Plane","Contingency","Control Winds","Creation","Danse Macabre",
  "Dawn","Dominate Person","Dream","Far Step","Geas","Hold Monster",
  "Immolation","Infernal Calling","Legend Lore","Mislead","Modify Memory",
  "Negative Energy Flood","Passwall","Planar Binding","Rary's Telepathic Bond",
  "Scrying","Seeming","Skill Empowerment","Steel Wind Strike","Summon Draconic Spirit",
  "Synaptic Static","Telekinesis","Teleportation Circle","Wall of Force","Wall of Light",
  "Wall of Stone"
];
DND_DATA.spells.wizard.level6 = [
  "Arcane Gate","Chain Lightning","Circle of Death","Contingency","Create Undead",
  "Disintegrate","Drawmij's Instant Summons","Eyebite","Flesh to Stone",
  "Globe of Invulnerability","Guards and Wards","Investiture of Flame",
  "Investiture of Ice","Investiture of Stone","Investiture of Wind","Magic Jar",
  "Mass Suggestion","Mental Prison","Move Earth","Otiluke's Freezing Sphere",
  "Otto's Irresistible Dance","Programmed Illusion","Scatter","Soul Cage",
  "Summon Fiend","Sunbeam","Tenser's Transformation","True Seeing","Wall of Ice"
];
DND_DATA.spells.wizard.level7 = [
  "Crown of Stars","Delayed Blast Fireball","Divine Word","Etherealness",
  "Finger of Death","Fire Storm","Forcecage","Mirage Arcane","Mordenkainen's Magnificent Mansion",
  "Mordenkainen's Sword","Plane Shift","Power Word Pain","Prismatic Spray",
  "Project Image","Reverse Gravity","Sequester","Simulacrum","Symbol",
  "Teleport","Whirlwind"
];
DND_DATA.spells.wizard.level8 = [
  "Abi-Dalzim's Horrid Wilting","Antimagic Field","Antipathy/Sympathy",
  "Clone","Control Weather","Demiplane","Dominate Monster","Earthquake",
  "Feeblemind","Illusory Dragon","Incendiary Cloud","Maddening Darkness",
  "Maze","Mind Blank","Power Word Stun","Sunburst","Telepathy",
  "Tsunami"
];
DND_DATA.spells.wizard.level9 = [
  "Astral Projection","Blade of Disaster","Foresight","Gate","Imprisonment",
  "Mass Polymorph","Meteor Swarm","Power Word Kill","Prismatic Wall",
  "Psychic Scream","Shapechange","Time Stop","True Polymorph","Weird","Wish"
];

// ── SORCERER ────────────────────────────────────────────────
DND_DATA.spells.sorcerer.level2 = [
  "Blindness/Deafness","Blur","Cloud of Daggers","Crown of Madness","Darkness",
  "Darkvision","Detect Thoughts","Enhance Ability",
  "Enlarge/Reduce","Flaming Sphere","Hold Person","Invisibility","Knock",
  "Levitate","Magic Mouth","Mirror Image","Misty Step",
  "Phantasmal Force","Ray of Enfeeblement","Scorching Ray","See Invisibility",
  "Shatter","Spider Climb","Suggestion","Web"
];
DND_DATA.spells.sorcerer.level3 = [
  "Blink","Clairvoyance","Counterspell","Daylight","Dispel Magic",
  "Fear","Fireball","Fly","Gaseous Form",
  "Haste","Hypnotic Pattern","Lightning Bolt","Major Image","Protection from Energy","Sleet Storm","Slow","Stinking Cloud","Tongues","Vampiric Touch","Water Breathing"
];
DND_DATA.spells.sorcerer.level4 = [
  "Banishment","Blight","Charm Monster","Confusion","Dimension Door",
  "Dominate Beast","Elemental Bane","Fire Shield","Greater Invisibility",
  "Ice Storm","Sickening Radiance",
  "Storm Sphere","Stoneskin","Summon Elemental","Summon Greater Demon",
  "Vitriolic Sphere","Wall of Fire","Watery Sphere"
];
DND_DATA.spells.sorcerer.level5 = [
  "Animate Objects","Bigby's Hand","Cloudkill","Cone of Cold","Conjure Elemental",
  "Control Winds","Creation","Dawn","Dominate Person","Far Step","Geas",
  "Hold Monster","Immolation","Seeming","Skill Empowerment","Steel Wind Strike",
  "Summon Draconic Spirit","Synaptic Static","Telekinesis","Teleportation Circle",
  "Wall of Force","Wall of Light","Wall of Stone"
];
DND_DATA.spells.sorcerer.level6 = [
  "Arcane Gate","Chain Lightning","Circle of Death","Create Undead","Disintegrate",
  "Eyebite","Flesh to Stone","Globe of Invulnerability","Investiture of Flame",
  "Investiture of Ice","Investiture of Stone","Investiture of Wind","Mass Suggestion",
  "Mental Prison","Move Earth","Otiluke's Freezing Sphere","Scatter","Soul Cage",
  "Summon Fiend","Sunbeam","True Seeing"
];
DND_DATA.spells.sorcerer.level7 = [
  "Crown of Stars","Delayed Blast Fireball","Etherealness","Finger of Death",
  "Fire Storm","Forcecage","Plane Shift","Power Word Pain","Prismatic Spray",
  "Reverse Gravity","Symbol","Teleport","Whirlwind"
];
DND_DATA.spells.sorcerer.level8 = [
  "Abi-Dalzim's Horrid Wilting","Antimagic Field","Control Weather","Demiplane",
  "Dominate Monster","Earthquake","Feeblemind","Incendiary Cloud","Maddening Darkness",
  "Power Word Stun","Sunburst"
];
DND_DATA.spells.sorcerer.level9 = [
  "Blade of Disaster","Gate","Mass Polymorph","Meteor Swarm","Power Word Kill",
  "Psychic Scream","Time Stop","True Polymorph","Wish"
];

// ── BARD ────────────────────────────────────────────────────
DND_DATA.spells.bard.level2 = [
  "Blindness/Deafness","Cloud of Daggers","Crown of Madness","Detect Thoughts",
  "Enhance Ability","Enthrall","Heat Metal","Hold Person","Invisibility","Knock",
  "Lesser Restoration","Locate Animals or Plants","Locate Object","Magic Mouth",
  "Mirror Image","Phantasmal Force","Pyrotechnics",
  "See Invisibility","Shatter","Silence","Skywrite","Suggestion","Zone of Truth"
];
DND_DATA.spells.bard.level3 = [
  "Bestow Curse","Clairvoyance","Counterspell","Dispel Magic",
  "Fear","Feign Death","Gaseous Form","Glyph of Warding",
  "Hypnotic Pattern","Leomund's Tiny Hut","Major Image","Mass Healing Word",
  "Nondetection","Plant Growth","Sending","Slow","Speak with Dead",
  "Speak with Plants","Stinking Cloud","Tongues"
];
DND_DATA.spells.bard.level4 = [
  "Charm Monster","Confusion","Dimension Door","Freedom of Movement",
  "Greater Invisibility","Hallucinatory Terrain","Locate Creature",
  "Phantasmal Killer","Polymorph"
];
DND_DATA.spells.bard.level5 = [
  "Animate Objects","Awaken","Dominate Person","Dream","Geas","Greater Restoration",
  "Hold Monster","Legend Lore","Mass Cure Wounds","Mislead","Modify Memory",
  "Planar Binding","Raise Dead","Rary's Telepathic Bond","Scrying","Seeming",
  "Skill Empowerment","Steel Wind Strike","Synaptic Static","Teleportation Circle"
];
DND_DATA.spells.bard.level6 = [
  "Eyebite","Find the Path","Guards and Wards","Heroes' Feast","Mass Suggestion",
  "Otto's Irresistible Dance","Programmed Illusion","Scatter","Soul Cage","True Seeing"
];
DND_DATA.spells.bard.level7 = [
  "Etherealness","Forcecage","Mirage Arcane","Mordenkainen's Magnificent Mansion",
  "Plane Shift","Power Word Pain","Prismatic Spray","Project Image","Regenerate",
  "Resurrection","Symbol","Teleport","Whirlwind"
];
DND_DATA.spells.bard.level8 = [
  "Antipathy/Sympathy","Befuddlement","Dominate Monster","Feeblemind","Glibness",
  "Mind Blank","Power Word Stun","True Polymorph"
];
DND_DATA.spells.bard.level9 = [
  "Foresight","Mass Polymorph","Power Word Heal","Power Word Kill",
  "Prismatic Wall","Psychic Scream","True Polymorph","Weird"
];

// ── CLERIC ──────────────────────────────────────────────────
DND_DATA.spells.cleric.level2 = [
  "Aid","Augury","Blindness/Deafness","Calm Emotions","Continual Flame",
  "Enhance Ability","Find Traps","Gentle Repose","Hold Person","Lesser Restoration",
  "Locate Object","Prayer of Healing","Protection from Poison",
  "Silence","Spiritual Weapon","Warding Bond","Zone of Truth"
];
DND_DATA.spells.cleric.level3 = [
  "Animate Dead","Beacon of Hope","Bestow Curse","Clairvoyance",
  "Create Food and Water","Daylight","Dispel Magic","Feign Death",
  "Glyph of Warding","Magic Circle","Mass Healing Word",
  "Meld into Stone","Protection from Energy","Remove Curse","Revivify",
  "Sending","Speak with Dead","Spirit Guardians","Spirit Shroud","Tongues",
  "Water Walk","Wind Wall"
];
DND_DATA.spells.cleric.level4 = [
  "Aura of Life","Aura of Purity","Banishment","Control Water","Death Ward",
  "Divination","Freedom of Movement","Guardian of Faith","Locate Creature",
  "Stone Shape"
];
DND_DATA.spells.cleric.level5 = [
  "Commune","Contagion","Dawn","Dispel Evil and Good","Flame Strike",
  "Geas","Greater Restoration","Hallow","Holy Weapon","Hold Monster",
  "Insect Plague","Legend Lore","Mass Cure Wounds","Planar Binding",
  "Raise Dead","Scrying","Summon Celestial"
];
DND_DATA.spells.cleric.level6 = [
  "Blade Barrier","Create Undead","Find the Path","Forbiddance","Harm",
  "Heal","Heroes' Feast","Planar Ally","Sunbeam","True Seeing","Word of Recall"
];
DND_DATA.spells.cleric.level7 = [
  "Conjure Celestial","Divine Word","Etherealness","Fire Storm","Plane Shift",
  "Regenerate","Resurrection","Symbol","Temple of the Gods"
];
DND_DATA.spells.cleric.level8 = [
  "Antimagic Field","Control Weather","Earthquake","Holy Aura","Sunburst"
];
DND_DATA.spells.cleric.level9 = [
  "Astral Projection","Gate","Mass Heal","Power Word Heal","True Resurrection"
];

// ── DRUID ───────────────────────────────────────────────────
DND_DATA.spells.druid.level2 = [
  "Animal Messenger","Barkskin","Beast Sense","Continual Flame","Darkvision",
  "Dust Devil","Earthbind","Enhance Ability","Find Traps","Flame Blade",
  "Flaming Sphere","Gust of Wind","Heat Metal","Lesser Restoration",
  "Locate Animals or Plants","Locate Object","Moonbeam","Pass Without Trace","Protection from Poison","Skywrite","Spike Growth",
  "Summon Beast"
];
DND_DATA.spells.druid.level3 = [
  "Aura of Vitality","Call Lightning","Conjure Animals","Daylight",
  "Dispel Magic","Feign Death","Flame Arrows",
  "Meld into Stone","Plant Growth","Protection from Energy","Revivify",
  "Sleet Storm","Speak with Plants","Summon Fey","Water Breathing","Water Walk","Wind Wall"
];
DND_DATA.spells.druid.level4 = [
  "Blight","Conjure Minor Elementals","Conjure Woodland Beings","Control Water",
  "Dominate Beast","Freedom of Movement","Giant Insect","Grasping Vine",
  "Guardian of Nature","Hallucinatory Terrain","Ice Storm","Locate Creature",
  "Polymorph","Stone Shape","Stoneskin","Summon Construct","Summon Elemental",
  "Wall of Fire","Watery Sphere"
];
DND_DATA.spells.druid.level5 = [
  "Antilife Shell","Awaken","Commune with Nature","Conjure Elemental","Contagion",
  "Control Winds","Geas","Greater Restoration","Hold Monster","Insect Plague",
  "Maelstrom","Mass Cure Wounds","Planar Binding","Reincarnate","Scrying",
  "Steel Wind Strike","Summon Draconic Spirit","Tree Stride","Wall of Stone",
  "Wrath of Nature"
];
DND_DATA.spells.druid.level6 = [
  "Conjure Fey","Find the Path","Heal","Heroes' Feast","Investiture of Flame",
  "Investiture of Ice","Investiture of Stone","Investiture of Wind","Move Earth",
  "Primordial Ward","Sunbeam","Transport via Plants","True Seeing",
  "Wall of Thorns","Wind Walk"
];
DND_DATA.spells.druid.level7 = [
  "Fire Storm","Mirage Arcane","Plane Shift","Regenerate","Reverse Gravity",
  "Symbol","Whirlwind"
];
DND_DATA.spells.druid.level8 = [
  "Animal Shapes","Antipathy/Sympathy","Control Weather","Earthquake",
  "Feeblemind","Incendiary Cloud","Sunburst","Tsunami"
];
DND_DATA.spells.druid.level9 = [
  "Foresight","Mass Polymorph","Shapechange","Storm of Vengeance","True Resurrection"
];

// ── PALADIN (max 5th level slots) ───────────────────────────
DND_DATA.spells.paladin.level1 = [
  "Bless","Command","Compelled Duel","Cure Wounds","Detect Evil and Good","Detect Magic",
  "Detect Poison and Disease","Divine Favor","Heroism","Protection from Evil and Good",
  "Purify Food and Drink","Searing Smite","Shield of Faith","Thunderous Smite","Wrathful Smite"
];
DND_DATA.spells.paladin.level2 = [
  "Aid","Branding Smite","Find Steed","Gentle Repose","Lesser Restoration",
  "Locate Object","Magic Weapon","Prayer of Healing","Protection from Poison",
  "Warding Bond","Zone of Truth"
];
DND_DATA.spells.paladin.level3 = [
  "Aura of Vitality","Blinding Smite","Create Food and Water","Crusader's Mantle",
  "Daylight","Dispel Magic","Elemental Weapon","Magic Circle","Remove Curse","Revivify"
];
DND_DATA.spells.paladin.level4 = [
  "Aura of Life","Aura of Purity","Banishment","Death Ward",
  "Find Greater Steed","Locate Creature","Staggering Smite"
];
DND_DATA.spells.paladin.level5 = [
  "Banishing Smite","Circle of Power","Destructive Wave","Dispel Evil and Good",
  "Geas","Holy Weapon","Raise Dead","Summon Celestial"
];

// ── RANGER (max 5th level slots, first slot at level 2) ─────
DND_DATA.spells.ranger.level1 = [
  "Alarm","Animal Friendship","Cure Wounds","Detect Magic","Detect Poison and Disease",
  "Ensnaring Strike","Fog Cloud","Goodberry","Hail of Thorns","Hunter's Mark",
  "Jump","Longstrider","Speak with Animals"
];
DND_DATA.spells.ranger.level2 = [
  "Animal Messenger","Beast Sense","Cordon of Arrows","Darkvision",
  "Find Traps","Gust of Wind","Lesser Restoration","Locate Animals or Plants",
  "Locate Object","Pass Without Trace","Protection from Poison","Silence",
  "Spike Growth","Summon Beast"
];
DND_DATA.spells.ranger.level3 = [
  "Conjure Animals","Conjure Barrage","Daylight","Dispel Magic",
  "Flame Arrows","Lightning Arrow","Nondetection","Plant Growth",
  "Protection from Energy","Speak with Plants","Summon Fey","Water Breathing","Water Walk","Wind Wall"
];
DND_DATA.spells.ranger.level4 = [
  "Conjure Woodland Beings","Freedom of Movement","Grasping Vine",
  "Guardian of Nature","Locate Creature","Stoneskin","Summon Elemental"
];
DND_DATA.spells.ranger.level5 = [
  "Commune with Nature","Conjure Volley","Greater Restoration","Hold Monster",
  "Steel Wind Strike","Swift Quiver","Tree Stride","Wrath of Nature"
];

// ── WARLOCK ─────────────────────────────────────────────────
DND_DATA.spells.warlock.level1 = [
  "Armor of Agathys","Arms of Hadar","Charm Person","Comprehend Languages","Expeditious Retreat",
  "Hellish Rebuke","Hex","Illusory Script","Protection from Evil and Good","Unseen Servant","Witch Bolt"
];
DND_DATA.spells.warlock.level2 = [
  "Cloud of Daggers","Crown of Madness","Darkness","Enthrall","Hold Person",
  "Invisibility","Mirror Image","Misty Step","Ray of Enfeeblement",
  "Shatter","Spider Climb","Suggestion"
];
DND_DATA.spells.warlock.level3 = [
  "Counterspell","Dispel Magic","Fear","Fly","Gaseous Form",
  "Hunger of Hadar","Hypnotic Pattern","Magic Circle","Major Image",
  "Remove Curse","Spirit Shroud","Summon Fey","Summon Lesser Demons",
  "Tongues","Vampiric Touch"
];
DND_DATA.spells.warlock.level4 = [
  "Banishment","Blight","Charm Monster","Dimension Door","Elemental Bane",
  "Hallucinatory Terrain","Shadow of Moil",
  "Sickening Radiance","Summon Aberration","Summon Greater Demon","Wall of Fire"
];
DND_DATA.spells.warlock.level5 = [
  "Contact Other Plane","Danse Macabre","Dream","Far Step","Hold Monster",
  "Infernal Calling","Jallarzi's Storm of Radiance","Mislead","Modify Memory",
  "Negative Energy Flood","Planar Binding","Scrying","Synaptic Static","Teleportation Circle"
];

// ══════════════════════════════════════════════════════════════
// SPELLCASTER PROGRESSION TABLES
// ══════════════════════════════════════════════════════════════

// What type of spellcaster is each class?
// 'known'    = bard, sorcerer, warlock, ranger — pick spells, know them permanently
// 'book'     = wizard — adds spells to spellbook, prepares from it
// 'prepared' = cleric, druid, paladin — no fixed known list, prepare daily from full list
DND_DATA.spellcasterType = {
  bard:'known', sorcerer:'known', warlock:'known', ranger:'known',
  wizard:'book', cleric:'prepared', druid:'prepared', paladin:'prepared'
};

// Highest spell level accessible at each class level (index = classLevel - 1)
DND_DATA.maxSpellLevel = {
  fullcaster: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9],
  halfcaster: [0,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5],
  warlock:    [1,1,2,2,3,3,4,4,5,5,5,5,5,5,5,5,5,5,5,5]
};

// Which max-spell-level table does each caster use?
DND_DATA.spellLevelTableType = {
  bard:'fullcaster', cleric:'fullcaster', druid:'fullcaster',
  sorcerer:'fullcaster', wizard:'fullcaster',
  paladin:'halfcaster', ranger:'halfcaster',
  warlock:'warlock'
};

// Total spells known at each level for 'known' casters (index = classLevel - 1)
// Cantrips are tracked separately below.
DND_DATA.spellsKnownTable = {
  bard:    [4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22],
  sorcerer:[2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15,15],
  warlock: [2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15],
  ranger:  [0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11],
  // Eldritch Knight / Arcane Trickster: 1/3-caster progression (active only when subclass chosen)
  fighter: [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13],
  rogue:   [0,0,3,4,4,4,5,6,6,7,8,8,9,10,10,11,11,11,12,13]
};

// Total cantrips known at each level (index = classLevel - 1)
DND_DATA.cantripsKnownTable = {
  bard:    [2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
  cleric:  [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
  druid:   [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
  sorcerer:[4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6],
  warlock: [2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
  wizard:  [3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
  // EK/AT cantrip progression (active only when subclass chosen)
  fighter: [0,0,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3],
  rogue:   [0,0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
};

// Expertise unlocks: when each class grants Expertise and how many skills to pick
DND_DATA.expertiseLevels = {
  rogue: [{level:1, count:2}, {level:6, count:2}],
  bard:  [{level:3, count:2}, {level:10, count:2}]
};

// School restrictions for 1/3-caster subclasses (EK uses wizard spell list, restricted schools)
// freePickLevels: class levels where one spell of ANY school may be chosen instead
DND_DATA.thirdCasterRestrictions = {
  'eldritch-knight':  { schools:['Abjuration','Evocation'],  freePickLevels:[8,14,20] },
  'arcane-trickster': { schools:['Enchantment','Illusion'],   freePickLevels:[8,14,20] }
};

// ══════════════════════════════════════════════════════════════
// SPELL LEVEL LOOKUP — maps every spell name to its level
// 0 = cantrip, 1-9 = spell level
// ══════════════════════════════════════════════════════════════
(function(){
  var data = DND_DATA;
  var levelMap = {};

  // Cantrips = level 0
  ['wizard','sorcerer','bard','cleric','druid','warlock'].forEach(function(cls){
    var list = data.spells[cls];
    if(list && list.cantrips) list.cantrips.forEach(function(s){ levelMap[s] = 0; });
  });

  // Levels 1-9
  var levelKeys = ['level1','level2','level3','level4','level5','level6','level7','level8','level9'];
  Object.keys(data.spells).forEach(function(cls){
    var list = data.spells[cls];
    levelKeys.forEach(function(lk, i){
      if(list[lk]) list[lk].forEach(function(s){ if(levelMap[s] === undefined) levelMap[s] = i+1; });
    });
  });

  data.spellLevel = levelMap;
})();

// ══════════════════════════════════════════════════════════════
// FEATS — D&D 5e PHB + Common Sourcebooks
// Each feat: name, prereq (null or string), desc, asi (optional partial ASI)
// ══════════════════════════════════════════════════════════════
DND_DATA.feats = [

  // ── General Feats ───────────────────────────────
  {
    name: "Alert",
    prereq: null,
    desc: "You gain +5 to initiative. You cannot be surprised while you are conscious. Other creatures do not gain advantage on attack rolls against you as a result of being hidden from you before initiative is rolled.",
    benefits: ["+5 to initiative", "Cannot be surprised while conscious", "No advantage against you from hidden attackers before initiative"]
  },
  {
    name: "Athlete",
    prereq: null,
    desc: "Increase your Strength or Dexterity by 1. When you are prone, standing up uses only 5 feet of movement. Climbing does not cost extra movement. Running long and high jumps only require 5 feet of running start.",
    asi: {choice: ["str","dex"], amount: 1},
    benefits: ["+1 STR or DEX", "Standing from prone costs only 5 ft of movement", "Climbing costs no extra movement", "Running jumps need only 5 ft of running start"]
  },
  {
    name: "Actor",
    prereq: null,
    desc: "Increase your Charisma by 1. You have advantage on Deception and Performance checks when trying to pass yourself off as a different person. You can mimic the speech of another person or the sounds made by other creatures after hearing them for at least 1 minute.",
    asi: {choice: ["cha"], amount: 1},
    benefits: ["+1 CHA", "Advantage on Deception and Performance when disguising as someone else", "Can mimic voices after 1 minute of listening"]
  },
  {
    name: "Charger",
    prereq: null,
    desc: "When you use your action to Dash, you can use a bonus action to make one melee weapon attack or to shove a creature. If you move at least 10 feet in a straight line before using this bonus action, you either gain a +5 bonus to the attack's damage roll (if you chose the melee attack) or push the target up to 10 feet away from you (if you chose the shove).",
    benefits: ["Dash then bonus action melee attack or shove", "+5 damage or 10 ft push if you moved 10 ft straight before the attack"]
  },
  {
    name: "Crossbow Expert",
    prereq: null,
    desc: "You ignore the loading quality of crossbows you are proficient with. Being within 5 feet of a hostile creature does not impose disadvantage on your ranged attack rolls. When you use the Attack action and attack with a one-handed weapon, you can use a bonus action to attack with a hand crossbow you are holding.",
    benefits: ["Ignore loading on crossbows", "No disadvantage on ranged attacks in melee", "Bonus action hand crossbow attack after one-handed weapon attack"]
  },
  {
    name: "Defensive Duelist",
    prereq: "Dexterity 13 or higher",
    desc: "When you are wielding a finesse weapon you are proficient with and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss.",
    benefits: ["Reaction: add proficiency bonus to AC against one melee attack", "Requires finesse weapon you are proficient with"]
  },
  {
    name: "Dual Wielder",
    prereq: null,
    desc: "You gain +1 to AC while wielding a separate melee weapon in each hand. You can use two-weapon fighting even when the weapons you wield are not light. You can draw or stow two one-handed weapons when you would normally only draw or stow one.",
    benefits: ["+1 AC while dual wielding", "Can two-weapon fight with non-light melee weapons", "Draw or stow two weapons at once"]
  },
  {
    name: "Dungeon Delver",
    prereq: null,
    desc: "Advantage on Perception and Investigation checks made to detect secret doors. Advantage on saving throws made to avoid or resist traps. Resistance to the damage dealt by traps. You can search for traps while traveling at a normal pace instead of slow pace.",
    benefits: ["Advantage on checks to detect secret doors", "Advantage on saves vs traps", "Resistance to trap damage", "Search for traps at normal travel pace"]
  },
  {
    name: "Durable",
    prereq: null,
    desc: "Increase your Constitution by 1. When you roll a Hit Die to recover hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier (minimum of 2).",
    asi: {choice: ["con"], amount: 1},
    benefits: ["+1 CON", "Minimum HP regained from Hit Dice equals 2x CON modifier"]
  },
  {
    name: "Elemental Adept",
    prereq: "Ability to cast at least one spell",
    desc: "Choose one of the following damage types: acid, cold, fire, lightning, or thunder. Spells you cast ignore resistance to damage of the chosen type. In addition, when you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2. You can select this feat multiple times, choosing a different damage type each time.",
    benefits: ["Spells ignore resistance to chosen damage type (acid/cold/fire/lightning/thunder)", "Treat 1s on damage dice as 2s for that damage type", "Can take multiple times for different types"]
  },
  {
    name: "Grappler",
    prereq: "Strength 13 or higher",
    desc: "You have advantage on attack rolls against a creature you are grappling. You can use your action to try to pin a creature grappled by you. To do so, make another grapple check. If you succeed, you and the creature are both restrained until the grapple ends.",
    benefits: ["Advantage on attacks vs grappled creatures", "Action: pin a grappled creature, restraining both of you"]
  },
  {
    name: "Great Weapon Master",
    prereq: null,
    desc: "On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 HP with one, you can make one melee weapon attack as a bonus action. Before you make a melee attack with a heavy weapon you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
    benefits: ["Bonus action melee attack on crit or kill", "-5 to hit / +10 damage option with heavy weapons"]
  },
  {
    name: "Healer",
    prereq: null,
    desc: "When you use a healer's kit to stabilize a dying creature, that creature also regains 1 HP. As an action, you can spend one use of a healer's kit to tend to a creature and restore 1d6+4 HP, plus additional HP equal to the creature's maximum number of Hit Dice. A creature can only benefit from this feat's healing once per short rest.",
    benefits: ["Stabilizing also restores 1 HP", "Action + healer's kit: restore 1d6+4 + max Hit Dice HP (once per short rest per creature)"]
  },
  {
    name: "Heavily Armored",
    prereq: "Proficiency with medium armor",
    desc: "Increase your Strength by 1. You gain proficiency with heavy armor.",
    asi: {choice: ["str"], amount: 1},
    benefits: ["+1 STR", "Gain heavy armor proficiency"]
  },
  {
    name: "Heavy Armor Master",
    prereq: "Proficiency with heavy armor",
    desc: "Increase your Strength by 1. While you are wearing heavy armor, bludgeoning, piercing, and slashing damage that you take from non-magical weapons is reduced by 3.",
    asi: {choice: ["str"], amount: 1},
    benefits: ["+1 STR", "Reduce non-magical bludgeoning, piercing, and slashing damage by 3 while in heavy armor"]
  },
  {
    name: "Inspiring Leader",
    prereq: "Charisma 13 or higher",
    desc: "You can spend 10 minutes inspiring your companions. When you do, up to six friendly creatures (including yourself) within 30 feet of you gain temporary HP equal to your level + your Charisma modifier. A creature cannot benefit from this feat again until it finishes a short or long rest.",
    benefits: ["10 min: up to 6 allies gain temp HP = your level + CHA mod", "Once per short or long rest per creature"]
  },
  {
    name: "Keen Mind",
    prereq: null,
    desc: "Increase your Intelligence by 1. You always know which way is north. You always know the number of hours left before the next sunrise or sunset. You can accurately recall anything you have seen or heard within the past month.",
    asi: {choice: ["int"], amount: 1},
    benefits: ["+1 INT", "Always know which direction is north", "Always know hours until next sunrise/sunset", "Recall anything seen or heard in the past month"]
  },
  {
    name: "Lightly Armored",
    prereq: null,
    desc: "Increase your Strength or Dexterity by 1. You gain proficiency with light armor.",
    asi: {choice: ["str","dex"], amount: 1},
    benefits: ["+1 STR or DEX", "Gain light armor proficiency"]
  },
  {
    name: "Linguist",
    prereq: null,
    desc: "Increase your Intelligence by 1. You learn three languages of your choice. You can ably create written ciphers. Others cannot decipher a code you create unless you teach them, they succeed on an Intelligence check (DC = your INT score + your proficiency bonus), or they use magic to decipher it.",
    asi: {choice: ["int"], amount: 1},
    benefits: ["+1 INT", "Learn 3 languages of your choice", "Create written ciphers others can't read without your help"]
  },
  {
    name: "Lucky",
    prereq: null,
    desc: "You have 3 luck points. Whenever you make an attack roll, ability check, or saving throw, you can spend one luck point to roll an additional d20. You can choose to spend one of your luck points after you roll but before the outcome is determined. You choose which of the d20s is used. You can also spend one luck point when an attack roll is made against you, forcing the attacker to reroll. Luck points are regained when you finish a long rest.",
    benefits: ["3 luck points per long rest", "Spend a point to roll an extra d20 on any attack, check, or save (choose which result)", "Spend a point to force an enemy to reroll an attack against you"]
  },
  {
    name: "Mage Slayer",
    prereq: null,
    desc: "When a creature within 5 feet of you casts a spell, you can use your reaction to make a melee weapon attack against that creature. When you damage a creature that is concentrating on a spell, that creature has disadvantage on the saving throw to maintain its concentration. You have advantage on saving throws against spells cast by creatures within 5 feet of you.",
    benefits: ["Reaction: melee attack when adjacent creature casts a spell", "Concentration saves have disadvantage when you damage the caster", "Advantage on saves vs spells from adjacent casters"]
  },
  {
    name: "Magic Initiate",
    prereq: null,
    desc: "Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two cantrips of your choice from that class's spell list. You also learn one 1st-level spell from that class. You can cast the 1st-level spell once per long rest at its lowest level without a spell slot. Your spellcasting ability is the same as the chosen class (CHA for bard/sorcerer/warlock, WIS for cleric/druid, INT for wizard).",
    benefits: ["Learn 2 cantrips from chosen class list", "Learn 1 first-level spell from chosen class list", "Cast that spell once per long rest without a slot"]
  },
  {
    name: "Martial Adept",
    prereq: null,
    desc: "You have martial training that allows you to perform special combat maneuvers. You learn two maneuvers of your choice from among those available to the Battle Master archetype. You gain one superiority die, a d6 (this die is added to any superiority dice you have from another source). The die is expended when you use it, and is regained when you finish a short or long rest.",
    benefits: ["Learn 2 Battle Master maneuvers", "Gain 1 superiority die (d6), regained on short rest"]
  },
  {
    name: "Medium Armor Master",
    prereq: "Proficiency with medium armor",
    desc: "Wearing medium armor does not impose disadvantage on your Dexterity (Stealth) checks. The maximum Dexterity bonus to AC you can apply from medium armor increases to 3 instead of 2.",
    benefits: ["No Stealth disadvantage from medium armor", "Max DEX bonus to AC from medium armor increases to +3"]
  },
  {
    name: "Mobile",
    prereq: null,
    desc: "Your speed increases by 10 feet. When you use the Dash action, difficult terrain does not cost extra movement for the rest of that turn. When you make a melee attack against a creature, you do not provoke opportunity attacks from that creature for the rest of the turn, whether or not the attack hits.",
    benefits: ["+10 ft speed", "Dash: ignore difficult terrain that turn", "No opportunity attacks from creatures you attack in melee (that turn)"]
  },
  {
    name: "Moderately Armored",
    prereq: "Proficiency with light armor",
    desc: "Increase your Strength or Dexterity by 1. You gain proficiency with medium armor and shields.",
    asi: {choice: ["str","dex"], amount: 1},
    benefits: ["+1 STR or DEX", "Gain medium armor and shield proficiency"]
  },
  {
    name: "Mounted Combatant",
    prereq: null,
    desc: "You have advantage on melee attack rolls against unmounted creatures that are smaller than your mount. You can force an attack targeted at your mount to target you instead. If your mount is subjected to an effect that allows a DEX save for half damage, it takes no damage on a success and half on a failure (if it lacks the Evasion feature).",
    benefits: ["Advantage on melee attacks vs unmounted smaller creatures", "Redirect attacks targeting your mount to yourself", "Mount takes no damage on DEX saves it succeeds on"]
  },
  {
    name: "Observant",
    prereq: null,
    desc: "Increase your Intelligence or Wisdom by 1. If you can see a creature's mouth while it is speaking a language you understand, you can interpret what it's saying by reading its lips. You have a +5 bonus to your passive Perception and passive Investigation scores.",
    asi: {choice: ["int","wis"], amount: 1},
    benefits: ["+1 INT or WIS", "Lip-read creatures speaking a known language", "+5 to passive Perception and passive Investigation"]
  },
  {
    name: "Polearm Master",
    prereq: null,
    desc: "When you take the Attack action and attack with only a glaive, halberd, quarterstaff, or spear, you can use a bonus action to make a melee attack with the opposite end of the weapon. This attack uses the same ability modifier as the primary attack and deals 1d4 bludgeoning damage. While wielding a glaive, halberd, pike, or quarterstaff, other creatures provoke an opportunity attack from you when they enter your reach.",
    benefits: ["Bonus action butt-end attack (1d4 bludgeoning) with polearms/quarterstaff/spear", "Creatures entering your reach provoke opportunity attacks"]
  },
  {
    name: "Resilient",
    prereq: null,
    desc: "Choose one ability score. Increase the chosen ability score by 1. You gain proficiency in saving throws using the chosen ability.",
    asi: {choice: ["str","dex","con","int","wis","cha"], amount: 1},
    benefits: ["+1 to chosen ability score", "Gain proficiency in saving throws for that ability"]
  },
  {
    name: "Ritual Caster",
    prereq: "Intelligence or Wisdom 13 or higher",
    desc: "You have learned a number of spells that you can cast as rituals. These spells are written in a ritual book. Choose one class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn two 1st-level spells with the ritual tag from that class's spell list. You can cast them as rituals but not as regular spells unless you have spell slots. You can add ritual spells found on adventures to your book.",
    benefits: ["Learn 2 first-level ritual spells from chosen class", "Cast them as rituals only (10 extra minutes)", "Can copy ritual spells found on adventures into your book"]
  },
  {
    name: "Savage Attacker",
    prereq: null,
    desc: "Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
    benefits: ["Once per turn: reroll melee weapon damage dice and use either result"]
  },
  {
    name: "Sentinel",
    prereq: null,
    desc: "When you hit a creature with an opportunity attack, the creature's speed becomes 0 for the rest of the turn. Creatures within 5 feet of you provoke opportunity attacks even if they took the Disengage action. When a creature within 5 feet of you makes an attack against a target other than you, you can use your reaction to make a melee weapon attack against the attacking creature.",
    benefits: ["Opportunity attacks reduce creature speed to 0", "Disengage does not prevent opportunity attacks from you", "Reaction: attack creatures within 5 ft that attack others"]
  },
  {
    name: "Sharpshooter",
    prereq: null,
    desc: "Attacking at long range does not impose disadvantage on your ranged weapon attack rolls. Your ranged weapon attacks ignore half cover and three-quarters cover. Before you make an attack with a ranged weapon that you are proficient with, you can choose to take a -5 penalty to the attack roll. If the attack hits, you add +10 to the attack's damage.",
    benefits: ["Ignore long range disadvantage", "Ignore half and three-quarters cover", "-5 to hit / +10 damage option on ranged weapon attacks"]
  },
  {
    name: "Tough",
    prereq: null,
    desc: "Your hit point maximum increases by an amount equal to twice your level when you gain this feat. Whenever you gain a level thereafter, your hit point maximum increases by an additional 2 hit points.",
    benefits: ["+2 HP per character level (retroactive at the moment you take it)"]
  },
  {
    name: "War Caster",
    prereq: "The ability to cast at least one spell",
    desc: "You have advantage on Constitution saving throws that you make to maintain your concentration on a spell when you take damage. You can perform the somatic components of spells even when you have weapons or a shield in one or both hands. When a hostile creature's movement provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
    benefits: ["Advantage on CON saves to maintain concentration", "Cast somatic spells while holding weapons/shields", "Reaction: cast a 1-action spell instead of an opportunity attack"]
  },
  {
    name: "Skilled",
    prereq: null,
    desc: "You gain proficiency in any combination of three skills or tools of your choice.",
    benefits: ["Gain proficiency in 3 skills or tools of your choice"]
  },
  {
    name: "Skulker",
    prereq: "Dexterity 13 or higher",
    desc: "You can try to hide when you are lightly obscured from the creature from which you are hiding. When you are hidden from a creature and miss it with a ranged weapon attack, making the attack doesn't reveal your position. Dim light doesn't impose disadvantage on your Wisdom (Perception) checks relying on sight.",
    benefits: ["Hide while lightly obscured", "Missing a ranged attack while hidden doesn't reveal your position", "No disadvantage on Perception checks in dim light"]
  },
  {
    name: "Spell Sniper",
    prereq: "The ability to cast at least one spell",
    desc: "You have learned techniques to enhance your attacks with certain kinds of spells, gaining the following benefits: When you cast a spell that requires you to make an attack roll, the spell's range is doubled. Your ranged spell attacks ignore half cover and three-quarters cover. You learn one cantrip that requires an attack roll. Choose the cantrip from the bard, cleric, druid, sorcerer, warlock, or wizard spell list. Your spellcasting ability for this cantrip depends on the spell list you chose from.",
    benefits: ["Double range on attack roll spells", "Ranged spell attacks ignore half and three-quarters cover", "Learn one attack cantrip from any class list"]
  },
  {
    name: "Tavern Brawler",
    prereq: null,
    desc: "Increase your Strength or Constitution by 1. You are proficient with improvised weapons. Your unarmed strike uses a d4 for damage. When you hit a creature with an unarmed strike or an improvised weapon on your turn, you can use a bonus action to attempt to grapple the target.",
    asi: {choice: ["str","con"], amount: 1},
    benefits: ["+1 STR or CON", "Proficiency with improvised weapons", "Unarmed strikes deal 1d4", "Bonus action grapple after unarmed strike or improvised weapon hit"]
  },
  {
    name: "Weapon Master",
    prereq: null,
    desc: "Increase your Strength or Dexterity by 1. You gain proficiency with four weapons of your choice. Each one must be a simple or a martial weapon.",
    asi: {choice: ["str","dex"], amount: 1},
    benefits: ["+1 STR or DEX", "Gain proficiency with 4 weapons of your choice (simple or martial)"]
  }
];

// ── MULTICLASS PREREQUISITES (XGtE) ──
// minimum scores required to multiclass into a class.
DND_DATA.multiclassPrereqs = {
  barbarian: {str:13},
  bard:      {cha:13},
  cleric:    {wis:13},
  druid:     {wis:13},
  fighter:   {strOr:{str:13, dex:13}},
  monk:      {dex:13, wis:13},
  paladin:   {str:13, cha:13},
  ranger:    {dex:13, wis:13},
  rogue:     {dex:13},
  sorcerer:  {cha:13},
  warlock:   {cha:13},
  wizard:    {int:13},
  // Soup Savant: Charisma is the soupcooking ability
  soupsavant:{cha:13}
};

// Spellcasting weight for multiclass spell-slot calculations
// Full caster = 1, half caster = 0.5, third caster = 0.33, others = 0
DND_DATA.spellcastingWeight = {
  bard:1, cleric:1, druid:1, sorcerer:1, wizard:1,
  paladin:0.5, ranger:0.5,
  // Soup Savant follows the full-caster cadence (5th-level slots at L9, etc.)
  soupsavant:1,
  // Warlock uses Pact Magic — tracked separately from the shared slot pool
  // (PHB multiclass rules: pact slots stack alongside, not into, the table).
  warlock:'pact',
  // Non-casters: explicit 0 so third-caster subclasses (Eldritch Knight,
  // Arcane Trickster) can upgrade the weight to 1/3 when chosen.
  barbarian:0, fighter:0, monk:0, rogue:0
};

// Multiclass slot table: index = total caster level, value = slots[]
DND_DATA.multiclassSlotTable = [
  null,
  [2],[3],[4,2],[4,3],[4,3,2],[4,3,3],[4,3,3,1],[4,3,3,2],[4,3,3,3,1],[4,3,3,3,2],
  [4,3,3,3,2,1],[4,3,3,3,2,1],[4,3,3,3,2,1,1],[4,3,3,3,2,1,1],
  [4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1],[4,3,3,3,2,1,1,1,1],
  [4,3,3,3,3,1,1,1,1],[4,3,3,3,3,2,1,1,1],[4,3,3,3,3,2,2,1,1]
];

// Multiclass proficiency gains (XGtE)
DND_DATA.multiclassProfGains = {
  barbarian: {armor:["Shields"], weapons:["Simple weapons","Martial weapons"]},
  bard:      {armor:["Light armor"], skills:1},
  cleric:    {armor:["Light armor","Medium armor","Shields"]},
  druid:     {armor:["Light armor","Medium armor","Shields (nonmetal)"]},
  fighter:   {armor:["Light armor","Medium armor","Shields"], weapons:["Simple weapons","Martial weapons"]},
  monk:      {weapons:["Simple weapons","Shortswords"]},
  paladin:   {armor:["Light armor","Medium armor","Shields"], weapons:["Simple weapons","Martial weapons"]},
  ranger:    {armor:["Light armor","Medium armor","Shields"], weapons:["Simple weapons","Martial weapons"], skills:1},
  rogue:     {armor:["Light armor"], skills:1, tools:["Thieves' tools"]},
  sorcerer:  {},
  warlock:   {armor:["Light armor"], weapons:["Simple weapons"]},
  wizard:    {},
  soupsavant:{armor:["Light armor"], weapons:["Simple weapons","Nets"], tools:["Cook's utensils","Alchemist's supplies"]}
};

DND_DATA.featLanguages = ["Abyssal","Celestial","Common","Deep Speech","Draconic","Dwarvish","Elvish","Giant","Gnomish","Goblin","Halfling","Infernal","Orc","Primordial","Sylvan","Undercommon"];

DND_DATA.abilityDescriptions = {
  str: "Physical power, athletic training, and the extent to which you can exert raw physical force.",
  dex: "Agility, reflexes, balance, and poise.",
  con: "Health, stamina, and vital force.",
  int: "Mental acuity, memory recall, and analytical reasoning.",
  wis: "Awareness, intuition, insight, and perceptiveness about the world.",
  cha: "Force of personality, persuasiveness, leadership, and confidence."
};

DND_DATA.skillDescriptions = {
  "Acrobatics":      "Stay on your feet in tricky situations, perform stunts, and maintain balance.",
  "Animal Handling": "Calm, control, or read the intent of an animal.",
  "Arcana":          "Recall lore about spells, magical items, planes of existence, and arcane symbols.",
  "Athletics":       "Climb, jump, swim, and other physical exertion.",
  "Deception":       "Convincingly hide the truth, verbally or through actions.",
  "History":         "Recall lore about past events, legendary people, ancient kingdoms, and wars.",
  "Insight":         "Determine the true intentions of a creature.",
  "Intimidation":    "Influence someone through threats or hostile actions.",
  "Investigation":   "Look for clues and make deductions based on them.",
  "Medicine":        "Stabilize a dying companion or diagnose an illness.",
  "Nature":          "Recall lore about terrain, plants, animals, weather, and natural cycles.",
  "Perception":      "Spot, hear, or otherwise detect the presence of something.",
  "Performance":     "Delight an audience with music, dance, acting, or other entertainment.",
  "Persuasion":      "Influence someone with tact, social grace, or good nature.",
  "Religion":        "Recall lore about deities, rites, prayers, and religious hierarchies.",
  "Sleight of Hand": "Pick a lock, plant something, or pickpocket someone.",
  "Stealth":         "Move silently, hide from a creature, or pass unnoticed.",
  "Survival":        "Track, forage, navigate the wilderness, and predict the weather."
};

DND_DATA.featTools = ["Alchemist's supplies","Brewer's supplies","Calligrapher's supplies","Carpenter's tools","Cartographer's tools","Cobbler's tools","Cook's utensils","Glassblower's tools","Jeweler's tools","Leatherworker's tools","Mason's tools","Painter's supplies","Potter's tools","Smith's tools","Tinker's tools","Weaver's tools","Woodcarver's tools"];

// Subclass selection level by class
DND_DATA.subclassLevel = {
  barbarian:3, bard:3, cleric:1, druid:2, fighter:3, monk:3,
  paladin:3, ranger:3, rogue:3, sorcerer:1, warlock:1, wizard:2,
  soupsavant:99 // no subclass selection
};

// Per-class subclass features.
// Format: { id, name, flavorText, choiceLevel, features:{classLevel:[{name,desc,uses?,usesByLevel?,recharge?,isPool?}]},
//           bonusSpells?:{classLevel:[spellNames]} (always prepared, don't count against prepared limit),
//           expandedSpells?:{classLevel:[spellNames]} (added to the class spell list as options) }
DND_DATA.subclasses = {

  // ── BARBARIAN — PRIMAL PATHS ──────────────────────────────
  barbarian: [
    { id:'berserker', name:'Path of the Berserker', choiceLevel:3,
      flavorText:'For some barbarians, rage is a means to an end — that end being violence. Walk a path of untrammeled fury, slick with blood.',
      features:{
        3:[{name:'Frenzy', desc:'When you rage, you can go into a frenzy: make a single melee weapon attack as a bonus action on each of your turns. When the rage ends, you suffer one level of exhaustion.'}],
        6:[{name:'Mindless Rage', desc:'You can\'t be charmed or frightened while raging. If you were charmed or frightened when you enter your rage, the effect is suspended for its duration.'}],
        10:[{name:'Intimidating Presence', desc:'Action: one creature within 30 ft must succeed on a WIS save (DC 8 + your proficiency bonus + your CHA modifier) or be frightened of you until the end of your next turn. You can extend it each turn with your action.'}],
        14:[{name:'Retaliation', desc:'When you take damage from a creature within 5 ft of you, you can use your reaction to make a melee weapon attack against it.'}]
      } },
    { id:'totem-warrior', name:'Path of the Totem Warrior', choiceLevel:3,
      flavorText:'A spiritual journey: accept a totem animal as your spirit guide and draw on its primal power as you rage.',
      features:{
        3:[{name:'Spirit Seeker', desc:'You gain the ability to cast Beast Sense and Speak with Animals as rituals.'},
           {name:'Totem Spirit', desc:'Choose a totem animal. Bear: while raging you have resistance to all damage except psychic. Eagle: while raging (no heavy armor), others have disadvantage on opportunity attacks against you, and you can Dash as a bonus action. Wolf: while raging, your allies have advantage on melee attacks against hostile creatures within 5 ft of you.'}],
        6:[{name:'Aspect of the Beast', desc:'Choose a totem animal. Bear: your carrying capacity doubles and you have advantage on STR checks to push, pull, lift, or break. Eagle: you can see up to a mile away with no difficulty and dim light doesn\'t impose disadvantage on Perception. Wolf: you can track at a fast pace and move stealthily at a normal pace.'}],
        10:[{name:'Spirit Walker', desc:'You can cast Commune with Nature as a ritual. A spirit animal of your totem appears to deliver the information you seek.'}],
        14:[{name:'Totemic Attunement', desc:'Choose a totem animal. Bear: while raging, hostile creatures within 5 ft have disadvantage on attacks against anyone but you. Eagle: while raging, you gain a flying speed equal to your walking speed (falls if you end your turn airborne). Wolf: while raging, a bonus action knocks a Large or smaller creature prone when you hit it with a melee attack.'}]
      } }
  ],

  // ── BARD — COLLEGES ───────────────────────────────────────
  bard: [
    { id:'lore', name:'College of Lore', choiceLevel:3,
      flavorText:'Bards of Lore collect knowledge and secrets from every source, using their wit to cut down pretension and their magic to inspire.',
      features:{
        3:[{name:'Bonus Proficiencies', desc:'You gain proficiency with three skills of your choice.'},
           {name:'Cutting Words', desc:'Reaction: when a creature you can see within 60 ft makes an attack roll, ability check, or damage roll, expend one Bardic Inspiration die and subtract the roll from the creature\'s result. The creature must be able to hear you and not be immune to being charmed.'}],
        6:[{name:'Additional Magical Secrets', desc:'Learn two spells of your choice from any class\'s spell list (up to a level you can cast). They count as bard spells but don\'t count against your spells known.'}],
        14:[{name:'Peerless Skill', desc:'When you make an ability check, you can expend one Bardic Inspiration die and add it to your own roll (decide after rolling but before learning the outcome).'}]
      } },
    { id:'valor', name:'College of Valor', choiceLevel:3,
      flavorText:'Valor bards are daring skalds who keep the deeds of heroes alive — and prove themselves heroes in the thick of battle.',
      features:{
        3:[{name:'Bonus Proficiencies', desc:'You gain proficiency with medium armor, shields, and martial weapons.'},
           {name:'Combat Inspiration', desc:'A creature with your Bardic Inspiration die can add it to a weapon damage roll, or use its reaction to add it to AC against one attack after the roll is made.'}],
        6:[{name:'Extra Attack', desc:'You can attack twice, instead of once, whenever you take the Attack action on your turn.'}],
        14:[{name:'Battle Magic', desc:'When you use your action to cast a bard spell, you can make one weapon attack as a bonus action.'}]
      } }
  ],

  // ── CLERIC — DIVINE DOMAINS ───────────────────────────────
  cleric: [
    { id:'life', name:'Life Domain', choiceLevel:1,
      flavorText:'The Life domain focuses on the positive energy that sustains all life — healing the sick and wounded and driving away the forces of death.',
      bonusSpells:{1:['Bless','Cure Wounds'],3:['Lesser Restoration','Spiritual Weapon'],5:['Beacon of Hope','Revivify'],7:['Death Ward','Guardian of Faith'],9:['Mass Cure Wounds','Raise Dead']},
      features:{
        1:[{name:'Bonus Proficiency', desc:'You gain proficiency with heavy armor.'},
           {name:'Disciple of Life', desc:'Your healing spells are more effective: whenever a spell of 1st level or higher restores HP, the target regains additional HP equal to 2 + the spell\'s level.'}],
        2:[{name:'Channel Divinity: Preserve Life', desc:'Action: present your holy symbol and restore HP equal to 5 × your cleric level, divided among creatures within 30 ft (none above half their HP maximum). Can\'t target undead or constructs.'}],
        6:[{name:'Blessed Healer', desc:'When you cast a spell of 1st level or higher that restores HP to another creature, you regain HP equal to 2 + the spell\'s level.'}],
        8:[{name:'Divine Strike', desc:'Once on each of your turns when you hit with a weapon attack, deal an extra 1d8 radiant damage (2d8 at cleric level 14).'}],
        17:[{name:'Supreme Healing', desc:'When you would normally roll dice to restore HP with a spell, instead use the maximum possible roll (e.g. 2d6 becomes 12).'}]
      } },
    { id:'light', name:'Light Domain', choiceLevel:1,
      flavorText:'Gods of light promote ideals of rebirth, truth, and vigilance — burning away darkness and falsehood with searing flame.',
      bonusSpells:{1:['Burning Hands','Faerie Fire'],3:['Flaming Sphere','Scorching Ray'],5:['Daylight','Fireball'],7:['Guardian of Faith','Wall of Fire'],9:['Flame Strike','Scrying']},
      features:{
        1:[{name:'Bonus Cantrip', desc:'You learn the Light cantrip (doesn\'t count against your cantrips known).'},
           {name:'Warding Flare', desc:'Reaction: when attacked by a creature within 30 ft you can see, impose disadvantage on the attack roll. Uses = your WIS modifier (min 1) per long rest.', uses:'wis_mod', recharge:'long_rest'}],
        2:[{name:'Channel Divinity: Radiance of the Dawn', desc:'Action: dispel magical darkness within 30 ft. Hostile creatures within 30 ft make a CON save, taking 2d10 + cleric level radiant damage on a failure (half on success).'}],
        6:[{name:'Improved Flare', desc:'You can use Warding Flare when a creature attacks an ally within 30 ft of you, not just yourself.'}],
        8:[{name:'Potent Spellcasting', desc:'Add your WIS modifier to the damage you deal with any cleric cantrip.'}],
        17:[{name:'Corona of Light', desc:'Action: emit bright light in a 60-ft radius for 1 minute. Enemies in the light have disadvantage on saves against your spells that deal fire or radiant damage.'}]
      } },
    { id:'trickery', name:'Trickery Domain', choiceLevel:1,
      flavorText:'Gods of trickery are mischief-makers and instigators — embracing deception, shadows, and the upending of order.',
      bonusSpells:{1:['Charm Person','Disguise Self'],3:['Mirror Image','Pass without Trace'],5:['Blink','Dispel Magic'],7:['Dimension Door','Polymorph'],9:['Dominate Person','Modify Memory']},
      features:{
        1:[{name:'Blessing of the Trickster', desc:'Action: touch a willing creature other than yourself to give it advantage on DEX (Stealth) checks for 1 hour (or until you use this again).'}],
        2:[{name:'Channel Divinity: Invoke Duplicity', desc:'Action: create a perfect illusory duplicate of yourself within 30 ft for 1 minute. You can cast spells as though in its space, and gain advantage on attacks against creatures when both you and the illusion are within 5 ft of it.'}],
        6:[{name:'Channel Divinity: Cloak of Shadows', desc:'Action: become invisible until the end of your next turn (ends if you attack or cast a spell).'}],
        8:[{name:'Divine Strike', desc:'Once on each of your turns when you hit with a weapon attack, deal an extra 1d8 poison damage (2d8 at cleric level 14).'}],
        17:[{name:'Improved Duplicity', desc:'You can create up to four duplicates with Invoke Duplicity instead of one, and move any of them with your bonus action.'}]
      } },
    { id:'war', name:'War Domain', choiceLevel:1,
      flavorText:'War gods watch over warriors and reward them for great deeds — their clerics excel in battle, inspiring others or smiting foes directly.',
      bonusSpells:{1:['Divine Favor','Shield of Faith'],3:['Magic Weapon','Spiritual Weapon'],5:['Crusader\'s Mantle','Spirit Guardians'],7:['Freedom of Movement','Stoneskin'],9:['Flame Strike','Hold Monster']},
      features:{
        1:[{name:'Bonus Proficiencies', desc:'You gain proficiency with martial weapons and heavy armor.'},
           {name:'War Priest', desc:'When you take the Attack action, you can make one weapon attack as a bonus action. Uses = your WIS modifier (min 1) per long rest.', uses:'wis_mod', recharge:'long_rest'}],
        2:[{name:'Channel Divinity: Guided Strike', desc:'When you make an attack roll, you can use Channel Divinity to gain +10 to the roll (decide after seeing the roll, before the DM says whether it hits).'}],
        6:[{name:'Channel Divinity: War God\'s Blessing', desc:'Reaction: when a creature within 30 ft makes an attack roll, grant it +10 to the roll using your Channel Divinity.'}],
        8:[{name:'Divine Strike', desc:'Once on each of your turns when you hit with a weapon attack, deal an extra 1d8 damage of the weapon\'s type (2d8 at cleric level 14).'}],
        17:[{name:'Avatar of Battle', desc:'You gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.'}]
      } },
    { id:'nature', name:'Nature Domain', choiceLevel:1,
      flavorText:'Gods of nature hold sway over the wilderness — their clerics command plants and animals and channel the elements.',
      bonusSpells:{1:['Animal Friendship','Speak with Animals'],3:['Barkskin','Spike Growth'],5:['Plant Growth','Wind Wall'],7:['Dominate Beast','Grasping Vine'],9:['Insect Plague','Tree Stride']},
      features:{
        1:[{name:'Acolyte of Nature', desc:'You learn one druid cantrip of your choice and gain proficiency in one of: Animal Handling, Nature, or Survival.'},
           {name:'Bonus Proficiency', desc:'You gain proficiency with heavy armor.'}],
        2:[{name:'Channel Divinity: Charm Animals and Plants', desc:'Action: each beast or plant creature within 30 ft that can see you must make a WIS save or be charmed by you for 1 minute (or until it takes damage).'}],
        6:[{name:'Dampen Elements', desc:'Reaction: when you or a creature within 30 ft takes acid, cold, fire, lightning, or thunder damage, grant resistance against that instance of damage.'}],
        8:[{name:'Divine Strike', desc:'Once on each of your turns when you hit with a weapon attack, deal an extra 1d8 cold, fire, or lightning damage (your choice; 2d8 at cleric level 14).'}],
        17:[{name:'Master of Nature', desc:'You can command creatures charmed by your Charm Animals and Plants as a bonus action.'}]
      } },
    { id:'tempest', name:'Tempest Domain', choiceLevel:1,
      flavorText:'Gods of storm and sea send their clerics to inspire fear in the wicked — wielding thunder and lightning as instruments of wrath.',
      bonusSpells:{1:['Fog Cloud','Thunderwave'],3:['Gust of Wind','Shatter'],5:['Call Lightning','Sleet Storm'],7:['Control Water','Ice Storm'],9:['Destructive Wave','Insect Plague']},
      features:{
        1:[{name:'Bonus Proficiencies', desc:'You gain proficiency with martial weapons and heavy armor.'},
           {name:'Wrath of the Storm', desc:'Reaction: when a creature within 5 ft hits you with an attack, it makes a DEX save, taking 2d8 lightning or thunder damage (your choice) on a failure, half on success. Uses = your WIS modifier (min 1) per long rest.', uses:'wis_mod', recharge:'long_rest'}],
        2:[{name:'Channel Divinity: Destructive Wrath', desc:'When you roll lightning or thunder damage, use Channel Divinity to deal maximum damage instead of rolling.'}],
        6:[{name:'Thunderbolt Strike', desc:'When you deal lightning damage to a Large or smaller creature, you can push it up to 10 ft away from you.'}],
        8:[{name:'Divine Strike', desc:'Once on each of your turns when you hit with a weapon attack, deal an extra 1d8 thunder damage (2d8 at cleric level 14).'}],
        17:[{name:'Stormborn', desc:'You gain a flying speed equal to your walking speed whenever you are not underground or indoors.'}]
      } },
    { id:'knowledge', name:'Knowledge Domain', choiceLevel:1,
      flavorText:'Gods of knowledge value learning above all — their clerics unearth lost secrets and treasure the mind\'s perfect mastery.',
      bonusSpells:{1:['Command','Identify'],3:['Augury','Suggestion'],5:['Nondetection','Speak with Dead'],7:['Arcane Eye','Confusion'],9:['Legend Lore','Scrying']},
      features:{
        1:[{name:'Blessings of Knowledge', desc:'You learn two languages and gain proficiency in two of: Arcana, History, Nature, or Religion. Your proficiency bonus is doubled for checks with those skills.'}],
        2:[{name:'Channel Divinity: Knowledge of the Ages', desc:'Action: gain proficiency with one skill or tool of your choice for 10 minutes.'}],
        6:[{name:'Channel Divinity: Read Thoughts', desc:'Action: one creature within 60 ft makes a WIS save. On a failure, you read its surface thoughts for 1 minute and can cast Suggestion on it without a spell slot (it automatically fails the save).'}],
        8:[{name:'Potent Spellcasting', desc:'Add your WIS modifier to the damage you deal with any cleric cantrip.'}],
        17:[{name:'Visions of the Past', desc:'After 1 minute of meditation, see recent visions of an object\'s previous owner or an area\'s past events (up to WIS score in days per cleric level).'}]
      } }
  ],

  // ── DRUID — CIRCLES ───────────────────────────────────────
  druid: [
    { id:'land', name:'Circle of the Land', choiceLevel:2,
      flavorText:'Mystics and sages who safeguard ancient knowledge and rites, drawing power from the land itself.',
      features:{
        2:[{name:'Bonus Cantrip', desc:'You learn one additional druid cantrip of your choice.'},
           {name:'Natural Recovery', desc:'Once per day during a short rest, recover expended spell slots with a combined level up to half your druid level (rounded up), none 6th level or higher.', uses:1, recharge:'long_rest'},
           {name:'Circle Spells (choose your land)', desc:'At druid levels 3, 5, 7, and 9 you gain bonus spells tied to your chosen terrain (arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark). They are always prepared and don\'t count against your prepared spells.'}],
        6:[{name:'Land\'s Stride', desc:'Moving through nonmagical difficult terrain costs no extra movement, and you can pass through nonmagical plants without being slowed or harmed by thorns. Advantage on saves against magically created or manipulated plants.'}],
        10:[{name:'Nature\'s Ward', desc:'You can\'t be charmed or frightened by elementals or fey, and you are immune to poison and disease.'}],
        14:[{name:'Nature\'s Sanctuary', desc:'Beasts and plant creatures must make a WIS save to attack you; on a failure they must choose a different target or lose the attack.'}]
      } },
    { id:'moon', name:'Circle of the Moon', choiceLevel:2,
      flavorText:'Fierce guardians of the wilds who haunt the deepest forests, shifting into powerful beast forms to do battle.',
      features:{
        2:[{name:'Combat Wild Shape', desc:'You can use Wild Shape as a bonus action, and while transformed you can use a bonus action to expend a spell slot and regain 1d8 HP per slot level.'},
           {name:'Circle Forms', desc:'You can transform into beasts of CR 1 (rather than CR 1/4). From druid level 6, max CR = druid level ÷ 3 (rounded down).'}],
        6:[{name:'Primal Strike', desc:'Your attacks in beast form count as magical for overcoming resistance and immunity to nonmagical attacks.'}],
        10:[{name:'Elemental Wild Shape', desc:'Expend two uses of Wild Shape to transform into an air, earth, fire, or water elemental.'}],
        14:[{name:'Thousand Forms', desc:'You can cast Alter Self at will.'}]
      } }
  ],

  // ── FIGHTER — MARTIAL ARCHETYPES ──────────────────────────
  fighter: [
    { id:'champion', name:'Champion', choiceLevel:3,
      flavorText:'The archetypal warrior honed to physical perfection — raw power refined into deadly simplicity.',
      features:{
        3:[{name:'Improved Critical', desc:'Your weapon attacks score a critical hit on a roll of 19 or 20.'}],
        7:[{name:'Remarkable Athlete', desc:'Add half your proficiency bonus (round up) to any STR, DEX, or CON check that doesn\'t already use it. Your running long jump distance increases by your STR modifier in feet.'}],
        10:[{name:'Additional Fighting Style', desc:'Choose a second Fighting Style option.'}],
        15:[{name:'Superior Critical', desc:'Your weapon attacks score a critical hit on a roll of 18–20.'}],
        18:[{name:'Survivor', desc:'At the start of each of your turns, regain 5 + CON modifier HP if you have no more than half your HP left (doesn\'t work at 0 HP).'}]
      } },
    { id:'battle-master', name:'Battle Master', choiceLevel:3,
      flavorText:'A student of the art of war — employing martial maneuvers, superior tactics, and battlefield control.',
      features:{
        3:[{name:'Combat Superiority', desc:'You learn three maneuvers (e.g. Trip Attack, Riposte, Precision Attack) and gain four superiority dice (d8s) to fuel them. Maneuver save DC = 8 + proficiency + STR or DEX modifier. You learn 2 more maneuvers at levels 7, 10, and 15.', usesByLevel:[0,0,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6], recharge:'short_rest', isPool:true},
           {name:'Student of War', desc:'You gain proficiency with one type of artisan\'s tools of your choice.'}],
        7:[{name:'Know Your Enemy', desc:'After 1 minute observing a creature outside combat, learn whether it is your equal, superior, or inferior in two characteristics of your choice (STR, DEX, CON, AC, current HP, total class levels, fighter levels).'}],
        10:[{name:'Improved Combat Superiority (d10)', desc:'Your superiority dice become d10s (d12s at fighter level 18).'}],
        15:[{name:'Relentless', desc:'When you roll initiative and have no superiority dice remaining, you regain one.'}],
        18:[{name:'Improved Combat Superiority (d12)', desc:'Your superiority dice become d12s.'}]
      } },
    { id:'eldritch-knight', name:'Eldritch Knight', choiceLevel:3,
      flavorText:'A warrior-mage who supplements martial prowess with wizardly abjuration and evocation magic.',
      features:{
        3:[{name:'Spellcasting', desc:'You learn two wizard cantrips and three 1st-level wizard spells (chiefly abjuration and evocation). INT is your spellcasting ability. You gain spell slots on the third-caster track (multiclass caster level = fighter level ÷ 3).'},
           {name:'Weapon Bond', desc:'Ritual-bond up to two weapons: you can\'t be disarmed of a bonded weapon unless incapacitated, and you can summon it to your hand as a bonus action.'}],
        7:[{name:'War Magic', desc:'When you use your action to cast a cantrip, you can make one weapon attack as a bonus action.'}],
        10:[{name:'Eldritch Strike', desc:'When you hit a creature with a weapon attack, it has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn.'}],
        15:[{name:'Arcane Charge', desc:'When you use Action Surge, you can teleport up to 30 ft to an unoccupied space you can see, before or after the additional action.'}],
        18:[{name:'Improved War Magic', desc:'When you use your action to cast a spell, you can make one weapon attack as a bonus action.'}]
      } }
  ],

  // ── MONK — MONASTIC TRADITIONS ────────────────────────────
  monk: [
    { id:'open-hand', name:'Way of the Open Hand', choiceLevel:3,
      flavorText:'Masters of unarmed combat who manipulate ki to heal, protect, and strike with devastating technique.',
      features:{
        3:[{name:'Open Hand Technique', desc:'When you hit a creature with a Flurry of Blows attack, impose one: it must succeed on a DEX save or be knocked prone; it must succeed on a STR save or be pushed 15 ft; or it can\'t take reactions until the end of your next turn.'}],
        6:[{name:'Wholeness of Body', desc:'Action: regain HP equal to 3 × your monk level. Once per long rest.', uses:1, recharge:'long_rest'}],
        11:[{name:'Tranquility', desc:'At the end of a long rest, gain the effect of a Sanctuary spell (save DC = 8 + proficiency + WIS modifier) that lasts until your next long rest or until you attack or cast a spell.'}],
        17:[{name:'Quivering Palm', desc:'When you hit with an unarmed strike, spend 3 ki to set lethal vibrations in the body for up to your monk level in days. As an action, end them: the target must make a CON save or drop to 0 HP (10d10 necrotic on a success).'}]
      } },
    { id:'shadow', name:'Way of Shadow', choiceLevel:3,
      flavorText:'Ninjas and shadowdancers — monks who use stealth, subterfuge, and shadow magic in service of their goals.',
      features:{
        3:[{name:'Shadow Arts', desc:'Spend 2 ki to cast Darkness, Darkvision, Pass without Trace, or Silence (no components). You also learn the Minor Illusion cantrip if you don\'t know it.'}],
        6:[{name:'Shadow Step', desc:'While in dim light or darkness, teleport as a bonus action up to 60 ft to another space in dim light or darkness; you then have advantage on the first melee attack you make before the end of the turn.'}],
        11:[{name:'Cloak of Shadows', desc:'Action while in dim light or darkness: become invisible until you attack, cast a spell, or enter bright light.'}],
        17:[{name:'Opportunist', desc:'Reaction: when a creature within 5 ft of you is hit by an attack made by anyone other than you, make a melee attack against it.'}]
      } }
  ],

  // ── PALADIN — SACRED OATHS ────────────────────────────────
  paladin: [
    { id:'devotion', name:'Oath of Devotion', choiceLevel:3,
      flavorText:'The loftiest ideals of justice, virtue, and order — the shining knight holding themselves to the highest standard.',
      bonusSpells:{3:['Protection from Evil and Good','Sanctuary'],5:['Lesser Restoration','Zone of Truth'],9:['Beacon of Hope','Dispel Magic'],13:['Freedom of Movement','Guardian of Faith'],17:['Commune','Flame Strike']},
      features:{
        3:[{name:'Channel Divinity: Sacred Weapon', desc:'Action: for 1 minute, add your CHA modifier to attack rolls with one weapon (min +1). It emits bright light in 20 ft and counts as magical.'},
           {name:'Channel Divinity: Turn the Unholy', desc:'Action: each fiend or undead within 30 ft that can see or hear you makes a WIS save or is turned for 1 minute.'}],
        7:[{name:'Aura of Devotion', desc:'You and friendly creatures within 10 ft (30 ft at paladin 18) can\'t be charmed while you are conscious.'}],
        15:[{name:'Purity of Spirit', desc:'You are always under the effect of Protection from Evil and Good.'}],
        20:[{name:'Holy Nimbus', desc:'Action: for 1 minute, emit bright sunlight in 30 ft; enemies starting their turn in it take 10 radiant damage, and you have advantage on saves against spells cast by fiends or undead. Once per long rest.', uses:1, recharge:'long_rest'}]
      } },
    { id:'vengeance', name:'Oath of Vengeance', choiceLevel:3,
      flavorText:'A solemn commitment to punish those who have committed grievous sins — set aside purity for the destruction of evil.',
      bonusSpells:{3:['Bane','Hunter\'s Mark'],5:['Hold Person','Misty Step'],9:['Haste','Protection from Energy'],13:['Banishment','Dimension Door'],17:['Hold Monster','Scrying']},
      features:{
        3:[{name:'Channel Divinity: Abjure Enemy', desc:'Action: one creature within 60 ft makes a WIS save or is frightened of you and has speed 0 for 1 minute (halved speed on a success).'},
           {name:'Channel Divinity: Vow of Enmity', desc:'Bonus action: gain advantage on attack rolls against one creature within 10 ft for 1 minute or until it drops to 0 HP.'}],
        7:[{name:'Relentless Avenger', desc:'When you hit a creature with an opportunity attack, you can move up to half your speed immediately after, without provoking opportunity attacks.'}],
        15:[{name:'Soul of Vengeance', desc:'Reaction: when a creature under your Vow of Enmity makes an attack, make a melee weapon attack against it if within range.'}],
        20:[{name:'Avenging Angel', desc:'Action: for 1 hour, gain a 60-ft flying speed and an aura of menace — enemies coming within 30 ft make a WIS save or are frightened for 1 minute. Once per long rest.', uses:1, recharge:'long_rest'}]
      } },
    { id:'ancients', name:'Oath of the Ancients', choiceLevel:3,
      flavorText:'Side with the light — not for goodness, but for life itself. The joyous side of existence, the green growing world, must be protected.',
      bonusSpells:{3:['Ensnaring Strike','Speak with Animals'],5:['Moonbeam','Misty Step'],9:['Plant Growth','Protection from Energy'],13:['Ice Storm','Stoneskin'],17:['Commune with Nature','Tree Stride']},
      features:{
        3:[{name:'Channel Divinity: Nature\'s Wrath', desc:'Action: vines sprout from the ground — one creature within 10 ft must succeed on a STR or DEX save or be restrained until it succeeds on the save (repeats each turn).'},
           {name:'Channel Divinity: Turn the Faithless', desc:'Action: each fey or fiend within 30 ft that can see or hear you makes a WIS save or is turned for 1 minute.'}],
        7:[{name:'Aura of Warding', desc:'Ancient magic protects you and allies within 10 ft (30 ft at paladin 18) from being charmed by spells; you all have resistance to damage from spells.'}],
        15:[{name:'Undying Sentinel', desc:'When you are reduced to 0 HP and not killed outright, you can drop to 1 HP instead. You also don\'t suffer the normal effects of aging from magical aging. Once per long rest.'}],
        20:[{name:'Elder Champion', desc:'Action: for 1 minute, you become an embodiment of nature\'s might — regain 10 HP at the start of each turn, cast paladin spells as a bonus action, enemies within 10 ft have disadvantage on saves against your paladin spells and Channel Divinity. Once per long rest.', uses:1, recharge:'long_rest'}]
      } },
    { id:'conquest', name:'Oath of Conquest', choiceLevel:3,
      flavorText:'Seek glory in battle, the subjugation of enemies, and the dominion of an iron fist — crush the will of your foes.',
      bonusSpells:{3:['Armor of Agathys','Command'],5:['Hold Person','Spiritual Weapon'],9:['Bestow Curse','Fear'],13:['Dominate Beast','Stoneskin'],17:['Cloudkill','Dominate Person']},
      features:{
        3:[{name:'Channel Divinity: Conquering Presence', desc:'Action: force each creature of your choice within 30 ft to make a WIS save or be frightened of you for 1 minute.'},
           {name:'Channel Divinity: Guided Strike', desc:'When you miss with an attack roll, use your reaction to gain a +10 bonus to it, potentially turning a miss into a hit.'}],
        7:[{name:'Aura of Conquest', desc:'Frightened creatures within 10 ft (30 ft at paladin 18) of you have speed 0 and take psychic damage equal to half your paladin level at the start of each of their turns.'}],
        15:[{name:'Scornful Rebuke', desc:'Whenever you are hit by an attack, the attacker takes psychic damage equal to your CHA modifier (minimum 1) if you are not incapacitated.'}],
        20:[{name:'Invincible Conqueror', desc:'Action: for 1 minute, gain resistance to all damage, make an extra attack each turn, and score a critical hit on a roll of 19 or 20. Once per long rest.', uses:1, recharge:'long_rest'}]
      } }
  ],

  // ── RANGER — ARCHETYPES ───────────────────────────────────
  ranger: [
    { id:'hunter', name:'Hunter', choiceLevel:3,
      flavorText:'Accept your place as a bulwark between civilization and the terrors of the wilderness, mastering specialized hunting techniques.',
      features:{
        3:[{name:'Hunter\'s Prey', desc:'Choose one: Colossus Slayer (once per turn, +1d8 damage to a creature below its HP maximum), Giant Killer (reaction attack when a Large+ creature within 5 ft hits or misses you), or Horde Breaker (once per turn, an extra attack against a different creature within 5 ft of the original target).'}],
        7:[{name:'Defensive Tactics', desc:'Choose one: Escape the Horde (opportunity attacks against you have disadvantage), Multiattack Defense (+4 AC against subsequent attacks from a creature that hits you), or Steel Will (advantage on saves against being frightened).'}],
        11:[{name:'Multiattack', desc:'Choose one: Volley (action — ranged attack against any number of creatures within 10 ft of a point you can see) or Whirlwind Attack (action — melee attack against any number of creatures within 5 ft of you).'}],
        15:[{name:'Superior Hunter\'s Defense', desc:'Choose one: Evasion (DEX save for half damage → no damage on success, half on failure), Stand Against the Tide (redirect a missed melee attack to another creature), or Uncanny Dodge (reaction — halve an attack\'s damage against you).'}]
      } },
    { id:'beast-master', name:'Beast Master', choiceLevel:3,
      flavorText:'Embody the friendship between civilization and the beasts of the wild — fighting in concert with an animal companion.',
      features:{
        3:[{name:'Ranger\'s Companion', desc:'Gain a beast companion (CR 1/4 or lower, Medium or smaller). It adds your proficiency bonus to its AC, attacks, damage, and proficient skills/saves; its HP max = 4 × your ranger level (if higher). It acts on your initiative and obeys your commands; you can direct it to Attack, Dash, Disengage, or Help as your action.'}],
        7:[{name:'Exceptional Training', desc:'On any turn your companion doesn\'t attack, you can command it to Dash, Disengage, or Help as a bonus action. Its attacks count as magical.'}],
        11:[{name:'Bestial Fury', desc:'Your companion can make two attacks when you command it to take the Attack action.'}],
        15:[{name:'Share Spells', desc:'When you cast a spell targeting yourself, you can also affect your companion if within 30 ft.'}]
      } }
  ],

  // ── ROGUE — ROGUISH ARCHETYPES ────────────────────────────
  rogue: [
    { id:'thief', name:'Thief', choiceLevel:3,
      flavorText:'Hone your skills in the larcenous arts — burglar, treasure hunter, explorer, and second-story specialist.',
      features:{
        3:[{name:'Fast Hands', desc:'Your Cunning Action bonus action can also be used to make Sleight of Hand checks, use thieves\' tools to disarm a trap or open a lock, or take the Use an Object action.'},
           {name:'Second-Story Work', desc:'Climbing no longer costs you extra movement, and your running jump distance increases by your DEX modifier in feet.'}],
        9:[{name:'Supreme Sneak', desc:'You have advantage on DEX (Stealth) checks if you move no more than half your speed on the same turn.'}],
        13:[{name:'Use Magic Device', desc:'You ignore all class, race, and level requirements on the use of magic items.'}],
        17:[{name:'Thief\'s Reflexes', desc:'You can take two turns during the first round of any combat (your normal turn, plus a second at your initiative minus 10). Not usable while surprised.'}]
      } },
    { id:'assassin', name:'Assassin', choiceLevel:3,
      flavorText:'Focus your training on the grim art of death — infiltration, disguise, and the lethal first strike.',
      features:{
        3:[{name:'Bonus Proficiencies', desc:'You gain proficiency with the disguise kit and the poisoner\'s kit.'},
           {name:'Assassinate', desc:'You have advantage on attack rolls against any creature that hasn\'t taken a turn yet. Any hit you score against a surprised creature is a critical hit.'}],
        9:[{name:'Infiltration Expertise', desc:'Spend 7 days and 25 gp to establish a false identity with documentation and contacts. You can\'t be discerned as an impostor while wearing it.'}],
        13:[{name:'Impostor', desc:'After 3 hours studying a person, you can unerringly mimic their speech, writing, and behavior. Your ruse is indiscernible to casual observers; suspicious ones contest your Deception with their Insight (you have advantage).'}],
        17:[{name:'Death Strike', desc:'When you hit a surprised creature, it must make a CON save (DC 8 + proficiency + DEX modifier) or take double damage from the attack.'}]
      } },
    { id:'arcane-trickster', name:'Arcane Trickster', choiceLevel:3,
      flavorText:'Enhance your trickery with wizardly enchantment and illusion magic — pickpocketing with Mage Hand and vanishing in plain sight.',
      features:{
        3:[{name:'Spellcasting', desc:'You learn three wizard cantrips (including Mage Hand) and three 1st-level wizard spells (chiefly enchantment and illusion). INT is your spellcasting ability. You gain spell slots on the third-caster track (multiclass caster level = rogue level ÷ 3).'},
           {name:'Mage Hand Legerdemain', desc:'Your Mage Hand is invisible, and it can stow or retrieve objects in containers worn by others and use thieves\' tools at range. You can control it with Cunning Action.'}],
        9:[{name:'Magical Ambush', desc:'If you are hidden from a creature when you cast a spell on it, it has disadvantage on any saving throw against the spell this turn.'}],
        13:[{name:'Versatile Trickster', desc:'Bonus action: direct your Mage Hand at a creature within 5 ft of it to gain advantage on your attack rolls against that creature this turn.'}],
        17:[{name:'Spell Thief', desc:'Reaction: when a creature casts a spell targeting you or including you in its area, force a save with its spellcasting ability. On a failure, the spell has no effect on you, and you steal it for 8 hours if it\'s 1st level+ and one you can cast. Once per long rest.', uses:1, recharge:'long_rest'}]
      } }
  ],

  // ── SORCERER — SORCEROUS ORIGINS ──────────────────────────
  sorcerer: [
    { id:'draconic-bloodline', name:'Draconic Bloodline', choiceLevel:1,
      flavorText:'Magic flows in your veins from a draconic ancestor — its elemental power shaping your body and spells.',
      features:{
        1:[{name:'Dragon Ancestor', desc:'Choose a dragon type (e.g. red/fire, blue/lightning, white/cold). You can speak, read, and write Draconic, and double your proficiency bonus on CHA checks when interacting with dragons.'},
           {name:'Draconic Resilience', desc:'Your HP maximum increases by 1 per sorcerer level. While not wearing armor, your AC = 13 + DEX modifier.'}],
        6:[{name:'Elemental Affinity', desc:'When you cast a spell that deals damage of your ancestor\'s type, add your CHA modifier to one damage roll. You can also spend 1 sorcery point to gain resistance to that damage type for 1 hour.'}],
        14:[{name:'Dragon Wings', desc:'Bonus action: sprout (or dismiss) dragon wings, gaining a flying speed equal to your current speed. Not usable while wearing armor unless it accommodates the wings.'}],
        18:[{name:'Draconic Presence', desc:'Action: spend 5 sorcery points to exude awe or fear in a 60-ft aura for 1 minute — hostile creatures entering or starting in it make a WIS save or are charmed or frightened (your choice).'}]
      } },
    { id:'wild-magic', name:'Wild Magic', choiceLevel:1,
      flavorText:'Your innate magic churns with raw chaos — sometimes erupting in unpredictable surges of wild power.',
      features:{
        1:[{name:'Wild Magic Surge', desc:'After you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20; on a 1, roll on the Wild Magic Surge table for a random magical effect.'},
           {name:'Tides of Chaos', desc:'Gain advantage on one attack roll, ability check, or saving throw. Regained after a long rest — or when the DM has you surge.', uses:1, recharge:'long_rest'}],
        6:[{name:'Bend Luck', desc:'Reaction: when another creature you can see makes an attack roll, ability check, or saving throw, spend 2 sorcery points to roll 1d4 and add or subtract it from the roll.'}],
        14:[{name:'Controlled Chaos', desc:'Whenever you roll on the Wild Magic Surge table, roll twice and use either result.'}],
        18:[{name:'Spell Bombardment', desc:'Once per turn, when you roll the maximum on a spell damage die, roll that die again and add it to the damage.'}]
      } }
  ],

  // ── WARLOCK — OTHERWORLDLY PATRONS ────────────────────────
  warlock: [
    { id:'archfey', name:'The Archfey', choiceLevel:1,
      flavorText:'Your patron is a lord or lady of the fey — ancient, capricious, and wielding the magic of dream and glamour.',
      expandedSpells:{1:['Faerie Fire','Sleep'],3:['Calm Emotions','Phantasmal Force'],5:['Blink','Plant Growth'],7:['Dominate Beast','Greater Invisibility'],9:['Dominate Person','Seeming']},
      features:{
        1:[{name:'Fey Presence', desc:'Action: each creature in a 10-ft cube originating from you makes a WIS save or is charmed or frightened by you (your choice) until the end of your next turn.', uses:1, recharge:'short_rest'}],
        6:[{name:'Misty Escape', desc:'Reaction when you take damage: turn invisible and teleport up to 60 ft, remaining invisible until the start of your next turn or until you attack or cast.', uses:1, recharge:'short_rest'}],
        10:[{name:'Beguiling Defenses', desc:'You are immune to being charmed. When a creature attempts to charm you, you can turn the charm back: it makes a WIS save or is charmed by you for 1 minute.'}],
        14:[{name:'Dark Delirium', desc:'Action: one creature within 60 ft makes a WIS save or is charmed or frightened for 1 minute, perceiving only itself, you, and an illusory dreamscape.', uses:1, recharge:'short_rest'}]
      } },
    { id:'fiend', name:'The Fiend', choiceLevel:1,
      flavorText:'You have struck a bargain with a power of the Lower Planes — destruction and flame are yours to command.',
      expandedSpells:{1:['Burning Hands','Command'],3:['Blindness/Deafness','Scorching Ray'],5:['Fireball','Stinking Cloud'],7:['Fire Shield','Wall of Fire'],9:['Flame Strike','Hallow']},
      features:{
        1:[{name:'Dark One\'s Blessing', desc:'When you reduce a hostile creature to 0 HP, gain temporary HP equal to your CHA modifier + warlock level (min 1).'}],
        6:[{name:'Dark One\'s Own Luck', desc:'Add a d10 to one ability check or saving throw (after rolling, before effects are determined).', uses:1, recharge:'short_rest'}],
        10:[{name:'Fiendish Resilience', desc:'After a short or long rest, choose one damage type: you have resistance to it (except magical or silvered weapons) until you choose another.'}],
        14:[{name:'Hurl Through Hell', desc:'When you hit a creature with an attack, send it through the lower planes: it disappears until the end of your next turn, then returns and takes 10d10 psychic damage (non-fiends only).', uses:1, recharge:'long_rest'}]
      } },
    { id:'great-old-one', name:'The Great Old One', choiceLevel:1,
      flavorText:'Your patron is an entity beyond mortal comprehension — its alien knowledge seeps into your mind from the Far Realm.',
      expandedSpells:{1:['Dissonant Whispers','Tasha\'s Hideous Laughter'],3:['Detect Thoughts','Phantasmal Force'],5:['Clairvoyance','Sending'],7:['Dominate Beast','Evard\'s Black Tentacles'],9:['Dominate Person','Telekinesis']},
      features:{
        1:[{name:'Awakened Mind', desc:'You can communicate telepathically with any creature you can see within 30 ft. It needn\'t share a language but must understand at least one.'}],
        6:[{name:'Entropic Ward', desc:'Reaction: impose disadvantage on an attack roll against you; if it misses, your next attack against that creature has advantage.', uses:1, recharge:'short_rest'}],
        10:[{name:'Thought Shield', desc:'Your thoughts can\'t be read telepathically unless you allow it. You have resistance to psychic damage, and creatures dealing psychic damage to you take the same amount.'}],
        14:[{name:'Create Thrall', desc:'Action: touch an incapacitated humanoid to charm it indefinitely (until Remove Curse, you die, or you use this on another). You can communicate telepathically with it at any distance.'}]
      } }
  ],

  // ── WIZARD — ARCANE TRADITIONS ────────────────────────────
  wizard: [
    { id:'abjuration', name:'School of Abjuration', choiceLevel:2,
      flavorText:'The school of wards, banishment, and protective magic — abjurers are sought wherever baleful spirits and spells must be opposed.',
      features:{
        2:[{name:'Abjuration Savant', desc:'The gold and time you must spend to copy an abjuration spell into your spellbook is halved.'},
           {name:'Arcane Ward', desc:'When you cast an abjuration spell of 1st level+, create a magical ward on yourself with HP = 2 × wizard level + INT modifier. It absorbs damage dealt to you; casting more abjuration spells restores it (2 HP per spell level).'}],
        6:[{name:'Projected Ward', desc:'Reaction: when a creature within 30 ft takes damage, your Arcane Ward absorbs that damage instead.'}],
        10:[{name:'Improved Abjuration', desc:'Add your proficiency bonus to ability checks required by abjuration spells you cast (e.g. Counterspell, Dispel Magic).'}],
        14:[{name:'Spell Resistance', desc:'You have advantage on saving throws against spells, and resistance against the damage of spells.'}]
      } },
    { id:'conjuration', name:'School of Conjuration', choiceLevel:2,
      flavorText:'Summoners and teleporters — conjurers whisk objects and creatures across space, and call forth what was not there.',
      features:{
        2:[{name:'Conjuration Savant', desc:'The gold and time you must spend to copy a conjuration spell into your spellbook is halved.'},
           {name:'Minor Conjuration', desc:'Action: conjure an inanimate object (3 ft per side, 10 lbs max, visibly magical) in your hand or in an unoccupied space within 10 ft. It lasts 1 hour or until it deals or takes damage.'}],
        6:[{name:'Benign Transposition', desc:'Action: teleport up to 30 ft, or swap places with a willing Small/Medium creature you can see. Regained after a long rest or when you cast a conjuration spell of 1st level+.', uses:1, recharge:'long_rest'}],
        10:[{name:'Focused Conjuration', desc:'Your concentration on a conjuration spell can\'t be broken by taking damage.'}],
        14:[{name:'Durable Summons', desc:'Any creature you summon or create with a conjuration spell has 30 temporary HP.'}]
      } },
    { id:'divination', name:'School of Divination', choiceLevel:2,
      flavorText:'Seers who part the veils of space, time, and consciousness — glimpsing what was, what is, and what may yet be.',
      features:{
        2:[{name:'Divination Savant', desc:'The gold and time you must spend to copy a divination spell into your spellbook is halved.'},
           {name:'Portent', desc:'After a long rest, roll two d20s and record them. You can replace any attack roll, save, or ability check made by you or a creature you can see with one of these rolls (once per turn, before the roll).', uses:2, recharge:'long_rest'}],
        6:[{name:'Expert Divination', desc:'When you cast a divination spell of 2nd level+, regain one expended spell slot of a lower level (max 5th).'}],
        10:[{name:'The Third Eye', desc:'Action (once per rest): gain one — darkvision 60 ft, see ethereal creatures within 60 ft, read any language, or see invisibility within 10 ft.', uses:1, recharge:'long_rest'}],
        14:[{name:'Greater Portent', desc:'Your Portent rolls three d20s instead of two.', }]
      } },
    { id:'enchantment', name:'School of Enchantment', choiceLevel:2,
      flavorText:'Enchanters entrance and beguile — bending minds with a honeyed word and a wave of the hand.',
      features:{
        2:[{name:'Enchantment Savant', desc:'The gold and time you must spend to copy an enchantment spell into your spellbook is halved.'},
           {name:'Hypnotic Gaze', desc:'Action: one creature within 5 ft makes a WIS save or is charmed, incapacitated, and dazed until the end of your next turn (repeatable each turn; immune for 24h after success).'}],
        6:[{name:'Instinctive Charm', desc:'Reaction: when a creature within 30 ft attacks you, it makes a WIS save or must target the creature closest to it (other than you). Regained on long rest or 1st+ enchantment cast.', uses:1, recharge:'long_rest'}],
        10:[{name:'Split Enchantment', desc:'When you cast an enchantment spell of 1st level+ that targets only one creature, you can have it target a second eligible creature.'}],
        14:[{name:'Alter Memories', desc:'When a charmed creature\'s charm ends, you can make it forget the time it was charmed (INT save; up to 1 + CHA modifier hours erased).'}]
      } },
    { id:'evocation', name:'School of Evocation', choiceLevel:2,
      flavorText:'Channel raw elemental energy — fire, lightning, cold, and thunder — into devastating displays of destructive power.',
      features:{
        2:[{name:'Evocation Savant', desc:'The gold and time you must spend to copy an evocation spell into your spellbook is halved.'},
           {name:'Sculpt Spells', desc:'When you cast an evocation spell affecting creatures you can see, choose up to 1 + the spell\'s level of them: they automatically succeed on their saves and take no damage if the spell normally deals half on a success.'}],
        6:[{name:'Potent Cantrip', desc:'Your damaging cantrips affect even creatures that avoid the brunt: a creature that succeeds on a save against your cantrip takes half damage (but no other effects).'}],
        10:[{name:'Empowered Evocation', desc:'Add your INT modifier to one damage roll of any wizard evocation spell you cast.'}],
        14:[{name:'Overchannel', desc:'When you cast a wizard spell of 1st–5th level that deals damage, you can deal maximum damage with it. First use is free per long rest; each repeat before resting deals you escalating necrotic damage.'}]
      } },
    { id:'illusion', name:'School of Illusion', choiceLevel:2,
      flavorText:'Masters of deception and phantasm — illusionists make the false seem true and reality itself negotiable.',
      features:{
        2:[{name:'Illusion Savant', desc:'The gold and time you must spend to copy an illusion spell into your spellbook is halved.'},
           {name:'Improved Minor Illusion', desc:'You learn Minor Illusion (free if already known: learn another cantrip). Your Minor Illusion can create a sound and an image with a single casting.'}],
        6:[{name:'Malleable Illusions', desc:'When you cast an illusion spell with a duration of 1 minute or longer, you can use your action to change its nature (within the spell\'s parameters) while it lasts.'}],
        10:[{name:'Illusory Self', desc:'Reaction: when a creature makes an attack roll against you, interpose an illusory duplicate — the attack automatically misses. Regained on rest or 1st+ illusion cast.', uses:1, recharge:'long_rest'}],
        14:[{name:'Illusory Reality', desc:'Bonus action: make one inanimate, nonmagical object in an illusion spell you cast become real for 1 minute (it can\'t deal damage or directly harm).'}]
      } },
    { id:'necromancy', name:'School of Necromancy', choiceLevel:2,
      flavorText:'Explore the cosmic forces of life, death, and undeath — harvesting the energy that flees when a creature dies.',
      features:{
        2:[{name:'Necromancy Savant', desc:'The gold and time you must spend to copy a necromancy spell into your spellbook is halved.'},
           {name:'Grim Harvest', desc:'Once per turn when you kill a creature with a spell of 1st level+, regain HP = 2 × the spell\'s level (3 × if necromancy). No effect on constructs or undead.'}],
        6:[{name:'Undead Thralls', desc:'Add Animate Dead to your spellbook. When you cast it, animate one additional corpse. Your undead get +HP equal to your wizard level and add your proficiency bonus to weapon damage.'}],
        10:[{name:'Inured to Undeath', desc:'You have resistance to necrotic damage, and your HP maximum can\'t be reduced.'}],
        14:[{name:'Command Undead', desc:'Action: one undead within 60 ft makes a CHA save or falls under your control permanently (INT 8+ gets advantage; INT 12+ repeats the save hourly).'}]
      } },
    { id:'transmutation', name:'School of Transmutation', choiceLevel:2,
      flavorText:'Modify energy and matter at will — change the world\'s very substance with reshaping magic.',
      features:{
        2:[{name:'Transmutation Savant', desc:'The gold and time you must spend to copy a transmutation spell into your spellbook is halved.'},
           {name:'Minor Alchemy', desc:'Transform one object of wood, stone, iron, copper, or silver into another of those materials (up to 1 cubic foot per wizard level). Lasts as long as you concentrate (up to 1 hour).'}],
        6:[{name:'Transmuter\'s Stone', desc:'Craft a stone granting one benefit: darkvision 60 ft, +10 speed, proficiency in CON saves, or resistance to acid/cold/fire/lightning/thunder. Change the benefit when you cast a transmutation spell of 1st level+.'}],
        10:[{name:'Shapechanger', desc:'Add Polymorph to your spellbook (free). Cast it without expending a spell slot to transform yourself (only) — regained on short or long rest.', uses:1, recharge:'short_rest'}],
        14:[{name:'Master Transmuter', desc:'Action: expend your Transmuter\'s Stone to produce one of: convert 1 lb of material to any other nonmagical material (Brief Transmutation), remove curses/diseases/poisons/Grappled/Paralyzed/Petrified conditions (Remove Curses), restore a dead creature to life as if cast with Raise Dead (Restore Life), or age/de-age a willing creature by up to 40 years (Restore Youth).'}]
      } },
    { id:'divination', name:'School of Divination', choiceLevel:2,
      flavorText:'Peer into the future with perfect clarity — diviners see the threads of time and pluck only the most favorable outcomes.',
      features:{
        2:[{name:'Divination Savant', desc:'The gold and time you must spend to copy a divination spell into your spellbook is halved.'},
           {name:'Portent', desc:'When you finish a long rest, roll two d20s. Before a d20 roll by you or a visible creature, you can replace it with one of your Portent rolls (before modifiers). Each Portent roll can only be used once.'}],
        6:[{name:'Expert Divination', desc:'When you cast a divination spell of 2nd level or higher, regain one expended spell slot of a lower level than the slot used (max 5th level).'}],
        10:[{name:'The Third Eye', desc:'Action: gain one of these until your next rest: Darkvision 60 ft, see invisible things within 10 ft, read any language, or see into the Ethereal Plane within 60 ft.'}],
        14:[{name:'Greater Portent', desc:'You roll three d20s for your Portent feature rather than two.'}]
      } }
  ]
};

// ══════════════════════════════════════════════════════════════
// APPENDED GAME DATA — Metamagic, Invocations, Pact Boons, Ranger, Druid, Bard
// ══════════════════════════════════════════════════════════════

DND_DATA.metamagicOptions = [
  { id:'careful', name:'Careful Spell', desc:'When you cast a spell that forces others to make a saving throw, spend 1 sorcery point to choose up to CHA modifier creatures — they automatically succeed.' },
  { id:'distant', name:'Distant Spell', desc:'Spend 1 sorcery point to double a spell\'s range (or change Touch to 30 ft).' },
  { id:'empowered', name:'Empowered Spell', desc:'When you roll damage for a spell, spend 1 sorcery point to reroll up to CHA modifier damage dice and use either result. Can be combined with other Metamagic.' },
  { id:'extended', name:'Extended Spell', desc:'Spend 1 sorcery point to double the duration of a concentration spell (max 24 hours).' },
  { id:'heightened', name:'Heightened Spell', desc:'Spend 3 sorcery points when casting a spell that forces a save — one target has disadvantage on its first save.' },
  { id:'quickened', name:'Quickened Spell', desc:'Spend 2 sorcery points to change a spell\'s casting time from 1 action to 1 bonus action for this casting.' },
  { id:'subtle', name:'Subtle Spell', desc:'Spend 1 sorcery point to cast a spell without somatic or verbal components.' },
  { id:'twinned', name:'Twinned Spell', desc:'Spend sorcery points equal to the spell\'s level (min 1) to target a second creature within range with a single-target spell.' }
];

DND_DATA.metamagicGrants = { 3:2, 10:1, 17:1 };

DND_DATA.eldritchInvocations = [
  { id:'agonizing-blast', name:'Agonizing Blast', prereq:'eldritch-blast', desc:'Add your CHA modifier to Eldritch Blast damage rolls.' },
  { id:'armor-of-shadows', name:'Armor of Shadows', desc:'Cast Mage Armor on yourself at will without expending a spell slot.' },
  { id:'ascendant-step', name:'Ascendant Step', prereq:'level:9', desc:'Cast Levitate on yourself at will without expending a spell slot.' },
  { id:'beast-speech', name:'Beast Speech', desc:'Cast Speak with Animals at will without expending a spell slot.' },
  { id:'beguiling-influence', name:'Beguiling Influence', desc:'Gain proficiency in Deception and Persuasion.' },
  { id:'bewitching-whispers', name:'Bewitching Whispers', prereq:'level:7', desc:'Cast Compulsion once using a warlock spell slot. Regained on long rest.' },
  { id:'book-of-ancient-secrets', name:'Book of Ancient Secrets', prereq:'pact-tome', desc:'Inscribe ritual spells in your Book of Shadows. Learn two 1st-level ritual spells from any class; you can cast them as rituals.' },
  { id:'chains-of-carceri', name:'Chains of Carceri', prereq:'level:15,pact-chain', desc:'Cast Hold Monster at will on celestials, fiends, or elementals without expending a spell slot (once per target per long rest).' },
  { id:'devils-sight', name:'Devil\'s Sight', desc:'See normally in magical and nonmagical darkness out to 120 ft.' },
  { id:'dreadful-word', name:'Dreadful Word', prereq:'level:7', desc:'Cast Confusion once using a warlock spell slot. Regained on long rest.' },
  { id:'eldritch-sight', name:'Eldritch Sight', desc:'Cast Detect Magic at will without expending a spell slot.' },
  { id:'eldritch-spear', name:'Eldritch Spear', prereq:'eldritch-blast', desc:'Eldritch Blast has a range of 300 feet.' },
  { id:'eyes-of-the-rune-keeper', name:'Eyes of the Rune Keeper', desc:'Read all writing.' },
  { id:'fiendish-vigor', name:'Fiendish Vigor', desc:'Cast False Life on yourself at will as a 1st-level spell without expending a spell slot.' },
  { id:'gaze-of-two-minds', name:'Gaze of Two Minds', desc:'Touch a willing humanoid to perceive through its senses (action). Lasts until start of your next turn.' },
  { id:'lifedrinker', name:'Lifedrinker', prereq:'level:12,pact-blade', desc:'Add your CHA modifier to the damage dealt with your pact weapon.' },
  { id:'mask-of-many-faces', name:'Mask of Many Faces', desc:'Cast Disguise Self at will without expending a spell slot.' },
  { id:'master-of-myriad-forms', name:'Master of Myriad Forms', prereq:'level:15', desc:'Cast Alter Self at will without expending a spell slot.' },
  { id:'minions-of-chaos', name:'Minions of Chaos', prereq:'level:9', desc:'Cast Conjure Elemental once using a warlock spell slot. Regained on long rest.' },
  { id:'mire-the-mind', name:'Mire the Mind', prereq:'level:5', desc:'Cast Slow once using a warlock spell slot. Regained on long rest.' },
  { id:'misty-visions', name:'Misty Visions', desc:'Cast Silent Image at will without expending a spell slot.' },
  { id:'one-with-shadows', name:'One with Shadows', prereq:'level:5', desc:'When in an area of dim light or darkness, use action to become invisible until you move or take an action or reaction.' },
  { id:'otherworldly-leap', name:'Otherworldly Leap', prereq:'level:9', desc:'Cast Jump on yourself at will without expending a spell slot.' },
  { id:'repelling-blast', name:'Repelling Blast', prereq:'eldritch-blast', desc:'When you hit a Large or smaller creature with Eldritch Blast, push it up to 10 ft away from you.' },
  { id:'sculptor-of-flesh', name:'Sculptor of Flesh', prereq:'level:7', desc:'Cast Polymorph once using a warlock spell slot. Regained on long rest.' }
];

DND_DATA.invocationCounts = [0,0,2,2,2,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8];

DND_DATA.pactBoons = [
  { id:'pact-chain', name:'Pact of the Chain', desc:'Learn Find Familiar (ritual). Your familiar can be an imp, pseudodragon, quasit, or sprite. When you take the Attack action, sacrifice one attack to allow your familiar to use its reaction to make one attack.' },
  { id:'pact-blade', name:'Pact of the Blade', desc:'Summon a pact weapon (melee weapon of any type) as an action. You are proficient with it; it counts as magical. Disappears if you dismiss it or are more than 5 ft from it for more than 1 minute.' },
  { id:'pact-tome', name:'Pact of the Tome', desc:'Your patron gives you a Book of Shadows with three cantrips from any class list (use CHA). While holding it, you can cast these cantrips.' }
];

DND_DATA.favoredEnemyTypes = [
  'Aberrations','Beasts','Celestials','Constructs','Dragons',
  'Elementals','Fey','Fiends','Giants','Monstrosities',
  'Oozes','Plants','Undead','Two Humanoid Races'
];

DND_DATA.explorerTerrains = [
  'Arctic','Coast','Desert','Forest','Grassland',
  'Mountain','Swamp','Underdark'
];

DND_DATA.landCircleTerrains = [
  { id:'arctic',     name:'Arctic',     spells:['Hold Person','Spike Growth','Sleet Storm','Slow','Freedom of Movement','Ice Storm','Commune with Nature','Cone of Cold'] },
  { id:'coast',      name:'Coast',      spells:['Mirror Image','Misty Step','Water Breathing','Water Walk','Control Water','Conjure Elemental','Conjure Elemental','Conjure Elemental'] },
  { id:'desert',     name:'Desert',     spells:['Blur','Silence','Create Food and Water','Protection from Energy','Blight','Hallucinatory Terrain','Insect Plague','Wall of Stone'] },
  { id:'forest',     name:'Forest',     spells:['Barkskin','Spider Climb','Call Lightning','Plant Growth','Divination','Freedom of Movement','Commune with Nature','Tree Stride'] },
  { id:'grassland',  name:'Grassland',  spells:['Invisibility','Pass without Trace','Daylight','Haste','Divination','Freedom of Movement','Dream','Insect Plague'] },
  { id:'mountain',   name:'Mountain',   spells:['Spider Climb','Spike Growth','Lightning Bolt','Meld into Stone','Stone Shape','Stoneskin','Passwall','Wall of Stone'] },
  { id:'swamp',      name:'Swamp',      spells:['Darkness','Melf\'s Acid Arrow','Water Walk','Stinking Cloud','Freedom of Movement','Locate Creature','Insect Plague','Scrying'] },
  { id:'underdark',  name:'Underdark',  spells:['Spider Climb','Web','Gaseous Form','Stinking Cloud','Greater Invisibility','Stone Shape','Cloudkill','Insect Plague'] }
];

DND_DATA.magicalSecretsGrants = {
  bard: { 10:2, 14:2, 18:2 },
  'lore-bard': { 6:2, 10:2, 14:2, 18:2 }
};

// ── SPELL DESCRIPTIONS (levels 2-9) ──────────────────────────────────
Object.assign(DND_DATA.spellDescriptions, {
  // 2nd Level
  "Aid":{level:2,school:"Abjuration",castTime:"1 action",range:"30 ft",duration:"8 hours",components:"V,S,M",desc:"Three creatures gain 5 extra max HP and current HP. At Higher Levels: +5 HP per slot above 2nd."},
  "Alter Self":{level:2,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Concentration, 1 hour",components:"V,S",desc:"Change form: Aquatic Adaptation (breathe water), Change Appearance (new look), or Natural Weapons (1d6 + damage type unarmed)."},
  "Animal Messenger":{level:2,school:"Enchantment",castTime:"1 action",range:"30 ft",duration:"24 hours",components:"V,S,M",desc:"Tiny beast delivers a 25-word verbal message to a described recipient. Ritual."},
  "Arcane Lock":{level:2,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"Until dispelled",components:"V,S,M",desc:"Lock a closed door, window, or container magically. +10 to break/pick DC. Knock suppresses for 10 min."},
  "Augury":{level:2,school:"Divination",castTime:"1 minute",range:"Self",duration:"Instantaneous",components:"V,S,M",desc:"Learn if an action within 30 minutes brings Weal, Woe, Both, or Nothing. Ritual."},
  "Barkskin":{level:2,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Target's AC can't be less than 16."},
  "Beast Sense":{level:2,school:"Divination",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"S",desc:"See through a willing beast's eyes and hear what it hears. Ritual."},
  "Blindness/Deafness":{level:2,school:"Necromancy",castTime:"1 action",range:"30 ft",duration:"1 minute",components:"V",desc:"CON save or blinded or deafened. Repeats save at end of each turn. At Higher Levels: +1 target per slot above 2nd.",save:"con"},
  "Blur":{level:2,school:"Illusion",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V",desc:"Attackers have disadvantage against you (unless they don't rely on sight)."},
  "Calm Emotions":{level:2,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"Each humanoid in 20-ft radius: CHA save or suppress charm/fright, or become indifferent to designated creatures.",save:"cha"},
  "Cloud of Daggers":{level:2,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"5-ft cube of whirling daggers. Entering or starting turn there: 4d4 slashing. At Higher Levels: +2d4 per slot above 2nd.",attackRoll:true},
  "Continual Flame":{level:2,school:"Evocation",castTime:"1 action",range:"Touch",duration:"Until dispelled",components:"V,S,M",desc:"Torch-equivalent flame on an object. No heat, doesn't use oxygen. Can be covered but not smothered."},
  "Cordon of Arrows":{level:2,school:"Transmutation",castTime:"1 action",range:"5 ft",duration:"8 hours",components:"V,S,M",desc:"Plant 4 arrows. Creature within 30 ft: DEX save or 1d6 piercing (arrow consumed). At Higher Levels: +2 arrows per slot above 2nd.",save:"dex"},
  "Crown of Madness":{level:2,school:"Enchantment",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"WIS save or charmed: must attack creature you designate each turn. Repeats save at end of each turn.",save:"wis"},
  "Darkness":{level:2,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Concentration, 10 minutes",components:"V,M",desc:"15-ft radius magical darkness. Darkvision can't penetrate. Extinguishes light spells of 2nd level or lower."},
  "Darkvision":{level:2,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"8 hours",components:"V,S,M",desc:"Touch a willing creature. Gains darkvision 60 ft."},
  "Detect Thoughts":{level:2,school:"Divination",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Read surface thoughts within 30 ft. Probe deeper: WIS save or read memories. Target knows you probed on success.",save:"wis"},
  "Dust Devil":{level:2,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"5-ft cube dust devil. STR save or 1d8 bludgeoning + pushed 10 ft. Move 30 ft/turn. At Higher Levels: +1d8 per slot above 2nd."},
  "Earthbind":{level:2,school:"Transmutation",castTime:"1 action",range:"300 ft",duration:"Concentration, 1 minute",components:"V",desc:"STR save or flying creature's fly speed drops to 0 and falls at 60 ft/round."},
  "Enhance Ability":{level:2,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Grant advantage on one ability score's checks (Bear's Endurance, Bull's Strength, Cat's Grace, Eagle's Splendor, Fox's Cunning, or Owl's Wisdom). At Higher Levels: +1 target per slot above 2nd."},
  "Enlarge/Reduce":{level:2,school:"Transmutation",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"CON save or creature doubles in size (+1d4 damage, advantage STR) or halves (-1d4, disadvantage STR).",save:"con"},
  "Enthrall":{level:2,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"1 minute",components:"V,S",desc:"WIS save or creature is distracted by you; disadvantage on Perception to notice others.",save:"wis"},
  "Find Steed":{level:2,school:"Conjuration",castTime:"10 minutes",range:"30 ft",duration:"Instantaneous",components:"V,S",desc:"Summon a loyal mount (warhorse, pony, camel, elk, mastiff). Telepathic bond. Share spell slots to cast on steed."},
  "Find Traps":{level:2,school:"Divination",castTime:"1 action",range:"120 ft",duration:"Instantaneous",components:"V,S",desc:"Sense whether any traps are present within range and the general nature of the danger."},
  "Flame Blade":{level:2,school:"Evocation",castTime:"1 bonus action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Fiery blade in your hand. Melee spell attack: 3d6 fire. Sheds 10-ft light. At Higher Levels: +1d6 per 2 slot levels above 2nd.",attackRoll:true},
  "Flaming Sphere":{level:2,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"5-ft sphere of fire. DEX save or 2d6 fire. Move 30 ft/bonus action. Sheds 20-ft bright light. At Higher Levels: +1d6 per slot above 2nd.",save:"dex"},
  "Gentle Repose":{level:2,school:"Necromancy",castTime:"1 action",range:"Touch",duration:"10 days",components:"V,S,M",desc:"Protect corpse from decay; prevent it rising undead. Extends time for resurrection spells. Ritual."},
  "Gust of Wind":{level:2,school:"Evocation",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S,M",desc:"60-ft × 10-ft gale. STR save or pushed 15 ft. 4 ft of movement per 1 ft into wind. Disperses gases.",save:"str"},
  "Heat Metal":{level:2,school:"Transmutation",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Metal object heats red-hot. Holder: 2d8 fire/turn; CON save or drop. Bonus action to reheat. At Higher Levels: +1d8 per slot above 2nd.",save:"con"},
  "Invisibility":{level:2,school:"Illusion",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Willing creature invisible until it attacks or casts. At Higher Levels: +1 target per slot above 2nd."},
  "Knock":{level:2,school:"Transmutation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V",desc:"Open a locked door, window, or container (mundane or magical, up to 3 locks). Audible 300 ft."},
  "Lesser Restoration":{level:2,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V,S",desc:"End one disease OR one condition (blinded, deafened, paralyzed, or poisoned)."},
  "Levitate":{level:2,school:"Transmutation",castTime:"1 action",range:"60 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"CON save (unwilling) or target rises up to 20 ft and stays there. Move 20 ft/bonus action.",save:"con"},
  "Locate Animals or Plants":{level:2,school:"Divination",castTime:"1 action",range:"Self",duration:"Instantaneous",components:"V,S,M",desc:"Know direction and distance to nearest named beast or plant within 5 miles. Ritual."},
  "Locate Object":{level:2,school:"Divination",castTime:"1 action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Know direction to specific or familiar object within 1000 ft. Lead blocks signal."},
  "Magic Mouth":{level:2,school:"Illusion",castTime:"1 minute",range:"30 ft",duration:"Until dispelled",components:"V,S,M",desc:"Inscribe a 25-word message; mouth appears and speaks when trigger condition is met. Ritual."},
  "Magic Weapon":{level:2,school:"Transmutation",castTime:"1 bonus action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S",desc:"Nonmagical weapon becomes magical +1. At Higher Levels: +2 at 4th, +3 at 6th."},
  "Melf's Acid Arrow":{level:2,school:"Evocation",castTime:"1 action",range:"90 ft",duration:"Instantaneous",components:"V,S,M",desc:"Ranged attack: 4d4 acid + 2d4 next turn. Miss: 2d4 only. At Higher Levels: +1d4 each per slot above 2nd.",attackRoll:true},
  "Mirror Image":{level:2,school:"Illusion",castTime:"1 action",range:"Self",duration:"1 minute",components:"V,S",desc:"3 illusory duplicates. When attacked, duplicate may absorb the hit (roll d20: 6+ with 3 copies, 8+ with 2, 11+ with 1). Each destroyed when hit."},
  "Moonbeam":{level:2,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"5-ft radius column of pale light. CON save or 2d10 radiant (shapeshifters have disadvantage). Move 60 ft/action. At Higher Levels: +1d10 per slot above 2nd.",save:"con"},
  "Nystul's Magic Aura":{level:2,school:"Illusion",castTime:"1 action",range:"Touch",duration:"24 hours",components:"V,S,M",desc:"Change what detection spells (Detect Magic, Identify) reveal about a creature or object. Permanent with 30 days daily casting."},
  "Pass Without Trace":{level:2,school:"Abjuration",castTime:"1 action",range:"Self",duration:"Concentration, 1 hour",components:"V,S,M",desc:"+10 to Stealth for you and up to 10 companions. Can't be tracked nonmagically."},
  "Phantasmal Force":{level:2,school:"Illusion",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"INT save or creature experiences an illusion only it perceives. 1d6 psychic/turn. INV check to disbelieve.",attackRoll:true},
  "Prayer of Healing":{level:2,school:"Evocation",castTime:"10 minutes",range:"30 ft",duration:"Instantaneous",components:"V",desc:"Up to 6 creatures regain 2d8 + spellcasting mod HP. At Higher Levels: +1d8 per slot above 2nd."},
  "Protection from Poison":{level:2,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,S",desc:"Neutralize one poison; advantage on saves vs poison; resistance to poison damage."},
  "Pyrotechnics":{level:2,school:"Transmutation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"Nonmagical flame bursts into fireworks (CON save or blinded 1 round) or smothers into smoke cloud (heavily obscured 1 min)."},
  "Ray of Enfeeblement":{level:2,school:"Necromancy",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"Ranged attack: target deals half damage on STR-based weapon attacks. CON save at end of each turn to end.",attackRoll:true},
  "Rope Trick":{level:2,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,S,M",desc:"Rope rises into extradimensional space; up to 8 creatures can hide inside. Invisible from outside."},
  "Scorching Ray":{level:2,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Instantaneous",components:"V,S",desc:"Three ranged attacks, each 2d6 fire. At Higher Levels: +1 ray per slot above 2nd.",attackRoll:true},
  "See Invisibility":{level:2,school:"Divination",castTime:"1 action",range:"Self",duration:"1 hour",components:"V,S,M",desc:"See invisible creatures and objects. See into the Ethereal Plane (30 ft)."},
  "Shatter":{level:2,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S,M",desc:"CON save or 3d8 thunder in 10-ft sphere. Half on save. Crystal/metal/stone disadvantage. At Higher Levels: +1d8 per slot above 2nd.",save:"con"},
  "Silence":{level:2,school:"Illusion",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"20-ft radius sphere of total silence. No sound, immune to thunder, can't cast V spells. Ritual."},
  "Skywrite":{level:2,school:"Transmutation",castTime:"1 action",range:"1 mile",duration:"Concentration, 1 hour",components:"V,S",desc:"Up to 10 words form in clouds, visible 5 miles away. Ritual."},
  "Spider Climb":{level:2,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Willing creature walks on walls and ceilings; gains climbing speed equal to walking speed."},
  "Spike Growth":{level:2,school:"Transmutation",castTime:"1 action",range:"150 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"20-ft radius of spikes. Difficult terrain. 2d4 piercing per 5 ft moved through. Disguised as normal terrain.",save:"dex"},
  "Spiritual Weapon":{level:2,school:"Evocation",castTime:"1 bonus action",range:"60 ft",duration:"1 minute",components:"V,S",desc:"Floating weapon. Bonus action: move 20 ft + melee spell attack: 1d8 + spellcasting mod force. At Higher Levels: +1d8 per 2 slot levels above 2nd.",attackRoll:true},
  "Suggestion":{level:2,school:"Enchantment",castTime:"1 action",range:"30 ft",duration:"Concentration, 8 hours",components:"V,M",desc:"WIS save or follow a reasonable 1-2 sentence action. Ends if clearly harmful.",save:"wis"},
  "Warding Bond":{level:2,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,S,M",desc:"Target: +1 AC and saves, resistance to all damage. You take half their damage. Ends if you're 60 ft apart."},
  "Web":{level:2,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"20-ft cube of webs. Difficult terrain. DEX save or restrained; STR check to escape each turn. Flammable.",save:"dex"},
  "Zone of Truth":{level:2,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"10 minutes",components:"V,S",desc:"15-ft radius. CHA save or creature can't lie; must stay silent or tell truth. Knows it can't lie.",save:"cha"},

  // 3rd Level
  "Animate Dead":{level:3,school:"Necromancy",castTime:"1 minute",range:"10 ft",duration:"Instantaneous",components:"V,S,M",desc:"Create zombie or skeleton from a corpse. Obeys commands 24 hours; re-cast to maintain. At Higher Levels: +2 undead per slot above 3rd."},
  "Aura of Vitality":{level:3,school:"Evocation",castTime:"1 action",range:"Self (30 ft)",duration:"Concentration, 1 minute",components:"V",desc:"30-ft aura. Bonus action: heal one creature in aura for 2d6 HP."},
  "Beacon of Hope":{level:3,school:"Abjuration",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"Any number of creatures gain advantage on WIS saves and death saves; maximize healing received."},
  "Bestow Curse":{level:3,school:"Necromancy",castTime:"1 action",range:"Touch",duration:"Concentration, 1 minute",components:"V,S",desc:"WIS save or cursed: disadvantage on chosen ability, or attacks vs you have advantage, or lose action (WIS save), or +1d8 necrotic from your attacks. At Higher Levels: longer duration at 4th+; no concentration at 5th+.",save:"wis"},
  "Blink":{level:3,school:"Transmutation",castTime:"1 action",range:"Self",duration:"1 minute",components:"V,S",desc:"Roll d20 at end of each turn. 11+: vanish to Ethereal Plane until next turn start. Attackers 50% chance to miss."},
  "Call Lightning":{level:3,school:"Conjuration",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"Storm cloud 100 ft up. Action each turn: DEX save or 3d10 lightning (4d10 in storms). At Higher Levels: +1d10 per slot above 3rd.",save:"dex"},
  "Clairvoyance":{level:3,school:"Divination",castTime:"10 minutes",range:"1 mile",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Invisible sensor at known location within 1 mile. See or hear through it. Switch senses as action."},
  "Conjure Animals":{level:3,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"Summon beasts: CR 2 (×1), CR 1 (×2), CR 1/2 (×4), or CR 1/4 (×8). At Higher Levels: double quantities per 2 slot levels above 3rd."},
  "Conjure Barrage":{level:3,school:"Conjuration",castTime:"1 action",range:"Self (60-ft cone)",duration:"Instantaneous",components:"V,S,M",desc:"60-ft cone of copies of your thrown/ranged weapon. DEX save or 3d8 same damage type. Half on save.",save:"dex"},
  "Crusader's Mantle":{level:3,school:"Evocation",castTime:"1 action",range:"Self (30 ft)",duration:"Concentration, 1 minute",components:"V",desc:"30-ft aura. Friendly creatures deal +1d4 radiant on weapon attacks."},
  "Daylight":{level:3,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"1 hour",components:"V,S",desc:"60-ft bright light (120-ft dim). Dispels darkness spells of 3rd level or lower. Counts as sunlight."},
  "Dispel Magic":{level:3,school:"Abjuration",castTime:"1 action",range:"120 ft",duration:"Instantaneous",components:"V,S",desc:"End spells of 3rd level or lower on target automatically. For 4th+: ability check DC = 10 + spell's level. At Higher Levels: auto-end up to slot level."},
  "Elemental Weapon":{level:3,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S",desc:"Nonmagical weapon becomes +1 and deals +1d4 chosen elemental damage. At Higher Levels: +2/+2d4 at 5th, +3/+3d4 at 7th."},
  "Fear":{level:3,school:"Illusion",castTime:"1 action",range:"Self (30-ft cone)",duration:"Concentration, 1 minute",components:"V,S,M",desc:"WIS save or frightened + drop items + must Dash away. Repeats save when out of sight.",save:"wis"},
  "Feign Death":{level:3,school:"Necromancy",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,S,M",desc:"Willing creature appears dead; blinded, incapacitated; resistant to all but psychic damage; disease/poison suspended. Ritual."},
  "Fireball":{level:3,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"20-ft radius explosion. DEX save or 8d6 fire, half on save. Spreads around corners. At Higher Levels: +1d6 per slot above 3rd.",save:"dex"},
  "Flame Arrows":{level:3,school:"Transmutation",castTime:"1 bonus action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S",desc:"Up to 12 pieces of ammunition deal +1d6 fire on hit. At Higher Levels: +2 pieces per slot above 3rd."},
  "Fly":{level:3,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Willing creature gains 60-ft fly speed. At Higher Levels: +1 target per slot above 3rd."},
  "Gaseous Form":{level:3,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Willing creature becomes hovering gas. Fly 10 ft, resistant to nonmagical damage. Can't attack. Fits through 1-inch gaps."},
  "Glyph of Warding":{level:3,school:"Abjuration",castTime:"1 hour",range:"Touch",duration:"Until triggered",components:"V,S,M",desc:"Inscribe triggered glyph: explosive (5d8 damage, 20-ft sphere) or spell glyph (store ≤3rd-level spell). At Higher Levels: store higher-level spell per slot.",save:"dex"},
  "Haste":{level:3,school:"Transmutation",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Target: double speed, +2 AC, advantage on DEX saves, extra action (limited). Lethargy 1 round after it ends."},
  "Hunger of Hadar":{level:3,school:"Conjuration",castTime:"1 action",range:"150 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"20-ft radius void sphere. Heavily obscured. Start of turn inside: 2d6 cold. End of turn inside: 2d6 acid.",save:"dex"},
  "Hypnotic Pattern":{level:3,school:"Illusion",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"S,M",desc:"30-ft cube of swirling colors. WIS save or charmed and incapacitated. Woken by damage or being shaken.",save:"wis"},
  "Leomund's Tiny Hut":{level:3,school:"Evocation",castTime:"1 minute",range:"Self (10-ft radius)",duration:"8 hours",components:"V,S,M",desc:"10-ft dome around you; up to 9 creatures inside. Outside is dark; inside conditions are creator's choice. Ritual."},
  "Lightning Arrow":{level:3,school:"Transmutation",castTime:"1 bonus action",range:"Self",duration:"Concentration, 1 minute",components:"V,S",desc:"Next ranged attack: 4d8 lightning instead of normal damage. All within 10 ft: 2d8 lightning (DEX save for half). At Higher Levels: +1d8 per 2 slots above 3rd.",save:"dex"},
  "Magic Circle":{level:3,school:"Abjuration",castTime:"1 minute",range:"10 ft",duration:"1 hour",components:"V,S,M",desc:"10-ft cylinder. Chosen creature type can't enter, can't use charms/fright/possession on those inside. At Higher Levels: +1 hour per slot above 3rd.",save:"cha"},
  "Major Image":{level:3,school:"Illusion",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"20-ft cube illusion with sight, sound, smell, temperature. At 6th+ slot: permanent.",save:"int"},
  "Mass Healing Word":{level:3,school:"Evocation",castTime:"1 bonus action",range:"60 ft",duration:"Instantaneous",components:"V",desc:"Up to 6 creatures each regain 1d4 + spellcasting mod HP. At Higher Levels: +1d4 per slot above 3rd."},
  "Meld into Stone":{level:3,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"8 hours",components:"V,S",desc:"Step into stone you touch. Sense surroundings; hear but can't see. Leave anytime. Ritual."},
  "Nondetection":{level:3,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"8 hours",components:"V,S,M",desc:"Target can't be targeted by divination magic or perceived through scrying sensors."},
  "Phantom Steed":{level:3,school:"Illusion",castTime:"1 minute",range:"30 ft",duration:"1 hour",components:"V,S",desc:"Horse-like creature with speed 100 ft; only you can ride it. Ritual."},
  "Plant Growth":{level:3,school:"Transmutation",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S",desc:"Immediate: 100-ft radius overgrown difficult terrain (4× movement cost). Ritual: enrich 0.5-mile radius for a year."},
  "Protection from Energy":{level:3,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S",desc:"Resistance to acid, cold, fire, lightning, or thunder (your choice)."},
  "Remove Curse":{level:3,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V,S",desc:"End all curses on target. If attuned to a cursed item, attunement ends."},
  "Sending":{level:3,school:"Evocation",castTime:"1 action",range:"Unlimited",duration:"1 round",components:"V,S,M",desc:"Send a 25-word message to a known creature anywhere. It can reply with 25 words immediately."},
  "Sleet Storm":{level:3,school:"Conjuration",castTime:"1 action",range:"150 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"20-ft radius, 40-ft cylinder. Difficult terrain, heavily obscured. DEX save or prone when entering or starting turn there. Concentration saves DC 10.",save:"dex"},
  "Slow":{level:3,school:"Transmutation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"WIS save or up to 6 targets: half speed, -2 AC and DEX saves, no multiattack, alternates action/no-action, no reactions. Repeats save at end of each turn.",save:"wis"},
  "Speak with Dead":{level:3,school:"Necromancy",castTime:"1 action",range:"10 ft",duration:"10 minutes",components:"V,S,M",desc:"Corpse answers up to 5 questions based on knowledge from life. Not charmed; may lie."},
  "Speak with Plants":{level:3,school:"Transmutation",castTime:"1 action",range:"Self (30 ft)",duration:"10 minutes",components:"V,S",desc:"Plants within 30 ft answer questions about the past day. Command overgrown plants."},
  "Spirit Guardians":{level:3,school:"Conjuration",castTime:"1 action",range:"Self (15 ft)",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"15-ft aura. Enemy speed halved; WIS save or 3d8 radiant/necrotic, half on save. At Higher Levels: +1d8 per slot above 3rd.",save:"wis"},
  "Spirit Shroud":{level:3,school:"Necromancy",castTime:"1 bonus action",range:"Self",duration:"Concentration, 1 minute",components:"V,S",desc:"Your attacks deal +1d8 (necrotic, radiant, or cold). Damaged creatures can't regain HP until next turn; speed -10 ft. At Higher Levels: +1d8 per 2 slots above 3rd."},
  "Stinking Cloud":{level:3,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"20-ft radius yellow cloud, heavily obscured. CON save at start of each turn inside or lose action retching.",save:"con"},
  "Summon Fey":{level:3,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon a fey spirit (fuming, mirthful, or tricksy form). Uses your spell attack/DC. At Higher Levels: +1d6 damage per slot above 3rd."},
  "Summon Lesser Demons":{level:3,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon 2 demons CR ≤1, 4 demons CR ≤1/2, or 8 demons CR ≤1/4. They attack everything. At Higher Levels: double at 5th, triple at 7th."},
  "Tongues":{level:3,school:"Divination",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,M",desc:"Target understands any spoken language and is understood by any creature that knows a language."},
  "Vampiric Touch":{level:3,school:"Necromancy",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S",desc:"Melee spell attack: 3d6 necrotic. Regain HP = half damage dealt. At Higher Levels: +1d6 per slot above 3rd.",attackRoll:true},
  "Water Breathing":{level:3,school:"Transmutation",castTime:"1 action",range:"30 ft",duration:"24 hours",components:"V,S,M",desc:"Up to 10 willing creatures breathe water. Ritual."},
  "Water Walk":{level:3,school:"Transmutation",castTime:"1 action",range:"30 ft",duration:"1 hour",components:"V,S,M",desc:"Up to 10 creatures walk on liquid as if solid ground. Ritual."},
  "Wind Wall":{level:3,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Wall of wind 50 × 15 × 1 ft. STR save or 3d8 bludgeoning + pushed up. Blocks gases, disadvantage on ranged attacks through.",save:"str"},

  // 4th Level
  "Arcane Eye":{level:4,school:"Divination",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Invisible magic eye; move it 30 ft/round (your action). See through it with darkvision 30 ft. Fits through 1-inch holes."},
  "Aura of Life":{level:4,school:"Abjuration",castTime:"1 action",range:"Self (30 ft)",duration:"Concentration, 10 minutes",components:"V",desc:"30-ft aura. Friendly creatures: resistance to necrotic damage; regain 1 HP at start of each turn if at 0 HP."},
  "Aura of Purity":{level:4,school:"Abjuration",castTime:"1 action",range:"Self (30 ft)",duration:"Concentration, 10 minutes",components:"V",desc:"30-ft aura. Friendly creatures: can't be diseased; resistance to poison; advantage on saves vs blinded/charmed/deafened/frightened/paralyzed/poisoned/stunned."},
  "Banishment":{level:4,school:"Abjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"CHA save or banished. Native creature returns at 0 HP if spell ends. Non-native stays permanently if held 1 minute. At Higher Levels: +1 target per slot above 4th.",save:"cha"},
  "Blight":{level:4,school:"Necromancy",castTime:"1 action",range:"30 ft",duration:"Instantaneous",components:"V,S",desc:"CON save or 8d8 necrotic. Half on save. Plants: max damage, no save. At Higher Levels: +1d8 per slot above 4th.",save:"con"},
  "Charm Monster":{level:4,school:"Enchantment",castTime:"1 action",range:"30 ft",duration:"1 hour",components:"V,S",desc:"WIS save or any creature charmed. Ends if harmed. Knows it was charmed after. At Higher Levels: +1 target per slot above 4th."},
  "Confusion":{level:4,school:"Enchantment",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"WIS save or confused (roll d10 each turn for behavior). 10-ft radius. At Higher Levels: +5-ft radius per slot above 4th.",save:"wis"},
  "Conjure Minor Elementals":{level:4,school:"Conjuration",castTime:"1 minute",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"Summon elementals: CR 2 (×1), CR 1 (×2), CR 1/2 (×4), or CR 1/4 (×8). At Higher Levels: doubles at 6th, 8th."},
  "Conjure Woodland Beings":{level:4,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon fey: CR 2 (×1), CR 1 (×2), CR 1/2 (×4), or CR 1/4 (×8).",save:"wis"},
  "Control Water":{level:4,school:"Transmutation",castTime:"1 action",range:"300 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Control water in 100-ft cube: Flood, Part Water, Redirect Flow, or Whirlpool (STR save or 2d8 bludgeoning).",save:"str"},
  "Death Ward":{level:4,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"8 hours",components:"V,S",desc:"First time target drops to 0 HP or is instantly killed, drops to 1 HP instead. Spell ends."},
  "Dimension Door":{level:4,school:"Conjuration",castTime:"1 action",range:"500 ft",duration:"Instantaneous",components:"V",desc:"Teleport up to 500 ft (seen, visualized, or described). Bring 1 willing creature. If destination occupied: 4d6 force, no teleport."},
  "Divination":{level:4,school:"Divination",castTime:"1 action",range:"Self",duration:"Instantaneous",components:"V,S,M",desc:"Divine guidance about event in 7 days: Weal, Woe, Both, or Nothing. Ritual."},
  "Dominate Beast":{level:4,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"WIS save or beast is charmed and under telepathic control. Repeats save when damaged. At Higher Levels: duration extends at 5th.",save:"wis"},
  "Elemental Bane":{level:4,school:"Transmutation",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"CON save or vulnerability to chosen elemental damage type. At Higher Levels: +1 target per slot above 4th."},
  "Fabricate":{level:4,school:"Transmutation",castTime:"10 minutes",range:"120 ft",duration:"Instantaneous",components:"V,S",desc:"Transform raw materials (10 cubic ft) into finished goods using proficient tools."},
  "Find Greater Steed":{level:4,school:"Conjuration",castTime:"10 minutes",range:"30 ft",duration:"Instantaneous",components:"V,S",desc:"Summon loyal mount (griffon, pegasus, peryton, dire wolf, rhinoceros, or saber-toothed tiger). Share spell slots."},
  "Fire Shield":{level:4,school:"Evocation",castTime:"1 action",range:"Self",duration:"10 minutes",components:"V,S,M",desc:"Warm shield (cold resistance, attacker 2d8 fire) or chill shield (fire resistance, attacker 2d8 cold)."},
  "Freedom of Movement":{level:4,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,S,M",desc:"Ignore difficult terrain; unaffected by movement-restricting spells; 5 ft to escape grapple; move freely underwater."},
  "Giant Insect":{level:4,school:"Transmutation",castTime:"1 action",range:"30 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"Transform up to 10 centipedes, 3 wasps, 5 beetles, or 1 spider into giant versions under your control."},
  "Grasping Vine":{level:4,school:"Conjuration",castTime:"1 bonus action",range:"30 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"Animated vine. Bonus action: DEX save or target pulled 20 ft toward vine.",save:"dex"},
  "Greater Invisibility":{level:4,school:"Illusion",castTime:"1 action",range:"Touch",duration:"Concentration, 1 minute",components:"V,S",desc:"Target invisible. Unlike Invisibility, doesn't end when attacking or casting."},
  "Guardian of Faith":{level:4,school:"Conjuration",castTime:"1 action",range:"30 ft",duration:"8 hours",components:"V",desc:"Large spectral guardian. Hostile creatures within 10 ft: DEX save or 20 radiant. Dissipates after 60 total damage.",save:"dex"},
  "Guardian of Nature":{level:4,school:"Transmutation",castTime:"1 bonus action",range:"Self",duration:"Concentration, 1 minute",components:"V",desc:"Primal Beast: advantage STR, +10 speed, darkvision 120 ft, +1d6 force melee. OR Great Tree: advantage CON/DEX saves + Perception, 10 temp HP, +1d6 force ranged."},
  "Hallucinatory Terrain":{level:4,school:"Illusion",castTime:"10 minutes",range:"300 ft",duration:"24 hours",components:"V,S,M",desc:"150-ft cube looks, sounds, smells like different natural terrain. Touch or INV check to disbelieve.",save:"int"},
  "Ice Storm":{level:4,school:"Evocation",castTime:"1 action",range:"300 ft",duration:"Instantaneous",components:"V,S,M",desc:"20-ft radius, 40-ft cylinder. DEX save or 2d8 bludgeoning + 4d6 cold. Ground becomes difficult terrain. At Higher Levels: +1d8 bludgeoning per slot above 4th.",save:"dex"},
  "Leomund's Secret Chest":{level:4,school:"Conjuration",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Banish chest to Ethereal Plane. Summon/dismiss as action while holding miniature replica."},
  "Locate Creature":{level:4,school:"Divination",castTime:"1 action",range:"Self",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Know direction to a known creature within 1000 ft. Running water blocks signal."},
  "Mordenkainen's Faithful Hound":{level:4,school:"Conjuration",castTime:"1 action",range:"30 ft",duration:"8 hours",components:"V,S,M",desc:"Invisible spectral hound guards a point. Barks at intruders (30 ft). Attacks enemies within 5 ft: +9 to hit, 4d8 piercing."},
  "Mordenkainen's Private Sanctum":{level:4,school:"Abjuration",castTime:"10 minutes",range:"120 ft",duration:"24 hours",components:"V,S,M",desc:"5-100 ft cube magical security: no teleporting in/out, scrying blocked, sounds can't pass. At Higher Levels: +100 ft per slot above 4th."},
  "Otiluke's Resilient Sphere":{level:4,school:"Evocation",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"DEX save or enclosed in 10-ft sphere of force. Immobile, immune to all damage, can't affect outside. STR check or Disintegrate to break.",save:"dex"},
  "Phantasmal Killer":{level:4,school:"Illusion",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"WIS save or frightened and 4d10 psychic/turn. Repeats save at end of each turn. At Higher Levels: +1d10 per slot above 4th.",save:"wis"},
  "Shadow of Moil":{level:4,school:"Necromancy",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Surrounded by shadows; heavily obscured from others. Creatures within 10 ft that hit you: 2d8 necrotic."},
  "Sickening Radiance":{level:4,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"30-ft radius dim sickly light. CON save at start of each turn inside: 4d10 radiant + 1 exhaustion level. Invisible creatures become visible."},
  "Stone Shape":{level:4,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Touch up to 5 cubic feet of stone. Form it into any shape; can create doors, hinges, or passageways."},
  "Stoneskin":{level:4,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Willing creature: resistance to nonmagical bludgeoning, piercing, and slashing damage."},
  "Storm Sphere":{level:4,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"20-ft radius sphere. Difficult terrain. Bonus action: lightning bolt (ranged attack) 4d6 lightning. Start of turn inside: STR save or 2d6 bludgeoning. At Higher Levels: +1d6 each type per slot above 4th."},
  "Summon Aberration":{level:4,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon aberrant spirit (beholderkin, slaad, or star spawn form). Uses your spell attack/DC. At Higher Levels: +1d6 damage per slot above 4th."},
  "Summon Construct":{level:4,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon construct spirit (clay, metal, or stone form). Uses your spell attack/DC. At Higher Levels: +1d8 damage per slot above 4th."},
  "Summon Elemental":{level:4,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon elemental spirit (air, earth, fire, or water form). At Higher Levels: +1d8 damage per slot above 4th."},
  "Summon Greater Demon":{level:4,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon demon of CR 5 or lower. CHA save each turn to obey; otherwise attacks nearest. At Higher Levels: CR +1 per slot above 4th."},
  "Vitriolic Sphere":{level:4,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"20-ft radius. DEX save or 10d4 acid + 5d4 acid at end of next turn. Half on save (no lingering). At Higher Levels: +2d4 each per slot above 4th.",save:"dex"},
  "Watery Sphere":{level:4,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"5-ft radius sphere of water. STR save or restrained; repeat save each turn. Move 30 ft/turn. Up to 4 Medium creatures restrained.",save:"str"},

  // 5th Level
  "Animate Objects":{level:5,school:"Transmutation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"Animate up to 10 nonmagical objects. Attack as bonus action. At Higher Levels: +2 objects per slot above 5th.",save:"dex"},
  "Antilife Shell":{level:5,school:"Abjuration",castTime:"1 action",range:"Self (10 ft)",duration:"Concentration, 1 hour",components:"V,S",desc:"10-ft barrier prevents beasts and living creatures from entering. Ends if you attack them."},
  "Awaken":{level:5,school:"Transmutation",castTime:"8 hours",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Touch a beast or plant. Gains INT 10 and speech. Charmed for 30 days, then free. Permanent.",save:"int"},
  "Banishing Smite":{level:5,school:"Abjuration",castTime:"1 bonus action",range:"Self",duration:"Concentration, 1 minute",components:"V",desc:"Next hit: +5d10 force. If target drops to ≤50 HP: banished to demiplane until spell ends.",save:"cha"},
  "Bigby's Hand":{level:5,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Spectral hand. Action to use: Clenched Fist (4d8 force), Forceful Hand (push), Grasping Hand (grapple), or Interposing Hand (+4 AC). At Higher Levels: +2d8 or +1d8 per slot above 5th.",save:"str"},
  "Circle of Power":{level:5,school:"Abjuration",castTime:"1 action",range:"Self (30 ft)",duration:"Concentration, 10 minutes",components:"V",desc:"30-ft aura. Friendly creatures: advantage on saves vs spells and magical effects; success = no damage instead of half."},
  "Cloudkill":{level:5,school:"Conjuration",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"20-ft radius poisonous fog. CON save or 5d8 poison, half on save. Moves 10 ft/round. Heavily obscured. At Higher Levels: +1d8 per slot above 5th.",save:"con"},
  "Commune":{level:5,school:"Divination",castTime:"1 minute",range:"Self",duration:"1 minute",components:"V,S,M",desc:"Contact deity/agent. Ask up to 3 yes/no questions; receive truthful answers. Ritual."},
  "Commune with Nature":{level:5,school:"Divination",castTime:"1 minute",range:"Self",duration:"Instantaneous",components:"V,S",desc:"Gain knowledge of surrounding land (3 miles; 300 ft underground): terrain, water, creatures, structures, plants. Up to 3 facts. Ritual."},
  "Cone of Cold":{level:5,school:"Evocation",castTime:"1 action",range:"Self (60-ft cone)",duration:"Instantaneous",components:"V,S,M",desc:"60-ft cone. CON save or 8d8 cold. Half on save. Killed creatures become frozen statues. At Higher Levels: +1d8 per slot above 5th.",save:"con"},
  "Conjure Elemental":{level:5,school:"Conjuration",castTime:"1 minute",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon elemental of CR 5 or lower. If concentration breaks: hostile 1 hour. At Higher Levels: CR +1 per slot above 5th."},
  "Conjure Volley":{level:5,school:"Conjuration",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"40-ft radius, 20-ft-high cylinder. DEX save or 8d8 of ammunition's damage type. Half on save.",save:"dex"},
  "Contact Other Plane":{level:5,school:"Divination",castTime:"1 minute",range:"Self",duration:"1 minute",components:"V",desc:"Contact planar entity. Ask 5 yes/no questions. INT save DC 15 or 6d6 psychic + insanity. Ritual.",save:"int"},
  "Contagion":{level:5,school:"Necromancy",castTime:"1 action",range:"Touch",duration:"7 days",components:"V,S",desc:"Melee spell attack or hit: CON save 3 times. Three failures: diseased for 7 days (choose: Blinding Sickness, Filth Fever, Flesh Rot, Mindfire, Seizure, or Slimy Doom).",save:"con"},
  "Control Winds":{level:5,school:"Transmutation",castTime:"1 action",range:"300 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"100-ft cube wind control: Gusts (disadvantage on ranged attacks), Downdraft (flying speed halved), or Updraft (jump tripled). Change effect each turn.",save:"str"},
  "Creation":{level:5,school:"Illusion",castTime:"1 minute",range:"30 ft",duration:"Special",components:"V,S,M",desc:"Create nonliving vegetable-matter object up to 5 cubic ft. Lasts 1 day. At Higher Levels: +5 ft per 2 slots above 5th; mineral matter at 7th+."},
  "Dawn":{level:5,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"30-ft radius, 40-ft cylinder of sunlight. CON save or 4d10 radiant/turn. Move 60 ft/action."},
  "Destructive Wave":{level:5,school:"Evocation",castTime:"1 action",range:"Self (30 ft)",duration:"Instantaneous",components:"V",desc:"30-ft radius burst. CON save or 5d6 thunder + 5d6 radiant/necrotic and knocked prone. Half on save.",save:"con"},
  "Dispel Evil and Good":{level:5,school:"Abjuration",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Aura prevents chosen creature types from touching you. Action: cancel charm/fright/possession, or banish extraplanar creature (CHA save).",save:"wis"},
  "Dominate Person":{level:5,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"WIS save or humanoid charmed and under telepathic control. Repeats save when damaged. At Higher Levels: duration extends at 6th+.",save:"wis"},
  "Dream":{level:5,school:"Illusion",castTime:"1 minute",range:"Special",duration:"8 hours",components:"V,S,M",desc:"Enter a known creature's dream. Shape it. Peaceful: 2d6 HP. Nightmare: WIS save or no long rest benefit + 3d6 psychic."},
  "Far Step":{level:5,school:"Conjuration",castTime:"1 bonus action",range:"Self",duration:"Concentration, 1 minute",components:"V",desc:"Teleport up to 60 ft to visible space. Bonus action each turn to teleport again."},
  "Flame Strike":{level:5,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S,M",desc:"10-ft radius, 40-ft column. DEX save or 4d6 fire + 4d6 radiant. Half on save. At Higher Levels: +1d6 of each per slot above 5th.",save:"dex"},
  "Geas":{level:5,school:"Enchantment",castTime:"1 minute",range:"60 ft",duration:"30 days",components:"V",desc:"WIS save or compelled to carry out/avoid an activity. 5d10 psychic if it acts against geas. At Higher Levels: 1 year at 7th; permanent at 9th.",save:"wis"},
  "Greater Restoration":{level:5,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Remove charmed/petrified/cursed; reduce exhaustion by 1; or restore one ability score or HP maximum reduced by magic."},
  "Hallow":{level:5,school:"Evocation",castTime:"24 hours",range:"Touch",duration:"Until dispelled",components:"V,S,M",desc:"Hallow 60-ft radius. Chosen creature types: can't enter, can't charm/fright/possess those inside. Bind one extra effect.",save:"wis"},
  "Hold Monster":{level:5,school:"Enchantment",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"WIS save or any creature paralyzed. Repeats save at end of each turn. At Higher Levels: +1 target per slot above 5th.",save:"wis"},
  "Holy Weapon":{level:5,school:"Evocation",castTime:"1 bonus action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S",desc:"Weapon: +2d8 radiant on hit; crit: +4d8 radiant. Bonus action: dismiss to flare 30-ft light, WIS save or blinded 1 min."},
  "Immolation":{level:5,school:"Evocation",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 minute",components:"V",desc:"DEX save or 8d6 fire + burns for 4d6/round. Half on save (no burning). CON save at end of each turn to stop burning.",save:"dex"},
  "Infernal Calling":{level:5,school:"Conjuration",castTime:"1 minute",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon devil of CR 6 or lower. Not automatically loyal; use Intimidation/Persuasion. At Higher Levels: CR +2 per slot above 5th."},
  "Insect Plague":{level:5,school:"Conjuration",castTime:"1 action",range:"300 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"20-ft radius biting locusts. Lightly obscured. CON save or 4d10 piercing. Half on save. At Higher Levels: +1d10 per slot above 5th.",save:"con"},
  "Jallarzi's Storm of Radiance":{level:5,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"30-ft radius, 40-ft column. CON save or 2d10 lightning + 2d10 radiant and can't cast spells with V component. Half on save. At Higher Levels: +1d10 each per slot above 5th."},
  "Legend Lore":{level:5,school:"Divination",castTime:"10 minutes",range:"Self",duration:"Instantaneous",components:"V,S,M",desc:"Learn lore about a legendary person, place, or object. DM shares available information."},
  "Maelstrom":{level:5,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"30-ft radius, 5-ft deep water vortex. Difficult terrain. STR save at start of turn or pulled 10 ft + 6d6 bludgeoning. Half on save.",save:"str"},
  "Mass Cure Wounds":{level:5,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"Up to 6 creatures in 30-ft radius each regain 3d8 + spellcasting mod HP. At Higher Levels: +1d8 per slot above 5th."},
  "Modify Memory":{level:5,school:"Enchantment",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"WIS save or charmed/incapacitated. Replace up to 10 min of memory from past 24 hours. At Higher Levels: farther back in time per slot above 5th.",save:"wis"},
  "Negative Energy Flood":{level:5,school:"Necromancy",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,M",desc:"WIS save or 5d12 necrotic. If it kills a humanoid, it rises as zombie permanently under your control."},
  "Planar Binding":{level:5,school:"Abjuration",castTime:"1 hour",range:"60 ft",duration:"24 hours",components:"V,S,M",desc:"CHA save or summoned extraplanar creature bound to serve 24 hours. At Higher Levels: 10 days at 6th; 30 days at 7th; 180 days at 8th; 1 year at 9th.",save:"cha"},
  "Raise Dead":{level:5,school:"Necromancy",castTime:"1 hour",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Return dead creature (≤10 days) to life at 1 HP. -4 penalty to all d20 rolls; -1 penalty removed per long rest."},
  "Rary's Telepathic Bond":{level:5,school:"Divination",castTime:"1 action",range:"30 ft",duration:"1 hour",components:"V,S,M",desc:"Up to 8 willing creatures communicate telepathically regardless of language. Ritual."},
  "Reincarnate":{level:5,school:"Transmutation",castTime:"1 hour",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Touch dead creature (≤10 days). Soul returns in new body (random race, d100). Full HP of new form."},
  "Scrying":{level:5,school:"Divination",castTime:"10 minutes",range:"Self",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"WIS save (modified by familiarity) or observe target anywhere. Invisible sensor appears near target.",save:"wis"},
  "Seeming":{level:5,school:"Illusion",castTime:"1 action",range:"30 ft",duration:"8 hours",components:"V,S",desc:"Disguise any number of creatures as different people. INV check vs spell save DC to disbelieve.",save:"wis"},
  "Skill Empowerment":{level:5,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Concentration, 1 hour",components:"V,S",desc:"Grant expertise (double proficiency) in one skill the creature is already proficient with."},
  "Steel Wind Strike":{level:5,school:"Conjuration",castTime:"1 action",range:"30 ft",duration:"Instantaneous",components:"S,M",desc:"Melee spell attack (no OA) against up to 5 creatures within 30 ft: 6d10 force each. Teleport to one target's space.",attackRoll:true},
  "Summon Celestial":{level:5,school:"Conjuration",castTime:"1 action",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon celestial spirit (avenger or defender form). Uses your spell attack/DC. At Higher Levels: +1d8 damage per slot above 5th."},
  "Summon Draconic Spirit":{level:5,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"Summon draconic spirit (chromatic, gem, or metallic). Large dragon, fly/swim speed. At Higher Levels: +2 AC, +1d6 damage per slot above 5th."},
  "Swift Quiver":{level:5,school:"Transmutation",castTime:"1 bonus action",range:"Touch",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Quiver magically produces ammunition. Bonus action: make two ranged attacks."},
  "Synaptic Static":{level:5,school:"Enchantment",castTime:"1 action",range:"120 ft",duration:"Instantaneous",components:"V,S",desc:"20-ft radius sphere. INT save or 8d6 psychic. On fail: subtract 1d6 from attack rolls, ability checks, and concentration saves for 1 minute. Repeat save at end of each turn."},
  "Telekinesis":{level:5,school:"Transmutation",castTime:"1 action",range:"60 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"Move object up to 1000 lbs up to 30 ft/turn. Grapple creature: STR vs spell save DC; move up to 30 ft."},
  "Teleportation Circle":{level:5,school:"Conjuration",castTime:"1 minute",range:"10 ft",duration:"1 round",components:"V,M",desc:"Draw a circle; teleport up to 9 creatures to a permanent circle whose sigil sequence you know."},
  "Tree Stride":{level:5,school:"Conjuration",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S",desc:"Once per turn, enter a tree and exit from another of the same species within 500 ft (costs 60 ft of movement)."},
  "Wall of Force":{level:5,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Invisible wall of force (up to 10 panels of 10 × 10 ft). Immune to all damage. Nothing passes through. Disintegrate destroys it."},
  "Wall of Light":{level:5,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"60 × 10 × 5-ft wall of brilliant light. Heavily obscured side. CON save to look at: blinded. Pass through: 4d8 radiant. Bonus action: 4d8 radiant ray (ranged attack). At Higher Levels: +1d8 per slot above 5th."},
  "Wrath of Nature":{level:5,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"60-ft cube: rocks (DEX save vs 3d8 bludgeoning), trees (DEX save vs 4d6 slashing), roots (STR save vs restrained), obscuring grass. Direct each effect as action.",save:"dex"},

  // 6th Level
  "Arcane Gate":{level:6,school:"Conjuration",castTime:"1 action",range:"500 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"Two linked portals (10-ft diameter). Any creature can pass through either end."},
  "Blade Barrier":{level:6,school:"Evocation",castTime:"1 action",range:"90 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"Wall of whirling blades (100 × 20 × 5 ft or 60-ft ring). DEX save or 6d10 slashing. Difficult terrain.",save:"dex"},
  "Chain Lightning":{level:6,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"Primary target: DEX save or 10d8 lightning. Bolt chains to up to 3 others (30 ft): DEX save or 10d8 each. At Higher Levels: +1 chain target per slot above 6th.",save:"dex"},
  "Circle of Death":{level:6,school:"Necromancy",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"60-ft radius sphere. CON save or 8d6 necrotic. Half on save. At Higher Levels: +2d6 per slot above 6th.",save:"con"},
  "Conjure Fey":{level:6,school:"Conjuration",castTime:"1 minute",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"Summon fey creature of CR 6 or lower. If concentration breaks, may become hostile. At Higher Levels: CR +1 per slot above 6th.",save:"wis"},
  "Contingency":{level:6,school:"Evocation",castTime:"10 minutes",range:"Self",duration:"10 days",components:"V,S,M",desc:"Cast a spell of ≤5th level with Contingency. It triggers automatically when your specified conditions are met."},
  "Create Undead":{level:6,school:"Necromancy",castTime:"1 minute",range:"10 ft",duration:"Instantaneous",components:"V,S,M",desc:"Create up to 3 ghouls (at night) from corpses. Obey for 24 hours. At Higher Levels: ghast at 7th, wight at 8th, mummy at 9th."},
  "Danse Macabre":{level:6,school:"Necromancy",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"Animate up to 5 humanoid corpses as zombies or skeletons. Add CHA mod to their attacks and damage. At Higher Levels: +2 undead per slot above 6th."},
  "Drawmij's Instant Summons":{level:6,school:"Conjuration",castTime:"1 minute",range:"Touch",duration:"Until dispelled",components:"V,S,M",desc:"Inscribe item (≤10 lbs) with sapphire. Say command word: item teleports to your hand from anywhere. Ritual."},
  "Eyebite":{level:6,school:"Necromancy",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S",desc:"Each turn, choose one creature within 60 ft. WIS save: Asleep (incapacitated until shaken), Panicked (frightened, must flee), or Sickened (disadvantage on attacks/checks).",save:"wis"},
  "Find the Path":{level:6,school:"Divination",castTime:"1 minute",range:"Self",duration:"Concentration, 1 day",components:"V,S,M",desc:"Know shortest physical route to a named location on the same plane. Sense direction and distance."},
  "Flesh to Stone":{level:6,school:"Transmutation",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"CON save × 3 times (3 fails = restrained, then permanently petrified). Greater Restoration ends it.",save:"con"},
  "Forbiddance":{level:6,school:"Abjuration",castTime:"10 minutes",range:"Touch",duration:"1 day",components:"V,S,M",desc:"Hallow 40,000 sq ft, 30 ft tall. Blocks teleportation/planar travel. Chosen creature types: 5d10 radiant or necrotic on entry. Ritual; permanent with 30 days of daily casting.",save:"wis"},
  "Globe of Invulnerability":{level:6,school:"Abjuration",castTime:"1 action",range:"Self (10 ft)",duration:"Concentration, 1 minute",components:"V,S,M",desc:"10-ft sphere: spells of ≤5th level from outside can't affect creatures inside. At Higher Levels: protects vs spells up to slot level -1."},
  "Glibness":{level:6,school:"Transmutation",castTime:"1 action",range:"Self",duration:"1 hour",components:"V",desc:"CHA checks: replace roll with 15. Magic can't detect your lies."},
  "Guards and Wards":{level:6,school:"Abjuration",castTime:"10 minutes",range:"Touch",duration:"24 hours",components:"V,S,M",desc:"Ward up to 2500 sq ft: doors lock, fog in corridors, stairs become slides, illusions appear at intersections."},
  "Harm":{level:6,school:"Necromancy",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"CON save or take 14d6 necrotic; max HP reduced by same amount until long rest. Half on save (no HP max reduction).",save:"con"},
  "Heal":{level:6,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"Restore 70 HP. End blindness, deafness, and any disease. At Higher Levels: +10 HP per slot above 6th."},
  "Investiture of Flame":{level:6,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S",desc:"Flames surround you. Immune to fire; resist cold. Shed 30-ft light. Adjacent creatures: 1d10 fire/turn.",save:"dex"},
  "Investiture of Ice":{level:6,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S",desc:"Resist cold and fire. Walking speed 10 ft. Freeze terrain within 60 ft. DEX save for creatures moving through: 4d6 cold.",save:"con"},
  "Investiture of Stone":{level:6,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S",desc:"Resistance to nonmagical bludgeoning/piercing/slashing. Move through stone/earth as difficult terrain."},
  "Investiture of Wind":{level:6,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S",desc:"Fly 60 ft. Ranged attacks vs you have disadvantage. Action: 15-ft-wide line, STR save or 2d6 bludgeoning + pushed 10 ft.",save:"str"},
  "Magic Jar":{level:6,school:"Necromancy",castTime:"1 minute",range:"Self",duration:"Until dispelled",components:"V,S,M",desc:"Soul enters gem. Project soul to possess humanoid within 100 ft (CHA save). Swap between original body and possessed body.",save:"cha"},
  "Mass Suggestion":{level:6,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"24 hours",components:"V,M",desc:"WIS save or up to 12 creatures follow a reasonable suggestion. At Higher Levels: 10 days at 7th; 30 days at 8th; 1 year at 9th.",save:"wis"},
  "Mental Prison":{level:6,school:"Illusion",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"S",desc:"INT save or trapped in illusory environment with total cover. Breaking free or being teleported: 10d10 psychic."},
  "Mirage Arcane":{level:6,school:"Illusion",castTime:"10 minutes",range:"Sight",duration:"10 days",components:"V,S",desc:"Transform up to 1 square mile of terrain. Physical interaction is real. INV vs spell save DC to see illusion.",save:"int"},
  "Move Earth":{level:6,school:"Transmutation",castTime:"1 action",range:"120 ft",duration:"Concentration, 2 hours",components:"V,S,M",desc:"Reshape dirt/sand/clay/gravel in 40-ft cube by up to 10 ft. Can't move rock."},
  "Otto's Irresistible Dance":{level:6,school:"Enchantment",castTime:"1 action",range:"30 ft",duration:"Concentration, 1 minute",components:"V",desc:"WIS save or target must dance: can't take actions/bonus actions other than dancing; attacks vs it have advantage; disadvantage on DEX saves. Repeat save each turn.",save:"wis"},
  "Planar Ally":{level:6,school:"Conjuration",castTime:"10 minutes",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"Request aid from a deity. A celestial, elemental, or fiend appears and serves for an appropriate price (DM discretion)."},
  "Primordial Ward":{level:6,school:"Abjuration",castTime:"1 action",range:"Self",duration:"Concentration, 1 minute",components:"V,S",desc:"Advantage on saves vs elemental spells. When you fail one: spell ends and you're immune to that damage type for 5 minutes."},
  "Programmed Illusion":{level:6,school:"Illusion",castTime:"1 action",range:"120 ft",duration:"Until dispelled",components:"V,S,M",desc:"Create an illusion that activates when trigger conditions are met. Lasts 5 minutes each activation; resets after 24 hours.",save:"int"},
  "Scatter":{level:6,school:"Conjuration",castTime:"1 action",range:"30 ft",duration:"Instantaneous",components:"V",desc:"WIS save or up to 5 creatures teleported to unoccupied spaces within 120 ft of your choosing.",save:"wis"},
  "Soul Cage":{level:6,school:"Necromancy",castTime:"1 reaction",range:"60 ft",duration:"8 hours",components:"V,S,M",desc:"Trap a dying humanoid's soul. 6 uses: question it (one question), steal life (2d8 HP), steal vitality (advantage 10 min), or release."},
  "Sunbeam":{level:6,school:"Evocation",castTime:"1 action",range:"Self (60-ft line)",duration:"Concentration, 1 minute",components:"V,S,M",desc:"60-ft × 5-ft line of sunlight. CON save or 6d8 radiant + blinded 1 min. Undead have disadvantage. Reuse each turn as action.",save:"con"},
  "Tenser's Transformation":{level:6,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"+50 temp HP; proficiency with martial weapons and armor; if non-spellcaster, extra attack; +2d12 force on weapon attacks; advantage on STR/DEX. Suffer exhaustion when ends."},
  "Transport via Plants":{level:6,school:"Conjuration",castTime:"1 action",range:"10 ft",duration:"1 round",components:"V,S",desc:"Step into a Large+ plant and teleport to any other plant of same species on the same plane. Up to 8 creatures."},
  "True Seeing":{level:6,school:"Divination",castTime:"1 action",range:"Touch",duration:"1 hour",components:"V,S,M",desc:"See through illusions, polymorphs, magical darkness. See invisible creatures. See into Ethereal Plane (120 ft). See true form of shapechangers."},
  "Wall of Ice":{level:6,school:"Evocation",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Wall of 10 × 10-ft ice panels or 20-ft hemisphere. Breached: 5d6 cold aura. Wall AC 12, 30 HP/panel. At Higher Levels: +2d6 per slot above 6th.",save:"dex"},
  "Wall of Thorns":{level:6,school:"Conjuration",castTime:"1 action",range:"120 ft",duration:"Concentration, 10 minutes",components:"V,S,M",desc:"Wall of brambles 60 × 10 × 5 ft. Difficult terrain. DEX save to pass: 7d8 piercing. At Higher Levels: +1d8 per slot above 6th.",save:"dex"},
  "Wind Walk":{level:6,school:"Transmutation",castTime:"1 minute",range:"30 ft",duration:"8 hours",components:"V,S,M",desc:"Up to 10 willing creatures become misty; fly 300 ft. Can't attack. Revert to physical form over 1 minute."},
  "Word of Recall":{level:6,school:"Conjuration",castTime:"1 action",range:"5 ft",duration:"Instantaneous",components:"V",desc:"Teleport up to 5 willing creatures to a sanctuary you previously designated with this spell."},

  // 7th Level
  "Conjure Celestial":{level:7,school:"Conjuration",castTime:"1 minute",range:"90 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"Summon celestial of CR 4 or lower. Obeys commands. At Higher Levels: CR +1 per slot above 7th."},
  "Crown of Stars":{level:7,school:"Evocation",castTime:"1 action",range:"Self",duration:"1 hour",components:"V,S",desc:"Seven stars orbit you. Bonus action: launch one (ranged attack: 4d12 radiant). At Higher Levels: +2 stars per slot above 7th."},
  "Delayed Blast Fireball":{level:7,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Glow at target point. On detonation: 12d6 fire in 20-ft radius (DEX save half). +1d6 per full round waiting. At Higher Levels: +1d6 per slot above 7th.",save:"dex"},
  "Demiplane":{level:7,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"1 hour",components:"S",desc:"Door to 30-ft-cube extradimensional space. Creatures inside when door closes are trapped."},
  "Divine Word":{level:7,school:"Evocation",castTime:"1 bonus action",range:"30 ft",duration:"Instantaneous",components:"V",desc:"Enemies hear it. By current HP: ≤20 → killed; 21-30 → blinded + deafened 1 hr; 31-40 → deafened 10 min; 41-50 → stunned 1 min. Extraplanar creatures: banished."},
  "Etherealness":{level:7,school:"Transmutation",castTime:"1 action",range:"Self",duration:"Up to 8 hours",components:"V,S",desc:"Step into Ethereal Plane; see/hear material plane (60 ft, greyed). Pass through solid objects. At Higher Levels: +2 creatures per slot above 7th."},
  "Finger of Death":{level:7,school:"Necromancy",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"CON save or 7d8+30 necrotic. Half on save. Killed humanoid rises as zombie permanently under your control.",save:"con"},
  "Fire Storm":{level:7,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S",desc:"Up to 10 10-ft cubes of fire. DEX save or 7d10 fire. Half on save. Plants and flammable objects ignite.",save:"dex"},
  "Forcecage":{level:7,school:"Evocation",castTime:"1 action",range:"100 ft",duration:"1 hour",components:"V,S,M",desc:"Barred cage (20-ft cube) or box (10-ft cube) of force. Teleportation requires CHA save.",save:"wis"},
  "Mordenkainen's Magnificent Mansion":{level:7,school:"Conjuration",castTime:"1 minute",range:"300 ft",duration:"24 hours",components:"V,S,M",desc:"Extradimensional mansion with 50 rooms. 100 servants (INT 2). Up to 100 creatures may enter."},
  "Mordenkainen's Sword":{level:7,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Floating force sword. Bonus action: move 20 ft + attack: +spellcasting mod to hit; 3d10 + spellcasting mod force.",attackRoll:true},
  "Plane Shift":{level:7,school:"Conjuration",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Transport up to 8 willing creatures to another plane. Or banish one creature (CHA save) to a random location on another plane.",save:"wis"},
  "Power Word Pain":{level:7,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V",desc:"CON save or wracked with pain: half speed, disadvantage on attack rolls/ability checks/CON saves, can't concentrate. Repeat CON save at end of each turn.",save:"con"},
  "Prismatic Spray":{level:7,school:"Evocation",castTime:"1 action",range:"Self (60-ft cone)",duration:"Instantaneous",components:"V,S",desc:"60-ft cone. DEX save or struck by a random ray (d8): 1-red 10d6 fire; 2-orange 10d6 acid; 3-yellow 10d6 lightning; 4-green 10d6 poison; 5-blue 10d6 cold; 6-indigo restrained→petrified; 7-violet blinded→transported; 8-two rays.",save:"dex"},
  "Project Image":{level:7,school:"Illusion",castTime:"1 action",range:"500 miles",duration:"Concentration, 1 day",components:"V,S,M",desc:"Illusory double of yourself at a visited location. Sense/speak through it. Teleport to it as action.",save:"wis"},
  "Regenerate":{level:7,school:"Transmutation",castTime:"1 minute",range:"Touch",duration:"1 hour",components:"V,S,M",desc:"4d8+15 HP. For 1 hour: +1 HP per turn. Severed limbs regrow in 2 minutes."},
  "Resurrection":{level:7,school:"Necromancy",castTime:"1 hour",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Return dead creature (≤100 years) to life at full HP. Restores missing body parts. Revive from any cause."},
  "Reverse Gravity":{level:7,school:"Transmutation",castTime:"1 action",range:"100 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"100-ft tall, 50-ft radius cylinder. Everything not secured falls upward. Falls back 100 ft when spell ends.",save:"dex"},
  "Sequester":{level:7,school:"Transmutation",castTime:"1 action",range:"Touch",duration:"Until dispelled",components:"V,S,M",desc:"Willing creature or object becomes invisible and undetectable by magic. Creature falls into suspended animation."},
  "Simulacrum":{level:7,school:"Illusion",castTime:"12 hours",range:"Touch",duration:"Until dispelled",components:"V,S,M",desc:"Create an illusory duplicate from snow/ice. Half original's HP; knows all spells; can't regain spell slots. Only one at a time."},
  "Symbol":{level:7,school:"Abjuration",castTime:"1 minute",range:"Touch",duration:"Until triggered",components:"V,S,M",desc:"Inscribe triggered glyph. Effects include: Death, Discord, Fear, Hopelessness, Insanity, Pain, Slumber, or Stunning.",save:"wis"},
  "Teleport":{level:7,school:"Conjuration",castTime:"1 action",range:"10 ft",duration:"Instantaneous",components:"V",desc:"Transport up to 9 creatures to known destination. Familiarity determines accuracy (01-05% mishap for associated object up to 01% for very familiar)."},
  "Temple of the Gods":{level:7,school:"Conjuration",castTime:"1 hour",range:"120 ft",duration:"24 hours",components:"V,S,M",desc:"120-ft diameter temple appears. Blocks teleportation, scrying; undead may be excluded; intruders may face deity's effects."},
  "Whirlwind":{level:7,school:"Evocation",castTime:"1 action",range:"300 ft",duration:"Concentration, 1 minute",components:"V,M",desc:"10-ft radius, 30-ft-tall cylinder. DEX save or 10d6 bludgeoning + restrained. Restrained: repeat save or 10d6 + hurled. Move 30 ft/turn.",save:"dex"},

  // 8th Level
  "Abi-Dalzim's Horrid Wilting":{level:8,school:"Necromancy",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"30-ft radius cube. CON save or 12d8 necrotic. Half on save. Plants save with disadvantage.",save:"con"},
  "Animal Shapes":{level:8,school:"Transmutation",castTime:"1 action",range:"30 ft",duration:"Concentration, 24 hours",components:"V,S",desc:"Transform any number of willing creatures into beasts of CR 4 or lower. Revert as bonus action."},
  "Antimagic Field":{level:8,school:"Abjuration",castTime:"1 action",range:"Self (10 ft)",duration:"Concentration, 1 hour",components:"V,S,M",desc:"10-ft radius sphere suppresses all magic. Spells fail; summoned creatures disappear; magic items become nonmagical."},
  "Antipathy/Sympathy":{level:8,school:"Enchantment",castTime:"1 hour",range:"60 ft",duration:"10 days",components:"V,S,M",desc:"Target object/area repels (antipathy) or attracts (sympathy) a specific creature type. WIS save to approach/leave.",save:"wis"},
  "Befuddlement":{level:8,school:"Enchantment",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"INT save or 10d12 psychic and permanent amnesia of last 30 days. Restored by Greater Restoration or Heal."},
  "Clone":{level:8,school:"Necromancy",castTime:"1 hour",range:"Touch",duration:"Instantaneous",components:"V,S,M",desc:"Grow a duplicate of a creature in a container. When original dies, soul migrates into clone with all memories."},
  "Control Weather":{level:8,school:"Transmutation",castTime:"10 minutes",range:"Self (5 miles)",duration:"Concentration, 8 hours",components:"V,S,M",desc:"Control weather in 5-mile radius: precipitation, temperature, wind. Changes take 1d4×10 minutes."},
  "Dominate Monster":{level:8,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 hour",components:"V,S",desc:"WIS save or any creature charmed and under telepathic control. Repeats save each time damaged.",save:"wis"},
  "Earthquake":{level:8,school:"Evocation",castTime:"1 action",range:"500 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"100-ft radius. Concentration DC 15. Difficult terrain. CON save or prone. 25% chance pits open. Structures take 50 damage/turn.",save:"dex"},
  "Feeblemind":{level:8,school:"Enchantment",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"INT save or INT and CHA become 1. Can't cast spells or communicate. INT save every 30 days to end.",save:"int"},
  "Holy Aura":{level:8,school:"Abjuration",castTime:"1 action",range:"Self (30 ft)",duration:"Concentration, 1 minute",components:"V,S,M",desc:"30-ft aura. Friendly creatures: advantage on saves, attackers have disadvantage. Attack by fiend/undead: CON save or blinded.",save:"str"},
  "Illusory Dragon":{level:8,school:"Illusion",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 minute",components:"S",desc:"Create dragon illusion. Bonus action to move it. Action: breath weapon (60-ft cone), INT save or 7d6 psychic.",save:"wis"},
  "Incendiary Cloud":{level:8,school:"Conjuration",castTime:"1 action",range:"150 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"20-ft radius sphere of hot smoke. Heavily obscured. Start of turn inside: 10d8 fire (CON save half). Moves 10 ft/round.",save:"dex"},
  "Maddening Darkness":{level:8,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Concentration, 10 minutes",components:"V,M",desc:"60-ft radius magical darkness. WIS save at start of each turn inside: 8d8 psychic. Darkvision can't penetrate.",save:"wis"},
  "Maze":{level:8,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 10 minutes",components:"V,S",desc:"Banish creature to labyrinth. DC 20 INT check each turn (as action) to escape. Minotaurs auto-escape."},
  "Mind Blank":{level:8,school:"Abjuration",castTime:"1 action",range:"Touch",duration:"24 hours",components:"V,S",desc:"Immune to psychic damage, thought-reading, divination, and charmed condition for 24 hours."},
  "Power Word Stun":{level:8,school:"Enchantment",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V",desc:"Stun a creature with ≤150 HP. CON save at end of each turn to recover.",save:"con"},
  "Sunburst":{level:8,school:"Evocation",castTime:"1 action",range:"150 ft",duration:"Instantaneous",components:"V,S,M",desc:"60-ft radius burst of sunlight. CON save or 12d6 radiant + blinded 1 min. Undead/oozes have disadvantage.",save:"con"},
  "Telepathy":{level:8,school:"Evocation",castTime:"1 action",range:"Unlimited",duration:"24 hours",components:"V,S,M",desc:"Telepathic link with willing creature anywhere on same plane. Communicate mind-to-mind; send images and feelings."},
  "Tsunami":{level:8,school:"Conjuration",castTime:"1 minute",range:"Sight",duration:"Concentration, 6 rounds",components:"V,S",desc:"Wave 300 ft long, 300 ft high, 50 ft deep. STR save or 6d10 bludgeoning + carried 50 ft. Moves 50 ft/turn.",save:"str"},

  // 9th Level
  "Astral Projection":{level:9,school:"Necromancy",castTime:"1 hour",range:"10 ft",duration:"Special",components:"V,S,M",desc:"Up to 8 willing creatures project to Astral Plane. Silver cord connects to body. Body stays behind."},
  "Blade of Disaster":{level:9,school:"Conjuration",castTime:"1 bonus action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S",desc:"Blade of shimmering force. Move 30 ft and attack twice per action: +12 to hit; 4d12 force each. Crits on 18-20. Ignores resistance."},
  "Foresight":{level:9,school:"Divination",castTime:"1 minute",range:"Touch",duration:"8 hours",components:"V,S,M",desc:"For 8 hours: advantage on all ability checks, attack rolls, saves; enemies have disadvantage on attacks. Can't be surprised."},
  "Gate":{level:9,school:"Conjuration",castTime:"1 action",range:"60 ft",duration:"Concentration, 1 minute",components:"V,S,M",desc:"Circular portal to another plane. Specific named creature must CHA save or be drawn through. Creatures can pass both ways.",save:"cha"},
  "Imprisonment":{level:9,school:"Abjuration",castTime:"1 minute",range:"30 ft",duration:"Until dispelled",components:"V,S,M",desc:"WIS save or imprisoned (Burial, Chaining, Hedged Prison, Minimus Containment, or Slumber). Ends on specific condition or Dispel Magic DC 20.",save:"wis"},
  "Mass Heal":{level:9,school:"Evocation",castTime:"1 action",range:"60 ft",duration:"Instantaneous",components:"V,S",desc:"Distribute up to 700 HP of healing among creatures in range. End blindness, deafness, and diseases on all affected."},
  "Mass Polymorph":{level:9,school:"Transmutation",castTime:"1 action",range:"120 ft",duration:"Concentration, 1 hour",components:"V,S,M",desc:"WIS save or up to 10 creatures transform into beasts of CR ≤ their own CR/level. Revert at 0 HP.",save:"wis"},
  "Meteor Swarm":{level:9,school:"Evocation",castTime:"1 action",range:"1 mile",duration:"Instantaneous",components:"V,S",desc:"Four 40-ft radius explosions. DEX save or 20d6 fire + 20d6 bludgeoning. Half on save.",save:"dex"},
  "Power Word Heal":{level:9,school:"Evocation",castTime:"1 action",range:"Touch",duration:"Instantaneous",components:"V",desc:"Restore all HP. End charmed, frightened, paralyzed, stunned, and exhaustion."}});

// ── AT HIGHER LEVELS — spell slot scaling text ──────────────────────────────
(function(){
  var _HL = {
    // ── Level 1 ──
    "Bless":               "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    "Burning Hands":       "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    "Charm Person":        "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional humanoid for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    "Color Spray":         "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st.",
    "Command":             "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.",
    "Comprehend Languages":"When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st.",
    "Cure Wounds":         "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.",
    "Detect Magic":        "This spell has no additional effect at higher slot levels.",
    "Disguise Self":       "This spell has no additional effect at higher slot levels.",
    "Expeditious Retreat": "This spell has no additional effect at higher slot levels.",
    "Faerie Fire":         "This spell has no additional effect at higher slot levels.",
    "False Life":          "When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional temporary hit points for each slot level above 1st.",
    "Feather Fall":        "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    "Find Familiar":       "This spell has no additional effect at higher slot levels.",
    "Fog Cloud":           "When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st.",
    "Grease":              "This spell has no additional effect at higher slot levels.",
    "Guiding Bolt":        "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    "Healing Word":        "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 1st.",
    "Hellish Rebuke":      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
    "Heroism":             "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional willing creature for each slot level above 1st.",
    "Hunter's Mark":       "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration for up to 24 hours.",
    "Inflict Wounds":      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.",
    "Jump":                "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    "Longstrider":         "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.",
    "Mage Armor":          "This spell has no additional effect at higher slot levels.",
    "Protection from Evil and Good": "This spell has no additional effect at higher slot levels.",
    "Ray of Sickness":     "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    "Shield of Faith":     "This spell has no additional effect at higher slot levels.",
    "Sleep":               "When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st.",
    "Speak with Animals":  "This spell has no additional effect at higher slot levels.",
    "Thunderwave":         "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    "Witch Bolt":          "When you cast this spell using a spell slot of 2nd level or higher, the initial damage on the round you cast the spell increases by 1d12 for each slot level above 1st.",
    "Wrathful Smite":      "This spell has no additional effect at higher slot levels.",
    "Zephyr Strike":       "This spell has no additional effect at higher slot levels.",
    "Animal Friendship":   "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.",
    "Chromatic Orb":       "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
    "Divine Favor":        "This spell has no additional effect at higher slot levels.",
    "Ensnaring Strike":    "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
    "Hail of Thorns":      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (maximum 6d10).",
    "Hex":                 "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentration for up to 24 hours.",
    "Searing Smite":       "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot level above 1st.",
    "Thunderous Smite":    "This spell has no additional effect at higher slot levels.",
    "Wrathful Smite":      "This spell has no additional effect at higher slot levels.",
    "Ice Knife":           "When you cast this spell using a spell slot of 2nd level or higher, the cold damage increases by 1d6 for each slot level above 1st.",
    "Absorb Elements":     "When you cast this spell using a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each slot level above 1st.",
    "Sanctuary":           "This spell has no additional effect at higher slot levels.",
    "Tasha's Hideous Laughter": "This spell has no additional effect at higher slot levels.",
    "Hideous Laughter":    "This spell has no additional effect at higher slot levels.",

    // ── Level 2 ──
    "Blindness/Deafness":  "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    "Cloud of Daggers":    "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd.",
    "Darkvision":          "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    "Enhance Ability":     "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    "Enlarge/Reduce":      "This spell has no additional effect at higher slot levels.",
    "Flaming Sphere":      "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
    "Hold Person":         "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.",
    "Invisibility":        "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    "Knock":               "This spell has no additional effect at higher slot levels.",
    "Lesser Restoration":  "This spell has no additional effect at higher slot levels.",
    "Levitate":            "This spell has no additional effect at higher slot levels.",
    "Magic Weapon":        "When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3.",
    "Mirror Image":        "This spell has no additional effect at higher slot levels.",
    "Misty Step":          "This spell has no additional effect at higher slot levels.",
    "Moonbeam":            "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.",
    "Prayer of Healing":   "When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d8 for each slot level above 2nd.",
    "Ray of Enfeeblement": "This spell has no additional effect at higher slot levels.",
    "Scorching Ray":       "When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd.",
    "See Invisibility":    "This spell has no additional effect at higher slot levels.",
    "Shatter":             "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
    "Silence":             "This spell has no additional effect at higher slot levels.",
    "Spider Climb":        "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
    "Spiritual Weapon":    "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for every two slot levels above 2nd.",
    "Suggestion":          "This spell has no additional effect at higher slot levels.",
    "Web":                 "This spell has no additional effect at higher slot levels.",
    "Zone of Truth":       "This spell has no additional effect at higher slot levels.",
    "Cordon of Arrows":    "When you cast this spell using a spell slot of 3rd level or higher, the number of pieces of ammunition that can be affected increases by two for each slot level above 2nd.",
    "Pass without Trace":  "This spell has no additional effect at higher slot levels.",
    "Spike Growth":        "This spell has no additional effect at higher slot levels.",
    "Blur":                "This spell has no additional effect at higher slot levels.",
    "Calm Emotions":       "This spell has no additional effect at higher slot levels.",
    "Darkness":            "This spell has no additional effect at higher slot levels.",
    "Detect Thoughts":     "This spell has no additional effect at higher slot levels.",
    "Enthrall":            "This spell has no additional effect at higher slot levels.",
    "Gust of Wind":        "This spell has no additional effect at higher slot levels.",
    "Heat Metal":          "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
    "Warding Bond":        "This spell has no additional effect at higher slot levels.",
    "Branding Smite":      "When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd.",

    // ── Level 3 ──
    "Animate Dead":        "When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional undead creatures for each slot level above 3rd.",
    "Bestow Curse":        "If you cast this spell using a slot of 4th level or higher, the duration is concentration, up to 10 minutes. If you use a 5th-level slot, the duration is 8 hours. If you use a slot of 7th level or higher, the duration is 24 hours. If you use a 9th-level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a duration that doesn't require concentration.",
    "Call Lightning":      "When you cast this spell using a spell slot of 4th or higher level, the damage increases by 1d10 for each slot level above 3rd.",
    "Conjure Animals":     "When you cast this spell using a spell slot of 4th level or higher, you summon twice as many animals with a slot of 4th or 5th level, or three times as many with a slot of 6th or 7th level, or four times as many with a slot of 8th or 9th level.",
    "Counterspell":        "When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.",
    "Fear":                "This spell has no additional effect at higher slot levels.",
    "Fireball":            "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
    "Fly":                 "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
    "Gaseous Form":        "This spell has no additional effect at higher slot levels.",
    "Haste":               "This spell has no additional effect at higher slot levels.",
    "Hunger of Hadar":     "This spell has no additional effect at higher slot levels.",
    "Hypnotic Pattern":    "This spell has no additional effect at higher slot levels.",
    "Lightning Bolt":      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
    "Magic Circle":        "When you cast this spell using a spell slot of 4th level or higher, the duration increases by 1 hour for each slot level above 3rd.",
    "Mass Healing Word":   "When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d4 for each slot level above 3rd.",
    "Remove Curse":        "This spell has no additional effect at higher slot levels.",
    "Revivify":            "This spell has no additional effect at higher slot levels.",
    "Sleet Storm":         "This spell has no additional effect at higher slot levels.",
    "Slow":                "This spell has no additional effect at higher slot levels.",
    "Spirit Guardians":    "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
    "Stinking Cloud":      "This spell has no additional effect at higher slot levels.",
    "Tongues":             "This spell has no additional effect at higher slot levels.",
    "Vampiric Touch":      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
    "Water Breathing":     "This spell has no additional effect at higher slot levels.",
    "Dispel Magic":        "When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used.",
    "Aura of Vitality":    "This spell has no additional effect at higher slot levels.",
    "Elemental Weapon":    "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage dice increase to 2d4. When you use a spell slot of 7th level or higher, the bonus increases to +3 and the dice increase to 3d4.",
    "Conjure Barrage":     "This spell has no additional effect at higher slot levels.",
    "Lightning Arrow":     "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd.",
    "Plant Growth":        "This spell has no additional effect at higher slot levels.",
    "Wind Wall":           "This spell has no additional effect at higher slot levels.",
    "Major Image":         "When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your concentration.",
    "Clairvoyance":        "This spell has no additional effect at higher slot levels.",
    "Sending":             "This spell has no additional effect at higher slot levels.",

    // ── Level 4 ──
    "Banishment":          "When you cast this spell using a spell slot of 5th level or higher, you can target one additional creature for each slot level above 4th.",
    "Black Tentacles":     "This spell has no additional effect at higher slot levels.",
    "Compulsion":          "This spell has no additional effect at higher slot levels.",
    "Confusion":           "This spell has no additional effect at higher slot levels.",
    "Control Water":       "This spell has no additional effect at higher slot levels.",
    "Death Ward":          "This spell has no additional effect at higher slot levels.",
    "Dimension Door":      "This spell has no additional effect at higher slot levels.",
    "Dominate Beast":      "This spell has no additional effect at higher slot levels.",
    "Freedom of Movement": "This spell has no additional effect at higher slot levels.",
    "Greater Invisibility":"This spell has no additional effect at higher slot levels.",
    "Guardian of Faith":   "This spell has no additional effect at higher slot levels.",
    "Ice Storm":           "When you cast this spell using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th.",
    "Phantasmal Killer":   "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.",
    "Polymorph":           "This spell has no additional effect at higher slot levels.",
    "Staggering Smite":    "This spell has no additional effect at higher slot levels.",
    "Wall of Fire":        "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.",
    "Grasping Vine":       "This spell has no additional effect at higher slot levels.",
    "Stoneskin":           "This spell has no additional effect at higher slot levels.",
    "Fabricate":           "This spell has no additional effect at higher slot levels.",
    "Blinding Smite":      "When you cast this spell using a spell slot of 5th level or higher, the extra damage increases by 1d8 for each slot level above 4th.",
    "Fire Shield":         "This spell has no additional effect at higher slot levels.",
    "Arcane Eye":          "This spell has no additional effect at higher slot levels.",
    "Otiluke's Resilient Sphere": "This spell has no additional effect at higher slot levels.",
    "Locate Creature":     "This spell has no additional effect at higher slot levels.",
    "Divination":          "This spell has no additional effect at higher slot levels.",

    // ── Level 5 ──
    "Animate Objects":     "When you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.",
    "Banishing Smite":     "This spell has no additional effect at higher slot levels.",
    "Cloudkill":           "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
    "Cone of Cold":        "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.",
    "Conjure Volley":      "This spell has no additional effect at higher slot levels.",
    "Contagion":           "This spell has no additional effect at higher slot levels.",
    "Destructive Wave":    "This spell has no additional effect at higher slot levels.",
    "Dominate Person":     "When you cast this spell using a spell slot of 6th level, the duration is concentration up to 10 minutes. When you use a 7th-level slot, the duration is 1 hour. When you use a slot of 8th level or higher, the duration is 8 hours.",
    "Flame Strike":        "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.",
    "Geas":                "When you cast this spell using a 7th- or 8th-level spell slot, the duration is 1 year. When you cast it using a spell slot of 9th level, the spell lasts until it is ended by one of the spells mentioned in its description.",
    "Greater Restoration": "This spell has no additional effect at higher slot levels.",
    "Hold Monster":        "When you cast this spell using a spell slot of 6th level or higher, you can target one additional creature for each slot level above 5th. The creatures must be within 30 feet of each other when you target them.",
    "Insect Plague":       "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.",
    "Mass Cure Wounds":    "When you cast this spell using a spell slot of 6th level or higher, the healing increases by 1d8 for each slot level above 5th.",
    "Planar Binding":      "When you cast this spell using a spell slot of 6th level or higher, the duration increases to 10 days with a 6th-level slot, 30 days with a 7th-level slot, 180 days with an 8th-level slot, and 1 year and a day with a 9th-level spell slot.",
    "Raise Dead":          "This spell has no additional effect at higher slot levels.",
    "Scrying":             "This spell has no additional effect at higher slot levels.",
    "Seeming":             "This spell has no additional effect at higher slot levels.",
    "Swift Quiver":        "This spell has no additional effect at higher slot levels.",
    "Teleportation Circle":"This spell has no additional effect at higher slot levels.",
    "Tree Stride":         "This spell has no additional effect at higher slot levels.",
    "Wall of Force":       "This spell has no additional effect at higher slot levels.",
    "Wall of Stone":       "This spell has no additional effect at higher slot levels.",
    "Maelstrom":           "This spell has no additional effect at higher slot levels.",
    "Immolation":          "This spell has no additional effect at higher slot levels.",
    "Steel Wind Strike":   "This spell has no additional effect at higher slot levels.",
    "Bigby's Hand":        "When you cast this spell using a spell slot of 6th level or higher, the damage of the clenched fist option increases by 2d6 and the damage of the grasping hand increases by 2d6 for each slot level above 5th.",
    "Modify Memory":       "If you cast this spell using a spell slot of 6th level, you can alter the target's memories of an event up to 7 days ago. If you use a 7th-level slot, you can alter memories of an event up to 30 days ago. With an 8th-level slot, you can alter memories of an event up to 1 year ago. With a 9th-level slot, the spell can alter a memory from any point in the target's past.",

    // ── Level 6 ──
    "Blade Barrier":       "This spell has no additional effect at higher slot levels.",
    "Chain Lightning":     "When you cast this spell using a spell slot of 7th level or higher, one additional bolt leaps from the first target to another target for each slot level above 6th.",
    "Circle of Death":     "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 2d6 for each slot level above 6th.",
    "Disintegrate":        "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 3d6 for each slot level above 6th.",
    "Eyebite":             "This spell has no additional effect at higher slot levels.",
    "Flesh to Stone":      "This spell has no additional effect at higher slot levels.",
    "Globe of Invulnerability": "When you cast this spell using a spell slot of 7th level or higher, the barrier blocks spells of one level higher for each slot level above 6th.",
    "Harm":                "This spell has no additional effect at higher slot levels.",
    "Heal":                "When you cast this spell using a spell slot of 7th level or higher, the amount of healing increases by 10 for each slot level above 6th.",
    "Magic Jar":           "This spell has no additional effect at higher slot levels.",
    "Mass Suggestion":     "When you cast this spell using a 7th-level spell slot, the duration is 10 days. When you use an 8th-level spell slot, the duration is 30 days. When you use a 9th-level spell slot, the duration is a year and a day.",
    "Otiluke's Freezing Sphere": "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th.",
    "Otto's Irresistible Dance": "This spell has no additional effect at higher slot levels.",
    "Programmed Illusion":  "This spell has no additional effect at higher slot levels.",
    "Sunbeam":             "This spell has no additional effect at higher slot levels.",
    "True Seeing":         "This spell has no additional effect at higher slot levels.",
    "Wall of Ice":         "When you cast this spell using a spell slot of 7th level or higher, the damage the wall deals when it appears increases by 2d6 for each slot level above 6th.",
    "Wall of Thorns":      "When you cast this spell using a spell slot of 7th level or higher, both types of damage increase by 1d8 for each slot level above 6th.",
    "Investiture of Flame":"This spell has no additional effect at higher slot levels.",
    "Scatter":             "When you cast this spell using a spell slot of 7th level or higher, you can affect one additional creature for each slot level above 6th.",

    // ── Level 7 ──
    "Conjure Celestial":   "When you cast this spell using a spell slot of 9th level, the celestial has maximum hit points instead of average.",
    "Delayed Blast Fireball":"When you cast this spell using a spell slot of 8th level or higher, the base damage increases by 1d6 for each slot level above 7th.",
    "Finger of Death":     "This spell has no additional effect at higher slot levels.",
    "Fire Storm":          "This spell has no additional effect at higher slot levels.",
    "Forcecage":           "This spell has no additional effect at higher slot levels.",
    "Plane Shift":         "This spell has no additional effect at higher slot levels.",
    "Prismatic Spray":     "This spell has no additional effect at higher slot levels.",
    "Regenerate":          "This spell has no additional effect at higher slot levels.",
    "Resurrection":        "This spell has no additional effect at higher slot levels.",
    "Reverse Gravity":     "This spell has no additional effect at higher slot levels.",
    "Symbol":              "This spell has no additional effect at higher slot levels.",
    "Teleport":            "This spell has no additional effect at higher slot levels.",
    "Whirlwind":           "This spell has no additional effect at higher slot levels.",

    // ── Level 8 ──
    "Abi-Dalzim's Horrid Wilting": "This spell has no additional effect at higher slot levels.",
    "Dominate Monster":    "This spell has no additional effect at higher slot levels.",
    "Earthquake":          "This spell has no additional effect at higher slot levels.",
    "Feeblemind":          "This spell has no additional effect at higher slot levels.",
    "Holy Aura":           "This spell has no additional effect at higher slot levels.",
    "Incendiary Cloud":    "This spell has no additional effect at higher slot levels.",
    "Power Word Stun":     "This spell has no additional effect at higher slot levels.",
    "Sunburst":            "This spell has no additional effect at higher slot levels.",
    "Tsunami":             "This spell has no additional effect at higher slot levels.",
    "Antipathy/Sympathy":  "This spell has no additional effect at higher slot levels.",
    "Maze":                "This spell has no additional effect at higher slot levels.",
    "Mind Blank":          "This spell has no additional effect at higher slot levels.",
    "Clone":               "This spell has no additional effect at higher slot levels.",
    "Control Weather":     "This spell has no additional effect at higher slot levels.",

    // ── Level 9 ──
    "Meteor Swarm":        "This spell has no additional effect at higher slot levels.",
    "Power Word Kill":     "This spell has no additional effect at higher slot levels.",
    "Weird":               "This spell has no additional effect at higher slot levels.",
    "Imprisonment":        "This spell has no additional effect at higher slot levels.",
    "Mass Polymorph":      "This spell has no additional effect at higher slot levels.",
    "Storm of Vengeance":  "This spell has no additional effect at higher slot levels.",
    "True Polymorph":      "This spell has no additional effect at higher slot levels.",
    "Foresight":           "This spell has no additional effect at higher slot levels.",
    "Psychic Scream":      "This spell has no additional effect at higher slot levels.",
    "Gate":                "This spell has no additional effect at higher slot levels.",
    "Shapechange":         "This spell has no additional effect at higher slot levels.",
    "Time Stop":           "This spell has no additional effect at higher slot levels.",
    "Wish":                "This spell has no additional effect at higher slot levels.",
    "Astral Projection":   "This spell has no additional effect at higher slot levels.",
    "Mass Heal":           "This spell has no additional effect at higher slot levels.",
    "True Resurrection":   "This spell has no additional effect at higher slot levels.",
    "Power Word Heal":     "This spell has no additional effect at higher slot levels.",
    "Prismatic Wall":      "This spell has no additional effect at higher slot levels."
  };
  Object.keys(_HL).forEach(function(k){
    if(DND_DATA.spellDescriptions[k]) DND_DATA.spellDescriptions[k].higherLevel = _HL[k];
  });
})();
