var Mb = document.querySelector('.Mb');
var MbNav = document.querySelector('.Mb-nav')

Mb.addEventListener('click', () => {
  MbNav.setAttribute('style', 'transform: translateX(0);')
})

document.querySelector('.i').addEventListener('click', () => { MbNav.setAttribute('style', 'transform: translateX(-100%);') })

var Gopy = document.getElementById("gopy").value

fetchSheet
  .fetch({
    gSheetId: '1jcPFaBnSfxXFITgtvXiaa5R3bpM_kvgFavUcKlCKZtI',
    wSheetName: 'Sản phẩm',
  })
  .then((rows) => {
    let items = ''
    let i = 0
    rows.forEach((t) => {
      items +=
        `<div class="col l-3 m-4 c-5 Content2-wrap" index="${i}">
          <div class="Content2-items">
            <img src="${t['Link hình ảnh sản phẩm']}">
              <div class="Content2-price">
                <h2>${t['Giá sản phẩm']}</h2>
              </div>
              <div class="Content2-text">
                <h2>${t['Tên sản phẩm']}</h2>
                <p>${t['Mô tả sản phẩm']}</p>
                <div class="Btt"><button class="Content2-bt" index="${i}"><a>Mua Ngay</a></button></div>
              </div>
          </div>
        </div>`
      i++
    })
    if (document.querySelector('#product_sheet') != null) {
      document.querySelector('#product_sheet').innerHTML = items
    }
    document.querySelectorAll('.Content2-bt').forEach((t) => {
      t.onclick = () => {
        document.querySelector(".d1").value = ''
        document.querySelector(".d2").value = ''
        document.querySelector(".d3").value = ''
        document.querySelector(".d4").value = ''
        let index = t.getAttribute('index')
        document.querySelector('.main_flexx').setAttribute('style', 'display:block');
        document.querySelector('.main_box').setAttribute('style', 'display:block')
        console.log(document.querySelector('#chotsanpham'));
        document.querySelector('#chotsanpham').innerHTML =
          `<div class="Content2-items" style="box-shadow:unset">
            <img src="${rows[index]['Link hình ảnh sản phẩm']}">
              <div class="Content2-price">
                <h2>${rows[index]['Giá sản phẩm']}</h2>
              </div>
              <div class="Content2-text">
                <h2 style="margin:16px 0">${rows[index]['Tên sản phẩm']}</h2>
                <p style="margin:16px 0">${rows[index]['Mô tả sản phẩm']}</p>
              </div>
          </div>`

        document.querySelector('#feedback-cmt').onclick = () => {
          if (document.querySelector('input[name="phone"]').value != "") {
            document.querySelector('.main_flexx').setAttribute('style', 'display:none');
            document.querySelector('.main_box').setAttribute('style', 'display:none')
            alert('Chúng tôi đã nhận được thông tin của bạn, chúng tôi sẽ liên hệ lại sau!')
          }
          else {
            alert('Hãy nhập đầy đủ thông tin trước khi nhấn gửi!')
          }
        }
        var urlappscript = 'https://script.google.com/macros/s/AKfycby7dBLUvzBxR92g0o3J0ea85dTeta3J9UMst38ZFQNc-O5S71c--00ss4TJGXnFjlPD/exec';
        $(document).ready(function () {
          $("#feedback-cmt").click(function () {
            var inputValues = $("input, textarea")
              .map(function () {
                var input = $(this);
                return input.attr("name") + "=" + encodeURIComponent(input.val());
              })
              .get();
            // tạo 
            var queryString = inputValues.join("&");
            // Log the result or use it as needed
            var fullName = document.querySelector(".d1").value;
            var email = document.querySelector(".d2").value;
            var phone = document.querySelector(".d3").value;
            var message = document.querySelector(".d4").value;

            if (fullName === "" || email === "" || phone === "" || message === "") {
              alert('Vui lòng điền đầy đủ thông tin yêu cầu')
            } else {
              // hiển thị 
              $.ajax({
                type: "GET",
                url: urlappscript + "?" + queryString,
                success: function (response) {
                  document.querySelectorAll('.main_box input').forEach((t) => {
                    console.log(t);
                  })
                  alert('Gửi thông tin thành công, chúng tôi sẽ liên lạc với bạn sau đó!')
                  document.querySelector('.main_flexx').setAttribute('style', 'display:none');
                  document.querySelector('.main_box').setAttribute('style', 'display:none')
                },
                error: function (error) {
                  console.log('lỗi');
                },
              });
            }
          });
        });

        document.querySelector('.main_flexx').onclick = () => {
          document.querySelector('.main_flexx').setAttribute('style', 'display:none');
          document.querySelector('.main_box').setAttribute('style', 'display:none')
        }
      }
    })
  });

fetchSheet
  .fetch({
    gSheetId: '1jcPFaBnSfxXFITgtvXiaa5R3bpM_kvgFavUcKlCKZtI',
    wSheetName: 'Tin tức',
  })
  .then((rows) => {
    let items = ''
    document.querySelector('#title_main>h2').innerHTML = rows[0]['Tiêu đề tin tức']
    document.querySelector('#time').innerHTML = rows[0]['Thời gian tin tức']
    document.querySelector('#content1').innerHTML = rows[0]['Nội dung tin tức 1']
    document.querySelector('#img1').src = rows[0]['Hình ảnh nội dung 1']
    document.querySelector('#content2').innerHTML = rows[0]['Nội dung tin tức 2']
    document.querySelector('#img2').src = rows[0]['Hình ảnh nội dung 2']
    document.querySelector('#content3').innerHTML = rows[0]['Nội dung tin tức 3']
    document.querySelector('#img3').src = rows[0]['Hình ảnh nội dung 3']
    let i = 0
    rows.forEach((t) => {
      items +=
        `<div class="col l-4 m-4 c-5 Content2-wrap Box_Neww" index='${i}'>
          <a href="#" class="Content2-items">
            <img src="${t['Hình ảnh chính tin tức']}">
              <div class="Content2-text">
                <h2>${t['Tiêu đề tin tức']}</h2>
                <p style="margin: 20px auto ;display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;" >${t['Nội dung tin tức 1']}</p>
              </div>
          </a>
        </div>`
      i++
    })
    document.querySelector('#New').innerHTML = items;
    document.querySelectorAll('.Box_Neww')[0].setAttribute('style', 'display:none')
    document.querySelectorAll('.Box_Neww').forEach((t) => {
      t.onclick = () => {
        document.querySelectorAll('.Box_Neww').forEach((v) => {
          v.setAttribute('style', 'display:flex')
        })
        let k = t.getAttribute('index')
        document.querySelectorAll('.Box_Neww')[k].setAttribute('style', 'display:none')

        document.querySelector('#title_main>h2').innerHTML = rows[k]['Tiêu đề tin tức']
        document.querySelector('#time').innerHTML = rows[k]['Thời gian tin tức']
        document.querySelector('#content1').innerHTML = rows[k]['Nội dung tin tức 1']
        document.querySelector('#img1').src = rows[k]['Hình ảnh nội dung 1']
        document.querySelector('#content2').innerHTML = rows[k]['Nội dung tin tức 2']
        document.querySelector('#img2').src = rows[k]['Hình ảnh nội dung 2']
        document.querySelector('#content3').innerHTML = rows[k]['Nội dung tin tức 3']
        document.querySelector('#img3').src = rows[k]['Hình ảnh nội dung 3']
      }
    })
  });