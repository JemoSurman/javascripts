function power(num,power1) {
    if(power1 === 0){
        return 1;
    }else{
        return num * power(num, power1 - 1);
    }
}

    

module.exports = power;
