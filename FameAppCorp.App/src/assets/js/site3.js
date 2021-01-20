/*----------------------------------------------------

    Check library dependecy

----------------------------------------------------*/

var checkDependency = function() {

    "use strict";

    //Check Library
    if (!window.jQuery) { console.error("Library Jquery is missing"); }
    else {
      console.log("Library Jquery found")
    }

    //if (!window.Popper) { console.error("Library Popper.js is missing");}
    //else console.log("Library Jquery found")


    console.log(typeof ($.fn.modal))
    if (typeof ($.fn.modal) === 'undefined') {
      console.error("Library Bootstrap is missing");
    }
    else {
      console.log('Boostrap found')
    }

};

checkDependency();


/*----------------------------------------------------

 mega-menu
 
----------------------------------------------------*/

$(function () {
	
	$(".hamburger").on("click", function(e) {
		$(this).toggleClass("is-active");
		
		$(".brand__hamburger").toggleClass("active");
		
		$("#navMain").slideToggle();
		
		event.preventDefault();	
	});
	
});


/*----------------------------------------------------

    Menu selector

----------------------------------------------------*/

var selectMenuItem = function(menuItem_array) {
    
    "use strict";
    
    var $currentItem;
	var $currentSubMenuItem;
    
	for (var i=0; i<menuItem_array.length ; i++) {
		$currentItem = $(menuItem_array[i]);
        
		$currentSubMenuItem = $(menuItem_array[i]+"MenuFooter");
		
        //select current menu
        $currentItem.addClass('active');  
		$currentSubMenuItem.addClass('active'); 
		
	}
    
};

/* --------------------------------------------
 
    labelSpyTarget : Spy input to reduce and move label

-------------------------------------------- */

$(function ($) {
    
    "use strict";
    
    var labelSpyTarget = function() {
    
        $( "[data-label-spy-target]" ).focusin(function() {
            
            /* focus in --> reduce and move label */

            var targetLabel = $(this).attr("data-label-spy-target");

            $(targetLabel).addClass("in");

            console.log("in");
        }).focusout(function() {

            /* focus out --> if there is no text in input then reduce and move label */
            
            if ( $(this).val().length < 1 ) {
                var targetLabel = $(this).attr("data-label-spy-target");

                $(targetLabel).removeClass("in");
            }

        });

    };
    
    if ( $( "[data-label-spy-target]" ).length > 0 ) {
        labelSpyTarget();
    }

});

/* --------------------------------------------
 
    toggle-password

-------------------------------------------- */

$(function ($) {

	$("[data-toggle-password]").on("click", function() {
		
		var targetInput = $("[data-password]");
		var targetPicto = $("[data-toggle-password] i");
		
		if(targetInput.attr("type")=="password") {
			targetInput.attr("type","text");
			targetPicto.attr("class","fal fa-fw fa-eye");
			
		} else {
			targetInput.attr("type","password");
			targetPicto.attr("class","fal fa-fw fa-eye-slash");
		}
		
		event.preventDefault();	
	});

});



/* --------------------------------------------
 
    toggle-password

-------------------------------------------- */

$(function ($) {

	$(".header__left a").on("click", function() {
		window.history.back();
	})

});



/* --------------------------------------------
 
    only for test on iPhone

-------------------------------------------- */

//$("a").click(function (event) {
//    event.preventDefault();
//    window.location = $(this).attr("href");
//});



/* --------------------------------------------
 
    only for test on iPhone

-------------------------------------------- */

//$(".branch .branch__body").click(function (event) {
//$(".branch:not(.branch--last-child) .branch__body")


$(".branch:not(.branch--last-child) > .branch__body").click(function (event) {
	$(this).toggleClass("in");
//    event.preventDefault();
});

$(".branch--last-child > .branch__body").click(function (event) {
//	alert("content");
//    event.preventDefault();
});





//
//$('[data-fancybox]').fancybox({
//	toolbar  : false,
//	smallBtn : true,
//	iframe : {
//		preload : false
//	}
//})
//
//



/* --------------------------------------------
 
    radio collapse content

-------------------------------------------- */

$(function ($) {
    
    "use strict";
	
	var refreshAllradioCollapsedContent = function() {
		
		$( "[data-spy-target-content]" ).each(function( ) {

			if ( $(this).is(':checked') ) {
				//checked
				$( $(this).attr("data-spy-target-content") ).collapse('show');

			} else {
				//unchecked
				$( $(this).attr("data-spy-target-content") ).collapse('hide');

			}

		})
		
	}
	
	$( "[data-spy-target-content]" ).on("click", function() {
		refreshAllradioCollapsedContent();
	});

});


/* --------------------------------------------
 
    radio collapse content

-------------------------------------------- */

$(function ($) {
	
	$( "[data-node-collapsable]" ).on("click", function() {
		//refreshAllradioCollapsedContent();
		$(this).toggleClass("open");
		$(this).next().collapse("toggle");
	});
	
//	$( "[data-node-interaction]" ).on("click", function() {
//		alert("open");
//	});




	$( "[data-node-collapsable-open]" ).on("click", function() {
		$("[data-node-collapsable]").addClass("open");
		$("[data-node-collapsable]").next().collapse("show");
	});


	$( "[data-node-collapsable-close]" ).on("click", function() {
		$("[data-node-collapsable]").removeClass("open");
		$("[data-node-collapsable]").next().collapse("hide");
	});

	
	$( "[data-node-collapsable-toggle]" ).on("click", function() {
		
		$(this).toggleClass("open");
		
		if( $(this).attr("data-state")=="open" ) {
			$("[data-node-collapsable]").removeClass("open");
			$("[data-node-collapsable]").next().collapse("hide");
			$(this).attr("data-state","close" );
		} else {
			$("[data-node-collapsable]").addClass("open");
			$("[data-node-collapsable]").next().collapse("show");		
			$(this).attr("data-state","open" );
		}
		
	});	


});

/* --------------------------------------------
 
    popup-waiting

-------------------------------------------- */

//var popupWaitingOpen = function () {
//  $(".popup-waiting").addClass("active");
//};
//var popupWaitingClose = function () {
//  $(".popup-waiting").removeClass("active");
//};
//var popupWaitingSetProgress = function (percentProgress_p) {
//  $(".popup-waiting .progress-bar").css("width", percentProgress_p + "%");
//};
//var popupWaitingSetTextHeader = function (text_p) {
//  $(".popup-waiting__header").html(text_p);
//};
//var popupWaitingSetTextFooter = function (text_p) {
//  $(".popup-waiting__footer").html(text_p);
//};
