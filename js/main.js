Zepto(function($){
  $('.javascript').each(function(e) {
    var code = $(this).prev().filter('.coffeescript').text();
    if(!!code) {
      $(this).find('code').text(CoffeeScript.compile(code, {bare: true}));
    }
  });

  hljs.initHighlightingOnLoad();

  impress().init();
});