// Planet Data
var planets = [
        {
            "name": "Alderaan", 
            "rotation_period": "24", 
            "orbital_period": "364", 
            "diameter": "12500", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grasslands, mountains", 
            "surface_water": "40", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/68/", 
                "https://swapi.co/api/people/81/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T11:35:48.479000Z", 
            "edited": "2014-12-20T20:58:18.420000Z", 
            "url": "https://swapi.co/api/planets/2/"
        }, 
        {
            "name": "Yavin IV", 
            "rotation_period": "24", 
            "orbital_period": "4818", 
            "diameter": "10200", 
            "climate": "temperate, tropical", 
            "gravity": "1 standard", 
            "terrain": "jungle, rainforests", 
            "surface_water": "8", 
            "population": "1000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T11:37:19.144000Z", 
            "edited": "2014-12-20T20:58:18.421000Z", 
            "url": "https://swapi.co/api/planets/3/"
        }, 
        {
            "name": "Hoth", 
            "rotation_period": "23", 
            "orbital_period": "549", 
            "diameter": "7200", 
            "climate": "frozen", 
            "gravity": "1.1 standard", 
            "terrain": "tundra, ice caves, mountain ranges", 
            "surface_water": "100", 
            "population": "unknown", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-10T11:39:13.934000Z", 
            "edited": "2014-12-20T20:58:18.423000Z", 
            "url": "https://swapi.co/api/planets/4/"
        }, 
        {
            "name": "Dagobah", 
            "rotation_period": "23", 
            "orbital_period": "341", 
            "diameter": "8900", 
            "climate": "murky", 
            "gravity": "N/A", 
            "terrain": "swamp, jungles", 
            "surface_water": "8", 
            "population": "unknown", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-10T11:42:22.590000Z", 
            "edited": "2014-12-20T20:58:18.425000Z", 
            "url": "https://swapi.co/api/planets/5/"
        }, 
        {
            "name": "Bespin", 
            "rotation_period": "12", 
            "orbital_period": "5110", 
            "diameter": "118000", 
            "climate": "temperate", 
            "gravity": "1.5 (surface), 1 standard (Cloud City)", 
            "terrain": "gas giant", 
            "surface_water": "0", 
            "population": "6000000", 
            "residents": [
                "https://swapi.co/api/people/26/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-10T11:43:55.240000Z", 
            "edited": "2014-12-20T20:58:18.427000Z", 
            "url": "https://swapi.co/api/planets/6/"
        }, 
        {
            "name": "Endor", 
            "rotation_period": "18", 
            "orbital_period": "402", 
            "diameter": "4900", 
            "climate": "temperate", 
            "gravity": "0.85 standard", 
            "terrain": "forests, mountains, lakes", 
            "surface_water": "8", 
            "population": "30000000", 
            "residents": [
                "https://swapi.co/api/people/30/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-10T11:50:29.349000Z", 
            "edited": "2014-12-20T20:58:18.429000Z", 
            "url": "https://swapi.co/api/planets/7/"
        }, 
        {
            "name": "Naboo", 
            "rotation_period": "26", 
            "orbital_period": "312", 
            "diameter": "12120", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grassy hills, swamps, forests, mountains", 
            "surface_water": "12", 
            "population": "4500000000", 
            "residents": [
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/21/", 
                "https://swapi.co/api/people/36/", 
                "https://swapi.co/api/people/37/", 
                "https://swapi.co/api/people/38/", 
                "https://swapi.co/api/people/39/", 
                "https://swapi.co/api/people/42/", 
                "https://swapi.co/api/people/60/", 
                "https://swapi.co/api/people/61/", 
                "https://swapi.co/api/people/66/", 
                "https://swapi.co/api/people/35/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-10T11:52:31.066000Z", 
            "edited": "2014-12-20T20:58:18.430000Z", 
            "url": "https://swapi.co/api/planets/8/"
        }, 
        {
            "name": "Coruscant", 
            "rotation_period": "24", 
            "orbital_period": "368", 
            "diameter": "12240", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "cityscape, mountains", 
            "surface_water": "unknown", 
            "population": "1000000000000", 
            "residents": [
                "https://swapi.co/api/people/34/", 
                "https://swapi.co/api/people/55/", 
                "https://swapi.co/api/people/74/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-10T11:54:13.921000Z", 
            "edited": "2014-12-20T20:58:18.432000Z", 
            "url": "https://swapi.co/api/planets/9/"
        }, 
        {
            "name": "Kamino", 
            "rotation_period": "27", 
            "orbital_period": "463", 
            "diameter": "19720", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "ocean", 
            "surface_water": "100", 
            "population": "1000000000", 
            "residents": [
                "https://swapi.co/api/people/22/", 
                "https://swapi.co/api/people/72/", 
                "https://swapi.co/api/people/73/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-10T12:45:06.577000Z", 
            "edited": "2014-12-20T20:58:18.434000Z", 
            "url": "https://swapi.co/api/planets/10/"
        }, 
        {
            "name": "Geonosis", 
            "rotation_period": "30", 
            "orbital_period": "256", 
            "diameter": "11370", 
            "climate": "temperate, arid", 
            "gravity": "0.9 standard", 
            "terrain": "rock, desert, mountain, barren", 
            "surface_water": "5", 
            "population": "100000000000", 
            "residents": [
                "https://swapi.co/api/people/63/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-10T12:47:22.350000Z", 
            "edited": "2014-12-20T20:58:18.437000Z", 
            "url": "https://swapi.co/api/planets/11/"
        },
        {
            "name": "Utapau", 
            "rotation_period": "27", 
            "orbital_period": "351", 
            "diameter": "12900", 
            "climate": "temperate, arid, windy", 
            "gravity": "1 standard", 
            "terrain": "scrublands, savanna, canyons, sinkholes", 
            "surface_water": "0.9", 
            "population": "95000000", 
            "residents": [
                "https://swapi.co/api/people/83/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T12:49:01.491000Z", 
            "edited": "2014-12-20T20:58:18.439000Z", 
            "url": "https://swapi.co/api/planets/12/"
        }, 
        {
            "name": "Mustafar", 
            "rotation_period": "36", 
            "orbital_period": "412", 
            "diameter": "4200", 
            "climate": "hot", 
            "gravity": "1 standard", 
            "terrain": "volcanoes, lava rivers, mountains, caves", 
            "surface_water": "0", 
            "population": "20000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T12:50:16.526000Z", 
            "edited": "2014-12-20T20:58:18.440000Z", 
            "url": "https://swapi.co/api/planets/13/"
        }, 
        {
            "name": "Kashyyyk", 
            "rotation_period": "26", 
            "orbital_period": "381", 
            "diameter": "12765", 
            "climate": "tropical", 
            "gravity": "1 standard", 
            "terrain": "jungle, forests, lakes, rivers", 
            "surface_water": "60", 
            "population": "45000000", 
            "residents": [
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/80/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T13:32:00.124000Z", 
            "edited": "2014-12-20T20:58:18.442000Z", 
            "url": "https://swapi.co/api/planets/14/"
        }, 
        {
            "name": "Polis Massa", 
            "rotation_period": "24", 
            "orbital_period": "590", 
            "diameter": "0", 
            "climate": "artificial temperate ", 
            "gravity": "0.56 standard", 
            "terrain": "airless asteroid", 
            "surface_water": "0", 
            "population": "1000000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T13:33:46.405000Z", 
            "edited": "2014-12-20T20:58:18.444000Z", 
            "url": "https://swapi.co/api/planets/15/"
        }, 
        {
            "name": "Mygeeto", 
            "rotation_period": "12", 
            "orbital_period": "167", 
            "diameter": "10088", 
            "climate": "frigid", 
            "gravity": "1 standard", 
            "terrain": "glaciers, mountains, ice canyons", 
            "surface_water": "unknown", 
            "population": "19000000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T13:43:39.139000Z", 
            "edited": "2014-12-20T20:58:18.446000Z", 
            "url": "https://swapi.co/api/planets/16/"
        }, 
        {
            "name": "Felucia", 
            "rotation_period": "34", 
            "orbital_period": "231", 
            "diameter": "9100", 
            "climate": "hot, humid", 
            "gravity": "0.75 standard", 
            "terrain": "fungus forests", 
            "surface_water": "unknown", 
            "population": "8500000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T13:44:50.397000Z", 
            "edited": "2014-12-20T20:58:18.447000Z", 
            "url": "https://swapi.co/api/planets/17/"
        }, 
        {
            "name": "Cato Neimoidia", 
            "rotation_period": "25", 
            "orbital_period": "278", 
            "diameter": "0", 
            "climate": "temperate, moist", 
            "gravity": "1 standard", 
            "terrain": "mountains, fields, forests, rock arches", 
            "surface_water": "unknown", 
            "population": "10000000", 
            "residents": [
                "https://swapi.co/api/people/33/"
            ], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T13:46:28.704000Z", 
            "edited": "2014-12-20T20:58:18.449000Z", 
            "url": "https://swapi.co/api/planets/18/"
        }, 
        {
            "name": "Saleucami", 
            "rotation_period": "26", 
            "orbital_period": "392", 
            "diameter": "14920", 
            "climate": "hot", 
            "gravity": "unknown", 
            "terrain": "caves, desert, mountains, volcanoes", 
            "surface_water": "unknown", 
            "population": "1400000000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/6/"
            ], 
            "created": "2014-12-10T13:47:46.874000Z", 
            "edited": "2014-12-20T20:58:18.450000Z", 
            "url": "https://swapi.co/api/planets/19/"
        }, 
        {
            "name": "Stewjon", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "0", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "grass", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/10/"
            ], 
            "films": [], 
            "created": "2014-12-10T16:16:26.566000Z", 
            "edited": "2014-12-20T20:58:18.452000Z", 
            "url": "https://swapi.co/api/planets/20/"
        }, 
        {
            "name": "Eriadu", 
            "rotation_period": "24", 
            "orbital_period": "360", 
            "diameter": "13490", 
            "climate": "polluted", 
            "gravity": "1 standard", 
            "terrain": "cityscape", 
            "surface_water": "unknown", 
            "population": "22000000000", 
            "residents": [
                "https://swapi.co/api/people/12/"
            ], 
            "films": [], 
            "created": "2014-12-10T16:26:54.384000Z", 
            "edited": "2014-12-20T20:58:18.454000Z", 
            "url": "https://swapi.co/api/planets/21/"
        },
        {
            "name": "Corellia", 
            "rotation_period": "25", 
            "orbital_period": "329", 
            "diameter": "11000", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "plains, urban, hills, forests", 
            "surface_water": "70", 
            "population": "3000000000", 
            "residents": [
                "https://swapi.co/api/people/14/", 
                "https://swapi.co/api/people/18/"
            ], 
            "films": [], 
            "created": "2014-12-10T16:49:12.453000Z", 
            "edited": "2014-12-20T20:58:18.456000Z", 
            "url": "https://swapi.co/api/planets/22/"
        }, 
        {
            "name": "Rodia", 
            "rotation_period": "29", 
            "orbital_period": "305", 
            "diameter": "7549", 
            "climate": "hot", 
            "gravity": "1 standard", 
            "terrain": "jungles, oceans, urban, swamps", 
            "surface_water": "60", 
            "population": "1300000000", 
            "residents": [
                "https://swapi.co/api/people/15/"
            ], 
            "films": [], 
            "created": "2014-12-10T17:03:28.110000Z", 
            "edited": "2014-12-20T20:58:18.458000Z", 
            "url": "https://swapi.co/api/planets/23/"
        }, 
        {
            "name": "Nal Hutta", 
            "rotation_period": "87", 
            "orbital_period": "413", 
            "diameter": "12150", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "urban, oceans, swamps, bogs", 
            "surface_water": "unknown", 
            "population": "7000000000", 
            "residents": [
                "https://swapi.co/api/people/16/"
            ], 
            "films": [], 
            "created": "2014-12-10T17:11:29.452000Z", 
            "edited": "2014-12-20T20:58:18.460000Z", 
            "url": "https://swapi.co/api/planets/24/"
        }, 
        {
            "name": "Dantooine", 
            "rotation_period": "25", 
            "orbital_period": "378", 
            "diameter": "9830", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "oceans, savannas, mountains, grasslands", 
            "surface_water": "unknown", 
            "population": "1000", 
            "residents": [], 
            "films": [], 
            "created": "2014-12-10T17:23:29.896000Z", 
            "edited": "2014-12-20T20:58:18.461000Z", 
            "url": "https://swapi.co/api/planets/25/"
        }, 
        {
            "name": "Bestine IV", 
            "rotation_period": "26", 
            "orbital_period": "680", 
            "diameter": "6400", 
            "climate": "temperate", 
            "gravity": "unknown", 
            "terrain": "rocky islands, oceans", 
            "surface_water": "98", 
            "population": "62000000", 
            "residents": [
                "https://swapi.co/api/people/19/"
            ], 
            "films": [], 
            "created": "2014-12-12T11:16:55.078000Z", 
            "edited": "2014-12-20T20:58:18.463000Z", 
            "url": "https://swapi.co/api/planets/26/"
        }, 
        {
            "name": "Ord Mantell", 
            "rotation_period": "26", 
            "orbital_period": "334", 
            "diameter": "14050", 
            "climate": "temperate", 
            "gravity": "1 standard", 
            "terrain": "plains, seas, mesas", 
            "surface_water": "10", 
            "population": "4000000000", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T12:23:41.661000Z", 
            "edited": "2014-12-20T20:58:18.464000Z", 
            "url": "https://swapi.co/api/planets/27/"
        }, 
        {
            "name": "unknown", 
            "rotation_period": "0", 
            "orbital_period": "0", 
            "diameter": "0", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/20/", 
                "https://swapi.co/api/people/23/", 
                "https://swapi.co/api/people/29/", 
                "https://swapi.co/api/people/32/", 
                "https://swapi.co/api/people/75/", 
                "https://swapi.co/api/people/84/", 
                "https://swapi.co/api/people/85/", 
                "https://swapi.co/api/people/86/", 
                "https://swapi.co/api/people/87/", 
                "https://swapi.co/api/people/88/"
            ], 
            "films": [], 
            "created": "2014-12-15T12:25:59.569000Z", 
            "edited": "2014-12-20T20:58:18.466000Z", 
            "url": "https://swapi.co/api/planets/28/"
        }, 
        {
            "name": "Trandosha", 
            "rotation_period": "25", 
            "orbital_period": "371", 
            "diameter": "0", 
            "climate": "arid", 
            "gravity": "0.62 standard", 
            "terrain": "mountains, seas, grasslands, deserts", 
            "surface_water": "unknown", 
            "population": "42000000", 
            "residents": [
                "https://swapi.co/api/people/24/"
            ], 
            "films": [], 
            "created": "2014-12-15T12:53:47.695000Z", 
            "edited": "2014-12-20T20:58:18.468000Z", 
            "url": "https://swapi.co/api/planets/29/"
        }, 
        {
            "name": "Socorro", 
            "rotation_period": "20", 
            "orbital_period": "326", 
            "diameter": "0", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "deserts, mountains", 
            "surface_water": "unknown", 
            "population": "300000000", 
            "residents": [
                "https://swapi.co/api/people/25/"
            ], 
            "films": [], 
            "created": "2014-12-15T12:56:31.121000Z", 
            "edited": "2014-12-20T20:58:18.469000Z", 
            "url": "https://swapi.co/api/planets/30/"
        }, 
        {
            "name": "Mon Cala", 
            "rotation_period": "21", 
            "orbital_period": "398", 
            "diameter": "11030", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "oceans, reefs, islands", 
            "surface_water": "100", 
            "population": "27000000000", 
            "residents": [
                "https://swapi.co/api/people/27/"
            ], 
            "films": [], 
            "created": "2014-12-18T11:07:01.792000Z", 
            "edited": "2014-12-20T20:58:18.471000Z", 
            "url": "https://swapi.co/api/planets/31/"
        },
        {
            "name": "Chandrila", 
            "rotation_period": "20", 
            "orbital_period": "368", 
            "diameter": "13500", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "plains, forests", 
            "surface_water": "40", 
            "population": "1200000000", 
            "residents": [
                "https://swapi.co/api/people/28/"
            ], 
            "films": [], 
            "created": "2014-12-18T11:11:51.872000Z", 
            "edited": "2014-12-20T20:58:18.472000Z", 
            "url": "https://swapi.co/api/planets/32/"
        }, 
        {
            "name": "Sullust", 
            "rotation_period": "20", 
            "orbital_period": "263", 
            "diameter": "12780", 
            "climate": "superheated", 
            "gravity": "1", 
            "terrain": "mountains, volcanoes, rocky deserts", 
            "surface_water": "5", 
            "population": "18500000000", 
            "residents": [
                "https://swapi.co/api/people/31/"
            ], 
            "films": [], 
            "created": "2014-12-18T11:25:40.243000Z", 
            "edited": "2014-12-20T20:58:18.474000Z", 
            "url": "https://swapi.co/api/planets/33/"
        }, 
        {
            "name": "Toydaria", 
            "rotation_period": "21", 
            "orbital_period": "184", 
            "diameter": "7900", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "swamps, lakes", 
            "surface_water": "unknown", 
            "population": "11000000", 
            "residents": [
                "https://swapi.co/api/people/40/"
            ], 
            "films": [], 
            "created": "2014-12-19T17:47:54.403000Z", 
            "edited": "2014-12-20T20:58:18.476000Z", 
            "url": "https://swapi.co/api/planets/34/"
        }, 
        {
            "name": "Malastare", 
            "rotation_period": "26", 
            "orbital_period": "201", 
            "diameter": "18880", 
            "climate": "arid, temperate, tropical", 
            "gravity": "1.56", 
            "terrain": "swamps, deserts, jungles, mountains", 
            "surface_water": "unknown", 
            "population": "2000000000", 
            "residents": [
                "https://swapi.co/api/people/41/"
            ], 
            "films": [], 
            "created": "2014-12-19T17:52:13.106000Z", 
            "edited": "2014-12-20T20:58:18.478000Z", 
            "url": "https://swapi.co/api/planets/35/"
        }, 
        {
            "name": "Dathomir", 
            "rotation_period": "24", 
            "orbital_period": "491", 
            "diameter": "10480", 
            "climate": "temperate", 
            "gravity": "0.9", 
            "terrain": "forests, deserts, savannas", 
            "surface_water": "unknown", 
            "population": "5200", 
            "residents": [
                "https://swapi.co/api/people/44/"
            ], 
            "films": [], 
            "created": "2014-12-19T18:00:40.142000Z", 
            "edited": "2014-12-20T20:58:18.480000Z", 
            "url": "https://swapi.co/api/planets/36/"
        }, 
        {
            "name": "Ryloth", 
            "rotation_period": "30", 
            "orbital_period": "305", 
            "diameter": "10600", 
            "climate": "temperate, arid, subartic", 
            "gravity": "1", 
            "terrain": "mountains, valleys, deserts, tundra", 
            "surface_water": "5", 
            "population": "1500000000", 
            "residents": [
                "https://swapi.co/api/people/45/", 
                "https://swapi.co/api/people/46/"
            ], 
            "films": [], 
            "created": "2014-12-20T09:46:25.740000Z", 
            "edited": "2014-12-20T20:58:18.481000Z", 
            "url": "https://swapi.co/api/planets/37/"
        }, 
        {
            "name": "Aleen Minor", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/47/"
            ], 
            "films": [], 
            "created": "2014-12-20T09:52:23.452000Z", 
            "edited": "2014-12-20T20:58:18.483000Z", 
            "url": "https://swapi.co/api/planets/38/"
        }, 
        {
            "name": "Vulpter", 
            "rotation_period": "22", 
            "orbital_period": "391", 
            "diameter": "14900", 
            "climate": "temperate, artic", 
            "gravity": "1", 
            "terrain": "urban, barren", 
            "surface_water": "unknown", 
            "population": "421000000", 
            "residents": [
                "https://swapi.co/api/people/48/"
            ], 
            "films": [], 
            "created": "2014-12-20T09:56:58.874000Z", 
            "edited": "2014-12-20T20:58:18.485000Z", 
            "url": "https://swapi.co/api/planets/39/"
        }, 
        {
            "name": "Troiken", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "desert, tundra, rainforests, mountains", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/49/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:01:37.395000Z", 
            "edited": "2014-12-20T20:58:18.487000Z", 
            "url": "https://swapi.co/api/planets/40/"
        }, 
        {
            "name": "Tund", 
            "rotation_period": "48", 
            "orbital_period": "1770", 
            "diameter": "12190", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "barren, ash", 
            "surface_water": "unknown", 
            "population": "0", 
            "residents": [
                "https://swapi.co/api/people/50/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:07:29.578000Z", 
            "edited": "2014-12-20T20:58:18.489000Z", 
            "url": "https://swapi.co/api/planets/41/"
        },
        {
            "name": "Haruun Kal", 
            "rotation_period": "25", 
            "orbital_period": "383", 
            "diameter": "10120", 
            "climate": "temperate", 
            "gravity": "0.98", 
            "terrain": "toxic cloudsea, plateaus, volcanoes", 
            "surface_water": "unknown", 
            "population": "705300", 
            "residents": [
                "https://swapi.co/api/people/51/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:12:28.980000Z", 
            "edited": "2014-12-20T20:58:18.491000Z", 
            "url": "https://swapi.co/api/planets/42/"
        }, 
        {
            "name": "Cerea", 
            "rotation_period": "27", 
            "orbital_period": "386", 
            "diameter": "unknown", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "verdant", 
            "surface_water": "20", 
            "population": "450000000", 
            "residents": [
                "https://swapi.co/api/people/52/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:14:48.178000Z", 
            "edited": "2014-12-20T20:58:18.493000Z", 
            "url": "https://swapi.co/api/planets/43/"
        }, 
        {
            "name": "Glee Anselm", 
            "rotation_period": "33", 
            "orbital_period": "206", 
            "diameter": "15600", 
            "climate": "tropical, temperate", 
            "gravity": "1", 
            "terrain": "lakes, islands, swamps, seas", 
            "surface_water": "80", 
            "population": "500000000", 
            "residents": [
                "https://swapi.co/api/people/53/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:18:26.110000Z", 
            "edited": "2014-12-20T20:58:18.495000Z", 
            "url": "https://swapi.co/api/planets/44/"
        }, 
        {
            "name": "Iridonia", 
            "rotation_period": "29", 
            "orbital_period": "413", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "rocky canyons, acid pools", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/54/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:26:05.788000Z", 
            "edited": "2014-12-20T20:58:18.497000Z", 
            "url": "https://swapi.co/api/planets/45/"
        }, 
        {
            "name": "Tholoth", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [], 
            "films": [], 
            "created": "2014-12-20T10:28:31.117000Z", 
            "edited": "2014-12-20T20:58:18.498000Z", 
            "url": "https://swapi.co/api/planets/46/"
        }, 
        {
            "name": "Iktotch", 
            "rotation_period": "22", 
            "orbital_period": "481", 
            "diameter": "unknown", 
            "climate": "arid, rocky, windy", 
            "gravity": "1", 
            "terrain": "rocky", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/56/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:31:32.413000Z", 
            "edited": "2014-12-20T20:58:18.500000Z", 
            "url": "https://swapi.co/api/planets/47/"
        }, 
        {
            "name": "Quermia", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/57/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:34:08.249000Z", 
            "edited": "2014-12-20T20:58:18.502000Z", 
            "url": "https://swapi.co/api/planets/48/"
        }, 
        {
            "name": "Dorin", 
            "rotation_period": "22", 
            "orbital_period": "409", 
            "diameter": "13400", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/58/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:48:36.141000Z", 
            "edited": "2014-12-20T20:58:18.504000Z", 
            "url": "https://swapi.co/api/planets/49/"
        }, 
        {
            "name": "Champala", 
            "rotation_period": "27", 
            "orbital_period": "318", 
            "diameter": "unknown", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "oceans, rainforests, plateaus", 
            "surface_water": "unknown", 
            "population": "3500000000", 
            "residents": [
                "https://swapi.co/api/people/59/"
            ], 
            "films": [], 
            "created": "2014-12-20T10:52:51.524000Z", 
            "edited": "2014-12-20T20:58:18.506000Z", 
            "url": "https://swapi.co/api/planets/50/"
        }, 
        {
            "name": "Mirial", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "deserts", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/64/", 
                "https://swapi.co/api/people/65/"
            ], 
            "films": [], 
            "created": "2014-12-20T16:44:46.318000Z", 
            "edited": "2014-12-20T20:58:18.508000Z", 
            "url": "https://swapi.co/api/planets/51/"
        },
        {
            "name": "Serenno", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "rainforests, rivers, mountains", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/67/"
            ], 
            "films": [], 
            "created": "2014-12-20T16:52:13.357000Z", 
            "edited": "2014-12-20T20:58:18.510000Z", 
            "url": "https://swapi.co/api/planets/52/"
        }, 
        {
            "name": "Concord Dawn", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "jungles, forests, deserts", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/69/"
            ], 
            "films": [], 
            "created": "2014-12-20T16:54:39.909000Z", 
            "edited": "2014-12-20T20:58:18.512000Z", 
            "url": "https://swapi.co/api/planets/53/"
        }, 
        {
            "name": "Zolan", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/70/"
            ], 
            "films": [], 
            "created": "2014-12-20T16:56:37.250000Z", 
            "edited": "2014-12-20T20:58:18.514000Z", 
            "url": "https://swapi.co/api/planets/54/"
        }, 
        {
            "name": "Ojom", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "frigid", 
            "gravity": "unknown", 
            "terrain": "oceans, glaciers", 
            "surface_water": "100", 
            "population": "500000000", 
            "residents": [
                "https://swapi.co/api/people/71/"
            ], 
            "films": [], 
            "created": "2014-12-20T17:27:41.286000Z", 
            "edited": "2014-12-20T20:58:18.516000Z", 
            "url": "https://swapi.co/api/planets/55/"
        }, 
        {
            "name": "Skako", 
            "rotation_period": "27", 
            "orbital_period": "384", 
            "diameter": "unknown", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "urban, vines", 
            "surface_water": "unknown", 
            "population": "500000000000", 
            "residents": [
                "https://swapi.co/api/people/76/"
            ], 
            "films": [], 
            "created": "2014-12-20T17:50:47.864000Z", 
            "edited": "2014-12-20T20:58:18.517000Z", 
            "url": "https://swapi.co/api/planets/56/"
        }, 
        {
            "name": "Muunilinst", 
            "rotation_period": "28", 
            "orbital_period": "412", 
            "diameter": "13800", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "plains, forests, hills, mountains", 
            "surface_water": "25", 
            "population": "5000000000", 
            "residents": [
                "https://swapi.co/api/people/77/"
            ], 
            "films": [], 
            "created": "2014-12-20T17:57:47.420000Z", 
            "edited": "2014-12-20T20:58:18.519000Z", 
            "url": "https://swapi.co/api/planets/57/"
        }, 
        {
            "name": "Shili", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "temperate", 
            "gravity": "1", 
            "terrain": "cities, savannahs, seas, plains", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/78/"
            ], 
            "films": [], 
            "created": "2014-12-20T18:43:14.049000Z", 
            "edited": "2014-12-20T20:58:18.521000Z", 
            "url": "https://swapi.co/api/planets/58/"
        }, 
        {
            "name": "Kalee", 
            "rotation_period": "23", 
            "orbital_period": "378", 
            "diameter": "13850", 
            "climate": "arid, temperate, tropical", 
            "gravity": "1", 
            "terrain": "rainforests, cliffs, canyons, seas", 
            "surface_water": "unknown", 
            "population": "4000000000", 
            "residents": [
                "https://swapi.co/api/people/79/"
            ], 
            "films": [], 
            "created": "2014-12-20T19:43:51.278000Z", 
            "edited": "2014-12-20T20:58:18.523000Z", 
            "url": "https://swapi.co/api/planets/59/"
        }, 
        {
            "name": "Umbara", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "unknown", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [
                "https://swapi.co/api/people/82/"
            ], 
            "films": [], 
            "created": "2014-12-20T20:18:36.256000Z", 
            "edited": "2014-12-20T20:58:18.525000Z", 
            "url": "https://swapi.co/api/planets/60/"
        }, 
        {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000", 
            "residents": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/4/", 
                "https://swapi.co/api/people/6/", 
                "https://swapi.co/api/people/7/", 
                "https://swapi.co/api/people/8/", 
                "https://swapi.co/api/people/9/", 
                "https://swapi.co/api/people/11/", 
                "https://swapi.co/api/people/43/", 
                "https://swapi.co/api/people/62/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-09T13:50:49.641000Z", 
            "edited": "2014-12-21T20:48:04.175778Z", 
            "url": "https://swapi.co/api/planets/1/"
        },
        {
            "name": "Jakku", 
            "rotation_period": "unknown", 
            "orbital_period": "unknown", 
            "diameter": "unknown", 
            "climate": "unknown", 
            "gravity": "unknown", 
            "terrain": "deserts", 
            "surface_water": "unknown", 
            "population": "unknown", 
            "residents": [], 
            "films": [
                "https://swapi.co/api/films/7/"
            ], 
            "created": "2015-04-17T06:55:57.556495Z", 
            "edited": "2015-04-17T06:55:57.556551Z", 
            "url": "https://swapi.co/api/planets/61/"
        }
]

var actors = [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/"
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.co/api/people/1/"
        }, 
        {
            "name": "C-3PO", 
            "height": "167", 
            "mass": "75", 
            "hair_color": "n/a", 
            "skin_color": "gold", 
            "eye_color": "yellow", 
            "birth_year": "112BBY", 
            "gender": "n/a", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:10:51.357000Z", 
            "edited": "2014-12-20T21:17:50.309000Z", 
            "url": "https://swapi.co/api/people/2/"
        }, 
        {
            "name": "R2-D2", 
            "height": "96", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, blue", 
            "eye_color": "red", 
            "birth_year": "33BBY", 
            "gender": "n/a", 
            "homeworld": "https://swapi.co/api/planets/8/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:11:50.376000Z", 
            "edited": "2014-12-20T21:17:50.311000Z", 
            "url": "https://swapi.co/api/people/3/"
        }, 
        {
            "name": "Darth Vader", 
            "height": "202", 
            "mass": "136", 
            "hair_color": "none", 
            "skin_color": "white", 
            "eye_color": "yellow", 
            "birth_year": "41.9BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [], 
            "starships": [
                "https://swapi.co/api/starships/13/"
            ], 
            "created": "2014-12-10T15:18:20.704000Z", 
            "edited": "2014-12-20T21:17:50.313000Z", 
            "url": "https://swapi.co/api/people/4/"
        }, 
        {
            "name": "Leia Organa", 
            "height": "150", 
            "mass": "49", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "19BBY", 
            "gender": "female", 
            "homeworld": "https://swapi.co/api/planets/2/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/", 
                "https://swapi.co/api/films/7/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/30/"
            ], 
            "starships": [], 
            "created": "2014-12-10T15:20:09.791000Z", 
            "edited": "2014-12-20T21:17:50.315000Z", 
            "url": "https://swapi.co/api/people/5/"
        }, 
        {
            "name": "Owen Lars", 
            "height": "178", 
            "mass": "120", 
            "hair_color": "brown, grey", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "52BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:52:14.024000Z", 
            "edited": "2014-12-20T21:17:50.317000Z", 
            "url": "https://swapi.co/api/people/6/"
        }, 
        {
            "name": "Beru Whitesun lars", 
            "height": "165", 
            "mass": "75", 
            "hair_color": "brown", 
            "skin_color": "light", 
            "eye_color": "blue", 
            "birth_year": "47BBY", 
            "gender": "female", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:53:41.121000Z", 
            "edited": "2014-12-20T21:17:50.319000Z", 
            "url": "https://swapi.co/api/people/7/"
        }, 
        {
            "name": "R5-D4", 
            "height": "97", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, red", 
            "eye_color": "red", 
            "birth_year": "unknown", 
            "gender": "n/a", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:57:50.959000Z", 
            "edited": "2014-12-20T21:17:50.321000Z", 
            "url": "https://swapi.co/api/people/8/"
        }, 
        {
            "name": "Biggs Darklighter", 
            "height": "183", 
            "mass": "84", 
            "hair_color": "black", 
            "skin_color": "light", 
            "eye_color": "brown", 
            "birth_year": "24BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/1/", 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [], 
            "starships": [
                "https://swapi.co/api/starships/12/"
            ], 
            "created": "2014-12-10T15:59:50.509000Z", 
            "edited": "2014-12-20T21:17:50.323000Z", 
            "url": "https://swapi.co/api/people/9/"
        }, 
        {
            "name": "Obi-Wan Kenobi", 
            "height": "182", 
            "mass": "77", 
            "hair_color": "auburn, white", 
            "skin_color": "fair", 
            "eye_color": "blue-gray", 
            "birth_year": "57BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.co/api/planets/20/", 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/38/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/48/", 
                "https://swapi.co/api/starships/59/", 
                "https://swapi.co/api/starships/64/", 
                "https://swapi.co/api/starships/65/", 
                "https://swapi.co/api/starships/74/"
            ], 
            "created": "2014-12-10T16:16:29.192000Z", 
            "edited": "2014-12-20T21:17:50.325000Z", 
            "url": "https://swapi.co/api/people/10/"
        }
]

var films = [
        {
            "title": "A New Hope", 
            "episode_id": 4, 
            "opening_crawl": "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....", 
            "director": "George Lucas", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "1977-05-25", 
            "characters": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/4/", 
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/6/", 
                "https://swapi.co/api/people/7/", 
                "https://swapi.co/api/people/8/", 
                "https://swapi.co/api/people/9/", 
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/12/", 
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/14/", 
                "https://swapi.co/api/people/15/", 
                "https://swapi.co/api/people/16/", 
                "https://swapi.co/api/people/18/", 
                "https://swapi.co/api/people/19/", 
                "https://swapi.co/api/people/81/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/2/", 
                "https://swapi.co/api/planets/3/", 
                "https://swapi.co/api/planets/1/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/2/", 
                "https://swapi.co/api/starships/3/", 
                "https://swapi.co/api/starships/5/", 
                "https://swapi.co/api/starships/9/", 
                "https://swapi.co/api/starships/10/", 
                "https://swapi.co/api/starships/11/", 
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/13/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/4/", 
                "https://swapi.co/api/vehicles/6/", 
                "https://swapi.co/api/vehicles/7/", 
                "https://swapi.co/api/vehicles/8/"
            ], 
            "species": [
                "https://swapi.co/api/species/5/", 
                "https://swapi.co/api/species/3/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/1/", 
                "https://swapi.co/api/species/4/"
            ], 
            "created": "2014-12-10T14:23:31.880000Z", 
            "edited": "2015-04-11T09:46:52.774897Z", 
            "url": "https://swapi.co/api/films/1/"
        }, 
        {
            "title": "Attack of the Clones", 
            "episode_id": 2, 
            "opening_crawl": "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....", 
            "director": "George Lucas", 
            "producer": "Rick McCallum", 
            "release_date": "2002-05-16", 
            "characters": [
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/6/", 
                "https://swapi.co/api/people/7/", 
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/11/", 
                "https://swapi.co/api/people/20/", 
                "https://swapi.co/api/people/21/", 
                "https://swapi.co/api/people/22/", 
                "https://swapi.co/api/people/33/", 
                "https://swapi.co/api/people/36/", 
                "https://swapi.co/api/people/40/", 
                "https://swapi.co/api/people/43/", 
                "https://swapi.co/api/people/46/", 
                "https://swapi.co/api/people/51/", 
                "https://swapi.co/api/people/52/", 
                "https://swapi.co/api/people/53/", 
                "https://swapi.co/api/people/58/", 
                "https://swapi.co/api/people/59/", 
                "https://swapi.co/api/people/60/", 
                "https://swapi.co/api/people/61/", 
                "https://swapi.co/api/people/62/", 
                "https://swapi.co/api/people/63/", 
                "https://swapi.co/api/people/64/", 
                "https://swapi.co/api/people/65/", 
                "https://swapi.co/api/people/66/", 
                "https://swapi.co/api/people/67/", 
                "https://swapi.co/api/people/68/", 
                "https://swapi.co/api/people/69/", 
                "https://swapi.co/api/people/70/", 
                "https://swapi.co/api/people/71/", 
                "https://swapi.co/api/people/72/", 
                "https://swapi.co/api/people/73/", 
                "https://swapi.co/api/people/74/", 
                "https://swapi.co/api/people/75/", 
                "https://swapi.co/api/people/76/", 
                "https://swapi.co/api/people/77/", 
                "https://swapi.co/api/people/78/", 
                "https://swapi.co/api/people/82/", 
                "https://swapi.co/api/people/35/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/8/", 
                "https://swapi.co/api/planets/9/", 
                "https://swapi.co/api/planets/10/", 
                "https://swapi.co/api/planets/11/", 
                "https://swapi.co/api/planets/1/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/21/", 
                "https://swapi.co/api/starships/39/", 
                "https://swapi.co/api/starships/43/", 
                "https://swapi.co/api/starships/47/", 
                "https://swapi.co/api/starships/48/", 
                "https://swapi.co/api/starships/49/", 
                "https://swapi.co/api/starships/32/", 
                "https://swapi.co/api/starships/52/", 
                "https://swapi.co/api/starships/58/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/4/", 
                "https://swapi.co/api/vehicles/44/", 
                "https://swapi.co/api/vehicles/45/", 
                "https://swapi.co/api/vehicles/46/", 
                "https://swapi.co/api/vehicles/50/", 
                "https://swapi.co/api/vehicles/51/", 
                "https://swapi.co/api/vehicles/53/", 
                "https://swapi.co/api/vehicles/54/", 
                "https://swapi.co/api/vehicles/55/", 
                "https://swapi.co/api/vehicles/56/", 
                "https://swapi.co/api/vehicles/57/"
            ], 
            "species": [
                "https://swapi.co/api/species/32/", 
                "https://swapi.co/api/species/33/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/35/", 
                "https://swapi.co/api/species/6/", 
                "https://swapi.co/api/species/1/", 
                "https://swapi.co/api/species/12/", 
                "https://swapi.co/api/species/34/", 
                "https://swapi.co/api/species/13/", 
                "https://swapi.co/api/species/15/", 
                "https://swapi.co/api/species/28/", 
                "https://swapi.co/api/species/29/", 
                "https://swapi.co/api/species/30/", 
                "https://swapi.co/api/species/31/"
            ], 
            "created": "2014-12-20T10:57:57.886000Z", 
            "edited": "2015-04-11T09:45:01.623982Z", 
            "url": "https://swapi.co/api/films/5/"
        }, 
        {
            "title": "The Phantom Menace", 
            "episode_id": 1, 
            "opening_crawl": "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....", 
            "director": "George Lucas", 
            "producer": "Rick McCallum", 
            "release_date": "1999-05-19", 
            "characters": [
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/11/", 
                "https://swapi.co/api/people/16/", 
                "https://swapi.co/api/people/20/", 
                "https://swapi.co/api/people/21/", 
                "https://swapi.co/api/people/32/", 
                "https://swapi.co/api/people/33/", 
                "https://swapi.co/api/people/34/", 
                "https://swapi.co/api/people/36/", 
                "https://swapi.co/api/people/37/", 
                "https://swapi.co/api/people/38/", 
                "https://swapi.co/api/people/39/", 
                "https://swapi.co/api/people/40/", 
                "https://swapi.co/api/people/41/", 
                "https://swapi.co/api/people/42/", 
                "https://swapi.co/api/people/43/", 
                "https://swapi.co/api/people/44/", 
                "https://swapi.co/api/people/46/", 
                "https://swapi.co/api/people/48/", 
                "https://swapi.co/api/people/49/", 
                "https://swapi.co/api/people/50/", 
                "https://swapi.co/api/people/51/", 
                "https://swapi.co/api/people/52/", 
                "https://swapi.co/api/people/53/", 
                "https://swapi.co/api/people/54/", 
                "https://swapi.co/api/people/55/", 
                "https://swapi.co/api/people/56/", 
                "https://swapi.co/api/people/57/", 
                "https://swapi.co/api/people/58/", 
                "https://swapi.co/api/people/59/", 
                "https://swapi.co/api/people/47/", 
                "https://swapi.co/api/people/35/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/8/", 
                "https://swapi.co/api/planets/9/", 
                "https://swapi.co/api/planets/1/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/40/", 
                "https://swapi.co/api/starships/41/", 
                "https://swapi.co/api/starships/31/", 
                "https://swapi.co/api/starships/32/", 
                "https://swapi.co/api/starships/39/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/33/", 
                "https://swapi.co/api/vehicles/34/", 
                "https://swapi.co/api/vehicles/35/", 
                "https://swapi.co/api/vehicles/36/", 
                "https://swapi.co/api/vehicles/37/", 
                "https://swapi.co/api/vehicles/38/", 
                "https://swapi.co/api/vehicles/42/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/6/", 
                "https://swapi.co/api/species/11/", 
                "https://swapi.co/api/species/12/", 
                "https://swapi.co/api/species/13/", 
                "https://swapi.co/api/species/14/", 
                "https://swapi.co/api/species/15/", 
                "https://swapi.co/api/species/16/", 
                "https://swapi.co/api/species/17/", 
                "https://swapi.co/api/species/18/", 
                "https://swapi.co/api/species/19/", 
                "https://swapi.co/api/species/20/", 
                "https://swapi.co/api/species/21/", 
                "https://swapi.co/api/species/22/", 
                "https://swapi.co/api/species/23/", 
                "https://swapi.co/api/species/24/", 
                "https://swapi.co/api/species/25/", 
                "https://swapi.co/api/species/26/", 
                "https://swapi.co/api/species/27/"
            ], 
            "created": "2014-12-19T16:52:55.740000Z", 
            "edited": "2015-04-11T09:45:18.689301Z", 
            "url": "https://swapi.co/api/films/4/"
        }, 
        {
            "title": "Revenge of the Sith", 
            "episode_id": 3, 
            "opening_crawl": "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....", 
            "director": "George Lucas", 
            "producer": "Rick McCallum", 
            "release_date": "2005-05-19", 
            "characters": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/4/", 
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/6/", 
                "https://swapi.co/api/people/7/", 
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/11/", 
                "https://swapi.co/api/people/12/", 
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/20/", 
                "https://swapi.co/api/people/21/", 
                "https://swapi.co/api/people/33/", 
                "https://swapi.co/api/people/46/", 
                "https://swapi.co/api/people/51/", 
                "https://swapi.co/api/people/52/", 
                "https://swapi.co/api/people/53/", 
                "https://swapi.co/api/people/54/", 
                "https://swapi.co/api/people/55/", 
                "https://swapi.co/api/people/56/", 
                "https://swapi.co/api/people/58/", 
                "https://swapi.co/api/people/63/", 
                "https://swapi.co/api/people/64/", 
                "https://swapi.co/api/people/67/", 
                "https://swapi.co/api/people/68/", 
                "https://swapi.co/api/people/75/", 
                "https://swapi.co/api/people/78/", 
                "https://swapi.co/api/people/79/", 
                "https://swapi.co/api/people/80/", 
                "https://swapi.co/api/people/81/", 
                "https://swapi.co/api/people/82/", 
                "https://swapi.co/api/people/83/", 
                "https://swapi.co/api/people/35/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/2/", 
                "https://swapi.co/api/planets/5/", 
                "https://swapi.co/api/planets/8/", 
                "https://swapi.co/api/planets/9/", 
                "https://swapi.co/api/planets/12/", 
                "https://swapi.co/api/planets/13/", 
                "https://swapi.co/api/planets/14/", 
                "https://swapi.co/api/planets/15/", 
                "https://swapi.co/api/planets/16/", 
                "https://swapi.co/api/planets/17/", 
                "https://swapi.co/api/planets/18/", 
                "https://swapi.co/api/planets/19/", 
                "https://swapi.co/api/planets/1/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/48/", 
                "https://swapi.co/api/starships/59/", 
                "https://swapi.co/api/starships/61/", 
                "https://swapi.co/api/starships/32/", 
                "https://swapi.co/api/starships/63/", 
                "https://swapi.co/api/starships/64/", 
                "https://swapi.co/api/starships/65/", 
                "https://swapi.co/api/starships/66/", 
                "https://swapi.co/api/starships/74/", 
                "https://swapi.co/api/starships/75/", 
                "https://swapi.co/api/starships/2/", 
                "https://swapi.co/api/starships/68/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/33/", 
                "https://swapi.co/api/vehicles/50/", 
                "https://swapi.co/api/vehicles/53/", 
                "https://swapi.co/api/vehicles/56/", 
                "https://swapi.co/api/vehicles/60/", 
                "https://swapi.co/api/vehicles/62/", 
                "https://swapi.co/api/vehicles/67/", 
                "https://swapi.co/api/vehicles/69/", 
                "https://swapi.co/api/vehicles/70/", 
                "https://swapi.co/api/vehicles/71/", 
                "https://swapi.co/api/vehicles/72/", 
                "https://swapi.co/api/vehicles/73/", 
                "https://swapi.co/api/vehicles/76/"
            ], 
            "species": [
                "https://swapi.co/api/species/19/", 
                "https://swapi.co/api/species/33/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/3/", 
                "https://swapi.co/api/species/36/", 
                "https://swapi.co/api/species/37/", 
                "https://swapi.co/api/species/6/", 
                "https://swapi.co/api/species/1/", 
                "https://swapi.co/api/species/34/", 
                "https://swapi.co/api/species/15/", 
                "https://swapi.co/api/species/35/", 
                "https://swapi.co/api/species/20/", 
                "https://swapi.co/api/species/23/", 
                "https://swapi.co/api/species/24/", 
                "https://swapi.co/api/species/25/", 
                "https://swapi.co/api/species/26/", 
                "https://swapi.co/api/species/27/", 
                "https://swapi.co/api/species/28/", 
                "https://swapi.co/api/species/29/", 
                "https://swapi.co/api/species/30/"
            ], 
            "created": "2014-12-20T18:49:38.403000Z", 
            "edited": "2015-04-11T09:45:44.862122Z", 
            "url": "https://swapi.co/api/films/6/"
        }, 
        {
            "title": "Return of the Jedi", 
            "episode_id": 6, 
            "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...", 
            "director": "Richard Marquand", 
            "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum", 
            "release_date": "1983-05-25", 
            "characters": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/4/", 
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/14/", 
                "https://swapi.co/api/people/16/", 
                "https://swapi.co/api/people/18/", 
                "https://swapi.co/api/people/20/", 
                "https://swapi.co/api/people/21/", 
                "https://swapi.co/api/people/22/", 
                "https://swapi.co/api/people/25/", 
                "https://swapi.co/api/people/27/", 
                "https://swapi.co/api/people/28/", 
                "https://swapi.co/api/people/29/", 
                "https://swapi.co/api/people/30/", 
                "https://swapi.co/api/people/31/", 
                "https://swapi.co/api/people/45/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/5/", 
                "https://swapi.co/api/planets/7/", 
                "https://swapi.co/api/planets/8/", 
                "https://swapi.co/api/planets/9/", 
                "https://swapi.co/api/planets/1/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/15/", 
                "https://swapi.co/api/starships/10/", 
                "https://swapi.co/api/starships/11/", 
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/22/", 
                "https://swapi.co/api/starships/23/", 
                "https://swapi.co/api/starships/27/", 
                "https://swapi.co/api/starships/28/", 
                "https://swapi.co/api/starships/29/", 
                "https://swapi.co/api/starships/3/", 
                "https://swapi.co/api/starships/17/", 
                "https://swapi.co/api/starships/2/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/8/", 
                "https://swapi.co/api/vehicles/16/", 
                "https://swapi.co/api/vehicles/18/", 
                "https://swapi.co/api/vehicles/19/", 
                "https://swapi.co/api/vehicles/24/", 
                "https://swapi.co/api/vehicles/25/", 
                "https://swapi.co/api/vehicles/26/", 
                "https://swapi.co/api/vehicles/30/"
            ], 
            "species": [
                "https://swapi.co/api/species/1/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/3/", 
                "https://swapi.co/api/species/5/", 
                "https://swapi.co/api/species/6/", 
                "https://swapi.co/api/species/8/", 
                "https://swapi.co/api/species/9/", 
                "https://swapi.co/api/species/10/", 
                "https://swapi.co/api/species/15/"
            ], 
            "created": "2014-12-18T10:39:33.255000Z", 
            "edited": "2015-04-11T09:46:05.220365Z", 
            "url": "https://swapi.co/api/films/3/"
        }, 
        {
            "title": "The Empire Strikes Back", 
            "episode_id": 5, 
            "opening_crawl": "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....", 
            "director": "Irvin Kershner", 
            "producer": "Gary Kurtz, Rick McCallum", 
            "release_date": "1980-05-17", 
            "characters": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/2/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/4/", 
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/10/", 
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/14/", 
                "https://swapi.co/api/people/18/", 
                "https://swapi.co/api/people/20/", 
                "https://swapi.co/api/people/21/", 
                "https://swapi.co/api/people/22/", 
                "https://swapi.co/api/people/23/", 
                "https://swapi.co/api/people/24/", 
                "https://swapi.co/api/people/25/", 
                "https://swapi.co/api/people/26/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/4/", 
                "https://swapi.co/api/planets/5/", 
                "https://swapi.co/api/planets/6/", 
                "https://swapi.co/api/planets/27/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/15/", 
                "https://swapi.co/api/starships/10/", 
                "https://swapi.co/api/starships/11/", 
                "https://swapi.co/api/starships/12/", 
                "https://swapi.co/api/starships/21/", 
                "https://swapi.co/api/starships/22/", 
                "https://swapi.co/api/starships/23/", 
                "https://swapi.co/api/starships/3/", 
                "https://swapi.co/api/starships/17/"
            ], 
            "vehicles": [
                "https://swapi.co/api/vehicles/8/", 
                "https://swapi.co/api/vehicles/14/", 
                "https://swapi.co/api/vehicles/16/", 
                "https://swapi.co/api/vehicles/18/", 
                "https://swapi.co/api/vehicles/19/", 
                "https://swapi.co/api/vehicles/20/"
            ], 
            "species": [
                "https://swapi.co/api/species/6/", 
                "https://swapi.co/api/species/7/", 
                "https://swapi.co/api/species/3/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/1/"
            ], 
            "created": "2014-12-12T11:26:24.656000Z", 
            "edited": "2017-04-19T10:57:29.544256Z", 
            "url": "https://swapi.co/api/films/2/"
        }, 
        {
            "title": "The Force Awakens", 
            "episode_id": 7, 
            "opening_crawl": "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....", 
            "director": "J. J. Abrams", 
            "producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk", 
            "release_date": "2015-12-11", 
            "characters": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/3/", 
                "https://swapi.co/api/people/5/", 
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/14/", 
                "https://swapi.co/api/people/27/", 
                "https://swapi.co/api/people/84/", 
                "https://swapi.co/api/people/85/", 
                "https://swapi.co/api/people/86/", 
                "https://swapi.co/api/people/87/", 
                "https://swapi.co/api/people/88/"
            ], 
            "planets": [
                "https://swapi.co/api/planets/61/"
            ], 
            "starships": [
                "https://swapi.co/api/starships/77/", 
                "https://swapi.co/api/starships/10/"
            ], 
            "vehicles": [], 
            "species": [
                "https://swapi.co/api/species/3/", 
                "https://swapi.co/api/species/2/", 
                "https://swapi.co/api/species/1/"
            ], 
            "created": "2015-04-17T06:51:30.504780Z", 
            "edited": "2015-12-17T14:31:47.617768Z", 
            "url": "https://swapi.co/api/films/7/"
        }
]

var starships = [
        {
            "name": "Executor", 
            "model": "Executor-class star dreadnought", 
            "manufacturer": "Kuat Drive Yards, Fondor Shipyards", 
            "cost_in_credits": "1143350000", 
            "length": "19000", 
            "max_atmosphering_speed": "n/a", 
            "crew": "279144", 
            "passengers": "38000", 
            "cargo_capacity": "250000000", 
            "consumables": "6 years", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "40", 
            "starship_class": "Star dreadnought", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:31:42.547000Z", 
            "edited": "2017-04-19T10:56:06.685592Z", 
            "url": "https://swapi.co/api/starships/15/"
        }, 
        {
            "name": "Sentinel-class landing craft", 
            "model": "Sentinel-class landing craft", 
            "manufacturer": "Sienar Fleet Systems, Cyngus Spaceworks", 
            "cost_in_credits": "240000", 
            "length": "38", 
            "max_atmosphering_speed": "1000", 
            "crew": "5", 
            "passengers": "75", 
            "cargo_capacity": "180000", 
            "consumables": "1 month", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "70", 
            "starship_class": "landing craft", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T15:48:00.586000Z", 
            "edited": "2014-12-22T17:35:44.431407Z", 
            "url": "https://swapi.co/api/starships/5/"
        }, 
        {
            "name": "Death Star", 
            "model": "DS-1 Orbital Battle Station", 
            "manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems", 
            "cost_in_credits": "1000000000000", 
            "length": "120000", 
            "max_atmosphering_speed": "n/a", 
            "crew": "342953", 
            "passengers": "843342", 
            "cargo_capacity": "1000000000000", 
            "consumables": "3 years", 
            "hyperdrive_rating": "4.0", 
            "MGLT": "10", 
            "starship_class": "Deep Space Mobile Battlestation", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:36:50.509000Z", 
            "edited": "2014-12-22T17:35:44.452589Z", 
            "url": "https://swapi.co/api/starships/9/"
        }, 
        {
            "name": "Millennium Falcon", 
            "model": "YT-1300 light freighter", 
            "manufacturer": "Corellian Engineering Corporation", 
            "cost_in_credits": "100000", 
            "length": "34.37", 
            "max_atmosphering_speed": "1050", 
            "crew": "4", 
            "passengers": "6", 
            "cargo_capacity": "100000", 
            "consumables": "2 months", 
            "hyperdrive_rating": "0.5", 
            "MGLT": "75", 
            "starship_class": "Light freighter", 
            "pilots": [
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/14/", 
                "https://swapi.co/api/people/25/", 
                "https://swapi.co/api/people/31/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/7/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:59:45.094000Z", 
            "edited": "2014-12-22T17:35:44.464156Z", 
            "url": "https://swapi.co/api/starships/10/"
        }, 
        {
            "name": "Y-wing", 
            "model": "BTL Y-wing", 
            "manufacturer": "Koensayr Manufacturing", 
            "cost_in_credits": "134999", 
            "length": "14", 
            "max_atmosphering_speed": "1000km", 
            "crew": "2", 
            "passengers": "0", 
            "cargo_capacity": "110", 
            "consumables": "1 week", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "80", 
            "starship_class": "assault starfighter", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-12T11:00:39.817000Z", 
            "edited": "2014-12-22T17:35:44.479706Z", 
            "url": "https://swapi.co/api/starships/11/"
        }, 
        {
            "name": "X-wing", 
            "model": "T-65 X-wing", 
            "manufacturer": "Incom Corporation", 
            "cost_in_credits": "149999", 
            "length": "12.5", 
            "max_atmosphering_speed": "1050", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "110", 
            "consumables": "1 week", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "100", 
            "starship_class": "Starfighter", 
            "pilots": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/9/", 
                "https://swapi.co/api/people/18/", 
                "https://swapi.co/api/people/19/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-12T11:19:05.340000Z", 
            "edited": "2014-12-22T17:35:44.491233Z", 
            "url": "https://swapi.co/api/starships/12/"
        }, 
        {
            "name": "TIE Advanced x1", 
            "model": "Twin Ion Engine Advanced x1", 
            "manufacturer": "Sienar Fleet Systems", 
            "cost_in_credits": "unknown", 
            "length": "9.2", 
            "max_atmosphering_speed": "1200", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "150", 
            "consumables": "5 days", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "105", 
            "starship_class": "Starfighter", 
            "pilots": [
                "https://swapi.co/api/people/4/"
            ], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-12T11:21:32.991000Z", 
            "edited": "2014-12-22T17:35:44.549047Z", 
            "url": "https://swapi.co/api/starships/13/"
        }, 
        {
            "name": "Slave 1", 
            "model": "Firespray-31-class patrol and attack", 
            "manufacturer": "Kuat Systems Engineering", 
            "cost_in_credits": "unknown", 
            "length": "21.5", 
            "max_atmosphering_speed": "1000", 
            "crew": "1", 
            "passengers": "6", 
            "cargo_capacity": "70000", 
            "consumables": "1 month", 
            "hyperdrive_rating": "3.0", 
            "MGLT": "70", 
            "starship_class": "Patrol craft", 
            "pilots": [
                "https://swapi.co/api/people/22/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/"
            ], 
            "created": "2014-12-15T13:00:56.332000Z", 
            "edited": "2014-12-22T17:35:44.716273Z", 
            "url": "https://swapi.co/api/starships/21/"
        }, 
        {
            "name": "Imperial shuttle", 
            "model": "Lambda-class T-4a shuttle", 
            "manufacturer": "Sienar Fleet Systems", 
            "cost_in_credits": "240000", 
            "length": "20", 
            "max_atmosphering_speed": "850", 
            "crew": "6", 
            "passengers": "20", 
            "cargo_capacity": "80000", 
            "consumables": "2 months", 
            "hyperdrive_rating": "1.0", 
            "MGLT": "50", 
            "starship_class": "Armed government transport", 
            "pilots": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/13/", 
                "https://swapi.co/api/people/14/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T13:04:47.235000Z", 
            "edited": "2014-12-22T17:35:44.795405Z", 
            "url": "https://swapi.co/api/starships/22/"
        }, 
        {
            "name": "EF76 Nebulon-B escort frigate", 
            "model": "EF76 Nebulon-B escort frigate", 
            "manufacturer": "Kuat Drive Yards", 
            "cost_in_credits": "8500000", 
            "length": "300", 
            "max_atmosphering_speed": "800", 
            "crew": "854", 
            "passengers": "75", 
            "cargo_capacity": "6000000", 
            "consumables": "2 years", 
            "hyperdrive_rating": "2.0", 
            "MGLT": "40", 
            "starship_class": "Escort ship", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T13:06:30.813000Z", 
            "edited": "2014-12-22T17:35:44.848329Z", 
            "url": "https://swapi.co/api/starships/23/"
        }
]

var species = [
        {
            "name": "Hutt", 
            "classification": "gastropod", 
            "designation": "sentient", 
            "average_height": "300", 
            "skin_colors": "green, brown, tan", 
            "hair_colors": "n/a", 
            "eye_colors": "yellow, red", 
            "average_lifespan": "1000", 
            "homeworld": "https://swapi.co/api/planets/24/", 
            "language": "Huttese", 
            "people": [
                "https://swapi.co/api/people/16/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T17:12:50.410000Z", 
            "edited": "2014-12-20T21:36:42.146000Z", 
            "url": "https://swapi.co/api/species/5/"
        }, 
        {
            "name": "Yoda's species", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "66", 
            "skin_colors": "green, yellow", 
            "hair_colors": "brown, white", 
            "eye_colors": "brown, green, yellow", 
            "average_lifespan": "900", 
            "homeworld": "https://swapi.co/api/planets/28/", 
            "language": "Galactic basic", 
            "people": [
                "https://swapi.co/api/people/20/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/", 
                "https://swapi.co/api/films/6/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:27:22.877000Z", 
            "edited": "2014-12-20T21:36:42.148000Z", 
            "url": "https://swapi.co/api/species/6/"
        }, 
        {
            "name": "Trandoshan", 
            "classification": "reptile", 
            "designation": "sentient", 
            "average_height": "200", 
            "skin_colors": "brown, green", 
            "hair_colors": "none", 
            "eye_colors": "yellow, orange", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/29/", 
            "language": "Dosh", 
            "people": [
                "https://swapi.co/api/people/24/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T13:07:47.704000Z", 
            "edited": "2014-12-20T21:36:42.151000Z", 
            "url": "https://swapi.co/api/species/7/"
        }, 
        {
            "name": "Mon Calamari", 
            "classification": "amphibian", 
            "designation": "sentient", 
            "average_height": "160", 
            "skin_colors": "red, blue, brown, magenta", 
            "hair_colors": "none", 
            "eye_colors": "yellow", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/31/", 
            "language": "Mon Calamarian", 
            "people": [
                "https://swapi.co/api/people/27/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:09:52.263000Z", 
            "edited": "2014-12-20T21:36:42.153000Z", 
            "url": "https://swapi.co/api/species/8/"
        }, 
        {
            "name": "Ewok", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "100", 
            "skin_colors": "brown", 
            "hair_colors": "white, brown, black", 
            "eye_colors": "orange, brown", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/7/", 
            "language": "Ewokese", 
            "people": [
                "https://swapi.co/api/people/30/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:22:00.285000Z", 
            "edited": "2014-12-20T21:36:42.155000Z", 
            "url": "https://swapi.co/api/species/9/"
        }, 
        {
            "name": "Sullustan", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "180", 
            "skin_colors": "pale", 
            "hair_colors": "none", 
            "eye_colors": "black", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/33/", 
            "language": "Sullutese", 
            "people": [
                "https://swapi.co/api/people/31/"
            ], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T11:26:20.103000Z", 
            "edited": "2014-12-20T21:36:42.157000Z", 
            "url": "https://swapi.co/api/species/10/"
        }, 
        {
            "name": "Neimodian", 
            "classification": "unknown", 
            "designation": "sentient", 
            "average_height": "180", 
            "skin_colors": "grey, green", 
            "hair_colors": "none", 
            "eye_colors": "red, pink", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/18/", 
            "language": "Neimoidia", 
            "people": [
                "https://swapi.co/api/people/33/"
            ], 
            "films": [
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:07:31.319000Z", 
            "edited": "2014-12-20T21:36:42.160000Z", 
            "url": "https://swapi.co/api/species/11/"
        }, 
        {
            "name": "Gungan", 
            "classification": "amphibian", 
            "designation": "sentient", 
            "average_height": "190", 
            "skin_colors": "brown, green", 
            "hair_colors": "none", 
            "eye_colors": "orange", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/8/", 
            "language": "Gungan basic", 
            "people": [
                "https://swapi.co/api/people/36/", 
                "https://swapi.co/api/people/37/", 
                "https://swapi.co/api/people/38/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:30:37.341000Z", 
            "edited": "2014-12-20T21:36:42.163000Z", 
            "url": "https://swapi.co/api/species/12/"
        }, 
        {
            "name": "Toydarian", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "120", 
            "skin_colors": "blue, green, grey", 
            "hair_colors": "none", 
            "eye_colors": "yellow", 
            "average_lifespan": "91", 
            "homeworld": "https://swapi.co/api/planets/34/", 
            "language": "Toydarian", 
            "people": [
                "https://swapi.co/api/people/40/"
            ], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:48:56.893000Z", 
            "edited": "2014-12-20T21:36:42.165000Z", 
            "url": "https://swapi.co/api/species/13/"
        }, 
        {
            "name": "Dug", 
            "classification": "mammal", 
            "designation": "sentient", 
            "average_height": "100", 
            "skin_colors": "brown, purple, grey, red", 
            "hair_colors": "none", 
            "eye_colors": "yellow, blue", 
            "average_lifespan": "unknown", 
            "homeworld": "https://swapi.co/api/planets/35/", 
            "language": "Dugese", 
            "people": [
                "https://swapi.co/api/people/41/"
            ], 
            "films": [
                "https://swapi.co/api/films/4/"
            ], 
            "created": "2014-12-19T17:53:11.214000Z", 
            "edited": "2014-12-20T21:36:42.167000Z", 
            "url": "https://swapi.co/api/species/14/"
        }
]

var vehicles = [
        {
            "name": "Sand Crawler", 
            "model": "Digger Crawler", 
            "manufacturer": "Corellia Mining Corporation", 
            "cost_in_credits": "150000", 
            "length": "36.8", 
            "max_atmosphering_speed": "30", 
            "crew": "46", 
            "passengers": "30", 
            "cargo_capacity": "50000", 
            "consumables": "2 months", 
            "vehicle_class": "wheeled", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/5/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T15:36:25.724000Z", 
            "edited": "2014-12-22T18:21:15.523587Z", 
            "url": "https://swapi.co/api/vehicles/4/"
        }, 
        {
            "name": "T-16 skyhopper", 
            "model": "T-16 skyhopper", 
            "manufacturer": "Incom Corporation", 
            "cost_in_credits": "14500", 
            "length": "10.4", 
            "max_atmosphering_speed": "1200", 
            "crew": "1", 
            "passengers": "1", 
            "cargo_capacity": "50", 
            "consumables": "0", 
            "vehicle_class": "repulsorcraft", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:01:52.434000Z", 
            "edited": "2014-12-22T18:21:15.552614Z", 
            "url": "https://swapi.co/api/vehicles/6/"
        }, 
        {
            "name": "X-34 landspeeder", 
            "model": "X-34 landspeeder", 
            "manufacturer": "SoroSuub Corporation", 
            "cost_in_credits": "10550", 
            "length": "3.4", 
            "max_atmosphering_speed": "250", 
            "crew": "1", 
            "passengers": "1", 
            "cargo_capacity": "5", 
            "consumables": "unknown", 
            "vehicle_class": "repulsorcraft", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:13:52.586000Z", 
            "edited": "2014-12-22T18:21:15.583700Z", 
            "url": "https://swapi.co/api/vehicles/7/"
        }, 
        {
            "name": "TIE/LN starfighter", 
            "model": "Twin Ion Engine/Ln Starfighter", 
            "manufacturer": "Sienar Fleet Systems", 
            "cost_in_credits": "unknown", 
            "length": "6.4", 
            "max_atmosphering_speed": "1200", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "65", 
            "consumables": "2 days", 
            "vehicle_class": "starfighter", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/", 
                "https://swapi.co/api/films/1/"
            ], 
            "created": "2014-12-10T16:33:52.860000Z", 
            "edited": "2014-12-22T18:21:15.606149Z", 
            "url": "https://swapi.co/api/vehicles/8/"
        }, 
        {
            "name": "Snowspeeder", 
            "model": "t-47 airspeeder", 
            "manufacturer": "Incom corporation", 
            "cost_in_credits": "unknown", 
            "length": "4.5", 
            "max_atmosphering_speed": "650", 
            "crew": "2", 
            "passengers": "0", 
            "cargo_capacity": "10", 
            "consumables": "none", 
            "vehicle_class": "airspeeder", 
            "pilots": [
                "https://swapi.co/api/people/1/", 
                "https://swapi.co/api/people/18/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T12:22:12Z", 
            "edited": "2014-12-22T18:21:15.623033Z", 
            "url": "https://swapi.co/api/vehicles/14/"
        }, 
        {
            "name": "TIE bomber", 
            "model": "TIE/sa bomber", 
            "manufacturer": "Sienar Fleet Systems", 
            "cost_in_credits": "unknown", 
            "length": "7.8", 
            "max_atmosphering_speed": "850", 
            "crew": "1", 
            "passengers": "0", 
            "cargo_capacity": "none", 
            "consumables": "2 days", 
            "vehicle_class": "space/planetary bomber", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:33:15.838000Z", 
            "edited": "2014-12-22T18:21:15.667730Z", 
            "url": "https://swapi.co/api/vehicles/16/"
        }, 
        {
            "name": "AT-AT", 
            "model": "All Terrain Armored Transport", 
            "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research", 
            "cost_in_credits": "unknown", 
            "length": "20", 
            "max_atmosphering_speed": "60", 
            "crew": "5", 
            "passengers": "40", 
            "cargo_capacity": "1000", 
            "consumables": "unknown", 
            "vehicle_class": "assault walker", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:38:25.937000Z", 
            "edited": "2014-12-22T18:21:15.714673Z", 
            "url": "https://swapi.co/api/vehicles/18/"
        }, 
        {
            "name": "AT-ST", 
            "model": "All Terrain Scout Transport", 
            "manufacturer": "Kuat Drive Yards, Imperial Department of Military Research", 
            "cost_in_credits": "unknown", 
            "length": "2", 
            "max_atmosphering_speed": "90", 
            "crew": "2", 
            "passengers": "0", 
            "cargo_capacity": "200", 
            "consumables": "none", 
            "vehicle_class": "walker", 
            "pilots": [
                "https://swapi.co/api/people/13/"
            ], 
            "films": [
                "https://swapi.co/api/films/2/", 
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-15T12:46:42.384000Z", 
            "edited": "2014-12-22T18:21:15.761584Z", 
            "url": "https://swapi.co/api/vehicles/19/"
        }, 
        {
            "name": "Storm IV Twin-Pod cloud car", 
            "model": "Storm IV Twin-Pod", 
            "manufacturer": "Bespin Motors", 
            "cost_in_credits": "75000", 
            "length": "7", 
            "max_atmosphering_speed": "1500", 
            "crew": "2", 
            "passengers": "0", 
            "cargo_capacity": "10", 
            "consumables": "1 day", 
            "vehicle_class": "repulsorcraft", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/2/"
            ], 
            "created": "2014-12-15T12:58:50.530000Z", 
            "edited": "2014-12-22T18:21:15.783232Z", 
            "url": "https://swapi.co/api/vehicles/20/"
        }, 
        {
            "name": "Sail barge", 
            "model": "Modified Luxury Sail Barge", 
            "manufacturer": "Ubrikkian Industries Custom Vehicle Division", 
            "cost_in_credits": "285000", 
            "length": "30", 
            "max_atmosphering_speed": "100", 
            "crew": "26", 
            "passengers": "500", 
            "cargo_capacity": "2000000", 
            "consumables": "Live food tanks", 
            "vehicle_class": "sail barge", 
            "pilots": [], 
            "films": [
                "https://swapi.co/api/films/3/"
            ], 
            "created": "2014-12-18T10:44:14.217000Z", 
            "edited": "2014-12-22T18:21:15.807906Z", 
            "url": "https://swapi.co/api/vehicles/24/"
        }
]