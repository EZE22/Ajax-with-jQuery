$(function () {
  //$.get(), $.post(), $.ajax(), $.getJSON()

  //***Fetching a Server File with JQuery***
  //jquery function called $.load()
  $("#code").load("idontexist.php", function (response, status) {
    if(status === "error"){
      alert("could not find idontexist.php");
    }
    console.log(response);
  });

});
