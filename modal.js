// PURE JS SOLUTION MODAL / NEW FANCYBOX REPLACEMENT
function makeModal(modalName, htmlContent, parentElement, autoOpen = false, closeButton = true, backgroundClickClose = false) {

    let content = `<dialog data-${modalName}-modal class="make-modal">
					<div class="modal-close-wrap">
						<div class="modal-close-x" data-${modalName}-close-modal-x >X</div>
					</div>
            <div>${htmlContent}</div>`;  

	if (closeButton === true) {
		content += `<button class="modal-close" data-${modalName}-close-modal>Close</button>`;
	}

    content += `</dialog>`;

	document.getElementById(parentElement).innerHTML = content;

    
    const openButton = document.querySelector("[data-"+modalName+"-open-modal]");
    
    if (closeButton === true) {
        const closeButtonElement = document.querySelector("[data-"+modalName+"-close-modal]");
        closeButtonElement.addEventListener("click", function() { modal.close(); });
    }
    
    const closeButtonX = document.querySelector("[data-"+modalName+"-close-modal-x]");
    const modal = document.querySelector("[data-"+modalName+"-modal]");

    if (openButton) {
        
        openButton.addEventListener("click", function() {
            modal.showModal(); // Show a dialog as a modal (no tab behind the overlay)
        });

    }

    closeButtonX.addEventListener("click", function() { modal.close(); });

    if (backgroundClickClose === true) {
		modal.addEventListener("click", function(e) {

			const dialogDimensions = modal.getBoundingClientRect();

			if (
					e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom
				) {
				modal.close();
			}
		});
	}

    if (autoOpen === true) {
        modal.showModal();
    }

}
