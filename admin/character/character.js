//헤더 로드
fetch("/admin/header/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-container").innerHTML = data;

    const menuItems = document.querySelectorAll(".menu-item");
    const currentPath = window.location.pathname;

    menuItems.forEach(item => {
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
      const characterId = row.querySelector("td:first-child").textContent; // No 값 가져오기
      const targetUrl = `/admin/character/characterDetail.html`;
      
      window.location.href = targetUrl;
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".image-table tbody tr").forEach((row) => {
    row.addEventListener("click", () => {
      const characterId = row.querySelector("td:first-child").textContent; // No 값 가져오기
      const targetUrl = `/admin/character/imageDetail.html`;
      
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
