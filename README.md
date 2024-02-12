# popup_window
A barebones fancybox replacement

#How to use:

Make a parent element to hold the pop up html
<div id="parentElement"></div>

<script>

	// make a variable for the html content that will be displayed in the pop up
	let modalHtml = `<p>Some text in the Modal..</p>`;

	// make the pop-up with 
	/*	
 		modal name
		Your html
		the id of the containing element (parent element)
		Auto open (bool - default is false) if true will open the modal on load
		closeButton (bool - default is true) if true will make a X / close button in the upper right corner
		backgroundClickClose (bool  default is false) if true will close the pop-up when user clicks outside the pop-up
  	*/
	
	makeModal('testmodal', modalHtml, 'parentElement', false, true, false);
	
</script>
