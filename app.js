const express= require("express");
const path = require ("path");
const engines = require ('consolidate');
const app= express ();

const port=process.env.PORT || 5001

//setting the path for css files 
const publicDirectory= path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

//setting the path for the html files
const viewsPath= path.join(__dirname, ".");
app.set ('views', viewsPath);

//setting the engine so that it accepts html
app.engine('html', engines.mustache);
app.set('view engine', 'html');

app.use('/images', express.static('./public/images'))

app.get("/", (req,res)=>{
    res.render("index")
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

