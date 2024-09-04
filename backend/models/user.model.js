import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    lastlogin: { type: Date, default: Date.now },
    isVerified: { type: Boolean, default: false },
    resetPasswordToken: { type: String, required: true },
    resetPasswordExpires: { type: Date, default: Date.now },
    verificationToken: { type: String, required: true },
    verificationTokenExpires: { type: Date, default: Date.now },
},{timestamps:true});

export const User = mongoose.model('User', userSchema);

//created and updated app will be automatically add in the app