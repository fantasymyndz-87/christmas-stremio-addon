const { addonBuilder, serveHTTP } = require('stremio-addon-sdk')

const builder = new addonBuilder({
    id: 'org.christmas.catalog',
    version: '1.3.0',
    name: 'Christmas Movies & Television',
    description: 'Curated Christmas Movies and Christmas Television specials',
    logo: 'https://i.imgur.com/8Km9tLL.png',
    resources: ['catalog', 'meta'],
    types: ['movie', 'series'],
    catalogs: [
        {
            type: 'movie',
            id: 'christmas-movies',
            name: 'Christmas Movies'
        },
        {
            type: 'series',
            id: 'christmas-television',
            name: 'Christmas Television'
        }
    ]
})

// ===== CHRISTMAS MOVIES =====
const christmasMovies = [
    { id: 'tt0038650', name: "It's a Wonderful Life", year: 1946 },
    { id: 'tt0099785', name: 'Home Alone', year: 1990 },
    { id: 'tt0104431', name: 'Home Alone 2: Lost in New York', year: 1992 },
    { id: 'tt0095016', name: 'Die Hard', year: 1988 },
    { id: 'tt0319343', name: 'Elf', year: 2003 },
    { id: 'tt0338348', name: 'The Polar Express', year: 2004 },
    { id: 'tt0085334', name: 'A Christmas Story', year: 1983 },
    { id: 'tt0097958', name: "National Lampoon's Christmas Vacation", year: 1989 },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas', year: 1993 },
    { id: 'tt0039628', name: 'Miracle on 34th Street', year: 1947 },
    { id: 'tt0170016', name: 'How the Grinch Stole Christmas', year: 2000 },
    { id: 'tt4729430', name: 'Klaus', year: 2019 },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol', year: 1992 },
    { id: 'tt0314331', name: 'Love Actually', year: 2003 },
    { id: 'tt0457939', name: 'The Holiday', year: 2006 },
    { id: 'tt1440129', name: 'The Christmas Chronicles', year: 2018 },
    { id: 'tt2709692', name: 'The Grinch', year: 2018 },
    { id: 'tt0116705', name: 'Jingle All the Way', year: 1996 },
    { id: 'tt0388419', name: 'Christmas with the Kranks', year: 2004 },
    { id: 'tt0087363', name: 'Gremlins', year: 1984 },
    { id: 'tt0043044', name: 'White Christmas', year: 1954 }
]

// ===== CHRISTMAS TELEVISION (Specials + Animated) =====
const christmasTelevision = [
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer', year: 1964 },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas', year: 1965 },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas!', year: 1966 },
    { id: 'tt0064356', name: 'Frosty the Snowman', year: 1969 },
    { id: 'tt0084313', name: "Mickey's Christmas Carol", year: 1983 },
    { id: 'tt0072431', name: 'The Year Without a Santa Claus', year: 1974 },
    { id: 'tt0067698', name: "Santa Claus Is Comin' to Town", year: 1970 },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas', year: 1993 },
    { id: 'tt4729430', name: 'Klaus', year: 2019 },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol', year: 1992 }
]

function toMetas(list, type) {
    const seen = new Set()
    return list
        .filter(item => {
            if (seen.has(item.id)) return false
            seen.add(item.id)
            return true
        })
        .map(item => ({
            id: item.id,
            type: type,
            name: item.name,
            poster: `https://images.metahub.space/poster/medium/${item.id}/img`,
            releaseInfo: String(item.year || '')
        }))
}

// Catalog Handler
builder.defineCatalogHandler(({ type, id }) => {
    if (id === 'christmas-movies' && type === 'movie') {
        return Promise.resolve({ metas: toMetas(christmasMovies, 'movie') })
    }
    if (id === 'christmas-television' && type === 'series') {
        return Promise.resolve({ metas: toMetas(christmasTelevision, 'series') })
    }
    return Promise.resolve({ metas: [] })
})

// Meta Handler
builder.defineMetaHandler(({ type, id }) => {
    const allTitles = [
        ...christmasMovies.map(t => ({ ...t, type: 'movie' })),
        ...christmasTelevision.map(t => ({ ...t, type: 'series' }))
    ]

    const item = allTitles.find(t => t.id === id)

    if (!item) {
        return Promise.resolve({ meta: null })
    }

    return Promise.resolve({
        meta: {
            id: item.id,
            type: item.type,
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