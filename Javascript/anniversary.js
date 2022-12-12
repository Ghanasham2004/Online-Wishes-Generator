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
  'he best thing to hold onto in life is each other. Warmest Wishes and Happy Anniversary!',
  'May only the most beautiful thoughts, dreams and desires be with you in your journey of life. Happy Anniversary my friend..',
  'The perfect pair proved to be a perfect pairing.',
  'May the freshness of your love always remain.',
  'My warmest wishes to a lovely couple. Wishing you the best anniversary ever!',
  'The Dynamic Duo gets a chance to celebrate. Have a great wedding anniversary friend!',
  'Happy marriage anniversary my friend, and may you experience many more even merrier than this one.',
]
let quotes1 = [
  'Dear brother, Wish you a very happy wedding anniversary and many more. You two are my favorite people in the whole universe.',
  'Happiest Wedding Anniversary to the most perfect couple in the world. To many of us, you are an inspiration, brother.',

  'I wish your bond gets stronger and more blissful in all the years to come. Stick to each other as you always have. Happy Wedding Anniversary, brother.',
  'Happy Marriage Anniversary brother! Keep holding on to each other till death do you apart and beyond.',
  'Happy Wedding Anniversary, Brother! Am so thrilled for you as you celebrate another year of marriage with happiness and a smile on your face.',
  'Congratulations dear brother on being married to the most beautiful woman in the world for another year. Happy Wedding Anniversary!!',
  'May you both enjoy many achievements together and fight together against adversities with a lot of confidence!! Be each others strength always! Happy Anniversary!!',
]
let quotes2 = [
  'On this special occasion I’d like you to know that you’re the most amazing sister in this world. I wish you all the best on your wedding anniversary!',
  'You are the most amazing sister in the world. I’m so happy that your married life is going well. Happy anniversary. Make it last forever!',
  'Having a sister like you is a blessing that only a fortunate one can have. I am always thankful to you for being an amazing sister to me. Happy anniversary!',
  'Happy wedding anniversary dear! Enjoy this special day of your life and make sure some really good memories are made today!',
  'You have all the good qualities that our mother had. No wonder why your marriage is full of love and happiness. Happy anniversary dear sister!',
  'God blessed you with a beautiful marriage. It’s you who has to make it last forever. I know you can do it. Happy wedding anniversary!',
  'The glow in your eyes describes how full of happiness, joy and romance was your last year. I wish the happiness will remain the same forever!',
  'I’m sure your husband is proud to have a perfect wife who is beautiful both inside and out. You guys accept each other just the way you are. Happy anniversary, sister.',
  'You two complete each other in every way possible. May God bless you with many more years of blissful married life! Happy Anniversary to Sister and Brother in law!',
  'Congratulations on completing one year of your married life together. It’s amazing to see my sister turning into an amazing wife. Happy anniversary to both of you.',

]
function getQuote() {
  if (flag == 1) {
    var newquote = Math.floor(Math.random() * quotes.length)
    output.innerHTML = quotes[newquote]
    let name = document.getElementById('fname').value //for get
    let nameY = document.getElementById('name1').value //for write
    name1.innerHTML = '!! Happy Aniversary ' + name + ' !!'
  } else if (flag == 2) {
    var newquote = Math.floor(Math.random() * quotes1.length)
    output.innerHTML = quotes1[newquote]
    let name = document.getElementById('fname').value //for get
    let nameY = document.getElementById('name1').value //for write
    name1.innerHTML = '!! Happy Aniversary  ' + name + ' !!'
  } else if (flag == 3) {
    var newquote = Math.floor(Math.random() * quotes2.length)
    output.innerHTML = quotes2[newquote]
    let name = document.getElementById('fname').value //for get
    let nameY = document.getElementById('name1').value //for write
    name1.innerHTML = '!! Happy Aniversary ' + name + ' !!'
  } else {
    alert("You Haven't Selcte Greeting")
  }
}
document.addEventListener('contextmenu',event=>event.preventDefault(alert("Sorry You Can't Have Permission")));