console.log('script loaded')


$('ul').on('click', 'li', function() {
	//toggle through the class which shows a line-through in css
	$(this).toggleClass('delete');
	$('#sortable').sortable();
});



$('form').submit(function(e){
	e.preventDefault()
	// Get input box value
	var newItem = $('#items').val();
	if (newItem != '') {
		$('ul').append('<li>' + newItem + '</li>');
		// clear out the input box
		$(this).closest('form').find("input[type=text], textarea").val("")
	} 
})

// delete the items with the class 'delete'
$('button').click(function() {
	$('.delete').remove();
})


