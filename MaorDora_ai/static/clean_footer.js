console.log("!!!!!!!!!!!!!! I AM WORKING !!!!!!!!!!!!!!");
window.addEventListener('load', function() {

    // אופציה א: מחפש לפי הקלאס הידוע
    const footers = document.querySelectorAll('.myst-footer, footer, .made-with-myst');
    footers.forEach(el => el.style.display = 'none');

    // אופציה ב (הגרעינית): עובר על כל האלמנטים ומחפש את הטקסט ספציפית
    const allElements = document.querySelectorAll('div, p, span, a');
    allElements.forEach(el => {
        if (el.innerText && el.innerText.includes("Made with MyST")) {
            el.style.visibility = 'hidden';
            // או למחוק לגמרי:
            // el.remove(); 
        }
    });
});