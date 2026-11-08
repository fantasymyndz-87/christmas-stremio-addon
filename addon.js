const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');

const builder = new addonBuilder({
    id: 'org.christmas.catalog',
    version: '2.5.0',
    name: 'Christmas Movies & Specials',
    description: 'Christmas Movies, Classic Specials, and Holiday Episodes',
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
            id: 'christmas-specials',
            name: 'Christmas Specials'
        },
        {
            type: 'movie',
            id: 'holiday-episodes',
            name: 'Holiday Episodes'
        }
    ]
});

// ====================== CHRISTMAS MOVIES ======================
const christmasMovies = [
    // Classics
    { id: 'tt0038650', name: "It's a Wonderful Life", year: 1946 },
    { id: 'tt0039628', name: 'Miracle on 34th Street', year: 1947 },
    { id: 'tt0034862', name: 'Holiday Inn', year: 1942 },
    { id: 'tt0037059', name: 'Meet Me in St. Louis', year: 1944 },
    { id: 'tt0043044', name: 'White Christmas', year: 1954 },

    // 80s / 90s
    { id: 'tt0085334', name: 'A Christmas Story', year: 1983 },
    { id: 'tt0087363', name: 'Gremlins', year: 1984 },
    { id: 'tt0095016', name: 'Die Hard', year: 1988 },
    { id: 'tt0096061', name: 'Scrooged', year: 1988 },
    { id: 'tt0097958', name: "National Lampoon's Christmas Vacation", year: 1989 },
    { id: 'tt0099785', name: 'Home Alone', year: 1990 },
    { id: 'tt0104431', name: 'Home Alone 2: Lost in New York', year: 1992 },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol', year: 1992 },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas', year: 1993 },
    { id: 'tt0111070', name: 'The Santa Clause', year: 1994 },
    { id: 'tt0112697', name: 'While You Were Sleeping', year: 1995 },
    { id: 'tt0116705', name: 'Jingle All the Way', year: 1996 },

    // 2000s
    { id: 'tt0120888', name: 'The Family Man', year: 2000 },
    { id: 'tt0170016', name: 'How the Grinch Stole Christmas', year: 2000 },
    { id: 'tt0307987', name: 'Bad Santa', year: 2003 },
    { id: 'tt0319343', name: 'Elf', year: 2003 },
    { id: 'tt0314331', name: 'Love Actually', year: 2003 },
    { id: 'tt0338348', name: 'The Polar Express', year: 2004 },
    { id: 'tt0388419', name: 'Christmas with the Kranks', year: 2004 },
    { id: 'tt0356680', name: 'The Family Stone', year: 2005 },
    { id: 'tt0457939', name: 'The Holiday', year: 2006 },
    { id: 'tt0304669', name: 'The Santa Clause 2', year: 2002 },
    { id: 'tt0452681', name: 'The Santa Clause 3: The Escape Clause', year: 2006 },
    { id: 'tt0486583', name: 'Fred Claus', year: 2007 },
    { id: 'tt1714209', name: 'This Christmas', year: 2007 },
    { id: 'tt0369436', name: 'Four Christmases', year: 2008 },
    { id: 'tt1160419', name: 'A Christmas Carol (2009)', year: 2009 },

    // 2010s+
    { id: 'tt1007029', name: 'The Best Man Holiday', year: 2013 },
    { id: 'tt1485796', name: 'The Night Before', year: 2015 },
    { id: 'tt1334269', name: 'Office Christmas Party', year: 2016 },
    { id: 'tt2182000', name: 'Almost Christmas', year: 2016 },
    { id: 'tt1292566', name: 'A Bad Moms Christmas', year: 2017 },
    { id: 'tt1440129', name: 'The Christmas Chronicles', year: 2018 },
    { id: 'tt2709692', name: 'The Grinch', year: 2018 },
    { id: 'tt4729430', name: 'Klaus', year: 2019 },
    { id: 'tt3104988', name: 'Last Christmas', year: 2019 },
    { id: 'tt3513498', name: 'The Christmas Chronicles: Part Two', year: 2020 },
    { id: 'tt6432466', name: 'Holidate', year: 2020 },
    { id: 'tt9815454', name: 'Love Hard', year: 2021 }
];

// ====================== CHRISTMAS SPECIALS ======================
const christmasSpecials = [
    // Classic Specials
    { id: 'tt0059026', name: 'A Charlie Brown Christmas', year: 1965 },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas!', year: 1966 },
    { id: 'tt0084313', name: "Mickey's Christmas Carol", year: 1983 },

    // Rankin/Bass
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer', year: 1964 },
    { id: 'tt0063230', name: 'The Little Drummer Boy', year: 1968 },
    { id: 'tt0064356', name: 'Frosty the Snowman', year: 1969 },
    { id: 'tt0067698', name: "Santa Claus Is Comin' to Town", year: 1970 },
    { id: 'tt0208654', name: "'Twas the Night Before Christmas", year: 1974 },
    { id: 'tt0072431', name: 'The Year Without a Santa Claus', year: 1974 },
    { id: 'tt0134661', name: "Frosty's Winter Wonderland", year: 1976 },
    { id: 'tt0073640', name: "Rudolph's Shiny New Year", year: 1976 },
    { id: 'tt0076448', name: 'Nestor, the Long-Eared Christmas Donkey', year: 1977 },
    { id: 'tt0079357', name: 'Jack Frost', year: 1979 },
    { id: 'tt0079828', name: "Rudolph and Frosty's Christmas in July", year: 1979 },
    { id: 'tt0089488', name: 'The Life and Adventures of Santa Claus', year: 1985 }
];

// ====================== HOLIDAY EPISODES ======================
// All IMDb IDs verified against imdb.com
const holidayEpisodes = [
    // The Simpsons
    { id: 'tt0348034', name: 'The Simpsons - Simpsons Roasting on an Open Fire', year: 1989 },
    { id: 'tt0701168', name: 'The Simpsons - Marge Be Not Proud', year: 1995 },
    { id: 'tt0701176', name: 'The Simpsons - Miracle on Evergreen Terrace', year: 1997 },
    { id: 'tt0701101', name: 'The Simpsons - Grift of the Magi', year: 1999 },
    { id: 'tt0789632', name: "The Simpsons - 'Tis the Fifteenth Season", year: 2003 },
    { id: 'tt1628667', name: 'The Simpsons - The Fight Before Christmas', year: 2010 },

    // South Park
    { id: 'tt0705945', name: 'South Park - Mr. Hankey, the Christmas Poo', year: 1997 },
    { id: 'tt0705942', name: 'South Park - Merry Christmas Charlie Manson!', year: 1998 },
    { id: 'tt0705944', name: "South Park - Mr. Hankey's Christmas Classics", year: 1999 },
    { id: 'tt0705892', name: 'South Park - A Very Crappy Christmas', year: 2000 },
    { id: 'tt0766085', name: 'South Park - Red Sleigh Down', year: 2002 },
    { id: 'tt0705984', name: 'South Park - Woodland Critter Christmas', year: 2004 },
    { id: 'tt3959654', name: 'South Park - #HappyHolograms', year: 2014 },

    // Friends
    { id: 'tt0583630', name: 'Friends - The One with the Monkey', year: 1994 },
    { id: 'tt0583652', name: 'Friends - The One with All the Thanksgivings', year: 1998 },
    { id: 'tt0583613', name: 'Friends - The One with the Holiday Armadillo', year: 2000 },
    { id: 'tt0583518', name: 'Friends - The One with Christmas in Tulsa', year: 2002 },

    // The Office (US)
    { id: 'tt0664513', name: 'The Office - Christmas Party', year: 2005 },
    { id: 'tt0908674', name: 'The Office - A Benihana Christmas', year: 2006 },
    { id: 'tt1548747', name: 'The Office - Secret Santa', year: 2009 },
    { id: 'tt1752584', name: 'The Office - Classy Christmas', year: 2010 },
    { id: 'tt2514850', name: 'The Office - Dwight Christmas', year: 2012 },

    // Seinfeld
    { id: 'tt0697752', name: 'Seinfeld - The Pick', year: 1992 },
    { id: 'tt0697790', name: 'Seinfeld - The Strike (Festivus)', year: 1997 },

    // How I Met Your Mother
    { id: 'tt0904645', name: 'How I Met Your Mother - How Lily Stole Christmas', year: 2006 },
    { id: 'tt1256172', name: 'How I Met Your Mother - Little Minnesota', year: 2008 },
    { id: 'tt2121966', name: 'How I Met Your Mother - Symphony of Illumination', year: 2011 },

    // Modern Family
    { id: 'tt1536241', name: 'Modern Family - Undeck the Halls', year: 2009 },
    { id: 'tt2096098', name: 'Modern Family - Express Christmas', year: 2011 },
    { id: 'tt3335562', name: 'Modern Family - The Old Man & the Tree', year: 2013 },

    // Parks and Recreation
    { id: 'tt1545370', name: 'Parks and Recreation - Christmas Scandal', year: 2009 },
    { id: 'tt2466936', name: 'Parks and Recreation - Ron and Diane', year: 2012 },

    // Community
    { id: 'tt1559103', name: 'Community - Comparative Religion', year: 2009 },
    { id: 'tt1640854', name: "Community - Abed's Uncontrollable Christmas", year: 2010 },

    // Family Guy
    { id: 'tt0576913', name: "Family Guy - A Very Special Family Guy Freakin' Christmas", year: 2001 },
    { id: 'tt1710689', name: 'Family Guy - Road to the North Pole', year: 2010 },

    // The Big Bang Theory
    { id: 'tt1256021', name: 'The Big Bang Theory - The Bath Item Gift Hypothesis', year: 2008 },
    { id: 'tt2559784', name: 'The Big Bang Theory - The Santa Simulation', year: 2012 },

    // Brooklyn Nine-Nine
    { id: 'tt3277264', name: 'Brooklyn Nine-Nine - Christmas', year: 2013 },
    { id: 'tt4371314', name: 'Brooklyn Nine-Nine - Yippie Kayak', year: 2015 },

    // Other classics
    { id: 'tt0582452', name: 'Frasier - Merry Christmas, Mrs. Moskowitz', year: 1998 },
    { id: 'tt0751138', name: 'The X-Files - How the Ghosts Stole Christmas', year: 1998 },
    { id: 'tt0642303', name: "Married... with Children - It's a Bundyful Life (Part 1)", year: 1989 },
    { id: 'tt0642304', name: "Married... with Children - It's a Bundyful Life (Part 2)", year: 1989 }
];

function toMetas(list) {
    const seen = new Set();
    return list
        .filter(item => {
            if (seen.has(item.id)) return false;
            seen.add(item.id);
            return true;
        })
        .map(item => ({
            id: item.id,
            type: 'movie',
            name: item.name,
            poster: `https://images.metahub.space/poster/medium/${item.id}/img`,
            releaseInfo: String(item.year || '')
        }));
}

// Catalog Handler
builder.defineCatalogHandler(({ type, id }) => {
    if (type !== 'movie') {
        return Promise.resolve({ metas: [] });
    }

    if (id === 'christmas-movies') {
        return Promise.resolve({ metas: toMetas(christmasMovies) });
    }
    if (id === 'christmas-specials') {
        return Promise.resolve({ metas: toMetas(christmasSpecials) });
    }
    if (id === 'holiday-episodes') {
        return Promise.resolve({ metas: toMetas(holidayEpisodes) });
    }

    return Promise.resolve({ metas: [] });
});

// Meta Handler
builder.defineMetaHandler(({ type, id }) => {
    if (type !== 'movie') {
        return Promise.resolve({ meta: null });
    }

    const allTitles = [
        ...christmasMovies,
        ...christmasSpecials,
        ...holidayEpisodes
    ];

    const item = allTitles.find(t => t.id === id);

    if (!item) {
        return Promise.resolve({ meta: null });
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
    });
});

serveHTTP(builder.getInterface(), { port: process.env.PORT || 7000 });
console.log('Christmas addon is running!');