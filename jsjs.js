 $(document).ready(function(){
            var video = $("#vi");
                $("#tojerap").hide();
                $("#ep").hide();
                $("#znasme").hide();
                $("#jarepujem").hide();
        
             $("#tojerap2").mouseenter(function(){
                $("#tojerap").show();
                $("#tojerap").css("width","100%");
            });
                 $("#tojerap2").mouseleave(function(){
                $("#tojerap").hide();
                $("#tojerap").css("width","100%");
            });
                 $("#jarepujem2").mouseenter(function(){
                $("#jarepujem").show();
                $("#jarepujem").css("width","100%");
            });
                 $("#jarepujem2").mouseleave(function(){
                $("#jarepujem").hide();
                $("#jarepujem").css("width","100%");
            });
                 $("#znasme2").mouseenter(function(){
                $("#znasme").show();
                $("#znasme").css("width","100%");
            });
                 $("#znasme2").mouseleave(function(){
                $("#znasme").hide();
                $("#znasme").css("width","100%");
            });
                 $("#ep2").mouseenter(function(){
                $("#ep").show();
                $("#ep").css("width","100%");
            });
                 $("#ep2").mouseleave(function(){
                $("#ep").hide();
                $("#ep").css("width","100%");
            });
              
              $("#name").mouseenter(function(){
                 $(this).css("border","5px solid white");
                 if($(this).val()!='')
                {
                    $(this).css("border","5px solid darkgreen");

                }
              });
              $("#name").mouseleave(function(){
                $(this).css("border","1px solid white");
                if($(this).val()!='')
                {
                    $(this).css("border","5px solid darkgreen");

                }
              });

               $("#email").mouseenter(function(){
                 $(this).css("border","5px solid white");
                 if($(this).val()!='')
                {
                    $(this).css("border","5px solid darkgreen");

                }
              });
              $("#email").mouseleave(function(){
                $(this).css("border","1px solid white");
                if($(this).val()!='')
                {
                    $(this).css("border","5px solid darkgreen");

                }
              });

               $("#message").mouseenter(function(){
                $(this).css("border","5px solid white");
                 if($(this).val()!='')
                {
                    $(this).css("border","5px solid darkgreen");

                }
              });
              $("#message").mouseleave(function(){
                $(this).css("border","1px solid white");
                 if($(this).val()!='')
                {
                    $(this).css("border","5px solid darkgreen");

                }
              });
            

              function isOnScreen(elem) {
    // if the element doesn't exist, abort
                if( elem.length == 0 ) {
                    return;
            }
            var $window = jQuery(window)
            var viewport_top = $window.scrollTop()
            var viewport_height = $window.height()
            var viewport_bottom = viewport_top + viewport_height
            var $elem = jQuery(elem)
            var top = $elem.offset().top
            var height = $elem.height()
            var bottom = top + height

            return (top >= viewport_top && top < viewport_bottom) ||
            (bottom > viewport_top && bottom <= viewport_bottom) ||
            (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
            }

        
                window.addEventListener('scroll', function(e) {
                if( isOnScreen( jQuery( '#vi' ) ) ) { /* Pass element id/class you want to check */
                $("#vi").trigger('play');
            }   
    });

                $(".slika").css("filter","grayscale(60%)");
               $(".slika").mouseenter(function(){
                    $(this).css("transform","scale(1.1)");
                    $(this).css("filter","grayscale(0%)");
                });
                $(".slika").mouseleave(function(){
                    $(this).css("transform","scale(1)");
                    $(this).css("filter","grayscale(60%)");

                });



        });
    