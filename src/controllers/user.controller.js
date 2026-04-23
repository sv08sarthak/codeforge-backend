const getHello = (req, res) => {
    res.json({
        message: "Hello from controller... or bhai day 3 pr ho"
    });


    

};

const getProfile = (req, res) =>{
        res.json({
            name: "Sarthak",
            role: "Backend Developer"
        });
    };


const getStatus = (req, res) => {
    res.json({
        message: "This one is testing and designed by me..."
    });
};

const getUserById = (req, res) => {

    console.log(req.params); //add here

    
    const userId = req.params.id;

    res.json({
        message: "User fetched",
        userId: userId
    });
};
module.exports = {
    getHello,
    getProfile,
    getStatus,
    getUserById
};