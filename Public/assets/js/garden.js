
const garden = [
    {
        name: "parsley",
        dayPlanted: 1589932800,
        daysToMature: 50,
        maturity:70,
        img: "assets/TT Images/parsley.png",
        positionTop: -70,
        positionLeft: 100,
    },
    {
        name: "basil",
        daysToMature: 40,
        dayPlanted: 1589932800,
        maturity:50,
        img: "assets/TT Images/basil.png",
        positionTop: -70,
        positionLeft: 200,
    },
    {
        name: "rosemary",
        daysToMature: 100,
        dayPlanted: 1589932800,
        maturity:180,
        img: "assets/TT Images/rosemary.png",
        positionTop: -70,
        positionLeft: 300,
    },
    {
        name: "cilantro",
        daysToMature: 14,
        dayPlanted: 1589932800,
        maturity:21,
        img: "assets/TT Images/cilantro.png",
        positionTop: -70,
        positionLeft: 400,
    },
    {
        name: "pepper",
        daysToMature: 30,
        dayPlanted: 1589932800,
        maturity:60,
        img: "assets/TT Images/pepper.png",
        positionTop: -70,
        positionLeft: 500,
    }
]

const grids = {
    1:{

    },
    2:null,
    
}

const date = new Date();
console.log(date.valueOf());

for (i=0; i<garden.length; i++) {
    let daysToMature = Math.min(~~((date.valueOf()/1000 - garden[i].dayPlanted)/86400), garden[i].maturity);
    let height = daysToMature/garden[i].maturity * 200;
    $("#maturity-div").append(`<p>${garden[i].name}: ${daysToMature}/${garden[i].maturity}<p>`);
    $("#gardendiv").append(`<img class="plants" src="${garden[i].img}" style="position:fixed; top:${garden[i].positionTop}px; left:${garden[i].positionLeft}px; height:${height}px">`);
}


$(document).ready(function() {
    // to open virtual garden
    $("#gardenbtndiv").on("click", function(event){
        event.stopPropagation();
        $("#whiteout").attr("style", "display: block");
    }); 


    // to close virtual garden
    $(document).click(function(event){
      $("#whiteout").attr("style", "display: none");
    });

    $("#gardendiv").click(function(event){
      event.stopPropagation();
    });

})
