

showNumbers(10)

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        const numbers = (i % 2 === 0) ? 'Even' : 'Odd'
        console.log(i, numbers);

    }
}


