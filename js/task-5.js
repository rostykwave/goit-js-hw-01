const country = prompt('Вкажіть країну доставки: ')
let credits;

switch (country.toLowerCase()) {
    case 'китай':
        credits = 100;
        alert(`Доставка в ${country} буде коштувати ${credits} кредитів`);
        break;
    case 'чилі':
        credits = 250;
        alert(`Доставка в ${country} буде коштувати ${credits} кредитів`);
        break;
    case 'австралія':
        credits = 170;
        alert(`Доставка в ${country} буде коштувати ${credits} кредитів`);
        break;
    case 'індія':
        credits = 80;
        alert(`Доставка в ${country} буде коштувати ${credits} кредитів`);
        break;
    case 'ямайка':
        credits = 120;
        alert(`Доставка в ${country} буде коштувати ${credits} кредитів`);
        break;
    
    default:
        alert('У вашій країні доставка недоступна');
}
