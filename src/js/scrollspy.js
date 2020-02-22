// (c) Emily Wiseman

$( window ).scroll(function() {
    $( ".page" ).each(function( i ){
        let diff = ($( window ).scrollTop() - $( this ).position().top)
        if ( diff > -200 && diff <= 200 ) {
            $('a[href="#' + this.id + '"]').addClass( "active-tab" );
        }
        else {
            $('a[href="#' + this.id + '"]').removeClass( "active-tab" );
        }
    })
});

