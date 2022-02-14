const  words = require('../checkWordsRepetitionSentence');

describe('isWordsRepeating function', function() {
    it('should return true if a string with repeating words is given', function() {
        const result = words.isWordsRepeating('These words are repeating words',' ');
        expect(result).toBe(true);
    });
    it('should return true if a string with repeating words is given', function() {
        const result = words.isWordsRepeating('This is the special keyword in this version',' ');
        expect(result).toBe(true);
    });
    it('should return false if a string with non-repeating words is given', function() {
        const result = words.isWordsRepeating('These words are not repeating',' ');
        expect(result).toBe(false);
    });
    it('should return true if a string with repeating words is given', function() {
        const result = words.isWordsRepeating('This,is,the,special,keyword,in,this,version',',');
        expect(result).toBe(true);
    });
    it('should throw invalid input when number is given as input sentence', () => {
        expect(
        () => words.isWordsRepeating(5,' ')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when boolean is given as input sentence', () => {
        expect(
        () => words.isWordsRepeating(true,':')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when array is given as input sentence', () => {
        expect(
        () => words.isWordsRepeating([1,2,3],',')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when floating number is given as input sentence', () => {
        expect(
        () => words.isWordsRepeating(5.5,',')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when array is given as input delimiter', () => {
        expect(
        () => words.isWordsRepeating('These words are repeating words',[1,2])
        ).toThrow('Not a valid input type for delimiter.')
      })
    it('should throw invalid input when boolean is given as input delimiter', () => {
        expect(
        () => words.isWordsRepeating('These words are repeating words',false)
        ).toThrow('Not a valid input type for delimiter.')
      })
    // it('should throw size limit exceeded when large string is given as input sentence / delimiter', () => {
    //     expect(
    //     () => words.isWordsRepeating(window.LONGEST_STRING,' ')
    //     ).toThrow('String size exceeded the limit.')
    //   })
});

describe('checkWordsRepetition function', function() {
    it('should return The sentence has repeating words if a string with repeating words is given', function() {
        const result = words.checkWordsRepetition('These words are repeating words',' ');
        expect(result).toBe('The sentence has repeating words');
    });
    it('should return The sentence has repeating words if a string with repeating words is given', function() {
        const result = words.checkWordsRepetition('This is the special keyword in this version',' ');
        expect(result).toBe('The sentence has repeating words');
    });
    it('should return The sentence does not have repeating words if a string with non-repeating words is given', function() {
        const result = words.checkWordsRepetition('These words are not repeating',' ');
        expect(result).toBe('The sentence does not have repeating words');
    });
    it('should return The sentence has repeating words if a string with repeating words is given', function() {
        const result = words.checkWordsRepetition('This,is,the,special,keyword,in,this,version',',');
        expect(result).toBe('The sentence has repeating words');
    });
    it('should throw invalid input when number is given as input sentence', () => {
        expect(
        () => words.checkWordsRepetition(5,' ')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when boolean is given as input sentence', () => {
        expect(
        () => words.checkWordsRepetition(true,':')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when array is given as input sentence', () => {
        expect(
        () => words.checkWordsRepetition([1,2,3],',')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when floating number is given as input sentence', () => {
        expect(
        () => words.checkWordsRepetition(5.5,',')
        ).toThrow('Not a valid input type for sentence.')
      })
    it('should throw invalid input when array is given as input delimiter', () => {
        expect(
        () => words.checkWordsRepetition('These words are repeating words',[1,2])
        ).toThrow('Not a valid input type for delimiter.')
      })
    it('should throw invalid input when boolean is given as input delimiter', () => {
        expect(
        () => words.checkWordsRepetition('These words are repeating words',false)
        ).toThrow('Not a valid input type for delimiter.')
      })
});

