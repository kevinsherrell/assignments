var lyrics = ["This", "hit", "that", "ice", "cold",
  "Michelle", "Pfeiffer", "that", "white",
  "gold", "This", "one", "for", "them",
  "hood", "girls", "Them", "good", "girls",
  "straight", "masterpieces", "Stylin'",
  "whilen'", "livin'", "it", "up", "in",
  "the", "city", "Got", "Chucks", "on",
  "with", "Saint", "Laurent", "Gotta", "kiss",
  "myself", "I'm", "so", "pretty"];

function lyricPrint() {
  return lyrics.join(" ")
}
// console.log(lyricPrint())

function lyricsReversed() {
  lyrics = lyrics.reverse()
  return lyrics.join(" ")

}

// console.log(lyricsReversed())

function everyOtherWord() {
  var newArr = []
  for (i = 0; i < lyrics.length; i++) {
    if(newArr.indexOf(i) === -1){
        newArr.push(lyrics[Math.floor(Math.random() * lyrics.length) + 1])
    }
  }
  return newArr.join(' ')

}
console.log(everyOtherWord())

