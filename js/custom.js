 $(function() {
   var moveLeft = 20;
   var moveDown = 10;

   $('a.trigger').hover(function(e) {
     //$('span#pop-up').show();
	 $(this).next().show();

     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
   }, function() {
     $('span#pop-up').hide();
   });

   $('a.trigger').mousemove(function(e) {
     $("span#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
   });

 });
 
 /*
 $(function() {
   var moveLeft = 20;
   var moveDown = 10;

   $('a.trigger').hover(function(e) {
     //$('div#pop-up').show();
     $(this).parent().next().show();

     //.css('top', e.pageY + moveDown)
     //.css('left', e.pageX + moveLeft)
     //.appendTo('body');
   }, function() {
     $('div#pop-up').hide();
   });

   $('a.trigger').mousemove(function(e) {
     $("div#pop-up").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
   });

 });
 */
 
 
 /*
 $(document).ready(
   $('.hoverimage').mousemove(function (e) {
      $('span', this).css({left: e.pageX - 10, top: e.pageY + 10});
   }); 
});
*/
 
