/* User Submitted Posts > Plugin Settings */

jQuery(document).ready(function($){
	
	// toggle panels
	$('.default-hidden').hide();
	$('#mm-panel-toggle a').click(function(){
		$('.toggle').slideToggle(300);
		return false;
	});
	$('h2').click(function(){
		$(this).next().slideToggle(300);
		return false;
	});
	
	// jump toggle panels
	$('#mm-panel-primary-link').click(function(){
		$('.toggle').hide();
		$('#mm-panel-primary .toggle').slideToggle(300);
		return true;
	});
	$('#mm-panel-secondary-link').click(function(){
		$('.toggle').hide();
		$('#mm-panel-secondary .toggle').slideToggle(300);
		return true;
	});
	
	// toggle form info
	$('.usp-custom-form').click(function(e){
		e.preventDefault;
		$('.usp-custom-form-info').slideDown(300);
	});
	$('.usp-form').click(function(e){
		e.preventDefault;
		$('.usp-custom-form-info').slideUp(300);
	});
	
	// toggle categories
	$('.usp-cat-toggle-link').click(function(){
		$('.usp-cat-toggle-div').toggle(300);
		return false;
	});
	
});
