export const fetchResponse = async (prompt: string): Promise<any> => {
    const url = 'https://api.openai.com/v1/chat/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPEN_API_KEY}`
    };

    const body = JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0,
        messages: [
            {
                role: 'system',
                content: 'You are a Catholic priest. When provided with a human emotion, you will give 3 bible verses from the NRSV-CE that relate to the emotion. Return the response as a json list of objects with the properties: id, book, chapter, verse, body. Respond with JSON only and no explination and no wrapping for markdown.',
            },
            {
                role: 'user',
                content: prompt
            }
        ],
    });

    return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers,
            body
        })
        .then(response => {
            if (!response.ok) {
                reject(new Error(`Error: ${response.body}`));
            }

            return response.json();
        })
        .then(data => {
            resolve(JSON.parse(data.choices[0].message.content))
        })
    });
}
