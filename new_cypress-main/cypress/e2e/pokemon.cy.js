describe('Проверка покупки аватара', function () {

    it('Покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт 
         cy.get('#k_email').type('USER_LOGIN') // Нашел поле логина, ввел валдиный логин
         cy.get('#k_password').type('USER_PASSWORD')  // Нашел поле пароля, ввел валидный пароль
         cy.get('.MuiButton-root').click(); // Нашел кнопку "Войти", нажал на нее

         
         cy.get('.header_card_trainer').click()  // Нашел кнопку профиля, нажал на нее


         cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click() // Нашел кнопку смены аватара, нажал на нее


         
         cy.get('.available > button').first().click()  // Нашел кнопку "купить", нажал на нее


         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111') // Нашел поле номера карты, ввел номер карты
         cy.get(':nth-child(1) > .style_1_base_input').type('12/26') // Нашел поле даты, ввел дату
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125') // Нашел поле кода, ввел код
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('DANIL RODIN') // Нашел поле имя, ввел имя
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click() // Нашел кнопку "оплатить", нажал на нее

         cy.get('.style_1_base_input').type('56456') // Нашел поле ввода кода, ввел код
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click() // Нашел "оплатить", нажал на нее


     })
 }) 
