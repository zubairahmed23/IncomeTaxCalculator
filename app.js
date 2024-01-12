var income = document.getElementById('income');
var result = document.getElementById('result');
var btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    if(income.value){
        let amount = parseInt(income.value);
        let tax = 0;
        if(amount <= 300000){
            result.innerText = `Tax: Rs.${tax}`;
        }else if(amount > 300000 && amount <= 600000){
            tax = 5.0/100.0*amount;
            result.innerText = `Tax: Rs.${tax}`;
        }else if(amount > 600000 && amount <= 900000){
            tax = 10.0/100.0*amount;
            result.innerText = `Tax: Rs.${tax}`;
        }else if(amount > 900000 && amount <= 1200000){
            tax = 15.0/100.0*amount;
            result.innerText = `Tax: Rs.${tax}`;
        }else if(amount > 1200000 && amount <= 1500000){
            tax = 20.0/100.0*amount;
            result.innerText = `Tax: Rs.${tax}`;
        }else if(amount > 1500000){
            tax = 30.0/100.0*amount;
            result.innerText = `Tax: Rs.${tax}`;
        }
    }
});