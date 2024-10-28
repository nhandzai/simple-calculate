document.getElementById('firstNumber').addEventListener('blur', function () {
    validateNumber(this,'Số thứ nhất');
});

document.getElementById('secondNumber').addEventListener('blur', function () {
    validateNumber(this,'Số thứ hai');
});

document.getElementById('calculateButton').addEventListener('click', function () {
    const firstNumber = document.getElementById('firstNumber').value;
    const secondNumber = document.getElementById('secondNumber').value;
    const operation = document.querySelector('input[name="operation"]:checked');
    const notification = document.getElementById('notification');
    let resultBox = document.getElementById('result');

    notification.innerText = '';
    resultBox.value = '';

    if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber.trim() === '' || secondNumber.trim() === '') {
        notification.innerHTML = 'Giá trị nhập ở <em>2 ô</em> không phải là số';
        return;
    }

    if (!operation) {
        notification.innerText = 'Chưa chọn phép tính';
        return;
    }

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let result;

    switch (operation.value) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'div':
            if (num2 === 0) {
                notification.innerText = 'Không thể chia cho số 0';
                return;
            }
            result = num1 / num2;
            break;
        default:
            notification.innerText = 'Lỗi phép tính';
            return;
    }
    resultBox.value = result;
});

function validateNumber(input,string) {
    const notification = document.getElementById('notification');
    if (isNaN(input.value) || input.value.trim() === '') {
        notification.innerHTML = `Giá trị nhập ở ô <em>${string}</em> không phải là số`;
    } else {
        notification.innerText = '';
    }
}
