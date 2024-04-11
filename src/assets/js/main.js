
let btnHamburger = document.getElementById("btn-hamburger");


// Click Toggle Class Function
let toggleClass = (elem,className) => {
    let classes = document.querySelector(`.${elem}`);
    let mainContent = document.querySelector(".main");
    let lineHamburger = document.querySelectorAll(".lineH")

    if(! classes.classList.contains("w-0")){
        classes.classList.remove(className)
        classes.classList.add('w-0')
        mainContent.style.marginLeft = "0";

        lineHamburger[0].classList.add('rotate-45')
        lineHamburger[0].classList.add('translate-y-2')
        lineHamburger[1].classList.add('opacity-0')
        lineHamburger[2].classList.add('-rotate-45')
        lineHamburger[2].classList.add('-translate-y-2')

    }else{
        classes.classList.remove('w-0')
        classes.classList.add(className)
        mainContent.style.marginLeft = "275px";

        lineHamburger[0].classList.remove('rotate-45')
        lineHamburger[0].classList.remove('translate-y-2')
        lineHamburger[1].classList.remove('opacity-0')
        lineHamburger[2].classList.remove('-rotate-45')
        lineHamburger[2].classList.remove('-translate-y-2')
    }
}

// Click To Button Hamburger
btnHamburger.addEventListener("click",() => toggleClass('menuNav','w-[275px]'))

// Get Date Timestamp convert to string date
const date = new Date();
console.log(date.toDateString());

// const dateArticle = `${date.toLocaleDateString()}`
const dateArticle = `${date.toDateString()}`
const element = document.querySelector(".articleDate");
element.innerHTML = dateArticle;
// /////////////////

// Open And Close Popup Menu
const button = document.getElementById("my-button");
const modal = document.getElementById("my-modal");
const closeButton = document.getElementById("my-modal-close-button");

button.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add('flex');
});

closeButton.addEventListener("click", () => {
    modal.classList.remove('flex')
  modal.classList.add("hidden");
});
// /////////////////////////


// hamburger effect
{/* <button
      onClick={() => setIsOpen(!isOpen)}
      className="flex flex-col justify-center items-center w-10 h-10 border border-black group"
    >
      <span
        className={`bg-black block transition-all duration-300 ease-out h-1 w-6 rounded-full ${
          isOpen ? 'rotate-45 translate-y-1.5' : ''
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-1 w-6 rounded-full ${
          isOpen ? 'opacity-0' : ''
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-1 w-6 rounded-full ${
          isOpen ? '-rotate-45 -translate-y-1.5' : ''
        }`}
      ></span>
    </button> */}
//
