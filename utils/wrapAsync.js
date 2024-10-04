module.exports=(fn)=>{
    return(req,res,next)=>{
        // console.log("ok wrap");
        fn(req,res,next).catch(next);
    }
}