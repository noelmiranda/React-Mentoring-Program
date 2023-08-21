describe('Counter', () => {
    beforeEach(async () => {
        await browser.url('http://localhost:3000/');
    });

    it('component renders initial value provided in props', async () => {
        const countValueElement = await $('[data-testid="count"]');
        const countValueText = await countValueElement.getText();
        const countValue = Number(countValueText.replace('Count: ', ''));
        expect(countValue).toEqual(0);
    });

    it('click event on increment button increments the displayed value', async () => {
        const incrementButton = await $('.btn-increment');
        const countValueElement = await $('.counter-value');
        const countValueText = await countValueElement.getText();
        const countValue1 = Number(countValueText.replace('Count: ', ''));
        expect(countValue1).toEqual(0);

        await incrementButton.click();

        const updatedCountValueText = await countValueElement.getText();
        const countValue2 = Number(updatedCountValueText.replace('Count: ', ''));
        expect(countValue2).toEqual(1);
    });

    it('click event on decrement button decrements the displayed value', async () => {
        const decrementButton = await $('.btn-decrement');
        const countValueElement = await $('.counter-value');
        const countValueText = await countValueElement.getText();
        const countValue1 = Number(countValueText.replace('Count: ', ''));
        expect(countValue1).toEqual(0);

        await decrementButton.click();

        const updatedCountValueText = await countValueElement.getText();
        const countValue2 = Number(updatedCountValueText.replace('Count: ', ''));
        expect(countValue2).toEqual(-1);
    });

    it('selects a genre', async () => {
        // Click on the 'HORROR' genre button
        const horrorButton = await $('button.genre-item=HORROR');
        await horrorButton.click();

        // Verify that the selected genre is 'HORROR'
        const genreSelectedText = await $('p.genre-selected').getText();
        console.log('Genre Selected Text:', genreSelectedText);

        expect(genreSelectedText).toContain('HORROR movies found');
    });


    it('should perform a search when search button is clicked', () => {
        browser.url('/');

        const inputField = $('.input-search-form');
        const searchButton = $('.search-film-button');

        inputField.setValue('Action movies');
        searchButton.click();

        // You might want to add assertions here to check if the search action was performed correctly
        // For example, you can assert that the alert message is displayed with the correct query.

        browser.pause(2000); // Pause for visualization purposes, you can remove this in real tests
      });

      it('should perform a search when Enter key is pressed', () => {
        browser.url('/');

        const inputField = $('.input-search-form');

        inputField.setValue('Comedy movies');
        inputField.keys('Enter');

        // You might want to add assertions here as well

        browser.pause(2000);
      });


});






// const { expect } = require('@wdio/globals')
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()
//         await browser.url("http://localhost:3000/");
//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })
