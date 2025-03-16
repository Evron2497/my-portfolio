const pageTurnBtn = document.querySelectorAll('.next-page');
pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')){
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            },500)
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20  + index;
            },500)
        }
    }
 });

 // contact me button when click
 const pages = document.querySelectorAll('.book-page.page-right');
 const contactMeBtn = document.querySelector('.btn.Contact-Me');

 contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
                page.style.zIndex = 20 + index;
        },500);
     },(index + 1) * 200 + 100);
    });
 };
 // create reverse index function
 let totalPages = pages.length;
 let pageNumber = 0;


 function reverseIndex() {
    pageNumber--;
    if (pageNumber < 0) {
        pageNumber = totalPages - 1;
 }
}


 // back to profile page onclick
 const backProfileBtn = document.querySelector('.back-profile');

 backProfileBtn.onclick = () => {
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
                pages[pageNumber].classList.remove('turn');

                setTimeout(() => {
                    reverseIndex()
                    pages[pageNumber].style.zIndex = 10 + index;
                },500)
        },(index + 1) * 200 + 100);
    });
 };


 //opening animation
 const coverRight = document.querySelector('.cover.cover-right');

 //animation
 setTimeout(() => {
    coverRight.classList.add('turn');
    }, 2100);


    setTimeout(() => {
        coverRight.style.zIndex = -1;
        }, 2800);

// all pages animation
pages.forEach((_, index) => {
    setTimeout(() => {
        reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex()
                pages[pageNumber].style.zIndex = 10 + index;
            },500)
    },(index + 1) * 200 + 2100);
});







