$(document).ready(function(){
    $("#target").click(function(){
        var id=$("#deckId").val();
        $.ajax({
            url: "http://infodeck.herokuapp.com/api/deck/"+id+"/",
        }).done(function(data){
            var myJSON = JSON.stringify(data, null, 4);
            $("#target2").text(myJSON);
        });
    });
});