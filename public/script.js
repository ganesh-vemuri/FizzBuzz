document.getElementById('fizzbuzz-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const values = document.getElementById('values').value.split(',').map(value => {
        const parsed = parseInt(value.trim());
        return isNaN(parsed) ? value.trim() : parsed;
    });

    const response = await fetch('/fizzbuzz', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ values })
    });

    const results = await response.json();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = `Input: ${result.input}, Result: ${result.output}`;
        resultsDiv.appendChild(div);
    });
});
