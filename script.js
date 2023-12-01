const quizData = [
  {
    question: "What is a prompt in AI?",
    a: "A special message to tell the AI what to do.",
    b: "A long article.",
    c: "A type of computer program.",
    d: "A new language.",
    correct: "a",
  },
  {
    question: "Why is prompt engineering important for AI?",
    a: "To make AI work without any instructions.",
    b: "To make AI understand what humans want.",
    c: "To make AI ignore human instructions.",
    d: "To make AI create mistakes.",
    correct: "b",
  },
  {
    question: "What's the main reason for using well-written prompts with AI?",
    a: "To confuse AI.",
    b: "To make AI write bad things.",
    c: "To help AI do what we want and give good answers.",
    d: "To stop AI from working.",
    correct: "c",
  },
  {
    question: "How can prompts make AI do what people want?",
    a: "By making instructions complicated.",
    b: "By using unclear instructions.",
    c: "By writing prompts that match what people like and need.",
    d: "By not using prompts at all.",
    correct: "c",
  },
  {
    question:
      "What do prompts do to reduce mistakes and confusion in AI responses?",
    a: "They make AI answers more wrong.",
    b: "They create more confusion.",
    c: "They give clear, short, and complete messages to AI.",
    d: "They make AI answers unclear on purpose.",
    correct: "c",
  },
  {
    question: "What does LLM stand for?",
    a: "Large Language Master",
    b: "Large Language Model",
    c: "Little Language Model",
    d: "Language Learning Module",
    correct: "b",
  },
  {
    question: "What are LLMs designed to do?",
    a: "Play video games",
    b: "Understand and generate human-like text",
    c: "Create artwork",
    d: "Drive cars",
    correct: "b",
  },
  {
    question: "What is prompting in the context of LLMs?",
    a: "Giving a model a hint",
    b: "Giving a model a name",
    c: "Giving a model a task",
    d: "Giving a model food",
    correct: "c",
  },
  {
    question:
      "Why is it important to use delimiters when writing prompts for LLMs?",
    a: "To confuse the model",
    b: "To make the prompt longer",
    c: "To separate the content from the instructions clearly",
    d: "To hide the instructions from the model",
    correct: "c",
  },
  {
    question:
      "How did the model translate the English text 'Hello, how are you?' to French in the example?",
    a: "By guessing",
    b: "By using magic",
    c: "By following clear instructions in the prompt",
    d: "By ignoring the prompt",
    correct: "c",
  },
  {
    question: "What is the primary purpose of LLMs?",
    a: "Playing video games",
    b: "Understanding and generating human language",
    c: "Solving mathematical equations",
    d: "Creating music",
    correct: "b",
  },
  {
    question: "What distinguishes Instruction Tuned LLMs from Base LLMs?",
    a: "Base LLMs answer questions, while Instruction Tuned LLMs generate text.",
    b: "Base LLMs follow clear instructions, while Instruction Tuned LLMs do not.",
    c: "Base LLMs complete sentences, while Instruction Tuned LLMs answer questions based on instructions.",
    d: "Base LLMs ignore prompts, while Instruction Tuned LLMs generate random answers.",
    correct: "c",
  },
  {
    question: "How are Instruction Tuned LLMs created?",
    a: "By randomly selecting text from the internet.",
    b: "By further training Base LLMs with instructions and using Reinforcement Learning with Human Feedback (RLHF).",
    c: "By giving them complex mathematical tasks.",
    d: "By using them for playing video games.",
    correct: "b",
  },
  {
    question:
      "What is the purpose of Reinforcement Learning from Human Feedback (RLHF)?",
    a: "To teach LLMs how to cook.",
    b: "To help LLMs understand emotions.",
    c: "To train LLMs using human feedback and improve their performance.",
    d: "To make LLMs better at solving mathematical problems.",
    correct: "c",
  },
  {
    question: "What are LLMs designed for?",
    a: "Playing video games",
    b: "Understanding and generating human language",
    c: "Solving mathematical equations",
    d: "Painting pictures",
    correct: "b",
  },
  {
    question:
      "Why is it important to use delimiters in prompts for language models?",
    a: "To confuse the model",
    b: "To make prompts longer",
    c: "To separate data from instructions clearly",
    d: "To hide data from the model",
    correct: "c",
  },
  {
    question:
      "What is the benefit of requesting structured output formats in prompts?",
    a: "It makes the prompts longer.",
    b: "It elicits specific and well-organized responses.",
    c: "It confuses the model.",
    d: "It doesn't impact the model's responses.",
    correct: "b",
  },
  {
    question:
      "How can you influence the writing style of a language model through prompts?",
    a: "By not mentioning the desired style at all.",
    b: "By mentioning the desired tone, style, or mood explicitly in the prompt.",
    c: "By using complicated words in the prompt.",
    d: "By using long sentences in the prompt.",
    correct: "b",
  },
  {
    question: "What does it mean to give conditions in a prompt?",
    a: "To provide the model with clear instructions.",
    b: "To make the prompts longer.",
    c: "To not give any instructions at all.",
    d: "To confuse the model.",
    correct: "a",
  },
  {
    question:
      "What is the purpose of providing successful examples in a prompt?",
    a: "To make the prompt shorter.",
    b: "To confuse the model.",
    c: "To help the model understand the desired behavior.",
    d: "To hide information from the model.",
    correct: "c",
  },
  {
    question: "When might you include steps in a prompt for a language model?",
    a: "When you want to make the prompt longer.",
    b: "When you want to confuse the model.",
    c: "When asking directly for the desired output doesn't work well.",
    d: "When you want to hide information from the model.",
    correct: "c",
  },
  {
    question: "Why is iterating and refining prompts important?",
    a: "It's not important at all.",
    b: "It helps create longer prompts.",
    c: "It ensures consistent and high-quality responses from the AI.",
    d: "It makes the prompts more confusing.",
    correct: "c",
  },
  {
    question: "What is the main goal of refining prompts through iterations?",
    a: "To make the prompts shorter.",
    b: "To make the AI less accurate.",
    c: "To create consistently accurate and relevant responses.",
    d: "To confuse the AI.",
    correct: "c",
  },
  {
    question:
      "What should you focus on when drafting the initial prompt for a language model?",
    a: "Making it as long as possible.",
    b: "Making it complex and difficult to understand.",
    c: "Making it clear and concise.",
    d: "Including unnecessary information.",
    correct: "c",
  },
  {
    question: "What is role prompting, and how does it work?",
    a: "It's a technique to confuse the AI.",
    b: "It encourages the AI to take on a specific character or viewpoint and respond accordingly.",
    c: "It involves providing context, instruction, and examples to the AI.",
    d: "It's a technique used only for fine-tuning large pre-trained models.",
    correct: "b",
  },
  {
    question:
      "What is few-shot prompting, and how many examples are typically used in this technique?",
    a: "Few-shot prompting is a technique that doesn't use any examples.",
    b: "Few-shot prompting involves providing numerous examples to the AI.",
    c: "Few-shot prompting is priming the model with a small number of examples, usually 2-10.",
    d: "Few-shot prompting uses only one example to instruct the AI.",
    correct: "c",
  },
  {
    question:
      "What is the purpose of the Chain of Thought technique in prompt engineering?",
    a: "To confuse the model by asking complex questions.",
    b: "To create prompts that are too long and detailed.",
    c: "To encourage sequential and logical exploration of ideas or problem-solving.",
    d: "To ask the AI for random information.",
    correct: "c",
  },
  {
    question:
      "Explain the Zero Shot Chain of Thought technique and how it differs from regular Chain of Thought.",
    a: "Zero Shot Chain of Thought involves asking unrelated questions, while regular Chain of Thought focuses on related topics.",
    b: "Zero Shot Chain of Thought encourages the AI to think in reverse, while regular Chain of Thought follows logical steps.",
    c: "Zero Shot Chain of Thought prompts do not require any examples, while regular Chain of Thought may use examples.",
    d: "Zero Shot Chain of Thought is a technique used only for fine-tuning models, while regular Chain of Thought is used for general AI responses.",
    correct: "c",
  },
  {
    question: "What is the primary goal of Least to Most prompting?",
    a: "To provide the AI with a single problem to solve.",
    b: "To break a complex problem into subproblems and solve each one progressively.",
    c: "To make prompts longer and more complicated.",
    d: "To confuse the AI by mixing unrelated tasks.",
    correct: "b",
  },
  {
    question:
      "How does the Dual Prompt approach differ from using a single prompt?",
    a: "Dual Prompt combines multiple techniques, while a single prompt uses only one.",
    b: "Dual Prompt asks the AI to perform multiple unrelated tasks, while a single prompt focuses on one task.",
    c: "Dual Prompt provides context, instruction, and example, while a single prompt uses only instruction.",
    d: "Dual Prompt is less effective than a single prompt in generating specific responses.",
    correct: "b",
  },
  {
    question:
      "Which part of a well-crafted prompt sets the stage for the information that follows?",
    a: "Example",
    b: "Instruction",
    c: "Context",
    d: "Role",
    correct: "c",
  },
  {
    question: "What is the main purpose of providing an example in a prompt?",
    a: "To confuse the AI by showing unrelated information.",
    b: "To make the prompt longer and more complex.",
    c: "To give the AI an idea of what a successful response should look like.",
    d: "To hide information from the AI.",
    correct: "c",
  },
  {
    question:
      "Which component of a prompt contains the task or question that the AI is expected to perform or answer?",
    a: "Context",
    b: "Example",
    c: "Role",
    d: "Instruction",
    correct: "d",
  },
  {
    question:
      "What is the benefit of understanding the different parts of a prompt when creating prompts for AI?",
    a: "It makes the prompts more confusing.",
    b: "It ensures the AI doesn't respond accurately.",
    c: "It helps in creating effective prompts that produce targeted and accurate responses.",
    d: "It makes prompts longer and less specific.",
    correct: "c",
  },
  {
    question:
      "What are some real-world applications of Language Models (LLMs)?",
    a: "Cooking recipes and gardening tips.",
    b: "Playing video games and watching movies.",
    c: "Designing chatbots and studying textbooks.",
    d: "Learning a new language and painting artwork.",
    correct: "c",
  },
  {
    question:
      "How can LLMs be used to generate structured data from natural language input?",
    a: "By converting natural language into images.",
    b: "By instructing LLMs to identify JSON objects in the text.",
    c: "By using LLMs to write poetry from user input.",
    d: "By asking LLMs to solve complex math problems.",
    correct: "b",
  },
  {
    question:
      "What is the purpose of using LLMs for inferring information from text?",
    a: "To create chatbots that tell jokes.",
    b: "To group product reviews by sentiment.",
    c: "To write emails more efficiently.",
    d: "To translate between programming languages.",
    correct: "b",
  },
  {
    question: "How can LLMs be helpful in writing automated email responses?",
    a: "They can play video games.",
    b: "They can generate images for emails.",
    c: "They can assist in crafting responses to customer inquiries.",
    d: "They can predict the weather for the recipient.",
    correct: "c",
  },
  {
    question:
      "In the context of coding assistance, how can LLMs be utilized for optimizing code?",
    a: "LLMs can make code more confusing.",
    b: "LLMs can generate random code snippets.",
    c: "LLMs can help optimize inefficient code.",
    d: "LLMs can only write code from scratch.",
    correct: "c",
  },
  {
    question:
      "What is one way to reduce the sensitivity of LLMs to the phrasing of prompts?",
    a: "Use poor grammar and spelling.",
    b: "Make prompts more explicit.",
    c: "Ask leading questions.",
    d: "Manipulate keywords.",
    correct: "b",
  },
  {
    question:
      "What does the term 'hallucinations' refer to in the context of LLMs?",
    a: "Visual distortions caused by LLMs.",
    b: "Incorrect information generated by LLMs.",
    c: "Dreams experienced by LLMs.",
    d: "Mind-altering effects of LLMs.",
    correct: "b",
  },
  {
    question:
      "How can you mitigate the risk of LLMs generating biased responses?",
    a: "Encourage the use of poor grammar.",
    b: "Use vague and ambiguous prompts.",
    c: "Employ content filters and guidelines.",
    d: "Increase the model's randomness.",
    correct: "c",
  },
  {
    question: "What is 'prompt hacking' in the context of LLMs?",
    a: "Hacking into the model's training data.",
    b: "Manipulating prompts to generate unsafe or unwanted outputs.",
    c: "Improving the model's response accuracy.",
    d: "Enhancing the model's computational power.",
    correct: "b",
  },
  {
    question:
      "What should you do if you encounter a situation where an LLM generates content that violates safety guidelines or is off-topic?",
    a: "Share it on social media for fun.",
    b: "Report the issue and seek ways to prevent it.",
    c: "Encourage others to use similar prompts.",
    d: "Ignore it and move on.",
    correct: "b",
  },
  {
    question: "What is debiasing in the context of AI language models?",
    a: "Enhancing the biases in AI models.",
    b: "Reducing biases in AI language model responses.",
    c: "Introducing new biases into AI models.",
    d: "Ignoring biases in AI model development.",
    correct: "b",
  },
  {
    question: "What is the purpose of prompt ensembling in AI modeling?",
    a: "To increase computational complexity.",
    b: "To introduce biases into AI model responses.",
    c: "To improve reliability and accuracy by combining multiple model outputs.",
    d: "To decrease the number of AI models used.",
    correct: "c",
  },
  {
    question: "What is the role of self-evaluation in AI models?",
    a: "To provide user feedback.",
    b: "To increase the number of model parameters.",
    c: "To fine-tune the model.",
    d: "To help the model assess its own performance and improve reliability.",
    correct: "d",
  },
  {
    question: "What is calibration in AI language models?",
    a: "Adjusting models to produce inconsistent responses.",
    b: "Fine-tuning models to introduce biases.",
    c: "The process of reducing model biases and improving response quality.",
    d: "Increasing model randomness.",
    correct: "c",
  },
  {
    question:
      "How can prompt engineers improve the reliability of AI language models for mathematical tasks?",
    a: "Use vague and ambiguous prompts.",
    b: "Avoid providing any examples in prompts.",
    c: "Break down complex problems into step-by-step instructions.",
    d: "Ignore user feedback.",
    correct: "c",
  },
  {
    question: "What does the temperature setting control in a language model?",
    a: "The maximum number of tokens in the output.",
    b: "The randomness of the generated text.",
    c: "The diversity of vocabulary.",
    d: "The learning rate of the model.",
    correct: "b",
  },
  {
    question:
      "How does a lower temperature value affect the output of a language model?",
    a: "It makes the output more random and creative.",
    b: "It makes the output more focused and deterministic.",
    c: "It increases the verbosity of the output.",
    d: "It limits the length of the response.",
    correct: "b",
  },
  {
    question:
      "What is the purpose of the top-K sampling technique in language models?",
    a: "To control the temperature of the model.",
    b: "To limit the vocabulary size of the model.",
    c: "To restrict the model from generating unrelated information.",
    d: "To make the model more creative.",
    correct: "c",
  },
  {
    question:
      "How does top-P sampling differ from top-K sampling in controlling randomness in text generation?",
    a: "Top-P sampling limits the number of tokens, while top-K sampling sets a cumulative probability threshold.",
    b: "Top-P sampling encourages high randomness, while top-K sampling encourages conservatism.",
    c: "Top-P sampling requires manual tuning, while top-K sampling is adaptive.",
    d: "Top-P sampling is used for temperature adjustment, while top-K sampling is used for length control.",
    correct: "a",
  },
  {
    question: "What does adjusting the Top P value in text generation affect?",
    a: "The verbosity of the output.",
    b: "The maximum number of tokens in the output.",
    c: "The balance between diversity and coherence in the output.",
    d: "The learning rate of the model.",
    correct: "c",
  },
  {
    question: "What is image prompting used for in AI models?",
    a: "Generating text descriptions from images.",
    b: "Enhancing image quality.",
    c: "Creating visual art.",
    d: "Training AI models.",
    correct: "a",
  },
  {
    question:
      "What are the key concepts to consider when crafting effective image prompts for AI models?",
    a: "Speed and efficiency.",
    b: "Complexity and ambiguity.",
    c: "Descriptiveness, context, and precision.",
    d: "Visual style and aesthetics.",
    correct: "c",
  },
  {
    question:
      "How can you improve the artistic style of images generated by Midjourney?",
    a: "Lower the chaos value.",
    b: "Increase the quality parameter.",
    c: "Use a higher stylize value.",
    d: "Change the default aspect ratio.",
    correct: "c",
  },
  {
    question: "What does the chaos parameter control in Midjourney?",
    a: "Image resolution.",
    b: "Aspect ratio.",
    c: "Variation and creativity in image generation.",
    d: "Image quality.",
    correct: "c",
  },
  {
    question:
      "How can you influence the aspect ratio of images generated by Midjourney?",
    a: "Adjust the quality parameter.",
    b: "Set the seed value.",
    c: "Use a different stylize value.",
    d: "Specify the aspect ratio with the --ar parameter.",
    correct: "d",
  },
  {
    question:
      "What is the purpose of using seed values in image generation with Midjourney?",
    a: "To change the aspect ratio.",
    b: "To enhance image quality.",
    c: "To specify the chaos level.",
    d: "To reproduce similar images.",
    correct: "d",
  },
  {
    question:
      "Which parameter in Midjourney controls the time spent generating an image and influences its quality?",
    a: "Chaos",
    b: "Aspect Ratio",
    c: "Seed",
    d: "Quality",
    correct: "d",
  },
  {
    question:
      "What does the stylize parameter do in Midjourney image generation?",
    a: "Adjust the aspect ratio of the image.",
    b: "Influence the artistic style applied to the image.",
    c: "Control the randomness of image generation.",
    d: "Specify the seed value.",
    correct: "b",
  },
  {
    question:
      "Which version of Midjourney allows you to access earlier models?",
    a: "Version 1",
    b: "Version 2",
    c: "Version 3",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "How can you adjust the default stylize value in Midjourney?",
    a: "Use a different seed value.",
    b: "Set the chaos parameter.",
    c: "Use the /settings command.",
    d: "Change the aspect ratio.",
    correct: "c",
  },
  // End of the quizzes
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
