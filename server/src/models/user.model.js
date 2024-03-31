import mongoose, {Schema} from 'mongoose'

const UserAddressSchema = new Schema({
    lineOne: {
        type: String,
        required: true,
    },
    lineTwo:{
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
})

const UserSchema = new Schema({
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phonenumber: {
            type: Number,
            required: true,
        },
        fullname:{
            type: String,
            required: true,
            trim: true,
            index: true,
        },
        avatar:{
            type: String, // Cloudinary URL Here
            required: true,
        },
        password:{
            type: String,
            required: [true, "Password is Required"],
        },
        address: {
            type: [UserAddressSchema],
        }
        // refreshToken:{
        //     type: String,
        // },
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model("User", UserSchema)