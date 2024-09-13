export const initializeCart = () =>{
    const initialCart = {monthly: [], product: []};
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

export const addMonthlyItem = (item) =>{
    const cart = getCart();
    if(cart){
        for(const i of cart.monthly){
            if(i==item) return;
        }
        cart.monthly.push(item);
        saveCart(cart);
    }
}

export const deleteMonthlyItem = (item) =>{
    let cart = getCart();
    if(cart){
            cart.monthly = cart.monthly.filter(c => c!= item);
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