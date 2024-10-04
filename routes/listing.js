const express = require("express");
const router = express.Router();
const {listingSchema} = require("../schema.js");
const Listing = require("../models/listing.js");

const ExpressError = require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { isloggedIn, isOwner,validateListing} = require("../middleware.js");
const listingController = require("../controller/listing.js");
const multer = require("multer");

const {storage} = require("../cloudConfig.js");
const upload = multer({ storage});


// console.log(__dirname);



// validate Listing
// const validateListing = (req,res,next)=>{
//     // console.log(req.body);

//     let {error}  = listingSchema.validate(req.body);
//     console.log(error);
//     if(error){
//         let errMsg = error.details.map((el)=>el.message).join(",");
//         throw new ExpressError(400,errMsg);
//     }
//     else{
//         return next();
//     }
// }






// index Route
router.route("/")
  .get(wrapAsync(listingController.index))
  .post(isloggedIn,upload.single("listing[image]"),validateListing,wrapAsync(listingController.create));
// new Route
router.get("/new",isloggedIn,wrapAsync(listingController.new));

// show Route  populate({path:"reviews",populate:{path:"author"}})

router.route("/:id")
  .get(isloggedIn,wrapAsync(listingController.show))
  .put(isloggedIn,isOwner,upload.single("listing[image]"),validateListing,wrapAsync(listingController.update))
  .delete(isloggedIn,isOwner,wrapAsync(listingController.delete));



//Edit Route
router.get("/:id/edit",isloggedIn,isOwner,wrapAsync(listingController.edit));


//delete

module.exports = router;