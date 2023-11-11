import Product from "../model/products.model.js"

export const addProduct = async (req, res, next) => {
    const { productName, price, amount, categories } = req.body
    const { path } = req.file

    try {
        const saveProduct = await Product.create({
            productName, price, amount, categories, productImage: path
        })
        res.json(saveProduct)

    } catch (error) {
        next(error)
    }
}

export const getProducts = async (req, res, next) => {
    const { categories } = req.query;
    try {
        if (categories) {
            return res.json(await Product.find({ categories: { $in: categories.split(',') } }))
        }
        return res.json(await Product.find())
    } catch (error) {
        next(error)
    }
}

export const getProduct = async (req, res, next) => {
    const { id } = req.params
    console.log(id, "jhkh")
    try {
        return res.json(await Product.findById({ _id: id }))
    } catch (error) {
        next(error)
    }
}

export const updateProduct = async (req, res, next) => {
    const { id } = req.params
    try {
        const update = await Product.findByIdAndUpdate({ _id: id }, req.body, { new: true })
        res.json(update)
    } catch (error) {
        next(error)
    }
}