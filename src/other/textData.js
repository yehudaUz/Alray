const carNormalSubMenuButtons = ["פרטי", "מסחרי", "ג'יפים", "אופנועים", "קטנועים", "משאיות", "כלי שיט", "מיוחדים", "אביזרים"]
const carSpecialSubMenuButtons = [{ name: "מחירון רכב", path: "/carPrice.png" }, { name: "מכרזים וכינוסים", path: "/michrazim.png" }, { name: "מימון רכב", path: "/creditCar.png" }]
const cars = { normal: carNormalSubMenuButtons, special: carSpecialSubMenuButtons }

const realestateNormalSubMenuButtons = ["מכירה", "השכרה", "דירות שותפים", "נדלן מסחרי"]
const realestateSpecialSubMenuButtons = [{ name: "הערכת שווי נכס", path: "" }, { name: "יד1 דירות חדשות", path: "" }, { name: 'מדד הנדל"ן', path: "" }, { name: "כונס נכסים", path: "" }]
const realestate = { normal: realestateNormalSubMenuButtons, special: realestateSpecialSubMenuButtons }

const nadlanDropDownContentArrText = ["הערכת שווי נכס", "יד1 דירות חדשות", `מדד הנדל"ן`, "כונס נכסים", "חיפוש על המפה", "מסחרי", "שותפים", "דירות להשכרה", "דירות למכירה"]
const carDropDownContentArrText = ["מימון רכב", "מכרזים וכינוס", "מחירון רכב", "קטלוג רכבים", "כלי שייט", "רכבי יוקרה", "משאיות", "אביזרים", "מיוחדים", "קטנועים", "אופנועים", `ג'יפים`, "מסחרי", "פרטי"]

const makersAndModels = [
    {
        maker: "אאודי",
        models: ['100', '80', 'A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'RS3', 'RS5', 'RS6', 'RS7', 'S3', 'S4', 'S5', 'S6']
    },
    {
        maker: "מאזדה",
        models: ['121', '2', '2 דמיו', '3', '323', '323 לאנטיס', '5', '6', '626', 'mpv', 'MX-3', 'MX-5', 'MX-6', 'RX-8', 'דמיו']
    },
    {
        maker: "סובארו",
        models: ['121subaru', '2subaru', '2subaru דמיוsubaru', '3subaru', '323subaru', '323subaru לאנטיסsubaru', '5subaru', '6subaru', '626subaru', 'mpvsubaru', 'MXsubaru-3', 'MXsubaru-5', 'MXsubaru-6', 'RXsubaru-8', 'דמיוsubaru']
    },
    {
        maker: "מרצדס",
        models: ['121mercedez', '2mercedez', '2mercedez דמיוmercedez', '3mercedez', '323mercedez', '323mercedez לאנטיסmercedez', '5mercedez', '6mercedez', '626mercedez', 'mpvmercedez', 'MXmercedez-3', 'MXmercedez-5', 'MXmercedez-6', 'RXmercedez-8', 'דמיוmercedez']
    },
    {
        maker: "someLie",
        models: ['121someLie', '2someLie', '2someLie דמיוsomeLie', '3someLie', '323someLie', '323someLie לאנטיסsomeLie', '5someLie', '6someLie', '626someLie', 'mpvsomeLie', 'MXsomeLie-3', 'MXsomeLie-5', 'MXsomeLie-6', 'RXsomeLie-8', 'דמיוsomeLie']
    },
    {
        maker: "שקר כלשהוא",
        models: ['121שקר כלשהוא', '2שקר כלשהוא', '2שקר כלשהוא דמיו', '3שקר כלשהוא', '323שקר כלשהוא', '323שקר כלשהוא לאנטיס', '5שקר כלשהוא', '6שקר כלשהוא', '626', 'mpvשקר כלשהוא', 'MXשקר כלשהוא-3', 'MXשקר כלשהוא-5', 'MXשקר כלשהוא-6', 'RXשקר כלשהוא-8שקר כלשהוא', 'דמיו']
    },
    {
        maker: "שקר",
        models: ['121שקר', '2שקר', '2שקר דמיו', '3שקר', '323שקר', '323שקר לאנטיס', '5שקר', '6שקר', '626', 'mpv שקר', 'MXשקר -3', 'MXשקר -5', 'MXשקר -6', 'RXשקר -8שקר ', 'דמיו']
    },
    {
        maker: "כלשהוא",
        models: [' כלשהוא', ' כלשהוא', ' כלשהוא דמיו', ' כלשהוא', 'ר כלשהוא', ' כלשהוא לאנטיס', ' כלשהוא', ' כלשהוא', '626', ' כלשהוא', 'כלשהוא-3', 'כלשהוא-5', 'כלשהוא-6', 'כלשהוא-8שקר כלשהוא', 'דמיו']
    }, {
        maker: "שקר כלשהוא",
        models: ['121שקר כלשהוא', '2שקר כלשהוא', '2שקר כלשהוא דמיו', '3שקר כלשהוא', '323שקר כלשהוא', '323שקר כלשהוא לאנטיס', '5שקר כלשהוא', '6שקר כלשהוא', '626', 'mpvשקר כלשהוא', 'MXשקר כלשהוא-3', 'MXשקר כלשהוא-5', 'MXשקר כלשהוא-6', 'RXשקר כלשהוא-8שקר כלשהוא', 'דמיו']
    }
]

const northAreas = ["חיפה", "עכו", "קריות"]
const haderahArea = ["זכרון", "חדרה", "קיסריה"]
const hasharonArea = ["נתניה", "רמת השרון", "רעננה"]
const centerArea = ["תל-אביב", "ראשון", "חולון"]
const jerusalemArea = ["ירושלים", "בית שמש", "הרי יהודה"]

const areas = [
    { region: "צפון", zones: northAreas }, { region: "חדרה וזכרון העמקים", zones: haderahArea },
    { region: "השרון", zones: hasharonArea }, { region: "המרכז", zones: centerArea },
    { region: "אזור ירושלים", zones: jerusalemArea }
]

export {
    cars, realestate, nadlanDropDownContentArrText, carDropDownContentArrText, makersAndModels,
    areas
} 