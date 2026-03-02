function calculateDistance() {
            // Получаем форму
            var form = document.distanceForm;
            
            // Получаем значения координат и преобразуем в числа
            var x1 = parseFloat(form.x1.value) || 0;
            var y1 = parseFloat(form.y1.value) || 0;
            var x2 = parseFloat(form.x2.value) || 0;
            var y2 = parseFloat(form.y2.value) || 0;
            
            // Вычисляем расстояние по формуле: d = √[(x₂ - x₁)² + (y₂ - y₁)²]
            var dx = x2 - x1;
            var dy = y2 - y1;
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            // Округляем до 3 знаков после запятой
            distance = Math.round(distance * 1000) / 1000;
            
            // Выводим результат
            form.result.value = distance;
            
            // Для отладки - показываем в строке состояния
            window.status = "Расстояние: " + distance;
            
            return true;
        }
        
        // Добавляем обработчик для поля X₁ при загрузке страницы
        window.onload = function() {
            var form = document.distanceForm;
            // Устанавливаем начальное значение
            calculateDistance();
        };