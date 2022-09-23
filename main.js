const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const ages = $('.age')
const rep = $('.vungchua')
const button = $('.calc-age')

 button.onclick = function() {
    var tuoi = ages.value
    if (tuoi == "") {
        rep.innerHTML = '<div class="danger rep">Vui lòng nhập tuổi</div>'
    } else if (tuoi <= 0) {
        rep.innerHTML = '<div class="danger rep">Mày đã sinh đéo đâu mà đòi tính</div>'
    } else if (tuoi <= 100) {
        rep.innerHTML = '<div class="success rep">Số tuổi của bạn là: ' + tuoi + ' tuổi</div>'
    } else {
        rep.innerHTML = '<div class="danger rep">Mày ' + tuoi + ' tuổi thật à?</div>'
    }
 }


