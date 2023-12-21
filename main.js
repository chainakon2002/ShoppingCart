document.addEventListener("DOMContentLoaded", function () {
    var trashCan = document.querySelector(".fa-trash-can");

    trashCan.addEventListener("click", function () {
        // Toggle the 'selected' class
        this.classList.toggle("selected");

        // You can add more logic here based on the selection state
        if (this.classList.contains("selected")) {
            // The trash can is selected, perform actions
            alert("Trash can selected!");
        } else {
            // The trash can is not selected, perform other actions
            alert("Trash can unselected!");
        }
    });
});
