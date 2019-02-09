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
  for (i = 0; i < lyrics.length; i += 2) {
    newArr.push(lyrics[i])
  }
  return newArr.join(" ")

}
// console.log(everyOtherWord())

function everyOtherTwoSwitched() {
  var  resultArr = []
  for (var i = 0; i < lyrics.length; i += 2) {
    resultArr.push(lyrics[i+1])
    resultArr.push(lyrics[i])
    if(resultArr[i]===undefined){
      resultArr.splice(i,1)
    }
  }
  return resultArr
}
console.log(everyOtherTwoSwitched())