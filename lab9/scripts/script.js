function CheckData() {
    
            var name = document.getElementById("name").value.trim();
            var company = document.getElementById("company").value.trim();
            var phone = document.getElementById("phone").value.trim();
            var email = document.getElementById("email").value.trim();
            
            var errorMessage = "";
            
  
            if (name.length === 0) {
                errorMessage += "- Не заполнено поле 'Имя'\n";
            }
            
            if (email.length === 0) {
                errorMessage += "- Не заполнено поле 'Адрес эл.почты'\n";
            }
            

            if (errorMessage.length > 0) {
                alert("Ошибка заполнения формы:\n" + errorMessage);
                return false;
            }
            
        
            var emailPattern = new RegExp("^[\\.\\-_A-Za-z0-9]+?@[\\.\\-A-Za-z0-9]+?\\.[A-Za-z0-9]{2,6}$");
            var validEmail = emailPattern.test(email);
            
            if (!validEmail) {
                alert("Ошибка: Некорректный формат email адреса");
                return false;
            }
            

            var phonePattern = new RegExp("^(\\+7|8)?[\\s-]?\\(?\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{2}[\\s-]?\\d{2}$");
            
          
            if (phone.length > 0) {
                var validPhone = phonePattern.test(phone);
                if (!validPhone) {
                    alert("Ошибка: Некорректный формат номера телефона\n\n" +
                          "Допустимые форматы:\n" +
                          "+7 (123) 456-78-90\n" +
                          "8 (123) 456-78-90\n" +
                          "123-45-67");
                    return false;
                }
            }
            
        
            var ans = confirm("Вы уверены, что хотите отправить введенные данные?");
            
            if (ans) {
    
                document.regForm.submit();
                return true;
            } else {
                return false;
            }
        }