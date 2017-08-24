jQuery(document).ready(function($) {
	$ulysses = $('a[href^="ulysses://"]');
	$ulysses.each(function(index, el) {
		$link = $(this).text();
		$link = $link.toLowerCase().replace(/\ /g, '-');
		$(this).attr('href', '#' + $link);
		console.log($(this));
	});
});
