function validateUser(req, res, next){
    const {name, email} = req.body;

    if(!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }
    
    next(); //very important -- otherwise request will hang forever and controller will never run
}

module.exports = validateUser; //forget to add in day 7 resulted in 1st error