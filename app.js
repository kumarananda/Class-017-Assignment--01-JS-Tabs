
// get elements 
const tabManu = document.querySelectorAll('.c17_tabSec .aks_tab ul li a');
const tab_pan_all = document.querySelectorAll('.c17_tabSec .aks_tab .tab-body .tab-pane')

tabManu.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        tabManu.forEach(item => {
            item.classList.remove('active')
        })
        
        item.classList.add('active');
        const get_pan = document.querySelector(this.getAttribute('href'));
        tab_pan_all.forEach(item => {
            item.classList.remove('active')
        })
        get_pan.classList.add('active')
        console.log(get_pan);
    })
})



// console.log(tabManu);
