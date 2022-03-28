let input;
let total = 0;

do {
    input = prompt('Введіть число');

    if (Number.isNaN(Number(input))) {
        alert('Було написано не число, спробуйте ще раз')
    } else {
        total += Number(input);
    }
    
} while (input !== null);

alert(`Загальна сума чисел дорівнює ${total}`)







///Цикл з рандомізацією (ЗАМІТКИ)
// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 17;
// let totalSalary = 0;

// for (let i = 1; i <= 10; i += 1){
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary
//     );

//     console.log(`ЗП робітника номер ${i} - ${salary}`);

//     totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);