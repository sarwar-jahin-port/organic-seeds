const Order = require('../models/Order');

// Controller to create new order
exports.createOrder = async (req, res) =>{
    
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({success: true, data: newOrder});
    } catch (error) {
        console.error("Error creating order: ", error);
        res.status(500).json({success: false, error: "Failed to save order"});
    }
};

// Controller to get all orders
exports.getAllOrder = async(req, res) =>{
    try {
        const orders = await Order.find();
        res.status(200).json({success: true, data: orders});
    } catch (error) {
        console.log("Error fetchind orders: ", error);
        res.status(500).json({success: false, error: "Failed to retrieve orders"});
    }
};

// Controller to get an order by ID
exports.getOrderById = async (req, res) =>{
    try {
        const order = await Order.findById(req.params.id);
        if(!order){
            return res.status(404).json({success: false, error: "Order not found"})
        }
        res.status(200).json({success: true, data: order})
    } catch (error) {
        console.error("Error fetchind order by ID: ", error);
        res.status(500).json({success: false, error: "Failed to retrieve order by ID"})
    }
}

// Controller to get orders by Customer name
exports.getOrdersByCustomerName = async(req, res) =>{
    const {customerName} = req.params;
    try {
        const orders = await Order.find({"customer_info.name": customerName});
        if(orders.length===0){
            return res.status(404).json({success: false, error: "No orders found for this customer"});
        }
        res.status(200).json({success: true, data: orders});
    } catch (error) {
        console.error("Error fetching orders by customer name: ", error);
        res.status(500).json({success: false, error: "Failed to retrieve orders by customer name"})
    }
}

// Controller to get orders by phone number
exports.getOrdersByPhoneNumber = async(req, res) =>{
    const {phoneNumber} = req.params;
    try {
        const orders = await Order.find({"customer_info.phone": phoneNumber});
        if(orders.length === 0) {
            return res.status(404).json({success: false, error: "No orders found for this phone number"});
        }        
        res.status(500).json({success: true, data: orders});
    } catch (error) {
        console.error("Error fetching orders by phone number: ", error);
        res.status(500).json({success: false, error: "Failed to retrieve orders by phone number"})
    }
}

// Controller to get orders by division
exports.getOrderByDivision = async (req, res) =>{
    const {division}= req.params;
    try {
        const orders = await Order.find({"customer_info.location.division": division});
        if(orders.length===0){
            return res.status(404).json({success: false, error: "No orders found for this division"});
        }
        res.status(200).json({success: true, data: orders});      
    } catch (error) {
        console.error("Error fetching orders by division: ", error);
        res.status(500).json({success: false, error: "Failed to retrieve orders by division"});
    }
};

// Controller to get orders by sub_division
exports.getOrderBySubDivision = async(req, res) =>{
    const {sub_division} = req.params;
    try {
        const orders = await Order.find({"customer_info.location.sub_division": sub_division});
        if(orders.length===0){
            return res.status(404).json({success: false, error: "No orders found for the sub division"});
        }
        res.status(200).json({success: true, data: orders})
    } catch (error) {
        console.error("Error fetching data by sub divison", error);
        res.status(500).json({success: false, error: "Failed to retrieve orders by sub division"});
    }
}