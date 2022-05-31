// if we not use setinterval time will not increase automatically and we need to refresh the page to see real time.
setInterval(function(){
    // selecting the tag as 'clock' where time will be shown.
    var clock = document.getElementById("time");

    // get the user's device date, time & time standard.
    let time = new Date();
    
    // we just need seconds, minutes & hours.
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hour = time.getHours();

    // we will also set AM or PM According to how hours increase.
    let day = "AM";

    // if hours are greater then 12 means it's PM time and also the hours will starts from 1 instead of 13, 14 to 24.
    if (hour > 12) {
        hour = hour -12;
        day = "PM";
    }

    // if hours equal to zero we will set it to 12.
    if (hour == 0) {
        hour = 12;
    }

    // if sec is smaller then 10 it will show like 1, 2, 9 but it's a good to write as 01, 02, 09.
    if (sec < 10) {
        sec = "0" + sec;
    }
    // the above statment will also happens with minutes.
    if (min < 10) {
        min = "0" + min;
    }
    // and also with hours. 
    if (hour < 10) {
        hour = "0" + hour;
    }

    // Now all set we just have to display the time. 
    // "clock" the p tag where time will be shown.
    // "textContent" is use to display values into html tags. 
    // we will seprate the hour, min, sec values with ':' 
     clock.textContent = hour +  ":" + min + ":" + sec + " " + day;
});