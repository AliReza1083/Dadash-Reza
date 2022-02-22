alert('فقط عدد 1 یا 2 بنویس دیگه هیچی ننویس(با حروف انگلیسی)')
let chapter = prompt("کدام از جلد را میخواهید مشاهده کنید؟")
let chapterNumber = parseInt(chapter);
let randomNumber = document.getElementById('number');
let numberChapter = document.getElementById('numberChapter');
let numberOfIlham = document.getElementById('numberOfIlham');

if(chapterNumber == 1) {
    randomNumber.innerHTML = Math.floor(Math.random() * 1861) + 1;
    numberChapter.innerHTML = `جلدی که انتخاب کردی "${chapter}" است. برو ببین چی نوشته شده`;
}
if(chapterNumber == 2) {
    randomNumber.innerHTML = Math.floor(Math.random() * 1986) + 1;
    numberChapter.innerHTML = `جلدی که انتخاب کردی "${chapter}" است. برو ببین چی نوشته شده`;
}


