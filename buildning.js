function cat(label) {
    return `<span class="cat">${label}:</span>`;
}


document.addEventListener("DOMContentLoaded", () => {


    /* ---------------------------------------------------------
       1. ALLA ARRAYER
    --------------------------------------------------------- */


    const DATA = {
        world: [
            "Oasis Springs","Willow Creek","Newcrest","Granite Falls","Magnolia Promenade",
            "Windenburg","San Myshuno","Forgotten Hollow","Brindleton Bay","Selvadorada",
            "Del Sol Valley","StrangerVille","Sulani","Glimmerbrook","Britechester",
            "Evergreen Harbor","Mt. Komorebi","Tartosa","Moonwood Mill","Copperdale",
            "Tomarang","Ciudad Enamorada","Nordhaven","Innisgreen","Gibbi Point"
        ],


        type: [
            "Haunted House","Library","Museum","National Park","Science lab","Beach",
            "Foxbury/UBrite Commons","Police Station","Hospital","Chemistry Lab","Retail",
            "Arts center","Highschool","Thrift & Bubble tea Store","Community Space"
        ],


        size: [
            "20x15","20x20","30x20","30x30","40x20","40x30","40x40","50x40","50x50","64x64"
        ],


        expansion: [
            "Get To Work","City Living","Get Together","Seasons","Cats & Dogs","Get Famous",
            "Island Living","Discover University","Eco Lifestyle","Snowy Escape","Cottage Living",
            "High School Years","For Rent","Lovestruck","Businesses & Hobbies",
            "Enchanted by nature","Adventure Awaits"
        ],


        kits: [
            "Courtyard Oasis","Little Campers","Desert Luxe","Riviera Retreat","Cozy Bistro",
            "Secret Sanctuary","Comfy Gamer","Casanova Cave","Sleek Bathroom"
        ],


        game: [
            "Outdoor Retreat","Spa Day","Dine Out","Vampires","Parenthood","Jungle Adventure",
            "StrangerVille","Realm of Magic","Star Wars","Dream Home Decor",
            "My Wedding Stories","WereWolves"
        ],


        stuff: [
            "Luxury Party","Perfect Patio","Cool Kitchen","Movie Hangout","Romantic Garden",
            "Kids Room","Backyard","Vintage Glamour","Bowling Night","Fitness","Toddler",
            "Laundry Day","My First Pet","Moschino","Tiny Living","Nifty Knitting","Paranormal"
        ],


        business: [
            "Residental Rental","Veterinarian Clinic","Restaurant","Small Business","Retail"
        ],


        smallBusiness: [
            {
                name: "Food & Drinks",
                examples: [
                    "All things Grilled Cheese","Bake","Cook","Drink Bar Drinks","Drink Coffee",
                    "Drink Tea","Eat","Eat Popcorn","Grill","Make Smoothies","Make Treats",
                    "Mix bar drinks"
                ]
            },
            {
                name: "Art & Music",
                examples: [
                    "Acting Routines","Cross-stitch","DJ","Dance","Do Comedy","Do Pottery",
                    "Get Tattooed","Knitting","Listen to Music","Paint","Papercraft",
                    "Play an Instrument","Play Guitar","Play Piano","Play Pipe Organ",
                    "Play Violin","Practice Tattooing","Produce New Track","Sing",
                    "Watch Live Entertainment"
                ]
            },
            {
                name: "Hobbies",
                examples: [
                    "Attend Classes and Lectures","Build Robots","Craft Apothecary Elixirs",
                    "Debate","Do Research","Do Seances","Do Spa Activities","Do Yoga",
                    "Fabricate Objects","Meditate","Program","Read","Record Video",
                    "Rocket Science","Use Bubble Blower","Use Cauldron","Use Microscope",
                    "Use Science Objects","Use Spinning Bike","Use Telescope",
                    "Watch Movies on TV","Woodwork","Work Out","Write"
                ]
            },
            {
                name: "Fun & Games",
                examples: [
                    "Go Bowling","Play Arcade Machine","Play Basketball","Play Cards",
                    "Play Chess","Play Darts","Play Don’t Wake The Lama"
                ]
            },
            {
                name: "Mischief Mayhem",
                examples: [
                    "Cast Chaotic Spells","Cast Helpful Spells","Cast Spells","Drink Plasma",
                    "Hack","Possess Objects","Prank","Roar","Sabotage Objects","Swipe Objects",
                    "Use Alien Powers","Use Evil Mastery","Use Fairy Abilities",
                    "Use Good Ghost Mastery","Use Vampire Powers","Use Werewolf Abilities"
                ]
            },
            {
                name: "Outdoor",
                examples: [
                    "Care for Animals","Collect Butterflies","Conservation Activities",
                    "Fall Activities","Fish","Hangout by Fire"
                ]
            },
            {
                name: "Social",
                examples: [
                    "Be Friendly","Be Funny","Be Mean","Be Mischievous","Be Romantic",
                    "Fight","Give Speech","Hug","Kiss","Scare","Tell Jokes"
                ]
            },
            {
                name: "Kids Activities",
                examples: [
                    "Battle With Voidcritters","Do Homework","Perform Puppet Show",
                    "Play In Closet","Play Marbles","Play on Playground","Play with Toys",
                    "Play with Infant or Toddler","Use Activity Table","Use Science Table"
                ]
            },
            {
                name: "Home Activities",
                examples: [
                    "Bathe and Shower","Browse and Buy Items","Browse the Web","Clean",
                    "Do laundry","Fix Objects","Sleep","Stay near Household Sims",
                    "Try on Outfits","Watch TV"
                ]
            }
        ],


        colors: [
            "Red","Pink","Orange","Yellow","Green","Blue","Purple","White","Gray","Black",
            "Light Brown","Dark Brown"
        ],


        decor: [
            "Basic","Boho","Contemporary","Cosmolux","French Country","Garden",
            "Gothic Farmhouse","Island","Mid Century","Mission","Modern","Patio",
            "Queen anne","Storybook","Suburban","Shabby","Art Deco","Luxe","Cute",
            "Shotgun","Industrial","Holidays","Vintage","Patio","Regal"
        ],


        budget: [
            "5 000","7 500","10 000","14 000","20 000","35 000","50 000","75 000",
            "100 000","250 000","750 000","1 000 000","45 000","3 500"
        ],


        must: [
            "Off The Grid","An Instrument","A Backyard","3 Floors","Big Bathroom",
            "Big Kitchen","2 Floors","Walk-in-closet","Playground","A Gym","A Gameroom",
            "A Basement","An Office","Underground Hideout","Built on Water",
            "Built under Water"
        ],


        limits: [
            "No Backyard","Only ONE Bathroom","Only 'Singlebeds'","No dark colors",
            "No light colors","No black&white","1 Floor Only","No 'Basic' Decor",
            "Basic Only Decor","Small kitchen"
        ],


        time: [
            "30 min","15 min","45 min","1 h","1h 30 min","2 h","2 h 30 min","3 h","3 h 30 min"
        ],


        extra: [
            "Bachelor Pad","Build a friends home","Build your Parents Home","Build your Dream Home","Summer House",
            "Curry Pad","Secret Room","Build a Cozy Garden","Outdoor Movie Theater","Survival Bunker"
        ]
    };


    /* ---------------------------------------------------------
       2. HJÄLPFUNKTIONER
    --------------------------------------------------------- */


    const rand = arr => arr[Math.floor(Math.random() * arr.length)];


    const randMany = (arr, n) => {
        const copy = [...arr];
        const out = [];
        for (let i = 0; i < n && copy.length; i++) {
            const idx = Math.floor(Math.random() * copy.length);
            out.push(copy[idx]);
            copy.splice(idx, 1);
        }
        return out;
    };


    const getCheckbox = box => box.querySelector("input[type='checkbox']");
    const getSelect = box => box.querySelector("select");
    const finalResult = document.getElementById("final-result");


    /* ---------------------------------------------------------
       3. GENERERA RESULTAT
    --------------------------------------------------------- */


    document.getElementById("submit-box").addEventListener("click", () => {


        const boxes = document.querySelectorAll(".build-box");
        let output = [];


        boxes.forEach(box => {
            const id = box.id;
            const cb = getCheckbox(box);
            if (!cb || !cb.checked) return;


            // PACKS (specialfall)
            if (id === "packs") {
                const packGroups = box.querySelectorAll(".head-box");
                packGroups.forEach(group => {
                    const title = group.querySelector("h4")?.textContent;
                    const checkbox = group.querySelector("input[type='checkbox']");
                    const select = group.parentElement.querySelector("select");


                    if (!checkbox || !checkbox.checked) return;


                    let key = title.toLowerCase().split(" ")[0]; // expansion, kits, game, stuff
                    let amount = parseInt(select.value);
                    let picks = randMany(DATA[key], amount);


                    output.push(`${cat(title)}: ${picks.join(", ")}`);
                });
                return;
            }


            // SMALL BUSINESS (specialfall)
            if (id === "s-business") {
                const amount = parseInt(getSelect(box).value);
                const item = rand(DATA.smallBusiness);
                const examples = randMany(item.examples, amount);
           
                output.push(`${cat("Small Business")}: ${item.name} (${examples.join(", ")})`);
                return;
            }


            // ÖVRIGA KATEGORIER
            if (DATA[id]) {
                const select = getSelect(box);
                if (select) {
                    let amount = parseInt(select.value);
                    let picks = randMany(DATA[id], amount);
                    output.push(`${cat(box.querySelector("h3").textContent)}: ${picks.join(", ")}`);
                } else {
                    output.push(`${cat(box.querySelector("h3").textContent)}: ${rand(DATA[id])}`);
                }
            }
        });


        finalResult.innerHTML = output.join("\n\n");


        // Visar Reultat-BOXEN


        document.getElementById("result-box").style.display = "block"
    });


    /* ---------------------------------------------------------
       4. RESET
    --------------------------------------------------------- */


    document.getElementById("reset-box").addEventListener("click", () => {
        // Reset ALL checkboxes
        document.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
   
        // Reset ALL select dropdowns
        document.querySelectorAll("select").forEach(sel => sel.selectedIndex = 0);
   
        // Clear result box
        finalResult.textContent = "";


        // Reset "Result-boxen"
        document.getElementById("result-box").style.display = "none";
    });


    // COPY BUTTON FUNCTION
    document.getElementById("copy-btn").addEventListener("click", () => {
        const text = finalResult.textContent;
   
        navigator.clipboard.writeText(text).then(() => {
            const icon = document.querySelector("#copy-btn i");
            icon.classList.remove("fa-copy");
            icon.classList.add("fa-check");
   
            setTimeout(() => {
                icon.classList.remove("fa-check");
                icon.classList.add("fa-copy");
            }, 1000);
        });
    });


});
