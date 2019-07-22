var eLevel;
var studyTypeDoc, studyTypePg, studyTypeUg;
var wpJoiningMonth, wpJoiningYear;
var gender;
var wpType, startWorking, preferedLocation;
var collegeUg, collegeDoc, collegePg
var docType, pgType, ugType;
var email;
var spDoc, spPg, spUg;
var docTimeMonth, docTimeYear, pgTimeMonth, pgTimeYear, ugTimeMonth, ugTimeYear;
var docMarks, pgMarks, ugMarks;
var achDoc, achPg, achUg;
var board12, marks12, year12, medium12, mathsMarks12, englishMarks12;
var board10, marks10, year10, medium10;
var certificateCourse, courseDuration;
var name, gender, dob, mobile, telephoneNo;
var currentCity, currentState, homeCity, homeState;
var services;
var startWorking;


function submitForm() {
    eLevel = educationLevel();
    email = document.getElementById('email').value;
    console.log(email);
    var passwd = document.getElementById('passwd').value;
    console.log(passwd);
    var cpasswd = document.getElementById('cpasswd').value;
    console.log(cpasswd);


    console.log(eLevel);
    if (eLevel === '3') {
        //logic to read qualification of all 3 levels
        //--------------------------doctorate----------------------------------------------
        if(document.getElementById('fulltime_doc').checked) {
            studyTypeDoc = 'Full Time';
        } else if (document.getElementById('parttime_doc').checked) {
            studyTypeDoc = 'Part Time';
        } else if (document.getElementById('correspondence_doc').checked) {
            studyTypeDoc = 'Correspondence';
        }
        console.log(studyTypeDoc);
        
        collegeDoc = document.getElementById('college_doc').value;
        console.log(collegeDoc);

        docType = selectValue('doc_type');
        console.log(docType);

        spDoc = selectValue('sp_doc');
        console.log(spDoc);

        docTimeYear = selectValue('doc_time_year');
        console.log(docTimeYear);

        var docTimeMonth = selectValue('doc_time_month');
        console.log(docTimeMonth);

        gradSchDoc = selectValue('grad_sch_doc');
        console.log(gradSchDoc);
        
        docMarks = document.getElementById('doc_marks').value;
        console.log(docMarks);

        achDoc = selectValue('ach_doc');
        console.log(achDoc);
        //-------------------------------post grad --------------------------------------------
        if(document.getElementById('fulltime_pg').checked) {
            studyTypePg = 'Full Time';
        } else if (document.getElementById('parttime_pg').checked) {
            studyTypePg = 'Part Time';
        } else if (document.getElementById('correspondence_pg').checked) {
            studyTypePg = 'Correspondence';
        }
        console.log(studyTypePg);
        
        collegePg = document.getElementById('college_pg').value;
        console.log(collegePg);

        pgType = selectValue('pg_type');
        console.log(pgType);

        spPg = selectValue('sp_pg');
        console.log(spPg);

        pgTimeYear = selectValue('pg_time_year');
        console.log(pgTimeYear);

        pgTimeMonth = selectValue('pg_time_month');
        console.log(pgTimeMonth);

        gradSchPg = selectValue('grad_sch_pg');
        console.log(gradSchPg);
        
        pgMarks = document.getElementById('pg_marks').value;
        console.log(pgMarks);

        achPg = selectValue('ach_pg');
        console.log(achPg);
        //----------------------------------------under grad------------------------------------------
        if(document.getElementById('fulltime_ug').checked) {
            studyTypeUg = 'Full Time';
        } else if (document.getElementById('parttime_ug').checked) {
            studyTypeUg = 'Part Time';
        } else if (document.getElementById('correspondence_ug').checked) {
            studyTypeUg = 'Correspondence';
        }
        console.log(studyTypeUg);
        
        collegeUg = document.getElementById('college_ug').value;
        console.log(collegeUg);

        ugType = selectValue('ug_type');
        console.log(ugType);

        spUg = selectValue('sp_ug');
        console.log(spUg);

        ugTimeYear = selectValue('ug_time_year');
        console.log(ugTimeYear);

        ugTimeMonth = selectValue('ug_time_month');
        console.log(ugTimeMonth);

        gradSchUg = selectValue('grad_sch_ug');
        console.log(gradSchUg);
        
        ugMarks = document.getElementById('ug_marks').value;
        console.log(ugMarks);

        achUg = selectValue('ach_ug');
        console.log(achUg);
        

    } else if (eLevel === '2') {
        //logic to read qualification of pg and ug

        //-------------------------------post grad --------------------------------------------
        if(document.getElementById('fulltime_pg').checked) {
            studyTypePg = 'Full Time';
        } else if (document.getElementById('parttime_pg').checked) {
            studyTypePg = 'Part Time';
        } else if (document.getElementById('correspondence_pg').checked) {
            studyTypePg = 'Correspondence';
        }
        console.log(studyTypePg);
        
        collegePg = document.getElementById('college_pg').value;
        console.log(collegePg);

        pgType = selectValue('pg_type');
        console.log(pgType);

        spPg = selectValue('sp_pg');
        console.log(spPg);

        pgTimeYear = selectValue('pg_time_year');
        console.log(pgTimeYear);

        pgTimeMonth = selectValue('pg_time_month');
        console.log(pgTimeMonth);

        gradSchPg = selectValue('grad_sch_pg');
        console.log(gradSchPg);
        
        pgMarks = document.getElementById('pg_marks').value;
        console.log(pgMarks);

        achPg = selectValue('ach_pg');
        console.log(achPg);
        //----------------------------------------under grad------------------------------------------
        if(document.getElementById('fulltime_ug').checked) {
            studyTypeUg = 'Full Time';
        } else if (document.getElementById('parttime_ug').checked) {
            studyTypeUg = 'Part Time';
        } else if (document.getElementById('correspondence_ug').checked) {
            studyTypeUg = 'Correspondence';
        }
        console.log(studyTypeUg);
        
        collegeUg = document.getElementById('college_ug').value;
        console.log(collegeUg);

        ugType = selectValue('ug_type');
        console.log(ugType);

        spUg = selectValue('sp_ug');
        console.log(spUg);

        ugTimeYear = selectValue('ug_time_year');
        console.log(ugTimeYear);

        ugTimeMonth = selectValue('ug_time_month');
        console.log(ugTimeMonth);

        gradSchUg = selectValue('grad_sch_ug');
        console.log(gradSchUg);
        
        ugMarks = document.getElementById('ug_marks').value;
        console.log(ugMarks);

        achUg = selectValue('ach_ug');
        console.log(achUg);

    } else if (eLevel === '1') {
        //logic to read qualification of only ug
        if(document.getElementById('fulltime_ug').checked) {
            studyTypeUg = 'Full Time';
        } else if (document.getElementById('parttime_ug').checked) {
            studyTypeUg = 'Part Time';
        } else if (document.getElementById('correspondence_ug').checked) {
            studyTypeUg = 'Correspondence';
        }
        console.log(studyTypeUg);
        
        collegeUg = document.getElementById('college_ug').value;
        console.log(collegeUg);

        ugType = selectValue('ug_type');
        console.log(ugType);

        spUg = selectValue('sp_ug');
        console.log(spUg);

        ugTimeYear = selectValue('ug_time_year');
        console.log(ugTimeYear);

        ugTimeMonth = selectValue('ug_time_month');
        console.log(ugTimeMonth);

        gradSchUg = selectValue('grad_sch_ug');
        console.log(gradSchUg);
        
        ugMarks = document.getElementById('ug_marks').value;
        console.log(ugMarks);

        achUg = selectValue('ach_ug');
        console.log(achUg);
        
    }
    //-------------class12---------------------------
    board12 = selectValue('12_board');
    console.log(board12);
    marks12 = document.getElementById('12_marks').value;
    console.log(marks12);
    year12 = selectValue('12_year');
    console.log(year12);
    medium12 = selectValue('12_medium');
    console.log(medium12);
    mathsMarks12 = document.getElementById('12_maths_marks').value;
    console.log(mathsMarks12);
    englishMarks12 = document.getElementById('12_english_marks').value;
    console.log(englishMarks12);
    //--------------class10--------------------------
    board10 = selectValue('10_board');
    console.log(board10);
    marks10 = document.getElementById('10_marks').value;
    console.log(marks10);
    year10 = selectValue('10_year');
    console.log(year10);
    medium10 = selectValue('10_medium');
    console.log(medium10);
    //-------------courses and certificate-------------------------------
    certificateCourse = selectValue('certi_course');
    console.log(certificateCourse);
    courseTimeYear = parseInt(selectValue('course-time-year'),10);
    console.log(courseTimeYear);
    courseTimeMonth = parseInt(selectValue('course-time-month'),10);
    console.log(courseTimeMonth);
    courseDuration = courseTimeMonth + courseTimeYear * 12;
    console.log(courseDuration);
    //------------work preference-----------------------------------
    if(document.getElementById('wp_fulltime').checked) {
        wpType = 'Full Time';
    } else if (document.getElementById('wp_parttime').checked) {
        wpType = 'Part Time';
    } else if (document.getElementById('wp_internship').checked) {
        wpType = 'Internship';
    }
    console.log(wpType);

    var joining = 0;
    if (document.getElementById('wp_immediately').checked) {
        joining = 1;
        startWorking = "Immediately";
    } else if (document.getElementById('wp_provide_time').checked) {
        wpJoiningMonth = selectValue('wp_joining_month');
        console.log(wpJoiningMonth);
        wpJoiningYear = selectValue('wp_joining_year');
        console.log(wpJoiningYear);
        joining = 0;
        startWorking = "From " + wpJoiningMonth + " " + wpJoiningYear;
    }
    console.log(startWorking);


    
    preferedLocation = selectValue("prefered_location");
    console.log(preferedLocation);

    //------------personal information-------------------------
    name = document.getElementById('name').value;
    console.log(name);
    if(document.getElementById('gender_female').checked) {
        gender = 'Female';
    } else if (document.getElementById('gender_male').checked) {
        gender = 'Male';
    }
    console.log(gender);

    var dob = document.getElementById("dob").value;
    console.log(dob);

    mobile = document.getElementById("mobile").value;
    var std = document.getElementById("std").value;
    var telephone = document.getElementById("telephone").value;
    console.log(mobile);
    console.log(std);
    console.log(telephone);
    telephoneNo = std + "-" + telephone;

    currentState = selectValue('cl_sts');
    console.log(currentState);
    currentCity = selectValue('cl_state');
    console.log(currentCity);

    homeState = selectValue('h_sts');
    console.log(homeState);
    homeCity = selectValue('h_state');
    console.log(homeCity);

    //-------------mailer settings------------------------------------

    services = "";
    if (document.getElementById('mailer_option1').checked) {
        services += "1";
    } else {
        services += "0";
    }
    if (document.getElementById('mailer_option2').checked) {
        services += "-1";
    } else {
        services += "-0";
    }
    if (document.getElementById('mailer_option3').checked) {
        services += "-1";
    } else {
        services += "-0";
    }
    if (document.getElementById('mailer_option4').checked) {
        services += "-1";
    } else {
        services += "-0";
    }
    if (document.getElementById('mailer_option5').checked) {
        services += "-1";
    } else {
        services += "-0";
    }
    console.log(services);

    //-----------create json------------------
    createJson();
}


function educationLevel() {
    var x = document.getElementById('education-level');
    var markOption = x.options[x.selectedIndex].value;
    return markOption;
}

function selectValue(selectId) {
    var x = document.getElementById(selectId);
    var markOption = x.options[x.selectedIndex].value;
    return markOption;
}
var obj;
function createJson() {
    obj = {};
    var resume = [];
    obj.resume = resume;
    if (eLevel === '3') {
        var user = {
            "email": email,
            "qualification": "Doctorate",
            "doctorateType": studyTypeDoc,
            "doctorateCollege": collegeDoc,
            "doctorateCourse": docType,
            "doctorateSpecilization": spDoc,
            "monthofDoctorateComplete": docTimeMonth,
            "yearofDoctorateComplete": docTimeYear,
            "gradeMarksDoc": docMarks,
            "academicAchievementinDoctorate": achDoc,
            "pgType": studyTypePg,
            "pgCollege": collegePg,
            "pgCourse": pgType,
            "pgSpecilization": spPg,
            "monthofPGComplete": pgTimeMonth,
            "yearofPGComplete": pgTimeYear,
            "gradeMarksPG": pgMarks,
            "academicAchievementinPG": achPg,
            "ugType": studyTypeUg,
            "ugCollege": collegeUg,
            "ugCourse": ugType,
            "ugSpecilization": spUg,
            "monthofUGComplete": ugTimeMonth,
            "yearofUGComplete": ugTimeYear,
            "gradeMarksUG": ugMarks,
            "academicAchievementinUG": achUg,
            "class12Board": board12,
            "class12Marks": marks12,
            "class12PassingYear": year12,
            "class12Medium": medium12,
            "class12MathsMarks": mathsMarks12,
            "class12EnglishMarks": englishMarks12,
            "class10Board": board10,
            "class10Marks": marks10,
            "class10PassingYear": year10,
            "class10Medium": medium10,
            "certificateandCourses": certificateCourse,
            "durationofCourse": courseDuration,
            "workPreference": wpType,
            "startWorking": startWorking,
            "preferedLocation": preferedLocation,
            "name": name,
            "gender": gender,
            "dateofBirth": dob,
            "mobile": mobile,
            "telephone": telephoneNo,
            "currentState": currentState,
            "currentCity": currentCity,
            "homeState": homeState,
            "homeCity": homeCity,
            "services": services
        }
    } else if (eLevel === '2') {
        var user = {
            "email": email,
            "qualification": "Post Graduate",
            "pgType": studyTypePg,
            "pgCollege": collegePg,
            "pgCourse": pgType,
            "pgSpecilization": spPg,
            "monthofPGComplete": pgTimeMonth,
            "yearofPGComplete": pgTimeYear,
            "gradeMarksPG": pgMarks,
            "academicAchievementinPG": achPg,
            "ugType": studyTypeUg,
            "ugCollege": collegeUg,
            "ugCourse": ugType,
            "ugSpecilization": spUg,
            "monthofUGComplete": ugTimeMonth,
            "yearofUGComplete": ugTimeYear,
            "gradeMarksUG": ugMarks,
            "academicAchievementinUG": achUg,
            "class12Board": board12,
            "class12Marks": marks12,
            "class12PassingYear": year12,
            "class12Medium": medium12,
            "class12MathsMarks": mathsMarks12,
            "class12EnglishMarks": englishMarks12,
            "class10Board": board10,
            "class10Marks": marks10,
            "class10PassingYear": year10,
            "class10Medium": medium10,
            "certificateandCourses": certificateCourse,
            "durationofCourse": courseDuration,
            "workPreference": wpType,
            "startWorking": startWorking,
            "preferedLocation": preferedLocation,
            "name": name,
            "gender": gender,
            "dateofBirth": dob,
            "mobile": mobile,
            "telephone": telephoneNo,
            "currentState": currentState,
            "currentCity": currentCity,
            "homeState": homeState,
            "homeCity": homeCity,
            "services": services
        }
        
    } else if (eLevel === '1') {
        var user = {
            "email": email,
            "qualification": "Under Graduate",
            "ugType": studyTypeUg,
            "ugCollege": collegeUg,
            "ugCourse": ugType,
            "ugSpecilization": spUg,
            "monthofUGComplete": ugTimeMonth,
            "yearofUGComplete": ugTimeYear,
            "gradeMarksUG": ugMarks,
            "academicAchievementinUG": achUg,
            "class12Board": board12,
            "class12Marks": marks12,
            "class12PassingYear": year12,
            "class12Medium": medium12,
            "class12MathsMarks": mathsMarks12,
            "class12EnglishMarks": englishMarks12,
            "class10Board": board10,
            "class10Marks": marks10,
            "class10PassingYear": year10,
            "class10Medium": medium10,
            "certificateandCourses": certificateCourse,
            "durationofCourse": courseDuration,
            "workPreference": wpType,
            "startWorking": startWorking,
            "preferedLocation": preferedLocation,
            "name": name,
            "gender": gender,
            "dateofBirth": dob,
            "mobile": mobile,
            "telephone": telephoneNo,
            "currentState": currentState,
            "currentCity": currentCity,
            "homeState": homeState,
            "homeCity": homeCity,
            "services": services
        }
    }
    

    obj.resume.push(user);


    console.log(JSON.stringify(obj));
    var jsonDATA = JSON.stringify(obj);

    localStorage.setItem('jsonDATA',jsonDATA);
    var localJSONDATA = localStorage.getItem(jsonDATA);
    console.log(localJSONDATA);
}
