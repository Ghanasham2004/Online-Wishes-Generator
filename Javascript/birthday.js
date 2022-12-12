let flag = 0;
function getop() {
    let item = document.getElementById('btnselect').value;
    console.log(item)
    if (item == "Friend") {
        flag = 1;
    } else if (item == "Brother") {
        flag = 2;
    }
    else if (item == "Sister") {
        flag = 3;
    }
}
let btn = document.getElementById('btn');
let output = document.getElementById('output');

let quotes = [
    "sFeeling so grateful you entered my life when you did. Have the best day, darling",
    "Happy birthday to the beautiful, intelligent, charming person I call my best friend!",
    "I hope you have the most fabulous celebration on this special day!",
    "I hope your day is as fabulous as you are! Much love and many smooches.",
    "How lucky I am to grow up alongside such a caring, kind, goofy person. I hope you spend the day in good company!",
    "Wowee, another loop around the sun. HAPPY BIRTHDAY!!",
    "I wish you a beautiful year of good friends, love, art, and incredible food. Love you!",
    "Happy birthday! Hope you have a warm day, I'm thinking of you always, and I'll see you soon!",
    "Thank you for always giving great advice and never blaming me when I don't take it!",
    "Congrats on another trip around the sun! I hope this day is full of cake, memories, and fun.",
    "I can't wait to spend the night celebrating my favorite person! I adore you to bits!",
    "Wishing you the happiest of birthdays, and another amazing year around the sun by your side!",
];
let quotes1 = [
    "Happy birthday, brother! May God fulfill everything you desire and grant you all success.",
    "Happy birthday brother. Thank you so much for your support, love, and care.",
    "Happy birthday dear brother. May your life be filled with sweet moments, happy smiles, and blissful memories. May this day give you a new beginning in life.",
    "Happy Birthday Brother. Many many happy returns of your day.",
    "Happy birthday to my brother. Enjoy your special day to the fullest! Lots of love for you.",
    "Happy birthday to my brother and my best friend. May God bless you with all His blessings and care.",
    "I am forever grateful to have a brother like you. Happy Birthday to the best brother in this whole world!",
    "Glad I have got one person with whom I can be weird. Happy birthday, my beloved brother.",
];
let quotes2 = [
    "May God be with you for good and for bad. May He bless you today and every day. Happy Birthday!",
    "I pray the Lord Almighty to grant you eternal joy in life. Have the happiest Birthday.",
    "May God uplift you in your career, finances, and fulfills all your silent prayers. Happy birthday.",
    "Every time I look at you, I silently chant a whisper of gratitude to God for having someone like you in my life. Happy birthday, sunshine!",
    "My friend, I hope to God that there will never be a lack of love and care in your life. Happy Birthday.",
    "May God grant you success in your aspirations! Happy birthday, my love.",
    "Happy Birthday! May God surprise you with things you have always wanted. Have a blast!",
    "Move from glory to glory, May the Almighty save you from evil eyes. I wish you the happiest of birthdays.",
];
function getQuote() {

    if (flag == 1) {

        var newquote = Math.floor(Math.random() * quotes.length)
        output.innerHTML = quotes[newquote];
        let name = document.getElementById('fname').value;//for get
        let nameY = document.getElementById("name1").value;//for write
        name1.innerHTML = "!! Happy Birthday " + name + " !!";

    } else if (flag == 2) {
        var newquote = Math.floor(Math.random() * quotes1.length)
        output.innerHTML = quotes1[newquote];
        let name = document.getElementById('fname').value;//for get
        let nameY = document.getElementById("name1").value;//for write
        name1.innerHTML = "!! Happy Birthday " + name + " !!";
    } else if (flag == 3) {
        var newquote = Math.floor(Math.random() * quotes2.length)
        output.innerHTML = quotes2[newquote];
        let name = document.getElementById('fname').value;//for get
        let nameY = document.getElementById("name1").value;//for write
        name1.innerHTML = "!! Happy Birthday " + name + " !!";
    } else {
        alert("You Haven't Selcte Greeting");
    }
}

document.addEventListener('contextmenu',event=>event.preventDefault(alert("Sorry You Can't Have Permission")));