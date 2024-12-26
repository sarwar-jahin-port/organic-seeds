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

// Controller to get rts orders
exports.getRTSOrders = async (req, res) => {
    try {
        const rtsOrders = await Order.find({ status: 'rts' });
        res.status(200).json({ success: true, data: rtsOrders });
    } catch (error) {
        console.error("Error fetching RTS orders: ", error);
        res.status(500).json({ success: false, error: "Failed to retrieve RTS orders" });
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

// Controller to update order status
exports.updateOrderStatus = async (req, res) => {
    const { id } = req.params; // Extract order ID from URL parameters
    const { status } = req.body; // Extract new status from the request body

    // Validate the new status
    const validStatuses = ['rts', 'shipped', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
        return res.status(400).json({ success: false, error: "Invalid status value" });
    }

    try {
        // Find the order by ID and update the status
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true } // Return the updated document
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, error: "Order not found" });
        }

        res.status(200).json({ success: true, data: updatedOrder });
    } catch (error) {
        console.error("Error updating order status: ", error);
        res.status(500).json({ success: false, error: "Failed to update order status" });
    }
};