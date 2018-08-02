var mysql = require("mysql");
var inquirer = require("inquirer");

//Creates our connection to local server and grabs mysql database info from bamazon
var currentUser;
var connection = mysql.createConnection({
    host: "localhost",
    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "",
    database: "bamazon"
});


function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);

    if(integer && (sign === 1)) {
        return true;
    } else { return 'Please enter a whole number'}
}
//Purchasing logic
function promptPurchase() {
    inquirer.prompt([
      
        {
            type: 'input',
            name: 'item_id',
            message: 'Please enter Item ID you would like to purchase',
            validate: validateInput,
            filter: Number
        },
        {
            type: 'input',
            name: "quantity",
            message: "How many do you need?",
            validate: validateInput,
            filter: Number
        },
    ]).then(function (input) {

        var item = input.item_id;
        //var item_ne = itemResponse.product_name;
        // var item_desc = itemResponse.department_name;
        // var price =  parseFloat(itemResponse.price);
        var quantity = input.quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';
      

        var query = connection.query(queryStr, {item_id: item}, function(err, data) {
            if (err) throw err;
           
            //if user selects invalid id, no data shows
            if(data.length === 0) {
                console.log('Err, Wrong ID, Select a valid one');
                listProducts();
               
            } else {
                var productData = data[0];

                if(quantity <= productData.stock_quantity) {
                    console.log('The Product you have is in stock');

                    //Update query string
                    var updateQueryString = 'Update products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
                    


                    //update inventory
                    connection.query(updateQueryString, function(err, data) {
                        if(err) throw err;
                        console.log('Your order has been placed. Total is $' + productData.price * quantity);
                        console.log('Thank you!');
                        //end database connection
                        connection.end();
                    })
                    
                } else {
                    console.log('Sorry not enough products in stock');
                    listProducts();
                }
            }
        });
    });
}



//Display Inventory from Database
function listProducts() {
    
    queryString = 'Select * FROM products';

    //make db query
    connection.query(queryString, function(err, data){
        if(err) throw err;
        console.log('Exisiting Inventory');
        console.log('...... \n');

        var stringOutput = '';
        for (var i = 0; i < data.length; i++) {
            stringOutput = '';
            stringOutput += 'Item ID: ' + data[i].item_id + ' // ';
            stringOutput += 'Product: ' + data[i].product_name + ' // ';
            stringOutput += 'Department: ' + data[i].department_name + ' // ';
            stringOutput += 'Price: $' + data[i].price + '\n';
            stringOutput += 'Quantity: ' + data[i].stock_quantity + ' // ';

            console.log(stringOutput);
        }
        console.log("-- \n");
        //Prompt Purchase
        promptPurchase();
    })
};

function runBamazon() {
    listProducts();
}

runBamazon();