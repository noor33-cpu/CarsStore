function openDetails(carId) {
  var carName = (carId == '1') ? 'Toyota Camry' : (carId == '2') ? 'Ford Mustang' : (carId == '3') ? 'Ford Ranger Raptor' : (carId == '4') ? 'Toyota Prius Prime' : (carId == '5') ? 'Hyundai Elantra' : (carId == '6') ? 'Hyundai Elantra' : (carId == '7') ? 'Mitsubishi Mirage' : (carId == '8') ? 'Kia Forte' : ((carId == '9') ? 'Nissan Sentra' : 'Mazda 3');
  var carImage = (carId == '1') ? 'img/car1-1.jpg' : (carId == '2') ? 'img/car2-1.jpg' : (carId == '3') ? 'img/car3-1.jpg' : (carId == '4') ? 'img/car4-1.jpg' : (carId == '5') ? 'img/car5-1.jpg' : (carId == '6') ? 'img/car6-1.jpg' : (carId == '7') ? 'img/car7-1.jpg' : (carId == '8') ? 'img/car8-1.jpg' : ((carId == '9') ? 'img/car9-1.jpg' : 'img/car10-1.jpg');
  var dailyRental = (carId == '1') ? 50000 : (carId == '2') ? 70000 : (carId == '3') ? 170000 : (carId == '4') ? 140000 : (carId == '5') ? 45000 : (carId == '6') ? 120000 : (carId == '7') ? 100000 : (carId == '8') ? 125000 : ((carId == '9') ? 75000 : 900000);
  var rebuildFee = (dailyRental * 0.01).toFixed(0);
  var tax = (dailyRental * 0.05).toFixed(0);
  var totalCost = parseInt(dailyRental) + parseInt(rebuildFee) + parseInt(tax);

  // Open a new window to display the car Details
  var DetailsUrl = 'Details.html?carId=' + carId;
  window.open(DetailsUrl, '_self');

}

function openDetailsPage() {
  if (document.querySelector('input[type=checkbox]').checked) {
    window.location.href = 'Details.html?carId=' + getCarIdFromUrl();
  }
}

function getCarIdFromUrl() {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('carId');
}



function validateForm() {
  const fullName = document.getElementById("fullName").value;
  const nationalID = document.getElementById("nationalID").value;
  const birthDate = document.getElementById("birthDate").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const email = document.getElementById("email").value;
  const rentalDuration = document.getElementById("rentalDuration").value;
  const userInput = document.getElementById("userInput").value;
  const captchaResult = document.getElementById("captcha").innerHTML;
  const totalCost = document.getElementById('totalCost').innerHTML;

  // التحقق من صحة الإجابة المقدمة في Captcha
  if (userInput !== captchaResult) {
    alert("تحقق من صحة الإجابة في Captcha.");
    generateCaptcha();
    return false;
  }

  // التحقق من ملء جميع الحقول المطلوبة
  if (fullName === "" || nationalID === "" || birthDate === "" || phoneNumber === "" || email === "" || rentalDuration === "") {
    alert("يرجى تعبئة جميع الحقول المطلوبة.");
    return false;
  }

  // التحقق من صحة رقم الهوية الوطنية
  if (!nationalID.match(/^[0-9]{11}$/)) {
    alert("يرجى إدخال رقم هوية وطنية صحيح.");
    return false;
  }

  // التحقق من صحة رقم الهاتف
  if (!phoneNumber.match(/^09[0-9]{8}$/)) {
    alert("يرجى إدخال رقم هاتف صحيح.");
    return false;
  }

  // التحقق من صحة البريد الإلكتروني
  if (!email.match(/^\S+@\S+\.\S+$/)) {
    alert("يرجى إدخال عنوان بريد إلكتروني صحيح.");
    return false;
  }

  // التحقق من صحة تاريخ الميلاد
  if (!Date.parse(birthDate)) {
    alert("يرجى إدخال تاريخ ميلاد صحيح.");
    return false;
  }

  // التحقق من صحة عدد أيام الإيجار
  if (rentalDuration <= 0) {
    alert("يرجى إدخال عدد أيام الإيجار بشكل صحيح.");
    return false;
  }

  // إذا تم التحقق من صحة جميع الحقول، يتم حساب التكلفة الإجمالية وعرض رسالة تأكيدية
  const finalCost = parseInt(totalCost) * parseInt(rentalDuration);
  alert("تم استئجار السيارة. الرجاء دفع مبلغ " + finalCost + " ل.س عند استلام السيارة ");
}


function checkCaptcha() {
  var userInput = document.getElementById("userInput").value;
  var captcha = document.getElementById("captcha").innerHTML;
  if (userInput == captcha) {
    document.getElementById("result").innerHTML = "Captcha is correct!";
  } else {
    document.getElementById("result").innerHTML = "Captcha is incorrect, please try again.";
    generateCaptcha();
  }
}


function toggleAdditionalContent() {
  const additionalContent = document.getElementById("additionalContent");
  if (additionalContent.style.display === "none") {
    additionalContent.style.display = "block";
    generateCaptcha();
  } else {
    additionalContent.style.display = "none";
  }
}

function generateCaptcha() {
  var captcha = Math.random().toString(36).substr(2, 5);
  document.getElementById("captcha").innerHTML = captcha;
}
