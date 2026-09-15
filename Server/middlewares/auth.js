import jwt from 'jsonwebtoken'

// Middleware Function to Decode JWT Token to get clerk Id

const authUser = async (req, res, next) => {

    try {

        const { token } = req.headers

        if (!token) {
          return  res.json({ success: false, message: "Not Authorized Login Again" })
        }

        const token_decode = jwt.decode(token)

        if (!token_decode) {
            return res.json({ success: false, message: "Not Authorized Login Again" })
        }

        req.body.clerkId = token_decode.sub
        req.body.tokenData = token_decode
        next()

        
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }

}

export default authUser