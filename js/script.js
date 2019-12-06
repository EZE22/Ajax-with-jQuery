$(function () {
  //$.get(), $.post(), $.ajax(), $.getJSON()

  //***Retrieving Flicker Images Through the Flickr API***
  //JSON data format: this is the normal javascript object notation {key: value, key2: value}
  //using the $.getJSON()
  let flikrAPIUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

  $.getJSON(flikrAPIUrl, {
    //options
    tags: "sun, beach",
    tagmode: "any",
    format: "json"
  }).done(function (data) {
    //success
    console.log(data);
    $.each(data.items, function (index, item) {
      console.log(item);
      $("<img>").attr("src", item.media.m).appendTo("#flickr");
      if(index === 4) {
        return false;
      }
    });
  }).fail(function () {
    //failure
    alert("Ajax call failed.");
  })
});
