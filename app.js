alert('فقط عدد 1 یا 2 بنویس دیگه هیچی ننویس(با حروف انگلیسی)');

let number = document.getElementById('number');

let bookChapter = parseInt(prompt('کدام جلد کتاب رو میخوای ببینی؟'));
// while (!bookChapter) {
//     bookChapter = parseInt(prompt('کدام جلد کتاب رو میخوای ببینی؟'));
// }

const firstChapter = Math.floor(Math.random() * 1861) + 1;
const secondChapter = Math.floor(Math.random() * 1986) + 1;

while (bookChapter !== 1 && bookChapter !== 2) {
    bookChapter = parseInt(prompt('کدام جلد کتاب رو میخوای ببینی؟'));
}

if (bookChapter == 1) {
    number.innerHTML = firstChapter;
}
else if (bookChapter == 2) {
    number.innerHTML = secondChapter;
}
