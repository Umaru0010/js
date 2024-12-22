const heightList = document.getElementById('heightList');
const addHeightBtn = document.getElementById('addHeightBtn');
const filterHeightBtn = document.getElementById('filterHeightBtn');

let heights = [160, 175, 180, 155, 170, 185, 165];

function renderHeights(filteredHeights = heights) {
    heightList.innerHTML = '';
    filteredHeights.forEach(height => {
        const listItem = document.createElement('li');
        listItem.textContent = height;
        heightList.appendChild(listItem);
    });
}
renderHeights();

addHeightBtn.addEventListener('click', () => {
    const newHeight = prompt("Введите рост ученика");
    if (!newHeight) {
        alert("Рост не введён!");
    } else if (isNaN(newHeight)){
      alert("Введите число!")
    } else{
        heights.push(parseInt(newHeight));
        renderHeights();
    }
});


filterHeightBtn.addEventListener('click', () => {
    const minHeight = prompt("Введите минимальное значение роста");
    if (!minHeight) {
         renderHeights();
         return;
    } else if (isNaN(minHeight)) {
      alert("Введите число!");
      return
    }
     const filteredHeights = heights.filter(height => height >= parseInt(minHeight));
      renderHeights(filteredHeights);
});