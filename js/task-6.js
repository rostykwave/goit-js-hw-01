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