var switchkey = document.getElementById("switch");
var mode = document.getElementById("modes");
var filt = document.getElementById("switch").getElementsByTagName("div")[0];

var rates = document.querySelectorAll(".options div p");

switchkey.onclick = function()
{
    mode.classList.toggle("modeon");
    if (mode.className != "modes")
    {
        rates[1].innerHTML = "$90/yr";
        rates[2].style.display = "flex";
        rates[4].innerHTML = "$120/yr"
        rates[5].style.display = "flex";
        rates[7].innerHTML = "$150/yr"
        rates[8].style.display = "flex";
    }
    else 
    {
        rates[1].innerHTML = "$9/mo";
        rates[2].style.display = "none";
        rates[4].innerHTML = "$12/mo"
        rates[5].style.display = "none";
        rates[7].innerHTML = "$15/mo"
        rates[8].style.display = "none";
    }
}

var options = document.getElementsByClassName("options");

function selectA()
{
    options[0].style.backgroundColor = "#ecf4fc";
    options[0].style.border = "1px solid purple";
    options[1].style.backgroundColor = "transparent";
    options[1].style.border = "1px solid rgba(0,0,0,0.3)";
    options[2].style.backgroundColor = "transparent";
    options[2].style.border = "1px solid rgba(0,0,0,0.3)";
}

function selectB()
{
    options[1].style.backgroundColor = "#ecf4fc";
    options[1].style.border = "1px solid purple";
    options[0].style.backgroundColor = "transparent";
    options[0].style.border = "1px solid rgba(0,0,0,0.3)";
    options[2].style.backgroundColor = "transparent";
    options[2].style.border = "1px solid rgba(0,0,0,0.3)";
}

function selectC()
{
    options[2].style.backgroundColor = "#ecf4fc";
    options[2].style.border = "1px solid purple";
    options[1].style.backgroundColor = "transparent";
    options[1].style.border = "1px solid rgba(0,0,0,0.3)";
    options[0].style.backgroundColor = "transparent";
    options[0].style.border = "1px solid rgba(0,0,0,0.3)";
}




// _____________________________________FOR PC__________________________________________________________________


var PCswitchkey = document.getElementById("pcswitch");
var PCmode = document.getElementById("pcmodes");

var rates = document.querySelectorAll(".options div p");

PCswitchkey.onclick = function()
{
    PCmode.classList.toggle("modeon");

    if (PCmode.className != "modes")
    {
        rates[10].innerHTML = "$90/yr";
        rates[11].style.display = "flex";
        rates[13].innerHTML = "$120/yr"
        rates[14].style.display = "flex";
        rates[16].innerHTML = "$150/yr"
        rates[17].style.display = "flex";
    }
    else 
    {
        rates[10].innerHTML = "$9/mo";
        rates[11].style.display = "none";
        rates[13].innerHTML = "$12/mo"
        rates[14].style.display = "none";
        rates[16].innerHTML = "$15/mo"
        rates[17].style.display = "none";
    }
}

var PCoptions = document.querySelectorAll(".row .options");

function selectD()
{
    PCoptions[0].style.backgroundColor = "#ecf4fc";
    PCoptions[0].style.border = "1px solid purple";
    PCoptions[1].style.backgroundColor = "transparent";
    PCoptions[1].style.border = "1px solid rgba(0,0,0,0.15)";
    PCoptions[2].style.backgroundColor = "transparent";
    PCoptions[2].style.border = "1px solid rgba(0,0,0,0.15)";
}

function selectE()
{
    PCoptions[1].style.backgroundColor = "#ecf4fc";
    PCoptions[1].style.border = "1px solid purple";
    PCoptions[0].style.backgroundColor = "transparent";
    PCoptions[0].style.border = "1px solid rgba(0,0,0,0.15)";
    PCoptions[2].style.backgroundColor = "transparent";
    PCoptions[2].style.border = "1px solid rgba(0,0,0,0.15)";
}

function selectF()
{
    PCoptions[2].style.backgroundColor = "#ecf4fc";
    PCoptions[2].style.border = "1px solid purple";
    PCoptions[1].style.backgroundColor = "transparent";
    PCoptions[1].style.border = "1px solid rgba(0,0,0,0.15)";
    PCoptions[0].style.backgroundColor = "transparent";
    PCoptions[0].style.border = "1px solid rgba(0,0,0,0.15)";
}

function nextpc()
{
    if (PCmode.className == "modes")
    {
        var yr_mo = "mo";
        var package;
        if (PCoptions[0].style.backgroundColor != "transparent")
        {
            package="Arcade";
        }
        else if (PCoptions[1].style.backgroundColor != "transparent")
        {
            package="Advanced";
        }
        else
        {
            package="Pro";
        }

        fetch('/Step3.html', {
            method: 'POST',       
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "YR_MO": yr_mo , "PACKAGE":package})
            })
            .then(response => response.json());

        window.location.href = "/Step3.html";
    }
    else 
    {
        var yr_mo = "yr";
        var package;
        if (PCoptions[0].style.backgroundColor != "transparent")
        {
            package="Arcade";
        }
        else if (PCoptions[1].style.backgroundColor != "transparent")
        {
            package="Advanced";
        }
        else 
        {
            package="Pro";
        }

        fetch('/Step3.html', {
            method: 'POST',       
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "YR_MO": yr_mo , "PACKAGE":package})
            })
            .then(response => response.json());

        window.location.href = "/Step3.html";
    }
}

function next()
{
    if (mode.className == "modes")
    {
        var yr_mo1 = "mo";
        var package1;
        if (options[0].style.backgroundColor != "transparent")
        {
            package1="Arcade";
        }
        else if (options[1].style.backgroundColor != "transparent")
        {
            package1="Advanced";
        }
        else 
        {
            package1="Pro";
        }

        fetch('/Step3.html', {
            method: 'POST',       
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "YR_MO": yr_mo1 , "PACKAGE":package1})
            })
            .then(response => response.json());

        window.location.href = "/Step3.html";
    }
    else 
    {
        var yr_mo1 = "yr";
        var package1;
        if (options[0].style.backgroundColor != "transparent")
        {
            package1="Arcade";
        }
        else if (options[1].style.backgroundColor != "transparent")
        {
            package1="Advanced";
        }
        else 
        {
            package1="Pro";
        }

        fetch('/Step3.html', {
            method: 'POST',       
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "YR_MO": yr_mo1 , "PACKAGE":package1})
            })
            .then(response => response.json());

        window.location.href = "/Step3.html";
    }
}

function goback()
{
    window.location.href="/";
}