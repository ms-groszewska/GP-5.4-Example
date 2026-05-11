function toggleTheme() {
    document.body.classList.toggle("light-mode");
}

function showFact() {
    const facts = [
        "I am starting school again on May 26th, and I feel pretty nervous!",
        "I have lived in Nashville for almost 6 years.",
        "I met my two best friends in 7th grade and my first year of undergrad. They are also great friends with each other!",
        "I have lived in the US since 2014, and I became a US Citizen in October!",
        "I have been on 138 flights since 2022, flying 95,408 miles over 12 days and 6 hours.",
        "This summer, I will be in school, traveling to Scotland, spending time with Todd, and moving to a new area of Nashville!"
    ];

    let randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("factOutput").innerText = randomFact;
}

function showDogMessage() {
        const toddFacts = [
        "Todd has been frequently called a look-alike of the iPhone Dog emoji.",
        "I adopted Todd in June 2025.",
        "Todd was abandoned in rural Alabama, and saved by a local Nashville rescue.",
        "His favorite toy is a stuffed Hedwig (from Harry Potter) plushie.",
        "He gets along well with cats and other dogs, but he is really scared of new people.",
        "Todd loves going on walks and playing fetch!",
        "His favorite treats are beef or chicken, and he hates peanut butter."
    ];

    let randomToddFact = toddFacts[Math.floor(Math.random() * toddFacts.length)];
    document.getElementById("dogOutput").innerText = randomToddFact;
}
