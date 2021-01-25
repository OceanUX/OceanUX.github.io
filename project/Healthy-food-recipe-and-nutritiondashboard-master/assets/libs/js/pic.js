// when the document ready, do this function
$(document).ready(function () {
    //call the api to get the data from 'hungryhealthyhappy' account of Intagram 
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://instagramdimashirokovv1.p.rapidapi.com/feed/18388683/optional",
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "InstagramdimashirokovV1.p.rapidapi.com",
            "x-rapidapi-key": "0134c85483msh435bfe4428a40bap1d5e25jsn7c9a94c8b690"
        }
    }

    $.ajax(settings).done(function (data) {

        // console.log(data);
        var take = data.edges;
        // disply 9 photos in page, use for loop to auto append each div into page
        var i;
        for (i = 0; i < 9; i++) {
            var pic_v = data.edges[i].node.display_url; //i as variable, get url below each index below data.edges
            // console.log(pic_v);
            var in_pic = $("<div></div>").innerHTML = '<a href="' + pic_v + '" target="_blank"><img style="width:32%; margin:2px;" src=' + pic_v + '></a>' //when photo be clicked, it would open into a new tab
            $(".instagram").append(in_pic); //append each div into class='instagram'
        }

    });


    //use test.json as source
    // $.ajax({
    //     url: "/test.json",
    //     type: "GET",
    //     data: JSON.stringify(),
    //     contentType: "application/json;charset=UTF-8",
    //     dataType: "json",
    //     success: function (data) {
    //         console.log(data); //see the array data
    //         var take = data.edges;
    //         var i;
    //         for (i = 22; i < 40; i++) {
    //             var pic_v = data.edges[i].node.display_url;
    //             console.log(pic_v);
    //             var in_pic = $("<div></div>").innerHTML = '<a href="' + pic_v + '" target="_blank"><img style="width:32%; margin:2px;" src=' + pic_v + '></a>'
    //             $(".instagram").append(in_pic);
    //         }

    //     }
    // });

});