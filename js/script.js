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
	}
}

// Dictionnaire et listes
var filtreList = [];
var roleDict = [];
var ninjaDict = [];
var ninjaList = [];
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
var page = document.getElementById("Page-Menu");
var old = true;
var displayedNinja = Hinata;

// Boutons
var boutonVersionProfil = document.getElementById("Bouton-Profil-Toggle-Combo");

// Clic sur le bouton qui change version profil
boutonVersionProfil.onclick = function(){
	changeVersion();
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

// Fonction qui créer un combo
function createCombo(comboName, ninjalist, type) {
	var combo = new Combo(comboName, ninjalist, type);
	for (var i in ninjalist) {
		ninjalist[i].add_combo(combo);
	}
	return combo;
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
		document.getElementById("Page-Menu-Filtres-Texte").innerHTML = 'Filtre: Aucun';
	}
	else {
		var texte = '';
		for (var i=0; i<filtreList.length; i++) {
			texte = texte + filtreList[i] + ' ';
		}
		document.getElementById("Page-Menu-Filtres-Texte").innerHTML = 'Filtre: ' + texte;
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
	if (id == "Page-Profil-Retour") {
		changePage("Page-Menu");
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