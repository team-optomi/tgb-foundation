const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const buildHookUrl = 'https://api.netlify.com/build_hooks/6148d875cdefbe0945747b0d';

    try {
        await fetch(buildHookUrl, { method: 'POST' });
        return { statusCode: 200, body: 'Build Triggered' };
    } catch (error) {
        return { statusCode: 500, body: 'Failed to trigger build' };
    }
};