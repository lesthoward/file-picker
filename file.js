const hiddenFilePicker = document.querySelector('.file__picker');
const customFilePicker = document.querySelector('.file__customfile');
const customFileText = document.querySelector('.file__customtext');

customFilePicker.addEventListener('click', () => {
    hiddenFilePicker.click()
})

hiddenFilePicker.addEventListener('change', () => {
    customFileText.textContent = hiddenFilePicker.value.match(/[A-Z0-9-_a-z.]+\.[a-z]{2,8}$/)
})