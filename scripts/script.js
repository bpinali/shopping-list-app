/* Function to add items */
function addItem() {
    var itemName = $('#newItem').val();
    var itemBudgetPrice = $('#budgetPrice').val();
    var itemActualPrice = $('#actualPrice').val();
    // alert("add item value" + itemName + itemBudgetPrice + itemActualPrice);

    if (itemName.length === 0) {
        alert('You need to add something!');

    } else {

        //dynamicaly create one row inside the shopping list
        var row = $('<li><button class="checkbox"><i class="fa fa-check"></i></button>' + itemName + '<button class="delete"><i class="fa fa-times"></i></button><input class="budget-price" type="text" value="' + itemBudgetPrice + '"><input class="actual-price" type="text" value="' + itemActualPrice + '"></li>');

        //add each row to the previous ones
        $('.list-items').append(row);

        //empty the input box after submit by reseting the value
        itemName = $('#newItem').val('');
        itemBudgetPrice = $('#budgetPrice').val('');
        itemActualPrice = $('#actualPrice').val('');
    }

}


/* Function to check items in the list */
function checkItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('checked');

}


/* Function to remove items from the list */
function removeItem() {
    //$(this) means that on WHATEVER you just clicked, go to the parent of it (in our case the LI) and remove it
    $(this).parent().remove();

}


/* Function to calculate total for budgeted and actual columns */
function calculateTotal() {}


/* Function to clear the list of all items */
function clearList() {
    $('.list-items').empty();
    $('#budget-total').html("$0.00");
    $('#actual-total').html("$0.00");
}

$(document).ready(function () {
    /* on click on the ".add-item" button activate function called addItem()  */
    $('.add-item').on('click', function () {
        addItem();
    });


    /* on click on the ".clear-list" button activate function called clearList()  */
    $('.clear-list').on('click', function () {
        clearList();
    });
});

/* on click on the ".checkbox" button activate function called checkItem()  */
$(document).on('click', '.checkbox', checkItem);

/* on click on the ".delete" button activate function called removeItem()  */
$(document).on('click', '.delete', removeItem);

/* upon entry or modification of price input value activate function called calculateTotal()  */
