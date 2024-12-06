let 날짜 =["2024-11-26","2024-11,27"]
let 항목 =["콜라","커피"]
let 금액 =["1000","1200"]

//등록함수

function 등록함수( ){
    console.log('등록함수 실행');
    let dateInput = document.querySelector('.dateInput');
    let date = dateInput.value;
    let itemInput = document.querySelector('.itemInput');
    let item = itemInput.value;
    let amountInput = document.querySelector('.amountInput');
    let amount = amountInput.value;

    날짜.push(date);
    항목.push(item);
    금액.push(amount);

    출력함수( )

}//f end


//출력함수

function 출력함수( ){
    let table = document.querySelector('table')
    let html = ''
    for(let index = 0; index<=날짜.length-1;index++){
        html += `<tr>
                    <th>${날짜[index]}</th>
                    <th>${항목[index]}</tr>
                    <th>${금액[index]}</th>
                </tr> `
    }
    table.innerHTML = html;

}//f end



