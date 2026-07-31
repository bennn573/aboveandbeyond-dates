export const CITIES = [
    // 1. LONDON 
    { 
        id: 1, 
        name: 'London', 
        position: [51.509865, -0.118092], 
        fact: 'Above & Beyond\'s spiritual home, hosting numerous club shows, milestone events like ABGT050, ABGT400 and ABGT450, as well as multiple tour dates over the years.', 
        country: 'United Kingdom', 
        events: [
            // MILESTONES
            { date: '2013-10-26', venue: 'Alexandra Palace (ABGT050)', type: 'Milestone' }, 
            { date: '2020-09-26', venue: 'Virtual (ABGT400)', type: 'Milestone' }, 
            { date: '2021-09-04', venue: 'The Drumsheds (ABGT450)', type: 'Milestone' },

            // OTHER EVENTS
            { date: '2005-03-24', venue: 'Gatecrasher @ Heaven', type: 'Other', isResidentAdvisor: true },
            { date: '2006-01-13', venue: 'Turnmills', type: 'Other', isResidentAdvisor: true },
            { date: '2006-03-04', venue: 'Canvas', type: 'Other', isResidentAdvisor: true },
            { date: '2006-04-14', venue: 'The Gallery Easter Weekender', type: 'Other', isResidentAdvisor: true },
            { date: '2006-07-07', venue: 'Turnmills', type: 'Other', isResidentAdvisor: true },
            { date: '2006-11-03', venue: 'Turnmills', type: 'Other', isResidentAdvisor: true },
            { date: '2006-12-31', venue: 'HeatNye @ O2 Academy Brixton', type: 'Other', isResidentAdvisor: true },
            { date: '2007-02-23', venue: 'Turnmills', type: 'Other', isResidentAdvisor: true },
            { date: '2007-05-25', venue: 'Turnmills', type: 'Other', isResidentAdvisor: true },
            { date: '2007-12-07', venue: 'Turnmills', type: 'Other', isResidentAdvisor: true },
            { date: '2008-10-10', venue: 'Ministry of Sound', type: 'Other', isResidentAdvisor: true },
            { date: '2008-12-31', venue: 'Ministry of Sound', type: 'Other', isResidentAdvisor: true },
            { date: '2009-08-29', venue: 'SW4 @ Clapham Common', type: 'Other', isSongkick: true },
            { date: '2009-10-02', venue: 'Ministry of Sound', type: 'Other', isSongkick: true },
            { date: '2009-10-28', venue: 'Ministry of Sound', type: 'Other', isSongkick: true },
            { date: '2010-04-02', venue: 'Anjunabeats @ Ministry of Sound', type: 'Other', isResidentAdvisor: true },
            { date: '2010-10-30', venue: 'O2 Academy Brixton', type: 'Other', isResidentAdvisor: true },
            { date: '2011-08-27', venue: 'SW4 @ Clapham Common', type: 'Other', isResidentAdvisor: true },
            { date: '2012-04-07', venue: 'O2 Academy Brixton', type: 'Tour' },
            { date: '2012-04-08', venue: 'O2 Academy Brixton', type: 'Tour' },
            { date: '2015-03-13', venue: 'Ministry of Sound', type: 'Other', isResidentAdvisor: true },
            { date: '2014-01-24', venue: 'Porchester Hall (Acoustic)', type: 'Acoustic' },
            { date: '2014-11-13', venue: 'Little Something Special @ SSE Wembley Arena', type: 'Other', isSongkick: true },
            { date: '2015-04-03', venue: 'O2 Academy Brixton', type: 'Tour' },
            { date: '2015-04-04', venue: 'O2 Academy Brixton', type: 'Tour' },
            { date: '2016-06-04', venue: 'Royal Albert Hall (Acoustic)', type: 'Acoustic' },
            { date: '2016-08-28', venue: 'SW4 @ Clapham Common', type: 'Other', isResidentAdvisor: true },
            { date: '2017-11-04', venue: 'O2 Arena', type: 'Other' },
            { date: '2019-04-12', venue: 'Printworks', type: 'Tour' },
            { date: '2019-04-13', venue: 'Printworks', type: 'Tour' },
            { date: '2024-03-29', venue: 'Drumsheds (BBC Radio 1 Dance)', type: 'Other' },
            { date: '2025-11-15', venue: 'O2 Academy Brixton', type: 'Tour' },
            { date: '2025-11-16', venue: 'O2 Academy Brixton', type: 'Tour' },
            { date: '2026-07-03', venue: 'Silverworks Island', type: 'Other' },
        ]
    },
    { 
        id: 2, 
        name: 'Los Angeles', 
        position: [34.0522, -118.2437], 
        fact: 'Home to the most iconic A&B events in the US.', 
        country: 'United States', 
        events: [
            // MILESTONES (TATW350 and ABGT500)
            { date: '2010-12-10', venue: 'Hollywood Palladium (TATW350)', type: 'Milestone' },
            { date: '2022-10-15', venue: 'Banc of California Stadium (ABGT500)', type: 'Milestone' },
            
            // OTHER DATES
            { date: '2007-06-30', venue: 'Electric Daisy Carnival', type: 'Other', isResidentAdvisor: true },
            { date: '2008-09-13', venue: 'Nocturnal Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2010-06-26', venue: 'Electric Daisy Carnival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-05-13', venue: 'Hollywood Palladium', type: 'Other', isSongkick: true },
            { date: '2011-05-14', venue: 'Hollywood Palladium', type: 'Other', isSongkick: true },
            { date: '2011-09-05', venue: 'Sutra', type: 'Other', isResidentAdvisor: true },
            { date: '2012-05-17', venue: 'Shrine Auditorium', type: 'Other', isSongkick: true },
            { date: '2012-05-18', venue: 'Shrine Auditorium', type: 'Other', isSongkick: true },
            { date: '2012-05-19', venue: 'Shrine Auditorium', type: 'Other', isSongkick: true },
            { date: '2015-02-06', venue: 'The Forum', type: 'Other' },
            { date: '2016-05-28', venue: 'Hollywood Bowl (Acoustic)', type: 'Acoustic' },
            { date: '2025-12-31', venue: 'Los Angeles Convention Centre', type: 'Other' },
        ], 
    },
    // 3. GLASGOW 
    { 
        id: 3, 
        name: 'Glasgow',
        position: [55.8642, -4.2518],
        fact: 'A frequently visited city, known for passionate crowds and multiple tour stops over the years.',
        country: 'United Kingdom',
        events: [
            { date: '2011-04-02', venue: 'The Arches', type: 'Other', isSongkick: true },
            { date: '2015-04-02', venue: 'ABC', type: 'Tour' },
            { date: '2016-03-05', venue: 'The Arches', type: 'Other' },
            { date: '2023-12-10', venue: 'SWG3', type: 'Other' },
            { date: '2012-04-19', venue: 'O2 Academy Glasgow', type: 'Tour' },
            { date: '2012-04-20', venue: 'The Barrowland Ballroom', type: 'Tour' },
            { date: '2016-11-24', venue: 'O2 Academy Glasgow', type: 'Tour' },
            { date: '2018-11-03', venue: 'SWG3', type: 'Tour' },
            { date: '2018-11-04', venue: 'SWG3', type: 'Tour' },
            { date: '2024-07-27', venue: 'Galvanizers Yard, SWG3', type: 'Other' },
            { date: '2025-12-06', venue: 'O2 Academy Glasgow', type: 'Tour' },
        ]
    },
    // 4. COALVILLE
    { 
        id: 4, 
        name: 'Coalville', 
        position: [52.6105, -1.3653], 
        fact: 'A destination for early Passion parties in the UK, including a New Year\'s Eve special.', 
        country: 'United Kingdom', 
        events: [
            { date: '2004-02-28', venue: "Passion's 9th Birthday", type: 'Other', isResidentAdvisor: true },
            { date: '2004-12-31', venue: 'Passion v Storm NYE', type: 'Other', isResidentAdvisor: true },
            { date: '2005-04-16', venue: 'Passion Pure', type: 'Other', isResidentAdvisor: true },
        ]
    },
    // 5. IBIZA
    { 
        id: 5, 
        name: 'Ibiza', 
        position: [38.9088, 1.4323], 
        // FACT UPDATED: Added mention of Essential Mixes
        fact: 'A regular summer destination for the trio, including iconic BBC Radio 1 Essential Mix broadcasts.', 
        country: 'Spain', 
        events: [
            { date: '2010-08-03', venue: 'Essential Mix Live from Privilege', type: 'Other' },
            { date: '2015-08-14', venue: 'Essential Mix Live from Cream, Amnesia', type: 'Other' },
            { date: '2017-08-27', venue: 'Essential Mix Live from Cream, Amnesia', type: 'Other' },
            
            // Existing events
            { date: '2005-07-03', venue: 'Judgement Sundays @ Eden', type: 'Other', isResidentAdvisor: true },
            { date: '2005-09-11', venue: 'Judgement Sundays @ Eden', type: 'Other', isResidentAdvisor: true },
            { date: '2007-06-28', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2007-07-05', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2007-07-19', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2007-08-16', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2007-09-13', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2008-07-10', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2008-07-24', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2008-08-14', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2008-09-11', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2008-09-18', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2010-07-01', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2011-06-30', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2012-06-28', venue: 'Cream @ Amnesia', type: 'Other', isSongkick: true },
            { date: '2012-07-12', venue: 'Cream @ Amnesia', type: 'Other', isSongkick: true },
            { date: '2012-08-09', venue: 'Cream @ Amnesia', type: 'Other', isSongkick: true },
            { date: '2012-08-16', venue: 'Cream @ Amnesia', type: 'Other', isSongkick: true },
            { date: '2012-08-30', venue: 'Cream @ Amnesia', type: 'Other', isSongkick: true },
            { date: '2012-09-13', venue: 'Cream @ Amnesia', type: 'Other', isSongkick: true },
            { date: '2015-06-11', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-07-02', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-07-16', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-08-01', venue: 'Creamfields Ibiza @ Ushuaia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-08-06', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-08-20', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-08-27', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2015-09-10', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2016-07-21', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2016-08-11', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2016-08-18', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2016-08-25', venue: 'Cream @ Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2018-08-15', venue: 'Hï Ibiza', type: 'Tour' },
            { date: '2019-07-12', venue: 'Ushuaia', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 6, 
        name: 'Stratford-upon-Avon', 
        position: [52.1917, -1.7073], 
        fact: 'The setting for massive Global Gathering festival appearances.', 
        country: 'United Kingdom', 
        events: [
            { date: '2005-07-30', venue: 'Global Gathering', type: 'Other', isResidentAdvisor: true },
            { date: '2006-07-28', venue: 'Global Gathering', type: 'Other', isResidentAdvisor: true },
            { date: '2007-07-28', venue: 'Global Gathering', type: 'Other', isResidentAdvisor: true },
            { date: '2008-07-26', venue: 'Global Gathering', type: 'Other', isResidentAdvisor: true },
            { date: '2010-07-30', venue: 'Global Gathering', type: 'Other', isResidentAdvisor: true },
            { date: '2011-07-29', venue: 'Global Gathering', type: 'Other', isResidentAdvisor: true },
            { date: '2012-07-28', venue: 'Global Gathering', type: 'Other', isSongkick: true },
        ]
    },
    { 
        id: 7, 
        name: 'Amsterdam', 
        position: [52.3676, 4.9041], 
        fact: 'Host to the ABGT200 milestone at the Ziggo Dome.', 
        country: 'Netherlands', 
        events: [
            { date: '2005-08-05', venue: 'Dance Valley Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2006-07-14', venue: 'Dance Valley Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2008-09-20', venue: 'The Sand', type: 'Other', isResidentAdvisor: true },
            { date: '2009-08-30', venue: 'Mysteryland', type: 'Other', isSongkick: true },
            { date: '2011-08-06', venue: 'Dance Valley Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2012-08-04', venue: 'Dance Valley Festival', type: 'Other', isSongkick: true },
            { date: '2015-01-30', venue: 'Paradiso', type: 'Tour' },
            { date: '2016-09-24', venue: 'Ziggo Dome (ABGT200)', type: 'Milestone' },
            { date: '2025-10-31', venue: 'AFAS Live', type: 'Tour' },
        ]
    },
    { 
        id: 8, 
        name: 'Istanbul', 
        position: [41.0082, 28.9784], 
        fact: '', 
        country: 'Turkey', 
        events: [
            { date: '2005-09-10', venue: 'Pepsi Electronica Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2008-08-08', venue: 'Global Gathering Turkey 2008', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 9, 
        name: 'Liverpool', 
        position: [53.4084, -2.9916], 
        fact: 'Host of Creamfields festival.', 
        country: 'United Kingdom', 
        events: [
            { date: '2005-08-27', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2007-08-25', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2011-03-05', venue: 'Cream @ Nation', type: 'Other', isResidentAdvisor: true },
            { date: '2011-08-28', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2011-10-08', venue: 'Cream 19th Birthday @ Nation', type: 'Other', isResidentAdvisor: true },
            { date: '2012-04-14', venue: 'O2 Academy Liverpool', type: 'Tour' },
            { date: '2012-08-25', venue: 'Creamfields', type: 'Other', isSongkick: true },
            { date: '2015-08-29', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2016-08-27', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2019-08-24', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2026-10-17', venue: 'Blackstone Street Warehouse', type: 'Other'},
        ]
    },
    { 
        id: 10, 
        name: 'Auckland', 
        position: [-36.8485, 174.7633], 
        fact: 'One of their early stops on the 2005 Godskitchen world tour, beginning in New Zealand.', 
        country: 'New Zealand', 
        events: [
            { date: '2005-10-01', venue: 'Godskitchen', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 11, 
        name: 'Sydney', 
        position: [-33.8688, 151.2093], 
        fact: 'Host of the epic ABGT150 milestone at Allphones Arena as well as part of the Godskitchen Australian tour in 2005.', 
        country: 'Australia', 
        events: [
            { date: '2015-09-26', venue: 'Allphones Arena (ABGT150)', type: 'Milestone' }, 
            { date: '2005-10-02', venue: 'Godskitchen @ Space', type: 'Other', isResidentAdvisor: true },
            { date: '2008-11-30', venue: 'Global Gathering Sydney', type: 'Other', isResidentAdvisor: true },
            { date: '2010-03-06', venue: 'Future Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-10', venue: 'Hordern Pavillion', type: 'Tour', isResidentAdvisor: true },
            { date: '2012-04-29', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2013-01-27', venue: 'Hordern Pavillion', type: 'Other', isSongkick: true },
            { date: '2014-12-31', venue: 'Hordern Pavillion', type: 'Other', isSongkick: true },
            { date: '2016-06-06', venue: 'Sydney Opera House (Acoustic)', type: 'Acoustic' },
        ]
    },
    { 
        id: 12, 
        name: 'Melbourne', 
        position: [-37.8136, 144.9631], 
        fact: 'Hosted a major event at the iconic Rod Laver Arena in 2005 and headlined Creamfields 2012.', 
        country: 'Australia', 
        events: [
            { date: '2005-10-08', venue: 'Rod Laver Arena', type: 'Other', isResidentAdvisor: true },
            { date: '2008-11-22', venue: 'Global Gathering Melbourne', type: 'Other', isResidentAdvisor: true },
            { date: '2010-03-07', venue: 'Future Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-17', venue: 'Festival Hall', type: 'Tour', isResidentAdvisor: true },
            { date: '2012-04-28', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2013-02-02', venue: 'Melbourne Arena', type: 'Other', isSongkick: true },
            { date: '2015-01-01', venue: 'Myer Music Bowl', type: 'Other', isSongkick: true },
            { date: '2015-09-25', venue: 'Myer Music Bowl', type: 'Tour', isResidentAdvisor: true },
        ]
    },
    { 
        id: 13, 
        name: 'Cardiff', 
        position: [51.4816, -3.1791], 
        fact: 'The capital city of Wales.', 
        country: 'United Kingdom', 
        events: [
            { date: '2005-10-15', venue: 'Evolution', type: 'Other', isResidentAdvisor: true },
            { date: '2008-12-31', venue: 'Liquid (Godskitchen Return To Cardiff Nye)', type: 'Other', isResidentAdvisor: true },
            { date: '2011-04-08', venue: 'Millenium Music Hall', type: 'Other', isSongkick: true },
        ]
    },
    { 
        id: 14, 
        name: 'Middlesbrough', 
        position: [54.5779, -1.2366], 
        fact: 'A stop on the UK leg of the Godskitchen tour in November 2005.', 
        country: 'United Kingdom', 
        events: [
            { date: '2005-11-05', venue: 'Godskitchen', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 15, 
        name: 'Utrecht', 
        position: [52.0907, 5.1214], 
        fact: 'The home of the massive Trance Energy event in February 2006.', 
        country: 'Netherlands', 
        events: [
            { date: '2006-02-11', venue: 'Trance Energy', type: 'Other', isResidentAdvisor: true },
            { date: '2010-04-03', venue: 'Trance Energy', type: 'Other', isResidentAdvisor: true },
            { date: '2015-05-03', venue: 'TivoliVredenburg (Acoustic)', type: 'Acoustic' },
            { date: '2019-02-23', venue: 'A State of Trance 900', type: 'Other' },
        ]
    },
    { 
        id: 16, 
        name: 'Miami', 
        position: [25.7617, -80.1918], 
        fact: 'A crucial location for Winter Music Conference (WMC) events, including two on the same day in March 2006!', 
        country: 'United States', 
        events: [
            { date: '2006-03-24', venue: 'Nocturnal Club', type: 'Other', isResidentAdvisor: true },
            { date: '2006-03-24', venue: 'Wet Grooves Beach Party', type: 'Other', isResidentAdvisor: true },
            { date: '2007-03-21', venue: 'Winter Music Conference', type: 'Other', isResidentAdvisor: true },
            { date: '2007-03-22', venue: 'Made Event pres. Above & Beyond', type: 'Other', isResidentAdvisor: true },
            { date: '2007-03-23', venue: 'Wet Grooves Beach Party After Dark', type: 'Other', isResidentAdvisor: true },
            { date: '2008-03-27', venue: 'Anjunabeats 100 with Above & Beyond', type: 'Other', isResidentAdvisor: true },
            { date: '2010-03-27', venue: 'Ultra Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-03-24', venue: 'Ice Palace', type: 'Other', isResidentAdvisor: true },
            { date: '2012-03-22', venue: 'Group Therapy @ Bayfront Park', type: 'Other', isSongkick: true },
            { date: '2013-03-17', venue: 'Ultra Music Festival', type: 'Other', isSongkick: true },
            { date: '2013-03-23', venue: 'Ultra Music Festival', type: 'Other', isSongkick: true },
            { date: '2016-03-17', venue: 'RC Cola Plant', type: 'Other', isResidentAdvisor: true },
            { date: '2017-03-23', venue: 'RC Cola Plant', type: 'Other', isSongkick: true},
        ]
    },
    { 
        id: 17, 
        name: 'Leeds', 
        position: [53.8008, -1.5491], 
        fact: 'A major stop in A&Bs early career.', 
        country: 'United Kingdom', 
        events: [
            { date: '2008-04-11', venue: 'Godskitchen Leeds', type: 'Other', isResidentAdvisor: true },
            { date: '2010-05-02', venue: 'Digital Society', type: 'Other', isResidentAdvisor: true },
            { date: '2011-04-15', venue: 'Digital Society', type: 'Other', isResidentAdvisor: true },
            { date: '2012-04-13', venue: 'O2 Academy Leeds', type: 'Tour' },
        ]
    },
    { 
        id: 18, 
        name: 'Adelaide', 
        position: [-34.9285, 138.6007], 
        fact: 'Host city for Creamfields Australia 2012.', 
        country: 'Australia', 
        events: [
            { date: '2010-03-08', venue: 'Future Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-15', venue: 'HQ Complex', type: 'Tour', isResidentAdvisor: true },
            { date: '2012-04-27', venue: 'Creamfields', type: 'Other', isResidentAdvisor: true },
            { date: '2013-01-26', venue: 'Adelaide Entertainment Centre', type: 'Other', isSongkick: true },
        ]
    },
    { 
        id: 19, 
        name: 'Manchester', 
        position: [53.4808, -2.2426], 
        fact: 'The city is a frequent stop historically at Sankeys, more recently at The Warehouse Project and on tours.', 
        country: 'United Kingdom', 
        events: [
            { date: '2007-05-12', venue: 'The Music Box', type: 'Other', isResidentAdvisor: true },
            { date: '2010-06-11', venue: 'Sankeys', type: 'Other', isSongkick: true },
            { date: '2010-12-26', venue: 'The Warehouse Project', type: 'Other', isResidentAdvisor: true },
            { date: '2014-10-03', venue: 'The Warehouse Project (Anjuna)', type: 'Other', isResidentAdvisor: true },
            { date: '2015-04-05', venue: 'Albert Hall', type: 'Tour' },
            { date: '2016-05-01', venue: 'Albert Hall (Acoustic)', type: 'Acoustic' },
            { date: '2016-11-25', venue: 'The Warehouse Project', type: 'Tour' },
            { date: '2017-06-11', venue: 'Parklife @ Heaton Park, type: 'Other'},
            { date: '2018-11-16', venue: 'The Warehouse Project', type: 'Tour' },
            { date: '2019-11-29', venue: 'The Warehouse Project', type: 'Other' },
        ] 
    },
    { 
        id: 20, 
        name: 'Belfast', 
        position: [54.5973, -5.9301], 
        fact: 'Host of the 2016 European Tour at Ulster Hall and part of the 2018 Common Ground Tour.', 
        country: 'United Kingdom (Northern Ireland)', 
        events: [
            { date: '2016-11-26', venue: 'Ulster Hall', type: 'Tour' },
            { date: '2018-11-09', venue: 'The Telegraph Building', type: 'Tour' },
            { date: '2024-07-26', venue: 'The Telegraph Building', type: 'Other' },
            { date: '2025-11-01', venue: 'The Telegraph Building', type: 'Tour' },
        ] 
    },
    { 
        id: 21, 
        name: 'Dublin', 
        position: [53.3498, -6.2603], 
        fact: 'The Irish capital.', 
        country: 'Ireland', 
        events: [
            { date: '2010-10-29', venue: 'Tripod', type: 'Other', isResidentAdvisor: true },
            { date: '2013-04-05', venue: 'Trinity Ball', type: 'Other', isSongkick: true },
            { date: '2016-11-27', venue: 'Olympia Theatre', type: 'Tour' },
        ] 
    },
    { 
        id: 22, 
        name: 'Warsaw', 
        position: [52.2297, 21.0122], 
        fact: 'A stop in Eastern Europe for both the 2016 European Tour and the 2018 Common Ground Tour.', 
        country: 'Poland', 
        events: [
            { date: '2012-07-14', venue: 'Ultra Music Festival Poland 2012', type: 'Other', isSongkick: true },
            { date: '2016-11-30', venue: 'Progresja Music Zone', type: 'Tour' },
            { date: '2018-10-28', venue: 'Progresja Music Zone', type: 'Tour' },
        ] 
    },
    { 
        id: 23, 
        name: 'Hamburg', 
        position: [53.5511, 9.9937], 
        fact: 'A German stop on the 2016 European Tour at Docks and the 2018 Common Ground Tour.', 
        country: 'Germany', 
        events: [
            { date: '2016-12-01', venue: 'Docks', type: 'Tour' },
            { date: '2018-10-26', venue: 'Uebel & Gefährlich', type: 'Tour' },
        ] 
    },
    { 
        id: 24, 
        name: 'Munich', 
        position: [48.1351, 11.5820], 
        fact: 'The southern German city was part of the 2016 European Tour, playing at Backstage Werk.', 
        country: 'Germany', 
        events: [
            { date: '2016-12-02', venue: 'Backstage Werk', type: 'Tour' },
        ] 
    },
    { 
        id: 25, 
        name: 'Cologne', 
        position: [50.9375, 6.9603], 
        fact: 'A German stop on the 2015, the 2016, the 2018 and the 2025 tour.', 
        country: 'Germany', 
        events: [
            { date: '2015-01-15', venue: 'Live Music Hall', type: 'Tour' },
            { date: '2016-12-03', venue: 'Live Music Hall', type: 'Tour' },
            { date: '2018-10-20', venue: 'Boothaus', type: 'Tour' },
            { date: '2025-12-05', venue: 'Bootshaus', type: 'Tour' },
        ] 
    },
    { 
        id: 26, 
        name: 'Brussels', 
        position: [50.8503, 4.3517], 
        fact: 'The Belgian capital hosted a show at Ancienne Belgique during the 2016 European Tour.', 
        country: 'Belgium', 
        events: [
            { date: '2016-12-10', venue: 'Ancienne Belgique', type: 'Tour' },
        ] 
    },
    { 
        id: 27, 
        name: 'Paris', 
        position: [48.8566, 2.3522], 
        fact: 'Played at Le Trianon during the 2015 "We Are All We Need" Tour and at Elysée Montmartre as part of the 2016 European Tour.', 
        country: 'France', 
        events: [
            { date: '2008-04-18', venue: 'Queen', type: 'Other', isResidentAdvisor: true },
            { date: '2010-01-28', venue: 'Queen', type: 'Other', isResidentAdvisor: true },
            { date: '2012-04-05', venue: 'Grand Palais', type: 'Other', isSongkick: true },
            { date: '2015-01-31', venue: 'Le Trianon', type: 'Tour' },
            { date: '2016-12-11', venue: 'Elysée Montmartre', type: 'Tour' },
            { date: '2018-11-07', venue: 'Le Trianon', type: 'Tour' },
            { date: '2025-11-28', venue: 'Phantom', type: 'Tour' },
        ] 
    },
    { 
        id: 28, 
        name: 'Stockholm', 
        position: [59.3293, 18.0686], 
        fact: 'The Swedish capital was a stop on the 2015, 2016 European Tour, and the 2018 Common Ground Tour.', 
        country: 'Sweden', 
        events: [
            { date: '2013-03-01', venue: 'Münchenbryggeriet', type: 'Other', isSongkick: true },
            { date: '2015-01-24', venue: 'Münchenbryggeriet', type: 'Tour' },
            { date: '2016-12-15', venue: 'Nobelberget', type: 'Tour' },
            { date: '2018-10-22', venue: 'Berns', type: 'Tour' },
            { date: '2025-11-22', venue: 'Fållan', type: 'Tour' },
        ] 
    },
    { 
        id: 29, 
        name: 'Helsinki', 
        position: [60.1699, 24.9384], 
        fact: 'A Nordic stop for the tours.', 
        country: 'Finland', 
        events: [
            { date: '2010-11-12', venue: 'Fredan Tivoli', type: 'Other' },
            { date: '2012-03-02', venue: 'Circus', type: 'Other', isSongkick: true },
            { date: '2015-01-17', venue: 'Circus', type: 'Other' },
            { date: '2016-12-16', venue: 'Circus', type: 'Tour' },
        ] 
    },
    { 
        id: 30, 
        name: 'Copenhagen', 
        position: [55.6761, 12.5683], 
        fact: 'A Danish stop on the 2015 "We Are All We Need" Tour, the 2016 European Tour, and the 2018 Common Ground Tour.', 
        country: 'Denmark', 
        events: [
            { date: '2015-01-22', venue: 'Vega', type: 'Tour' },
            { date: '2016-12-17', venue: 'Vega', type: 'Tour' },
            { date: '2018-10-25', venue: 'Den Grå Hal', type: 'Tour' },
            { date: '2025-11-20', venue: 'Progon', type: 'Tour' },
        ] 
    },
    { 
        id: 31, 
        name: 'Oslo', 
        position: [59.9139, 10.7522], 
        fact: 'Host to the 2015 "We Are All We Need" Tour, the 2016 European Tour finale, and a stop on the 2018 Common Ground Tour at Sentrum Scene.', 
        country: 'Norway', 
        events: [
            { date: '2013-02-28', venue: 'Sentrum Scene', type: 'Other', isSongkick: true },
            { date: '2015-01-23', venue: 'Rockefeller', type: 'Tour' },
            { date: '2016-12-18', venue: 'Sentrum Scene', type: 'Tour' },
            { date: '2018-10-24', venue: 'Sentrum Scene', type: 'Tour' },
        ] 
    },
    { 
        id: 32, 
        name: 'Antwerp', 
        position: [51.2194, 4.4025], 
        fact: 'A stop on the 2015 "We Are All We Need" European Tour, playing at Trix, which was revisited during the 2018 Common Ground Tour.', 
        country: 'Belgium', 
        events: [
            { date: '2015-01-29', venue: 'Trix', type: 'Tour' },
            { date: '2018-11-06', venue: 'Trix', type: 'Tour' },
        ] 
    },
    { 
        id: 33, 
        name: 'Prague', 
        position: [50.0755, 14.4378], 
        fact: 'The capital of the Czech Republic, host of the ABGT350 milestone at O2 Arena, and home to Transmission Festival.', 
        country: 'Czech Republic', 
        events: [
            { date: '2007-11-02', venue: 'Transmission (O2 Arena)', type: 'Other' },
            { date: '2014-10-25', venue: 'Transmission (O2 Arena)', type: 'Other', isResidentAdvisor: true },
            { date: '2018-10-27', venue: 'Transmission (O2 Arena)', type: 'Tour' },
            { date: '2019-09-28', venue: 'O2 Arena (ABGT350)', type: 'Milestone' },
        ] 
    },
    { 
        id: 34, 
        name: 'Bristol', 
        position: [51.4545, -2.5879], 
        fact: 'A stop on the UK leg of the 2018 Common Ground Tour at O2 Academy.', 
        country: 'United Kingdom', 
        events: [
            { date: '2018-11-02', venue: 'O2 Academy Bristol', type: 'Tour' },
            { date: '2026-10-30', venue: 'The Prospect Building', type: 'Other'},
        ] 
    },
    { 
        id: 35, 
        name: 'Newcastle',
        position: [54.9783, -1.6178], 
        fact: 'Visited in November 2018 for the Common Ground Tour at Digital.', 
        country: 'United Kingdom', 
        events: [
            { date: '2010-04-09', venue: 'Digital', type: 'Other', isSongkick: true },
            { date: '2011-03-04', venue: 'Digital', type: 'Other', isSongkick: true },
            { date: '2014-12-19', venue: 'Sage Gateshead (Northern Lights Winteredition)', type: 'Other', isResidentAdvisor: true },
            { date: '2018-11-17', venue: 'Digital', type: 'Tour' },
        ] 
    },
    { 
        id: 36, 
        name: 'Lausanne', 
        position: [46.5197, 6.6323], 
        fact: 'A stop in Switzerland for the 2025 Tour at D! Club.', 
        country: 'Switzerland', 
        events: [
            { date: '2025-11-08', venue: 'D! Club', type: 'Tour' },
        ] 
    },
    { 
        id: 37, 
        name: 'Berlin', 
        position: [52.5200, 13.4050], 
        fact: 'The German capital hosts the 2025 Tour at Ritter Butzke.', 
        country: 'Germany', 
        events: [
            { date: '2025-11-21', venue: 'Ritter Butzke', type: 'Tour' },
        ] 
    },
    { 
        id: 38, 
        name: 'Budapest', 
        position: [47.4979, 19.0402], 
        fact: 'The capital of Hungary is home to the infamous Sziget Festival.', 
        country: 'Hungary', 
        events: [
            { date: '2010-10-16', venue: 'T-Mobile Bónusz Electronic Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-08-10', venue: 'Sziget Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2025-11-29', venue: 'Obuda Bay', type: 'Tour' },
        ] 
    },
    { 
        id: 39, 
        name: 'Edinburgh', 
        position: [55.9533, -3.1883], 
        fact: 'The Scottish capital hosts the 2025 Tour at the Corn Exchange.', 
        country: 'United Kingdom', 
        events: [
            { date: '2009-08-15', venue: 'EH1 Festival', type: 'Other', isSongkick: true },
            { date: '2019-09-14', venue: 'EH1 Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2025-12-07', venue: 'Edinburgh Corn Exchange', type: 'Tour' },
        ] 
    },
    { 
        id: 40, 
        name: 'Gdansk', 
        position: [54.3520, 18.6464], 
        fact: 'A Polish stop for the boys.', 
        country: 'Poland', 
        events: [
            { date: '2010-10-15', venue: 'Stocznia Gdanska', type: 'Other', isResidentAdvisor: true },
            { date: '2025-12-13', venue: 'B90', type: 'Tour' },
        ] 
    },
    { 
        id: 41, 
        name: 'Buenos Aires', 
        position: [-34.6037, -58.3816], 
        fact: 'South America gets a two-night visit in 2026 at Parque de la Ciudad.', 
        country: 'Argentina', 
        events: [
            { date: '2007-09-22', venue: 'Paradise Garage', type: 'Other', isResidentAdvisor: true  },
            { date: '2008-06-07', venue: 'Versus Sessions Festival', type: 'Other', isResidentAdvisor: true  },
            { date: '2011-11-12', venue: 'Creamfields Buenos Aires', type: 'Other', isResidentAdvisor: true  },
            { date: '2019-02-09', venue: 'Mandarine Park', type: 'Other' },
            { date: '2026-02-14', venue: 'Parque de la Ciudad', type: 'Other' },
            { date: '2026-02-15', venue: 'Parque de la Ciudad', type: 'Other' },
        ] 
    },
    { 
        id: 42, 
        name: 'Johannesburg', 
        position: [-26.2041, 28.0473], 
        fact: 'The River Cabin is the setting for the first African stop in 2026.', 
        country: 'South Africa', 
        events: [
            { date: '2026-04-03', venue: 'The River Cabin', type: 'Tour' },
        ] 
    },
    { 
        id: 43, 
        name: 'Cape Town', 
        position: [-33.9249, 18.4241], 
        fact: 'A second South African stop for the 2026 Tour at The Ostrich.', 
        country: 'South Africa', 
        events: [
            { date: '2010-11-19', venue: 'Bellville Velodrome', type: 'Other', isSongkick: true },
            { date: '2026-04-04', venue: 'The Ostrich', type: 'Tour' },
        ] 
    },
    { 
        id: 44, 
        name: 'Beirut', 
        position: [33.8938, 35.5018], 
        fact: 'Host of the major TATW400 milestone event at the Forum de Beyrouth in 2011.', 
        country: 'Lebanon', 
        events: [
            { date: '2008-04-04', venue: 'Forum de Beyrouth', type: 'Other', isResidentAdvisor: true },
            { date: '2010-09-11', venue: 'Forum de Beyrouth', type: 'Other', isResidentAdvisor: true },
            { date: '2011-11-26', venue: 'Forum de Beyrouth (TATW400)', type: 'Milestone' },
        ] 
    },
    { 
        id: 45, 
        name: 'Moscow', 
        position: [55.7558, 37.6173], 
        fact: 'Host to the TATW300 milestone; following the Beirut event, held at Forum Hall.', 
        country: 'Russia', 
        events: [
            { date: '2009-12-12', venue: 'Forum Hall (TATW300)', type: 'Milestone' },
            { date: '2011-12-17', venue: 'Expocentre', type: 'Other', isSongkick: true },
            { date: '2013-02-23', venue: 'Stadium Live Club', type: 'Other', isSongkick: true },
            { date: '2014-04-12', venue: 'Space Moscow', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 46, 
        name: 'Bangalore', 
        position: [12.9716, 77.5946], 
        fact: 'The Indian city that hosted the final Trance Around The World milestone TATW450 at the Jayamahal Palace.', 
        country: 'India', 
        events: [
            { date: '2010-09-19', venue: 'Fuga', type: 'Other', isResidentAdvisor: true },
            { date: '2012-11-10', venue: 'Jayamahal Palace (TATW450)', type: 'Milestone' },
        ] 
    },
    { 
        id: 47, 
        name: 'New York, NY', 
        position: [40.7128, -74.0060], 
        fact: 'The city that hosted the monumental ABGT100 milestone at Madison Square Garden (MSG) in 2014.', 
        country: 'United States', 
        events: [
            { date: '2007-06-01', venue: 'Pacha NYC', type: 'Other', isResidentAdvisor: true },
            { date: '2008-05-02', venue: 'Pacha NYC (Anjunabeats 100)', type: 'Other', isResidentAdvisor: true },
            { date: '2010-09-05', venue: 'Electric Zoo', type: 'Other', isResidentAdvisor: true },
            { date: '2011-04-23', venue: 'Best Buy Theater', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-03', venue: 'Electric Zoo Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2012-09-01', venue: 'Electric Zoo Festival', type: 'Other', isSongkick: true },
            { date: '2013-02-16', venue: 'Roseland Ballroom', type: 'Other', isSongkick: true },
            { date: '2014-10-18', venue: 'Madison Square Garden (ABGT100)', type: 'Milestone' },
            { date: '2015-09-04', venue: 'Electric Zoo: Transformed', type: 'Other', isResidentAdvisor: true },
            { date: '2016-05-20', venue: 'Beacon Theatre (Acoustic)', type: 'Acoustic' },
            { date: '2016-05-21', venue: 'Beacon Theatre (Acoustic)', type: 'Acoustic' },
            { date: '2016-05-22', venue: 'Beacon Theatre (Acoustic)', type: 'Acoustic' },
            { date: '2019-08-31', venue: 'Electric Zoo: Evolved', type: 'Other', isResidentAdvisor: true },
            { date: '2016-10-28', venue: 'Pier 94 (Above & Beyond Halloween)', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 48, 
        name: 'George, WA', 
        position: [47.0957, -119.9912], 
        fact: 'The breathtaking setting for the two-day ABGT250 celebration at The Gorge Amphitheatre in 2017.', 
        country: 'United States', 
        events: [
            { date: '2015-06-23', venue: 'The Gorge Amphitheatre (Paradiso Festival)', type: 'Other', isResidentAdvisor: true },
            { date: '2017-09-16', venue: 'The Gorge Amphitheatre (ABGT250)', type: 'Milestone' },
            { date: '2026-09-12', venue: 'The Gorge Amphitheatre (ABGT700)', type: 'Milestone' },
        ] 
    },
    { 
        id: 49, 
        name: 'Hong Kong', 
        position: [22.3193, 114.1694], 
        fact: 'The city that hosted ABGT300 at AsiaWorld-Expo in 2018, marking a significant Asia milestone.', 
        country: 'China', 
        events: [
            { date: '2010-09-30', venue: 'AsiaWorld-Expo', type: 'Other', isResidentAdvisor: true },
            { date: '2011-10-19', venue: 'Hyde', type: 'Other', isResidentAdvisor: true },
            { date: '2018-09-29', venue: 'AsiaWorld-Expo (ABGT300)', type: 'Milestone' },
        ] 
    },
    { 
        id: 50, 
        name: 'Mexico City', 
        position: [19.4326, -99.1332], 
        fact: 'The host city for the two-day ABGT600 milestone in 2024.', 
        country: 'Mexico', 
        events: [
            { date: '2010-12-11', venue: 'Hipódromo de las Américas', type: 'Other', isResidentAdvisor: true },
            { date: '2012-03-16', venue: 'Centro De Espectáculos Premier', type: 'Other', isSongkick: true },
            { date: '2012-11-03', venue: 'Nevada Festival 2012', type: 'Other', isSongkick: true },
            { date: '2014-05-03', venue: 'Electric Zoo Mexico City', type: 'Other', isResidentAdvisor: true },
            { date: '2024-10-19', venue: 'Hipódromo de las Américas (ABGT600)', type: 'Milestone' },
        ] 
    },
    { 
        id: 51, 
        name: 'Cartagena', 
        position: [10.3910, -75.4794], 
        fact: 'Colombia\'s Cartagena hosted Above & Beyond first in 2007.',
        country: 'Colombia', 
        events: [
            { date: '2007-01-02', venue: 'Summer Dance Festival', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 52, 
        name: 'Bucharest', 
        position: [44.4268, 26.1025],
        fact: 'Romania\'s capital city hosted Above & Beyond first in 2007.',
        country: 'Romania', 
        events: [
            { date: '2007-03-31', venue: 'World Trade Plaza', type: 'Other', isResidentAdvisor: true },
            { date: '2010-03-31', venue: 'World Trade Plaza', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 53, 
        name: 'Constanta', 
        position: [44.1598, 28.6348],
        fact: 'Romania\'s Constanta hosted Above & Beyond first in 2007.',
        country: 'Romania', 
        events: [
            { date: '2007-04-29', venue: 'Club Two (Anjunabeats Labelnight)', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 54, 
        name: 'Bratislava', 
        position: [48.1486, 17.1077],
        fact: 'Slovakia\'s capital city hosted Above & Beyond first in 2007.',
        country: 'Slovakia', 
        events: [
            { date: '2007-06-22', venue: 'Dopler', type: 'Other', isResidentAdvisor: true },
            { date: '2016-06-24', venue: 'Zlate Piesky (Neon Festival)', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 55, 
        name: 'Frankfurt', 
        position: [50.1109, 8.6821],
        fact: 'Germany\'s Frankfurt hosted Above & Beyond first in 2007.',
        country: 'Germany',
        events: [
            { date: '2007-08-03', venue: 'Nature One', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 56, 
        name: 'Harjumaa', 
        position: [59.4370, 24.7536],
        fact: 'Estonia\'s Harjumaa hosted Above & Beyond first in 2007.',
        country: 'Estonia',
        events: [
            { date: '2007-08-10', venue: 'Take Off Festival', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 57, 
        name: 'Antrim', 
        position: [54.6596, -6.2146],
        fact: 'Northern Ireland\'s Antrim hosted Above & Beyond first in 2007.',
        country: 'United Kingdom (Northern Ireland)',
        events: [
            { date: '2007-09-08', venue: 'Planet Love Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2010-09-10', venue: 'Planet Love Festival', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 58, 
        name: 'Osijek', 
        position: [45.5511, 18.6939],
        fact: 'Croatia\'s Osijek hosted Above & Beyond first in 2007.',
        country: 'Croatia',
        events: [
            { date: '2007-09-28', venue: 'Runway Festival', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 59, 
        name: 'Birmingham', 
        position: [52.4862, -1.8904],
        fact: 'Godskitchen\'s spiritual second home.',
        country: 'United Kingdom',
        events: [
            { date: '2007-10-27', venue: 'Godskitchen Halloween Special', type: 'Other', isResidentAdvisor: true },
            { date: '2008-03-22', venue: 'Godskitchen Easter Special', type: 'Other', isResidentAdvisor: true },
            { date: '2008-09-27', venue: 'Godskitchen\'s Birthday', type: 'Other', isResidentAdvisor: true },
            { date: '2010-01-30', venue: 'Godskitchen', type: 'Other', isResidentAdvisor: true },
            { date: '2010-11-27', venue: 'Godskitchen pres. Anjunabeats', type: 'Other', isResidentAdvisor: true },
            { date: '2012-04-12', venue: 'O2 Institute Birmingham', type: 'Other', isSongkick: true },
            { date: '2015-11-14', venue: 'The Rainbow Venues', type: 'Other' },
            { date: '2026-10-24', venue: 'GASWRX', type: 'Other'},
        ] 
    },
    { 
        id: 60, 
        name: 'Goa', 
        position: [15.2993, 74.1240],
        fact: 'Where Anjuna was born - on the beaches of Goa.',
        country: 'India',
        events: [
            { date: '2007-12-28', venue: 'Smirnoff Sunburn Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-12-27', venue: 'Sunburn Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2014-12-26', venue: 'VH1 Supersonic', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 61, 
        name: 'Singapore', 
        position: [1.364917, 103.822872],
        fact: 'Home to the renowned Zouk club.',
        country: 'Singapore',
        events: [
            { date: '2008-02-09', venue: 'Zouk', type: 'Other', isResidentAdvisor: true },
            { date: '2008-12-13', venue: 'ZoukOut 2008', type: 'Other', isResidentAdvisor: true },
            { date: '2010-09-23', venue: 'Avalon at Large!', type: 'Other', isResidentAdvisor: true },
            { date: '2014-12-12', venue: 'ZoukOut 2014', type: 'Other' , isResidentAdvisor: true },
        ] 
    },
    { 
        id: 62, 
        name: 'Vilnius', 
        position: [54.689383, 25.270894],
        fact: 'Lithuania\'s capital hosted Above & Beyond first in 2008.',
        country: 'Lithuania',
        events: [
            { date: '2008-03-14', venue: 'Pacha Vilnius', type: 'Other', isResidentAdvisor: true },
            { date: '2008-03-15', venue: 'Club Exit', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 63, 
        name: 'Columbus, OH', 
        position: [39.983334, -82.983330],
        country: 'United States',
        events: [
            { date: '2008-04-24', venue: 'Anjunabeats 100 @ Sugar', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 64, 
        name: 'Detroit', 
        position: [42.3314, -83.0458],
        country: 'United States',
        events: [
            { date: '2008-04-25', venue: 'Bleu', type: 'Other', isResidentAdvisor: true },
            { date: '2010-03-21', venue: 'Necto', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 65, 
        name: 'Indio, CA', 
        position: [33.6803, -116.17389],
        fact: 'Home to world famous Coachella festival.',
        country: 'United States',
        events: [
            { date: '2008-04-26', venue: 'Coachella', type: 'Other', isResidentAdvisor: true },
            { date: '2025-04-12', venue: 'Coachella', type: 'Other'},
        ] 
    },
    { 
        id: 66, 
        name: 'Washington, DC', 
        position: [38.8951, -77.0364],
        fact: '',
        country: 'United States',
        events: [
            { date: '2008-05-03', venue: 'Glow', type: 'Other', isResidentAdvisor: true },
            { date: '2010-05-15', venue: 'Fur Nightclub', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 67, 
        name: 'Asuncion', 
        position: [-25.30066, -57.63591],
        fact: '',
        country: 'Paraguay',
        events: [
            { date: '2008-06-06', venue: 'Yacht Golf Club', type: 'Other', isResidentAdvisor: true },
            { date: '2015-07-04', venue: 'Casco Antiguo', type: 'Other' , isResidentAdvisor: true },
        ] 
    },
    { 
        id: 68, 
        name: 'Riga', 
        position: [56.97778, 24.12167],
        fact: '',
        country: 'Latvia',
        events: [
            { date: '2008-07-05', venue: 'Essential Knockout 2008', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 69, 
        name: 'Barcelona', 
        position: [56.97778, 24.12167],
        fact: '',
        country: 'Spain',
        events: [
            { date: '2008-07-11', venue: 'Tiësto In Search Of Sunrise Tour 08', type: 'Other', isResidentAdvisor: true },
            { date: '2010-08-07', venue: 'Barcelona Music Conference @ Montjuic', type: 'Other', isResidentAdvisor: true },
            { date: '2011-10-06', venue: 'OPIUM', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 70, 
        name: 'Chelyabinsk',
        position: [55.164440, 61.436844],
        fact: '',
        country: 'Russia',
        events: [
            { date: '2008-07-18', venue: 'Anjunabeats 100', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 71, 
        name: 'Boom',
        position: [51.092222, 4.385556],
        fact: '',
        country: 'Belgium',
        events: [
            { date: '2008-07-27', venue: 'Tomorrowland', type: 'Other', isResidentAdvisor: true },
            { date: '2011-07-23', venue: 'Tomorrowland', type: 'Other', isResidentAdvisor: true },
            { date: '2019-07-19', venue: 'Tomorrowland', type: 'Other', isResidentAdvisor: true },
            { date: '2019-07-26', venue: 'Tomorrowland', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 72, 
        name: 'Saint Petersburg',
        position: [59.93863, 30.31413],
        fact: '',
        country: 'Russia',
        events: [
            { date: '2008-08-02', venue: 'Global Gathering Russia 2008', type: 'Other', isResidentAdvisor: true },
            { date: '2010-07-17', venue: 'Global Gathering Russia 2010', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 73, 
        name: 'Malta',
        position: [35.891996432, 14.50749797],
        fact: '',
        country: 'Malta',
        events: [
            { date: '2008-08-16', venue: 'Gianpula Main Room', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 74, 
        name: 'San Francisco',
        position: [37.77493, -122.41942],
        country: 'United States',
        events: [
            { date: '2008-10-04', venue: 'Lovefest', type: 'Other', isResidentAdvisor: true },
            { date: '2011-02-13', venue: 'Ruby Skye', type: 'Other', isSongkick: true },
            { date: '2011-10-13', venue: 'Ruby Skye', type: 'Other', isSongkick: true },
            { date: '2012-06-22', venue: 'The Warfield', type: 'Other', isSongkick: true },
            { date: '2012-06-23', venue: 'The Warfield', type: 'Other', isSongkick: true },
            { date: '2014-09-20', venue: 'Beyond Wonderland Bay Area', type: 'Other', isResidentAdvisor: true },
            { date: '2016-05-26', venue: 'Greek Theatre (Acoustic)', type: 'Acoustic' },
            { date: '2016-05-27', venue: 'Greek Theatre (Acoustic)', type: 'Acoustic' },
        ]
    },
    { 
        id: 75, 
        name: 'Perth',
        position: [-31.951329528, 115.855329912],
        fact: '',
        country: 'Australia',
        events: [
            { date: '2008-11-23', venue: 'Global Gathering Perth @ Esplanade Park', type: 'Other', isResidentAdvisor: true },
            { date: '2010-02-28', venue: 'Future Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-09', venue: 'Metro City', type: 'Tour', isResidentAdvisor: true },
            { date: '2012-05-05', venue: 'Creamfields Perth 2012', type: 'Other', isSongkick: true },
            { date: '2013-02-01', venue: 'Metro City', type: 'Other', isSongkick: true },
            { date: '2019-11-16', venue: 'Amon Vision Courtyard Party', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 76, 
        name: 'Brisbane',
        position: [-27.467331464, 153.02333324],
        fact: '',
        country: 'Australia',
        events: [
            { date: '2008-11-29', venue: 'Global Gathering Brisbane', type: 'Other', isResidentAdvisor: true },
            { date: '2010-02-27', venue: 'Future Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-16', venue: 'The Family', type: 'Tour', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 77, 
        name: 'Chicago, IL', 
        position: [41.85003, -87.65005], 
        fact: '', 
        country: 'United States', 
        events: [
            { date: '2010-03-20', venue: 'Spring Awakening', type: 'Other', isResidentAdvisor: true },
            { date: '2012-05-12', venue: 'Congrass Theatre', type: 'Other', isSongkick: true },
            { date: '2016-05-11', venue: 'Chicago Theatre (Acoustic)', type: 'Acoustic' },
            { date: '2016-05-12', venue: 'Chicago Theatre (Acoustic)', type: 'Acoustic' },
            { date: '2016-06-10', venue: 'Spring Awakening Music Festival', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 78, 
        name: 'Ljubljana', 
        position: [46.05139, 14.50611], 
        fact: '', 
        country: 'Slovenia', 
        events: [
            { date: '2010-04-26', venue: 'Dance Republic Revolution', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 79, 
        name: 'Glastonbury', 
        position: [51.155015, -2.585598], 
        fact: '', 
        country: 'United Kingdom', 
        events: [
            { date: '2010-06-27', venue: 'Glastonbury Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2014-06-27', venue: 'Glastonbury Festival', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 80, 
        name: 'Palanga', 
        position: [55.970662784, 21.089666308], 
        fact: '', 
        country: 'Lithuania', 
        events: [
            { date: '2010-07-16', venue: 'Sennheiser pres. Open Air Festival', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 81, 
        name: 'Póvoa de Varzim', 
        position: [41.38344, -8.76364], 
        fact: '', 
        country: 'Portugal', 
        events: [
            { date: '2010-07-31', venue: 'MMC 2010 - Midsummer Music Conference', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 82, 
        name: 'Seattle, WA', 
        position: [47.60621, -122.33207], 
        fact: '', 
        country: 'United States', 
        events: [
            { date: '2010-09-03', venue: 'The Showbox Market', type: 'Other', isResidentAdvisor: true },
            { date: '2013-02-09', venue: 'Foundation Nightclub', type: 'Other', isSongkick: true },
        ]
    },
    { 
        id: 83, 
        name: 'Toronto', 
        position: [43.70011, -79.4163], 
        fact: '', 
        country: 'Canada', 
        events: [
            { date: '2010-09-05', venue: 'Labour Of Love at Guvernment', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-03', venue: 'Labour Of Love at Guvernment', type: 'Other', isResidentAdvisor: true },
            { date: '2016-05-14', venue: 'Massey Hal (Acoustic)', type: 'Acoustic' },
            { date: '2016-05-15', venue: 'Massey Hall (Acoustic)', type: 'Acoustic' },
            { date: '2026-08-01', venue: 'Veld Music Festival', type: 'Other'},
        ]
    },
    { 
        id: 84, 
        name: 'Mumbai', 
        position: [19.07283, 72.88261], 
        fact: '', 
        country: 'India', 
        events: [
            { date: '2010-09-17', venue: 'Blue Frog', type: 'Other', isResidentAdvisor: true },
            { date: '2025-12-21', venue: 'Infinity Bay', type: 'Other' },
        ]
    },
    { 
        id: 85, 
        name: 'New Delhi', 
        position: [28.63576, 77.22445], 
        fact: '', 
        country: 'India', 
        events: [
            { date: '2010-09-18', venue: 'Quantum', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 86, 
        name: 'Manila', 
        position: [14.58, 121.0], 
        fact: '', 
        country: 'Philippines', 
        events: [
            { date: '2010-10-01', venue: 'WTC Hall', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 86, 
        name: 'Sofia', 
        position: [42.69751, 23.32415], 
        fact: '', 
        country: 'Bulgaria', 
        events: [
            { date: '2010-10-09', venue: 'Yalta Club', type: 'Other', isResidentAdvisor: true },
        ]
    },
    { 
        id: 87, 
        name: 'Milan', 
        position: [45.46427, 9.18951], 
        fact: '', 
        country: 'Italy', 
        events: [
            { date: '2010-10-22', venue: 'Amnesia', type: 'Other', isResidentAdvisor: true },
            { date: '2013-06-02', venue: 'Magazzini Generali', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 88, 
        name: 'São Paulo', 
        position: [-23.5475, -46.63611], 
        fact: '', 
        country: 'Brazil', 
        events: [
            { date: '2010-04-17', venue: 'Skol Sensation 2010', type: 'Other', isSongkick: true },
            { date: '2010-11-06', venue: 'Ultra Music Festival', type: 'Other', isResidentAdvisor: true },
            { date: '2015-12-04', venue: 'EDC Brasil 2015', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 89, 
        name: 'Nicosia', 
        position: [35.17531, 33.3642], 
        fact: '', 
        country: 'Cyprus', 
        events: [
            { date: '2010-12-17', venue: 'The Pavillion Hall', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 90, 
        name: 'Florianopolis', 
        position: [-27.5969, -48.5495], 
        fact: 'Host of the Creamfields Brasil festival in 2011.', 
        country: 'Brazil', 
        events: [
            { date: '2011-01-22', venue: 'Creamfields Brasil', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 91, 
        name: 'San Diego, CA', 
        position: [32.7157, -117.1611], 
        fact: 'A frequent stop for West Coast tours.', 
        country: 'United States', 
        events: [
            { date: '2011-02-17', venue: 'Fluxx', type: 'Other', isResidentAdvisor: true },
            { date: '2012-01-18', venue: 'Fluxx', type: 'Other', isSongkick: true },
            { date: '2012-01-19', venue: 'Fluxx', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 92, 
        name: 'Eilat', 
        position: [29.5577, 34.9519], 
        fact: 'Israel\'s southernmost city and a popular Red Sea resort.', 
        country: 'Israel', 
        events: [
            { date: '2011-03-12', venue: 'Blu4dance Day Party', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 93, 
        name: 'Den Bosch', 
        position: [51.6978, 5.3037], 
        fact: 'The site of the massive A State of Trance 500 event in 2011.', 
        country: 'Netherlands', 
        events: [
            { date: '2011-04-09', venue: 'A State of Trance 500 @ Brabanthallen', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 94, 
        name: 'Madrid', 
        position: [40.4168, -3.7038], 
        fact: 'The Spanish capital, hosting major electronic music events like Klubbers Day.', 
        country: 'Spain', 
        events: [
            { date: '2011-04-14', venue: 'Klubbers Day @ Madrid Arena', type: 'Other', isResidentAdvisor: true },
            { date: '2015-07-10', venue: 'A Summer Story @ Ciudad Del Rock', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 95, 
        name: 'Las Vegas', 
        position: [36.1699, -115.1398], 
        fact: 'A major US nightlife destination, with multiple appearances at venues like Marquee.', 
        country: 'United States', 
        events: [
            { date: '2011-02-19', venue: 'Marquee', type: 'Other', isResidentAdvisor: true },
            { date: '2011-03-26', venue: 'Marquee', type: 'Other', isResidentAdvisor: true },
            { date: '2011-05-15', venue: 'Tao', type: 'Other', isResidentAdvisor: true },
            { date: '2011-06-26', venue: 'Tao', type: 'Other', isResidentAdvisor: true },
            { date: '2011-09-01', venue: 'Wet Republic', type: 'Other', isResidentAdvisor: true },
            { date: '2012-05-20', venue: 'Marquee', type: 'Other', isSongkick: true },
            { date: '2012-06-08', venue: 'Electric Daisy Carnival', type: 'Other', isSongkick: true },
            { date: '2012-09-03', venue: 'Marquee', type: 'Other', isSongkick: true },
            { date: '2013-05-08', venue: 'Wynn Las Vegas', type: 'Other', isSongkick: true },
            { date: '2013-05-26', venue: 'Wynn Las Vegas', type: 'Other', isSongkick: true },
            { date: '2013-06-23', venue: 'Wynn Las Vegas', type: 'Other', isSongkick: true },
            { date: '2013-06-26', venue: 'Wynn Las Vegas', type: 'Other', isSongkick: true },
            { date: '2014-06-20', venue: 'EDC Las Vegas', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 96,
        name: 'Boston, MA',
        position: [42.3601, -71.0589],
        fact: 'The capital of Massachusetts, known for its historic role and vibrant music culture.', 
        country: 'United States',
        events: [
            { date: '2011-04-21', venue: 'Royale', type: 'Other', isResidentAdvisor: true },
            { date: '2012-01-24', venue: 'Royale', type: 'Other', isSongkick: true },
            { date: '2013-05-20', venue: 'Royale', type: 'Other', isSongkick: true },
            { date: '2013-05-21', venue: 'Royale', type: 'Other', isSongkick: true },
            { date: '2013-05-22', venue: 'Royale', type: 'Other', isSongkick: true },
            { date: '2016-05-17', venue: 'The Wang', type: 'Acoustic' },
            { date: '2026-07-31', venue: 'Big Night Live', type: 'Other'},
        ] 
    },
    { 
        id: 97, 
        name: 'Austin', 
        position: [30.2672, -97.7431], 
        fact: 'The "Live Music Capital of the World," home to major festivals like SXSW.', 
        country: 'United States', 
        events: [
            { date: '2011-02-11', venue: 'Republic Live', type: 'Other', isSongkick: true },
            { date: '2011-04-29', venue: 'Nocturnal Festival', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 98, 
        name: 'Montreal', 
        position: [45.5017, -73.5673], 
        fact: 'A major cultural hub in Quebec, often hosting large electronic music shows and festivals like ÎLESONIQ.', 
        country: 'Canada', 
        events: [
            { date: '2011-04-24', venue: 'Palais Des Congrès de Montréal', type: 'Other', isResidentAdvisor: true },
            { date: '2019-01-25', venue: 'Igloofest', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 99, 
        name: 'Mykonos', 
        position: [37.4445, 25.3254], 
        fact: 'A popular Greek island in the Cyclades, famous for its intense nightlife and traditional Cycladic architecture.', 
        country: 'Greece', 
        events: [
            { date: '2011-07-16', venue: 'Cavo Paradiso', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 100, 
        name: 'Kołobrzeg', 
        position: [54.1756, 15.5834], 
        fact: 'A port and spa city on the Baltic Sea coast of Poland, and home to the major electronic music event, Sunrise Festival.', 
        country: 'Poland', 
        events: [
            { date: '2011-07-22', venue: 'Sunrise Festival', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 101, 
        name: 'Mamaia', 
        position: [44.2464, 28.6228], 
        fact: 'Romania\'s most popular seaside resort, located on a narrow strip of land between the Black Sea and Lake Siutghiol, near the city of Constanța.', 
        country: 'Romania', 
        events: [
            { date: '2011-08-05', venue: 'Hanul Piratilor Beach', type: 'Other', isResidentAdvisor: false },
        ] 
    },
    { 
        id: 102, 
        name: 'Mallorca', 
        position: [39.5694, 2.7094], 
        fact: 'The largest of the Balearic Islands, famous for its beaches and as the home of the world-famous superclub, BCM Planet Dance, in the Magaluf area.', 
        country: 'Spain', 
        events: [
            { date: '2011-08-17', venue: 'BCM Planet Dance (Cream Mallorca)', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 103, 
        name: 'Portrush', 
        position: [55.2047, -6.6522], 
        fact: 'A popular seaside resort in Northern Ireland, renowned in the dance music scene as the home of the iconic trance superclub Lush.', 
        country: 'United Kingdom (Northern Ireland)', 
        events: [
            { date: '2011-10-01', venue: 'Lush', type: 'Other', isResidentAdvisor: true },
            { date: '2013-04-06', venue: 'Lush', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 104, 
        name: 'Houston, TX', 
        position: [29.7604, -95.3698], 
        fact: 'The most populous city in Texas, known for its vibrant energy sector and significant role in the US space program ("Houston, we have a problem").', 
        country: 'United States', 
        events: [
            { date: '2011-10-14', venue: 'Stereo Live', type: 'Other', isResidentAdvisor: true },
            { date: '2012-09-22', venue: 'Stereo Live', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 105, 
        name: 'Tokyo', 
        position: [35.6895, 139.6917], 
        fact: 'The group’s relationship with the city is significant, as Paavo Siljamäki met his wife while remixing Japanese pop star Ayumi Hamasaki.', 
        country: 'Japan', 
        events: [
            { date: '2011-10-22', venue: 'AgeHa', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 106, 
        name: 'Morrison, CO', 
        position: [39.6548, -105.2057], 
        fact: "Home to the legendary Red Rocks Amphitheatre, a venue so iconic to the group that they named an instrumental track on their 'Common Ground' album after it.", 
        country: 'United States', 
        events: [
            { date: '2012-07-21', venue: 'Red Rocks Amphitheatre', type: 'Other', isSongkick: true },
            { date: '2019-09-20', venue: 'Red Rocks Amphitheatre', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 107, 
        name: 'Atlanta, GA', 
        position: [33.7490, -84.3880], 
        fact: 'A frequent stop on their US tours.', 
        country: 'United States',
        events: [
            { date: '2011-06-03', venue: 'Tabernacle', type: 'Other', isSongkick: true },
            { date: '2012-06-01', venue: 'Opera', type: 'Other', isSongkick: true },
            { date: '2019-12-29', venue: 'Believe Music Hall', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 108, 
        name: 'Abu Dhabi', 
        position: [24.4539, 54.3773], 
        fact: 'Host of Creamfields UAE 2010, marking the group\'s first performance in the Middle East.', 
        country: 'United Arab Emirates',
        events: [
            { date: '2010-12-09', venue: 'Creamfields UAE 2010', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 109, 
        name: 'Albuquerque, CO', 
        position: [34.0522, -118.2437], 
        country: 'United States',
        events: [
            { date: '2011-02-18', venue: 'Sunshine Theater', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 110, 
        name: 'Edmonton', 
        position: [53.5461, -113.4938],
        country: 'Canada',
        events: [
            { date: '2011-02-20', venue: 'Edmonton Convention Centre', type: 'Other', isSongkick: true },
            { date: '2012-05-25', venue: 'Edmonton Events Centre', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 111, 
        name: 'San Antonio, TX', 
        position: [29.4241, -98.4936],
        country: 'United States',
        events: [
            { date: '2011-02-25', venue: 'Club Rio', type: 'Tour', isSongkick: true },
        ] 
    },
    { 
        id: 112, 
        name: 'St Louis, MO', 
        position: [38.6270, -90.1994],
        country: 'United States',
        events: [
            { date: '2011-04-22', venue: 'Europe Nightclub', type: 'Other', isSongkick: true },
            { date: '2012-06-09', venue: 'Pulse Music Festival', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 113, 
        name: 'Orlando, FL', 
        position: [28.5383, -81.3792],
        country: 'United States',
        events: [
            { date: '2011-04-28', venue: 'Roxy', type: 'Tour', isSongkick: true },
            { date: '2016-11-04', venue: 'EDC Orlando', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 114, 
        name: 'Tampa, FL', 
        position: [27.9506, -82.4572],
        country: 'United States',
        events: [
            { date: '2011-04-30', venue: 'The Amphitheatre', type: 'Tour', isSongkick: true },
            { date: '2012-05-31', venue: 'The Amphitheatre', type: 'Tour', isSongkick: true },
        ] 
    },
    { 
        id: 114, 
        name: 'New Orleans, LA', 
        position: [29.9511, -90.0715],
        country: 'United States',
        events: [
            { date: '2011-05-01', venue: 'Ampersand', type: 'Tour', isSongkick: true },
        ] 
    },
    { 
        id: 115, 
        name: 'Tucson, AZ', 
        position: [32.2226, -110.9747],
        country: 'United States',
        events: [
            { date: '2011-05-18', venue: 'Rialto Theatre', type: 'Tour', isSongkick: true },
        ] 
    },
    { 
        id: 116, 
        name: 'Denver, CO', 
        position: [39.7392, -104.9903],
        country: 'United States',
        events: [
            { date: '2011-05-19', venue: 'Beta', type: 'Tour', isSongkick: true },
            { date: '2013-03-21', venue: 'Beta', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 117, 
        name: 'Dallas, TX', 
        position: [32.7767, -96.7970],
        country: 'United States',
        events: [
            { date: '2011-09-04', venue: 'Zouk', type: 'Other', isSongkick: true },
            { date: '2012-09-20', venue: 'Lizard Lounge', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 118, 
        name: 'Kuala Lumpur', 
        position: [3.1390, 101.6869],
        country: 'Malaysia',
        events: [
            { date: '2011-10-26', venue: 'KL Live', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 119, 
        name: 'Seoul', 
        position: [37.5665, 126.9780],
        country: 'South Korea',
        events: [
            { date: '2012-01-14', venue: 'Seoul Electronic Music Festival', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 120, 
        name: 'Baltimore, MD', 
        position: [39.2904, -76.6122],
        country: 'United States',
        events: [
            { date: '2012-02-11', venue: 'Baltimore Soundstage', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 121, 
        name: 'Santiago', 
        position: [-33.4489, -70.6693],
        country: 'Chile',
        events: [
            { date: '2012-04-01', venue: 'Lollapalooza 2012', type: 'Other', isSongkick: true },
            { date: '2015-07-03', venue: 'Ciudad Empresarial', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 122, 
        name: 'Natal', 
        position: [-5.7945, -35.2110],
        country: 'Brazil',
        events: [
            { date: '2012-03-31', venue: 'Praia Devassa Beach Club', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 123, 
        name: 'Buffalo, NY', 
        position: [42.8864, -78.8784],
        country: 'United States',
        events: [
            { date: '2012-05-11', venue: 'Town Ballroom', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 123, 
        name: 'Charlotte, NC', 
        position: [35.2271, -80.8431],
        country: 'United States',
        events: [
            { date: '2012-06-02', venue: 'Phoenix', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 124, 
        name: 'Odessa', 
        position: [46.4825, 30.7233],
        country: 'Ukraine',
        events: [
            { date: '2012-06-30', venue: 'Summer Sound', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 125, 
        name: 'Kansas City, MO', 
        position: [39.0997, -94.5786],
        country: 'United States',
        events: [
            { date: '2012-07-20', venue: 'Global Dance Festival 2012', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 126, 
        name: 'Rimini', 
        position: [44.0678, 12.5695],
        country: 'Italy',
        events: [
            { date: '2012-08-17', venue: 'Cocoricò', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 127, 
        name: 'Dubai', 
        position: [25.2048, 55.2708],  
        country: 'United Arab Emirates',
        events: [
            { date: '2012-11-08', venue: 'Nasimi Beach, Atlantis', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 128, 
        name: 'Anaheim, CA', 
        position: [33.8366, -117.9143],
        country: 'United States',
        events: [
            { date: '2012-12-31', venue: 'White Wonderland', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 128, 
        name: 'Honolulu, HI', 
        position: [21.3069, -157.8583],
        country: 'United States',
        events: [
            { date: '2013-02-08', venue: 'Kaka\'ako Beach Park Amphitheater', type: 'Other', isSongkick: true },
            { date: '2016-05-31', venue: 'Waikiki Shell (Acoustic)', type: 'Acoustic' },
        ] 
    },
    { 
        id: 129, 
        name: 'Vancouver, BC', 
        position: [49.2827, -123.1207],
        country: 'Canada',
        events: [
            { date: '2013-02-10', venue: 'Pacific Coliseum', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 130, 
        name: 'Philadephia, PA', 
        position: [39.9526, -75.1652],
        country: 'United States',
        events: [
            { date: '2013-02-15', venue: 'Soundgarden Hall', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 131, 
        name: 'Mayrhofen', 
        position: [47.1667, 11.8667],
        country: 'Austria',
        events: [
            { date: '2013-03-31', venue: 'Snowbombing 2013', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 132, 
        name: 'Inverness', 
        position: [57.4778, -4.2247],
        country: 'United Kingdom',
        events: [
            { date: '2013-06-08', venue: 'Rockness 2013', type: 'Other', isSongkick: true },
        ] 
    },
    { 
        id: 133, 
        name: 'Perth', 
        position: [56.395462405, -3.438900169],
        country: 'United Kingdom',
        events: [
            { date: '2015-07-10', venue: 'T In The Park', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 134, 
        name: 'Hasselt', 
        position: [51.0056, 5.3387],
        country: 'Belgium',
        events: [
            { date: '2015-08-21', venue: 'Pukkelpop', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    { 
        id: 135, 
        name: 'Split', 
        position: [43.5081, 16.4402],
        country: 'Croatia',
        events: [
            { date: '2016-07-17', venue: 'Ultra Europe 2016 Croatia', type: 'Other', isResidentAdvisor: true },
        ] 
    },
    {
        id: 136,
        name: 'Iceland',
        position: [64.128288, -21.827774],
        country: 'Iceland',
        events: [
            { date: '2026-08-14', venue: 'Iceland Eclipse @ Snæfellsnes Peninsula', type: 'Other'},
        ]
    },
    {
        id: 137,
        name: 'Werchter',
        position: [50.9667, 4.7000],
        country: 'Belgium',
        events: [
            { date: '2017-07-01', venue: 'Rock Werchter', type: 'Other', isSongkick: true},
        ]
    },
];
