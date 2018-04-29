function wordFreq(string) {
    var words = string.split(' ');
    console.log('words', words)
    var freqHash = {};
    words.forEach(function(word) {
        if (!freqHash[word]) {
          //if not already in hash, assing it 0 val
            freqMap[word] = 0;
        }
        //otherwise increment count by 1
        freqMap[word] += 1;
    });

    return freqMap;
}

console.log(wordFreq("nd tierra intermitente (Ediciones Alayubia). Their third full-length book lo terciario/the tertiary is forthcoming in 2018 from Timeless, Infinite Light. Currently, they are Co-Editor of The Wanderer, and Co-Editor of Puerto Rico en mi corazón, a collection of bilingual broadsides of contemporary Puerto Rican poets published by Anomalous Press, of which 100% of sales will be donated directly to Taller Salud to assist Puerto Rico in recovering from Hurricane Maria. Alongside their partner, they have raised money and organi"));
