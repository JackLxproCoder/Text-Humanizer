async function humanizeText() {
    const inputText = document.getElementById('input-text').value;
    const responseBox = document.getElementById('responseBox');
    const responseText = document.getElementById('responseText');

    if (!inputText) {
        alert('Please enter some text to humanize!');
        return;
    }

    try {
        const response = await fetch(`https://kaiz-apis.gleeze.com/api/humanizer?q=${encodeURIComponent(inputText)}`);
        const data = await response.json();
        
        responseText.textContent = data.response || data.error || 'No response found';
        responseBox.classList.add('show');
        
        responseBox.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
        responseText.textContent = 'Error processing your request. Please try again.';
        responseBox.classList.add('show');
    }
}

function copyText() {
    const responseText = document.getElementById('responseText');
    const textarea = document.createElement('textarea');
    textarea.value = responseText.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    const copyBtn = document.querySelector('.copy-btn');
    copyBtn.textContent = '✓ Copied!';
    setTimeout(() => {
        copyBtn.textContent = '📋 Copy';
    }, 2000);
}