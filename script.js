function toggleVideo(){
    const trailer = document.querySelector('.trailer')
    const video = document.querySelector('video')
    video.pause();
    trailer.classList.toggle('active')
}

let Search = 4

const GENRE =['K-Drama',//0
    'Sentimental',//1
    'Horror',//2
    'Anime',//3
    'Sad',//4
    'War',//5
    'Thriller',//6
    'Mystry',//7
    'Murder',//8
    'Kids',//9
    'Si-Fi',//10
    'Love',//11
    'Romance',//12
    'Family',//13
    'Drama',//14
    'Tragidy',//15
    'Fantasy',//16
    'Action',//17
    'Ninja',//18
    'Destraction',//19
    'Game',//20
    'Spy',//21
    'Heist',//22
    'Crime',//23
    'Comedy',//24
    'Adventure',//25
]
const MOVIE = [
    {title:"My-demon-title.png",
    poster:"My-demon-poster.png",
    movieName:"my demon",
    name:"My demon DUAL audio hevc,Hindi,English",
    source:"Netflix",
    director:"Kim Jang-Han",
    writter:"Choi Ah-Il",
    cast:"Kim Yoo-jung, Song Kang",
    rating:"7.7/10",
    relese:"Nov 14, 2023 South-Korea",
    detailsSRC: 'My-demon-DE.html',
    background:"bg-My-demon-left.jpg",
    ageRestriction:"16+",
    year:"2023",
    genre:GENRE[11],
    similarGenre1:GENRE[14] ,
    similarGenre2:GENRE[13] ,
    downloadlink:"https://mega.nz/folder/zIczTYLT#QbfcpS0AOnTVqtxsG0-XHw",
    moreLink:0,
    season:["Season-1"],
    duration:'16h 10min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"A pitiless demon becomes powerless after getting entangled with an icy heiress, who may hold the key to his lost abilities — and his heart.",
    },
    {title:"Rent-a-Girlfriend-title.png",
    poster:"Rent-a-Girlfriend-poster.jpg",
    movieName:"Rent a girlfriend",
    name:"Rent a girlfriend Hindi, English, Japanese",
    source:"0",
    director:"Kazuomi Koga",
    writter:"Mitsutaka Hirota",
    cast:"Lizzie Freeman, Aleks Le, Shun Horie",
    rating:"7/10",
    relese:"Jan. 30,2020 JAPAN",
    detailsSRC: 'Rent-a-Girlfrien-DE.html',
    background:"bg-Rent-a-Girlfriend.jpg",
    ageRestriction:"18+",
    year:"2020",
    genre:GENRE[3],
    similarGenre1:GENRE[11] ,
    similarGenre2:GENRE[12] ,
    downloadlink:"https://mega.nz/folder/8iNjGBYJ#jXXlYwFUlwZSb3ALKS1UeQ",
    moreLink:0,
    season:["All-season"],
    duration:'26h 40min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"Rent a Girlfriend : After being dumped by his girlfriend, a college student enlists a dating service to “rent” a girlfriend who, unbeknownst to him, happens to be both a fellow student and his neighbor.",
    },
    {title:"Queen-of-Tears.png",
    poster:"queen-of-tears-poster.jpg",
    movieName:"Queen of tears",
    name:"Queen of tears Hindi, Englis, Korean(original)",
    source:"netflix",
    director:"Kim Hee-won, Jang Young-woo",
    writter:"Park Ji-eun",
    cast:"Kim Soo-hyun, Kim Ji-won, Park Sung-hoon",
    rating:"8.3/10",
    relese:"Jan. 12,2024 Korea",
    detailsSRC: 'Queen-of-tears-DE.html',
    background:"bg-Queen-of-Tears.jpg",
    ageRestriction:"16+",
    year:"2024",
    genre:GENRE[0],
    similarGenre1:GENRE[15] ,
    similarGenre2:GENRE[12] ,
    downloadlink:["https://mega.nz/folder/M7NxnSqC#eLgEojGqi4bLEH7CFZle5A",
        "https://mega.nz/folder/PB0XBBwS#zw0WlmgjbJXZx8U5nBB7Kg"],
    moreLink:2,
    season:["1-8EP","9-16EP"],
    duration:'18h 25min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"A miraculous love story of a married couple overcoming a dizzying crisis. Hae-in found out about her illness and informs a tragic news to her husband then they both tryied to over come her illness ",
    },
    {title:"Spy_x_Family-2.png",
    poster:"Spy-X-Family.jpg",
    movieName:"Spy X Family",
    name:"Spay X Family English, Japanese(origianal)",
    source:"netflix",
    director:"Kazuhiro Furuhashi, Masaaki Yuasa and more",
    writter:"Tatsuya Endo, Kazuhiro Furuhashi",
    cast:"Takuya Eguchi, Atsumi Tanezaki, Alex Organ",
    rating:"8.3/10",
    relese:"May. 20,2020 Japan",
    detailsSRC: 'Spy-X-Family-DE.html',
    background:"Spy-X-Family.jpg",
    ageRestriction:"16+",
    year:"2018",
    genre:GENRE[3],
    similarGenre1:GENRE[21] ,
    similarGenre2:GENRE[13] ,
    downloadlink:["https://mega.nz/folder/Eu8UEB7B#KgOBi5U9kf2Y4PkVZvtpxg"//S1
            , "https://mega.nz/folder/Re0SGAYQ#XeX_qR4F8hYQZgxobBA8YQ"//S2/
            ],
    moreLink:2,
    season:["season-1", "Season-2"],
    duration:'10h 40min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"Spy x Family Spy × Family A spy on an undercover mission gets married and adopts a child as part of his cover. His wife and daughter have secrets of their own, and all three must strive to keep together.",
    },
    {title:"Spirited_Away-title.png",
    poster:"SpiritedAway.jpg",
    movieName:"Sprited Away",
    name:"Sprited away English, Hindi, Japanese(original)",
    source:"netflix",
    director:"Hayao Miyazaki",
    writter:"Hayao Miyazaki",
    cast:"Rumi Hiiragi, Miyu Irino",
    rating:"8.6/10",
    relese:"Jul. 12,2003 Japan",
    detailsSRC: 'Sprited-Away-DE.html',
    background:"bg-sprited-away.jpg",
    ageRestriction:"10+",
    year:"2003",
    genre:GENRE[3],
    similarGenre1:GENRE[16] ,
    similarGenre2:GENRE[7] ,
    downloadlink:["https://mega.nz/folder/kr9GBKZQ#U4UIFOCP8p0qV-o5f-igrA"],
    moreLink:0,
    season:["Movie"],
    duration:'2h 40min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    },
    {title:"Naruto_Shippūden-title.png",
    poster:"Naruto-Shippuden-poster.jpg",
    movieName:"Naruto Shippuden",
    name:"Naruto shippuden English, Japanese(original)",
    source:"netflix",
    director:"Hayato Date, Masaaki Kumagai and more",
    writter:"Masashi Kishimoto, Masashi Kishimoto",
    cast:"Junko Takeuchi, 	Maile Flanagan",
    rating:"8.4/10",
    relese:"Nov 17,2002 Japan",
    detailsSRC: 'Naruto-Shippuden-DE.html',
    background:"bg-naruto.jpg",
    ageRestriction:"10+",
    year:"2002",
    genre:GENRE[3],
    similarGenre1:GENRE[17] ,
    similarGenre2:GENRE[18] ,
    downloadlink:["https://technews24.site/links/NHBDV2FnYno3UWRyd3F0Zld6QU8ySHdOYW55bVNUdmt3NWRuTFBjNjBDejRSc1BoV2pmTUZHWjJMOW1sbXlRbg=="],
    moreLink:0,
    season:["All-Episode"],
    duration:'20h 40min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"Naruto Uzumaki, is a loud, hyperactive, adolescent ninja who constantly searches for approval and recognition, as well as to become Hokage, who is acknowledged as the leader and strongest of all ninja in the village.",
    },
    {title:"Goodbye-Earth-title.png",
    poster:"Goodbye_Earth-poster.jpg",
    movieName:"Goodbye Earth",
    name:"Goodbye Earth multilingual. English, Korean (original)",
    source:"netflix",
    director:"Jin-min Kim",
    writter:"Jung Sung Joo",
    cast:"Ahn Eun-jin, Yoo Ah-in, Harrison Xu",
    rating:"4.3/10",
    relese:"May 26,2024 South-Korea",
    detailsSRC: 'Goodbye-Earth-DE.html',
    background:"bg-Gooodbye-Earth.jpg",
    ageRestriction:"18+",
    year:"2024",
    genre:GENRE[19],
    similarGenre1:GENRE[7] ,
    similarGenre2:GENRE[10] ,
    downloadlink:["https://mega.nz/folder/lWFxkBgT#E7sdj1sGwWGQsNFfhBUQpw"],
    moreLink:0,
    season:["Season-1"],
    duration:'7h 30min',
    trailer:"y2mate.com - Goodbye Earth  Official Trailer  Netflix_720p.mp4",
    description:"As an asteroid hurtles towards Earth with nothing to stop it, one determined teacher fights to keep her former students safe — no matter the cost.",
    },
    {title:"the-8-show-title.png",
    poster:"The_8_Show_poster.png",
    movieName:"The 8 show",
    name:"The 8 show (Dual Audio), ENG, HND",
    source:"netflix",
    director:"Han Jae-rim",
    writter:"Bae Jin Soo",
    cast:"Chun Woo-hee, Lee Joo-young, Ryu Jun-yeol",
    rating:"7.2/10", 
    relese:"May 20,2024 Korea",
    detailsSRC: 'The-8-show-DE.html',
    background:"bg-the-8-show.jpg",
    ageRestriction:"18+",
    year:"2024",
    genre:GENRE[7],
    similarGenre1:GENRE[6] ,
    similarGenre2:GENRE[20] ,
    downloadlink:["https://mega.nz/folder/QT02zYSJ#ysaqcbspHTeuOFugoBHHgg"],
    moreLink:0,
    season:["Season-1"],
    duration:'8h 20min',
    trailer:"",
    description:"Eight individuals trapped in a mysterious 8-story building participate in a tempting but dangerous show where they earn money as time passes.",
    },
    {title:"money-heist-title.png",
    poster:"money-heist-poster.jpg",
    movieName:"Money heist",
    name:"Money Heist season 1-4 (Dual Audio), ENG, HND",
    source:"netflix",
    director:"Jesús Colmenar, Alex Rodrigo, Koldo Serra, Alejandro Bazzano ",
    writter:"Álex Pina",
    cast:"Úrsula Corberó, Álvaro Morte, Itziar Ituño, Pedro Alonso,",
    rating:"7.2/10",
    relese:"Apr 7,2017 Spain",
    detailsSRC: 'Money-heist-DE.html',
    background:"bg-money-heist.jpg",
    ageRestriction:"18+",
    year:"2017",
    genre:GENRE[22],
    similarGenre1:GENRE[17] ,
    similarGenre2:GENRE[6] ,
    downloadlink:["https://mega.nz/folder/H35EUL5A#UGtiKEgli-5OgM5uiL1tpA/folder/f34GkJgC",//S1
                "https://mega.nz/folder/H35EUL5A#UGtiKEgli-5OgM5uiL1tpA/folder/W6wEEJCQ",//S2
                "https://mega.nz/folder/H35EUL5A#UGtiKEgli-5OgM5uiL1tpA/folder/CqoiCD5L",//S3
                "https://mega.nz/folder/H35EUL5A#UGtiKEgli-5OgM5uiL1tpA/folder/K6ogRBZZ"//S4
                ],
    moreLink:4,
    season:["Season-1","Season-2","Season-3","Season-4","Season-5"],
    duration:'46h 20min',
    trailer:"",
    description:"Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
    },
    {title:"ERASED_en.png",
    poster:"Erased-poster.jpg",
    movieName:"Erased",
    name:"Erased DUAL audio hevc, Japanese ,English",
    source:"0",
    director:"Tomohiko Itô",
    writer:"Taku Kishimoto, Taku Kishimoto, Kei Sambe, Yutaka Yasunaga,",
    cast:"	Shinnosuke Mitsushima, Tao Tsuchiya, Minami Takayama, ",
    rating:"8.4/10",
    relese:"Jan 8, 2016 Japan",
    detailsSRC: 'Erased-DE.html',
    background:"bg-Erased.jpg",
    ageRestriction:"13+",
    year:"2016",
    genre:GENRE[6],
    similarGenre1:GENRE[3] ,
    similarGenre2:GENRE[23] ,
    downloadlink:"https://mega.nz/folder/01tQyJIZ#v5n3_cxA_bm6LUWsmGZ0mA",
    moreLink:0,
    season:["Season-1"],
    duration:'4H 23min',
    trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
    description:"29 year old Satoru Fujinuma is sent back in time 18 years to prevent the events leading to his mother’s death, which began with a series of kidnappings in his 5th grade year.",
    },
{title:"hierarchy-title.png",
poster:"Hierarchy-tp01.jpg",
movieName:"Hierarchy",
name:"Hierarchy DUAL audio hevc, Hindi ,English",
source:"netflix", 
director:"Hye Lim Chu",
writer:"Bae Hyeon Jin",
cast:"No Jeong-ee, 	Lee Chae-Min",
rating:"6.4/10",
relese:"Jun 7, 2024 South-Korea",
detailsSRC: 'Hierarchy-DE.html',
background:"bg-Hierarchy.jpg",
ageRestriction:"16+",
year:"2024",
genre:GENRE[14],
similarGenre1:GENRE[12] ,
similarGenre2:GENRE[0] ,
downloadlink:"https://mega.nz/folder/1YYXTLpS#qDUZRtYsccyxJXSnr_BbAw",
moreLink:0,
season:["Season-1"],
duration:'7H 23min',
trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
description:"The top 0.01% of students control law and order at Jusin High School, but a secretive transfer student chips a crack in their indomitable world.",
},
{title:"Alice-in-borderland-title.png",
poster:"Alice-in-borderland-poster.jpg",
movieName:"Alice In Borderland",
name:"Alice In Borderland DUAL audio hevc, Hindi ,English",
source:"netflix", 
director:"Shinsuke Sato",
writter:"Haro Aso",
cast:"Kento Yamazaki, Tao Tsuchiya, Nijirô Murakami",
rating:"7.7/10",
relese:"Dec 10, 2020 Japan",
detailsSRC: 'Alice-in-borderland-DE.html',
background:"bg-alie-in-borderland.jpg",
ageRestriction:"18+",
year:"2020",
genre:GENRE[6],
similarGenre1:GENRE[17] ,
similarGenre2:GENRE[7] ,
downloadlink:["https://mega.nz/folder/ZqxSTB4J#SBa0lmGostnqRE3wJhILJQ/folder/t3wUyQAI",
    "https://mega.nz/folder/m0cTTRbD#7lVk9j9gjCdDj473V8d8dw"],
moreLink:2,
season:["Season-1","Season-2"],
duration:'20H 23min',
trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
description:"Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.",
},
{title:"Business-proposal-title.png",
poster:"Business-proposal.jpg",
movieName:"Business Proposal",
name:"Business Proposal DUAL audio hevc, Hindi ,English",
source:"netflix",
director:"Park Seon-ho",
writer:"Hong Bo-hee, Hae Hwa, Han Seol-hee",
cast:"Ahn Hyo-seop, Kim Sejeong", 
rating:"8.1/10",
relese:"Mar 01, 2022 South Korea",
detailsSRC: 'Business-proposal-DE.html',
background:"bg-business-proposal.jpg",
ageRestriction:"13+",
year:"2022",
genre:GENRE[12],
similarGenre1:GENRE[14] ,
similarGenre2:GENRE[24] ,
downloadlink:["https://mega.nz/folder/bbgAhKxK#CzmS6wDieItJpbSiqPT4fg/folder/CXxjlIaY"],
moreLink:0,
season:["Season-1"],
duration:'12H 23min',
trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
description:"In disguise as her friend, Ha-ri shows up to a blind date to scare him away. But plans go awry when he turns out to be her CEO — and makes a proposal.",
},
{title:"Suzume-no-tojimari-title.png",
poster:"Suzume-no-tojimari.jpg",
movieName:"Suzume no tojimari",
name:"Suzume no tojimari DUAL audio hevc, Hindi ,English",
source:"netflix", 
director:"Makoto Shinkai",
writter:"Makoto Shinkai",
cast:"Nanoka Hara, Hokuto Matsumura, Eri Fukatsu",
rating:"7.6/10",
relese:"Jun 14, 2023 Japan",
detailsSRC: 'Suzume-no-tojimari-DE.html',
background:"bg-Suzume-no-tojimari.jpg",
ageRestriction:"16+",
year:"2023",
genre:GENRE[3],
similarGenre1:GENRE[16] ,
similarGenre2:GENRE[25] ,
downloadlink:["https://mega.nz/folder/FvViDIjS#0_JYgzSOGhcDorOX5Gdh3A"],
moreLink:0,
season:["Movie"],
duration:'2h 3min',
trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
description:"A modern action adventure road story where a 17-year-old girl named Suzume helps a mysterious young man close doors from the other side that are releasing disasters all over in Japan.",
},
{title:"Drifting-Home-title.png",
poster:"Drifting-Home.jpg",
movieName:"Drifting home",
name:"Drifting home DUAL audio hevc, Hindi ,English",
source:"netflix", 
director:"Hiroyasu Ishida",
writter:" Hiroyasu Ishida, Hayashi Mori",
cast:"Mutsumi Tamura, Asami Seto, Ayumu Murase",
rating:"7.7/10",
relese:"Sep 16, 2022 Japan",
detailsSRC: 'Drifting-Home-DE.html',
background:"bg-Drifting-Home.jpg",
ageRestriction:"10+",
year:"2022",
genre:GENRE[16],
similarGenre1:GENRE[14] ,
similarGenre2:GENRE[3] ,
downloadlink:["https://mega.nz/folder/j9BUVDzD#-hCS0_CBcrX9bRSFLJygGA"],
moreLink:0,
season:["Movie"],
duration:'2H 23min',
trailer:"y2mate.com - IVE 아이브 I AM MV_1440p.mp4",
description:"One fateful summer, a group of elementary school kids set adrift on an abandoned apartment building must look within themselves to find a way back home.",
},
    ]
function AutoPushContent(){

}

    let id;
function ChangeContent(indexPosition){
    id = parseInt(indexPosition)
    Search = parseInt(indexPosition);
    const titleImage = document.getElementById('title')
    const trailerAddress = document.getElementById('video')
    const trailer = MOVIE[id].trailer
    const title  = MOVIE[id].title
    const movieDetails = MOVIE[id].detailsSRC
    const release = MOVIE[id].year
    const ageRestriction = MOVIE[id].ageRestriction
    const duration = MOVIE[id].duration
    const summary = MOVIE[id].description
    const genre = MOVIE[id].genre
    const backgroundImage = MOVIE[id].background
    const backgroundAddress = document.getElementById('background')
    document.getElementById('release').innerHTML = release
    document.getElementById('age-restriction').innerHTML = ageRestriction
    document.getElementById('genre').innerHTML = genre
    document.getElementById('duration').innerHTML = duration
    document.getElementById('description').innerHTML =summary
    const details= document.getElementById('ref')
    details.href = `details/${movieDetails}`
    titleImage.src = `details/images/title/${title}` 
    trailerAddress.src = `trailer/${trailer}`
    backgroundAddress.style.background = `url('details/images/bg/${backgroundImage}')`
    backgroundAddress.style.backgroundSize = 'cover';
    backgroundAddress.style.backgroundPosition = 'center';
}

function sliderButton(){
    document.getElementById('nav-bar').style.right = '0';
}

function slidebarDeactive(){
    document.getElementById('nav-bar').style.right = '-100%';
}

function searchBarToggleDown(){
    
    document.querySelector('.search-function').style.top = '50%';
}

function searchBarToggleUp(){
    
    document.querySelector('.search-function').style.top = '-100%';
}

function addInfo(){
    document.getElementById('title-h4').innerHTML = MOVIE[id].name
}

function showInfo(){
    document.getElementById('content').style.display = 'none'
    document.getElementById('box').style.display = 'none'
    document.getElementById('trailer').style.display = 'none'
    document.getElementById('sci').style.display = 'none'
    document.getElementById('display-form').style.display = 'block'

}

let randomNumber=0 ;
let position = 1
;
function changeSuggestion(){
    let GetPoster = MOVIE[randomNumber].poster
    let GetHrefAddress = `details/${MOVIE[randomNumber].detailsSRC}`
    let AddressToChange= document.getElementById('poster'+position)
     AddressToChange.src =`details/images/${GetPoster}`
     let movieSource = MOVIE[randomNumber].source
     if(movieSource === '0'){
        movieSource = 'Watch'
     }
     document.getElementById('REF'+position).href = GetHrefAddress 
     document.getElementById('source'+ position).innerHTML = movieSource
     if(MOVIE[randomNumber].movieName.length >16 ){
        let X = MOVIE[randomNumber].movieName.slice(0,15) 
        let Y = X+'...'
        let Z = Y
        document.getElementById('movie'+ position).innerHTML = Z
     }else{
        document.getElementById('movie'+ position).innerHTML = MOVIE[randomNumber].movieName
     }
      document.getElementById('rating'+ position).innerHTML = MOVIE[randomNumber].rating
     if( position < 18 ){
        position++
     }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let DuplicateNumbers = [];

for (let i = 0; i <= 18; i++){
    //randomNumber = getRandomNumber(0, MOVIE.length - 1)
    randomNumber++
    let Pushnumber = DuplicateNumbers.push(randomNumber)
    if(randomNumber == MOVIE.length){
        randomNumber = 0
    }
    DuplicateNumbers.push(randomNumber)
    changeSuggestion()
    console.log("here is the for loop ans", randomNumber, position)
}

changeSuggestion()

let PosterAddress1;
let PosterAddress2;
let PosterAddress3;
let PosterAddress4;
let PosterAddress5;
let PosterAddress6;

let PosterNameBySRC;

let index;

  
function findInfo(array, posterName) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].poster === posterName ) {
            return i; // Return the index if either Name or LastName matches
         }
     }
    return -1; // Return -1 if the full name is not found
 }

function findIndexByFullName(array, fullName) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].poster === fullName ) {
            return i; // Return the index if either Name or LastName matches
         }
     }
    return -1; // Return -1 if the full name is not found
 }

console.log(MOVIE[5].movieName.length)

//EXPERIMENT FOR FINDING DUPLICATE RANDOM NUMBERS
function findDuplicates(array) {
    const duplicates = [];
    const elementCount = {};

    array.forEach(item => {
        if (elementCount[item]) {
            elementCount[item]++;
        } else {
            elementCount[item] = 1;
        }
    });

    for (const [key, value] of Object.entries(elementCount)) {
        if (value > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

// Function to search for a movie
function searchMovie(movieTitle) {
    let fuck 
    for (let i = 0; i < MOVIE.length; i++) {
        if (MOVIE[i].movieName.toLowerCase() === movieTitle.toLowerCase()) {
            return i;
        }
    }
    return -1;
}
let result ;
let inputSearch;
// Event listener for Enter key press
document.getElementById("searchInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        inputSearch =event.target.value;
        const indexOfContent = searchMovie(inputSearch);
        hideContent()
        if (indexOfContent !== -1) {
            result = indexOfContent
            console.log(`Movie found ${indexOfContent}`)
            showResult()
            document.getElementById('getH4').innerText = MOVIE[indexOfContent].name
            document.getElementById('getP').innerText = MOVIE[indexOfContent].description
            let detailsLink  =MOVIE[indexOfContent].detailsSRC
            let imgShow = MOVIE[indexOfContent].poster
            document.getElementById('linkBoard').href = `details/${detailsLink}`
            document.getElementById('posterShow').src = `details/images/${imgShow}`
            
        } else {
            showContent()
            console.log(`Movie not found`)
        }
    }
});

function hideContent(){
    document.getElementById('wraper').style.display = 'none'
    document.getElementById('background').style.display = 'none'
    document.getElementById('searchResult').style.display = 'block'
}

function showResult(){
    document.getElementById('grid-container').innerHTML = `<a href="" id="linkBoard">
    <div class="grid1">
        <div class="posterShow" >
            <img src="details/images/Alice-in-borderland-poster.jpg" id="posterShow">
        </div>
        <div class="titleShow">
            <h4 id="getH4">Alice In Borderland DUAL audio hevc, Hindi ,English</h4>
            <p id="getP">Obsessed gamer Arisu suddenly finds himself in a strange, emptied-out version of Tokyo in which he and his friends must compete in dangerous games in order to survive.</p>
        </div>
    </div>
    </a>`
}

function showContent(){
   
    document.getElementById('grid-container').innerHTML = `    <div class="grid1">
                <div class="titleShow">
                    <h4 id="getH4">Opps it Seems like We don't have <h2 id="contentName">Alice in borderland</h2> </h4>
                    <p id="getP">If you can't find your desired content then re-type the movie name correctly. Maybe the name you've typed isn't correct or we currently dont have that movie. We'll make you know when your desired movie is available </p>
                    <button class="back"><a href="index.html"> Back to Home</a></button>
                </div>
            </div>`

    document.getElementById('contentName').innerText = inputSearch
}

// This will print an array of duplicated elements, if any.

