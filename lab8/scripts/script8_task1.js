function formatDate() {

    var now = new Date();

    var months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    var weekdays = [
        "воскресенье", "понедельник", "вторник", "среда", 
        "четверг", "пятница", "суббота"
    ];
    
    var day = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var weekday = weekdays[now.getDay()];
  
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    hours = hours < 10 ? "0" + hours : hours;
    
    return "Сегодня - " + day + " " + month + " " + year + " года, " +
           hours + ":" + minutes + ":" + seconds + ", " + weekday;
}


function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function calculateHypotenuse(form) {
    var legInput = form.leg.value.trim();
    var angleInput = form.angle.value.trim();
    var angleType = form.angleType.value;
    var resultField = form.result;
    

    if (legInput === "" || angleInput === "") {
        resultField.value = "Ошибка: заполните все поля!";
        return;
    }
    
    var leg = Number(legInput);
    var angleDeg = Number(angleInput);
    
    if (isNaN(leg) || isNaN(angleDeg)) {
        resultField.value = "Ошибка: введите числовые значения!";
        return;
    }
    
    if (leg <= 0) {
        resultField.value = "Ошибка: длина катета должна быть положительной!";
        return;
    }
    
    if (angleDeg <= 0 || angleDeg >= 180) {
        resultField.value = "Ошибка: угол должен быть от 0 до 180 градусов!";
        return;
    }
    
    if (angleDeg >= 90) {
        resultField.value = "Ошибка: для прямоугольного треугольника угол должен быть меньше 90°!";
        return;
    }
    
    var angleRad = degToRad(angleDeg);

    var hypotenuse;
    
    if (angleType === "adjacent") {
        hypotenuse = leg / Math.cos(angleRad);
        resultField.value = "Гипотенуза = " + hypotenuse.toFixed(3) + 
                           " (катет " + leg + " прилежит к углу " + angleDeg + "°)";
    } else {
        hypotenuse = leg / Math.sin(angleRad);
        resultField.value = "Гипотенуза = " + hypotenuse.toFixed(3) + 
                           " (катет " + leg + " противолежит углу " + angleDeg + "°)";
    }
}


function clearResult(form) {
    form.result.value = "";
}

window.onload = function() {

    document.getElementById("greeting").innerHTML = "<b>" + formatDate() + "</b>";
};