import {ID, ITEMS} from "../store/items.js";

const getItems = (req, res, _next) => {
    return res.status(200).json({
        items: ITEMS
    })
}

const addItem = (req, res, _next) => {
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price

    ITEMS.push({
        id: ID(),
        title: title,
        description: description,
        price: price
    })

    return res.status(201).json({
        message: 'Post created',
        item: {
            title: title,
            description: description,
            price: price
        }
    })
}


export {
    getItems,
    addItem
}
