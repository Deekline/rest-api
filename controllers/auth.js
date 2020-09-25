import {USERS} from "../store/users.js";


const objectToArray = (obj) => {
    return Object.keys(obj).map(objKey => obj[objKey])
}


const signIn = (req, res, _next) => {

    const email = req.body.email
    const password = req.body.password

    const user = objectToArray(USERS).find(user => user.email === email)

    if (user) {
        if (user.password !== password) {
            const error = new Error('Wrong password')
            error.statusCode = 422
            throw error
        }

        return res.status(200).json({
            email: email,
            message: 'Greetings'
        })

    }

    const error = new Error('Wrong email')
    error.statusCode = 422
    throw error

}


const signUp = (req, res, _next) => {
    const email = req.body.email
    const password = req.body.password

    const user = objectToArray(USERS).find(user => user.email === email)

    if (user) {

        const error = new Error('User already exist')
        error.statusCode = 409
        throw error

    } else {
        USERS[objectToArray(USERS).length + 1] = {
            email: email,
            password: password
        }
        return res.status(200).json({
            email: email,
            message: 'User have been created'
        })

    }
}

export {signIn, signUp}
