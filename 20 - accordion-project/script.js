const toggles = document.querySelectorAll(".toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const wrapper = toggle.parentElement;
        const content = wrapper.querySelector(".content");
        const icon = wrapper.querySelector(".fas");

        // Close all other accordions
        document.querySelectorAll(".wrapper").forEach(otherWrapper => {
            if (otherWrapper !== wrapper) {
                otherWrapper.classList.remove("active");
                const otherContent = otherWrapper.querySelector(".content");
                const otherIcon = otherWrapper.querySelector(".fas");
                otherContent.style.height = 0;
                otherIcon.classList.remove("fa-minus");
                otherIcon.classList.add("fa-plus");
                otherWrapper.querySelector(".toggle").style.color = "black";
            }
        });

        // Toggle current accordion
        wrapper.classList.toggle("active");
        if(wrapper.classList.contains("active")){
            content.style.height = content.scrollHeight + "px";
            icon.classList.remove("fa-plus");
            icon.classList.add("fa-minus");
            toggle.style.color = "blue";
        } else {
            content.style.height = 0;
            icon.classList.remove("fa-minus");
            icon.classList.add("fa-plus");
            toggle.style.color = "black";
        }
    });
});