const bcrypt = require('bcrypt');

async function hashPassword(plainTextPassword){
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
    console.log("Hashed password: ", hashedPassword); 
}

hashPassword('sarwar@#$%2024');

// $2b$10$iqahR/sObUyeYj.eCSadgOelX0okkpF8ygrUY6M1tgP2MxOR1Kf0m