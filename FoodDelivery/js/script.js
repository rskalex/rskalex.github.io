const menuDescr = document.querySelectorAll('.content-descr');

console.log(menuDescr[4].textContent.length)

menuDescr.forEach(item => {
    if (item.textContent.length >= 57) {
        item.textContent = item.textContent.slice(0, 54) + '...'
    }
});

//tabs

const tabs = (headerSelector, tabSelector, tabContent, activeClass, display = 'flex') => {
    const header = document.querySelector(headerSelector),
          content = document.querySelectorAll(tabContent),
          tab = document.querySelectorAll(tabSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();


    header.addEventListener('click', (e) => {
        const target = e.target;
        
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

tabs('.menu-tabs', '.tabs-item', '.block', 'active');

//slider

function slider(container, slide, nextArr, prevArr, wrapper, field) {
    
    //Slider

    const slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArr),
          next = document.querySelector(nextArr),
          sliderWrapper = document.querySelector(wrapper),
          sliderField = document.querySelector(field),
          width = window.getComputedStyle(sliderWrapper).width,
          slider = document.querySelector(container);

    let sliderIndex = 1;
    let offset = 0;
    
    sliderField.style.maxWidth = Math.floor(+width.slice(0, width.length-2)) * 3 + 'px';
    sliderField.style.display = 'flex';
    sliderField.style.transition = '0.5s all';
    alert(sliderField.style.width)
    slider.style.position = 'relative';

    function deleteNotNum(string) {
        return Math.floor(+string.slice(0, string.length-2));
    }
    
    function addOffset(elem) {
        elem.style.transform = `translateX(-${offset}px)`;
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotNum(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotNum(width);
        }
        addOffset(sliderField);

        if (sliderIndex == slides.length) {
            sliderIndex = 1;
        } else {
            sliderIndex++;
        }
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteNotNum(width) * (slides.length - 1);
        } else {
            offset -= deleteNotNum(width);
        }

        addOffset(sliderField);

        if (sliderIndex == 1) {
            sliderIndex = slides.length;
        } else {
            sliderIndex--;
        }

    });

}

slider('.food-slider', '.food-slider-item', '.next', '.prev', '.food-slider-wrapper', '.food-slider-inner')
