const CROP_DATABASE = {
    wheat: {
        name: "🌾 गेहूँ (Wheat)",
        season: "Rabi",
        sowing: "November - December",
        harvest: "March - April",
        duration: "120 Days",
        temperature: "15°C - 25°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "50 - 100 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "HD-2967",
            "PBW-343",
            "DBW-187",
            "HD-3086",
            "Lok-1"
        ],

        diseases: [
            "Rust (रतुआ)",
            "Loose Smut (कंडुआ)",
            "Leaf Blight (पत्ती झुलसा)",
            "Powdery Mildew (चूर्णी फफूंदी)"
        ],

        pests: [
            "Aphid (चेपा)",
            "Termite (दीमक)",
            "Armyworm (फौजी कीड़ा)"
        ],

        treatment: [
            "Carbendazim Spray",
            "Propiconazole Spray",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,

        seed: 100,

        fertilizer: {
            urea: 90,
            dap: 50,
            potash: 20
        }, workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },

        irrigation: 6,

        yield: 22,

        price: 2800
    },

    paddy: {
        name: "🌾 धान (Paddy)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "October - November",
        duration: "120 Days",
        temperature: "20°C - 35°C",
        soil: "Clay Soil (चिकनी मिट्टी)",
        rainfall: "100 - 200 cm",
        ph: "5.5 - 6.5",

        varieties: [
            "Pusa Basmati 1121",
            "Swarna",
            "IR-64",
            "MTU-1010",
            "PR-126"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Blast (झुलसा रोग)",
            "Bacterial Leaf Blight",
            "Sheath Blight"
        ],

        pests: [
            "Stem Borer",
            "Brown Plant Hopper",
            "Leaf Folder"
        ],

        treatment: [
            "Tricyclazole Spray",
            "Copper Oxychloride",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 12,

        fertilizer: {
            urea: 100,
            dap: 45,
            potash: 25
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 8,

        yield: 25,

        price: 2200
    },

    maize: {
        name: "🌽 मक्का (Maize)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "September - October",
        duration: "100 Days",
        temperature: "20°C - 30°C",
        soil: "Well Drained Loamy Soil (दोमट मिट्टी)",
        rainfall: "60 - 120 cm",
        ph: "5.5 - 7.5",

        varieties: [
            "HQPM-1",
            "PMH-1",
            "DHM-117",
            "Ganga-5"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Turcicum Leaf Blight",
            "Downy Mildew",
            "Maydis Leaf Blight"
        ],

        pests: [
            "Fall Armyworm",
            "Stem Borer",
            "Shoot Fly"
        ],

        treatment: [
            "Mancozeb Spray",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 8,

        fertilizer: {
            urea: 110,
            dap: 50,
            potash: 20
        }, workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },

        irrigation: 5,

        yield: 28,

        price: 2100
    },

    mustard: {
        name: "🌼 सरसों (Mustard)",
        season: "Rabi",
        sowing: "October - November",
        harvest: "February - March",
        duration: "120 Days",
        temperature: "18°C - 25°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "40 - 80 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "Pusa Bold",
            "Pusa Mustard-28",
            "Varuna",
            "RH-749"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Alternaria Blight",
            "White Rust",
            "Powdery Mildew"
        ],

        pests: [
            "Mustard Aphid",
            "Painted Bug",
            "Sawfly"
        ],

        treatment: [
            "Mancozeb Spray",
            "Sulphur Spray",
            "Neem Oil Spray"
        ],

        seed: 2,

        fertilizer: {
            urea: 40,
            dap: 30,
            potash: 15
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 3,

        yield: 8,

        price: 6200
    },

    gram: {
        name: "🟤 चना (Gram)",
        season: "Rabi",
        sowing: "October - November",
        harvest: "March - April",
        duration: "110 Days",
        temperature: "20°C - 30°C",
        soil: "Black Soil (काली मिट्टी)",
        rainfall: "40 - 60 cm",
        ph: "6.0 - 8.0",

        varieties: [
            "JG-11",
            "Pusa-372",
            "Vijay",
            "JG-14"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Wilt",
            "Dry Root Rot",
            "Botrytis Gray Mold"
        ],

        pests: [
            "Pod Borer",
            "Cutworm",
            "Aphid"
        ],

        treatment: [
            "Carbendazim",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 35,

        fertilizer: {
            urea: 20,
            dap: 40,
            potash: 10
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 2,

        yield: 10,

        price: 5800
    },
    sugarcane: {
        name: "🎋 गन्ना (Sugarcane)",
        season: "Annual",
        sowing: "February - April",
        harvest: "12 - 14 Months Later",
        duration: "365 Days",
        temperature: "20°C - 35°C",
        soil: "Deep Loamy Soil (गहरी दोमट मिट्टी)",
        rainfall: "100 - 150 cm",
        ph: "6.5 - 7.5",

        varieties: [
            "Co-0238",
            "CoJ-64",
            "Co-98014",
            "CoS-767"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Red Rot",
            "Smut",
            "Wilt",
            "Pokkah Boeng"
        ],

        pests: [
            "Early Shoot Borer",
            "Top Borer",
            "Root Borer",
            "Pyrilla"
        ],

        treatment: [
            "Carbendazim Treatment",
            "Copper Fungicide",
            "Recommended Insecticide",
            "Healthy Seed Setts"
        ],

        seed: 3500,

        fertilizer: {
            urea: 180,
            dap: 60,
            potash: 60
        }, workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },

        irrigation: 18,

        yield: 350,

        price: 340
    },

    potato: {
        name: "🥔 आलू (Potato)",
        season: "Rabi",
        sowing: "October - November",
        harvest: "January - February",
        duration: "90 Days",
        temperature: "15°C - 20°C",
        soil: "Sandy Loam Soil (बलुई दोमट मिट्टी)",
        rainfall: "50 - 75 cm",
        ph: "5.5 - 6.8",
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        varieties: [
            "Kufri Jyoti",
            "Kufri Pukhraj",
            "Kufri Bahar",
            "Kufri Chipsona"
        ],

        diseases: [
            "Late Blight",
            "Early Blight",
            "Black Scurf"
        ],

        pests: [
            "Aphid",
            "Cutworm",
            "Tuber Moth"
        ],

        treatment: [
            "Mancozeb Spray",
            "Metalaxyl Spray",
            "Neem Oil Spray"
        ],

        seed: 800,

        fertilizer: {
            urea: 120,
            dap: 60,
            potash: 80
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 8,

        yield: 100,

        price: 1600
    },

    onion: {
        name: "🧅 प्याज (Onion)",
        season: "Rabi",
        sowing: "October - November",
        harvest: "March - April",
        duration: "120 Days",
        temperature: "15°C - 25°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "60 - 80 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "N-53",
            "Bhima Red",
            "Bhima Shakti",
            "Agrifound Light Red"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Purple Blotch",
            "Stemphylium Blight",
            "Downy Mildew"
        ],

        pests: [
            "Thrips",
            "Onion Maggot",
            "Leaf Miner"
        ],

        treatment: [
            "Mancozeb Spray",
            "Copper Oxychloride",
            "Neem Oil Spray"
        ],

        seed: 4,

        fertilizer: {
            urea: 100,
            dap: 50,
            potash: 50
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 10,

        yield: 120,

        price: 1800
    },

    tomato: {
        name: "🍅 टमाटर (Tomato)",
        season: "Zaid",
        sowing: "January - February",
        harvest: "April - June",
        duration: "90 Days",
        temperature: "20°C - 27°C",
        soil: "Well Drained Loamy Soil (दोमट मिट्टी)",
        rainfall: "60 - 100 cm",
        ph: "6.0 - 7.0",

        varieties: [
            "Pusa Ruby",
            "Arka Rakshak",
            "Arka Vikas",
            "Punjab Chhuhara"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Early Blight",
            "Late Blight",
            "Leaf Curl Virus"
        ],

        pests: [
            "Fruit Borer",
            "Whitefly",
            "Thrips"
        ],

        treatment: [
            "Copper Fungicide",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 0.12,

        fertilizer: {
            urea: 120,
            dap: 60,
            potash: 60
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 12,

        yield: 250,

        price: 1200
    },

    cotton: {
        name: "☁️ कपास (Cotton)",
        season: "Kharif",
        sowing: "April - May",
        harvest: "October - January",
        duration: "180 Days",
        temperature: "21°C - 30°C",
        soil: "Black Cotton Soil (काली मिट्टी)",
        rainfall: "60 - 100 cm",
        ph: "6.0 - 8.0",

        varieties: [
            "Bt Cotton",
            "RCH-659",
            "Bunny Bt",
            "JKCH-1947"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Bacterial Blight",
            "Alternaria Leaf Spot",
            "Root Rot"
        ],

        pests: [
            "Pink Bollworm",
            "Whitefly",
            "Jassid",
            "Thrips"
        ],

        treatment: [
            "Neem Oil Spray",
            "Recommended Insecticide",
            "Copper Fungicide"
        ],

        seed: 2,

        fertilizer: {
            urea: 90,
            dap: 45,
            potash: 20
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 7,

        yield: 12,

        price: 7200
    },
    soybean: {
        name: "🫘 सोयाबीन (Soybean)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "October",
        duration: "100 Days",
        temperature: "20°C - 30°C",
        soil: "Black Soil (काली मिट्टी)",
        rainfall: "60 - 120 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "JS-335",
            "JS-9560",
            "NRC-37",
            "RVS-2001-4"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Yellow Mosaic Virus",
            "Rust",
            "Anthracnose",
            "Collar Rot"
        ],

        pests: [
            "Stem Fly",
            "Girdle Beetle",
            "Whitefly",
            "Tobacco Caterpillar"
        ],

        treatment: [
            "Neem Oil Spray",
            "Carbendazim Spray",
            "Recommended Insecticide",
            "Disease Free Seed"
        ],

        seed: 30,

        fertilizer: {
            urea: 20,
            dap: 40,
            potash: 15
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 3,

        yield: 12,

        price: 4500
    },

    bajra: {
        name: "🌾 बाजरा (Bajra)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "September - October",
        duration: "90 Days",
        temperature: "25°C - 35°C",
        soil: "Sandy Soil (बलुई मिट्टी)",
        rainfall: "40 - 60 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "HHB-67",
            "ICTP-8203",
            "RHB-177",
            "MPMH-17"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Downy Mildew",
            "Ergot",
            "Rust"
        ],

        pests: [
            "Shoot Fly",
            "Stem Borer",
            "Grasshopper"
        ],

        treatment: [
            "Metalaxyl Spray",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 2,

        fertilizer: {
            urea: 50,
            dap: 25,
            potash: 10
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 2,

        yield: 12,

        price: 2600
    },

    jowar: {
        name: "🌾 ज्वार (Jowar)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "September - October",
        duration: "110 Days",
        temperature: "26°C - 34°C",
        soil: "Black Soil (काली मिट्टी)",
        rainfall: "40 - 75 cm",
        ph: "6.0 - 8.0",

        varieties: [
            "CSV-15",
            "CSV-17",
            "CSH-14",
            "M-35-1"
        ],

        diseases: [
            "Anthracnose",
            "Grain Mold",
            "Downy Mildew"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        pests: [
            "Shoot Fly",
            "Stem Borer",
            "Midge"
        ],

        treatment: [
            "Carbendazim Spray",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 4,

        fertilizer: {
            urea: 50,
            dap: 25,
            potash: 10
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 2,

        yield: 14,

        price: 3000
    },

    groundnut: {
        name: "🥜 मूंगफली (Groundnut)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "October - November",
        duration: "120 Days",
        temperature: "20°C - 30°C",
        soil: "Sandy Loam Soil (बलुई दोमट मिट्टी)",
        rainfall: "50 - 100 cm",
        ph: "6.0 - 7.0",

        varieties: [
            "GG-20",
            "JL-24",
            "TAG-24",
            "Kadiri-6"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Tikka Disease",
            "Rust",
            "Collar Rot"
        ],

        pests: [
            "Leaf Miner",
            "White Grub",
            "Termite"
        ],

        treatment: [
            "Mancozeb Spray",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 60,

        fertilizer: {
            urea: 20,
            dap: 40,
            potash: 20
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 4,

        yield: 16,

        price: 6000
    },

    moong: {
        name: "🟢 मूंग (Moong)",
        season: "Zaid",
        sowing: "March - April",
        harvest: "June",
        duration: "70 Days",
        temperature: "25°C - 35°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "40 - 60 cm",
        ph: "6.2 - 7.2",

        varieties: [
            "PDM-139",
            "SML-668",
            "IPM-2-3",
            "Samrat"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Yellow Mosaic Virus",
            "Powdery Mildew",
            "Leaf Spot"
        ],

        pests: [
            "Whitefly",
            "Thrips",
            "Pod Borer"
        ],

        treatment: [
            "Neem Oil Spray",
            "Sulphur Spray",
            "Recommended Insecticide"
        ],

        seed: 8,

        fertilizer: {
            urea: 15,
            dap: 30,
            potash: 10
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 2,

        yield: 6,

        price: 7500
    },
    urad: {
        name: "⚫ उड़द (Urad)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "September - October",
        duration: "90 Days",
        temperature: "25°C - 35°C",
        soil: "Clay Loam Soil (चिकनी दोमट मिट्टी)",
        rainfall: "50 - 75 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "PU-31",
            "Pant U-31",
            "TAU-1",
            "LBG-752"
        ],

        diseases: [
            "Yellow Mosaic Virus",
            "Leaf Spot",
            "Powdery Mildew"
        ],

        pests: [
            "Whitefly",
            "Pod Borer",
            "Aphid"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        treatment: [
            "Neem Oil Spray",
            "Carbendazim Spray",
            "Recommended Insecticide"
        ],

        seed: 8,

        fertilizer: {
            urea: 20,
            dap: 30,
            potash: 10
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 2,

        yield: 6,

        price: 7200
    },

    chilli: {
        name: "🌶️ मिर्च (Chilli)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "October - January",
        duration: "150 Days",
        temperature: "20°C - 30°C",
        soil: "Well Drained Loamy Soil (दोमट मिट्टी)",
        rainfall: "60 - 100 cm",
        ph: "6.0 - 7.0",

        varieties: [
            "Pusa Jwala",
            "Arka Lohit",
            "Kashi Anmol",
            "Punjab Lal"
        ],

        diseases: [
            "Leaf Curl Virus",
            "Anthracnose",
            "Damping Off"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        pests: [
            "Thrips",
            "Mite",
            "Fruit Borer"
        ],

        treatment: [
            "Copper Fungicide",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 0.5,

        fertilizer: {
            urea: 100,
            dap: 60,
            potash: 50
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 10,

        yield: 80,

        price: 3000
    },

    brinjal: {
        name: "🍆 बैंगन (Brinjal)",
        season: "Kharif",
        sowing: "June - July",
        harvest: "October - February",
        duration: "150 Days",
        temperature: "22°C - 30°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "60 - 90 cm",
        ph: "5.5 - 6.8",

        varieties: [
            "Pusa Purple Long",
            "Pusa Kranti",
            "Arka Kusumkar",
            "Pant Rituraj"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Little Leaf",
            "Bacterial Wilt",
            "Phomopsis Blight"
        ],

        pests: [
            "Shoot & Fruit Borer",
            "Jassid",
            "Aphid"
        ],

        treatment: [
            "Copper Oxychloride",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 0.25,

        fertilizer: {
            urea: 120,
            dap: 60,
            potash: 60
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 10,

        yield: 250,

        price: 1800
    },

    cabbage: {
        name: "🥬 पत्ता गोभी (Cabbage)",
        season: "Rabi",
        sowing: "September - October",
        harvest: "December - January",
        duration: "90 Days",
        temperature: "15°C - 20°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "50 - 75 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "Golden Acre",
            "Pusa Drum Head",
            "Pride of India",
            "Green Express"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Black Rot",
            "Downy Mildew",
            "Club Root"
        ],

        pests: [
            "Diamond Back Moth",
            "Aphid",
            "Cutworm"
        ],

        treatment: [
            "Copper Fungicide",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 0.3,

        fertilizer: {
            urea: 120,
            dap: 60,
            potash: 60
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 8,

        yield: 300,

        price: 1200
    },

    cauliflower: {
        name: "🥦 फूलगोभी (Cauliflower)",
        season: "Rabi",
        sowing: "September - October",
        harvest: "December - January",
        duration: "90 Days",
        temperature: "15°C - 20°C",
        soil: "Loamy Soil (दोमट मिट्टी)",
        rainfall: "50 - 75 cm",
        ph: "6.0 - 7.5",

        varieties: [
            "Pusa Snowball",
            "Pusa Sharad",
            "Pant Gobhi-3",
            "Early Kunwari"
        ],
        states: [
            "Uttar Pradesh",
            "Punjab",
            "Haryana",
            "Madhya Pradesh",
            "Rajasthan",
            "Bihar"
        ],

        irrigationRequired: true,
        diseases: [
            "Black Rot",
            "Downy Mildew",
            "Club Root"
        ],

        pests: [
            "Diamond Back Moth",
            "Aphid",
            "Cutworm"
        ],

        treatment: [
            "Copper Fungicide",
            "Neem Oil Spray",
            "Recommended Insecticide"
        ],

        seed: 0.25,

        fertilizer: {
            urea: 120,
            dap: 60,
            potash: 60
        },
        workSchedule: {

            firstIrrigation: 20,

            fertilizer: 30,

            secondIrrigation: 45,

            pesticide: 60,

            harvest: 120

        },
        irrigation: 8,

        yield: 250,

        price: 1500
    }
};