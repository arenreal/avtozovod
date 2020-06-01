
  Modernizr.load({
    test: Modernizr.csstransforms3d && Modernizr.csstransitions,
    yep : ['http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js','js/jquery.hoverfold.js'],
    nope: 'css/fallback.css',
    callback : function( url, result, key ) {

      if( url === 'js/jquery.hoverfold.js' ) {
        $( '#grid' ).hoverfold();
      }

    }
  });
