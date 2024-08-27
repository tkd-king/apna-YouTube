// import { asyncHandler } from "../utils/asyncHandler.js";
// import { ApiError } from "../utils/apiError.js";
// import { User } from "../models/user.model.js";
// import { uploadOnCloudinory } from "../utils/cloudinory.js";
// import { ApiResponse } from "../utils/apiResponse.js";
// import mongoose from "mongoose";
// // import jwt from "jsonwebtoken"

// //asyncHandler
// const ragisterUser = asyncHandler(async (req, res) => {
//   const { fullName, email, username, password, } = req.body;
//   console.log("email: " ,email);
  
  
//   if (
//     [fullName, email, password, username].some(
//       (fields) => fields?.trim() === ""
//     )
//   ) {
//     throw new ApiError(400, "All fields are required ");
//   }
//   const existedUser  = await User.findOne({
//     $or: [{ username }, { email }],
//   })
//   if (existedUser ) {
//     throw ApiError(409,"User with email or username already exists")
    
//   }
//   // console.log(req.files)
//  const avatarLocalePath = req.files?.avatar[0]?.path
// //  const coverImageLocalePath = req.files?.coverImage[0]?.path
//   if (!avatarLocalePath) {
//     throw new ApiError(400, "Avatar file is required")
//   }

//   let coverImageLocalePath ;
//   if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0) {
//     coverImageLocalePath = req.files?.coverImage[0]?.path
    
//   }
//   const avatar = await uploadOnCloudinory(avatarLocalePath)
//   const coverImage = await uploadOnCloudinory(coverImageLocalePath)
//   if (!avatar) {
//     throw new ApiError(400, "Avatar file is required")
//   }
//   const user = await User.create({
//     fullName,
//     avatar:avatar.url,
//     coverImage:coverImage?.url || "",
//     email:email,
//     password: password,
//     username: username.toLowerCase()
//    })

//   const createdUser =  await user.findById(User._id).select(
//     "-password -refreshToken"
//   )
//   if (!createdUser) {
//     throw new ApiError(500 , "Some thing wents wrong while registring a User")
//   }
//   return response.status(201).json( 
//     new  ApiResponse(200,createdUser,"User registered successfully")
//    )
// });

// export { ragisterUser };
