$(function() {
    // $("a").on('click', function(event) {
    //     // Make sure this.hash has a value before overriding default behavior
    //     if (this.hash !== "") {
    //       // Prevent default anchor click behavior
    //       event.preventDefault();
    //       // Store hash
    //       var hash = this.hash;
    //       // Using jQuery's animate() method to add smooth page scroll
    //       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    //       $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //       }, 800, function(){
    //         // Add hash (#) to URL when done scrolling (default click behavior)
    //         window.location.hash = hash;
    //       });
    //     } // End if
    // });

    // $("#menu-icon").click(function(){
    //   $(".mobile-nav").toggle();
    // })


    $("#example-nav").click(function(e){
        e.stopPropagation();
        $(".dropdown").slideToggle("fast");
    });
     $(".mobile-menu").click(function(e){
        e.stopPropagation();
        $(".mobile-dropdown").slideToggle("fast");
        // $(".mobile-dropdown").animate({width: 'toggle'});
    });
    $(document).on("click", function(event){
        $(".dropdown").slideUp("fast");
        $(".mobile-dropdown").slideUp("fast");
        // if($(".mobile-dropdown").is(":visible")){
        //   $(".mobile-dropdown").animate({width: 'toggle'});
        // }
                  
    });
});