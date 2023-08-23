// Bài 1:
// Bước 1: Cho người dùng nhập vào điểm từng môn, khu vực và đối tượng
// Bước 2: Tính điểm tổng kết dựa vào khu vực
// Bước 3: xuất kết quả đậu rớt

document.getElementById("btnketQua").onclick = function () {
  var diemChuan = +document.getElementById("diemChuan").value;
  var khuVuc = document.getElementById("khuVuc").value;
  var doiTuong = +document.getElementById("doiTuong").value;

  var diem1 = +document.getElementById("diem1").value;
  var diem2 = +document.getElementById("diem2").value;
  var diem3 = +document.getElementById("diem3").value;

  var diemUuTien;

  switch (khuVuc) {
    case "A":
      diemUuTien = 2;
      break;
    case "B":
      diemUuTien = 1;
      break;
    case "C":
      diemUuTien = 0.5;
      break;
  }

  switch (doiTuong) {
    case 1:
      diemUuTien += 2.5;
      break;
    case 2:
      diemUuTien += 1.5;
      break;
    case 3:
      diemUuTien += 1;
      break;
  }

  var diemTongKet = diem1 + diem2 + diem3 + diemUuTien;
  var ketQua;

  if (diem1 == 0 || diem2 == 0 || diem3 == 0) {
    ketQua = "rớt";
  } else if (diemTongKet >= diemChuan) {
    ketQua = "đậu";
  } else {
    ketQua = "rớt";
  }

  document.getElementById("result").innerHTML =
    "Bạn đã " + ketQua + " & tổng điểm bạn là " + diemTongKet;
};

// Bài 2:
// B1: Cho người dùng nhập vào họ tên và số soKW
// B2: dùng if else để chọn ra giá tiền nhân số kw phù hợp
// B3: xuất kết quả
document.getElementById("btnKetQua1").onclick = function () {
  var hoTen = document.getElementById("nhapHoTen").value;
  var soKW = document.getElementById("nhapKW").value;
  var tongTien;

  if ((soKW >= 1) & (soKW <= 50)) {
    tongTien = 500 * soKW;
  } else if ((soKW > 50) & (soKW <= 100)) {
    tongTien = 500 * 50 + (soKW - 50) * 650;
  } else if ((soKW > 100) & (soKW <= 200)) {
    tongTien = 500 * 50 + 50 * 650 + (soKW - 100) * 850;
  } else if ((soKW > 200) & (soKW <= 350)) {
    tongTien = 500 * 50 + 50 * 650 + 100 * 850 + (soKW - 200) * 1100;
  } else {
    tongTien =
      500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKW - 350) * 1300;
  }

  document.getElementById("ketQua1").innerHTML =
    "Họ tên: " + hoTen + " Tổng tiền điện: " + tongTien.toLocaleString();
};

// // Bài 3:
// B1: Cho người dùng nhập vào tên, tổng thu nhập và số người phụ thuộc
// B2: phân loại phần trăm đóng thuế để tính (dùng if else)
// B3: xuất kết quả
document.getElementById("btnTinhTienThue").onclick = function () {
  var hoTen = document.getElementById("nhapHoTen1").value;
  var tongThuNhap = +document.getElementById("tongThuNhap").value;
  var soNguoiPhuThuoc = +document.getElementById("soNguoiPhuThuoc").value;

  var thuNhapChiuThue = tongThuNhap - 4e6 - soNguoiPhuThuoc * 1600000;

  var tienThueThuNhapCaNhan;

  if (thuNhapChiuThue <= 60e6) {
    tienThueThuNhapCaNhan = (thuNhapChiuThue * 5) / 100;
  } else if ((thuNhapChiuThue > 60e6) & (thuNhapChiuThue <= 120e6)) {
    tienThueThuNhapCaNhan = 60e6 * 0.05 + (thuNhapChiuThue - 60e6) * 0.1;
  } else if ((thuNhapChiuThue > 120e6) & (thuNhapChiuThue <= 210e6)) {
    tienThueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      ((thuNhapChiuThue - 120e6) * 15) / 100;
  } else if ((thuNhapChiuThue > 210e6) & (thuNhapChiuThue <= 384e6)) {
    tienThueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      ((thuNhapChiuThue - 210e6) * 20) / 100;
  } else if ((thuNhapChiuThue > 384e6) & (thuNhapChiuThue <= 624e6)) {
    tienThueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      (174e6 * 20) / 100 +
      ((thuNhapChiuThue - 384e6) * 25) / 100;
  } else if ((thuNhapChiuThue > 624e6) & (thuNhapChiuThue <= 960e6)) {
    tienThueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      (174e6 * 20) / 100 +
      (240e6 * 25) / 100 +
      ((thuNhapChiuThue - 624e6) * 30) / 100;
  } else {
    tienThueThuNhapCaNhan =
      (60e6 * 5) / 100 +
      (60e6 * 10) / 100 +
      (90e6 * 15) / 100 +
      (174e6 * 20) / 100 +
      (240e6 * 25) / 100 +
      (296e6 * 30) / 100 +
      ((thuNhapChiuThue - 960e6) * 35) / 100;
  }

  document.getElementById("ketQua2").innerHTML =
    "Họ Tên " +
    hoTen +
    " Tiền thuế của bạn: " +
    tienThueThuNhapCaNhan.toLocaleString() + " VND";
};

// Bài 4:
// B1: cho người dùng nhập vào tên khách hàng, loại, so kết nối, số kênh cao cấp 
// B2: Tính giá tiền cho từng loại
// B3: Xuất kết quả
function disableInput() {
  var e = document.getElementById("khachHang").value;
  document.getElementById("soKetNoi").style.display =
    "business" == e ? "block" : "none";
}

document.getElementById('btnTinhTienCap').onclick = function () {
  var khachHang = document.getElementById('khachHang').value;
  var soKetNoi = +document.getElementById('soKetNoi').value;
  var nhapMaKhachHang = document.getElementById('nhapMaKhachHang').value;
  var soKenhCaoCap = +document.getElementById('soKenhCaoCap').value;

  var tinhCapDan = 4.5 + 20.5 + 7.5*soKenhCaoCap;

  var tinhCapDoanhNghiep;
  if(soKetNoi<=10){
    tinhCapDoanhNghiep = 15 + 75 + 50*soKenhCaoCap;
  }else{
    tinhCapDoanhNghiep = 15 + 75 + 50*soKenhCaoCap + 5*(soKetNoi-10);
  }

  if(khachHang == "resident"){
   document.getElementById('ketQua3').innerHTML = "Mã khách hàng: " + nhapMaKhachHang + " Tiền cáp: " + tinhCapDan.toLocaleString() + "$";
  }else{
    document.getElementById('ketQua3').innerHTML = "Mã khách hàng: " + nhapMaKhachHang + " Tiền cáp: " + tinhCapDoanhNghiep.toLocaleString() + "$";
  }
 
}