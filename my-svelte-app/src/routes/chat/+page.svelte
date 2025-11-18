<script>
    import { GoogleGenerativeAI } from "@google/generative-ai";

    const genAI = new GoogleGenerativeAI("AIzaSyDFcImy2_u7RjIP33cfPhDiZQcPV3IH-JM");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let userPrompt = "";
    let output = "";

    function enhancePrompt(text) {
        return `Improve this prompt for clarity:\n${text}`;
    }

    async function sendPrompt() {
        const finalPrompt = enhancePrompt(userPrompt);
        const result = await model.generateContent(finalPrompt);
        output = result.response.text();
    }
</script>

<input bind:value={userPrompt} placeholder="Type something..." />
<button on:click={sendPrompt}>Ask</button>

<p>{output}</p>
