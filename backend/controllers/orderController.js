

// Placing orders using COD Method

import orderModel from "../models/orderModel";

const placeOrder = async (req, res) => {
try {
    const {userId, items, amount, address} = req.body;

    const orderData = {
        userId,
        items,
        address,
        amount,
        paymentMethod: "COD",
        payment: false,
        date: Date.now()
    }

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, {cartData:{}})
    res.json({success:true,messsage: "Order Placed" })    
} catch (error) {
    res.json({success:false, message: error.message})
    
}

}


// Placing orders using Stripe Method

const placeOrderStripe = async (req, res) => {

    
}

// Placing orders using RazorPay Method

const placeOrderRazorPay = async (req, res) => {

}

// All orders data for Admin panel
const allOrders = async (req, res) => {

}

// user order data for user panel
const userOrders = async (req, res) => {
    
}

// update order status from admin panel
const updateStatus = async (req, res) => {

}


export { placeOrder,placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus }

