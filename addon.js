const { addonBuilder, serveHTTP } = require('stremio-addon-sdk')

const builder = new addonBuilder({
    id: 'org.christmas.catalog',
    version: '1.6.0',
    name: 'Christmas Movies & Television',
    description: 'Large collection of Christmas Movies and Christmas Television popular in America',
    logo: 'https://i.imgur.com/8Km9tLL.png',
    resources: ['catalog', 'meta'],
    types: ['movie'],
    catalogs: [
        {
            type: 'movie',
            id: 'christmas-movies',
            name: 'Christmas Movies'
        },
        {
            type: 'movie',
            id: 'christmas-television',
            name: 'Christmas Television'
        }
    ]
})

// ====================== CHRISTMAS MOVIES ======================
const christmasMovies = [
    // Classics
    { id: 'tt0038650', name: "It's a Wonderful Life", year: 1946 },
    { id: 'tt0039628', name: 'Miracle on 34th Street', year: 1947 },
    { id: 'tt0043044', name: 'White Christmas', year: 1954 },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas', year: 1965 },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas!', year: 1966 },
    { id: 'tt0085334', name: 'A Christmas Story', year: 1983 },
    { id: 'tt0097958', name: "National Lampoon's Christmas Vacation", year: 1989 },
    { id: 'tt0099785', name: 'Home Alone', year: 1990 },
    { id: 'tt0104431', name: 'Home Alone 2: Lost in New York', year: 1992 },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol', year: 1992 },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas', year: 1993 },
    { id: 'tt0116705', name: 'Jingle All the Way', year: 1996 },
    { id: 'tt0170016', name: 'How the Grinch Stole Christmas', year: 2000 },
    { id: 'tt0319343', name: 'Elf', year: 2003 },
    { id: 'tt0314331', name: 'Love Actually', year: 2003 },
    { id: 'tt0338348', name: 'The Polar Express', year: 2004 },
    { id: 'tt0388419', name: 'Christmas with the Kranks', year: 2004 },
    { id: 'tt0457939', name: 'The Holiday', year: 2006 },
    { id: 'tt1440129', name: 'The Christmas Chronicles', year: 2018 },
    { id: 'tt2709692', name: 'The Grinch', year: 2018 },
    { id: 'tt4729430', name: 'Klaus', year: 2019 },
    { id: 'tt0095016', name: 'Die Hard', year: 1988 },
    { id: 'tt0087363', name: 'Gremlins', year: 1984 },

    // More popular theatrical & well-known
    { id: 'tt0112697', name: 'While You Were Sleeping', year: 1995 },
    { id: 'tt0120888', name: 'The Family Man', year: 2000 },
    { id: 'tt1007029', name: 'The Best Man Holiday', year: 2013 },
    { id: 'tt1292566', name: 'A Bad Moms Christmas', year: 2017 },
    { id: 'tt1334269', name: 'Office Christmas Party', year: 2016 },
    { id: 'tt1485796', name: 'The Night Before', year: 2015 },
    { id: 'tt1714209', name: 'This Christmas', year: 2007 },
    { id: 'tt2182000', name: 'Almost Christmas', year: 2016 },
    { id: 'tt3104988', name: 'Last Christmas', year: 2019 },
    { id: 'tt3513498', name: 'The Christmas Chronicles: Part Two', year: 2020 },
    { id: 'tt6432466', name: 'Holidate', year: 2020 },
    { id: 'tt9815454', name: 'Love Hard', year: 2021 },
    { id: 'tt10665338', name: 'The Noel Diary', year: 2022 },
    { id: 'tt1160419', name: 'A Christmas Carol (2009)', year: 2009 },
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer', year: 1964 },

    // Popular Netflix / Streaming Christmas Movies
    { id: 'tt2406951', name: 'A Christmas Prince', year: 2017 },
    { id: 'tt4682266', name: 'The Princess Switch', year: 2018 },
    { id: 'tt5779228', name: 'Christmas Inheritance', year: 2017 },
    { id: 'tt6265828', name: 'A California Christmas', year: 2020 },
    { id: 'tt6469960', name: 'Operation Christmas Drop', year: 2020 },
    { id: 'tt6644200', name: 'A Christmas Prince: The Royal Wedding', year: 2018 },
    { id: 'tt7510346', name: 'The Princess Switch: Switched Again', year: 2020 },
    { id: 'tt9207700', name: 'Dash & Lily', year: 2020 },
    { id: 'tt3799694', name: 'The Knight Before Christmas', year: 2019 },
    { id: 'tt4995540', name: 'A Castle for Christmas', year: 2021 },
    { id: 'tt5175270', name: 'The Holiday Calendar', year: 2018 },
    { id: 'tt5519340', name: 'Let It Snow', year: 2019 },
    { id: 'tt3532216', name: 'Holiday in the Wild', year: 2019 },
    { id: 'tt1086064', name: 'The Christmas Setup', year: 2020 },
    { id: 'tt13651628', name: 'Single All the Way', year: 2021 },
    { id: 'tt14771736', name: 'A Castle for Christmas', year: 2021 },
    { id: 'tt15239678', name: 'The Royal Treatment', year: 2022 },
    { id: 'tt15470824', name: 'Christmas with You', year: 2022 },
    { id: 'tt15791034', name: 'Falling for Christmas', year: 2022 },
    { id: 'tt16300294', name: 'A Holiday in Harlem', year: 2021 }
]

// ====================== CHRISTMAS TELEVISION ======================
const christmasTelevision = [
    // Classic Animated Specials
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer', year: 1964 },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas', year: 1965 },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas!', year: 1966 },
    { id: 'tt0064356', name: 'Frosty the Snowman', year: 1969 },
    { id: 'tt0067698', name: "Santa Claus Is Comin' to Town", year: 1970 },
    { id: 'tt0072431', name: 'The Year Without a Santa Claus', year: 1974 },
    { id: 'tt0084313', name: "Mickey's Christmas Carol", year: 1983 },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas', year: 1993 },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol', year: 1992 },
    { id: 'tt4729430', name: 'Klaus', year: 2019 },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas! (1966)', year: 1966 },
    { id: 'tt0116705', name: 'Jingle All the Way', year: 1996 },

    // Popular Series Christmas Episodes
    { id: 'tt0583459', name: 'Friends - The One with the Holiday Armadillo', year: 2000 },
    { id: 'tt0694605', name: 'The Office (US) - Christmas Party', year: 2005 },
    { id: 'tt0694610', name: 'The Office (US) - A Benihana Christmas', year: 2006 },
    { id: 'tt0701167', name: 'The Simpsons - Simpsons Roasting on an Open Fire', year: 1989 },
    { id: 'tt0756582', name: 'South Park - Mr. Hankey, the Christmas Poo', year: 1997 },
    { id: 'tt0756595', name: 'South Park - Merry Christmas Charlie Manson!', year: 1998 },
    { id: 'tt0974015', name: 'Doctor Who - The Christmas Invasion', year: 2005 },
    { id: 'tt1556203', name: 'Community - Abed\'s Uncontrollable Christmas', year: 2010 },
    { id: 'tt1627881', name: 'Parks and Recreation - Christmas Scandal', year: 2009 },
    { id: 'tt1830379', name: 'Modern Family - Undeck the Halls', year: 2009 },
    { id: 'tt2171847', name: 'The Big Bang Theory - The Santa Simulation', year: 2012 },
    { id: 'tt2370220', name: 'Brooklyn Nine-Nine - Christmas', year: 2013 },
    { id: 'tt3526078', name: 'Superstore - Christmas Eve', year: 2015 },
    { id: 'tt4052886', name: 'Lucifer - A Good Day to Die', year: 2016 },
    { id: 'tt2861424', name: 'Rick and Morty - Anatomy Park', year: 2014 },
    { id: 'tt3107288', name: 'The Flash - Going Rogue', year: 2014 }
]

function toMetas(list) {
    const seen = new Set()
    return list
        .filter(item => {
            if (seen.has(item.id)) return false
            seen.add(item.id)
            return true
        })
        .map(item => ({
            id: item.id,
            type: 'movie',
            name: item.name,
            poster: `https://images.metahub.space/poster/medium/${item.id}/img`,
            releaseInfo: String(item.year || '')
        }))
}

// Catalog Handler
builder.defineCatalogHandler(({ type, id }) => {
    if (type !== 'movie') return Promise.resolve({ metas: [] })

    if (id === 'christmas-movies') {
        return Promise.resolve({ metas: toMetas(christmasMovies) })
    }
    if (id === 'christmas-television') {
        return Promise.resolve({ metas: toMetas(christmasTelevision) })
    }
    return Promise.resolve({ metas: [] })
})

// Meta Handler
builder.defineMetaHandler(({ type, id }) => {
    if (type !== 'movie') return Promise.resolve({ meta: null })

    const allTitles = [...christmasMovies, ...christmasTelevision]
    const item = allTitles.find(t => t.id === id)

    if (!item) {
        return Promise.resolve({ meta: null })
    }

    return Promise.resolve({
        meta: {
            id: item.id,
            type: 'movie',
            name: item.name,
            poster: `https://images.metahub.space/poster/medium/${item.id}/img`,
            background: `https://images.metahub.space/background/medium/${item.id}/img`,
            releaseInfo: String(item.year || ''),
            description: `${item.name} (${item.year})`
        }
    })
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })
console.log('Christmas addon is running!')