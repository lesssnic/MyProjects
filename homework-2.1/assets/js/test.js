let icaoAlphabet = {

    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'X-ray',
    Y: 'Yankee',
    Z: 'Zulu',
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    '.': 'Decimal',
    '-': 'Dash'
};

let message = prompt('Enter message you need to transform into ICAO alphabet:');

message = message.toUpperCase();

message = message.split('');

//console.log(message);

let messageSymbols = [];

console.log(messageSymbols);

for (i = 0; i < message.length; i++) {

    if (icaoAlphabet.hasOwnProperty(message[i])) {
    messageSymbols.push(icaoAlphabet[message[i]]);
    }else{
        console.log('недопустимый символ');
    }

}

//messageSymbols = messageSymbols.split(/(?=[A-Z])/);

messageSymbols = messageSymbols.join(' ');

console.log(messageSymbols);