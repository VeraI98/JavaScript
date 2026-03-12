
// ЧАСТЬ 1 

const usersContainer = document.querySelector(".users");

usersContainer.addEventListener("click", (event) => {
    const deleteBtn = event.target.closest(".delete-btn");

    if (deleteBtn) {
        const card = deleteBtn.closest(".user-card");
        const id = card.dataset.id;

        console.log(`Delete user ${id}`);
        return;
    }

    const card = event.target.closest(".user-card");

    if (!card) return;
    const id = card.dataset.id;

    console.log(`Open user ${id}`);
    });



    // ЧАСТЬ 2

    const userCards = document.querySelectorAll(".user-card");

    userCards.forEach((card) => {
    card.addEventListener("click", () => {
        const id = card.dataset.id;
        console.log(`Open user ${id}`);
    });
    });

    const deleteButtons = document.querySelectorAll(".delete-btn");

    deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.stopPropagation();
        const card = btn.closest(".user-card");
        const id = card.dataset.id;

        console.log(`Delete user ${id}`);
    });
});