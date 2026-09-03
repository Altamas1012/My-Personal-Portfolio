   
   
   const tablinks = document.getElementsByClassName("tab-links");
        const tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(e, tabname) {
            for (let tablink of tablinks) {
                tablink.classList.remove("active-link");
            }
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }
            e.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }

        // Mobile Slide Menu Toggle
        function openmenu() {
            const sidemenu = document.getElementById("sidemenu");
            sidemenu.style.right = "0px";
        }

        function closemenu() {
            const sidemenu = document.getElementById("sidemenu");
            sidemenu.style.right = "-200px";
        }