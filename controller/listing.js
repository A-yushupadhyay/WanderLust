const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});


module.exports.index = async(req,res)=>{
    const allListing = await Listing.find({});
    return res.render("/Major Project -1/views/listings/index.ejs", {allListing});

}

module.exports.new = (req,res)=>{
    return res.render( "/Major Project -1/views/listings/new.ejs");
    
}
module.exports.show = async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("error","Listing you requested for does not exists !");
        return res.redirect("/listings");
    }
    return res.render("/Major Project -1/views/listings/show.ejs",{listing});
    
}
module.exports.create = async(req,res)=>{
    // if (!req.body.listing.location) {
    //     req.flash("error", "Location is required!");
    //     return res.redirect("/listings");
    // }
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
     .send();
    // // console.log(response);
    // console.log(response.body.features[0]);
    
    // if(!response.body.features){
    //     req.flash("error", "incorrect information");
    //     return res.redirect("/listings");
    // }
    
    

    let url = req.file.path;
    let filename = req.file.filename;
    

    
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    console.log(response.body.features);
    newListing.geometry = response.body.features[0].geometry;
    await newListing.save();

    req.flash("success","New Listing Created !");
    return res.redirect("/listings");
    
}
module.exports.edit = async(req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing you requested for does not exists !");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl =  originalImageUrl.replace("/upload","/upload/h_200/w_250");

    return res.render("/Major Project -1/views/listings/edit.ejs",{listing,originalImageUrl});
    
}

module.exports.update = async(req,res)=>{
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id,{ ...req.body.listing });
    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();

    }
    req.flash("success","Listing Updated!");
    return res.redirect(`/listings/${id}`);
    
}
module.exports.delete = async(req,res)=>{
    let {id} = req.params;
   if(id){
    console.log(id);
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted !");
    return res.redirect("/listings");
   }
   
}