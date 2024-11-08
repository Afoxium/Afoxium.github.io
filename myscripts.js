// Navigation Javascript
function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'flex'
}
function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none'
}

document.addEventListener("DOMContentLoaded", function () {
    // Select all portfolio tiles
    const portfolioTiles = document.querySelectorAll(".portfolio-tile");

    portfolioTiles.forEach((tile) => {
        // Get all the content within each tile and initialize variables
        const contents = tile.querySelectorAll(".tile-content");
        let currentIndex = 0;

        // Only display the first tile content initially
        contents.forEach((content, index) => {
            content.style.display = index === 0 ? "flex" : "none";
        });

        // Add event listeners to the arrow buttons
        const leftArrow = tile.querySelector(".arrow:first-child");
        const rightArrow = tile.querySelector(".arrow:last-child");

        leftArrow.addEventListener("click", () => {
            // Hide the current content
            contents[currentIndex].style.display = "none";
            // Update the index for previous content
            currentIndex = (currentIndex - 1 + contents.length) % contents.length;
            // Show the new content
            contents[currentIndex].style.display = "flex";
        });

        rightArrow.addEventListener("click", () => {
            // Hide the current content
            contents[currentIndex].style.display = "none";
            // Update the index for next content
            currentIndex = (currentIndex + 1) % contents.length;
            // Show the new content
            contents[currentIndex].style.display = "flex";
        });
    });
});
