import {username, password} from './fixtures.js'

describe('Czechitas Login Page', () => {

    it('should open login page', () => {
        
        browser.reloadSession();
        
        browser.url('/prihlaseni');
        

        var emailField = $('#email');
        console.log('Email Field is Displayed  ' + emailField.isDisplayed());
        console.log('Email Field is Enabled  ' + emailField.isEnabled());

        var passwordField = $('#password');
        console.log('Password Field is Displayed ' + passwordField.isDisplayed());
        console.log('Password Field is Enabled ' + passwordField.isEnabled());

        var loginButton = $('button[type="submit"]');
        console.log("Text přihlašovacího tlačítka " + loginButton.getText());

        var forgotPassword = $('.btn.btn-link');
        console.log('Hodnota href atributu  ' + forgotPassword.getAttribute("href"));

        emailField.setValue("testerTesterovic@tester.cz");
        passwordField.setValue("Testing2021");
        loginButton.click();

        $('=Přihlášky').click();

        var rows = $('table').$("tbody").$$('tr');
        console.log("Počet řádků tabulky je: " + rows.length);

        for (let i = 0; i < rows.length; i++) {
            const row = rows[i];
            console.log(row.getText());
        }


        //browser.pause (5000);

            });
    
});