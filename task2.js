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
    }
];

const bucket = [
    {
        userId: 0,
        goodIds: [1, 3, 5],
        sizes: ['S', 'M', 'L'],
        amounts: [2, 4, 6],
    },
    {
        userId: 1,
        goodIds: [5],
        sizes: ['L'],
        amounts: [7],
    }
];

function addGood (userId, goodId, size, amount) {
    bucket[userId].goodIds.push(goodId);
    bucket[userId].sizes.push(size);
    bucket[userId].amounts.push(amount);
}

function deleteGood (userId, ordinalNumber) {
    bucket[userId].goodIds.shift(2);
    bucket[userId].sizes.shift(2);
    bucket[userId].amounts.shift(2);
}

function clearBucket (userId) {
    bucket[userId].goodIds = [];
    bucket[userId].sizes = [];
    bucket[userId].amounts = [];
}

function goodsTotalPrice (userId) {
    totalPrice = 0;
    for (let i=0; i < bucket[userId].goodIds.length; i++) {
        totalPrice = totalPrice + (goods[bucket[userId].goodIds[i]-1].price * bucket[userId].amounts[i])
    }
    console.log(totalPrice)
}

addGood(0, 5, 'S', 2)
console.log(bucket)
deleteGood(0, 2)
console.log(bucket)
clearBucket(1)
console.log(bucket)

goodsTotalPrice(0)
goodsTotalPrice(1)


