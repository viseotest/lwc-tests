/*
=================================
    To use this file in your component, you have to import the file and get the variable you need like below :

    import {  getCasesByTypology , caseTypologies, columns } from 'c/utils';

=================================
*/

 const data = {
    'incident' : [
        {
        "id": "1",
        "isActive": false,
        "status": "en attente",
        "description": "reprehenderit aliqua qui sint qui qui consequat occaecat veniam Lorem consectetur mollit et anim reprehenderit nostrud cillum irure laboris esse",
        "owner": "Enid ipsum",
        "account": {
            "company": "ZAPPIX",
            "email": "enidsweeney@zappix.com",
            "phone": "+1 (884) 516-3493",
            "address": "775 Lincoln Road, Jenkinsville, Michigan, 3151"
        }
        },
        {
        "id": "2",
        "isActive": true,
        "status": "en attente",
        "description": "non labore ipsum incididunt laborum ex velit deserunt eiusmod in consequat commodo deserunt laborum non aliqua mollit velit magna velit",
        "owner": "Livingston enim",
        "account": {
            "company": "SLOGANAUT",
            "email": "livingstonsweeney@sloganaut.com",
            "phone": "+1 (981) 575-2373",
            "address": "186 Seigel Court, Matthews, Arizona, 6424"
        }
        },
        {
        "id": "3",
        "isActive": false,
        "status": "clos",
        "description": "adipisicing est occaecat dolor incididunt consectetur proident in veniam aliqua ullamco amet duis sunt consequat ut et esse consectetur quis",
        "owner": "Faulkner ex",
        "account": {
            "company": "TETAK",
            "email": "faulknersweeney@tetak.com",
            "phone": "+1 (832) 431-3892",
            "address": "617 Chestnut Street, Fedora, Delaware, 960"
        }
        },
        {
        "id": "4",
        "isActive": false,
        "status": "en attente",
        "description": "dolor eiusmod velit veniam est duis officia minim irure sunt incididunt nulla fugiat ipsum officia sit Lorem cupidatat non est",
        "owner": "Hickman cupidatat",
        "account": {
            "company": "UBERLUX",
            "email": "hickmansweeney@uberlux.com",
            "phone": "+1 (997) 513-2226",
            "address": "151 Schenck Place, Eastmont, Texas, 2744"
        }
        },
        {
        "id": "5",
        "isActive": false,
        "status": "en cours",
        "description": "adipisicing irure voluptate quis deserunt est anim tempor est occaecat mollit duis magna exercitation ipsum velit sunt ex labore id",
        "owner": "Morse veniam",
        "account": {
            "company": "DIGIPRINT",
            "email": "morsesweeney@digiprint.com",
            "phone": "+1 (889) 510-2674",
            "address": "153 Montana Place, Cornucopia, Kentucky, 5048"
        }
        }
    ],
    'evenement' : [
        {
        "id": "6",
        "isActive": false,
        "status": "en cours",
        "description": "non esse consectetur non est enim ut enim quis cupidatat do dolore laboris nulla culpa ex voluptate proident pariatur ex",
        "owner": "Robert officia",
        "account": {
            "company": "BIOTICA",
            "email": "robertsweeney@biotica.com",
            "phone": "+1 (800) 564-2424",
            "address": "111 Batchelder Street, Alamo, Missouri, 4111"
        }
        },
        {
        "id": "7",
        "isActive": false,
        "status": "en attente",
        "description": "ad qui dolore reprehenderit exercitation qui minim do cupidatat dolor cupidatat ipsum nulla mollit reprehenderit officia proident culpa dolor anim",
        "owner": "Sparks anim",
        "account": {
            "company": "VELITY",
            "email": "sparkssweeney@velity.com",
            "phone": "+1 (876) 412-2151",
            "address": "774 Montgomery Street, Bawcomville, Ohio, 237"
        }
        },
        {
        "id": "8",
        "isActive": false,
        "status": "en attente",
        "description": "est id sunt nulla ad duis culpa nulla duis anim labore laborum irure nostrud do nulla ad veniam laboris sit",
        "owner": "Reyes fugiat",
        "account": {
            "company": "QUILK",
            "email": "reyessweeney@quilk.com",
            "phone": "+1 (917) 467-2867",
            "address": "790 Ide Court, Farmington, Indiana, 560"
        }
        },
        {
        "id": "9",
        "isActive": false,
        "status": "clos",
        "description": "laborum quis in ut aliquip velit nulla pariatur ex deserunt veniam duis proident pariatur dolor ipsum aliqua cillum do amet",
        "owner": "Verna non",
        "account": {
            "company": "TINGLES",
            "email": "vernasweeney@tingles.com",
            "phone": "+1 (973) 569-3205",
            "address": "380 Knapp Street, Sisquoc, Texas, 9614"
        }
        },
        {
        "id": "10",
        "isActive": false,
        "status": "en cours",
        "description": "quis ex quis exercitation sit sint ea sit dolore dolor anim incididunt elit sunt ad quis qui cupidatat ut cillum",
        "owner": "Cherie sit",
        "account": {
            "company": "ZILLANET",
            "email": "cheriesweeney@zillanet.com",
            "phone": "+1 (983) 571-3887",
            "address": "287 Main Street, Silkworth, Federated States Of Micronesia, 7984"
        }
        }
    ],
    'demande_de_devis' : [
        {
        "id": "11",
        "isActive": false,
        "status": "clos",
        "description": "amet aute enim qui minim id cupidatat occaecat qui qui et in magna commodo anim est laboris duis cillum cillum",
        "owner": "Karyn tempor",
        "account": {
            "company": "ACCIDENCY",
            "email": "karynsweeney@accidency.com",
            "phone": "+1 (930) 536-2738",
            "address": "470 Fenimore Street, Rosedale, Nebraska, 5202"
        }
        },
        {
        "id": "12",
        "isActive": true,
        "status": "clos",
        "description": "nisi excepteur ea qui reprehenderit sunt pariatur ut incididunt magna dolor sit irure tempor duis anim veniam adipisicing duis ut",
        "owner": "Heath excepteur",
        "account": {
            "company": "VINCH",
            "email": "heathsweeney@vinch.com",
            "phone": "+1 (848) 549-3936",
            "address": "681 Seton Place, Bentonville, Arkansas, 8639"
        }
        },
        {
        "id": "13",
        "isActive": true,
        "status": "clos",
        "description": "minim aute ut anim excepteur pariatur voluptate minim pariatur culpa Lorem laboris ea minim deserunt aliquip enim fugiat duis anim",
        "owner": "Lakisha magna",
        "account": {
            "company": "EXOSWITCH",
            "email": "lakishasweeney@exoswitch.com",
            "phone": "+1 (964) 471-3188",
            "address": "489 Rose Street, Leland, Federated States Of Micronesia, 2552"
        }
        },
        {
        "id": "14",
        "isActive": true,
        "status": "en cours",
        "description": "ea reprehenderit qui nisi exercitation excepteur adipisicing cupidatat velit qui consectetur nisi veniam non do veniam Lorem sint labore eu",
        "owner": "Moran id",
        "account": {
            "company": "HOPELI",
            "email": "moransweeney@hopeli.com",
            "phone": "+1 (831) 575-2029",
            "address": "332 Butler Place, Springville, Hawaii, 1220"
        }
        },
        {
        "id": "15",
        "isActive": true,
        "status": "clos",
        "description": "sint reprehenderit sit exercitation nostrud laborum consequat voluptate duis aliquip eu sint laboris in incididunt exercitation id laborum voluptate aute",
        "owner": "Maria mollit",
        "account": {
            "company": "ZIPAK",
            "email": "mariasweeney@zipak.com",
            "phone": "+1 (823) 480-2791",
            "address": "797 Neptune Avenue, Bayview, New Mexico, 3004"
        }
        },
        {
        "id": "16",
        "isActive": true,
        "status": "clos",
        "description": "qui et aliqua fugiat excepteur fugiat cupidatat ad incididunt nisi ex ad consectetur ullamco ad magna enim elit mollit culpa",
        "owner": "Rosie dolore",
        "account": {
            "company": "GYNKO",
            "email": "rosiesweeney@gynko.com",
            "phone": "+1 (905) 445-3335",
            "address": "570 Bank Street, Kenvil, Nevada, 1139"
        }
        }
    ],
    'demande_de_prestation' :[
        {
        "id": "17",
        "isActive": true,
        "status": "clos",
        "description": "commodo sit pariatur laborum Lorem proident non aute exercitation veniam duis aliqua qui non mollit cupidatat voluptate eu commodo excepteur",
        "owner": "Nixon anim",
        "account": {
            "company": "GEOLOGIX",
            "email": "nixonsweeney@geologix.com",
            "phone": "+1 (818) 560-2973",
            "address": "697 Lake Street, Fontanelle, Rhode Island, 3460"
        }
        },
        {
        "id": "18",
        "isActive": true,
        "status": "clos",
        "description": "officia aliqua consequat anim consectetur cillum aliquip sint duis reprehenderit proident reprehenderit laborum occaecat incididunt in culpa aliqua tempor magna",
        "owner": "Harper consectetur",
        "account": {
            "company": "ZILLACOM",
            "email": "harpersweeney@zillacom.com",
            "phone": "+1 (968) 473-2925",
            "address": "775 Jackson Court, Madaket, Georgia, 7604"
        }
        },
        {
        "id": "19",
        "isActive": false,
        "status": "clos",
        "description": "occaecat in occaecat do laborum eiusmod do aliqua laborum sunt dolor consequat nostrud duis incididunt adipisicing velit do minim consequat",
        "owner": "Skinner laborum",
        "account": {
            "company": "ZOLAR",
            "email": "skinnersweeney@zolar.com",
            "phone": "+1 (932) 482-3420",
            "address": "947 Hubbard Street, Jennings, Federated States Of Micronesia, 5502"
        }
        },
        {
        "id": "20",
        "isActive": true,
        "status": "en attente",
        "description": "minim pariatur labore est dolore sunt Lorem elit consectetur exercitation ea deserunt culpa tempor aliqua aliquip nostrud ex culpa pariatur",
        "owner": "Burgess elit",
        "account": {
            "company": "ACUMENTOR",
            "email": "burgesssweeney@acumentor.com",
            "phone": "+1 (819) 540-2571",
            "address": "733 School Lane, Elizaville, Wisconsin, 7459"
        }
        },
        {
        "id": "21",
        "isActive": false,
        "status": "en attente",
        "description": "enim amet elit dolor labore consectetur enim anim cupidatat laboris ut voluptate consequat excepteur adipisicing minim ullamco velit labore aute",
        "owner": "Shawna velit",
        "account": {
            "company": "KOFFEE",
            "email": "shawnasweeney@koffee.com",
            "phone": "+1 (926) 537-2707",
            "address": "136 Albee Square, Norwood, Guam, 1776"
        }
        },
        {
        "id": "22",
        "isActive": false,
        "status": "clos",
        "description": "consectetur aliqua eiusmod reprehenderit esse pariatur deserunt consequat et in amet irure culpa nostrud sit duis est reprehenderit ex minim",
        "owner": "Inez ea",
        "account": {
            "company": "FLUMBO",
            "email": "inezsweeney@flumbo.com",
            "phone": "+1 (847) 519-2920",
            "address": "458 Cumberland Walk, Saddlebrooke, South Carolina, 890"
        }
        },
        {
        "id": "23",
        "isActive": true,
        "status": "en cours",
        "description": "do ut proident enim amet aliquip incididunt aliqua magna minim eu deserunt laborum nisi duis et dolor quis ex duis",
        "owner": "Heather officia",
        "account": {
            "company": "VERTIDE",
            "email": "heathersweeney@vertide.com",
            "phone": "+1 (980) 500-2920",
            "address": "958 Cooper Street, Mammoth, Alabama, 4862"
        }
        },
        {
        "id": "24",
        "isActive": false,
        "status": "clos",
        "description": "amet non ipsum pariatur eu anim in enim non id ea pariatur ipsum nisi voluptate occaecat cupidatat nostrud cupidatat pariatur",
        "owner": "Lilia magna",
        "account": {
            "company": "GOGOL",
            "email": "liliasweeney@gogol.com",
            "phone": "+1 (811) 416-3348",
            "address": "729 Folsom Place, Chilton, Utah, 4156"
        }
        },
        {
        "id": "25",
        "isActive": false,
        "status": "en cours",
        "description": "deserunt excepteur esse incididunt aliquip pariatur quis nisi et ea aute adipisicing est in ea enim esse veniam adipisicing et",
        "owner": "Alta fugiat",
        "account": {
            "company": "DEVILTOE",
            "email": "altasweeney@deviltoe.com",
            "phone": "+1 (992) 506-2973",
            "address": "529 Taaffe Place, Roosevelt, New Mexico, 6436"
        }
        },
        {
        "id": "26",
        "isActive": true,
        "status": "clos",
        "description": "sint commodo incididunt dolore duis id labore minim aute exercitation aute consectetur in deserunt qui ex Lorem et duis anim",
        "owner": "Ollie sit",
        "account": {
            "company": "ACCEL",
            "email": "olliesweeney@accel.com",
            "phone": "+1 (983) 436-2040",
            "address": "345 Cypress Avenue, Sussex, Alaska, 502"
        }
        },
        {
        "id": "27",
        "isActive": true,
        "status": "en attente",
        "description": "incididunt reprehenderit consequat consequat reprehenderit eiusmod deserunt nulla occaecat laboris sint mollit eiusmod irure aliqua cillum laborum consequat qui laborum",
        "owner": "Leanna ea",
        "account": {
            "company": "GEOFARM",
            "email": "leannasweeney@geofarm.com",
            "phone": "+1 (817) 553-2335",
            "address": "182 Newel Street, Oceola, New York, 8034"
        }
        },
        {
        "id": "28",
        "isActive": false,
        "status": "en cours",
        "description": "incididunt non irure reprehenderit anim laborum quis proident dolor nulla culpa veniam non mollit tempor cupidatat qui occaecat laborum est",
        "owner": "Charlotte nisi",
        "account": {
            "company": "SOLGAN",
            "email": "charlottesweeney@solgan.com",
            "phone": "+1 (848) 537-2770",
            "address": "299 Ridgewood Avenue, Waverly, Delaware, 5448"
        }
        },
        {
        "id": "29",
        "isActive": false,
        "status": "en attente",
        "description": "in ea aute laborum non labore nisi ea deserunt laboris velit ipsum dolore pariatur mollit ut id exercitation ullamco eiusmod",
        "owner": "Orr enim",
        "account": {
            "company": "STROZEN",
            "email": "orrsweeney@strozen.com",
            "phone": "+1 (830) 597-2614",
            "address": "429 Noel Avenue, Kylertown, Colorado, 4657"
        }
        }
    ],
    'incident_clos' : [
        {
        "id": "30",
        "isActive": true,
        "status": "clos",
        "description": "deserunt officia officia laboris proident quis occaecat nostrud Lorem duis sunt nulla Lorem mollit ea cillum nisi ad exercitation exercitation",
        "owner": "Stefanie laborum",
        "account": {
            "company": "PROTODYNE",
            "email": "stefaniesweeney@protodyne.com",
            "phone": "+1 (904) 538-3670",
            "address": "582 Irving Avenue, Lodoga, Nebraska, 8283"
        }
        },
        {
        "id": "31",
        "isActive": true,
        "status": "en cours",
        "description": "sit do labore et dolore ipsum deserunt esse excepteur mollit ut ut nulla voluptate proident nulla aliqua nostrud non laboris",
        "owner": "Lelia reprehenderit",
        "account": {
            "company": "PARAGONIA",
            "email": "leliasweeney@paragonia.com",
            "phone": "+1 (966) 488-3468",
            "address": "992 Dare Court, Bourg, Georgia, 2733"
        }
        },
        {
        "id": "32",
        "isActive": true,
        "status": "en attente",
        "description": "do ad ut ad ipsum elit elit adipisicing ullamco enim labore excepteur ullamco ea reprehenderit Lorem est eiusmod dolor excepteur",
        "owner": "Randall non",
        "account": {
            "company": "MACRONAUT",
            "email": "randallsweeney@macronaut.com",
            "phone": "+1 (902) 563-2318",
            "address": "533 Flatbush Avenue, Highland, Guam, 3021"
        }
        },
        {
        "id": "33",
        "isActive": true,
        "status": "en attente",
        "description": "consequat est ullamco deserunt ex irure tempor ipsum veniam veniam esse nulla sit aliquip ullamco mollit ad culpa aliquip laborum",
        "owner": "Ross ipsum",
        "account": {
            "company": "SKYBOLD",
            "email": "rosssweeney@skybold.com",
            "phone": "+1 (985) 403-3967",
            "address": "216 Indiana Place, Saranap, Kansas, 7393"
        }
        },
        {
        "id": "34",
        "isActive": true,
        "status": "en cours",
        "description": "adipisicing enim exercitation incididunt magna nostrud duis excepteur ut ad occaecat ut aute eu laboris deserunt quis aute nostrud ea",
        "owner": "Helen nisi",
        "account": {
            "company": "EBIDCO",
            "email": "helensweeney@ebidco.com",
            "phone": "+1 (946) 568-3086",
            "address": "345 Cypress Court, Beyerville, Alabama, 2227"
        }
        },
        {
        "id": "35",
        "isActive": false,
        "status": "clos",
        "description": "dolor culpa pariatur pariatur voluptate sint sit dolor esse ex qui Lorem cillum deserunt occaecat culpa proident deserunt tempor est",
        "owner": "Adams veniam",
        "account": {
            "company": "FISHLAND",
            "email": "adamssweeney@fishland.com",
            "phone": "+1 (826) 439-3040",
            "address": "561 Boynton Place, Joes, Delaware, 7909"
        }
        },
        {
        "id": "36",
        "isActive": false,
        "status": "clos",
        "description": "fugiat excepteur dolor ullamco do officia deserunt adipisicing incididunt sint id Lorem sit minim duis amet minim laboris aute aliquip",
        "owner": "Rowe quis",
        "account": {
            "company": "UTARA",
            "email": "rowesweeney@utara.com",
            "phone": "+1 (823) 404-2356",
            "address": "507 Main Street, Gloucester, Oklahoma, 7254"
        }
        },
        {
        "id": "37",
        "isActive": true,
        "status": "clos",
        "description": "in ea fugiat velit eiusmod consectetur est ut sit non dolor ut nisi excepteur sit amet Lorem sint eiusmod occaecat",
        "owner": "Mccarthy dolor",
        "account": {
            "company": "CENTURIA",
            "email": "mccarthysweeney@centuria.com",
            "phone": "+1 (937) 487-2119",
            "address": "295 Linden Street, Kylertown, Marshall Islands, 4474"
        }
        },
        {
        "id": "38",
        "isActive": false,
        "status": "en cours",
        "description": "veniam aliqua voluptate proident irure exercitation nisi officia ipsum deserunt duis id magna ullamco dolore quis deserunt ipsum in ad",
        "owner": "Francis deserunt",
        "account": {
            "company": "BOSTONIC",
            "email": "francissweeney@bostonic.com",
            "phone": "+1 (879) 491-3177",
            "address": "295 Strickland Avenue, Valle, Alaska, 9615"
        }
        },
        {
        "id": "39",
        "isActive": false,
        "status": "en cours",
        "description": "Lorem mollit in dolore velit fugiat laboris consectetur est officia voluptate enim veniam voluptate magna sit et id incididunt reprehenderit",
        "owner": "Huff elit",
        "account": {
            "company": "ZENTIX",
            "email": "huffsweeney@zentix.com",
            "phone": "+1 (964) 531-2735",
            "address": "540 Portland Avenue, Dunlo, Arkansas, 1187"
        }
        },
        {
        "id": "40",
        "isActive": false,
        "status": "en cours",
        "description": "sit irure magna incididunt exercitation duis tempor Lorem adipisicing enim proident eu id adipisicing ut commodo aliquip excepteur ea Lorem",
        "owner": "Mejia dolor",
        "account": {
            "company": "TOYLETRY",
            "email": "mejiasweeney@toyletry.com",
            "phone": "+1 (995) 559-2178",
            "address": "250 Coffey Street, Cawood, Kentucky, 8546"
        }
        },
        {
        "id": "41",
        "isActive": false,
        "status": "en attente",
        "description": "nulla minim ea velit in consequat minim quis mollit eu eu velit aliqua fugiat ad sint mollit do in irure",
        "owner": "Workman cillum",
        "account": {
            "company": "FUELWORKS",
            "email": "workmansweeney@fuelworks.com",
            "phone": "+1 (989) 503-2837",
            "address": "163 Bryant Street, Wakulla, Michigan, 5947"
        }
        },
        {
        "id": "42",
        "isActive": false,
        "status": "en cours",
        "description": "ipsum anim cupidatat velit anim non excepteur aliquip dolore magna excepteur sunt ad minim est et aute amet nostrud anim",
        "owner": "Vicky mollit",
        "account": {
            "company": "BULLZONE",
            "email": "vickysweeney@bullzone.com",
            "phone": "+1 (815) 453-3955",
            "address": "856 College Place, Chamberino, Ohio, 6411"
        }
        },
        {
        "id": "43",
        "isActive": false,
        "status": "en cours",
        "description": "cupidatat ex incididunt et ad do commodo dolore commodo qui sunt voluptate aliquip proident aliquip ipsum eiusmod ut proident duis",
        "owner": "Celeste dolor",
        "account": {
            "company": "DIGIFAD",
            "email": "celestesweeney@digifad.com",
            "phone": "+1 (968) 427-3714",
            "address": "859 Aster Court, Accoville, South Carolina, 3046"
        }
        },
        {
        "id": "44",
        "isActive": true,
        "status": "clos",
        "description": "do et id aliqua ad eiusmod nostrud ipsum anim cupidatat cillum amet voluptate quis magna ex culpa ullamco laborum irure",
        "owner": "Maddox sunt",
        "account": {
            "company": "LIQUIDOC",
            "email": "maddoxsweeney@liquidoc.com",
            "phone": "+1 (952) 502-2967",
            "address": "934 Hill Street, Stouchsburg, North Carolina, 2901"
        }
        },
        {
        "id": "45",
        "isActive": true,
        "status": "en attente",
        "description": "dolore eu elit Lorem irure fugiat do veniam incididunt magna proident dolor mollit elit adipisicing quis sunt excepteur esse reprehenderit",
        "owner": "Willie quis",
        "account": {
            "company": "PETICULAR",
            "email": "williesweeney@peticular.com",
            "phone": "+1 (847) 560-2742",
            "address": "641 Church Lane, Frystown, Virgin Islands, 995"
        }
        },
        {
        "id": "46",
        "isActive": true,
        "status": "en attente",
        "description": "adipisicing anim labore Lorem veniam mollit deserunt cillum cillum exercitation commodo veniam dolore culpa nostrud est ullamco exercitation aute veniam",
        "owner": "Daniels laboris",
        "account": {
            "company": "DEMINIMUM",
            "email": "danielssweeney@deminimum.com",
            "phone": "+1 (843) 563-3551",
            "address": "627 Greenwood Avenue, Dante, Washington, 4782"
        }
        },
        {
        "id": "47",
        "isActive": true,
        "status": "clos",
        "description": "aute mollit voluptate eu in excepteur proident veniam in ea mollit quis ex sunt sunt quis veniam pariatur aute voluptate",
        "owner": "Chen in",
        "account": {
            "company": "OTHERSIDE",
            "email": "chensweeney@otherside.com",
            "phone": "+1 (805) 417-3464",
            "address": "807 Aviation Road, Catharine, Connecticut, 8172"
        }
        },
        {
        "id": "48",
        "isActive": false,
        "status": "en cours",
        "description": "ut Lorem nisi labore reprehenderit Lorem cupidatat occaecat officia proident anim laborum dolor fugiat Lorem duis sunt sunt non do",
        "owner": "Garcia ipsum",
        "account": {
            "company": "XIIX",
            "email": "garciasweeney@xiix.com",
            "phone": "+1 (831) 599-3446",
            "address": "133 Kosciusko Street, Ada, Texas, 8257"
        }
        },
        {
        "id": "49",
        "isActive": true,
        "status": "en cours",
        "description": "culpa laborum nostrud fugiat pariatur laboris tempor consequat qui mollit ut nisi aute Lorem ullamco dolore deserunt consequat ullamco aute",
        "owner": "Aline irure",
        "account": {
            "company": "ISOSPHERE",
            "email": "alinesweeney@isosphere.com",
            "phone": "+1 (990) 496-3388",
            "address": "274 Campus Road, Grandview, Pennsylvania, 9169"
        }
        },
        {
        "id": "50",
        "isActive": false,
        "status": "clos",
        "description": "aliquip commodo duis laborum aliquip voluptate dolore ut ut proident anim do quis eu nostrud enim reprehenderit consectetur fugiat magna",
        "owner": "Odonnell elit",
        "account": {
            "company": "DIGIQUE",
            "email": "odonnellsweeney@digique.com",
            "phone": "+1 (919) 546-2388",
            "address": "156 Hubbard Street, Lindcove, New York, 3632"
        }
        },
        {
        "id": "51",
        "isActive": false,
        "status": "clos",
        "description": "est Lorem nulla minim in incididunt est laborum sunt sunt anim adipisicing laborum sit laborum ut reprehenderit laboris deserunt nulla",
        "owner": "Maryanne pariatur",
        "account": {
            "company": "UNIA",
            "email": "maryannesweeney@unia.com",
            "phone": "+1 (942) 523-3380",
            "address": "961 Arlington Place, Sanders, Palau, 7750"
        }
        },
        {
        "id": "52",
        "isActive": false,
        "status": "en cours",
        "description": "non minim fugiat pariatur sunt sunt nisi non reprehenderit esse aute et anim consectetur enim enim do duis pariatur deserunt",
        "owner": "Poole est",
        "account": {
            "company": "LIMOZEN",
            "email": "poolesweeney@limozen.com",
            "phone": "+1 (862) 423-2090",
            "address": "383 Grimes Road, Aguila, Illinois, 7322"
        }
        },
        {
        "id": "53",
        "isActive": true,
        "status": "en attente",
        "description": "do tempor nostrud excepteur veniam laborum aute in nisi adipisicing sint labore officia aute sunt laboris occaecat est velit incididunt",
        "owner": "Mcmillan occaecat",
        "account": {
            "company": "ORBIFLEX",
            "email": "mcmillansweeney@orbiflex.com",
            "phone": "+1 (879) 572-3570",
            "address": "454 Florence Avenue, Brazos, Maryland, 5787"
        }
        },
        {
        "id": "54",
        "isActive": true,
        "status": "en cours",
        "description": "aute occaecat laborum officia pariatur qui dolor dolor veniam minim est tempor mollit esse anim ut nisi excepteur adipisicing aliquip",
        "owner": "Lindsey dolor",
        "account": {
            "company": "NSPIRE",
            "email": "lindseysweeney@nspire.com",
            "phone": "+1 (914) 582-2882",
            "address": "795 Bushwick Place, Morriston, Massachusetts, 4186"
        }
        },
        {
        "id": "55",
        "isActive": false,
        "status": "en cours",
        "description": "et et officia amet occaecat nulla ea proident voluptate ullamco non nulla qui sint nostrud reprehenderit labore incididunt anim Lorem",
        "owner": "Mosley quis",
        "account": {
            "company": "EXOZENT",
            "email": "mosleysweeney@exozent.com",
            "phone": "+1 (885) 562-2912",
            "address": "857 Beard Street, Snelling, Florida, 9993"
        }
        },
        {
        "id": "56",
        "isActive": false,
        "status": "clos",
        "description": "in aliqua labore fugiat exercitation ex magna officia duis id dolor occaecat nisi ea labore do ea esse culpa exercitation",
        "owner": "Vaughan do",
        "account": {
            "company": "SLUMBERIA",
            "email": "vaughansweeney@slumberia.com",
            "phone": "+1 (836) 565-2018",
            "address": "530 Chase Court, Heil, Vermont, 2868"
        }
        },
        {
        "id": "57",
        "isActive": true,
        "status": "clos",
        "description": "commodo pariatur do esse exercitation voluptate esse ullamco reprehenderit exercitation nisi consectetur tempor laborum amet irure irure enim et reprehenderit",
        "owner": "Brittany nisi",
        "account": {
            "company": "LETPRO",
            "email": "brittanysweeney@letpro.com",
            "phone": "+1 (943) 542-2445",
            "address": "164 Hornell Loop, Cartwright, Idaho, 1685"
        }
        },
        {
        "id": "58",
        "isActive": false,
        "status": "clos",
        "description": "aliqua voluptate sunt excepteur ad veniam nisi consectetur aliquip velit incididunt reprehenderit sunt et Lorem nulla deserunt pariatur commodo deserunt",
        "owner": "Hodge sit",
        "account": {
            "company": "AVENETRO",
            "email": "hodgesweeney@avenetro.com",
            "phone": "+1 (889) 466-2497",
            "address": "674 Manhattan Avenue, Slovan, Missouri, 4842"
        }
        },
        {
        "id": "59",
        "isActive": false,
        "status": "en cours",
        "description": "consequat qui occaecat proident ea nisi fugiat veniam elit incididunt duis culpa incididunt sit mollit proident ut amet non commodo",
        "owner": "Louisa ut",
        "account": {
            "company": "QUAILCOM",
            "email": "louisasweeney@quailcom.com",
            "phone": "+1 (925) 548-2793",
            "address": "467 Atkins Avenue, Strong, Nevada, 7823"
        }
        },
        {
        "id": "60",
        "isActive": false,
        "status": "en attente",
        "description": "ipsum est amet deserunt ullamco aute est pariatur aute quis ipsum reprehenderit consequat laborum id in sunt quis commodo sit",
        "owner": "Blanche sit",
        "account": {
            "company": "SNOWPOKE",
            "email": "blanchesweeney@snowpoke.com",
            "phone": "+1 (834) 586-3387",
            "address": "472 Fairview Place, Sylvanite, Wisconsin, 4659"
        }
        },
        {
        "id": "61",
        "isActive": false,
        "status": "clos",
        "description": "pariatur tempor ut irure est cupidatat adipisicing reprehenderit culpa irure sit eu voluptate commodo fugiat nostrud sit commodo ut anim",
        "owner": "Nelda voluptate",
        "account": {
            "company": "VERTIDE",
            "email": "neldasweeney@vertide.com",
            "phone": "+1 (911) 598-3487",
            "address": "219 Murdock Court, Waterford, Wyoming, 5933"
        }
        },
        {
        "id": "62",
        "isActive": false,
        "status": "en attente",
        "description": "mollit duis mollit aliqua proident deserunt proident aliqua amet tempor eu enim labore amet id dolore duis magna ad duis",
        "owner": "Gretchen occaecat",
        "account": {
            "company": "PARLEYNET",
            "email": "gretchensweeney@parleynet.com",
            "phone": "+1 (895) 566-3386",
            "address": "516 Vista Place, Lowell, Minnesota, 5211"
        }
        },
        {
        "id": "63",
        "isActive": false,
        "status": "en attente",
        "description": "esse sint occaecat officia occaecat ad deserunt culpa minim voluptate aute qui occaecat nisi aliquip officia velit anim enim minim",
        "owner": "Romero commodo",
        "account": {
            "company": "PEARLESSA",
            "email": "romerosweeney@pearlessa.com",
            "phone": "+1 (854) 580-3842",
            "address": "577 Roosevelt Court, Norris, Indiana, 4695"
        }
        },
        {
        "id": "64",
        "isActive": true,
        "status": "clos",
        "description": "officia eiusmod officia ex id qui veniam anim excepteur labore non nisi dolor aliquip laborum adipisicing incididunt sunt dolore laborum",
        "owner": "Leanna proident",
        "account": {
            "company": "INSURETY",
            "email": "leannasweeney@insurety.com",
            "phone": "+1 (946) 590-2482",
            "address": "741 Hastings Street, Silkworth, Tennessee, 4541"
        }
        },
        {
        "id": "65",
        "isActive": false,
        "status": "en cours",
        "description": "pariatur consequat enim sit duis deserunt laboris ea ipsum cillum cupidatat ipsum nostrud cupidatat laboris aute qui cillum ullamco velit",
        "owner": "Jacquelyn labore",
        "account": {
            "company": "DUOFLEX",
            "email": "jacquelynsweeney@duoflex.com",
            "phone": "+1 (907) 462-3034",
            "address": "464 Cove Lane, Topaz, West Virginia, 4216"
        }
        }
    ]
};

// function allowing to get cases by typolgy 
export const getCasesByTypology = (typology) => { 

    if(typology === "all"){
        return data;
    }
    else{
        return data[typology];
    }
}
// const allowing to display typologies
export const caseTypologies = [
    { label:'Tout', value:'all' },
    { label:'Incident', value:'incident' },
    { label:'Evenement', value:'evenement' },
    { label:'Demande de devis', value:'demande_de_devis' },
    { label:'Demande de prestation', value:'demande_de_prestation' },
    { label:'Incident clos', value:'incident_clos' }
];

// const allowing to display columns
export const columns = [
    { label: 'Record Type Name', fieldName: 'recordType' },
    { label: 'Description', fieldName: 'description', wrapText: true },
    { label: 'Status', fieldName: 'status' },
    { label: 'Account Phone', fieldName: 'accountPhone', type: 'phone' },
    { label: 'Account Email', fieldName:'accountEmail', type: 'email' },
    { label: 'Account Company', fieldName:'accountCompany' },
    { label: 'Account Address', fieldName:'accountAddress', wrapText: true },
    { label: 'Active', fieldName: 'isActive', type: 'boolean' }
];
        