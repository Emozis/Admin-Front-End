//헤더 로드
fetch("/admin/header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    const menuItems = document.querySelectorAll(".menu-item");
    const currentPath = window.location.pathname;

    menuItems.forEach((item) => {
      let link = item.getAttribute("data-link");

      if (currentPath.startsWith(link)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }

      item.addEventListener("click", () => {
        const link = item.getAttribute("data-link");
        if (link) {
          window.location.href = link;
        }
      });
    });
  })
  .catch((err) => console.error("Error loading header: ", err));

document.querySelectorAll(".category-item").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".category-item")
      .forEach((el) => el.classList.remove("active"));
    item.classList.add("active");

    const link = item.getAttribute("data-link");
    if (link) {
      window.location.href = link;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".character-table tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      const characterId = row.querySelector("td:first-child").textContent;
      const targetUrl = `/admin/character/characterDetail.html`;

      window.location.href = targetUrl;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".image-item").forEach((item) => {
    item.addEventListener("click", () => {
      const targetUrl = "/admin/profile/imageDetail.html";
      window.location.href = targetUrl;
    });
  });
});

//버전 import
document.addEventListener("DOMContentLoaded", () => {
  fetch("/admin/header/version.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch version.html");
      }
      return response.text();
    })
    .then((html) => {
      document.getElementById("version-container").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading version.html:", error);
    });
});

//이미지 미리보기
document.addEventListener("DOMContentLoaded", () => {
  const imageUpload = document.getElementById("image-upload");
  const previewImage = document.getElementById("preview-image");

  imageUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        previewImage.src = e.target.result;
        previewImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    } else {
      previewImage.style.display = "none";
    }
  });
});

//캐릭터생성
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("createChar").addEventListener("click", () => {
    const targetUrl = "/admin/character/characterCreate.html";
    window.location.href = targetUrl;
  });
});

//이미지생성
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("createImg").addEventListener("click", () => {
    const targetUrl = "/admin/profile/imageCreate.html";
    window.location.href = targetUrl;
  });
});

//이미지 업로드
const imageUpload = document.getElementById("image-upload");
const preview = document.getElementById("preview");

imageUpload.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      preview.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
});
