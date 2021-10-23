const schemeSvg = document.querySelector('.scheme-svg'),
      price = document.querySelector('.price-total'),
      cost = 12,
      btn = document.querySelector('.btn'),
      dateBlock = document.querySelectorAll('.date-item');

let totalPrice = 0;

price.textContent = totalPrice;

schemeSvg.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
    if (target.classList.contains('sits')) {
        if (!target.classList.contains('booked')) {
            target.classList.toggle('active');
            totalPrice = schemeSvg.querySelectorAll('.active').length * cost;
            price.textContent = totalPrice;
        }
    }    
});

//burger

const burgerBtn = document.querySelector('.burger'),
      menu = document.querySelector('.nav-menu');

window.addEventListener('click', (e) => {
    if (e.target.classList.contains('burger')) {
        burgerBtn.classList.toggle('active');
        menu.classList.toggle('active');
    }
});

window.addEventListener('click', (e) => {
    if (!e.target.closest('.header-nav')) {
        burgerBtn.classList.remove('active');
        menu.classList.remove('active');
    }
});

//dateBlock


function removeActiveClass() {
    dateBlock.forEach(item => {
        item.classList.remove('active');
    });
}

function addActiveClass(i = 1) {
    dateBlock[i].classList.add('active');
}

removeActiveClass();
addActiveClass();

dateBlock.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target)
        if (target == item || target.closest('.date-block')) {
            removeActiveClass();
            addActiveClass(i);
        }
    });
});

//date

const getDate = () => {
    const date = new Date(),
          month = date.getMonth(),
          day = date.getDay(),
          dateNum = date.getDate();

    return {
        "month": month,
        "dateNum": dateNum,
        "day": day
    };
    
};

const addZero = (num) => {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
};

const setDate = () => {
    const date = getDate();
    const dateItem = document.querySelectorAll('.date-item');

    dateItem.forEach((item, i) => {
        const month = item.querySelector('.month'),
              dateNum = item.querySelector('.day'),
              day = item.querySelector('.week');

        const weekNum = {
            '1': 'пн',
            '2': 'вт',
            '3': 'ср',
            '4': 'чт',
            '5': 'пт',
            '6': 'сб',
            '7': 'вс',
        },
        monthNum = {
            '1': 'янв',
            '2': 'фев',
            '3': 'мар',
            '4': 'апр',
            '5': 'май',
            '6': 'июн',
            '7': 'июл',
            '8': 'авг',
            '9': 'сен',
            '10': 'окт',
            '11': 'нбр',
            '12': 'дек',
        }

        for (let key in weekNum) {
            if (date.day === key) {
                day.textContent = weekNum[key];
            }           
        }

        for (let key in monthNum) {
            if (date.month === key) {
                month.textContent = monthNum[key];
            }           
        }

        dateNum.textContent = addZero(date.dateNum + i);
    });
    
};

getDate();
setDate();