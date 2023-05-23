const tabItems = document.querySelectorAll('.tab-item')
const tabContentItems = document.querySelectorAll('.tab-content-item')


// Select tab content item
function selectItem(e) {
    // remove all show and border classes
    removeBorder()
    removeShow()
    // Add border to current tab 
    this.classList.add('tab-border')
    // Grab content item from DOM 
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show')
}

// Remove bottom bordere from all tab items
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border')
    })
}

//  remove show class from all content items
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show')
    })
}

// listen for tab item click 
tabItems.forEach(item => {
    item.addEventListener('click', selectItem)
})