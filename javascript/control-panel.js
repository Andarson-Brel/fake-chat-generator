// ====================SELECTORS===================
const localTime = document.querySelectorAll(".local-time");

const battery = document.querySelectorAll(".battery-percentage");
const batteryInput = document.querySelector(".battery-input");
const usernameInput = document.querySelector(".username-input");
const username = document.querySelectorAll(".username");
const statusInput = document.querySelector(".status-input");
const userStatus = document.querySelectorAll(".status");

const tabBtn = document.querySelectorAll(".switch");
const tabs = document.querySelectorAll(".device");

const inputFile = document.querySelector("#upload-img-btn");
const imgAreas = document.querySelectorAll(".profile-photo");
const downloadBtn = document.querySelectorAll(".download");
// ========================END OF SELECTORS===========================

// ===================================BATTERY FUNCTIONALITY======================================
batteryInput.addEventListener("input", function updateBatteryPercentage(e) {
  if (batteryInput.value > 100) {
    batteryInput.value = 100;
  }
  battery.forEach((batteries) => {
    batteries.style.width = e.target.value + "%";
  });
});

// ==========================================device time funtionality=================================================
const timezoneH = new Date().getHours();
const timeZoneM = new Date().getMinutes();

localTime.forEach((time) => {
  time.textContent = `${timezoneH}:${timeZoneM}`;
});
//=================================== USER NAME FUNCTIONALIITY==========================================
usernameInput.addEventListener("input", function updateBatteryPercentage(e) {
  username.forEach((user) => {
    user.textContent = e.target.value;
  });
});
// =======================================Status FUNCTIONALITY=======================================
statusInput.addEventListener("input", function updateBatteryPercentage(e) {
  userStatus.forEach((statusType) => {
    statusType.textContent = e.target.value;
  });
});

// ==========================profile image functionality====================================

inputFile.addEventListener("change", function () {
  const image = this.files[0];
  if (image.size < 2000000) {
    const reader = new FileReader();
    reader.onload = () => {
      imgAreas.forEach((imgArea) => {
        imgArea.classList.add("active");
        imgArea.dataset.img = image.name;
        const allImg = imgArea.querySelectorAll("img");
        allImg.forEach((img) => img.remove());
        const imgUrl = reader.result;
        const img = document.createElement("img");
        img.src = imgUrl;
        imgArea.appendChild(img);
      });
    };
    reader.readAsDataURL(image);
  } else {
    alert("Image size more than 2MB");
  }
});

// =====================================switch device functionality====================================

tabBtn.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    tabBtn.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.remove("htmlContent");
    });
    downloadBtn.forEach((btn) => {
      btn.classList.toggle("inactive");
    });

    tab.classList.add("active");
    tab.classList.add("htmlContent");

    tabs.forEach((content) => {
      content.classList.remove("active");
      content.classList.remove("htmlContent");
    });

    tabs[index].classList.add("active");
    tabs[index].classList.add("htmlContent");

    function autoClick() {
      $("#download").click();
    }
    recBtns.forEach((btn) => {
      btn.classList.add("active");
    });
    recBtns[index].classList.remove("active");
  });
});

// ====================================================READ MORE FUNCTIONALITY========================
const readMoreBtn = document.querySelector(".read-more-btn");

const text = document.querySelector(".card__read-more");

const cardHolder = document.querySelector(".card-holder");

readMoreBtn.addEventListener("click", (e) => {
  const current = e.target;

  const isReadMoreBtn = current.className.includes("read-more-btn");

  if (!isReadMoreBtn) return;

  const currentText = e.target.parentNode.querySelector(".card__read-more");

  currentText.classList.toggle("card__read-more--open");

  current.textContent = current.textContent.includes("Read Less...")
    ? "Read More..."
    : "Read Less...";
});
