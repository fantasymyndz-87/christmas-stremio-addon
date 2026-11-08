const { addonBuilder, serveHTTP } = require('stremio-addon-sdk');

const builder = new addonBuilder({
    id: 'org.christmas.catalog',
    version: '2.7.0',
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
    { id: 'tt0029992', name: 'A Christmas Carol (1938)', year: 1938 },
    { id: 'tt0032247', name: 'Beyond Christmas (Beyond Tomorrow)', year: 1940 },
    { id: 'tt0033045', name: 'The Shop Around the Corner', year: 1940 },
    { id: 'tt0034862', name: 'Holiday Inn', year: 1942 },
    { id: 'tt0037595', name: 'Christmas in Connecticut', year: 1945 },
    { id: 'tt0037059', name: 'Meet Me in St. Louis', year: 1944 },
    { id: 'tt0038650', name: "It's a Wonderful Life", year: 1946 },
    { id: 'tt0039502', name: 'It Happened on Fifth Avenue', year: 1947 },
    { id: 'tt0039190', name: "The Bishop's Wife", year: 1947 },
    { id: 'tt0039628', name: 'Miracle on 34th Street', year: 1947 },
    { id: 'tt0041257', name: 'Come to the Stable', year: 1949 },
    { id: 'tt0047673', name: 'White Christmas', year: 1954 },
    { id: 'tt0044008', name: 'Scrooge (1951)', year: 1951 },
    { id: 'tt0066344', name: 'Scrooge (1970)', year: 1970 },
    { id: 'tt0067209', name: 'The Homecoming: A Christmas Story', year: 1971 },
    { id: 'tt0068720', name: 'The House Without a Christmas Tree', year: 1972 },
    { id: 'tt0087056', name: 'A Christmas Carol (1984)', year: 1984 },
    { id: 'tt0216621', name: 'A Christmas Carol (1999)', year: 1999 },

    // 80s / 90s
    { id: 'tt0085334', name: 'A Christmas Story', year: 1983 },
    { id: 'tt0087363', name: 'Gremlins', year: 1984 },
    { id: 'tt0089961', name: 'Santa Claus: The Movie', year: 1985 },
    { id: 'tt0089731', name: 'One Magic Christmas', year: 1985 },
    { id: 'tt0090683', name: 'Babes in Toyland (1986)', year: 1986 },
    { id: 'tt0095016', name: 'Die Hard', year: 1988 },
    { id: 'tt0096061', name: 'Scrooged', year: 1988 },
    { id: 'tt0095107', name: 'Ernest Saves Christmas', year: 1988 },
    { id: 'tt0097958', name: "National Lampoon's Christmas Vacation", year: 1989 },
    { id: 'tt0098115', name: 'Prancer', year: 1989 },
    { id: 'tt0099785', name: 'Home Alone', year: 1990 },
    { id: 'tt0101301', name: 'All I Want for Christmas', year: 1991 },
    { id: 'tt0104431', name: 'Home Alone 2: Lost in New York', year: 1992 },
    { id: 'tt0104940', name: 'The Muppet Christmas Carol', year: 1992 },
    { id: 'tt0107688', name: 'The Nightmare Before Christmas', year: 1993 },
    { id: 'tt0110527', name: 'Miracle on 34th Street (1994)', year: 1994 },
    { id: 'tt0111070', name: 'The Santa Clause', year: 1994 },
    { id: 'tt0110955', name: 'The Ref', year: 1994 },
    { id: 'tt0110538', name: 'Mixed Nuts', year: 1994 },
    { id: 'tt0111477', name: 'Trapped in Paradise', year: 1994 },
    { id: 'tt0114924', name: 'While You Were Sleeping', year: 1995 },
    { id: 'tt0116705', name: 'Jingle All the Way', year: 1996 },
    { id: 'tt0155753', name: "I'll Be Home for Christmas", year: 1998 },
    { id: 'tt0141109', name: 'Jack Frost (1998)', year: 1998 },

    // 2000s
    { id: 'tt0218967', name: 'The Family Man', year: 2000 },
    { id: 'tt0170016', name: 'How the Grinch Stole Christmas', year: 2000 },
    { id: 'tt0304669', name: 'The Santa Clause 2', year: 2002 },
    { id: 'tt0307987', name: 'Bad Santa', year: 2003 },
    { id: 'tt0319343', name: 'Elf', year: 2003 },
    { id: 'tt0314331', name: 'Love Actually', year: 2003 },
    { id: 'tt0338348', name: 'The Polar Express', year: 2004 },
    { id: 'tt0252028', name: 'Surviving Christmas', year: 2004 },
    { id: 'tt0388419', name: 'Christmas with the Kranks', year: 2004 },
    { id: 'tt0356680', name: 'The Family Stone', year: 2005 },
    { id: 'tt0433400', name: 'Just Friends', year: 2005 },
    { id: 'tt0457939', name: 'The Holiday', year: 2006 },
    { id: 'tt0790604', name: 'Deck the Halls', year: 2006 },
    { id: 'tt0762121', name: 'The Nativity Story', year: 2006 },
    { id: 'tt0488658', name: 'Unaccompanied Minors', year: 2006 },
    { id: 'tt0452681', name: 'The Santa Clause 3: The Escape Clause', year: 2006 },
    { id: 'tt0486583', name: 'Fred Claus', year: 2007 },
    { id: 'tt0937375', name: 'This Christmas', year: 2007 },
    { id: 'tt0369436', name: 'Four Christmases', year: 2008 },
    { id: 'tt1151915', name: 'Nothing Like the Holidays', year: 2008 },
    { id: 'tt1067106', name: 'A Christmas Carol (2009)', year: 2009 },

    // 2010s+
    { id: 'tt1430607', name: 'Arthur Christmas', year: 2011 },
    { id: 'tt2083355', name: 'The Best Man Holiday', year: 2013 },
    { id: 'tt2279339', name: 'Love the Coopers', year: 2015 },
    { id: 'tt3530002', name: 'The Night Before', year: 2015 },
    { id: 'tt3850590', name: 'Krampus', year: 2015 },
    { id: 'tt1711525', name: 'Office Christmas Party', year: 2016 },
    { id: 'tt4649416', name: 'Almost Christmas', year: 2016 },
    { id: 'tt1798603', name: 'Bad Santa 2', year: 2016 },
    { id: 'tt7608418', name: 'A Christmas Prince', year: 2017 },
    { id: 'tt6359956', name: 'A Bad Moms Christmas', year: 2017 },
    { id: 'tt6225520', name: 'The Man Who Invented Christmas', year: 2017 },
    { id: 'tt8954732', name: 'The Princess Switch', year: 2018 },
    { id: 'tt2990140', name: 'The Christmas Chronicles', year: 2018 },
    { id: 'tt2709692', name: 'The Grinch', year: 2018 },
    { id: 'tt10060094', name: 'The Knight Before Christmas', year: 2019 },
    { id: 'tt5097410', name: 'Noelle', year: 2019 },
    { id: 'tt1950235', name: 'Let It Snow', year: 2019 },
    { id: 'tt8510488', name: 'Holiday in the Wild', year: 2019 },
    { id: 'tt4729430', name: 'Klaus', year: 2019 },
    { id: 'tt8623904', name: 'Last Christmas', year: 2019 },
    { id: 'tt8522006', name: 'Happiest Season', year: 2020 },
    { id: 'tt11057644', name: 'The Christmas Chronicles: Part Two', year: 2020 },
    { id: 'tt9866072', name: 'Holidate', year: 2020 },
    { id: 'tt11540284', name: '8-Bit Christmas', year: 2021 },
    { id: 'tt14315756', name: 'Single All the Way', year: 2021 },
    { id: 'tt10752004', name: 'Love Hard', year: 2021 },
    { id: 'tt10999120', name: 'Spirited', year: 2022 },
    { id: 'tt12003946', name: 'Violent Night', year: 2022 },
    { id: 'tt17220704', name: 'A Christmas Story Christmas', year: 2022 },
    { id: 'tt14715170', name: 'Falling for Christmas', year: 2022 },
    { id: 'tt14227048', name: 'Family Switch', year: 2023 },
    { id: 'tt7038762', name: 'Best. Christmas. Ever!', year: 2023 },
    { id: 'tt21328106', name: 'Candy Cane Lane', year: 2023 },
    { id: 'tt24429218', name: 'Genie', year: 2023 },
    { id: 'tt5608166', name: 'Dashing Through the Snow', year: 2023 },
    { id: 'tt14948432', name: 'Red One', year: 2024 },
    { id: 'tt32359447', name: 'Hot Frosty', year: 2024 },
    { id: 'tt31022050', name: 'Our Little Secret', year: 2024 },
    { id: 'tt20502488', name: 'Meet Me Next Christmas', year: 2024 },
    { id: 'tt2396431', name: 'Dear Santa', year: 2024 }
];

// ====================== CHRISTMAS SPECIALS ======================
const christmasSpecials = [
    // Classic Specials
    { id: 'tt0123179', name: "Mister Magoo's Christmas Carol", year: 1962 },
    { id: 'tt0059026', name: 'A Charlie Brown Christmas', year: 1965 },
    { id: 'tt0060345', name: 'How the Grinch Stole Christmas!', year: 1966 },
    { id: 'tt0085936', name: "Mickey's Christmas Carol", year: 1983 },

    // Rankin/Bass (complete Christmas catalog)
    { id: 'tt0058536', name: 'Rudolph the Red-Nosed Reindeer', year: 1964 },
    { id: 'tt0387954', name: 'The Cricket on the Hearth', year: 1967 },
    { id: 'tt0063230', name: 'The Little Drummer Boy', year: 1968 },
    { id: 'tt0064349', name: 'Frosty the Snowman', year: 1969 },
    { id: 'tt0066327', name: "Santa Claus Is Comin' to Town", year: 1970 },
    { id: 'tt1587526', name: 'Festival of Family Classics: A Christmas Tree', year: 1972 },
    { id: 'tt0208654', name: "'Twas the Night Before Christmas", year: 1974 },
    { id: 'tt0072424', name: 'The Year Without a Santa Claus', year: 1974 },
    { id: 'tt0073751', name: 'The First Christmas: The Story of the First Christmas Snow', year: 1975 },
    { id: 'tt0134661', name: "Frosty's Winter Wonderland", year: 1976 },
    { id: 'tt0073640', name: "Rudolph's Shiny New Year", year: 1976 },
    { id: 'tt0074805', name: 'The Little Drummer Boy, Book II', year: 1976 },
    { id: 'tt0076448', name: 'Nestor, the Long-Eared Christmas Donkey', year: 1977 },
    { id: 'tt0227562', name: 'The Stingiest Man in Town', year: 1978 },
    { id: 'tt0079357', name: 'Jack Frost', year: 1979 },
    { id: 'tt0079828', name: "Rudolph and Frosty's Christmas in July", year: 1979 },
    { id: 'tt0081340', name: "Pinocchio's Christmas", year: 1980 },
    { id: 'tt0223634', name: "The Leprechauns' Christmas Gold", year: 1981 },
    { id: 'tt0089488', name: 'The Life and Adventures of Santa Claus', year: 1985 },
    { id: 'tt0106973', name: 'Frosty Returns', year: 1992 },
    { id: 'tt0358103', name: 'Santa, Baby!', year: 2001 },
    { id: 'tt0293913', name: 'Rudolph the Red-Nosed Reindeer and the Island of Misfit Toys', year: 2001 },
    { id: 'tt0488147', name: 'The Legend of Frosty the Snowman', year: 2005 },
    { id: 'tt1332026', name: "A Miser Brothers' Christmas", year: 2008 },

    // More classic specials
    { id: 'tt0075988', name: "Emmet Otter's Jug-Band Christmas", year: 1977 },
    { id: 'tt0331217', name: 'Christmas Eve on Sesame Street', year: 1978 },
    { id: 'tt0078281', name: 'The Small One', year: 1978 },
    { id: 'tt0084701', name: 'The Snowman', year: 1982 },
    { id: 'tt0276016', name: 'He-Man and She-Ra: A Christmas Special', year: 1985 },
    { id: 'tt0099263', name: "Jim Henson's The Christmas Toy", year: 1986 },
    { id: 'tt0251282', name: 'A Muppet Family Christmas', year: 1987 },
    { id: 'tt0302596', name: 'A Garfield Christmas Special', year: 1987 },
    { id: 'tt0272045', name: 'Claymation Christmas Celebration', year: 1987 },
    { id: 'tt0103272', name: 'A Wish for Wings That Work', year: 1991 },
    { id: 'tt0356140', name: 'The Town Santa Forgot', year: 1993 },
    { id: 'tt0133372', name: "Annabelle's Wish", year: 1997 },
    { id: 'tt0227173', name: 'Olive, the Other Reindeer', year: 1999 },

    // More classics & modern specials
    { id: 'tt0297017', name: 'The Bear Who Slept Through Christmas', year: 1973 },
    { id: 'tt0182015', name: 'A Cosmic Christmas', year: 1977 },
    { id: 'tt0251640', name: "Christmas at Pee-wee's Playhouse", year: 1988 },
    { id: 'tt0220159', name: 'Winnie the Pooh and Christmas Too', year: 1991 },
    { id: 'tt0118692', name: 'Beauty and the Beast: The Enchanted Christmas', year: 1997 },
    { id: 'tt0219086', name: 'Robbie the Reindeer: Hooves of Fire', year: 1998 },
    { id: 'tt0238414', name: "Mickey's Once Upon a Christmas", year: 1999 },
    { id: 'tt0268948', name: "Arthur's Perfect Christmas", year: 2000 },
    { id: 'tt0347394', name: 'Robbie the Reindeer: Legend of the Lost Tribe', year: 2002 },
    { id: 'tt0424279', name: "Mickey's Twice Upon a Christmas", year: 2004 },
    { id: 'tt0897387', name: 'Shrek the Halls', year: 2007 },
    { id: 'tt2100546', name: 'Ice Age: A Mammoth Christmas', year: 2011 },
    { id: 'tt2560206', name: 'The Snowman and the Snowdog', year: 2012 },
    { id: 'tt3473654', name: 'Toy Story That Time Forgot', year: 2014 }
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
    { id: 'tt0782576', name: 'The Simpsons - Simpsons Christmas Stories', year: 2005 },
    { id: 'tt2107521', name: 'The Simpsons - Holidays of Future Passed', year: 2011 },

    // Futurama
    { id: 'tt0584465', name: 'Futurama - Xmas Story', year: 1999 },
    { id: 'tt0584429', name: 'Futurama - A Tale of Two Santas', year: 2001 },

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
    { id: 'tt2113422', name: 'Parks and Recreation - Citizen Knope', year: 2011 },

    // Community
    { id: 'tt1559103', name: 'Community - Comparative Religion', year: 2009 },
    { id: 'tt1640854', name: "Community - Abed's Uncontrollable Christmas", year: 2010 },
    { id: 'tt2105238', name: 'Community - Regional Holiday Music', year: 2011 },

    // Family Guy
    { id: 'tt0576913', name: "Family Guy - A Very Special Family Guy Freakin' Christmas", year: 2001 },
    { id: 'tt1710689', name: 'Family Guy - Road to the North Pole', year: 2010 },
    { id: 'tt2443942', name: 'Family Guy - Jesus, Mary and Joseph!', year: 2012 },
    { id: 'tt6019446', name: 'Family Guy - How the Griffin Stole Christmas', year: 2016 },

    // American Dad!
    { id: 'tt1555452', name: "American Dad! - Rapture's Delight", year: 2009 },

    // King of the Hill
    { id: 'tt0620291', name: 'King of the Hill - Pretty, Pretty Dresses', year: 1998 },

    // Bob's Burgers
    { id: 'tt2531554', name: "Bob's Burgers - Bob Rest Ye Merry Gentle-Mannequins", year: 2012 },
    { id: 'tt7635808', name: "Bob's Burgers - The Bleakening", year: 2017 },

    // It's Always Sunny in Philadelphia
    { id: 'tt1478620', name: "It's Always Sunny in Philadelphia - A Very Sunny Christmas", year: 2009 },

    // 30 Rock
    { id: 'tt1001594', name: '30 Rock - Ludachristmas', year: 2007 },

    // The Office (UK)
    { id: 'tt0664502', name: 'The Office (UK) - Christmas Special: Part 1', year: 2003 },
    { id: 'tt0664503', name: 'The Office (UK) - Christmas Special: Part 2', year: 2003 },

    // M*A*S*H
    { id: 'tt0638290', name: 'M*A*S*H - Dear Sis', year: 1978 },

    // The West Wing
    { id: 'tt0745635', name: 'The West Wing - In Excelsis Deo', year: 1999 },

    // Buffy the Vampire Slayer
    { id: 'tt0533387', name: 'Buffy the Vampire Slayer - Amends', year: 1998 },

    // Scrubs
    { id: 'tt0696619', name: 'Scrubs - My Own Personal Jesus', year: 2001 },

    // Doctor Who
    { id: 'tt1672218', name: 'Doctor Who - A Christmas Carol', year: 2010 },

    // The O.C.
    { id: 'tt0663865', name: 'The O.C. - The Best Chrismukkah Ever', year: 2003 },

    // New Girl
    { id: 'tt2125218', name: 'New Girl - The 23rd', year: 2011 },

    // Rugrats
    { id: 'tt1151694', name: 'Rugrats - The Santa Experience', year: 1992 },

    // Hey Arnold!
    { id: 'tt0600738', name: "Hey Arnold! - Arnold's Christmas", year: 1996 },

    // SpongeBob SquarePants
    { id: 'tt0707305', name: 'SpongeBob SquarePants - Christmas Who?', year: 2000 },

    // The Big Bang Theory
    { id: 'tt1256021', name: 'The Big Bang Theory - The Bath Item Gift Hypothesis', year: 2008 },
    { id: 'tt2559784', name: 'The Big Bang Theory - The Santa Simulation', year: 2012 },

    // Brooklyn Nine-Nine
    { id: 'tt3277264', name: 'Brooklyn Nine-Nine - Christmas', year: 2013 },
    { id: 'tt4371314', name: 'Brooklyn Nine-Nine - Yippie Kayak', year: 2015 },

    // Other classics
    { id: 'tt0582452', name: 'Frasier - Merry Christmas, Mrs. Moskowitz', year: 1998 },
    { id: 'tt0582453', name: 'Frasier - Miracle on Third or Fourth Street', year: 1993 },
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
