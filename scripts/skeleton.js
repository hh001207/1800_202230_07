//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
function loadSkeleton(){
    console.log($('#navbarPlaceholder').load('/nav.html'));
    console.log($('#footerPlaceholder').load('/footer.html'));
    console.log($('#mainPlaceholder').load('/main.html'));
}
loadSkeleton();  //invoke the function
