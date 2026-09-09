let num = [1, 1, 4, 2, 4, 7];

let tabl = [];

let k = 0;

for (let i = 0; i < num.length; i++) {

    let repetition = false;

    for (let a = 0; a < num.length; a++) {

        if (i != a && num[i] === num[a]) {
            repetition = true;
        }

    }

    if (repetition) {

        let deja = false;

        for (let j = 0; j < tabl.length; j++) {

            if (tabl[j] === num[i]) {
                deja = true;
            }

        }

        if (!deja) {
            tabl[k] = num[i];
            k++;
        }
    }
}

console.log(tabl);  