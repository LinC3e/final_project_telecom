const showAuthFormSignUp = (req,res) => {
    res.render("auth/signup")
}
const signup = (req,res) => {
    
}
const showAuthFormSignIn = (req,res) => {
    res.render("auth/signin")
}
const signin = (req,res) => {
    
}
const logout = (req,res) => {
    res.send("logout")
}

module.exports = {
    showAuthFormSignUp,
    signup,
    showAuthFormSignIn,
    signin,
    logout
}