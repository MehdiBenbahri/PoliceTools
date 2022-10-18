const categories = [
    {
        name:"Infraction au code de la route"
    },
    {
        name:"Délit mineur"
    },
    {
        name:"Délit majeur"
    },
    {
        name:"Crime"
    },
    {
        name:"Crime fédéral"
    },
    {
        name:"Justice"
    }
]

const facts = [
    {
        "group": "Infraction",
        "name": "Usage abusif du klaxon",
        "price": 50,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Franchir une ligne continue",
        "price": 100,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Non-respect des distances de sécurité",
        "price": 100,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Circulation à contresens",
        "price": 150,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Non-respect de la priorité à droite",
        "price": 200,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Non-respect d'un stop",
        "price": 200,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Demi-tour non autorisé",
        "price": 250,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Circulation hors routes",
        "price": 300,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Arrêt dangereux / interdit",
        "price": 300,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Stationnement gênant / interdit",
        "price": 300,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Non-respect à un véhicule prioritaire",
        "price": 300,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Non-respect d'un feu rouge",
        "price": 400,
        "time": 0,
        "comment": null,
        "other": null,
        "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Dépassement dangereux",
        "price": 500,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Véhicule non en état",
        "price": 600,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Conduite sans permis",
        "price": 2000,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Excès de vitesse",
        "price": 2450,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Excès de vitesse 5-15 km/h",
        "price": 4800,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Excès de vitesse 15-30 km/h",
        "price": 8450,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Excès de vitesse > 30 km/h",
        "price": 9980,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Infraction",
        "name": "Délit de fuite",
        "price": 19680,
        "time": 15,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Dégradation de la voie publique",
        "price": 1300,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Trouble à l'ordre de publique",
        "price": 1970,
        "time": 5,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Entrave de la circulation",
        "price": 2130,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Manifestation illégale",
        "price": 4960,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Menace verbale ou intimidation envers civils",
        "price": 10000,
        "time": 5,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Insulte envers / entre civils",
        "price": 14300,
        "time": 5,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Entrave opération de police",
        "price": 15630,
        "time": 10,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Tentative de corruption",
        "price": 17800,
        "time": 15,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Outrage à dépositaire de l'autoritée publique",
        "price": 19600,
        "time": 10,
        "comment": "Vous pouvez, si la personne continue aller jusqu'à 20 000$ et 10 minutes",
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Defaut de permis bateau",
        "price": 22630,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Defaut de permis aériens",
        "price": 28920,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Vol de véhicule aquatique",
        "price": 42560,
        "time": 10,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Vol de véhicule aérien",
        "price": 62200,
        "time": 10,
        "comment": "Retrait du permis",
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Mineur",
        "name": "Menace ou intimidation envers dépositaire de l'autorité publique et/ou fonctionnaire",
        "price": 65000,
        "time": 20,
        "comment": "Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie de l'arme", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Tentative ou vol de véhicule",
        "price": 13300,
        "time": 10,
        "comment": "Retrait du permis",
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Pris en flag lockpick (crocheter vehicule)",
        "price": 14600,
        "time": 10,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Refus d'obtempérer",
        "price": 21300,
        "time": 10,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Arme blanche sortie en ville",
        "price": 21500,
        "time": 5,
        "comment": null,
        "other": "Saisie de l'arme", "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Moyen",
        "name": "Usurpation d'identité",
        "price": 22300,
        "time": 30,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Ports d'armes non autorisé (défaut de licence)",
        "price": 24600,
        "time": 15,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Arme létale sortie en ville",
        "price": 27830,
        "time": 5,
        "comment": "Retrait du permis de porte d'arme si posséder",
        "other": "Saisie de l'arme",
        "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Moyen",
        "name": "Port d'arme / équipement illégal",
        "price": 28900,
        "time": 20,
        "comment": "Retrait du PPA",
        "other": "Saisie de l'arme - Arme de poing autorisé uniquement (AVEC LICENCE)", "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Moyen",
        "name": "Fabrication de drogue",
        "price": 34650,
        "time": 15,
        "comment": null,
        "other": "Saisie de la drogue. Saisie du matériel", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Complicité de meurtre",
        "price": 35600,
        "time": 25,
        "comment": null,
        "other": null,
        "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Moyen",
        "name": "Tentative de kidnapping (ou kidnapping)",
        "price": 36500,
        "time": 25,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Possession de drogue",
        "price": 39650,
        "time": 10,
        "comment": null,
        "other": "Saisie de la drogue", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Vente de drogue",
        "price": 45600,
        "time": 15,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Braquage de magasin",
        "price": 52000,
        "time": 15,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé. Saisie de toute somme d'argent sur l'individu",
        "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Prise d'otage sur civil",
        "price": 75000,
        "time": 20,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme si utilisé", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Escroquerie à l'entreprise",
        "price": 82360,
        "time": 0,
        "comment": null,
        "other": null, "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Braquage sur particulier",
        "price": 86000,
        "time": 30,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Prise d'otage sur dépositaire de l'autorité publique et/ou fonctionnaire",
        "price": 125000,
        "time": 30,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Moyen",
        "name": "Braquage de banque",
        "price": 136000,
        "time": 30,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé. Saisie de toute somme d'argent sur l'individu",
        "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Majeur",
        "name": "Homicide involontaire",
        "price": 36000,
        "time": 15,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie de l'arme", "quantity": 1,"is_not_payed":false
    },
    {
        "group": "Délit Majeur",
        "name": "Tir sur civil",
        "price": 56300,
        "time": 25,
        "comment": "Retrait du PPA",
        "other": null, "quantity": 1,"is_not_payed":false,
        "concernWeapon":true
    },
    {
        "group": "Délit Majeur",
        "name": "Tir sur dépositaire de l'autorité publique et/ou fonctionnaire",
        "price": 65300,
        "time": 30,
        "comment": null,
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé", "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Majeur",
        "name": "Tentative de meurtre sur civil",
        "price": 65300,
        "time": 20,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé",
        "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Majeur",
        "name": "Tentative de meurtre sur dépositaire de l'autorité publique et/ou fonctionnaire",
        "price": 72300,
        "time": 25,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé",
        "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Majeur",
        "name": "Meurtre sur civil",
        "price": 82300,
        "time": 30,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé",
        "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    },
    {
        "group": "Délit Majeur",
        "name": "Meurtre sur dépositaire de l'autorité publique et/ou fonctionnaire",
        "price": 102300,
        "time": 30,
        "comment": "Si avec véhicule, retrait du permis requis pour le véhicule en question. Si utilisation d'une arme, retrait du PPA",
        "other": "Saisie du véhicule si utilisé. Saisie de l'arme su utilisé", "quantity": 1,"is_not_payed":false,
        "concernWeapon": true
    }
];

export default facts;