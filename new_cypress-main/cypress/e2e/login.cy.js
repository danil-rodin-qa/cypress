describe('Проверка авторизации', function () {

   it('Валидная авторизация', function () {
        cy.visit('https://login.qa.studio/');         // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки воссатновить пароль


        cy.get('#mail').type('german@dolnikov.ru')    // нашел поле логин, ввел валидный логин
        cy.get('#pass').type('qa_one_love1')          // нашел поле пароль, ввел валидный пароль
        cy.get('#loginButton').click();               // нашел кнопку войти, нажал на нее


        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Нашел текст, проверил что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible') // Текст есть и он виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю


    })

       it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/')         // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки воссатновить пароль


        cy.get('#forgotEmailButton').click()   // нашел кнопку "забыли пароль" и нажал на нее


        cy.get('#mailForgot').type('german@dolnikov.ru')   // нашел поле для почты, ввел почту 
        cy.get('#restoreEmailButton').click()   // нашел кнопку отпврить код и нажал на нее


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')  // Нашел текст, проверил что код ушел на почту 
        cy.get('#messageHeader').should('be.visible')   // текст есть и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // есть крестик и он виден пользователю


    })

       it('валидный логин, НЕвалидный пароль', function () {
        cy.visit('https://login.qa.studio/');         // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки воссатновить пароль


        cy.get('#mail').type('german@dolnikov.ru')    // нашел поле логин, ввел валидный логин
        cy.get('#pass').type('qa_one_')          // нашел поле пароль, ввел НЕвалидный пароль
        cy.get('#loginButton').click();               // нашел кнопку войти, нажал на нее

        cy.get('#messageHeader').contains('Такого логина или пароля нет') // проверяю что текст есть 
        cy.get('#messageHeader').should('be.visible') // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')  // есть крестик и он виден пользовател





    })

       it('НЕвалидный логин, валидный пароль', function () {
        cy.visit('https://login.qa.studio/');         // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки воссатновить пароль


        cy.get('#mail').type('germ@dolnikov.ru')    // нашел поле логин, ввел НЕвалидный логин
        cy.get('#pass').type('qa_one_love1')          // нашел поле пароль, ввел валидный пароль
        cy.get('#loginButton').click();               // нашел кнопку войти, нажал на нее


        cy.get('#messageHeader').contains('Такого логина или пароля нет')  // проверяю что текст есть
        cy.get('#messageHeader').should('be.visible') // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю


    })

           it('логин без @, валидный пароль', function () {
        cy.visit('https://login.qa.studio/');         // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки воссатновить пароль


        cy.get('#mail').type('germandolnikov.ru')    // нашел поле логин, ввел логин без @
        cy.get('#pass').type('qa_one_love1')          // нашел поле пароль, ввел валидный пароль
        cy.get('#loginButton').click();               // нашел кнопку войти, нажал на нее


        cy.get('#messageHeader').contains('Нужно исправить проблему валидации')  // проверяю что текст есть
        cy.get('#messageHeader').should('be.visible') // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю


    })

       it('Проверка регистра', function () {
        cy.visit('https://login.qa.studio/');         // зашел на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // проверяю цвет кнопки воссатновить пароль


        cy.get('#mail').type('GermAn@dolniKov.ru')    // нашел поле логин, ввел валидный логин
        cy.get('#pass').type('qa_one_love1')          // нашел поле пароль, ввел валидный пароль
        cy.get('#loginButton').click();               // нашел кнопку войти, нажал на нее


        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Нашел текст, проверил что авторизация прошла успешно
        cy.get('#messageHeader').should('be.visible') // Текст есть и он виден пользователю 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он виден пользователю


    })
})












// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
