// WrapAsync is a better way to handle error then try and catch 
// it is a function which takes a function as argument and return a function as output
module.exports = (fn) => {
    return (req , res , next) => {
        fn(req,res,next).catch(next);
    };
};