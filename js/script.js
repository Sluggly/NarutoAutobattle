// Classe Ninja
class Ninja {
	constructor(name, rang, stat, att, def, rar, rol, icon) {
		this.nom = name;
		this.range = rang;
		this.mainstat = stat;
		this.attack = att;
		this.defense = def;
		this.rarity = rar;
		this.role = rol;
		this.spells = [];
		this.combo = [];
		this.src = './src/' + icon;
	}
	
	add_combo(combo) {
		this.combo.push(combo);
	}
}

// Classe Combo
class Combo {
	constructor(name, list, typ) {
		this.nom = name;
		this.ninjalist = list;
		this.type = typ;
		this.desc = [];
	}
}

// Classe Spell
class Spell {
	constructor(name, des, typ) {
		this.nom = name;
		this.type = typ;
		this.desc = des;
	}
}

// Classe Item
class Item {
	constructor(name, rar, fus, icon, eff) {
		this.nom = name;
		this.rarity = rar;
		this.effects = eff;
		this.fusion = fus;
		this.required = [];
		this.src = './src/' + icon;
	}
}

// Dictionnaire et listes
var filtreList = [];
var roleDict = [];
var ninjaDict = [];
var ninjaList = [];
var itemList = [];
var itemDict = [];
var statDict = [];
var statImageDict = [];
var typeImageDict = [];
var filtreDict = [];
var typeFiltreDict = [];
var rarityImageDict = [];

// Initialisation des dictionnaires
roleDict['DPS'] = [];
roleDict['TANK'] = [];
roleDict['SUPPORT'] = [];
roleDict['STUN'] = [];
roleDict['BURST'] = [];
roleDict['AOE'] = [];
roleDict['ASSASSIN'] = [];
roleDict['New'] = [];
statDict['A'] = 'Agilité';
statDict['F'] = 'Force';
statDict['I'] = 'Intelligence';
statImageDict['A'] = 'src/Agil.png';
statImageDict['F'] = 'src/Force.png';
statImageDict['I'] = 'src/Intel.png';
typeImageDict['Eau'] = 'src/Eau.png';
typeImageDict['Feu'] = 'src/Feu.png';
typeImageDict['Air'] = 'src/Air.png';
typeImageDict['Terre'] = 'src/Terre.png';
typeImageDict['Foudre'] = 'src/Foudre.png';
typeImageDict['Normal'] = 'src/Normal.png';
typeImageDict['God'] = 'src/God.png';
filtreDict['Force'] = 'F';
filtreDict['Agilité'] = 'A';
filtreDict['Intelligence'] = 'I';
typeFiltreDict['Force'] = 'mainstat';
typeFiltreDict['Agilité'] = 'mainstat';
typeFiltreDict['Intelligence'] = 'mainstat';
typeFiltreDict['Ranged'] = 'range';
typeFiltreDict['Melee'] = 'range';
typeFiltreDict['R'] = 'rarity';
typeFiltreDict['SR'] = 'rarity';
typeFiltreDict['SSR'] = 'rarity';
typeFiltreDict['USR'] = 'rarity';
typeFiltreDict['DPS'] = 'role';
typeFiltreDict['TANK'] = 'role';
typeFiltreDict['STUN'] = 'role';
typeFiltreDict['BURST'] = 'role';
typeFiltreDict['AOE'] = 'role';
typeFiltreDict['SUPPORT'] = 'role';
typeFiltreDict['New'] = 'role';
rarityImageDict['R'] = 'src/R.png';
rarityImageDict['SR'] = 'src/SR.png';
rarityImageDict['SSR'] = 'src/SSR.png';
rarityImageDict['USR'] = 'src/USR.png';

// Variables globales
var page = document.getElementById("Page-Menu-Ninja");
var old = true;
var displayedNinja = Hinata;
var displayedItem = Samehada;

// Boutons
var boutonVersionProfil = document.getElementById("Bouton-Profil-Toggle-Combo");
var boutonItemListToggle = document.getElementById("Bouton-Toggle-Item-List");
var boutonNinjaListToggle = document.getElementById("Bouton-Toggle-Ninja-List");

// Clic sur le bouton qui change version profil
boutonVersionProfil.onclick = function(){
	changeVersion();
}

// Clic sur bouton affiche Item list
boutonItemListToggle.onclick = function(){
	changePage('Page-Menu-Item');
}

// Clic sur bouton affiche Item list
boutonNinjaListToggle.onclick = function(){
	changePage('Page-Menu-Ninja');
}

// Création des ninja
{
var Asuma = createNinja('Asuma Sarutobi',0,'A','Air','Feu','SR',['DPS'],'Asuma.png');
var Ay = createNinja('Ay',0,'F','Foudre','Foudre','SSR',['BURST'],'Ay.png');
var Choji = createNinja('Choji',0,'F','Feu','Feu','R',['TANK'],'Choji.png');
var Chojuro = createNinja('Chojuro',0,'A','Eau','Eau','SR',['BURST'],'Chojuro.png');
var Chiyo = createNinja('Grandma Chiyo',600,'I','Normal','Normal','R',['SUPPORT'],'Chiyo.png');
var Danzo = createNinja('Danzo',600,'A','Feu','Air','SR',['DPS', 'STUN'],'Danzo.png');
var Darui = createNinja('Darui',0,'F','Foudre','Foudre','SR',['New'],'Darui.png');
var Deidara = createNinja('Deidara',600,'I','Terre','Terre','SR',['DPS'],'Deidara.png');
var Gaara = createNinja('Gaara',600,'I','Air','Air','SR',['SUPPORT', 'STUN'],'Gaara.png');
var Guren = createNinja('Guren',600,'I','Eau','Eau','SR',['New'],'Guren.png');
var Haku = createNinja('Haku',600,'A','Eau','Air','R',['DPS'],'Haku.png');
var Hanzo = createNinja('Hanzo',0,'F','Feu','Feu','SR',['New'],'Hanzo.png');
var Hashirama = createNinja('Hashirama Senju',0,'F','Terre','Eau','SSR',['TANK', 'STUN'],'Hashirama.png');
var Hidan = createNinja('Hidan',245,'F','Normal','Normal','SR',['TANK'],'Hidan.png');
var Hinata = createNinja('Hinata Hyuga',600,'A','Foudre','Foudre','SR',['DPS'],'Hinata.png');
var Hiruzen = createNinja('Hiruzen Sarutobi',600,'I','Terre','Eau','SR',['AOE'],'Hiruzen.png');
var Ino = createNinja('Ino Yamanaka',600,'A','Foudre','Foudre','R',['STUN'],'Ino.png');
var Itachi = createNinja('Itachi Uchiha',600,'I','Feu','Feu','SSR',['BURST', 'SUPPORT'],'Itachi.png');
var Itachie = createNinja('Itachi Edo Tensei',0,'A','God','God','USR',['AOE', 'DPS'],'Itachie.png');
var Jiraya = createNinja('Jiraya',0,'F','Feu','Terre','SR',['TANK','STUN'],'Jiraya.png');
var Jirobo = createNinja('Jirobo',0,'F','Air','Foudre','SR',['New'],'Jirobo.png');
var Jugo = createNinja('Jugo',0,'F','Normal','God','SR',['TANK', 'STUN'],'Jugo.png');
var Kabuto = createNinja('Sage Kabuto',600,'I','God','Normal','SSR',['SUPPORT', 'STUN'],'Kabuto.png');
var Kaguya = createNinja('Kaguya',135,'F','God','God','USR',['DPS'],'Kaguya.png');
var Kakashi = createNinja('Kakashi Hatake',0,'A','Foudre','Terre','SR',['STUN'],'Kakashi.png');
var Kakuzu = createNinja('Kakuzu',0,'F','Foudre','Foudre','SR',['DPS'],'Kakuzu.png');
var Kankuro = createNinja('Kankuro',600,'A','Foudre','Terre','SR',['DPS'],'Kankuro.png');
var Karin = createNinja('Karin',600,'A','Feu','Feu','R',['SUPPORT'],'Karin.png');
var Karui = createNinja('Karui',0,'A','Foudre','Foudre','SR',['New'],'Karui.png');
var Kiba = createNinja('Kiba',0,'A','Terre','Terre','R',['DPS'],'Kiba.png');
var Kidomaru = createNinja('Kidomaru',0,'A','Normal','Terre','SR',['New'],'Kidomaru.png');
var Killer = createNinja('Killer Bee',0,'A','Foudre','Eau','SR',['DPS'],'Killer.png');
var Kimimaro = createNinja('Kimimaro',0,'F','Normal','Normal','SR',['TANK', 'STUN'],'Kimimaro.png');
var Kisame = createNinja('Kisame Hoshigaki',0,'F','Eau','Eau','SR',['DPS', 'STUN'],'Kisame.png');
var Konan = createNinja('Konan',800,'A','Eau','Terre','SR',['AOE'],'Konan.png');
var Kurenai = createNinja('Kurenai Yuhi',600,'I','Feu','Feu','SR',['SUPPORT', 'STUN'],'Kurenai.png');
var Kurotsuchi = createNinja('Kurotsuchi',600,'A','Eau','Terre','SR',['STUN', 'SUPPORT'],'Kurotsuchi.png');
var Kushina = createNinja('Kushina Uzumaki',600,'I','Eau','Eau','SR',['SUPPORT'],'Kushina.png');
var Madara = createNinja('Madara Uchiha',0,'F','Feu','Feu','SSR',['DPS', 'STUN'],'Madara.png');
var Madaras = createNinja('Madara Six Path',0,'I','God','God','USR',['DPS', 'STUN'],'Madaras.png');
var Maito = createNinja('Maito Gai',0,'F','Normal','Normal','SR',['BURST'],'Maito.png');
var Mei = createNinja('Mei Terumi',600,'A','Eau','Eau','SR',['DPS', 'SUPPORT'],'Mei.png');
var Mifune = createNinja('Mifune',0,'A','Normal','Normal','SR',['New'],'Mifune.png');
var Minato = createNinja('Minato Namikaze',0,'A','Eau','Air','SSR',['ASSASSIN'],'Minato.png');
var Narutoj = createNinja('Naruto Jinchuriky',0,'F','Air','Air','SR',['TANK'],'Narutoj.png');
var Narutos = createNinja('Naruto Sage',0,'A','Air','Air','SSR',['DPS', 'STUN'],'Narutos.png');
var Narutosp = createNinja('Naruto Six Path',0,'F','God','God','USR',['BURST', 'STUN'],'Narutosp.png');
var Neji = createNinja('Neji Hyuga',0,'A','Eau','Terre','SR',['BURST'],'Neji.png');
var Obito = createNinja('Obito Uchiha',0,'A','Feu','Feu','SSR',['DPS', 'STUN'],'Obito.png');
var Obitos = createNinja('Obito Six Path',600,'I','God','God','USR',['DPS', 'SUPPORT'],'Obitos.png');
var Omoï = createNinja('Omoï',0,'A','Foudre','Foudre','SR',['New'],'Omoï.png');
var Onoki = createNinja('Onoki',600,'I','Terre','Terre','SR',['AOE'],'Onoki.png');
var Orochimaru = createNinja('Orochimaru',600,'I','Air','Air','SR',['AOE'],'Orochimaru.png');
var Pein = createNinja('Tendo Pein',0,'A','God','Normal','SSR',['DPS'],'Pein.png');
var Rin = createNinja('Rin',600,'I','Normal','Normal','R',['SUPPORT'],'Rin.png');
var Rock = createNinja('Rock Lee',0,'A','Normal','Normal','R',['BURST'],'Rock.png');
var Sai = createNinja('Sai',600,'A','Normal','Normal','SR',['New'],'Sai.png');
var Sakon = createNinja('Sakon',0,'A','Foudre','Eau','SR',['New'],'Sakon.png');
var Sakura = createNinja('Sakura Haruno',600,'I','Normal','Normal','R',['SUPPORT'],'Sakura.png');
var Sasori = createNinja('Sasori',600,'A','Air','Air','SR',['AOE'],'Sasori.png');
var Sasuke = createNinja('Sasuke Uchiha',0,'A','Foudre','Foudre','SR',['AOE'],'Sasuke.png');
var Sasukes = createNinja('Sasuke Six Path',0,'A','God','God','USR',['BURST', 'DPS'],'Sasukes.png');
var Shikamaru = createNinja('Shikamaru Nara',600,'I','Terre','Terre','R',['STUN', 'SUPPORT'],'Shikamaru.png')
var Shino = createNinja('Shino Aburame',600,'I','Terre','Terre','SR',['DPS'],'Shino.png');;
var Shisui = createNinja('Shisui Uchiha',0,'A','Feu','Feu','SSR',['BURST'],'Shisui.png');
var Suigetsu = createNinja('Suigetsu',0,'A','Eau','Eau','SR',['DPS', 'STUN'],'Suigetsu.png');
var Tayuya = createNinja('Tayuya',600,'I','Feu','Feu','SR',['New'],'Tayuya.png');
var Temari = createNinja('Temari',600,'A','Air','Air','SR',['DPS'],'Temari.png');
var Tenten = createNinja('Tenten',525,'A','Normal','Air','R',['DPS'],'Tenten.png');
var Tobirama = createNinja('Tobirama Senju',0,'A','Eau','Eau','SR',['AOE'],'Tobirama.png');
var Tsunade = createNinja('Tsunade',0,'F','Eau','Feu','SR',['TANK', 'STUN'],'Tsunade.png');
var Utakata = createNinja('Utakata',600,'I','Eau','Eau','SR',['New'],'Utakata.png');
var Yamato = createNinja('Yamato',0,'F','Terre','Air','SR',['New'],'Yamato.png');
var Zabuza = createNinja('Zabuza',0,'A','Eau','Eau','R',['DPS'],'Zabuza.png');
var Zetsu = createNinja('Zetsu',600,'A','Terre','Terre','SR',['DPS', 'SUPPORT'],'Zetsu.png');
var Unknown = createNinja('Unknown',0,'A','God','God','USR',[],'Unknown.png');
}

// Listes des spells
{
var Poongdun = createSpell(Asuma,'DPS','Poogdun Nomination','When hit, Levelx10 damage, 10 attacks, 250 range [100-1000] damage');
var Hwadun = createSpell(Asuma,'','','');
var Hwadun = createSpell(Asuma,'','','');
}

// Listes des combos
{
var Best = createCombo('Best', [Kiba, Choji], 'new');
var Leica = createCombo('Leica', [Darui, Ay], 'new');
var InnerLove = createCombo('Inner Love', [Chiyo, Sasori], 'both');
var PuppetDoctor = createCombo('Puppet Doctor', [Chiyo, Sasori, Kankuro], 'new');
var Inconvenient = createCombo('Inconvenient', [Kakuzu, Hidan, Shikamaru, Asuma], 'new');
var SoundFriend = createCombo('Sound Friend', [Jirobo, Kimimaro], 'new');
var Personality = createCombo('Personality', [Utakata, Unknown], 'new');
var LiquorOfWater = createCombo('Liquor of Water', [Utakata, Suigetsu], 'new');
var SoundColleague = createCombo('Sound Colleague', [Kidomaru, Kimimaro], 'new');
var Duel = createCombo('Duel', [Kidomaru, Neji], 'new');
var SoundFellow = createCombo('Sound Fellow', [Sakon, Kimimaro], 'new');
var RootSource = createCombo('Root Source', [Sai, Danzo], 'new');
var Couple = createCombo('Couple', [Sai, Ino], 'new');
var Sound4 = createCombo('Sound 4', [Tayuya, Kidomaru, Sakon, Jirobo], 'new');
var SoundCompanion = createCombo('Sound Companion', [Tayuya, Kimimaro], 'new');
var BloodSystemLimit = createCombo('Blood System Limit', [Guren, Haku], 'new');
var Trauma = createCombo('Trauma', [Guren, Hinata], 'new');
var TeamYamato = createCombo('Team Yamato', [Yamato, Narutoj, Sakura, Sai], 'new');
var SeniorSuccessor = createCombo('Senior Successor', [Yamato, Kakashi], 'new');
var CloudVillageWarrior = createCombo('Cloud Village Warrior', [Omoï, Killer, Darui, Karui], 'new');
var TwoPeople = createCombo('Two People', [Omoï, Karui], 'new');
var AnotherBattle = createCombo('Another Battle', [Mifune, Hanzo], 'new');
var TeamMinato = createCombo('Team Minato', [Rin, Obito, Kakashi], 'both');
var WorkingShadow = createCombo('Working in the Shadow', [Zetsu, Kabuto, Madara, Obito, Pein], 'both');
var SandTrio = createCombo('The Sand Trio', [Gaara, Temari, Kankuro], 'both');
var FiveKages = createCombo('Five Kages', [Onoki, Tsunade, Mei, Gaara, Ay], 'both');
var Team7 = createCombo('Team 7', [Sakura, Narutoj, Sasuke, Kakashi], 'both');
var TeamTaka = createCombo('Team Taka', [Karin, Jugo, Suigetsu, Sasuke], 'both');
var Brothers = createCombo('Brothers', [Itachi, Sasuke], 'both');
var Artistic = createCombo('Artistic', [Sasori, Deidara], 'both');
var Akatsuki = createCombo('Akatsuki Quadrant', [Zetsu, Itachi, Deidara, Konan], 'both');
var Team15 = createCombo('Team 15', [Kiba, Hinata, Shino, Kurenai], 'both');
var RedDawn = createCombo('Red Dawn', [Kurenai, Asuma], 'both');
var Team3 = createCombo('Team 3', [Tenten, Rock, Neji, Maito], 'both');
var Mizu = createCombo('Mizukage Bodyguard', [Chojuro, Mei], 'both');
var Confident = createCombo('Confident', [Chojuro, Zabuza], 'new');
var Strategist = createCombo('Strategist', [Shikamaru, Temari], 'both');
var EvilShame = createCombo('Evil Shame', [Kisame, Zabuza, Suigetsu], 'new');
var Hyuga = createCombo('Hyuga', [Hinata, Neji], 'both');
var PassingSnow = createCombo('Passing Snow', [Zabuza, Haku], 'both');
var JugosCage = createCombo('Jugo Cage', [Jugo, Kimimaro], 'both');
var Sennins = createCombo('Legendary Sennins', [Jiraya, Tsunade, Orochimaru], 'both');
var Prophecy = createCombo('Prophecy', [Narutos, Jiraya], 'both');
var Heavenly = createCombo('Heavenly Pained', [Pein, Konan], 'both');
var Rival = createCombo('Rival', [Maito, Kakashi], 'both');
var PowerYouth = createCombo('Power of Youth', [Rock, Maito], 'both');
var AspiringPeace = createCombo('Aspiring Peace', [Narutos, Pein], 'both');
var Husband = createCombo('Husband', [Hinata, Narutos], 'both');
var FourHokage = createCombo('Four Hokages', [Hashirama, Tobirama, Minato, Hiruzen], 'new');
var Senju = createCombo('Senju Brothers', [Hashirama, Tobirama], 'both');
var BestFriends = createCombo('Best of Friends', [Itachi, Shisui], 'both');
var Danzo_Shisui = createCombo('Danzo_Shisui', [Danzo, Shisui], 'both');
var Ay_Bee = createCombo('Ay_Bee', [Ay, Killer], 'both');
var Family = createCombo('Family', [Narutoj, Minato, Kushina], 'both');
var CurseMark = createCombo('Curse Mark', [Orochimaru, Kimimaro], 'both');
var MasterDisc = createCombo('Master and Disciple', [Orochimaru, Hiruzen], 'both');
var Oro_Sage = createCombo('Oro_Sage', [Orochimaru, Kabuto], 'both');
var Itachi_Kisame = createCombo('Itachi_Kisame', [Itachi, Kisame], 'both');
var RootResearch = createCombo('Root Research', [Hashirama, Yamato], 'new');
var Team10 = createCombo('Team 10', [Choji, Ino, Shikamaru, Asuma], 'both');
var Asu_Shika = createCombo('Asu_Shika', [Shikamaru, Asuma], 'both');
var HundredSeal = createCombo('Hundred Seal', [Sakura, Tsunade], 'both');
var ArtPuppets = createCombo('Art of Puppets', [Sasori, Kankuro], 'old');
var UndeadDuo = createCombo('Undead Duo', [Hidan, Kakuzu], 'both');
var LeafRoot = createCombo('Leaf and Root', [Danzo, Hiruzen], 'both');
var Tsuchi = createCombo('Tsuchikage Bodyguard', [Onoki, Kurotsuchi], 'both');
var TailedBeast = createCombo('Tailed Beasts', [Killer, Narutoj], 'both');
var FiveHokage = createCombo('Five Hokages', [Hashirama, Tobirama, Minato, Hiruzen, Tsunade], 'old');
var Strongest = createCombo('Strongest Ninjas', [Hashirama, Madara], 'both');
var Uchiha = createCombo('Uchiha Clan', [Madara, Itachi, Shisui, Obito, Sasuke], 'old');
}

// Description des combos
{

}

// Listes des items nouveaux
{
var Kunai = createItem('Kunai', 'R', ['None'], 'Kunai.png', ['150 Dmg']);
var Metal = createItem('Metal Needle', 'R', ['None'], 'Metal.png', ['15% Attack Speed']);
var Wisdom = createItem('Gloves of Wisdom', 'R', ['None'], 'Wisdom.png', ['30 Intelligence']);
var Sealing = createItem('Sealing Gloves', 'R', ['None'], 'Sealing.png', ['9% Spell Damage']);
var Fighter = createItem('Fighter Gloves', 'R', ['None'], 'Fighter.png', ['15 Armor']);
var Helmet = createItem('Ninja Helmet', 'R', ['None'], 'Helmet.png', ['30 Strength']);
var Boots = createItem('Ninja Boots', 'R', ['None'], 'Boots.png', ['30 Agility']);
var Cloth = createItem('Ninja Cloth', 'R', ['None'], 'Cloth.png', ['3200 Hp']);
var Thunder = createItem('Thunder Sword', 'SR', [Kunai,Kunai], 'Thunder.png', ['300 Dmg','Chance on hit to damage 6 units for (200+30*level) Damage']);
var Raito = createItem('Raito Twin Swords', 'SR', [Kunai,Metal], 'Raito.png', ['150 Dmg','15% Attack Speed','Gain 1 temporary level at start of combat']);
var Second = createItem('Second Sword', 'SR', [Kunai,Wisdom], 'Second.png', ['150 Dmg','30 Intelligence','Heal for 8% of the maximum health of killed enemy']);
var Mace = createItem('Mace', 'SR', [Kunai,Sealing], 'Mace.png', ['150 Dmg','9% Spell Damage','On attack stun for 1.5s (11s cooldown)']);
var Toad = createItem('Toad Skin', 'SR', [Kunai,Fighter], 'Toad.png', ['150 Dmg','15 Armor','Gain 10% health shield against physical damages']);
var Iron = createItem('Iron Knuckle', 'SR', [Kunai,Helmet], 'Iron.png', ['150 Dmg','30 Strength','10% Armor penetration']);
var Hiramekarei = createItem('Hiramekarei Sword', 'SR', [Kunai,Boots], 'Hiramekarei.png', ['150 Dmg','30 Agility','20% Damage increase']);
var Reaper = createItem('Reaper', 'SR', [Kunai,Cloth], 'Reaper.png', ['150 Dmg','3200 Hp','When killed, deal 15% of maximum health as damage to enemy']);
var Kurowasa = createItem('Kurowasa', 'SR', [Metal,Metal], 'Kurowasa.png', ['30% Attack Speed','On hit 15% to stun enemy for 0.8s']);
var Cyclone = createItem('Cyclone Sword', 'SR', [Metal,Wisdom], 'Cyclone.png', ['15% Attack Speed','30 Intelligence','Cast 5s cyclone on the first enemy hit']);
var Chil = createItem('Chilsung Sword', 'SR', [Metal,Sealing], 'Chil.png', ['15% Attack Speed','9% Spell Damage','12% Spell Evasion']);
var Hokage = createItem('Hokage Coat', 'SR', [Metal,Fighter], 'Hokage.png', ['15% Attack Speed','15 Armor','Reduce attack speed of attacker by 15% for 3s (stackable)']);
var Samehada = createItem('Samehada Sword', 'SR', [Metal,Helmet], 'Samehada.png', ['15% Attack Speed','30 Strength','On hit burns 3 mana and (200+5*level) health to enemy']);
var Wave = createItem('Wave Line', 'SR', [Metal,Boots], 'Wave.png', ['15% Attack Speed','30 Agility','12% Evasion']);
var Darkness = createItem('Darkness', 'SR', [Metal,Cloth], 'Darkness.png', ['15% Attack Speed','3200 Hp','Deals 15% of current health to the first attacker']);
var Summon = createItem('Summon Sword', 'SR', [Wisdom,Wisdom], 'Summon.png', ['60 Intelligence','150% bonus physical damages against summons']);
var Anbu = createItem('Anbu Mask', 'SR', [Wisdom,Sealing], 'Anbu.png', ['30 Intelligence','9% Spell Damage','Reduce skill cooldown by 12%']);
var HokageHelmet = createItem('Hokage Helmet', 'SR', [Wisdom,Fighter], 'HokageHelmet.png', ['30 Intelligence','15 Armor','Gain 10% health shield against spell damages']);
var Necklace = createItem('Necklace', 'SR', [Wisdom,Helmet], 'Necklace.png', ['30 Intelligence','30 Strength','Gain shield against spell damages of 5% of your max hp after killing an enemy (stackable)']);
var Chain = createItem('Chain Sickle', 'SR', [Wisdom,Boots], 'Chain.png', ['30 Intelligence','30 Agility','Stun for 3s after dying']);
var Arrow = createItem('Arrow', 'SR', [Wisdom,Cloth], 'Arrow.png', ['30 Intelligence','3200 Hp','60% to Bangkak-2 on hit (stackable)']);
var Nuibari = createItem('Nuibari Sword', 'SR', [Sealing,Sealing], 'Nuibari.png', ['18% Spell Damage','30 Mana and burns mana for 5 on hit']);
var Cloak = createItem('Cloak', 'SR', [Sealing,Fighter], 'Cloak.png', ['9% Spell Damage','15 Armor','15% spell resistance']);
var Kabutowari = createItem('Kabutowari Sword', 'SR', [Sealing,Helmet], 'Kabutowari.png', ['9% Spell Damage','30 Strength','9% Armor Penetration']);
var Doom = createItem('Doom Blade', 'SR', [Sealing,Boots], 'Doom.png', ['9% Spell Damage','30 Agility','250 Damage']);
var Mask = createItem('Mask', 'SR', [Sealing,Cloth], 'Mask.png', ['9% Spell Damage','3200 Hp','First hit on enemy silence for 3s']);
var Fire = createItem('Fire Coat', 'SR', [Fighter,Fighter], 'Fire.png', ['30 Armor','When hit, 50% to block 800 damages']);
var Thornmail = createItem('Thornmail', 'SR', [Fighter,Helmet], 'Thornmail.png', ['15 Armor','30 Strength','When hit, returns 15% damages to attacker']);
var Coat = createItem('Coat', 'SR', [Fighter,Boots], 'Coat.png', ['15 Armor','30 Agility','180 Chenzen']);
var AkatsukiCloak = createItem('Akatsuki Cloak', 'SR', [Fighter,Cloth], 'AkatsukiCloak.png', ['15 Armor','3200 Hp','If health drops below 25%, allies in 1000 range heal for 2000 hp']);
var Kubiribocho = createItem('Kubiribocho Sword', 'SR', [Helmet,Helmet], 'Kubiribocho.png', ['60 Strength','15% Lifesteal']);
var Wind = createItem('Wind Sword', 'SR', [Helmet,Boots], 'Wind.png', ['30 Strength','30 Agility','30% Attack Speed']);
var AkatsukiCourt = createItem('Akatsuki Court', 'SR', [Helmet,Cloth], 'AkatsukiCourt.png', ['30 Strength','3200 Hp','Gain shield against physical damages of 5% of your max hp after killing an enemy (stackable)']);
var Jounin = createItem('Jounin Boots', 'SR', [Boots,Boots], 'Jounin.png', ['60 Agility','80 Movespeed (stackable)']);
var Shibuki = createItem('Shibuki Sword', 'SR', [Boots,Cloth], 'Shibuki.png', ['30 Agility','3200 Hp','12% Critical Strike (Critical strike is 100% bonus damage on attack)']);
var Samurai = createItem('Samurai Armor', 'SR', [Cloth,Cloth], 'Samurai.png', ['6400 Hp','If you die, revive with 10% hp']);
}

// Fonction affiche profil d'un ninja
function profilNinja(btn) {
	var ninja = ninjaDict[btn.value];
	displayedNinja = ninja;
	changePage("Page-Profil-Ninja");
	document.getElementById("Page-Profil-Ninja-Image").src = ninja.src;
	document.getElementById("Page-Profil-Nom-Ninja").innerHTML = ninja.nom;
	document.getElementById("Page-Profil-Range").innerHTML = 'Range: ' + ninja.range;
	document.getElementById("Page-Profil-Stats").innerHTML = statDict[ninja.mainstat];
	document.getElementById("Page-Profil-Image-Stats").src = statImageDict[ninja.mainstat];
	document.getElementById("Page-Profil-Attack").innerHTML = 'Attack: ' + ninja.attack;
	document.getElementById("Page-Profil-Image-Attack").src = typeImageDict[ninja.attack];
	document.getElementById("Page-Profil-Defense").innerHTML = 'Defense: ' + ninja.defense;
	document.getElementById("Page-Profil-Image-Defense").src = typeImageDict[ninja.defense];
	document.getElementById("Page-Profil-Rarity-Image").src = rarityImageDict[ninja.rarity];
	if (ninja.role.length == 1) {
		document.getElementById("Page-Profil-Role").innerHTML = 'Role: ' + ninja.role[0];
	}
	else {
		document.getElementById("Page-Profil-Role").innerHTML = 'Role: ' + ninja.role[0] + ' + ' + ninja.role[1];
	}
	refreshCombo(ninja);
}

// Fonction affiche profil d'un item
function profilItem(btn) {
	var item = itemDict[btn.value];
	displayedItem = item;
	changePage("Page-Profil-Item");
	document.getElementById("Page-Profil-Item-Image").src = item.src;
	document.getElementById("Page-Profil-Nom-Item").innerHTML = item.nom;
	document.getElementById("Page-Profil-Item-Rarity-Image").src = rarityImageDict[item.rarity];
	var effectsListe = document.getElementById("Page-Profil-Item-Effects");
	effectsListe.innerHTML = "";
	var h1;
	var br = document.createElement("br");
	for (var i in item.effects) {
		h1 = document.createElement("h1");
		effectsListe.appendChild(h1)
		h1.innerHTML = item.effects[i];
		effectsListe.appendChild(br);
	}
	if (item.rarity == 'R') {
		document.getElementById("Page-Profil-Item-Fusion").style.display = 'none';
		document.getElementById("Page-Profil-Item-Fusion-Text").style.display = 'none';
		var fusionListDiv = document.getElementById("Page-Profil-Item-Fusion-List");
		fusionListDiv.style.display = 'block';
		var fusionListDiv2 = document.getElementById("Page-Profil-Item-Fusion-List2");
		fusionListDiv2.style.display = 'block';
		document.getElementById("Page-Profil-Item-Fusion-List-Text").style.display = 'block';
		fusionListDiv.innerHTML = "";
		fusionListDiv2.innerHTML = "";
		for (var j in item.required) {
			if (j%2 == 0) {
				var currentDiv = fusionListDiv;
			}
			else {
				var currentDiv = fusionListDiv2;
			}
			var tmpItem = item.required[j];
			var btn = document.createElement("input");
			btn.type = "image";
			btn.value = tmpItem.nom
			btn.src = tmpItem.src
			btn.onclick = function() {
				profilItem(this);
			}
			var br = document.createElement("br");
			var tmp = document.createElement('h1');
			tmp.innerHTML = tmpItem.nom;
			currentDiv.appendChild(tmp);
			currentDiv.appendChild(btn);
			var tmp = document.createElement('span');
			tmp.innerHTML = " = ";
			currentDiv.appendChild(tmp);
			for (var k in tmpItem.fusion) {
				var btn = document.createElement("input");
				btn.type = "image";
				btn.value = tmpItem.fusion[k].nom
				btn.src = tmpItem.fusion[k].src
				btn.onclick = function() {
					profilItem(this);
				}
				currentDiv.appendChild(btn);
				if (k == 0) {
					var tmp = document.createElement('span');
					tmp.innerHTML = " + ";
					currentDiv.appendChild(tmp);
				}
			}
		}
	}
	else {
		document.getElementById("Page-Profil-Item-Fusion-List").style.display = 'none';
		document.getElementById("Page-Profil-Item-Fusion-List2").style.display = 'none';
		document.getElementById("Page-Profil-Item-Fusion-List-Text").style.display = 'none';
		var fusionDiv = document.getElementById("Page-Profil-Item-Fusion");
		fusionDiv.style.display = 'block';
		document.getElementById("Page-Profil-Item-Fusion-Text").style.display = 'block';
		fusionDiv.innerHTML = "";
		for (var j in item.fusion) {
			var btn = document.createElement("input");
			btn.type = "image";
			btn.value = item.fusion[j].nom
			btn.src = item.fusion[j].src
			btn.onclick = function() {
				profilItem(this);
			}
			fusionDiv.appendChild(btn);
		}
	}
}

// Fonction qui refresh l'affichage des combos dans sur le profil ninja
function refreshCombo(ninja) {
	var btnVersion = document.getElementById("Bouton-Profil-Toggle-Combo");
	if ((!old)||(ninja.role[0] == 'New')) {
		btnVersion.innerHTML = "NEW";
	}
	else {
		btnVersion.innerHTML = "OLD";
	}
	var comboListe = document.getElementById("Page-Profil-Combo-List");
	comboListe.innerHTML = "";
	var h1;
	var br = document.createElement("br");
	for (var i in ninja.combo) {
		if (((old)&&(ninja.combo[i].type == 'old'))||((!old)&&(ninja.combo[i].type == 'new'))||(ninja.role[0] == 'New')||(ninja.combo[i].type == 'both')) {
			h1 = document.createElement("h1");
			comboListe.appendChild(h1);
			h1.innerHTML = ninja.combo[i].nom;
			comboListe.appendChild(br);
			for (var j in ninja.combo[i].ninjalist) {
				if (ninja.combo[i].ninjalist[j].nom != ninja.nom) {
					var btn = document.createElement("input");
					btn.type = "image";
					btn.value = ninja.combo[i].ninjalist[j].nom
					btn.src = ninja.combo[i].ninjalist[j].src;
					btn.onclick = function() {
						profilNinja(this);
					}
					comboListe.appendChild(btn);
				}
			}
			comboListe.appendChild(br);
		}
	}
}

// Fonction qui change de page
function changePage(nomPage) {
	page.style.display = 'none';
	page = document.getElementById(nomPage);
	page.style.display = 'block';
}

// Fonction qui change la version du jeu
function changeVersion() {
	old = !old;
	refreshCombo(displayedNinja);
}

// Fonction qui créer un ninja
function createNinja(nom, range, stat, att, def, rar, rol, src) {
	var ninja = new Ninja(nom, range, stat, att, def, rar, rol, src);
	for (var i in rol) {
		roleDict[rol[i]].push(ninja);
	}
	ninjaDict[nom] = ninja;
	ninjaList.push(ninja);
	return ninja;
}

// Fonction qui créer un spell
function createSpell(ninja, type, nom, desc) {
	var spell = new Spell(nom, type, desc);
	ninja.spells.push(spell);
	return spell;
}

// Fonction qui créer un combo
function createCombo(comboName, ninjalist, type) {
	var combo = new Combo(comboName, ninjalist, type);
	for (var i in ninjalist) {
		ninjalist[i].add_combo(combo);
	}
	return combo;
}

// Fonction qui créer un item
function createItem(name, rar, fus, icon, eff) {
	var item = new Item(name, rar, fus, icon, eff);
	itemDict[name] = item;
	itemList.push(item);
	if (fus[0] != 'None') {
		fus[0].required.push(item);
		if (fus[0] != fus[1]) {
			fus[1].required.push(item);
		}
	}
	return item;
}

// Fonction qui filtre les ninjas
function filtre(type, click) {
	// On update le filtre dans l'array
	var index = filtreList.indexOf(type);
	if (index == -1) {
		if (click == 2) {
			filtreList.push(type);
		}
		else {
			filtreList = [type];
		}
	}
	else {
		filtreList.splice(index, 1);
	}
	// On update le texte indiquant les filtres utilisés
	if (filtreList.length == 0) {
		document.getElementById("Page-Menu-Filtres-Texte").innerHTML = 'Filter: None';
	}
	else {
		var texte = '';
		for (var i=0; i<filtreList.length; i++) {
			texte = texte + filtreList[i] + ' ';
		}
		document.getElementById("Page-Menu-Filtres-Texte").innerHTML = 'Filter: ' + texte;
	}
	// On clear la liste des ninjas
	var div = document.getElementById("Page-Menu-Liste-Ninja");
	div.innerHTML = "";
	// On parcourt tout les ninjas et on ajoute si tout les filtres correspondent s'il y en a
	if (filtreList.length == 0) {
		afficherNinjaList();
	}
	else {
		var compteur = 0;
		var div = document.getElementById("Page-Menu-Liste-Ninja");
		var btn;
		for (var j in ninjaList) {
			var bool = 1;
			var boolrole = 0;
			for (var k in filtreList) {
				var tmpFiltre = typeFiltreDict[filtreList[k]];
				if (tmpFiltre == 'mainstat') {
					if (filtreDict[filtreList[k]] != ninjaList[j].mainstat) {
						bool = 0;
					}
				}
				else if (tmpFiltre == 'range') {
					if (filtreList[k] == 'Ranged') {
						if (ninjaList[j].range == 0) {
							bool = 0;
						}
					}
					else {
						if (ninjaList[j].range > 0) {
							bool = 0;
						}
					}
				}
				else if (tmpFiltre == 'rarity') {
					if (filtreList[k] != ninjaList[j].rarity) {
						bool = 0;
					}
				}
				else if (tmpFiltre == 'role') {
					for (var l in ninjaList[j].role) {
						if (filtreList[k] == ninjaList[j].role[l]) {
							boolrole = 1;
						}
					}
					bool = boolrole;
				}
			}
			if (bool == 1) {
				btn = document.createElement("input");
				btn.type = "image";
				btn.src = ninjaList[j].src;
				btn.value = ninjaList[j].nom;
				btn.onclick = function() {
					profilNinja(this);
				}
				div.appendChild(btn);
				compteur++;
				if (compteur == 8) {
					var br = document.createElement("br");
					div.appendChild(br);
					compteur = 0;
				}
			}
		}
	}
}

// Fonction qui affiche tout les ninja dans le menu principal
function afficherNinjaList() {
	var compteur = 0;
	var div = document.getElementById("Page-Menu-Liste-Ninja");
	var btn;
	for (var i in ninjaList) {
		btn = document.createElement("input");
		btn.type = "image";
		btn.src = ninjaList[i].src;
		btn.value = ninjaList[i].nom;
		btn.onclick = function() {
			profilNinja(this);
		}
		div.appendChild(btn);
		compteur++;
		if (compteur == 10) {
			var br = document.createElement("br");
			div.appendChild(br);
			compteur = 0;
		}
	}
}

// Fonction qui affiche tout les items dans le menu principal
function afficherItemList() {
	var compteur = 0;
	var div = document.getElementById("Page-Menu-Liste-Item");
	var btn;
	for (var i in itemList) {
		btn = document.createElement("input");
		btn.type = "image";
		btn.src = itemList[i].src;
		btn.value = itemList[i].nom;
		btn.onclick = function() {
			profilItem(this);
		}
		div.appendChild(btn);
		compteur++;
		if (compteur == 8) {
			var br = document.createElement("br");
			div.appendChild(br);
			compteur = 0;
		}
	}
}

// Fonctions des boutons (hors ninja)
$('input').mousedown(function(click){
	var id = click.target.id;
	if (id == "Page-Profil-Retour"){
		changePage("Page-Menu-Ninja");
	}
	else if (id == "Page-Item-Retour") {
		changePage("Page-Menu-Item");
	}
	else if (id == "Page-Menu-Filtre-Force") {
		filtre('Force', click.which);
	}
	else if (id == "Page-Menu-Filtre-Agil") {
		filtre('Agilité', click.which);
	}
	else if (id == "Page-Menu-Filtre-Intel") {
		filtre('Intelligence', click.which);
	}
	else if (id == "Page-Menu-Filtre-Ranged") {
		filtre('Ranged', click.which);
	}
	else if (id == "Page-Menu-Filtre-Melee") {
		filtre('Melee', click.which);
	}
	else if (id == "Page-Menu-Filtre-R") {
		filtre('R', click.which);
	}
	else if (id == "Page-Menu-Filtre-SR") {
		filtre('SR', click.which);
	}
	else if (id == "Page-Menu-Filtre-SSR") {
		filtre('SSR', click.which);
	}
	else if (id == "Page-Menu-Filtre-USR") {
		filtre('USR', click.which);
	}
	else if (id == "Page-Menu-Filtre-DPS") {
		filtre('DPS', click.which);
	}
	else if (id == "Page-Menu-Filtre-BURST") {
		filtre('BURST', click.which);
	}
	else if (id == "Page-Menu-Filtre-TANK") {
		filtre('TANK', click.which);
	}
	else if (id == "Page-Menu-Filtre-AOE") {
		filtre('AOE', click.which);
	}
	else if (id == "Page-Menu-Filtre-STUN") {
		filtre('STUN', click.which);
	}
	else if (id == "Page-Menu-Filtre-SUPPORT") {
		filtre('SUPPORT', click.which);
	}
	else if (id == "Page-Menu-Filtre-NEW") {
		filtre('New', click.which);
	}
});

// Affichage du menu principal
afficherNinjaList();
afficherItemList();