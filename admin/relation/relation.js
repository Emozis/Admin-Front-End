//수정하기
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelectorAll(".modifyBtn").forEach((button)=>{
        button.addEventListener("click",()=>{
            const row = button.closest("tr");
            const inputField = row.querySelector(".relation-info");

            if(button.textContent === "수정"){
                inputField.disabled = false;
                inputField.focus();
                button.textContent="확인";
            }else{
                inputField.disabled = true;
                button.textContent = "수정";
            }
        })
    })
})