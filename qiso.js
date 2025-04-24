// Set full-page layout with Tailwind
document.body.className = "bg-gray-900 text-white flex min-h-screen";

// Create left sidebar for chapter navigation
const sidebar = document.createElement("div");
sidebar.className = "w-1/4 p-6 bg-gray-800 flex flex-col gap-4 h-screen overflow-auto";

// Create main content area
const contentContainer = document.createElement("div");
contentContainer.className = "w-3/4 p-8 overflow-y-auto";

const heading = document.createElement("h1");
heading.textContent = "Qisasul Anbiya: tarrikhda nabiyulahi Yusuf (AS)";
heading.className = "text-4xl font-bold mb-6 text-center";

const content = document.createElement("div");
content.className = "text-lg leading-relaxed flex flex-col items-center gap-6";

// Define story chapters with image paths
const chapters = [
    {
        title: "Chapter 1: riyadii nabi  Yusuf (AS)",
        text: "nabi yusuf ayaa waxu la hadalay aabihiiso  yacquun calayhi sallam wuxu ku dhahay waxan arkay 11xidigood io dayaxii io qoraxdiiyo ii sujudsan aabihi yacquub wuxu ku dhahy qisada hala wadagin wallalha hadii kle way ku shirqoolayane ...",
        image: "yusuf.png"
    },
    {
        title: "Chapter 2:KHIYAMDII WALAALIHIIS",
        text: "Yusuf (AS)’s walalahi waxay ka hinaseen jacaylka uu u qabay abahood oo waxay go aansaden inay mesha ka saran kadib ceel ayay ku rideen...",
        image: "1.avif"
    },
    {
        title: "Chapter 3: iibsigii nabi yusuf cs",
        text: "qolo ganacsato ahyd aya soo maraty ceelkii kadibna ay ka iibsadan sidaasna uu ku badbaado iyagoona u kaxaysty adoon iyo inuu ayaga shaqaale u noqdo ...",
        image: "images.jpg"
    },
    {
        title: "Chapter 4: ceebayntii ama khiymadii",
        text: "wallow nabiyullahii muusa uu aha qof sharaf iyo dhaqan wangsan hadana xaaski boqorka aya shagty inuu damcay kadibna waa la xidhay...",
        image: "1.png"
    },
    {
        title: "Chapter 5: soo bandhigidiisa nabi nimo ",
        text: "Nebi Yuusuf (CS) waxa uu u fasiray riyooyinkii ay ku riyoon jireen maxaabiistii ay isku xidhnaayeen intii uu xabsiga ku jiray. Tani waa qayb caan ah oo ka mid ah sheekadiisa, oo lagu faahfaahiyay Quraanka. Laba maxbuus oo kale ayuu u fasiray riyooyinkoodii, isagoo si sax ah u saadaaliyay aayahooda, mid waa la sii daayay, midna la dilay wax yar ka dib. ...",
        image: "3.jpg"
    },
    {
        title: "Chapter 6: sara u kacii awoodi nabi yusuf",
        text: "boqorkii oo la dhacay xikmadihiisa oo dalacsiyay nabi yusuf cs kadibna ka dhigtay la taliyhiisa sido kale wuxu aad ula dhacay maskaxdiisa io wangiisa...",
        image: "chapter6.jpg"
    },
    {
        title: "Chapter 7: la kulankii walalihiisa",
        text: "wakhtigii ay kulamayeen nabiyulahi yusuf iyo walalhiis waxa dhacday abaar midasi oo sababtay inay gargar kaso doontan boqortoydii masar balse ma oga inuu kaso horayay wallkood uuna yahay mid aad looga qadariyo boqortooyda dhaxdeeda ...",
        image: "chapter7.jpg"
    },
    
];

// Function to update content
function updateContent(index) {
    content.innerHTML = "";

    const paragraph = document.createElement("p");
    paragraph.textContent = chapters[index].text;

    const chapterImage = document.createElement("img");
    chapterImage.src = chapters[index].image;
    chapterImage.alt = chapters[index].title;
    chapterImage.className = "rounded shadow-lg w-full max-w-xl";

    content.appendChild(paragraph);
    content.appendChild(chapterImage);
}

// Generate chapter buttons
chapters.forEach((chapter, index) => {
    const button = document.createElement("button");
    button.textContent = chapter.title;
    button.className = "px-4 py-2 bg-gray-700 rounded text-left hover:bg-gray-600 transition";
    button.addEventListener("click", () => updateContent(index));
    sidebar.appendChild(button);
});

// Set default chapter
updateContent(0);

// Add all components to the page
contentContainer.appendChild(heading);
contentContainer.appendChild(content);
document.body.appendChild(sidebar);
document.body.appendChild(contentContainer);