const exp = require("express");
const app = exp();
const BP = require("body-parser");
const cheerio = require("cheerio");
const path = require("path");
const fs = require("fs");

const $ = cheerio.load(fs.readFileSync(__dirname + "/Step4.html"));

var year_or_month,which_pack;
var adon1,adon2,adon3;

app.use(BP.json());
app.use(BP.urlencoded({extended:true}));
app.use(exp.static(path.join("public")));

app.get("/" , function(req,res)
{
    res.sendFile(__dirname + "/index.html");
})

app.get("/Step2.html" , function(req,res)
{
    res.sendFile(__dirname + "/Step2.html");
})

app.post("/Step3.html" , function(req,res)
{
    year_or_month = req.body.YR_MO;
    which_pack = req.body.PACKAGE;
})

app.get("/Step3.html" , function(req,res)
{
    res.sendFile(__dirname + "/Step3.html");
})

app.post("/Step4.html" ,function(req,res)
{
    adon1=req.body.AD1;
    adon2=req.body.AD2;
    adon3=req.body.AD3;
})

app.get("/Step4.html" , function(req,res)
{
    var tmp,mainrate,rate1,rate2,rate3;
    if (year_or_month == "yr")
    {
        tmp = "yearly";
    }
    else 
    {
        tmp = "monthly";
    }
    $("#pcpack").text(which_pack + " (" + tmp + ")");
    $("#mobpack").text(which_pack + " (" + tmp + ")");

    if (year_or_month == "yr")
    {
        if (which_pack == "Arcade")
        {
            mainrate = 90;
        }
        else if (which_pack == "Advanced")
        {
            mainrate = 120;
        }
        else 
        {
            mainrate = 150;
        }

        $("#pcrate").text("$"+mainrate+"/yr");
        $("#mobrate").text("$"+mainrate+"/yr");
    }
    else 
    {
        if (which_pack == "Arcade")
        {
            mainrate = 9;
        }
        else if (which_pack == "Advanced")
        {
            mainrate = 12;
        }
        else 
        {
            mainrate = 15;
        }
        $("#pcrate").text("$"+mainrate+"/mo");
        $("#mobrate").text("$"+mainrate+"/mo");
    }

    $("#pcadditional").html("");
    $("#mobadditional").html("");
    if (adon1 == "ok")
    {
        $("#pcadditional").append('<div><p>Online service</p><p>+$1/mo</p></div>');
        $("#mobadditional").append('<div><p>Online service</p><p>+$1/mo</p></div>');
        rate1=1;
    }
    else 
    {
        rate1=0;
    }

    if (adon2 == "ok")
    {
        $("#pcadditional").append('<div><p>Larger storage</p><p>+$2/mo</p></div>');
        $("#mobadditional").append('<div><p>Larger storage</p><p>+$2/mo</p></div>');
        rate2=2;
    }
    else 
    {
        rate2=0;
    }

    if (adon3 == "ok")
    {
        $("#pcadditional").append('<div><p>Customizable profile</p><p>+$2/mo</p></div>');
        $("#mobadditional").append('<div><p>Customizable profile</p><p>+$2/mo</p></div>');
        rate3=2;
    }
    else 
    {
        rate3=0;
    }

    $("#pcfinal").html("");
    $("#pcmob").html("");
    var tot=mainrate+(rate1*12)+(rate2*12)+(rate3*12);
    var mtot=mainrate+rate1+rate2+rate3;
    if (tmp=="monthly")
    {
        $("#pcfinal").html("<p>Total (per month)</p><p>+$" + mtot + "/" + "mo");
        $("#mobfinal").html("<p>Total (per month)</p><p>+$" + mtot + "/" + "mo");
    }
    else 
    {
        $("#pcfinal").html("<p>Total (per year)</p><p>+$" + tot + "/" + "yr");
        $("#mobfinal").html("<p>Total (per year)</p><p>+$" + tot + "/" + "yr");
    }

    res.send($.html());
})

app.get("/ty.html" , function(req,res)
{
    res.sendFile(__dirname + "/ty.html");
})

app.listen(3000);