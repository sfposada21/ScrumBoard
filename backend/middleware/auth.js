const jwt = require("jsonwebtoken");

const auth = async (req, res, next)  => {
    
    let jwtToken = req.header("Authorization")
    if (!jwtToken) return res.status(400).send(" Authorization denied : no token")
    //[Bearer, 3141mfdfsmfmsf]
    // 0 , 1
    jwtToken = jwtToken.split(" ")[1]
    if (!jwtToken) return res.status(400).send(" Authorization denied : no token ")
    // jwtToken = 3141mfdfsmfmsf
    try {
        const payload = await jwt.verify(jwtToken, process.env.SECRET_KEY_JWT);
        req.user = payload;
        next();

    } catch (e) {
        return res.status(400).send("Authorization denied : Invalid token")        
    }
}

module.exports = auth;