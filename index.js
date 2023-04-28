var name1 = document.forms["myform"]["name"];
var email = document.forms["myform"]["email"];
var phno = document.forms["myform"]["phno"];

var name_error = document.getElementsByClassName("error")[0];
var email_error = document.getElementsByClassName("error")[1];
var phno_error = document.getElementsByClassName("error")[2];

function sub()
{
    var flag1=0 , flag2=0 , flag3=0;
    if (name1.value == "")
    {
        name_error.style.display = "flex";
        name1.style.outline = "1px solid red";
    }
    else 
    {
        flag1=1;
        name_error.style.display = "none";
        name1.style.outline = "none";
    }

    if (email.value == "")
    {
        email_error.style.display = "flex";
        email.style.outline = "1px solid red";
    }
    else 
    {
        flag2 = 1;
        email_error.style.display = "none";
        email.style.outline = "none";
    }

    if (phno.value == "")
    {
        phno_error.style.display = "flex";
        phno.style.outline = "1px solid red";
    }
    else 
    {
        flag3 = 1;
        phno_error.style.display = "none";
        phno.style.outline = "none";
    }

    if (flag1==1 && flag2==1 && flag3==1)
    {
        name_error.style.display = "none";
        email_error.style.display = "none";
        phno_error.style.display = "none";
    }
}


var pcname1 = document.forms["pcform"]["name"];
var pcemail = document.forms["pcform"]["email"];
var pcphno = document.forms["pcform"]["phno"];

var pcname_error = document.getElementsByClassName("error")[3];
var pcemail_error = document.getElementsByClassName("error")[4];
var pcphno_error = document.getElementsByClassName("error")[5];

function pcsub()
{
    var flag1=0 , flag2=0 , flag3=0;
    if (pcname1.value == "")
    {
        pcname_error.style.display = "flex";
        pcname1.style.outline = "1px solid red";
    }
    else 
    {
        flag1=1;
        pcname_error.style.display = "none";
        pcname1.style.outline = "none";
    }

    if (pcemail.value == "")
    {
        pcemail_error.style.display = "flex";
        pcemail.style.outline = "1px solid red";
    }
    else 
    {
        flag2 = 1;
        pcemail_error.style.display = "none";
        pcemail.style.outline = "none";
    }

    if (pcphno.value == "")
    {
        pcphno_error.style.display = "flex";
        pcphno.style.outline = "1px solid red";
    }
    else 
    {
        flag3 = 1;
        pcphno_error.style.display = "none";
        pcphno.style.outline = "none";
    }

    if (flag1==1 && flag2==1 && flag3==1)
    {
        pcname_error.style.display = "none";
        pcemail_error.style.display = "none";
        pcphno_error.style.display = "none";
    }
}