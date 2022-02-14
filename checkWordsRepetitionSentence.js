function isWordsRepeating(sentence,delimiter) {
    if(sentence === delimiter)
    {
        return false;
    }
    if (!(typeof sentence === 'string' || sentence instanceof String))
    {
        throw new Error('Not a valid input type for sentence.');
    }
    if (!(typeof delimiter === 'string' || delimiter instanceof String))
    {
        throw new Error('Not a valid input type for delimiter.');
    }
    const maxStringLength = 2**53 - 1;
    const sentenceLength = sentence.length;
    const delimiterLength = delimiter.length;
    if(sentenceLength > maxStringLength || delimiterLength > maxStringLength)
    {
        throw new Error('String size exceeded the limit.');
    }
    sentence = sentence.toLowerCase();
    const words = sentence.split(delimiter);
    let distinctWords = new Set();
    const numOfWords = words.length;
    for(let wordIndex = 0; wordIndex < numOfWords; wordIndex++) {
        if(distinctWords.has(words[wordIndex])) {
            return true;
        }
        distinctWords.add(words[wordIndex]);
    }
    return false;
}

function checkWordsRepetition(sentence,delimiter)
{
    if (!(typeof sentence === 'string' || sentence instanceof String))
    {
        throw new Error('Not a valid input type for sentence.');
    }
    if (!(typeof delimiter === 'string' || delimiter instanceof String))
    {
        throw new Error('Not a valid input type for delimiter.');
    }
    const maxStringLength = 2**53 - 1;
    const sentenceLength = sentence.length;
    const delimiterLength = delimiter.length;
    if(sentenceLength > maxStringLength || delimiterLength > maxStringLength)
    {
        throw new Error('String size exceeded the limit.');
    }
    if(isWordsRepeating(sentence,delimiter))
    {
        return ('The sentence has repeating words')
    }
    else
    {
        return ('The sentence does not have repeating words')
    }
}

//const sentence = 'These words are repeating words';
//const sentence = ',';
//console.log(checkWordsRepetition(sentence,','));

module.exports = {
    isWordsRepeating,
    checkWordsRepetition
};