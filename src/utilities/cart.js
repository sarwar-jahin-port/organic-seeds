const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const initializeCart = () =>{
    const initialCart = {monthlyProducts: [], products: []};
    const savedCart = localStorage.getItem('cart');
    if(!savedCart){
        localStorage.setItem('cart', JSON.stringify(initialCart));
    }
}

export const getCart = () =>{
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : null;
}

export const saveCart = (cart) =>{
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const addMonthlyItem = (month) =>{
    const cart = getCart();
    if(cart){
        for(const i of cart.monthlyProducts){
            console.log(i.pack, month);
            if(i.pack==months[month]){
                console.log("Item already on cart");
                return;
            } 
        }
        cart.monthlyProducts.push({pack: months[month], quantity: 1});
        console.log("item pushed");
        saveCart(cart);
    }
}
export const updateMonthlyItem = (pack, quantity) =>{
    const cart = getCart();
    if(cart){
        cart.monthlyProducts.forEach(item => {
            if(item.pack == pack){
                item.quantity = quantity;
            }
        });
        saveCart(cart);
    }
}
export const setQuantityOne = ()=>{
    const cart = getCart();
    if(cart){
        cart.monthlyProducts.forEach(item => item.quantity=1);
        saveCart(cart);
    }
}
export const calculateTotal = () =>{
    const cart = getCart();
    let total = 0;
    if(cart){
        total = cart.monthlyProducts.reduce((acc, m) => acc + m.quantity*150, 0);
    }
    return total;
}

export const deleteMonthlyItem = (item) =>{
    console.log(item);
    let cart = getCart();
    if(cart){
        cart.monthlyProducts = cart.monthlyProducts.filter(c => c.pack!= item.pack);
        saveCart(cart);
    }
}

export const addProducts = (item) =>{
    const cart = getCart();
    if(cart){
        cart.product.push(item);
        saveCart(cart);
    }
}

export const clearCart = () =>{
    const initialCart = {monthly: [], product: []};
    saveCart(initialCart);
}