exports.getEvents = (req,res)=>{
    res.json({
        events: [
            {title: 'First event'},
            {title: "second event"}
        ]
    });
};
