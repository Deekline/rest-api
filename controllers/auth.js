import {USERS} from "../store/users.js";


const objectToArray = (obj) => {
    return Object.keys(obj).map(objKey => obj[objKey])
}


const signIn = (req, res, _next) => {
    const email = req.body.email
    const password = req.body.password

    const user = objectToArray(USERS).find(user => user.email === email)

    if (user) {
        return user.password === password ? res.status(200).json({
            email: email,
            message: 'Greetings'
        }) : res.status(404).json({
            message: 'Wrong password'
        })
    }

    return res.status(404).json({
        message: 'Wrong email'
    })
}


const signUp = (req, res, _next) => {
    const email = req.body.email
    const password = req.body.password

    const user = objectToArray(USERS).find(user => user.email === email)

    if (user) {
        return res.status(409).json({
            message: 'User already exist'
        })
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
