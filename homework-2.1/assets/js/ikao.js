

let ikao = {
    A	:	'Alfa ',
    B	:	'Bravo ',
    C	:	'Charlie ',
    D	:	'Delta ',
    E	:	'Echo ',
    F	:	'Foxtrot ',
    G	:	'Golf ',
    H	:	'Hotel ',
    I	:	'India ',
    J	:	'Juliett ',
    K	:	'Kilo ',
    L	:	'Lima ',
    M	:	'Mike ',
    N	:	'November ',
    O	:	'Oscar ',
    P	:	'Papa ',
    Q	:	'Quebec ',
    R	:	'Romeo ',
    S	:	'Sierra ',
    T	:	'Tango ',
    U	:	'Uniform ',
    V	:	'Victor ',
    W	:	'Whiskey ',
    X	:	'X-ray ',
    Y	:	'Yankee ',
    Z	:	'Zulu ',
    0	:	'Zero ',
    1	:	'One ',
    2	:	'Two ',
    3	:	'Three ',
    4	:	'Four ',
    5	:	'Five ',
    6	:	'Six ',
    7	:	'Seven ',
    8	:	'Eight ',
    9	:	'Nine ',
    '.'	:	'Point ',
    ' ' :   'Space ',
    '-'	:	'Dash '
}

function loadIkao() {

let strUpperCase = inputData.value.toUpperCase();

let strWords = '';

for ( i = 0; i < strUpperCase.length; i++ ) {

    if (ikao.hasOwnProperty(strUpperCase[i])) {
        
        strWords = strWords + ikao[strUpperCase[i]];

    }else {
        
        strWords = strWords ;

        let temp = strUpperCase.split('');

            let tempt = temp.splice(0, temp.length - 1);

            tempt = tempt.join('');
            
            inputData.value = `${tempt}`;
    }
}
     outputData.value = strWords;
}