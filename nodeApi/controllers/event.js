const Event = require('../models/event')

exports.getEvents = (req,res)=>{
   const events = Event.find()
   .select("_id title body")
   .then((events) => {
       res.json({events})
   })
   .catch(err => console.log(err))
};

exports.createEvent = (req,res) => {
    const event = new Event(req.body);
    
    post.save()
    .then(result => {
        res.json({
            event: result
        })
    })
};
