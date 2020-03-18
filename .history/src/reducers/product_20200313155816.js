var initialState = [
    {
        id: 1,
        name: 'Inphone 7 plus',
        image: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-400x400.jpg',
        descrtiption: " New ",
        Price: 500,
        Inventory: 10
    },
    {
        id: 2,
        name: 'Inphone 8 plus',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-8-plus-quoc-te-mau-trang-didongviet.jpg',
        descrtiption: " New ",
        Price: 500,
        Inventory: 11
    },
    {
        id: 3,
        name: 'Inphone 9 plus',
        image: 'https://didongviet.vn/pub/media/catalog/product//i/p/iphone-8-plus-quoc-te-mau-trang-didongviet.jpg',
        descrtiption: " New ",
        Price: 500,
        Inventory: 10
    }
]
const products = (state = initialState, action ) => {
    switch(action.type) {
        default : return [...state];
    }
} 

export default products;