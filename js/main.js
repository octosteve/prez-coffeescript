Zepto(function($){
  $('.lang-javascript').each(function(e) {
    var code = $(this).prev().filter('.lang-coffeescript').text();
    if(!!code) {
      $(this).find('code').text(CoffeeScript.compile(code, {bare: true}));
    }
  });

  // hljs.initHighlightingOnLoad();
  prettyPrint();

  $('.flipcard').on('click', function() {
    $(this).toggleClass('flip');
  });

  impress().init();
});
