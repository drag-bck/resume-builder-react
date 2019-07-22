var nodes = document.getElementById('doc123').getElementsByTagName('*');
for(var i = 0; i < nodes.length; i++){
    document.getElementById('doc123').style.display = "none";
}

var nodes = document.getElementById('pg').getElementsByTagName('*');
for(var i = 0; i < nodes.length; i++){
    document.getElementById('pg').style.display = "none";
}

function qualificationDisplay() {
    var x = document.getElementById('education-level');
    var markOption = x.options[x.selectedIndex].value;
    if (markOption === "3") {
        var nodes = document.getElementById('doc123').getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            document.getElementById('doc123').style.display = "block";
        }
        var nodes = document.getElementById('pg').getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            document.getElementById('pg').style.display = "block";
        }
    } else if(markOption === "2") {
        var nodes = document.getElementById('pg').getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            document.getElementById('pg').style.display = "block";
        }
    } else if (markOption === "1") {
        var nodes = document.getElementById('doc123').getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            document.getElementById('doc123').style.display = "none";
        }

        var nodes = document.getElementById('pg').getElementsByTagName('*');
        for(var i = 0; i < nodes.length; i++){
            document.getElementById('pg').style.display = "none";
        }
    }
}
