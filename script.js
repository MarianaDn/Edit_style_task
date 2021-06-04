/*functions for accessing elements */
const getS = selector => document.querySelector(selector);
const getSs = selector => document.querySelectorAll(selector);
/**/

/*start function for event button edit: display the desired block and content of top-block*/
getS('.btn-edit').addEventListener('click', function(){
    getS('.edit-block').classList.add('show');
    getS('.style-block').classList.remove('show');
    getS('.edit-area').value = getS('.top-block').innerHTML;
    getS('.create-table').classList.add('hide');
    getS('.create-list').classList.add('hide');
});
/*end function for event button edit*/

/*start function for event button save: display changes on top-block*/
getS('.btn-save').addEventListener('click', function(){
    getS('.top-block').innerHTML = getS('.edit-area').value;
    getS('.edit-block').classList.remove('show');
});
/*end function for event button save*/

/*start function for event button style: display block style*/
getS('.btn-style').addEventListener('click', function(){
    getS('.edit-block').classList.remove('show');
    getS('.style-block').classList.add('show');
});
/*end function for event button style*/

/* start function font-size style*/
for(let i = 0; i < getSs('.form-size > input').length; i++){
    getSs('.form-size > input')[i].addEventListener('click', function(){
        getS('.top-block').style.fontSize = event.target.value;
    });
}
/* end function font-size style*/

/* start function font-family style*/
getS('#fontFamily').addEventListener('change', function(){
     getS('.top-block').style.fontFamily = this.value;
     this.options[0].disabled = true;
});
/* end function font-family style*/

let colors = ['red', 'blue', 'green', 'black', 'yellow', 'pink', 'white', 'purple', 'teal'];

/* start function for change text color or background color*/
function changeColorOrBg(element){
    let flag = 'color';
    getS('.colors').classList.remove('hide');
    for (let i = 0; i < getS('.colors').children.length; i++) {
        getS('.colors').children[i].style.backgroundColor = colors[i];
        getS('.colors').children[i].onclick = function(){
            if (flag == element){
                getS('.top-block').style.color = this.style.backgroundColor;
            }else{
                getS('.top-block').style.backgroundColor = this.style.backgroundColor;
            }
            getS('.colors').classList.add('hide');
        }
    }
}
/* end function for change text color or background color*/

/*start function for event button Color of Text: change text color*/
getS('.btn-text-color').addEventListener('click', function(){
    changeColorOrBg('color');
});
/*end function for event button Color of Text: change text color*/

/*start function for event button Background color: change background color*/
getS('.btn-bg-color').addEventListener('click', function(){
    changeColorOrBg('backgroundColor');
});
/*end function for event button Background color: change background color*/

/* start function bold and cursive style */
for (let i = 0; i < getSs('.form-style > input').length; i++) {
    getSs('.form-style > input')[i].addEventListener('click', function(){
        /*adding or removing a class to the corresponding block*/
        if (i == 0){
            (event.target.checked) ? getS('.top-block').classList.add('bold') : getS('.top-block').classList.remove('bold');
        }else{
            (event.target.checked) ? getS('.top-block').classList.add('cursive') : getS('.top-block').classList.remove('cursive');
        }
        /**/
    });
}
/* end function bold and cursive style */

/*start function for event button Add: display second block*/
getS('.btn-add').addEventListener('click', function(){
    getS('.first').classList.remove('show');
    getS('.second').classList.add('show');

    /*cancel automatic selection or pre-selected*/
    for(let i = 0; i < getSs('.form-choose > input').length; i++){
        getSs('.form-choose > input')[i].checked = false;
    }
    /**/

    getS('.second .block').style.height = `${280}px`; /*change height for second block*/

    /*hiding stylization blocks of list and table*/
    getS('.create-list').classList.add('hide');
    getS('.create-table').classList.add('hide');
    /**/
});
/*end function for event button Add: display second block*/

/*start function for radio: table and list:*/
for (let i = 0; i < getSs('.form-choose > input').length; i++) {
    getSs('.form-choose > input')[i].addEventListener('click', function(){
        /*change height for second block*/
        getS('.second .block').style.height = `auto`;

        /*display of the corresponding block depending on a choice*/
        if (i == 0){
            if(event.target.checked){
                getS('.create-table').classList.remove('hide');
                getS('.create-list').classList.add('hide');
            }
        }else{
            if(event.target.checked){
                getS('.create-list').classList.remove('hide');
                getS('.create-table').classList.add('hide');
            }
        }
        /**/
    });
}

const list = document.forms['form-list'];

/*start function for event button Create list*/
getS('.btn-create-list').addEventListener('click', function(){
    const countLi = list.count.value;
    const typeLi = list.type.value;

    getS('.edit-area').value += `<ul style="list-style-type: ${typeLi}">`;
    for(let i = 0; i < countLi; i++){
        getS('.edit-area').value += `<li>item ${i+1}</li>`;
    }
    getS('.edit-area').value += '</ul>';

    list.reset(); /*cleaning the form*/

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
});
/*end function for event button Create list*/

const table = document.forms['form-table'];

/*start function for event button Create table*/
getS('.btn-create-table').addEventListener('click', function(){
    const countTR = table.countTR.value;
    const countTD = table.countTD.value;
    const widthTD = table.widthTD.value;
    const heightTD = table.heightTD.value;
    const widthBrd = table.widthBrd.value;
    const typeBrd = table.typeBrd.value;
    const colorBrd = table.colorBrd.value;

    getS('.edit-area').value += `<table>`;
    for(let i = 0; i < countTR; i++){
        getS('.edit-area').value += `<tr>`;
        for(let j = 0; j < countTD; j++){
            getS('.edit-area').value += `<td style="width: ${widthTD}px; height: ${heightTD}px; border: ${widthBrd}px ${typeBrd} ${colorBrd};">TD</td>`
        }
        getS('.edit-area').value += `</tr>`;
    }
    getS('.edit-area').value += '</table>';

    table.reset();/*cleaning the form*/

    getS('.first').classList.add('show');
    getS('.second').classList.remove('show');
});
/*end function for event button Create table*/
