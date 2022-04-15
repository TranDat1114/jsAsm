//loading

//slide show
let banner_arr = ['0',
    '1', '2', '3',
    '4', '5', '6'];
let show;

let index = 0;
function pluss(next) {
    index += next;
    if (index < 0) {
        index = 6;
    }
    else if (index > banner_arr.length - 1) {
        index = 0;
    }
    slideShow(index);
}

function slideShow(value) {
    index = value;
    document.getElementById('sliders').style.background = `url('assets/img/banner_${index}.jfif') lightblue top center / cover no-repeat`;
    let dots = document.getElementsByClassName("ti-control-record");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    dots[index].className += " active";
}
show = setInterval('pluss(1)', 6000);

//showing
function hienthi(show) {
    let banking = document.getElementsByClassName("money-banking");
    banking[0].style.display = (show == true) ? 'inline-block' : 'none';
    banking[1].style.display = (show == true) ? 'inline-block' : 'none';
}

//checking form
function kiemtra() {
    let thanhcong = true;
    let thongbao = '';

    //kiem tra ho ten khach hang
    if (ten_KH.value.length == 0) {
        thongbao += 'Vui lòng nhập tên của bạn';
        thanhcong = false;
    }

    //Kiem tra chon thanh toan
    if (radios[0].checked == false && radios[1].checked == false) { thongbao += '<br>Vui lòng chọn phương thức thanh toán' };
    //kiem tra loai ve -> gia ve
    if (rank_tickets.value === 'null') { thongbao += '<br>Vui lòng chọn hạng vé' };

    (thongbao == '') ? thongbao += '<br>Đặt vé thành công' : thongbao += `<br>Đặt vé thất bại`;
    results_booking[1].innerHTML = thongbao;
    setTimeout(() => {
        thongbao = '';
        results_booking[1].innerHTML = thongbao;
    }, 10000);
    return thanhcong;
}
const peoples = document.querySelector('#people');
const quantity = document.querySelector('#quantity');
const cost = document.querySelector('#money-cost');
const total_cost = document.querySelector('.total-money');
const rank_tickets = document.querySelector('#rank-tickets');
const radios = document.getElementsByName('pay');
const ten_KH = document.querySelector('#name-person');
const btn_Mua = document.querySelector('.mua');
const results_booking = document.querySelectorAll('.results-booking');
const sale_off = document.querySelector('#sale-off');
//kiem tra MGGia == DatxinhHi -> 50% gia ve

//thanh tien = soluong * gia ve / off_sale

btn_Mua.addEventListener('click', kiemtra)
let tickets_cost;
let off_cost = 1;
sale_off.addEventListener('click', () => {
    if (sale_off.value == 'datxinhhi') {
        off_cost = 2;
    } else {
        off_cost = 1;
    }
    costing();
});
sale_off.addEventListener('keyup', () => {
    if (sale_off.value == 'datxinhhi') {
        off_cost = 2;
    } else {
        off_cost = 1;
    }
    costing();
});


rank_tickets.addEventListener('click', () => {
    switch (rank_tickets.value) {
        case 'null': {
            tickets_cost = 0;
            break;
        }
        case 'normal':
            tickets_cost = 500000;
            break;
        case 'VIP':
            tickets_cost = 1500000;
            break;
        case 'superVIP':
            tickets_cost = 5000000;
            break;
        case 'EXTRAAA':
            tickets_cost = 8 / 0;
            break;
        default:
            break;
    }
    cost.value = Intl.NumberFormat().format(tickets_cost);
    costing();
});

quantity.addEventListener('click', () => {
    people_max();
    costing();
});
quantity.addEventListener('keyup', () => {
    people_max();
    costing();
})

function people_max() {
    if (peoples.max < 25) {
        peoples.max = quantity.value;
    }
}

function costing() {
    total_cost.value = Intl.NumberFormat().format((tickets_cost / off_cost) * quantity.value)
}

//Đặt vé ngay
const buyBtns = document.querySelectorAll(".js-buy-tickets");
const modal = document.querySelector(".modal");
const closer = document.querySelectorAll(".js-close-modal");
const modal_content = document.querySelector(".js-modal-content")

function showBuyTickets() {
    modal.classList.add('open');
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyTickets)
}

//Dóng modal
for (const close of closer) {
    close.addEventListener('click', () => {
        modal.classList.remove('open');

    })
}
modal_content.addEventListener('click', (event) => {
    event.stopPropagation();
})

//media-content
//media-content
const media_btn = document.querySelector('.media-btn');
const modal_media = document.querySelector('#media-content');
const closer_media = document.querySelector('.js-closer-media');
const media = document.querySelector("#media");
function showMediaModal() {
    modal_media.classList.add('open');
}
media_btn.addEventListener('click', showMediaModal);

closer_media.addEventListener('click', () => {
    modal_media.classList.remove('open');

})

media.addEventListener('click', (event) => {
    event.stopPropagation();
})


//form data

var data_buy_ticket = new FormData();
data_buy_ticket.append('text', ten_KH.value);



//kiemtraform dang ky
const sign_button = document.querySelector("#js-sign-button");
const sign_in_button = document.querySelector("#js-sign-in-button");
const signUpBtn = document.querySelector('#sign-name')
const Interest = document.querySelectorAll('.interests');
sign_button.addEventListener("click", () => {
    let thanhcong = true;
    let thongBao = ''
    if (signUpBtn.value.length < 3 || signUpBtn.value.length > 30) {
        thongBao += '<br>Vui lòng nhập họ tên từ 3 đến 30 chữ cái';
        thanhcong = false;
    }
    if (document.querySelector("#user-name-sign-up").value.length == 0) {
        thongBao += '<br>Vui lòng nhập tài khoản';
        thanhcong = false;
    }
    if (document.querySelector("#password-sign-up").value.length == 0) {
        thongBao += '<br>Vui lòng nhập mật khẩu';
        thanhcong = false;
    }
    if (document.querySelector('#ID-card').value.length != 9) {
        thongBao += '<br>Vui lòng nhập đúng định dạng CCCD';
        thanhcong = false;
    }
    var checking = false;
    for (let index = 0; index < Interest.length; index++) {
        if (Interest[index].checked == true) {
            checking = true;
        };
    }
    if (checking == false) {
        thongBao += '<br>Vui lòng tích vào ít nhất một mục quan tâm'
        thanhcong = false;
    }
    if (document.querySelector('#T-TP').value == '' || document.querySelector('#Q-H').value == '') {
        thongBao += '<br>Vui lòng chọn tỉnh/thành, quận/huyện';
        thanhcong = false;
    }
    if (document.querySelector('#js-boSung').value.length < 10 || document.querySelector('#js-boSung').value.length > 1000) {
        thongBao += '<br>Nhập tối thiểu 10 ký tự vào mục bổ sung';
        thanhcong = false;
    }
    (thongBao == '') ? thongBao += '<br>Đăng ký thành công' : thongBao += `<br>Đăng ký thất bại`;
    results_booking[0].innerHTML = thongBao;
    setTimeout(() => {
        thongBao = '';
        results_booking[0].innerHTML = thongBao;
    }, 10000);
    return thanhcong;
})
userName = document.querySelector('#user-name');
password = document.querySelector('#password');
sign_in_button.addEventListener('click', () => {
    let thanhcong = true;
    let thongBao = '';
    if (userName.value.length == 0 || password.value.length == 0) {
        thongBao += '<br>Không nhập User-name/Password rồi vô sao má';
        thanhcong = false;
    } else {
        thongBao += '<br>Tài khoản hoặc mật khẩu sai<br>Thích thì thử lại';
        thanhcong = false;
    }
    (thongBao == '') ? thongBao += '<br>Đăng nhập thành công' : thongBao += `<br>Đăng nhập thất bại`;
    results_booking[0].innerHTML = thongBao;
    return thanhcong;
})
//<![CDATA[
if (address_2 = localStorage.getItem('address_2_saved')) {
    $('select[name="calc_shipping_district"] option').each(function () {
        if ($(this).text() == address_2) {
            $(this).attr('selected', '')
        }
    })
    $('input.billing_address_2').attr('value', address_2)
}
if (district = localStorage.getItem('district')) {
    $('select[name="calc_shipping_district"]').html(district)
    $('select[name="calc_shipping_district"]').on('change', function () {
        var target = $(this).children('option:selected')
        target.attr('selected', '')
        $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
        address_2 = target.text()
        $('input.billing_address_2').attr('value', address_2)
        district = $('select[name="calc_shipping_district"]').html()
        localStorage.setItem('district', district)
        localStorage.setItem('address_2_saved', address_2)
    })
}
$('select[name="calc_shipping_provinces"]').each(function () {
    var $this = $(this),
        stc = ''
    c.forEach(function (i, e) {
        e += +1
        stc += '<option value=' + e + '>' + i + '</option>'
        $this.html('<option value="">Tỉnh / Thành phố</option>' + stc)
        if (address_1 = localStorage.getItem('address_1_saved')) {
            $('select[name="calc_shipping_provinces"] option').each(function () {
                if ($(this).text() == address_1) {
                    $(this).attr('selected', '')
                }
            })
            $('input.billing_address_1').attr('value', address_1)
        }
        $this.on('change', function (i) {
            i = $this.children('option:selected').index() - 1
            var str = '',
                r = $this.val()
            if (r != '') {
                arr[i].forEach(function (el) {
                    str += '<option value="' + el + '">' + el + '</option>'
                    $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>' + str)
                })
                var address_1 = $this.children('option:selected').text()
                var district = $('select[name="calc_shipping_district"]').html()
                localStorage.setItem('address_1_saved', address_1)
                localStorage.setItem('district', district)
                $('select[name="calc_shipping_district"]').on('change', function () {
                    var target = $(this).children('option:selected')
                    target.attr('selected', '')
                    $('select[name="calc_shipping_district"] option').not(target).removeAttr('selected')
                    var address_2 = target.text()
                    $('input.billing_address_2').attr('value', address_2)
                    district = $('select[name="calc_shipping_district"]').html()
                    localStorage.setItem('district', district)
                    localStorage.setItem('address_2_saved', address_2)
                })
            } else {
                $('select[name="calc_shipping_district"]').html('<option value="">Quận / Huyện</option>')
                district = $('select[name="calc_shipping_district"]').html()
                localStorage.setItem('district', district)
                localStorage.removeItem('address_1_saved', address_1)
            }
        })
    })
})
//]]>

//quiz
let answerBtn = document.querySelector('#js-answer-btn');
let answer = document.querySelector('#js-answer');
let number_a = document.querySelector('#js-number-a');
let number_b = document.querySelector('#js-number-b');
let next_quiz = document.querySelector('#js-random-btn');
let toan_tu = document.querySelector('#pheptoan');
let result_quiz = document.querySelectorAll('.js-result-quiz');
let phep_toan = '';
let result = 0;
let so_lan_dung = localStorage.getItem('so_lan_dung');
if (so_lan_dung == undefined) {
    so_lan_dung = 0;
}
result_quiz[0].innerHTML = `<br>Số điểm: ${so_lan_dung}`
result_quiz[1].innerHTML = `<br>Số điểm: ${so_lan_dung}`

const random_quiz = () => {
    number_a.value = Math.round(Math.random() * 100 + 1);
    number_b.value = Math.round(Math.random() * 100 + 1);
    result = random_phep_toan();
}
const random_phep_toan = () => {
    var random = Math.round(Math.random() * 4);
    var tong = 0;
    switch (random) {
        case 0:
            phep_toan = '+';
            tong = Number(number_a.value) + Number(number_b.value);
            break;
        case 1:
            phep_toan = '-';
            tong = Number(number_a.value) - Number(number_b.value);

            break;
        case 2:
            phep_toan = 'x';
            tong = Number(number_a.value) * Number(number_b.value);

            break;
        case 3:
            phep_toan = ':';
            tong = Number(number_a.value) / Number(number_b.value);

            break;
        default:
            break;
    }
    toan_tu.innerText = phep_toan;
    return tong;
}

random_quiz();
next_quiz.addEventListener('click', random_quiz);

answerBtn.addEventListener('click', () => {
    if (Number(answer.value) == result) {
        random_quiz();
        so_lan_dung = localStorage.setItem('so_lan_dung', so_lan_dung = Number(so_lan_dung) + 1);
        so_lan_dung = localStorage.getItem('so_lan_dung');
        result_quiz.innerHTML = `Giỏi quá đúng rồi<br>Số điểm: ${so_lan_dung}`
    }
    else {
        random_quiz();
        result_quiz.innerHTML = `Sai mất rồi<br>Số điểm: ${so_lan_dung}`

    }
})

//search
const search = document.querySelector('#mySearch');
search.addEventListener('click', () => {
    if (search.value == '') {
        document.querySelector('.searching').disabled = true;
        document.querySelector('.searching').title = 'Chưa nhập gì để tìm kiếm';
        search.title = 'Chưa nhập gì';
    } else {
        document.querySelector('.searching').disabled = false;
        document.querySelector('.searching').title = 'Nhấn để tìm kiếm';
        search.title = 'Tìm kiếm';
    }
})
search.addEventListener('keyup', () => {
    if (search.value == '') {
        document.querySelector('.searching').disabled = true;
        document.querySelector('.searching').title = 'Chưa nhập gì để tìm kiếm';
        search.title = 'Chưa nhập gì';
    } else {
        document.querySelector('.searching').disabled = false;
        document.querySelector('.searching').title = 'Nhấn để tìm kiếm';
        search.title = 'Tìm kiếm';
    }

})


//Bai_1ASM

function randomNumber() {
    let a = Math.round(Math.random() * 20 - 10);
    let b = Math.round(Math.random() * 20 - 10);
    let c = Math.round(Math.random() * 20 - 10);
    document.getElementById("A").value = a;
    document.getElementById("B").value = b;
    document.getElementById("C").value = c;
    let button = document.getElementById("handle");
    button.disabled = false;
    PT(a, b, c);
    getFocus('handle');
}
function handle2() {
    let a = Number(document.getElementById("A").value);
    let b = Number(document.getElementById("B").value);
    let c = Number(document.getElementById("C").value);
    if (Number(a) != a || Number(b) != b || Number(c) != c) {
        let answer = `<p>Giá trị nhập vào phải là số</p>`;
        document.getElementById('answer').innerHTML = answer;
    } else if (a < -10 || a > 10 || b < -10 || b > 10 || c < -10 || c > 10) {
        let answer = `<p>Giá trị nhập vào phải nhỏ hơn 10 và lớn hơn -10</p>`;
    }
    else if (a == 0) {
        let x = -b / c;
        let answer = `<p>Phương trình có 1 nghiệm<p>
        <p> X = ${x.toFixed(2)}</p>`;
        document.getElementById('answer').innerHTML = answer;
        if (b == 0) {
            if (c == 0) {
                let answer = `<p>Phương trình vô số nghiệm<p>`;
                document.getElementById('answer').innerHTML = answer;
            } else {
                let answer = `<p>Phương trình vô nghiệm<p>`;
                document.getElementById('answer').innerHTML = answer;
            }
        }
    } else {
        let delta = b * b - 4 * a * c;
        if (delta == 0) {
            let x = -b / 2 * a;
            let answer = `<p>Phương trình có nghiệm kép<p>
                <p>X <sub> 1</sub> = X <sub> 2</sub> = ${x.toFixed(2)}</p>
                <br>
                <p><b>Tổng</b> = ${(x + x).toFixed(2)}</p>
                <p><b>Tích</b> = ${x * 2} </p>`;
            document.getElementById('answer').innerHTML = answer;
        } else if (delta > 0) {
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            let answer = `<p>Phương trình có 2 nghiệm<p>
                <p> X <sub> 1</sub> = ${x1.toFixed(2)}</p>
                <p> X <sub> 2</sub> = ${x2.toFixed(2)}</p>
                <br>
                <p><b>Tổng</b> = ${(x1 + x2).toFixed(2)}</p>
                <p><b>Tích</b> = ${(x1 * x2).toFixed(2)} </p>`;
            document.getElementById('answer').innerHTML = answer;
        } else {
            let answer = `<p>Phương trình vô nghiệm<p>`;
            document.getElementById('answer').innerHTML = answer;
        }
    }
    let button = document.getElementById("handle");
    button.disabled = true;
    count();
    getFocus('random');
}
dem = Number(localStorage.getItem('dem'));

function count() {
    if (dem == null) {
        dem = 0;
    } else {
        dem = Number(dem) + 1;
    }
    localStorage.setItem('dem', dem)
    document.getElementById("count").innerHTML = `<b id = "colorCount">${dem}</b>` + ' lần';
}
function resetCount() {
    dem = 0;
    document.getElementById("count").innerHTML = `<b id = "colorCount">${dem}</b>` + ' lần';
    localStorage.removeItem('dem');

    getFocus('random');
}

function PT(a, b, c) {
    pt1 = `<div class="content-sub-heading size">${a}X<sup>2</sup> + ${b}X + ${c} = 0</div>`;
    document.getElementById("phuongtrinh").innerHTML = pt1;
}

function time() {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (hour < 12) {
        moreText = '<h4>Chào buổi sáng</h4>';
    } else if (hour < 18) {
        moreText = '<h4>Chào buổi chiều</h4>';
    } else {
        moreText = '<h4>Chào buổi tối</h4>';
    }
    let clock1 = `<div class="clock"><h3> ${day} - ${month} - ${year} </h3>
    <h4> ${hour} : ${minute} : ${second} </h4>${moreText}</div>`;

    document.getElementById("clock").innerHTML = clock1;
}
let a = setInterval(time, 1000);
document.getElementById("count").innerHTML = `<b id = "colorCount">${dem}</b>` + ' lần';


function getFocus(event) {
    document.getElementById(`${event}`).focus();
}


//check table
const checking_check = document.querySelectorAll('.khuyenmai-check');
const soluong_khuyenmai = document.querySelectorAll('.khuyenmai-SoLuong');
const tongHao = document.querySelectorAll('.js-tongHao');
const conLai = document.querySelectorAll('.js-conlai');
const cost_point = document.querySelectorAll('.js-cost-point');
const tongHaoFinal = document.querySelector('.js-tongHao-final');
const point_input = document.querySelector('#point-input')
const body_khuyenmai = document.querySelector('.body-khuyenmai')
function checking_SoLuong() {
    for (let index = 0; index < checking_check.length; index++) {
        if (checking_check[index].checked == true) {
            soluong_khuyenmai[index].readOnly = '';
            tongHao[index].style.opacity = 1;
            conLai[index].style.opacity = 1;
        } else {
            soluong_khuyenmai[index].readOnly = true;
            tongHao[index].style.opacity = 0.3;
            conLai[index].style.opacity = 0.3;
            soluong_khuyenmai[index].value = 0;
        }
    } checking_thanhtien();
}
checking_SoLuong();

for (const checking of checking_check) {
    checking.addEventListener('click', checking_SoLuong)
}
function checking_thanhtien() {
    var sum = 0;
    for (let index = 0; index < soluong_khuyenmai.length; index++) {
        tongHao[index].value = Number(soluong_khuyenmai[index].value) * Number(cost_point[index].value)
        sum += Number(tongHao[index].value);
    }
    tongHaoFinal.value = sum;
};
for (const btn_SL of soluong_khuyenmai) {
    btn_SL.addEventListener('click', checking_thanhtien)
}
point_input.addEventListener('click', () => {
    for (let index = 0; index < body_khuyenmai.children.length - 1; index++) {
        if (Number(cost_point[index].value) > Number(point_input.value)) {
            body_khuyenmai.children[index].style.display = 'none';
        }else{
            body_khuyenmai.children[index].style.display = '';
        }
    }
})