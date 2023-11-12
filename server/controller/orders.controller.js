import Order from "../model/orders.model.js"

export const createOrder = async (req, res, next) => {
    try {
        const saveOrder = await Order.create(req.body)
        res.json(saveOrder)

    } catch (error) {
        next(error)
    }

}

export const getOrders = async (req, res, next) => {
    try {
        const result = await Order.find({}).populate("items.product")
        res.json(result)
    } catch (error) {
        next(error)
    }
}

export const getOrder = async (req, res, next) => {
    const { id } = req.params
    try {
        const parsedID = JSON.parse(id).id
        const orderDetails = await Order.findById({ _id: parsedID })
                .populate("customer")
                .populate("items")
                .populate("assigndDelivery")
        res.json(orderDetails)
    } catch (error) {
        next(error)
    }
}