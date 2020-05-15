var express=require('express')
const app=express()
let PORT =5000

let ref_id='sai69'
let referral_done=[]
app.use(express.json())

app.get('/referral',function(req,res){
    res.send(ref_id)
})
app.post('/gain_promo',function(req,res){
    try {
        const ref_by=req.body.ref_by
        const ref_id=req.body.ref_id
        referral_done.push(ref_id)
        console.log(ref_by)
        console.log(ref_id)
        console.log(referral_done)
        res.send('success')
    } catch (error) {
        res.status(400).send(error)
    }
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})