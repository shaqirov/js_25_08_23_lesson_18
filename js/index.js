/* Задание 1: Простая форма обратной связи
Создайте веб-страницу с простой формой обратной связи. Форма должна содержать следующие поля:

Имя (текстовое поле)
Электронная почта (текстовое поле с проверкой на корректный формат)
Комментарий (текстовое поле или текстовая область)
Оценка (выбор оценки от 1 до 5 с использованием радиокнопок или выпадающего списка)
Кнопка "Отправить"

При отправке формы, данные должны быть обработаны с помощью JavaScript, и содержимое всех полей должно быть выведено на странице ниже формы.*/
//=====================================================================================================================================

const form = document.forms.form
function getFormValue(event) {
    event.preventDefault()

    const {name, email, comment, grade} = form
    const values = {
        name: name.value,
        email: email.value,
        comment: comment.value,
        grade: grade.value
    }

    // console.log(values);

    const resultForm = document.getElementById('resultForm')
    resultForm.innerHTML = `
        <p><strong>Имя:</strong> ${values.name}</p>
        <p><strong>Почта:</strong> ${values.email}</p>
        <p><strong>Комментарий:</strong> ${values.comment}</p>
        <p><strong>Оценка:</strong> ${values.grade}</p>
    `
}

form.addEventListener('submit', getFormValue)
//======================================================================================================================================


/* Задание 2: Расчет процента скидки
Создайте веб-страницу, на которой пользователь может ввести начальную цену товара и процент скидки. По нажатию кнопки "Рассчитать", страница должна отобразить итоговую цену с учетом скидки.

Шаги для выполнения задания:

Создайте HTML-форму с двумя полями ввода:

Начальная цена товара (число)
Процент скидки (число)
Добавьте кнопку "Рассчитать".

Используя JavaScript, обработайте данные, введенные пользователем:

Получите значения начальной цены товара и процента скидки из полей ввода.
Рассчитайте сумму скидки как процент от начальной цены (начальная цена * процент скидки / 100).
Вычтите сумму скидки из начальной цены, чтобы получить итоговую цену.
Выведите итоговую цену с учетом скидки на странице.

Пример: Если начальная цена товара 1000 рублей, а процент скидки 20%, итоговая цена будет 800 рублей. */
// ==================================================================================================================================

const form2 = document.forms.form2
function getCostWithDiscount (event) {
    event.preventDefault() 
    const {cost, discount} = form2
    const costWithDiscount = {
        cost: cost.value,
        discount: discount.value
    }

    console.log(costWithDiscount);

    let lastCost = cost.value - (cost.value * discount.value / 100)
    const resultForm2 = document.getElementById('resultForm2')
    resultForm2.innerHTML = `
        <p><strong>Начальная цена:</strong> ${costWithDiscount.cost}</p>
        <p><strong>Размер скидки:</strong> ${costWithDiscount.discount}%</p>
        <p><strong>Итоговая цена:</strong> ${lastCost}</p>
    `
}

form2.addEventListener('submit', getCostWithDiscount)