# Ideologies website
 This is the repository of the official website for the ideologies discord server!
 
## How to contribute
    If you want to contribute to the website, you can do so by making a pull request.

## How to run the website locally
To run the website locally, you need to have [Node.js](https://nodejs.org/en/) installed. Then, you can run the following commands:
```bash
    npm install
    npm run start
```
This will start a local server on port 25557. You can then access the website by going to `http://localhost:25557` in your browser.

## How to change things on the website
To add a new page to the website you need to add this in the `backend.js` file:
```js
    app.get('/new-page', (req, res) => {
        res.status(200).render('new-page');
    });
```
Then, you need to create a new file in the `views` folder called `new-page.ejs`. This is where you can add the HTML for the page. You can use the `template.ejs` file as an example.