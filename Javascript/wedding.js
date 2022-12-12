let flag = 0
function getop() {
  let item = document.getElementById('btnselect').value
  console.log(item)
  if (item == 'Friend') {
    flag = 1
  } else if (item == 'Brother') {
    flag = 2
  } else if (item == 'Sister') {
    flag = 3
  }
}
let btn = document.getElementById('btn')
let output = document.getElementById('output')

let quotes = [
  'Dearest friend, I am delighted at the news of your wedding! Congratulations as you embark on a new journey of your life. I wish you a happy married life!',
  'Being married is like going through the seasons. Every day is different, but you enjoy them all because they are filled with love. May your life be filled with immense love and happiness!',
  'I’ve seen how you two look at each other – it’s intense, and I wish it stays that way forever and ever, my dearest friends.',
  'Best wishes, my dearest friend! I’m glad that you two found each other. You are an inspiration for people around you! May your happiness last forever!',
  'Warmest wishes to both of you! Many congratulations on the next chapter of your life!',
  'Wishing you a magnificent ceremony filled with zillions of lovely memories!” Warm wishes to you and your new life partner.',
  'Congratulations to the beautiful couples I know! Today, I wish you all the happiness your hearts could desire!',
  'I hope you grow closer and your love grows stronger. Happy wedding!',
  'Even when the seas of life are rough, may your enduring love for each other help you sail through. Big Congrats!',
  'You were truly meant to be together. I couldn’t be happier for you as I watch you say, “I do.” Best wishes on your marriage!',
  'May your life be as joyful and magical as the love and bond that you two share! Wishing you a happy and prosperous married life ahead!',
]
let quotes1 = [
  'Brother, I am so happy for your newest voyage in life. Finding a soul mate is a rare wondrous event.',
  'Give a cheer for my brother, he found his better half. On this special day, I commend you both and wish my sister-in-law a warm welcome.',
  'Being among you this day brings me the greatest bliss. I give you my sincerest admiration and love. Chresh every moment of your new life together.',
  'My dear Brother, You deserve nothing but the best: The true love and each other!',
  'Brother, you were the light in my life through childhood, now it’s time you lighten up your wifes heart!',
  'Congratulations, I cant wait to celebrate your wedding with you. To see my little brother tying the knot is sneaking and I am so happy for you.',
  'Congratulations my loving brother. The whole family is just so pleased to see you go on this exciting journey with your soul mate. We wish you all the best!',
  'I raise my glass to you my brother and wishing you all the best for a perfect wedding and truly happy marriage. Congratulations.',
  'All the wonderful memories you make today will be cherished for a lifetime, and you can look back on when youre old and grey with your beloved wife. Congratulations.',
  'There is no one I know who deserves to have found love like you, my brother. Congratulations and enjoy every second of today.',
]
let quotes2 = [
  'May your wedding day be as perfect as you are, sister: AWESOME!',
  'Dont make your husbands life as difficult as you made mine, my dear sister. Just kidding, I wish both of you a pleasant and joyful married life',
  'May you look back on your life with fondness and look forward to the wonderful future that marriage will bring, my deserving sister.',
  'Congratulations to the bride and groom! It is now time to get started. On the subject of the baby boom! Im so excited to be an uncle! I love you, my sister.',
  'I am extremely happy that youve finally met the man of your dreams. Congratulations on your wedding!',
  'My sweetest sister, I m sending you my best wishes on your special day!',
  'Finally, the day of your wedding is here, dear sister. Congratulations on your special day. Dont get too worked up.',
  'My dear sister, we hope that in the same way that you have filled our lives with joy, you will fill your husbands life with joyous moments and great happiness. Congratulations!',
  'May you both fall in love again and again with the same propensity! Happy married life.',
  'You are the sweetest bride I have ever seen, and I hope your joy lasts forever. God bless both of you.',
  'I wish you a happy married life, dear sister. May all of your wishes come true!',

  'My lovely little sister, you have the best man for a life partner, and he will cherish you all his life. Have a happy married life.',
]
function getQuote() {
  if (flag == 1) {
    var newquote = Math.floor(Math.random() * quotes.length)
    output.innerHTML = quotes[newquote]
    let name = document.getElementById('fname').value //for get
    let nameY = document.getElementById('name1').value //for write
    name1.innerHTML = '!! Wedding Of ' + name + ' !!'
  } else if (flag == 2) {
    var newquote = Math.floor(Math.random() * quotes1.length)
    output.innerHTML = quotes1[newquote]
    let name = document.getElementById('fname').value //for get
    let nameY = document.getElementById('name1').value //for write
    name1.innerHTML = '!! Wedding Of ' + name + ' !!'
  } else if (flag == 3) {
    var newquote = Math.floor(Math.random() * quotes2.length)
    output.innerHTML = quotes2[newquote]
    let name = document.getElementById('fname').value //for get
    let nameY = document.getElementById('name1').value //for write
    name1.innerHTML = '!! Wedding Of ' + name + ' !!'
  } else {
    alert("You Haven't Selcte Greeting")
  }
}
document.addEventListener('contextmenu',event=>event.preventDefault(alert("Sorry You Can't Have Permission")));