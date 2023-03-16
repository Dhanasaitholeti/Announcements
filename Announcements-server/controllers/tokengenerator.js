const jwt = require('jsonwebtoken')

const tokenGenerator = async (payload) => {
    try {
        const token = jwt.sign(payload,process.env.JWT_KEY,{expiresIn:'2d'})

        return token;

    } catch (error) {
        console.log(error)
    }
}

module.exports = tokenGenerator;