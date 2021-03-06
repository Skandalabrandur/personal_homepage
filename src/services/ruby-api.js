const base = 'https://kurte.is/api'
// const base = 'http://localhost:4567'

function afetch(route) {
  const response = fetch(`${base}${route}`)
    .then(response => response.json())
  return response
}

function getRhymes(word) {
  return afetch(`/rhymes/${word}`)
}

function getPoem(syllables) {
  return afetch(`/poems/poem/${syllables}`)
}

function getHaiku() {
  return afetch('/poems/haiku')
}

function getAnagrams(sentence) {
  return afetch(`/anagrams/${sentence}`)
}

export {
  getRhymes,
  getPoem,
  getHaiku,
  getAnagrams
}
