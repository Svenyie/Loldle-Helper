const data = [
  {
    Champion: "Aatrox",
    Gender: "Male",
    Position: "Top",
    Species: "Darkin",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Runeterra,Shurima",
    Release: "2013"
  },
  {
    Champion: "Ahri",
    Gender: "Female",
    Position: "Middle",
    Species: "Vastayan",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia",
    Release: "2011"
  },
  {
    Champion: "Akali",
    Gender: "Female",
    Position: "Middle,Top",
    Species: "Human",
    Resource: "Energy",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2010"
  },
  {
    Champion: "Akshan",
    Gender: "Male",
    Position: "Middle,Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima",
    Release: "2021"
  },
  {
    Champion: "Alistar",
    Gender: "Male",
    Position: "Support",
    Species: "Minotaur",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Runeterra",
    Release: "2009"
  },
  {
    Champion: "Amumu",
    Gender: "Male",
    Position: "Jungle,Support",
    Species: "Undead,Yordle",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2009"
  },
  {
    Champion: "Anivia",
    Gender: "Female",
    Position: "Middle",
    Species: "God,Spirit",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Freljord",
    Release: "2009"
  },
  {
    Champion: "Annie",
    Gender: "Female",
    Position: "Middle,Support",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus,Runeterra",
    Release: "2009"
  },
  {
    Champion: "Aphelios",
    Gender: "Male",
    Position: "Bottom",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Targon",
    Release: "2019"
  },
  {
    Champion: "Ashe",
    Gender: "Female",
    Position: "Bottom,Support",
    Species: "Human,Iceborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Freljord",
    Release: "2009"
  },
  {
    Champion: "Aurelion Sol",
    Gender: "Male",
    Position: "Middle",
    Species: "Celestial,Dragon",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Runeterra,Targon",
    Release: "2016"
  },
  {
    Champion: "Azir",
    Gender: "Male",
    Position: "Middle",
    Species: "God-Warrior",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima",
    Release: "2014"
  },
  {
    Champion: "Bard",
    Gender: "Male",
    Position: "Support",
    Species: "Celestial",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Runeterra",
    Release: "2015"
  },
  {
    Champion: "Bel'Veth",
    Gender: "Female",
    Position: "Jungle",
    Species: "Void-Being",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Void",
    Release: "2022"
  },
  {
    Champion: "Blitzcrank",
    Gender: "Other",
    Position: "Support",
    Species: "Golem",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Zaun",
    Release: "2009"
  },
  {
    Champion: "Brand",
    Gender: "Male",
    Position: "Support",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Freljord,Runeterra",
    Release: "2011"
  },
  {
    Champion: "Braum",
    Gender: "Male",
    Position: "Support",
    Species: "Human,Iceborn",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2014"
  },
  {
    Champion: "Briar",
    Gender: "Female",
    Position: "",
    Species: "",
    Resource: "",
    Ranged: "",
    Region: "",
    Release: ""
  },
  {
    Champion: "Caitlyn",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Piltover",
    Release: "2011"
  },
  {
    Champion: "Camille",
    Gender: "Female",
    Position: "Top",
    Species: "Cyborg,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Piltover",
    Release: "2016"
  },
  {
    Champion: "Cassiopeia",
    Gender: "Female",
    Position: "Middle",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus,Shurima",
    Release: "2010"
  },
  {
    Champion: "Cho'Gath",
    Gender: "Male",
    Position: "Top",
    Species: "Void-Being",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Void",
    Release: "2009"
  },
  {
    Champion: "Corki",
    Gender: "Male",
    Position: "Middle",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City,Piltover",
    Release: "2009"
  },
  {
    Champion: "Darius",
    Gender: "Male",
    Position: "Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2012"
  },
  {
    Champion: "Diana",
    Gender: "Female",
    Position: "Jungle,Middle",
    Species: "Aspect,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Targon",
    Release: "2012"
  },
  {
    Champion: "Draven",
    Gender: "Male",
    Position: "Bottom",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus",
    Release: "2012"
  },
  {
    Champion: "Dr. Mundo",
    Gender: "Male",
    Position: "Top",
    Species: "Chemically Altered,Human",
    Resource: "Health costs",
    Ranged: "Melee",
    Region: "Zaun",
    Release: "2009"
  },
  {
    Champion: "Ekko",
    Gender: "Male",
    Position: "Jungle,Middle",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Zaun",
    Release: "2015"
  },
  {
    Champion: "Elise",
    Gender: "Female",
    Position: "Jungle",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Melee,Ranged",
    Region: "Noxus,Shadow Isles",
    Release: "2012"
  },
  {
    Champion: "Evelynn",
    Gender: "Female",
    Position: "Jungle",
    Species: "Demon,Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Runeterra",
    Release: "2009"
  },
  {
    Champion: "Ezreal",
    Gender: "Male",
    Position: "Bottom",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Piltover",
    Release: "2010"
  },
  {
    Champion: "Fiddlesticks",
    Gender: "Other",
    Position: "Jungle",
    Species: "Demon,Spirit",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Runeterra",
    Release: "2009"
  },
  {
    Champion: "Fiora",
    Gender: "Female",
    Position: "Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia",
    Release: "2012"
  },
  {
    Champion: "Fizz",
    Gender: "Male",
    Position: "Middle",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater",
    Release: "2011"
  },
  {
    Champion: "Galio",
    Gender: "Male",
    Position: "Middle,Support",
    Species: "Golem",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia",
    Release: "2010"
  },
  {
    Champion: "Gangplank",
    Gender: "Male",
    Position: "Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater",
    Release: "2009"
  },
  {
    Champion: "Garen",
    Gender: "Male",
    Position: "Top",
    Species: "Human",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Demacia",
    Release: "2010"
  },
  {
    Champion: "Gnar",
    Gender: "Male",
    Position: "Top",
    Species: "Yordle",
    Resource: "Rage",
    Ranged: "Melee,Ranged",
    Region: "Freljord",
    Release: "2014"
  },
  {
    Champion: "Gragas",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2010"
  },
  {
    Champion: "Graves",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bilgewater",
    Release: "2011"
  },
  {
    Champion: "Gwen",
    Gender: "Female",
    Position: "Top",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Camavor,Shadow Isles",
    Release: "2021"
  },
  {
    Champion: "Hecarim",
    Gender: "Male",
    Position: "Jungle",
    Species: "Undead",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Camavor,Shadow Isles",
    Release: "2012"
  },
  {
    Champion: "Heimerdinger",
    Gender: "Male",
    Position: "Middle,Support",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Piltover",
    Release: "2009"
  },
  {
    Champion: "Illaoi",
    Gender: "Female",
    Position: "Top",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater",
    Release: "2015"
  },
  {
    Champion: "Irelia",
    Gender: "Female",
    Position: "Middle,Top",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2010"
  },
  {
    Champion: "Ivern",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Freljord,Ionia",
    Release: "2016"
  },
  {
    Champion: "Janna",
    Gender: "Female",
    Position: "Support",
    Species: "God,Spirit",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima,Zaun",
    Release: "2009"
  },
  {
    Champion: "Jarvan IV",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia",
    Release: "2011"
  },
  {
    Champion: "Jax",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Unknown",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Icathia,Runeterra,Shurima",
    Release: "2009"
  },
  {
    Champion: "Jayce",
    Gender: "Male",
    Position: "Middle,Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee,Ranged",
    Region: "Piltover",
    Release: "2012"
  },
  {
    Champion: "Jhin",
    Gender: "Male",
    Position: "Bottom",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia",
    Release: "2016"
  },
  {
    Champion: "Jinx",
    Gender: "Female",
    Position: "Bottom",
    Species: "Chemically Altered,Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Zaun",
    Release: "2013"
  },
  {
    Champion: "Kai'Sa",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human,Void-Being",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima,Void",
    Release: "2018"
  },
  {
    Champion: "Kalista",
    Gender: "Female",
    Position: "Bottom",
    Species: "Undead",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Camavor,Shadow Isles",
    Release: "2014"
  },
  {
    Champion: "Karma",
    Gender: "Female",
    Position: "Support",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia",
    Release: "2011"
  },
  {
    Champion: "Karthus",
    Gender: "Male",
    Position: "Jungle",
    Species: "Undead",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus,Shadow Isles",
    Release: "2009"
  },
  {
    Champion: "Kassadin",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Void-Being",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima,Void",
    Release: "2009"
  },
  {
    Champion: "Katarina",
    Gender: "Female",
    Position: "Middle",
    Species: "Human",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2009"
  },
  {
    Champion: "Kayle",
    Gender: "Female",
    Position: "Top",
    Species: "Aspect,Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Melee,Ranged",
    Region: "Demacia,Targon",
    Release: "2009"
  },
  {
    Champion: "Kayn",
    Gender: "Male",
    Position: "Jungle",
    Species: "Darkin,Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ionia,Noxus,Runeterra,Shurima",
    Release: "2017"
  },
  {
    Champion: "Kennen",
    Gender: "Male",
    Position: "Top",
    Species: "Yordle",
    Resource: "Energy",
    Ranged: "Ranged",
    Region: "Ionia",
    Release: "2010"
  },
  {
    Champion: "Kha'Zix",
    Gender: "Male",
    Position: "Jungle",
    Species: "Void-Being",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Void",
    Release: "2012"
  },
  {
    Champion: "Kindred",
    Gender: "Other",
    Position: "Jungle",
    Species: "God,Spirit",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Runeterra",
    Release: "2015"
  },
  {
    Champion: "Kled",
    Gender: "Male",
    Position: "Top",
    Species: "Yordle",
    Resource: "Courage",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2016"
  },
  {
    Champion: "Kog'Maw",
    Gender: "Male",
    Position: "Bottom",
    Species: "Void-Being",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Void",
    Release: "2010"
  },
  {
    Champion: "K'Sante",
    Gender: "Male",
    Position: "Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2022"
  },
  {
    Champion: "LeBlanc",
    Gender: "Female",
    Position: "Middle",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus",
    Release: "2010"
  },
  {
    Champion: "Lee Sin",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human,Spiritualist",
    Resource: "Energy",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2011"
  },
  {
    Champion: "Leona",
    Gender: "Female",
    Position: "Support",
    Species: "Aspect,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Targon",
    Release: "2011"
  },
  {
    Champion: "Lillia",
    Gender: "Female",
    Position: "Jungle,Top",
    Species: "Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2020"
  },
  {
    Champion: "Lissandra",
    Gender: "Female",
    Position: "Middle",
    Species: "Human,Iceborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Freljord",
    Release: "2013"
  },
  {
    Champion: "Lucian",
    Gender: "Male",
    Position: "Bottom",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Demacia,Shadow Isles",
    Release: "2013"
  },
  {
    Champion: "Lulu",
    Gender: "Female",
    Position: "Support",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City",
    Release: "2012"
  },
  {
    Champion: "Lux",
    Gender: "Female",
    Position: "Middle,Support",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Demacia",
    Release: "2010"
  },
  {
    Champion: "Malphite",
    Gender: "Male",
    Position: "Top",
    Species: "Golem",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ixtal,Shurima",
    Release: "2009"
  },
  {
    Champion: "Malzahar",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Void-Being",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima,Void",
    Release: "2010"
  },
  {
    Champion: "Maokai",
    Gender: "Male",
    Position: "Jungle,Support",
    Species: "Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shadow Isles",
    Release: "2011"
  },
  {
    Champion: "Master Yi",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2009"
  },
  {
    Champion: "Milio",
    Gender: "Male",
    Position: "Support",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ixtal",
    Release: "2023"
  },
  {
    Champion: "Miss Fortune",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bilgewater",
    Release: "2010"
  },
  {
    Champion: "Wukong",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Vastayan",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2011"
  },
  {
    Champion: "Mordekaiser",
    Gender: "Male",
    Position: "Top",
    Species: "Revenant",
    Resource: "Shield",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2010"
  },
  {
    Champion: "Morgana",
    Gender: "Female",
    Position: "Support",
    Species: "Aspect,Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Demacia,Targon",
    Release: "2009"
  },
  {
    Champion: "Naafiri",
    Gender: "Female",
    Position: "Middle",
    Species: "Darkin,Dog",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2023"
  },
  {
    Champion: "Nami",
    Gender: "Female",
    Position: "Support",
    Species: "Vastayan",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Runeterra",
    Release: "2012"
  },
  {
    Champion: "Nasus",
    Gender: "Male",
    Position: "Top",
    Species: "God-Warrior",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2009"
  },
  {
    Champion: "Nautilus",
    Gender: "Male",
    Position: "Support",
    Species: "Revenant",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater",
    Release: "2012"
  },
  {
    Champion: "Neeko",
    Gender: "Female",
    Position: "Middle,Support",
    Species: "Vastayan",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ixtal",
    Release: "2018"
  },
  {
    Champion: "Nidalee",
    Gender: "Female",
    Position: "Jungle",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Melee,Ranged",
    Region: "Ixtal",
    Release: "2009"
  },
  {
    Champion: "Nilah",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater",
    Release: "2022"
  },
  {
    Champion: "Nocturne",
    Gender: "Male",
    Position: "Jungle",
    Species: "Demon,Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Runeterra",
    Release: "2011"
  },
  {
    Champion: "Nunu & Willump",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human,Yeti",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2009"
  },
  {
    Champion: "Olaf",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Human,Iceborn",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2010"
  },
  {
    Champion: "Orianna",
    Gender: "Female",
    Position: "Middle",
    Species: "Golem",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Piltover",
    Release: "2011"
  },
  {
    Champion: "Ornn",
    Gender: "Male",
    Position: "Top",
    Species: "God,Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2017"
  },
  {
    Champion: "Pantheon",
    Gender: "Male",
    Position: "Jungle,Middle,Support",
    Species: "Aspect,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Targon",
    Release: "2010"
  },
  {
    Champion: "Poppy",
    Gender: "Female",
    Position: "Jungle,Top",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia",
    Release: "2010"
  },
  {
    Champion: "Pyke",
    Gender: "Male",
    Position: "Support",
    Species: "Revenant",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater",
    Release: "2018"
  },
  {
    Champion: "Qiyana",
    Gender: "Female",
    Position: "Middle",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ixtal",
    Release: "2019"
  },
  {
    Champion: "Quinn",
    Gender: "Female",
    Position: "Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Demacia",
    Release: "2013"
  },
  {
    Champion: "Rakan",
    Gender: "Male",
    Position: "Support",
    Species: "Vastayan",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2017"
  },
  {
    Champion: "Rammus",
    Gender: "Male",
    Position: "Jungle",
    Species: "God-Warrior",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2009"
  },
  {
    Champion: "Rek'Sai",
    Gender: "Female",
    Position: "Jungle",
    Species: "Void-Being",
    Resource: "Rage",
    Ranged: "Melee",
    Region: "Shurima,Void",
    Release: "2014"
  },
  {
    Champion: "Rell",
    Gender: "Female",
    Position: "Support",
    Species: "Human,Magically Altered,Magicborn",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2020"
  },
  {
    Champion: "Renata Glasc",
    Gender: "Female",
    Position: "Support",
    Species: "Chemically Altered,Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Zaun",
    Release: "2022"
  },
  {
    Champion: "Renekton",
    Gender: "Male",
    Position: "Top",
    Species: "God-Warrior",
    Resource: "Fury",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2011"
  },
  {
    Champion: "Rengar",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Vastayan",
    Resource: "Ferocity",
    Ranged: "Melee",
    Region: "Ixtal,Shurima",
    Release: "2012"
  },
  {
    Champion: "Riven",
    Gender: "Female",
    Position: "Top",
    Species: "Human",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Ionia,Noxus",
    Release: "2011"
  },
  {
    Champion: "Rumble",
    Gender: "Male",
    Position: "Middle,Top",
    Species: "Yordle",
    Resource: "Heat",
    Ranged: "Melee",
    Region: "Bandle City",
    Release: "2011"
  },
  {
    Champion: "Ryze",
    Gender: "Male",
    Position: "Middle,Top",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Runeterra",
    Release: "2009"
  },
  {
    Champion: "Samira",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus,Shurima",
    Release: "2020"
  },
  {
    Champion: "Sejuani",
    Gender: "Female",
    Position: "Jungle",
    Species: "Human,Iceborn",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2012"
  },
  {
    Champion: "Senna",
    Gender: "Female",
    Position: "Support",
    Species: "Human,Undead",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shadow Isles",
    Release: "2019"
  },
  {
    Champion: "Seraphine",
    Gender: "Female",
    Position: "Support",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Piltover,Zaun",
    Release: "2020"
  },
  {
    Champion: "Sett",
    Gender: "Male",
    Position: "Top",
    Species: "Human,Vastayan",
    Resource: "Grit",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2020"
  },
  {
    Champion: "Shaco",
    Gender: "Male",
    Position: "Jungle",
    Species: "Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Runeterra",
    Release: "2009"
  },
  {
    Champion: "Shen",
    Gender: "Male",
    Position: "Top",
    Species: "Human,Spiritualist",
    Resource: "Energy",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2010"
  },
  {
    Champion: "Shyvana",
    Gender: "Female",
    Position: "Jungle",
    Species: "Dragon,Magically Altered",
    Resource: "Fury",
    Ranged: "Melee",
    Region: "Demacia",
    Release: "2011"
  },
  {
    Champion: "Singed",
    Gender: "Male",
    Position: "Top",
    Species: "Chemically Altered,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Piltover,Zaun",
    Release: "2009"
  },
  {
    Champion: "Sion",
    Gender: "Male",
    Position: "Top",
    Species: "Revenant",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2009"
  },
  {
    Champion: "Sivir",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima",
    Release: "2009"
  },
  {
    Champion: "Skarner",
    Gender: "Male",
    Position: "Jungle",
    Species: "Brackern",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shurima",
    Release: "2011"
  },
  {
    Champion: "Sona",
    Gender: "Female",
    Position: "Support",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Demacia,Ionia",
    Release: "2010"
  },
  {
    Champion: "Soraka",
    Gender: "Female",
    Position: "Support",
    Species: "Celestial",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia,Targon",
    Release: "2009"
  },
  {
    Champion: "Swain",
    Gender: "Male",
    Position: "Middle,Support",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus",
    Release: "2010"
  },
  {
    Champion: "Sylas",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia,Freljord",
    Release: "2019"
  },
  {
    Champion: "Syndra",
    Gender: "Female",
    Position: "Middle",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia",
    Release: "2012"
  },
  {
    Champion: "Tahm Kench",
    Gender: "Male",
    Position: "Support,Top",
    Species: "Demon,Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Bilgewater,Runeterra",
    Release: "2015"
  },
  {
    Champion: "Taliyah",
    Gender: "Female",
    Position: "Jungle,Middle",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima",
    Release: "2016"
  },
  {
    Champion: "Talon",
    Gender: "Male",
    Position: "Jungle,Middle",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Noxus",
    Release: "2011"
  },
  {
    Champion: "Taric",
    Gender: "Male",
    Position: "Support",
    Species: "Aspect,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia,Targon",
    Release: "2009"
  },
  {
    Champion: "Teemo",
    Gender: "Male",
    Position: "Top",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City",
    Release: "2009"
  },
  {
    Champion: "Thresh",
    Gender: "Male",
    Position: "Support",
    Species: "Undead",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shadow Isles",
    Release: "2013"
  },
  {
    Champion: "Tristana",
    Gender: "Female",
    Position: "Bottom",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City",
    Release: "2009"
  },
  {
    Champion: "Trundle",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Iceborn,Troll",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2010"
  },
  {
    Champion: "Tryndamere",
    Gender: "Male",
    Position: "Top",
    Species: "Human,Magically Altered",
    Resource: "Fury",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2009"
  },
  {
    Champion: "Twisted Fate",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bilgewater",
    Release: "2009"
  },
  {
    Champion: "Twitch",
    Gender: "Male",
    Position: "Bottom",
    Species: "Chemically Altered,Rat",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Zaun",
    Release: "2009"
  },
  {
    Champion: "Udyr",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Human,Spiritualist",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord,Ionia",
    Release: "2009"
  },
  {
    Champion: "Urgot",
    Gender: "Male",
    Position: "Top",
    Species: "Chemically Altered,Cyborg,Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Noxus,Zaun",
    Release: "2010"
  },
  {
    Champion: "Varus",
    Gender: "Male",
    Position: "Bottom,Middle",
    Species: "Darkin,Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia,Runeterra,Shurima",
    Release: "2012"
  },
  {
    Champion: "Vayne",
    Gender: "Female",
    Position: "Bottom,Top",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Demacia",
    Release: "2011"
  },
  {
    Champion: "Veigar",
    Gender: "Male",
    Position: "Middle",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City,Runeterra",
    Release: "2009"
  },
  {
    Champion: "Vel'Koz",
    Gender: "Male",
    Position: "Middle,Support",
    Species: "Void-Being",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Void",
    Release: "2014"
  },
  {
    Champion: "Vex",
    Gender: "Female",
    Position: "Middle",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City,Shadow Isles",
    Release: "2021"
  },
  {
    Champion: "Vi",
    Gender: "Female",
    Position: "Jungle",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Piltover,Zaun",
    Release: "2012"
  },
  {
    Champion: "Viego",
    Gender: "Male",
    Position: "Jungle",
    Species: "Undead",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Camavor,Shadow Isles",
    Release: "2021"
  },
  {
    Champion: "Viktor",
    Gender: "Male",
    Position: "Middle",
    Species: "Cyborg,Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Piltover,Zaun",
    Release: "2011"
  },
  {
    Champion: "Vladimir",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Magically Altered",
    Resource: "Bloodthirst",
    Ranged: "Ranged",
    Region: "Camavor,Noxus,Shadow Isles",
    Release: "2010"
  },
  {
    Champion: "Volibear",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "God,Spirit",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Freljord",
    Release: "2011"
  },
  {
    Champion: "Warwick",
    Gender: "Male",
    Position: "Jungle,Top",
    Species: "Chemically Altered,Cyborg,Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Zaun",
    Release: "2009"
  },
  {
    Champion: "Xayah",
    Gender: "Female",
    Position: "Bottom",
    Species: "Vastayan",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ionia",
    Release: "2017"
  },
  {
    Champion: "Xerath",
    Gender: "Male",
    Position: "Middle,Support",
    Species: "God-Warrior",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Shurima",
    Release: "2011"
  },
  {
    Champion: "Xin Zhao",
    Gender: "Male",
    Position: "Jungle",
    Species: "Human",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Demacia,Ionia,Noxus",
    Release: "2010"
  },
  {
    Champion: "Yasuo",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Magicborn",
    Resource: "Flow",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2013"
  },
  {
    Champion: "Yone",
    Gender: "Male",
    Position: "Middle,Top",
    Species: "Human,Magically Altered",
    Resource: "Manaless",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2020"
  },
  {
    Champion: "Yorick",
    Gender: "Male",
    Position: "Top",
    Species: "Human,Magically Altered",
    Resource: "Mana",
    Ranged: "Melee",
    Region: "Shadow Isles",
    Release: "2011"
  },
  {
    Champion: "Yuumi",
    Gender: "Female",
    Position: "Support",
    Species: "Cat,Magically Altered",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Bandle City",
    Release: "2019"
  },
  {
    Champion: "Zac",
    Gender: "Male",
    Position: "Jungle",
    Species: "Golem",
    Resource: "Health costs",
    Ranged: "Melee",
    Region: "Zaun",
    Release: "2013"
  },
  {
    Champion: "Zed",
    Gender: "Male",
    Position: "Middle",
    Species: "Human,Magically Altered",
    Resource: "Energy",
    Ranged: "Melee",
    Region: "Ionia",
    Release: "2012"
  },
  {
    Champion: "Zeri",
    Gender: "Female",
    Position: "Bottom",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Zaun",
    Release: "2022"
  },
  {
    Champion: "Ziggs",
    Gender: "Male",
    Position: "Bottom,Middle",
    Species: "Yordle",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Zaun",
    Release: "2012"
  },
  {
    Champion: "Zilean",
    Gender: "Male",
    Position: "Support",
    Species: "Human,Magicborn",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Icathia,Runeterra,Shurima",
    Release: "2009"
  },
  {
    Champion: "Zoe",
    Gender: "Female",
    Position: "Middle",
    Species: "Aspect,Human",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Targon",
    Release: "2017"
  },
  {
    Champion: "Zyra",
    Gender: "Female",
    Position: "Support",
    Species: "Unknown",
    Resource: "Mana",
    Ranged: "Ranged",
    Region: "Ixtal",
    Release: "2012"
  }
]

export default data;