document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("emailForm");
    const sendMailButton = document.getElementById("sendMailButton");

    sendMailButton.addEventListener("click", function () {
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;

        const mailTo = "sohsmd-mef@gov.in";
        const subject = "Enhancing the Green Credit Mechanism for Sustainable Development (Suggestions)";
        const content = `<style>
        ol {
            margin-top: 0; /* Remove top margin from the ordered list */
            padding-left: 20px; /* Add some left padding for the list */
        }
        p {
            margin: 0; /* Remove margin from paragraphs */
        }
    </style>
<p>
Dear Sir/Madam,

I extend my heartfelt appreciation to the Government and officials of the Ministry of Environment, Forest, and Climate Change for recognizing the vital role of farmers in creating greenery and taking steps to acknowledge their efforts through the Green Credit Mechanism (GCP). After carefully studying the recent Gazette of India Notification S.O 2779(E) and considering the inputs from various stakeholders, I would like to offer the following suggestions to further strengthen the GCP and ensure its effectiveness in promoting sustainable development in our country:
</p>
<ol>
    <li>Adopt clear and consistent guidelines to streamline the Green Credit Mechanism (GCP) and avoid confusion between notifications by different ministries.</li>
    <li>Form an inter-departmental high-power committee comprising experts from various ministries to ensure technical accuracy and international alignment.</li>
    <li>Create a comprehensive and publicly accessible database considering India's diverse climatic and topographical variations, crop diversity, and cultural differences.</li>
    <li>Implement an inclusive approach, incorporating lands other than forests, to ensure transparency in assessment and public access to relevant data.</li>
    <li>Establish an independent autonomous body as a steering committee to oversee and administer all aspects of the GCP for fairness and credibility.</li>
    <li>Form a quasi-judicial appellate authority as an apex body to enhance transparency and public confidence.</li>
    <li>Adopt the term "AFOLU" (Agriculture, Forestry, and Other Land Use) to encompass all land-related activities for reducing and removing greenhouse gases, making the mechanism holistic.</li>
    <li>Align with comprehensive guidelines by the United Nations through IPCC for international equivalency of carbon credit.</li>
    <li>Involve stakeholders and seek public opinion during the publication of guidelines by the steering committee to ensure thorough consideration.</li>
    <li>Allow registered farmer associations' participation in the GCP to ensure farmers' involvement in rural areas.</li>
    <li>Accurately calculate and grant excess green credit to individuals and institutions for carbon sequestration efforts, incentivizing carbon footprint reduction.</li>
    <li>Ensure fairness and transparency in the market for green credits by assigning equivalent value to credits as existing carbon credits.</li>
    <li>Accurately track and report credit additions and omissions annually to provide clarity and eliminate confusion about credit values.</li>
    <li>Introduce net zero certification for natural and organic products to promote sustainable and eco-friendly production.</li>
    <li>Reward conservationists for their contributions to soil and water conservation by accurately allocating excess green credits.</li>
    <li>Explore and leverage the market potential for green credit in both domestic and international markets to maximize the benefits of the mechanism.</li>
    <li>Establish a robust grievance redressal system to address any concerns related to the Green Credit Program, ensuring fairness and transparency.</li>
    <li>Enhance inclusivity and responsiveness by avoiding sole jurisdiction of the Ministry of Forests and Environment in the GCP.</li>
    <li>Ensure transparency and accountability by bringing the GCP and related activities under the purview of the Freedom of Information Act.</li>
    <li>Foster fairness and transparency in the green credit market by making registry data accessible to both buyers and sellers of credit.</li>
    <li>Enhance transparency and accountability of the mechanism by identifying credit ownership by the Ministry of Forests and Environment and the public.</li>
    <li>Promote fairness and transparency in the process by fixing a reasonable fee for the authorized agency calculating green credit.</li>
    <li>Prioritize farmers' and institutions' credits in the market to ensure a wider distribution of benefits from the mechanism.</li>
</ol>
<p>
By incorporating these suggestions, the Green Credit Mechanism can become a powerful tool for revitalizing the plantation industry and supporting the farming community, leading India towards a greener and more sustainable future.

I sincerely hope that my recommendations will be taken into consideration, and I express my willingness to collaborate with the Ministry to promote environmental conservation and climate action.

Thank you for your attention to these critical matters.

Sincerely,
${name}
${address}
${phone}
</p>
`;


        const mailLink = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
        window.open(mailLink, "_blank");
    });
});
