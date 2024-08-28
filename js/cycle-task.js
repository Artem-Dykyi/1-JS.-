for (let i = 0; i <= 10; i ++) {
    console.log(i)
}


for (let i = 2; i < 21; i ++) {
        if (i % 2 !== 0) {
            continue;
        }
            console.log(i)
    }


const number = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

let fromOne = ""
for (let i = 0; i <= 5; i ++) {
    fromOne += i
    console.log(i);

}
console.log(fromOne)

// не зовсім зрозумів яким способом потрібно було виводити /|\

for (let i = 0; i <= 10; i ++) {
    console.log(i);
    if (i === 7) {
        break;
    }   
}


for (let i = 0; i < 9; i ++) {
    console.log(i)
    if (i >= 5) {
        break;
    }
}

for (let i = 0; i <= 20; i ++) {
    if (i % 3 === 0 ) {
        continue;
    }
    console.log(i)
}

