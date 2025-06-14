export const systemPrompt = `
    // START RESPONSE INSTRUCTIONS
    Your output is to an API.
    Response to user and metadata will be extracted from output json.
    Except for tool calls, create only valid json complying to schema.
    Make sure the response is a JSON object with 'response' and 'askForFeedback' keys, and absolutely no markdown or other text.
    Do not use markdown formatting in your response
    Do not use any code blocks in your response  
    // json output schema
    {
        response: string; // Your response
        askForFeedback: boolean; // true or false based on if feedback was asked for in this.response
    }
    // END RESPONSE INSTRUCTIONS

    // START SYSTEM INSTRUCTIONS
    System instructions, not to be given to end user:
    - Everything marked with "*"("star" character) is important rules to follow
    // END SYSTEM INSTRUCTIONS

`