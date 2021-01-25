// when the document ready, do this function
$(document).ready(function () {
    // set the defult of recipe image
    document.getElementById('img').innerHTML = '<img style="width:100%;" src="assets/images/recipe_default.jpg">';
    // when the find or quick ingredient button be clicked do this function
    $("button").click(function () {
        // detected button text content, when the word is find, then the value is input; When the word id not find, than the value is the content of the button
        var food = document.getElementById('food').value;
        console.log(food);
        var q;
        var text = this.textContent;
        console.log(text)
        if (text == 'find') {
            q = food;
        } else if (text != 'find') {
            q = text;
        }
        //initial setting of the area of recipe and nutrition. Also when switch the keyword, the interface sholud be original setting
        $(".myClass").remove();
        document.getElementById("ingredient").innerHTML = '';
        document.getElementById("qty").innerHTML = "";
        document.getElementById("calories").innerHTML = "2000 kcal";
        document.getElementById("protein").innerHTML = "50g";
        document.getElementById("fat").innerHTML = "70g";
        document.getElementById("carbs").innerHTML = "260g";
        document.getElementById("sugar").innerHTML = "90g";
        document.getElementById("salt").innerHTML = "6g";
        document.getElementById('img').innerHTML = '<img style="width:100%;" src="assets/images/recipe_default.jpg">';

        //call the api to get the data  of edamam-recipe 
        $.ajax({
            url: "https://api.edamam.com/search?q=" + q + "&app_id=514a0cc3&app_key=7e90ffcd7012f7e48ce37a04ddc8d83a&from=0&to=3&calories=591-722&health=alcohol-free",
            type: "GET",
            data: JSON.stringify(),
            contentType: "application/json;charset=UTF-8",
            dataType: "json",
            success: function (data) {
                //get each data below of data.hits from the json from ofresponse 
                data.hits.forEach((element) => {

                    var node = $("<button></button>").text(element.recipe.label); //put the content into the button
                    node.data("data", element); //save the data in to each recipe button which can be use later 
                    node.addClass("myClass");
                    node.addClass("btn-outline-brand"); //button style
                    $("#list").append(node);
                });
                //when the button of recipe be clicked do the function
                $(".myClass").on('click', function (event) {
                    console.log($(this).data("data"));
                    var all_data = $(this).data("data") //call the data out, which store in it
                    var recipe = all_data.recipe;
                    document.getElementById("ingredient").innerHTML = ''; // when click the button, clean the area of whole recipe content first

                    recipe.ingredientLines.forEach((element) => {
                        document.getElementById("ingredient").innerHTML += element + '</br>'

                    }); //display each data from the array and append into the #ingredient
                    var text = this.textContent;
                    console.log(text);
                    //show the recipe name the title and change description of nutrition meter 
                    document.getElementById("cu-recipe").innerHTML = 'Recipe of   ' + text;
                    document.getElementById("cu-meter").innerHTML = 'Real-time Nutrition Meters for  ' + text;
                    document.getElementById("cu-meter-d").innerHTML = 'Below find interactive meters showing the percentage of the recommended daily nutrition allowance per person for your selected recipe (' + text + ')';

                    var pic = recipe.image; //get the each image's url
                    console.log(pic);
                    //get the array data and do the mathmatic into each person than transfrom into string 
                    var qty = recipe.yield;
                    var calories = (recipe.calories / qty).toPrecision(3);
                    var protein = (recipe.totalNutrients.PROCNT.quantity / qty).toPrecision(3);
                    var fat = (recipe.totalNutrients.FAT.quantity / qty).toPrecision(3);
                    var carbs = (recipe.totalNutrients.CHOCDF.quantity / qty).toPrecision(3);
                    var sugar = (recipe.totalNutrients.SUGAR.quantity / qty).toPrecision(3);
                    var salt = (recipe.totalNutrients.NA.quantity / qty / 1000).toPrecision(3);
                    document.getElementById('img').innerHTML = '<img style="width:40%;" src=' + pic + '>'
                    document.getElementById("qty").innerHTML = "serves: " + qty;
                    document.getElementById("calories").innerHTML = calories + 'kcal';
                    document.getElementById("protein").innerHTML = protein + 'g';
                    document.getElementById("fat").innerHTML = fat + 'g';
                    document.getElementById("carbs").innerHTML = carbs + 'g';
                    document.getElementById("sugar").innerHTML = sugar + 'g';
                    document.getElementById("salt").innerHTML = salt + 'g';
                    //call other functions
                    value_change();
                    drawChart();
                });
            }
        });

    });

    google.charts.load('current', { 'packages': ['gauge'] });
    google.charts.setOnLoadCallback(drawChart);

    var kcal_value, protein_value, fat_value, carbs_value, sugar_value, salt_value;
    //get each content,which store in string form, about index of nutrition value and then remove the unit of measurement in string finally transform the string into number which can be use to draw the chart
    function value_change() {
        var kcal = document.getElementById("calories").textContent;
        kcal_value = Number(kcal.substring(0, kcal.length - 4));
        var protein = document.getElementById("protein").textContent;
        protein_value = Number(protein.substring(0, protein.length - 1));
        var fat = document.getElementById("fat").textContent;
        fat_value = Number(fat.substring(0, fat.length - 1));
        var carbs = document.getElementById("carbs").textContent;
        carbs_value = Number(carbs.substring(0, carbs.length - 1));
        var sugar = document.getElementById("sugar").textContent;
        sugar_value = Number(sugar.substring(0, sugar.length - 1));
        var salt = document.getElementById("salt").textContent;
        salt_value = Number(salt.substring(0, salt.length - 1));
    }

    //Firstly, call the value change function first, which means everytime nutrition value changes, it can redraw the charts. Secondly, calculate the percentage of each index of recommended numbers 
    function drawChart() {
        value_change();
        k = (kcal_value / 2000) * 100;
        p = (protein_value / 50) * 100;
        f = (fat_value / 70) * 100;
        c = (carbs_value / 260) * 100;
        su = (sugar_value / 90) * 100;
        sa = (salt_value / 6) * 100;
        document.getElementById("g_k").innerHTML = k.toPrecision(3) + '%';
        document.getElementById("g_p").innerHTML = p.toPrecision(3) + '%';
        document.getElementById("g_f").innerHTML = f.toPrecision(3) + '%';
        document.getElementById("g_c").innerHTML = c.toPrecision(3) + '%';
        document.getElementById("g_su").innerHTML = su.toPrecision(3) + '%';
        document.getElementById("g_sa").innerHTML = sa.toPrecision(3) + '%';
        console.log(k, p, f, c, su, sa);

        //create data table for each index
        k_data = new google.visualization.DataTable();
        k_data.addColumn('number', 'Calories');
        k_data.addRows(2);
        k_data.setCell(0, 0, k);
        p_data = new google.visualization.DataTable();
        p_data.addColumn('number', 'Fat');
        p_data.addRows(2);
        p_data.setCell(0, 0, p);
        f_data = new google.visualization.DataTable();
        f_data.addColumn('number', 'Protein');
        f_data.addRows(2);
        f_data.setCell(0, 0, f);
        c_data = new google.visualization.DataTable();
        c_data.addColumn('number', 'Carbohydrate');
        c_data.addRows(2);
        c_data.setCell(0, 0, c);
        su_data = new google.visualization.DataTable();
        su_data.addColumn('number', 'Sugar');
        su_data.addRows(2);
        su_data.setCell(0, 0, su);
        sa_data = new google.visualization.DataTable();
        sa_data.addColumn('number', 'Salt');
        sa_data.addRows(2);
        sa_data.setCell(0, 0, sa);

        var options = {
            width: 400, height: 120,
            redFrom: 0, redTo: 25,
            yellowFrom: 25, yellowTo: 75,
            greenFrom: 75, greenTo: 100,
            minorTicks: 5
        };
        //draw the meters 
        var k_chart = new google.visualization.Gauge(document.getElementById('gauge_kcal'));
        k_chart.draw(k_data, options);
        var p_chart = new google.visualization.Gauge(document.getElementById('gauge_protein'));
        p_chart.draw(p_data, options);
        var f_chart = new google.visualization.Gauge(document.getElementById('gauge_fat'));
        f_chart.draw(f_data, options);
        var c_chart = new google.visualization.Gauge(document.getElementById('gauge_carbs'));
        c_chart.draw(c_data, options);
        var su_chart = new google.visualization.Gauge(document.getElementById('gauge_sugar'));
        su_chart.draw(su_data, options);
        var sa_chart = new google.visualization.Gauge(document.getElementById('gauge_salt'));
        sa_chart.draw(sa_data, options);
    }


});
