function findMissingNumber(arr){
    if (arr.length === 0) return 1;
     //თუ მასივის სიგრძე ნულის ტოლია დააბრუნოს ერთი
    const n = arr.length + 1; 
    //მასივში მყოფი ელემენტების რაოდენობა
    const expectedSum = (n*(n+1)) / 2;
    //მასივში მყოფი ელემენტების ჯამი
    // let actualSum = 0;
    // //შემოგვაქვს ცვლადი

    // for(let i = 0; i < arr.length; i++){
    //     //მასივის ელემენტებს ჩამოვუვლით ციკლით
    //     actualSum += arr[i];
    //     //actualSum-ს დავაჯამებთ თითოეულ წევრს
    // }
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    //reduce-ის მეთოდი

    return expectedSum - actualSum;
    //მასივში რეალურად არსებული ელემენტების ჯამს დავაკლებთ, ისეთი მასივის ჯამს, რომელშიც ერთი ელემენტი აკლია
    //დააბრუნებს ელემენტს




}



module.exports = findMissingNumber;
