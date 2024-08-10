import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    access: "admin",
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    access: "manager",
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    access: "storeId",
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    access: "admin",
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    access: "storeId",
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    access: "manager",
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    access: "storeId",
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    access: "storeId",
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    access: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Jon Snow",
    email: "jonsnow@gmail.com",
    age: 35,
    phone: "(665)121-5454",
    address: "0912 Won Street, Alabama, SY 10001",
    city: "New York",
    zipCode: "10001",
    vendorId: 123512,
  },
  {
    id: 2,
    name: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    age: 42,
    phone: "(421)314-2288",
    address: "1234 Main Street, New York, NY 10001",
    city: "New York",
    zipCode: "13151",
    vendorId: 123512,
  },
  {
    id: 3,
    name: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    age: 45,
    phone: "(422)982-6739",
    address: "3333 Want Blvd, Estanza, NAY 42125",
    city: "New York",
    zipCode: "87281",
    vendorId: 4132513,
  },
  {
    id: 4,
    name: "Anya Stark",
    email: "anyastark@gmail.com",
    age: 16,
    phone: "(921)425-6742",
    address: "1514 Main Street, New York, NY 22298",
    city: "New York",
    zipCode: "15551",
    vendorId: 123512,
  },
  {
    id: 5,
    name: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    age: 31,
    phone: "(421)445-1189",
    address: "11122 Welping Ave, Tenting, CD 21321",
    city: "Tenting",
    zipCode: "14215",
    vendorId: 123512,
  },
  {
    id: 6,
    name: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    age: 150,
    phone: "(232)545-6483",
    address: "1234 Canvile Street, Esvazark, NY 10001",
    city: "Esvazark",
    zipCode: "10001",
    vendorId: 123512,
  },
  {
    id: 7,
    name: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    age: 44,
    phone: "(543)124-0123",
    address: "22215 Super Street, Everting, ZO 515234",
    city: "Evertin",
    zipCode: "51523",
    vendorId: 123512,
  },
  {
    id: 8,
    name: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    age: 36,
    phone: "(222)444-5555",
    address: "4123 Ever Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    vendorId: 512315,
  },
  {
    id: 9,
    name: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    age: 65,
    phone: "(444)555-6239",
    address: "51234 Avery Street, Cantory, ND 212412",
    city: "Colunza",
    zipCode: "111234",
    vendorId: 928397,
  },
  {
    id: 10,
    name: "Enteri Redack",
    email: "enteriredack@gmail.com",
    age: 42,
    phone: "(222)444-5555",
    address: "4123 Easer Blvd, Wentington, AD 142213",
    city: "Esteras",
    zipCode: "44215",
    vendorId: 533215,
  },
  {
    id: 11,
    name: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    age: 11,
    phone: "(444)555-6239",
    address: "51234 Fiveton Street, CunFory, ND 212412",
    city: "Colunza",
    zipCode: "1234",
    vendorId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    vendorName: "Hari Das",
    email: "haridd@gmail.com",
    totalCost: "100000",
    vendorContact: "(665)121-5454",
    timestamp: "03/07/2024",
    status: "Order placed",
  },
  {
    id: 2,
    vendorName: "Vishwas Sen",
    email: "vissshwsn@gmail.com",
    totalCost: "80000",
    vendorContact: "(421)314-2288",
    timestamp: "24/06/2024",
    status: "Order placed",
  },
  {
    id: 3,
    vendorName: "Guru Dutt",
    email: "gd455@gmail.com",
    totalCost: "50000",
    vendorContact: "(422)982-6739",
    timestamp: "21/06/2024",
    status: "Order placed",
  },
  {
    id: 4,
    vendorName: "Armaan Malik",
    email: "arman983@gmail.com",
    totalCost: "80000",
    vendorContact: "(921)425-6742",
    timestamp: "18/06/2024",
    status: "Order placed",
  },
  {
    id: 5,
    vendorName: "Tapas Kumar",
    email: "tapaskumar98@gmail.com",
    totalCost: "100000",
    vendorContact: "(421)445-1189",
    timestamp: "01/06/2024",
    status: "Order placed",
  },
  {
    id: 6,
    vendorName: "Johhny Sen",
    email: "johhnysen@gmail.com",
    totalCost: "65000",
    vendorContact: "(232)545-6483",
    timestamp: "11/05/2024",
    status: "Pending payment",
  },
  {
    id: 7,
    vendorName: "Sudhanshu Singh",
    email: "sudhsing@gmail.com",
    totalCost: "52000",
    vendorContact: "(543)124-0123",
    timestamp: "02/05/2024",
    status: "Payment done",
  },
  {
    id: 8,
    vendorName: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    totalCost: "225000",
    vendorContact: "(222)444-5555",
    timestamp: "05/04/2024",
    status: "Payment done",
  },
];

export const mockTransactions = [
  {
    productId: "Surf Excel 100g",
    storeId: "Store 2",
    timestamp: "12:56pm",
    cost: "44",
    quantity: "4",
  },
  {
    productId: "Mango Mallika",
    storeId: "Store 1",
    timestamp: "12:55pm",
    cost: "133",
    quantity: "4",
  },
  {
    productId: "Banana Robusta",
    storeId: "Store 3",
    timestamp: "12:45pm",
    cost: "44",
    quantity: "8",
  },
  {
    productId: "Green Chilli",
    storeId: "Warehouse 3",
    timestamp: "12:25pm",
    cost: "2000",
    quantity: "100",
  },
  {
    productId: "Colgate Toothpaste 100g",
    storeId: "vendor-purchase",
    timestamp: "12:11pm",
    cost: "10000",
    quantity: "250",
  },
  {
    productId: "Red Chilli Powder - Everest",
    storeId: "Warehouse 1",
    timestamp: "11:39am",
    cost: "40000",
    quantity: "100",
  },
  {
    productId: "Cabbage - Organic",
    storeId: "Store 1",
    timestamp: "11:24am",
    cost: "24.20",
    quantity: "50",
  },
  {
    productId: "Basmati Rice",
    storeId: "Store 2",
    timestamp: "11:06am",
    cost: "500",
    quantity: "20",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "Juice",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "January",
        y: 101,
      },
      {
        x: "February",
        y: 75,
      },
      {
        x: "March",
        y: 36,
      },
      {
        x: "April",
        y: 216,
      },
      {
        x: "May",
        y: 35,
      },
      {
        x: "June",
        y: 236,
      },
      {
        x: "July",
        y: 88,
      },
      {
        x: "August",
        y: 232,
      },
      {
        x: "September",
        y: 281,
      },
      {
        x: "October",
        y: 1,
      },
      {
        x: "November",
        y: 35,
      },
      {
        x: "December",
        y: 14,
      },
    ],
  },
  {
    id: "Vegetables",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "January",
        y: 212,
      },
      {
        x: "February",
        y: 190,
      },
      {
        x: "March",
        y: 270,
      },
      {
        x: "April",
        y: 9,
      },
      {
        x: "May",
        y: 75,
      },
      {
        x: "June",
        y: 175,
      },
      {
        x: "July",
        y: 33,
      },
      {
        x: "August",
        y: 189,
      },
      {
        x: "September",
        y: 97,
      },
      {
        x: "October",
        y: 87,
      },
      {
        x: "November",
        y: 299,
      },
      {
        x: "December",
        y: 251,
      },
    ],
  },
  {
    id: "Fruits",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "January",
        y: 191,
      },
      {
        x: "February",
        y: 136,
      },
      {
        x: "March",
        y: 91,
      },
      {
        x: "April",
        y: 190,
      },
      {
        x: "May",
        y: 211,
      },
      {
        x: "June",
        y: 152,
      },
      {
        x: "July",
        y: 189,
      },
      {
        x: "August",
        y: 152,
      },
      {
        x: "September",
        y: 8,
      },
      {
        x: "October",
        y: 197,
      },
      {
        x: "November",
        y: 107,
      },
      {
        x: "December",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];

export const mockDataVendor = [
  {
    vendorId: 1,
    vendorName: "Ashok Kumar",
    email: "jonsnow@gmail.com",
    contact: "(665)121-5454",
    fax: "1234",
    address1: "",
    address2: "",
    pincode: "123456",
    website: "www.fruitloops.com",
    productDetails: [
      {
        productId: 3,
        buyPrice: 34,
        unit: "Kg",
      },
    ],
  },
  {
    vendorId: 2,
    vendorName: "Ravi Yadav",
    email: "ravikumar@gmail.com",
    contact: "(665)121-5454",
    fax: "451621",
    address1: "",
    address2: "",
    pincode: "456111",
    website: "www.fruitcenter.com",
    productDetails: [
      {
        productId: 2,
        buyPrice: 55,
        unit: "Kg",
      },
      {
        productId: 4,
        buyPrice: 41,
        unit: "Kg",
      },
    ],
  },
  {
    vendorId: 3,
    vendorName: "Manish Kumar",
    email: "manishkumar@gmail.com",
    contact: "(665)121-5454",
    fax: "9999",
    address1: "",
    address2: "",
    pincode: "987456",
    website: "www.wowfruits.com",
    productDetails: [
      {
        productId: 1,
        buyPrice: 23,
        unit: "Kg",
      },
      {
        productId: 3,
        buyPrice: 37,
        unit: "Kg",
      },
    ],
  },
];
export const mockDataProduct = [
  {
    productId: 1,
    productName: "Grapes",
    productType: "Non-Stocked",
    purchaseDetails: [
      {
        vendorId: 3,
        buyPrice: 23,
        unit: "Kg",
      },
    ],
    sellPrice: 29,
  },
  {
    productId: 2,
    productName: "Mangoes",
    productType: "Stocked",
    purchaseDetails: [
      {
        vendorId: 2,
        buyPrice: 55,
        unit: "Kg",
      },
    ],
    sellPrice: 67,
  },
  {
    productId: 3,
    productName: "Banana",
    productType: "Serialized",
    purchaseDetails: [
      {
        vendorId: 1,
        buyPrice: 34,
        unit: "Kg",
      },
      {
        vendorId: 3,
        buyPrice: 37,
        unit: "Kg",
      },
    ],
    sellPrice: 41,
  },
  {
    productId: 4,
    productName: "Strawberry",
    productType: "Service",
    purchaseDetails: [
      {
        vendorId: 2,
        buyPrice: 41,
        unit: "Kg",
      },
    ],
    sellPrice: 50,
  },
];

/*export const mockDataVendorProduct = [
  {
    vendorId: 1,
    productId: 3,
    buyPrice: 34,
    unit: "Kg",
  },
  {
    vendorId: 2,
    productId: 2,
    buyPrice: 55,
    unit: "Kg",
  },
  {
    vendorId: 2,
    productId: 4,
    buyPrice: 41,
    unit: "Kg",
  },
  {
    vendorId: 3,
    productId: 1,
    buyPrice: 23,
    unit: "Kg",
  },
  {
    vendorId: 3,
    productId: 3,
    buyPrice: 37,
    unit: "Kg",
  },
];*/

/*export const mockDataStoreList = [
  {
    storeId: 1,
    storeName: "Eastern Warehouse",
    storeStartTime: "09:00",
    storeEndTime: "18:00",
    timezone: "IST",
    storeOperationalStatus: "True",
  },
  {
    storeId: 2,
    storeName: "MJ Road Store",
    storeStartTime: "09:00",
    storeEndTime: "21:00",
    timezone: "IST",
    storeOperationalStatus: "True",
  },
];*/

export const mockDataStoreDetails = [
	{
	  storeId: 1,
	  storeName: "Eastern Warehouse",
	  timezone: "IST",
	  storeStartTime: "09:00",
	  storeEndtime: "18:00",
	  storeOperationalStatus: "True",
	  storeCalendar:
	    {
	      Monday: "True",
	      Tuesday: "True",
	      Wednesday: "True",
	      Thursday: "True",
	      Friday: "True",
	      Saturday: "True",
	      Sunday: "False",
	    },
	  storeType:
	    {
	      Inflow:
	        {
	          purchaseOrder: "True",
	          stockTransfer: "True"
	        },
	      Outflow:
	        {
	          stockTransfer: "True",
	          salvage: "True",
	          sales: "False"
	        }
	    },
    inventoryDetails:
      [
        {
          productId: 1,
          inventory: 40
        },
        {
          productId: 2,
          inventory: 30
        }
      ]
	},
	{
	  storeId: 2,
	  storeName: "MJ Road Store",
	  timezone: "IST",
	  storeStartTime: "09:00",
	  storeEndtime: "21:00",
	  storeOperationalStatus: "True",
	  storeCalendar:
	    {
	      Monday: "True",
	      Tuesday: "True",
	      Wednesday: "True",
	      Thursday: "True",
	      Friday: "True",
	      Saturday: "True",
	      Sunday: "True",
	    },
	  storeType:
	    {
	      Inflow:
	        {
	          purchaseOrder: "False",
	          stockTransfer: "True"
	        },
	      Outflow:
	        {
	          stockTransfer: "True",
	          salvage: "True",
	          sales: "True"
	        }
	    },
    inventoryDetails:
      [
        {
          productId: 1,
          inventory: 20
        },
        {
          productId: 2,
          inventory: 70
        }
      ]
	}
];

/*export const mockDataProductList = [
  {
    productId: 1,
    productName: "Small Bananas",
    productType: "Stocked",
    measurement: "Units",
    totalInventory: 60
  },
  {
    productId: 2,
    productName: "Mangoes",
    productType: "Non-stocked",
    measurement: "Kg",
    totalInventory: 100
  }
];*/

export const mockDataProductDetails = [
  {
    productId: 1,
    productName: "Small Bananas",
    productType: "Stocked",
    measurement: "Units",
    totalInventory: 60,
    inventoryDetails:
      [
        {
          storeId: 1,
          inventory: 40
        },
        {
          storeId: 2,
          inventory: 20
        }
        
      ]
  },
  {
    productId: 2,
    productName: "Mangoes",
    productType: "Non-stocked",
    measurement: "Kg",
    totalInventory: 100,
    inventoryDetails:
      [
        {
          storeId: 1,
          inventory: 30
        },
        {
          storeId: 2,
          inventory: 70
        }
        
      ]
  }
];

export const mockDataInventoryDetails = [
  {
    productId: 1,
    storeId: 1,
    inventory: 40,
    measurement: "Units",
  },
  {
    productId: 1,
    storeId: 2,
    inventory: 20,
    measurement: "Units",
  },
  {
    productId: 2,
    storeId: 1,
    inventory: 30,
    measurement: "Kg",
  },
  {
    productId: 2,
    storeId: 2,
    inventory: 70,
    measurement: "Kg",
  },
];

export const mockDataCustomerDetails = [
  {
    customerId: 1,
    customerName: "Manish Yadav",
    phoneNumber: "(665)121-5454",
    email: "manishyadav5@gmail.com",
    address1: "Keerthi Mansion",
    address2: "WhiteField Road",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    pincode: "456111",
    orderDetails:
      [
        {
          orderId: 1,
        },
        {
          orderId: 3,
        },
      ]
  },
  {
    customerId: 2,
    customerName: "Parul Sharma",
    phoneNumber: "(665)191-5400",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    orderDetails:
      [
        {
          orderId: 2,
        }
      ]
  },
];

export const mockDataOrderDetails = [
  {
    orderId: 1,
    storeId: 2,
    customerId: 1,
    orderDateTime: "2024-03-12 10:12:33",
    omnichannel: "Offline",
    omnichannelType: "In-Store",
    carrier: "",
    carrierService: "",
    orderLines:
      [
        {
          itemId: 1,
          purchasedQuantity: 3,
          measurement: "Units"
        }
      ]
  },
  {
    orderId: 2,
    storeId: 2,
    customerId: 2,
    orderDateTime: "2024-03-16 17:12:33",
    omnichannel: "Offline",
    omnichannelType: "In-Store",
    carrier: "",
    carrierService: "",
    orderLines:
      [
        {
          itemId: 1,
          purchasedQuantity: 1,
          measurement: "Units"
        },
        {
          itemId: 2,
          purchasedQuantity: 1,
          measurement: "Kg"
        }
      ]
  },
  {
    orderId: 3,
    storeId: 2,
    customerId: 1,
    orderDateTime: "2024-03-22 12:55:22",
    omnichannel: "OnlineApp",
    omnichannelType: "STH",
    carrier: "Owned",
    carrierService: "Owned",
    orderLines:
      [
        {
          itemId: 2,
          purchasedQuantity: 5,
          measurement: "Kg"
        }
      ]
  }
];