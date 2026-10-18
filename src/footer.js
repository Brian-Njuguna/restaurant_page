
export default function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    // Brand section
    const brand = document.createElement("div");
    brand.classList.add("footer-brand");

    const heading = document.createElement("h2");
    heading.textContent = "VEE'S KITCHEN FOR CHIPS & FRIES";

    const tagline = document.createElement("p");
    tagline.textContent = "Home of fish and fries";

    brand.append(heading, tagline);

    // Navigation section
    const navigation = document.createElement("div");
    navigation.classList.add("footer-navigation");

    const navHeading = document.createElement("h3");
    navHeading.textContent = "Explore";

    const links = document.createElement("div");
    links.classList.add("footer-links");

    const pages = ["Home", "Menu", "About", "Contact"];

    pages.forEach((page) => {
        const link = document.createElement("a");
        link.textContent = page;
        link.href = `#${page.toLowerCase()}`;
        links.appendChild(link);
    });

    navigation.append(navHeading, links);

    // Contact section
    const contact = document.createElement("div");
    contact.classList.add("footer-contact");

    const contactHeading = document.createElement("h3");
    contactHeading.textContent = "Get in touch";

    const phone = document.createElement("p");
    phone.textContent = "Phone / WhatsApp: 0700000000";

    const location = document.createElement("p");
    location.textContent = "Location: Kahawa West";

    const hours = document.createElement("p");
    hours.textContent = "Opening hours: 6am-9pmz";

    contact.append(contactHeading, phone, location, hours);

    // Copyright section
    const copyright = document.createElement("p");
    copyright.classList.add("footer-copyright");
    copyright.textContent =
        `© ${new Date().getFullYear()} VEE'S Kitchen for Chips and Fries. All rights reserved.`;

    // Add sections to the footer
    footer.append(brand, navigation, contact, copyright);

    document.body.appendChild(footer);
}

