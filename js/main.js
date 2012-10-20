Zepto(function($){
  $('.javascript').each(function(e) {
    $(this).find('code').text(CoffeeScript.compile($(this).parents('.step').find('.coffeescript').text(), {bare: true}));
  });

  $('pre code, textarea').each(function(i, e) {hljs.highlightBlock(e);});

  // impress().init();
});
