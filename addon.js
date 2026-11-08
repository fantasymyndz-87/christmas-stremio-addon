const { addonBuilder, serveHTTP } = require('stremio-addon-sdk')

const builder = new addonBuilder({
    id: 'org.christmas.catalog',
    version: '1.1.0',
    name: 'Christmas Movies & Specials',
    description: 'Curated catalogs of the best Christmas movies, cartoons, and holiday specials',
    logo: 'https://i.imgur.com/8Km9tLL.png',
    resources: ['catalog'],
    types: ['movie'],
    catalogs: [
        {
            type: 'movie',
            id: 'christmas-movies',
            name: 'Christmas Movies'
        },
        {
            type: 'movie',
            id: 'christmas-cartoons',
            name: 'Christmas Cartoons & Specials'
        }
    ]
})

// ===== CHRISTMAS MOVIES =====
const christmasMovies = [
    { id: 'tt0038650', name: "It's a Wonderful Life" },
    { id: 'tt0099785', name: 'Home Alone' },
    { id: 'tt0104431', name: 'Home Alone 2: Lost in New York' },
    { id: 'tt0095016', name: 'Die Hard' },
    { id: 'tt0319343', name: 'Elf' },
    { id: 'tt0338348', name: 'The Polar Express' },
    { id: 'tt0085334', name: 'A Christmas Story' },
    { id: 'tt0097958', name: "National Lampoon's Christmas Vacation" },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas' },
    { id: 'tt0039628', name: 'Miracle on 34th Street (1947)' },
    { id: 'tt0170016', name: 'How the Grinch Stole Christmas (2000)' },
    { id: 'tt4729430', name: 'Klaus' },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol' },
    { id: 'tt0314331', name: 'Love Actually' },
    { id: 'tt0457939', name: 'The Holiday' },
    { id: 'tt1440129', name: 'The Christmas Chronicles' },
    { id: 'tt2709692', name: 'The Grinch (2018)' },
    { id: 'tt0112431', name: 'Jingle All the Way' },
    { id: 'tt0388419', name: 'Christmas with the Kranks' },
    { id: 'tt0087363', name: 'Gremlins' },
    { id: 'tt0099785', name: 'Home Alone' }, // kept intentionally for clarity
    { id: 'tt0043044', name: 'White Christmas' },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas' },
    { id: 'tt0116705', name: 'Jingle All the Way' },
    { id: 'tt0388419', name: 'Christmas with the Kranks' },
    { id: 'tt0099785', name: 'Home Alone' },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas' },
    { id: 'tt0319343', name: 'Elf' },
    { id: 'tt0095016', name: 'Die Hard' },
    { id: 'tt0038650', name: "It's a Wonderful Life" },
    { id: 'tt0085334', name: 'A Christmas Story' },
    { id: 'tt0097958', name: "National Lampoon's Christmas Vacation" },
    { id: 'tt0104431', name: 'Home Alone 2: Lost in New York' },
    { id: 'tt0338348', name: 'The Polar Express' },
    { id: 'tt0170016', name: 'How the Grinch Stole Christmas (2000)' },
    { id: 'tt4729430', name: 'Klaus' },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol' },
    { id: 'tt0314331', name: 'Love Actually' },
    { id: 'tt0457939', name: 'The Holiday' },
    { id: 'tt1440129', name: 'The Christmas Chronicles' },
    { id: 'tt2709692', name: 'The Grinch (2018)' },
    { id: 'tt0043044', name: 'White Christmas' },
    { id: 'tt0116705', name: 'Jingle All the Way' },
    { id: 'tt0388419', name: 'Christmas with the Kranks' },
    { id: 'tt0087363', name: 'Gremlins' }
]

// ===== CHRISTMAS CARTOONS & SPECIALS =====
const christmasCartoons = [
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer (1964)' },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas' },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas! (1966)' },
    { id: 'tt0064356', name: 'Frosty the Snowman' },
    { id: 'tt0084313', name: "Mickey's Christmas Carol" },
    { id: 'tt0072431', name: 'The Year Without a Santa Claus' },
    { id: 'tt0067698', name: "Santa Claus Is Comin' to Town" },
    { id: 'tt1146433', name: 'A Chipmunk Christmas' },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas' },
    { id: 'tt4729430', name: 'Klaus' },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol' },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas! (1966)' },
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer (1964)' },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas' },
    { id: 'tt0064356', name: 'Frosty the Snowman' },
    { id: 'tt0084313', name: "Mickey's Christmas Carol" },
    { id: 'tt0072431', name: 'The Year Without a Santa Claus' },
    { id: 'tt0067698', name: "Santa Claus Is Comin' to Town" }
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
            poster: `https://images.metahub.space/poster/medium/${item.id}/img`
        }))
}

builder.defineCatalogHandler(({ type, id }) => {
    if (type !== 'movie') return Promise.resolve({ metas: [] })

    if (id === 'christmas-movies') {
        return Promise.resolve({ metas: toMetas(christmasMovies) })
    }
    if (id === 'christmas-cartoons') {
        return Promise.resolve({ metas: toMetas(christmasCartoons) })
    }
    return Promise.resolve({ metas: [] })
})

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 })
console.log('Christmas addon is running!')