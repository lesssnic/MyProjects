

let rate        = [10, 12, 22, 24, 32, 35, 37];
let single      = [0, 9951, 40526, 86376, 164926, 209426, 523600];
let household   = [0, 14201, 54201, 86351, 164901, 209401, 523600];
let widow       = [0, 19901, 81051, 172751, 329851, 418851, 628300];
let separately  = [0, 9951, 40526, 86376, 164926, 209426, 314151];

let singleDeduction      = 12550;
let householdDeduction   = 18800;
let widowDeduction       = 25100;
let separatelyDeduction  = 12550;


function taxrate(){
    let tax = 0;
    let income = +incomeSum.value - singleDeduction;
    if (income < 0){
        income = 0;
    }
    let state = single;
  //  console.log(state);
    let incomeT = income;

    for (i = 0; i < rate.length; i++ ) {
        if ((income - state[i+1]) > 0) {

        tax = tax + ((state[i+1] - state[i]) * rate[i])/100;
        incomeT = income - state[i+1];

        }else {
            
            tax = Math.round((tax + (incomeT * rate[i])/100)*100)/100;
            console.log(tax);
            break;
        }
    }
    console.log(tax);

    return taxSum.innerHTML = tax + '  USD';
}
//console.log( 'Налоги:', taxrate(679886754) ,'USD');

