const express = require("express");
const router = express.Router({mergeParams:true});
const { listingSchema,reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const {validateReview,isloggedIn,isAuthor} = require("../middleware.js");
const reviewController = require("../controller/reviews.js");


// validation  for review
// const validateReview =(req,res,next)=>{
    //     let {error} = reviewSchema.validate(req.body);
    //     if(error){
    //         let errMsg  = error.details.map((el)=>el.message).join(",");
    //         throw new ExpressError(400,errMsg);
    //     }
    //     else{
    //         next();
    //     }
    // };






// / Review
// Post Route
router.post("/",isloggedIn,validateReview,wrapAsync(reviewController.postReview ));

// Delete Route
router.delete("/:reviewId",isAuthor,wrapAsync(reviewController.delete));

module.exports= router;