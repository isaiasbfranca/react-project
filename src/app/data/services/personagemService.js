const Person = function (id, name, homeWorldId, allegiance, gender) {
    this.id = id;
    this.name = name;
    this.homeWorldId = homeWorldId;
    this.allegiance = allegiance;
    this.gender = gender
}

module.exports = {
    getPeople: getPeople,
    getAllegiances: getAllegiances
}

const allegiances = [
    'rebel',
    'imperial',
    'sith',
    'jedi',
    'bounty hunter'
];

const people = [
    new Person(1, 'Luke Skywalker', 1, 'jedi', 'H'),
    new Person(2, 'C-3PO', 1, 'rebel', undefined),
    new Person(3, 'R2-D2', 8, 'rebel', undefined),
    new Person(4, 'Darth Vader', 1, 'sith', 'H'),
    new Person(5, 'Leia Organa', 2, 'rebel', 'M'),
    new Person(6, 'Owen Lars', 1, undefined, 'H'),
    new Person(7, 'Beru Whitesun lars', 1, undefined, 'M'),
    new Person(8, 'R5-D4', 1, 'rebel', undefined),
    new Person(9, 'Biggs Darklighter', 1, 'rebel', 'H'),
    new Person(10, 'Obi-Wan Kenobi', 20, 'jedi', 'H'),
    new Person(11, 'Anakin Skywalker', 1, 'jedi', 'H'),
    new Person(12, 'Wilhuff Tarkin', 21, 'imperial', 'H'),
    new Person(13, 'Chewbacca', 14, 'rebel', 'H'),
    new Person(14, 'Han Solo', 22, 'rebel', 'H'),
    new Person(15, 'Greedo', 23, 'bounty hunter', 'H'),
    new Person(16, 'Jabba Desilijic Tiure', 24, undefined, undefined),
    new Person(17, 'Wedge Antilles', 22, 'rebel', 'H'),
    new Person(18, 'Jek Tono Porkins', 26, undefined, 'H'),
    new Person(19, 'Yoda', 28, 'jedi', 'H'),
    new Person(20, 'Palpatine', 8, 'sith', 'H'),
    new Person(21, 'Boba Fett', 10, 'bounty hunter', 'H'),
    new Person(22, 'IG-88', 28, 'bounty hunter'),
    new Person(23, 'Bossk', 29, 'bounty hunter'),
    new Person(24, 'Lando Calrissian', 30, 'rebel'),
    new Person(25, 'Lobot', 6, undefined),
    new Person(26, 'Ackbar', 31, 'rebel'),
    new Person(27, 'Mon Mothma', 32, 'rebel'),
    new Person(28, 'Arvel Crynyd', 28, undefined),
    new Person(29, 'Wicket Systri Warrick', 7, 'rebel'),
    new Person(30, 'Nien Nunb', 33, undefined),
    new Person(31, 'Qui-Gon Jinn', 28, 'jedi', 'H'),
    new Person(32, 'Nute Gunray', 18, 'rebel'),
    new Person(33, 'Finis Valorum', 9, undefined),
    new Person(34, 'Jar Jar Binks', 8, 'rebel'),
    new Person(35, 'Roos Tarpals', 8, undefined),
    new Person(36, 'Rugor Nass', 8, undefined),
    new Person(37, 'Ric Olié', 8, undefined),
    new Person(38, 'Watto', 34, undefined),
    new Person(39, 'Sebulba', 35, undefined),
    new Person(40, 'Quarsh Panaka', 8, undefined),
    new Person(41, 'Shmi Skywalker', 1, undefined),
    new Person(42, 'Darth Maul', 36, 'sith', 'H'),
    new Person(43, 'Bib Fortuna', 37, undefined),
    new Person(44, 'Ayla Secura', 37, 'jedi', 'M'),
    new Person(45, 'Dud Bolt', 39, undefined),
    new Person(46, 'Gasgano', 40, undefined),
    new Person(47, 'Ben Quadinaros', 41, undefined),
    new Person(48, 'Mace Windu', 42, 'jedi', 'H'),
    new Person(49, 'Ki-Adi-Mundi', 43, 'jedi', 'H'),
    new Person(50, 'Kit Fisto', 44, 'jedi', 'H'),
    new Person(51, 'Eeth Koth', 45, 'jedi', 'H'),
    new Person(52, 'Adi Gallia', 9, undefined),
    new Person(53, 'Saesee Tiin', 47, undefined),
    new Person(54, 'Yarael Poof', 48, undefined),
    new Person(55, 'Plo Koon', 49, 'jedi'),
    new Person(56, 'Mas Amedda', 50, undefined),
    new Person(57, 'Gregar Typho', 8, undefined),
    new Person(58, 'Cordé', 8, 'rebel'),
    new Person(59, 'Cliegg Lars', 1, undefined),
    new Person(60, 'Poggle the Lesser', 11, undefined),
    new Person(61, 'Luminara Unduli', 51, 'jedi', 'M'),
    new Person(62, 'Barriss Offee', 51, undefined),
    new Person(63, 'Darth Talon', 8, 'sith', 'M'),
    new Person(64, 'Dooku', 52, 'sith', 'H'),
    new Person(65, 'Bail Prestor Organa', 2, 'rebel'),
    new Person(66, 'Jango Fett', 53, 'bounty hunter'),
    new Person(67, 'Zam Wesell', 54, 'bounty hunter'),
    new Person(68, 'Dexter Jettster', 55, undefined),
    new Person(69, 'Lama Su', 10, undefined),
    new Person(70, 'Taun We', 10, undefined),
    new Person(71, 'Jocasta Nu', 9, undefined),
    new Person(72, 'Ratts Tyerell', 38, undefined),
    new Person(73, 'R4-P17', 28, undefined),
    new Person(74, 'Wat Tambor', 56, undefined),
    new Person(75, 'Darth Cognus', 57, 'sith', 'M'),
    new Person(76, 'Shaak Ti', 58, 'jedi', 'M'),
    new Person(77, 'Grievous', 59, 'imperial'),
    new Person(78, 'Tarfful', 14, undefined),
    new Person(79, 'Raymus Antilles', 2, 'rebel'),
    new Person(80, 'Sly Moore', 60, undefined),
    new Person(81, 'Tion Medon', 12, undefined),
    new Person(82, 'Darth Zannah', 28, 'sith', 'M'),
    new Person(83, 'Rey', 28, 'jedi', 'M'),
    new Person(84, 'Darth Traya', 28, 'sith', 'M'),
    new Person(85, 'Darth Lumiya', 28, 'sith', 'M'),
    new Person(86, 'Asajj Ventress', 28, 'sith', 'M'),
    new Person(87, 'Alema Rar', 8, 'sith', 'M'),
    new Person(86, 'Aurra Sing', 8, 'sith', 'M'),
];

function getAllegiances() {
    return {
        count: allegiances.length,
        results: allegiances
    };
}

function getPeople() {
    return {
        count: people.length,
        results: people
    };
}