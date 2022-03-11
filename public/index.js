$( document ).ready(function() {
    $.ajax({
        method: 'GET',
        url: '/groceries'
    })
    .done(function(message) {
        message.forEach(function(grocery) {
            $( 'ul' ).append( `<li>${grocery}</li>` );
        });
    });
});