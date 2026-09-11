const tab = [23, 2, 19, 1, 44, 7]
let num

for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - 1; j++) {
        if (tab[j] > tab[j + 1]) {
            num = tab[j]
            tab[j] = tab[j + 1]
            tab[j + 1] = num
        }
    }
}

console.log(tab)