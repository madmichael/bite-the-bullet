export const backgrounds = [
  { roll: 1, name: "Mine-born", desc: "You grew up underground. Tough as bedrock and wary of collapse." },
  { roll: 2, name: "Drifter", desc: "Always on the move. You read people and places before they read you." },
  { roll: 3, name: "Ex-preacher", desc: "You speak in parables, your eyes heavy with judgment." },
  { roll: 4, name: "Scout", desc: "You know where to walk, what to track, and when to vanish." },
  { roll: 5, name: "Homesteader", desc: "You know how to fix things yourself. Stubborn, frugal, and proud." },
  { roll: 6, name: "Sharpshooter", desc: "Trained to breathe steadily and end things at a distance." },
  { roll: 7, name: "Dustmarshal's whelp", desc: "Raised among the law, but the law don't raise saints." },
  { roll: 8, name: "Salt flat smuggler", desc: "You've run contraband past bandits and a whole lot worse." },
  { roll: 9, name: "Gun pit fighter", desc: "You know exactly what a man looks like right before he breaks." },
  { roll: 10, name: "Rustwalker", desc: "You scavenge ruins without flinching at the bones." }
];

export const reputations = [
  { roll: 1, name: "Shot Wyatt at sundown", desc: "True or not, folks believe it." },
  { roll: 2, name: "Hex-touched", desc: "People whisper you got bad blood or stranger gifts." },
  { roll: 3, name: "Burned a town down", desc: "Everyone's got an opinion on what really happened." },
  { roll: 4, name: "Old hand", desc: "Seen as seasoned, maybe too seasoned." },
  { roll: 5, name: "Cold-eyed killer", desc: "Your stare alone chills most men." },
  { roll: 6, name: "Broken man", desc: "They say you've lost everything, and it shows." },
  { roll: 7, name: "Witch's favor", desc: "Rumor has it that something inhuman watches over you." },
  { roll: 8, name: "Last of the line", desc: "Your name still carries weight...or warning." },
  { roll: 9, name: "Silver-tongued devil", desc: "You can talk most into deals they'll regret." },
  { roll: 10, name: "Died once", desc: "They say you were buried. You say nothing." }
];

export const fortitudes = [
  { roll: 1, name: "Justice above all", desc: "Fair or foul, you won't let wrong stand." },
  { roll: 2, name: "The old ways", desc: "You heed traditions carved in stone or bone." },
  { roll: 3, name: "Blood oath", desc: "Loyalty to kin, clan, or cause overrides fear." },
  { roll: 4, name: "Grace under fire", desc: "Calm ain't a tactic—it's your only way through." },
  { roll: 5, name: "Work is worth", desc: "You believe effort should earn its due." },
  { roll: 6, name: "Don't look back", desc: "The past is dead. Forward's all that matters." },
  { roll: 7, name: "Protect the weak", desc: "You can't abide cruelty, even when it's easy." },
  { roll: 8, name: "Owe a debt", desc: "Something big keeps your hand steady and your head low." },
  { roll: 9, name: "Survive, always", desc: "Survival isn't luck, it's will sharpened by fire." },
  { roll: 10, name: "Faith in something", desc: "Maybe God, maybe it's just the Sun. But it keeps you walking." }
];

export const foibles = [
  { roll: 1, name: "Short fuse", desc: "You burn hot, fast, and loud." },
  { roll: 2, name: "Drinks to forget", desc: "You self-medicate with every bottle, every night." },
  { roll: 3, name: "Can't let go", desc: "You obsess over the thing you lost...or caused." },
  { roll: 4, name: "Bleeds for strangers", desc: "You help even when it hurts." },
  { roll: 5, name: "Never backs down", desc: "Pride is your shield, even when it cracks." },
  { roll: 6, name: "Haunted by dreams", desc: "You've seen things you wish you hadn't." },
  { roll: 7, name: "Reckless hope", desc: "You expect good in places it don't belong." },
  { roll: 8, name: "Always watching", desc: "You trust no one, not even yourself." },
  { roll: 9, name: "Compulsive fixer", desc: "You can't leave broken things alone." },
  { roll: 10, name: "Vow of silence", desc: "You don't speak unless it's carved in fire." }
];

export const issues = [
  { roll: 1, name: "Craves meaning", desc: "You can't stand the thought that it's all for nothing." },
  { roll: 2, name: "Seeks the one who left", desc: "Someone walked out. You're still chasing." },
  { roll: 3, name: "Faith in fire", desc: "You believe only destruction cleanses." },
  { roll: 4, name: "Tainted by the past", desc: "Something you did or were part of won't stay buried." },
  { roll: 5, name: "The thing beneath", desc: "You dream of tunnels. You wake cold." },
  { roll: 6, name: "Marked by prophecy", desc: "You've read your fate. You're making it real." },
  { roll: 7, name: "Addicted to risk", desc: "The edge calls louder than any reward." },
  { roll: 8, name: "Owes a devil's favor", desc: "You took help you shouldn't have. It's still watching." },
  { roll: 9, name: "Seeks an end", desc: "Some part of you walks toward death, always." },
  { roll: 10, name: "Afraid to love again", desc: "You keep everyone at the far end of your reach." }
];

export const armors = [
  { roll: 1, name: "Duster coat", armor: 1, slots: 1, desc: "Worn leather, oil-waxed for trail grit. Light but better than nothing." },
  { roll: 2, name: "Rancher's vest", armor: 2, slots: 1, desc: "Thick quilted leather layered with scraps of metal or bone. Uncomfortable but sturdy." },
  { roll: 3, name: "Railhand plate", armor: 2, slots: 2, desc: "Salvaged breastplate from a collapsed ironclad engine. Heavy and clumsy, but solid." },
  { roll: 4, name: "Scavver leathers", armor: 1, slots: 1, desc: "Patchwork hides, reinforced with wire mesh and thick canvas. Worn by dust-pickers." },
  { roll: 5, name: "Bone-ward fetish", armor: 0, slots: 0, desc: "No protection to speak of, but hung with charms, bones, or glyphs. May ward off fear or stranger things." }
];

export const weapons = [
  { roll: 1, name: "Revolver", damage: "d6", slots: 1, range: "Close", traits: "6 shots", shots: 6 },
  { roll: 2, name: "Lever-action rifle", damage: "d6", slots: 2, range: "Medium", traits: "5 shots", shots: 5 },
  { roll: 3, name: "Coach gun", damage: "d6", slots: 2, range: "Close", traits: "AoE, 2 shots", shots: 2 },
  { roll: 4, name: "Knife/long knife", damage: "d4/d6", slots: 1, range: "Personal", traits: "Concealable, melee only", shots: 0 },
  { roll: 5, name: "Saber", damage: "d6", slots: 1, range: "Personal", traits: "May be used for social conflict", shots: 0 },
  { roll: 6, name: "Tomahawk", damage: "d6", slots: 1, range: "Personal", traits: "Melee, throwable (Close)", shots: 0 },
  { roll: 7, name: "Bullwhip", damage: "d4", slots: 1, range: "Close", traits: "No melee, may impair target", shots: 0 },
  { roll: 8, name: "Bow & arrows", damage: "d6", slots: 2, range: "Close", traits: "Silent, 6 shots", shots: 6 }
];

export const gear = [
  { roll: 1, name: "Tinderbox", slots: 1, desc: "Flint, steel, and dry scrap tucked in a tin." },
  { roll: 2, name: "Canteen", slots: 1, desc: "Half-full. The water's clean. For now." },
  { roll: 3, name: "Bundle of jerky", slots: 1, desc: "String-tied meat: probably goat, possibly not." },
  { roll: 4, name: "Whetstone", slots: 0, desc: "Keeps blades sharp and minds steady." },
  { roll: 5, name: "Traveler's Bible", slots: 1, desc: "Pages marked in charcoal and blood." },
  { roll: 6, name: "Coil of wire", slots: 1, desc: "Thin but strong. 10 feet, barbed in spots." },
  { roll: 7, name: "Harmonica", slots: 0, desc: "Dented, off-tune, but it carries memory." },
  { roll: 8, name: "Wooden idol", slots: 0, desc: "Small and worn smooth. You don't remember who carved it." },
  { roll: 9, name: "Notebook & charcoal stub", slots: 1, desc: "Half-filled with symbols, maps, names." },
  { roll: 10, name: "Spool of thread & needle", slots: 1, desc: "For stitching gear or yourself." },
  { roll: 11, name: "Bottle of whiskey", slots: 1, desc: "Three good swigs left." },
  { roll: 12, name: "Bear trap", slots: 2, desc: "Folded and rusted. Still snaps like judgment. (d12 damage)" },
  { roll: 13, name: "Hand mirror", slots: 1, desc: "Cracked across the middle." },
  { roll: 14, name: "Tin cup", slots: 0, desc: "Dented and burned. Always warm when you wake." },
  { roll: 15, name: "Lockbox (empty)", slots: 2, desc: "Heavy, padlocked, and no key in sight." },
  { roll: 16, name: "Rope (20 ft.)", slots: 1, desc: "Rough, stiff hemp. Smells of boats or gallows." },
  { roll: 17, name: "Signal whistle", slots: 0, desc: "Loud, shrill, from another time." },
  { roll: 18, name: "Fashionable top hat", slots: 1, desc: "Doesn't fit quite right." },
  { roll: 19, name: "Old coin", slots: 0, desc: "Face is scratched off. Warm to the touch." },
  { roll: 20, name: "Goggles", slots: 1, desc: "Dust-scratched lenses and a cracked leather strap." }
];
