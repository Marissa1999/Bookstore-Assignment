  $(document).ready(function()
      {

	   $('button').click(function()
	   {
		
        $.get('bookstore.xml', function(data, status)
		{
			
	     console.log(data);
		
         $('body').append('<h1> Book Table </h1>');

         $(data).find('book').each(function()
		 {

            var $book = $(this); 
            var title = $book.find('title').text();
		    var author = $book.find('author').text();
            var year = $book.find('year').text();
            var price = $book.find('price').text();

			
            console.log(title);
			console.log(author);
			console.log(year);
			console.log(price);
			
			
		     $('body').append('<table border="1" width="50%">' 
			                            + '<tr> <th>' + title + '</th> </tr>'
                                        + '<tr> <th>' + author + '</th> </tr>'
										+ '<tr> <th>' + year + '</th> </tr>'
										+ '<tr> <th>' + price + '</th> </tr>' + '</table>');

			
         });
		
	    });
		
    });
	   
});