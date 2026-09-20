import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "../public/resume.pdf");

const PRIMARY = "#0066cc";
const ACCENT = "#0088cc";
const DARK = "#1a1a2e";
const GRAY = "#444444";
const LIGHT = "#666666";

const doc = new PDFDocument({
  margin: 0,
  size: "A4",
  info: {
    Title: "Luis Navarro - Resume",
    Author: "Luis Navarro",
    Subject: "Full Stack Web Developer Resume",
  },
});

doc.pipe(fs.createWriteStream(outputPath));

// Header background
doc.rect(0, 0, 595.28, 110).fill("#0c1829");

doc
  .fillColor("#ffffff")
  .font("Helvetica-Bold")
  .fontSize(26)
  .text("Luis Navarro", 48, 32);

doc
  .fillColor(ACCENT)
  .font("Helvetica")
  .fontSize(11)
  .text("Full Stack Web Developer & Web Security Enthusiast", 48, 64);

doc
  .fillColor("#b0c4de")
  .fontSize(9)
  .text("cybersakki@gmail.com", 48, 84)
  .text("+92 347 0019309", 200, 84)
  .text("github.com/luisnavarro76", 320, 84);

doc
  .fillColor("#b0c4de")
  .fontSize(9)
  .text("linkedin.com/in/luis-navarro-979607434", 48, 96);

function drawSection(title, y) {
  doc
    .fillColor(PRIMARY)
    .font("Helvetica-Bold")
    .fontSize(10)
    .text(title.toUpperCase(), 48, y);

  doc
    .moveTo(48, y + 13)
    .lineTo(547, y + 13)
    .strokeColor("#dde4ee")
    .lineWidth(0.75)
    .stroke();

  return y + 22;
}

function bodyText(text, y, width = 499) {
  doc.fillColor(GRAY).font("Helvetica").fontSize(9.5).text(text, 48, y, {
    width,
    lineGap: 3,
  });
  return doc.y + 10;
}

function bullet(text, y, width = 480) {
  doc.fillColor(PRIMARY).font("Helvetica").fontSize(9).text("•", 52, y);
  doc.fillColor(GRAY).font("Helvetica").fontSize(9.5).text(text, 64, y, {
    width,
    lineGap: 2,
  });
  return doc.y + 4;
}

let y = 125;

y = drawSection("Professional Summary", y);
y = bodyText(
  "BS Computer Science graduate and Full Stack Web Developer with a passion for building scalable web applications, modern business websites, and secure digital experiences. I combine frontend excellence, backend development, and security-focused thinking to deliver fast, reliable, and SEO-optimized solutions for clients worldwide.",
  y
);

y = drawSection("Technical Skills", y);

const skillGroups = [
  {
    label: "Frontend",
    items: "Next.js, React.js, JavaScript, TypeScript, Tailwind CSS, Responsive Design",
  },
  {
    label: "Backend & Tools",
    items: "REST APIs, Git, GitHub, Web Development, Performance Optimization",
  },
  {
    label: "Security & SEO",
    items: "Kali Linux, Web Penetration Testing, SEO Optimization, Security Auditing",
  },
];

skillGroups.forEach(({ label, items }) => {
  doc.fillColor(DARK).font("Helvetica-Bold").fontSize(9.5).text(label, 48, y);
  doc.fillColor(GRAY).font("Helvetica").fontSize(9).text(items, 130, y, {
    width: 415,
  });
  y = doc.y + 8;
});

y += 4;
y = drawSection("Featured Projects", y);

const featured = [
  {
    name: "Teen Beauty",
    url: "teenbeauty.com.pk",
    desc: "E-commerce platform for a cosmetics brand — modern UI, responsive design, optimized performance.",
  },
  {
    name: "Moonlight Motifs",
    url: "moonlightmotifs.com",
    desc: "Premium fashion brand website with elegant aesthetics and mobile-first UX.",
  },
  {
    name: "Tools Web Pro",
    url: "toolswebpro.com",
    desc: "Utility tools platform with 15+ online tools, built for speed, usability, and SEO.",
  },
  {
    name: "Learnofy",
    url: "github.com/luisnavarro76/learnofy",
    desc: "TypeScript learning platform with structured educational content.",
  },
  {
    name: "Luis Navarro Portfolio",
    url: "github.com/luisnavarro76/luis-navarro-portfolio",
    desc: "Production-ready Next.js portfolio with animations, SEO, and accessibility.",
  },
];

featured.forEach(({ name, url, desc }) => {
  doc.fillColor(DARK).font("Helvetica-Bold").fontSize(9.5).text(name, 48, y);
  doc.fillColor(ACCENT).font("Helvetica").fontSize(8.5).text(url, 48, y, {
    align: "right",
    width: 499,
  });
  y = doc.y + 1;
  y = bullet(desc, y);
  y += 2;
});

y = drawSection("Services", y);

const services = [
  "Custom Website Development — business sites, landing pages, company portals",
  "E-Commerce Development — online stores optimized for conversion and performance",
  "Web Application Development — scalable apps using modern technologies",
  "Website Security Assessment — vulnerability reviews and security best practices",
  "Website Maintenance — ongoing updates, monitoring, and optimization",
];

services.forEach((s) => {
  y = bullet(s, y);
});

y += 2;
y = drawSection("Education", y);

doc.fillColor(DARK).font("Helvetica-Bold").fontSize(9.5).text("BS Computer Science", 48, y);
doc
  .fillColor(LIGHT)
  .font("Helvetica")
  .fontSize(9)
  .text("Computer Science Graduate", 48, y + 13);
y = doc.y + 14;

y = drawSection("Core Strengths", y);

const strengths =
  "Clean Code  •  Fast Loading Websites  •  Mobile-First Development  •  Security Focused  •  SEO Friendly  •  Modern Technologies  •  Reliable Communication  •  Long-Term Support";

doc.fillColor(GRAY).font("Helvetica").fontSize(9).text(strengths, 48, y, {
  width: 499,
  lineGap: 3,
});

// Footer
doc
  .fillColor(LIGHT)
  .font("Helvetica")
  .fontSize(8)
  .text(
    "Portfolio: luisnavarro.dev  •  24+ Projects Delivered",
    48,
    780,
    { align: "center", width: 499 }
  );

doc.end();

console.log(`Resume generated: ${outputPath}`);
