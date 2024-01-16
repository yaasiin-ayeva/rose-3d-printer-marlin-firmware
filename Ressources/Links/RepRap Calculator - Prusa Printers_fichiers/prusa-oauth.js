jQuery(window).ready(function($){

    prusa_oauth.init($);

});

;(function ( prusa_oauth, undefined ) {
    prusa_oauth.init = function($) {
        
        $('#logout-button, .logout-button').on('click', function(e){
            $.ajax({
               url : prusa_oauth2.ajaxurl,
               type : 'post',
               data : {
                   action : 'oauth_logout'
               },
               success : function( response ) {
                   window.location = response;
               }
            });
            
            
            e.preventDefault();
        });
        
    }
    
})(window.prusa_oauth = window.prusa_oauth || {});