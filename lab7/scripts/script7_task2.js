function checkPrime(form) {

    var num = Number(form.num.value);
    var result = "";

    if (isNaN(num) || !Number.isInteger(num) || form.num.value === "" || num < 1) {
        result = "Ошибка: введите натуральное число (целое положительное)!";
    } else {

        if (num === 1) {
            result = "1 - не является простым числом";
        } else {
            var isPrime = true;
            

            for (var i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break; 
                }
            }
            
            if (isPrime) {
                result = num + " - простое число";
            } else {
                result = num + " - составное число (не простое)";
            }
        }
    }
    

    form.res.value = result;
}