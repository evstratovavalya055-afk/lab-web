function getDayNumber(form) {

    var day = form.day.value.toLowerCase().trim();
    var result = "";
    

    if (day === "") {
        result = "Ошибка: введите название дня недели!";
    } else {

        switch(day) {
            case "понедельник":
            case "пон":
                result = "1 (понедельник)";
                break;
            case "вторник":
            case "вто":
                result = "2 (вторник)";
                break;
            case "среда":
            case "ср":
                result = "3 (среда)";
                break;
            case "четверг":
            case "чет":
                result = "4 (четверг)";
                break;
            case "пятница":
            case "пят":
                result = "5 (пятница)";
                break;
            case "суббота":
            case "суб":
                result = "6 (суббота)";
                break;
            case "воскресенье":
            case "вос":
                result = "7 (воскресенье)";
                break;
            default:
                result = "нет такого дня";
        }
    }
    
 
    form.res.value = result;
}