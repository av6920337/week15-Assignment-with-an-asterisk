let numbers = [];

//Заполнение массива целыми числами от -10 до 10
for(let i = -10; i <= 10; i++){
    numbers.push(i);
    // console.log(numbers);
}

//Удаление всех отрицательных чисел из массива
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        numbers.splice(i, 1);
        i --; // уменьшаем счетчик, так как массив уменьшился на один элемент
    
        // console.log(numbers);
    }
}

//Возведение каждого числа в квадрат
for (let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i] ** 2;
    // console.log(numbers);
}

//Отсортирование числа в порядке убывания
numbers.sort((a, b )=> b - a)
console.log(numbers);