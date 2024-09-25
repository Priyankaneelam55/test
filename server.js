const express= require('express');
const app = express();
const mongoose=require('mongoose');
const Mobiles=require('./model')

// middleware 
app.use(express.json())

app.post('/addbrands',async(req,res)=>{
    const {brandname}=req.body;
    try {
        const newData=new Mobiles({brandname});
        await newData.save();
        // return res.json(await Mobiles.find());   
        const allBrands = await Mobiles.find().lean(); // Use .lean() for plain JS objects
        return res.json(allBrands);

    } catch (error) {
        console.log(error.message);
        
    }

})
mongoose.connect("mongodb+srv://priyankaneelam:priyaneelam@cluster0.u6h6j.mongodb.net/mobile_db?retryWrites=true&w=majority&appName=Cluster0",{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log("db is connected")).catch(err=>console.log(err))
app.get('/allbrands',async(req, res)=>{
    try {
        const allBrands=await Mobiles.find();
        return res.json(allBrands);
        
    } catch (error) {
      console.log(error.message)  
    }
    
})

app.get('/getbrands/:id',async(req, res)=>{
    try {
        const getbrandsbyid=await Mobiles.findById(req.params.id);
        return res.json(getbrandsbyid);
        
    } catch (error) {
        console.log(error.message)
    }
})

app.delete('/deletebrands/:id',async(req, res)=>{
    try {
        await Mobiles.findByIdAndDelete(req.params.id);
        return res.json(await  Mobiles.find())
       
    } catch (error) {
        console.log(error.message)
    }
})


app.put("/update", async (req, res) => {
    try {
        // Get id from query parameters and new brandname from the request body
        const { id } = req.query;             // Get the id from query parameter
        const { brandname } = req.body;       // New brandname from request body

        // Find the document by id and update the brandname
        const updatedMobile = await Mobiles.findByIdAndUpdate(id, { brandname }, { new: true });

        if (!updatedMobile) {
            return res.status(404).json({ error: "Brand not found" });
        }

        // Return the updated document
        return res.json(updatedMobile);

    } catch (error) {
        console.log(error.message);
    }
});

app.listen(3001,()=>console.log('server running'))