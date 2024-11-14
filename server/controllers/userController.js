const User = require('../models/User');

exports.login = async(req, res) =>{
    const {username, password} = req.body;
    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(400).json({message: "Invalid credentials"});
        }

        const token = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn: '1h'});

        res.status(200).json({message: 'Login successful', token});
    } catch (error) {
        res.status(500).json({message: "Server error", error})
    }
}