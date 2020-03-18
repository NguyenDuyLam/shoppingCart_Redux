var initialState = [
    {
        id: 1,
        name: 'Inphone 7 plus',
        image: '',
        descrtiption: " New ",
        Price: 500,
        Inventory: 10
    },
    {
        id: 2,
        name: 'Inphone 8 plus',
        image: '',
        descrtiption: " New ",
        Price: 500,
        Inventory: 11
    },
    {
        id: 3,
        name: 'Inphone 9 plus',
        image: '',
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