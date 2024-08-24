document.addEventListener('DOMContentLoaded', () => {
    const changeTextButton = document.getElementById('changeTextButton');
    const resetTextButton = document.getElementById('resetTextButton');
    const customTextButton = document.getElementById('customTextButton');
    const message = document.getElementById('message');
    const userInput = document.getElementById('userInput');

    changeTextButton.addEventListener('click', () => {
        message.textContent = 'JavaScriptの世界へようこそ！';
    });

    resetTextButton.addEventListener('click', () => {
        message.textContent = 'このテキストを変更するには、以下のボタンをクリックしてください。';
    });

    customTextButton.addEventListener('click', () => {
        const text = userInput.value.trim();
        if (text !== "") {
            message.textContent = text;
        } else {
            alert('テキストを入力してください。');
        }
    });
});
