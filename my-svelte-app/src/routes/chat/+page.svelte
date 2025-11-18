<script>
    import { GoogleGenerativeAI } from "@google/generative-ai";

    const genAI = new GoogleGenerativeAI("AIzaSyDFcImy2_u7RjIP33cfPhDiZQcPV3IH-JM");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    let userPrompt = "";
    let output = "";

    function enhancePrompt(text) {
        //return `Improve this prompt for clarity:\n${text}`;
      return `You are a Sinhala orthography and grammar expert. Correct the text focusing on ණ/න, ළ/ල, ශ/ෂ/ස, Mahāprāṇa/Alpaprāṇa letters (ඛ, ඝ, ඣ, ඪ, ථ, ධ, ඵ, භ), and Nasal/Saññaka (ඤ, ඥ). Output only corrected text. \n${text}`;
    }
 
    async function sendPrompt() {
        const finalPrompt = enhancePrompt(userPrompt);
      //const finalPrompt = userPrompt;
        const result = await model.generateContent(finalPrompt);
        output = result.response.text();
    }
</script>
<h1>සිංහල අක්ෂර වින්‍යාසය</h1>
<input bind:value={userPrompt} placeholder="ඇතුළත් කරන්න..." />
<button on:click={sendPrompt}>අසන්න</button>

<p>{output}</p>
