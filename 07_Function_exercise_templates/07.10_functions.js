// 07.10_functions JavasScript code

function allCapsTitleTrimmed(originalText) { // Define here the following functions: allCapsTitleTrimmed(originalText) and isSunday(dateText). 
    var title = originalText;
    title.value = (title.value.toUpperCase()).trim();
}

function isSunday(dateText) {
    var v_day = dateText.substr(0, 2);
    var v_month = dateText.substr(3, 2);
    var v_year = dateText.substr(6, 4);
    
    var asDate = new Date();

    asDate.setDate(v_day);
    asDate.setMonth(v_month - 1);
    asDate.setFullYear(v_year);
    
    var day = Number(asDate.getDay());
    if (day === 0) {
        return true;
    } else {
        return false;
    }
}