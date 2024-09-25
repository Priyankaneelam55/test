const mongoose=require('mongoose')
const Mobiles=mongoose.Schema({
    brandname:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('brandname',Mobiles)