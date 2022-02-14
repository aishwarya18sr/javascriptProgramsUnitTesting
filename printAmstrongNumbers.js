function isAmstrongNumber(number)
{
    if(! Number.isInteger(number))
    {
        throw new Error('Not a valid input type.');
    }
    if(number < 0)
    {
        throw new Error('Negative number is an invalid input.');
    }
    if(number > Number.MAX_SAFE_INTEGER)
    {
        throw new Error('Input limit exceeded the range');
    }
    const actualNumber = number;
    let sum = 0;
    let lastDigit;
    const numberOfDigits = number.toString().length;
    while(number>0)
    {
        lastDigit = number % 10;
        sum+= lastDigit**numberOfDigits;
        number = Math.floor(number / 10);
    }
    return (sum===actualNumber)
}

function printAmstrongNumber(number)
{
    if(! Number.isInteger(number))
    {
        throw new Error('Not a valid input type.');
    }
    if(number < 0)
    {
        throw new Error('Negative number is an invalid input.');
    }
    if(number > Number.MAX_SAFE_INTEGER)
    {
        throw new Error('Input limit exceeded the range');
    }
    const amstrongNumbers = new Set();
    for(let i = 0; i <= number; i++)
    {
        if(isAmstrongNumber(i))
        {
            amstrongNumbers.add(i)
        }
    }
    return amstrongNumbers;
}

module.exports = {
    isAmstrongNumber,
    printAmstrongNumber
};

// const N = 1000;
//console.log(printAmstrongNumber(N));