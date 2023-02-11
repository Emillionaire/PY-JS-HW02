// Goods list
const goods = [
    {
        id: 1,
        name: 'T-shirt',
        description: 'Cool for summer!',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 500,
        available: true,
    },
    {
        id: 2,
        name: 'Dress',
        description: "It's for women (not always)...",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1000,
        available: true,
    },
    {
        id: 3,
        name: 'Pants',
        description: 'For buisnessmen.',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1500,
        available: false,
    },
    {
        id: 4,
        name: 'Skirt',
        description: 'So short!',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 100,
        available: true,
    },
    {
        id: 5,
        name: 'Jeans',
        description: 'Unisex!',
        sizes: ['S', 'M', 'L', 'XL'],
        price: 800,
        available: true,
    },
];

// Basket content
const basket = [
    {
        good: 3,
        amount: 2,
    },
    {
        good: 1,
        amount: 4,
    },
];

// Add good to basket
function addGood (good, amount) {
    let iter = {
        good: good,
        amount: amount,
    }

    for (i = 0; i < basket.length; i++) {
        if (iter.good == basket[i].good) {
            console.log(basket[i].amount)
            console.log(iter.amount)
            basket[i].amount += iter.amount
            break;
        } else if (i + 1 == basket.length) {
            basket.push(iter)
            break;
        }
    }
};

// Delete good from basket
function deleteGood (good) {
    for (i = 0; i < basket.length; i++) {
        if (basket[i].good == good) {
            basket.splice(i, 1)
        }
    }
};

// Clear all goods from basket
function clearBasket () {
    basket.splice(0, basket.length)
};

// Calculate basket total price and amount of goods
function totalPrice () {
    totalAmount = 0
    totalSumm = 0
    for (i = 0; i < basket.length; i++) {
        for (j = 0; j <= goods.length - 1; j++) {
            if (basket[i].good == goods[j].id) {
                totalSumm += basket[i].amount * goods[j].price
                totalAmount += 1
            }
        }
    }
    answer = {
        'totalAmount': totalAmount,
        'totalSumm': totalSumm,
    }
    return answer
};

// Call function
totalPrice()
console.log(basket)
addGood(2, 7)

totalPrice()
console.log(basket)
addGood(2, 7)

totalPrice()
console.log(basket)
addGood(1, 90)

totalPrice()
console.log(basket)
deleteGood(1)

totalPrice()
console.log(basket)
clearBasket()

totalPrice()
console.log(basket)
