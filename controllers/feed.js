const getPosts = (req, res, _next) => {
    return res.status(200).json({
        posts: [{
            title: 'First Post',
            content: 'This is first post!'
        }]
    })
}

const addPost = (req, res, _next) => {
    const title = req.body.title
    const content = req.body.content
    return res.status(201).json({
        message: 'Post created',
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    })
}


export {
    getPosts,
    addPost
}
