document.addEventListener('DOMContentLoaded', () => {

  const inputs = document.querySelectorAll('.input'),
        forms = document.querySelectorAll('.inner-block'),
        total = document.querySelectorAll('.sum'),
        finalSum = document.querySelector('.final-sum'),
        addBtn = document.querySelector('.add'),
        cotegoriesItem = document.querySelectorAll('.cotegories-item'),
        cotegoriesList = document.querySelector('.cotegories-list'),
        mainForm = document.querySelector('.main-form');

  let newArr = [];
  let sum = 0;



  total.forEach(item => {
    item.innerHTML = '0';
  });

  //Добавление формы

  let addBlock = (parentElem) => {
    let div = document.createElement('li');
    div.className = 'cotegories-item';
    div.innerHTML = `
      <h2 class="cotegories-title title">Др. расходы</h2>
      <div class="inner-block">
          <input name="text" type="text" class="input">
          <input name="text" type="text" class="input">
          <input name="text" type="text" class="input">
      </div>
      <div class="total"><span class="sum">0</span><span>p</span></div>`;
    parentElem.append(div);
  };

  //Добавление поля

  let addInput = (parent) => {
    let el = document.createElement('input');
    el.className = 'input';
    parent.append(el);
  }

  addBtn.addEventListener('click', (e) => {
    addBlock(cotegoriesList)
  })

  forms.forEach((form, i) => {
    form.addEventListener('change', (e) => {
      if(e.type == 'input') {
        total[i].innerHTML = [].reduce.call(form.children, function(s,a) {
          return +s + +a.value
        },'')
      }
    });

    form.addEventListener('input', (e) => {
      if(e.type == 'input') {
        total[i].innerHTML = [].reduce.call(form.children, function(s,a) {
          return +s + +a.value
        },'')

        finalSum.innerHTML = [].reduce.call(inputs, function(s,a) {
          return +s + +a.value;
        },'')
      }


    })
  });

});


