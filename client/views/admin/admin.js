
  /*events*/
  
Template.admin.events({
    'click #add-item': function(event, template){
        event.preventDefault();
        var form = template.find('#new-item');
        var name = template.find('#item-name').value;
        var groceries = template.find('#groceries');
        var food = template.find('#food');
        var dryCleaning = template.find('#dryCleaning');
        var special = template.find('#special-item');
        var price = template.find('#item-price').value;
        var category = "";
        if(groceries.checked == true){
             category = "groceries";
             dryCleaning.checked = food.checked = special.checked  = false;
        }else if(food.checked == true){
             category = "food";
             dryCleaning.checked = groceries.checked = special.checked  = false;
        }else if(dryCleaning.checked == true){
             category = "dry cleaning";
             groceries.checked = food.checked = special.checked  = false;
        }else if(special.checked == true){
             category = "special";
             dryCleaning.checked = food.checked = groceries.checked  = false;
        }else{
            console.log('choose a category');
        }
        console.log(name + category + price);
        var id = Items.insert({
            name: name,
            category: category,
            price: price
        });
        console.log(id);
        form.reset();
    }
});