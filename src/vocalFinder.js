// Función para obtener la oración
function getSentence(sentence) {
    return sentence;
  }
  
  // Función para buscar vocales en la oración
  function searchVocals(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const foundVowels = [];
  
    for (let char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
        foundVowels.push(char);
      }
    }
  
    return foundVowels;
  }
  
  // Función para eliminar duplicados de una lista
  function deleteDuplicity(list) {
    return [...new Set(list)];
  }
  
  // Función para obtener las vocales únicas de una oración
  function getVocals(sentence) {
    const foundVowels = searchVocals(sentence);
    const uniqueVowels = deleteDuplicity(foundVowels);
    return uniqueVowels.join(',');
  }
  
  module.exports = { getSentence, searchVocals, deleteDuplicity, getVocals };
  