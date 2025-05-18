const express = require("express");
const router = express.Router();
const {listingSchema} = require("./schema.js");
const Listing = require("./models/listing.js");

const ExpressError = require("./utils/ExpressError.js");
const wrapAsync = require("./utils/wrapAsync.js");

// validate Listing
const validateListing = (req,res,next)=>{
    let{error}  = listingSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map((el)=>el.message).join(",");
        throw new ExpressError(400,errMsg);
    }
    else{
        return next();
    }
}





// index Route
router.get("/", wrapAsync(async(req,res)=>{
    const allListing = await Listing.find({});
     return res.render(__dirname +"/views/listings/index.ejs", {allListing});

}));
// new Route
router.get("/new",wrapAsync((req,res)=>{
    return res.render(__dirname +"/views/listings/new.ejs");
    
}));

// show Route

router.get("/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    return res.render(__dirname + "/views/listings/show.ejs",{listing});
    
}));

// Create Route
router.post("/",validateListing, wrapAsync(async(req,res,next)=>{
    
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    return res.redirect("/listings");
    
}));
//Edit Route
router.get("/:id/edit",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    return res.render(__dirname +"/views/listings/edit.ejs",{listing});
    
}));

// Update Route

router.put("/:id", wrapAsync(async(req,res,next)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    return res.redirect(`/listings/${id}`);
    
}));

router.delete("/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
   if(id){
    await Listing.findByIdAndDelete(id);
    return res.redirect("/listings");
   }
   if($in.length){
     return res.redirect("/listings");
   }
   else{
     return res.redirect("/listings");

   }
   
}));

module.exports = router;