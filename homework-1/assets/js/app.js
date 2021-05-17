

let rate        = [10, 12, 22, 24, 32, 35, 37];
let single      = [0, 9951, 40526, 86376, 164926, 209426, 523600];
let household   = [0, 14201, 54201, 86351, 164901, 209401, 523600];
let widow       = [0, 19901, 81051, 172751, 329851, 418851, 628300];
let separately  = [0, 9951, 40526, 86376, 164926, 209426, 314151];

function taxrate(income, state){
    let tax = 0;
    let incomeT = income;
    for (i = 0; i < rate.length; i++ ) {
        if ((income - state[i+1]) > 0) {

        tax = tax + ((state[i+1] - state[i]) * rate[i])/100;
        incomeT = income - state[i+1];

        }else {
            
            tax = tax + (incomeT * rate[i])/100;
            break;
        }
    }
    return tax;
}
console.log( 'Налоги:', taxrate(500000, household),'USD');


995.1
3669
10087
18852
14240
109960.9
28.268