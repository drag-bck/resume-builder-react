var select12 = document.getElementById('12_year')
for (var i = 2019; i >= 1980; i--){
    var opt = document.createElement('OPTION'); 
    opt.value = i;
    opt.text = i;
    select12.appendChild(opt);
}

var select10 = document.getElementById('10_year')
for (var i = 2019; i >= 1980; i--){
    var opt = document.createElement('OPTION'); 
    opt.value = i;
    opt.text = i;
    select10.appendChild(opt);
}

var cyt = document.getElementById('course-time-year')
for (var i = 0; i <= 20; i++){
    var opt = document.createElement('OPTION'); 
    opt.value = i;
    opt.text = i;
    cyt.appendChild(opt);
}

var cym = document.getElementById('course-time-month')
for (var i = 0; i <= 11; i++){
    var opt = document.createElement('OPTION'); 
    opt.value = i;
    opt.text = i;
    cym.appendChild(opt);
}