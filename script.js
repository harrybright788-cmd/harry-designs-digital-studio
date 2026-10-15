// HARRY GRAPHICS — update this number before publishing.
// Nigeria example: 08012345678 becomes 2348012345678 (remove first 0; no + or spaces).
const WHATSAPP_NUMBER = "2349049548222"; // Harry Graphics WhatsApp number
const services=[
{name:"Basic logo design",price:5000,cat:"brand",icon:"✳",desc:"A memorable starting mark for your business."},
{name:"Logo + mini identity",price:12000,cat:"brand",icon:"◈",desc:"Logo direction with a simple visual system."},
{name:"Business card",price:4000,cat:"print",icon:"▤",desc:"A clean card layout ready for printing."},
{name:"Letterhead design",price:4000,cat:"print",icon:"▧",desc:"Professional stationery for everyday business."},
{name:"Simple flyer",price:3000,cat:"print",icon:"▣",desc:"A clear, eye-catching flyer for your message."},
{name:"Event / church flyer",price:4000,cat:"print",icon:"✦",desc:"Promote your programme, service or celebration."},
{name:"Poster design",price:5000,cat:"print",icon:"▥",desc:"A bold visual for campaigns and announcements."},
{name:"Single social media post",price:2000,cat:"social",icon:"◎",desc:"A polished post sized for your platform."},
{name:"5-post social pack",price:8000,cat:"social",icon:"▦",desc:"Five coordinated, branded posts."},
{name:"10-post social pack",price:15000,cat:"social",icon:"▦",desc:"A larger batch for consistent content."},
{name:"Story / WhatsApp status",price:2000,cat:"social",icon:"◉",desc:"Vertical graphics for stories and status."},
{name:"YouTube thumbnail",price:3000,cat:"social",icon:"▶",desc:"A high-contrast thumbnail built to stand out."},
{name:"E-book cover",price:5000,cat:"business",icon:"▤",desc:"A digital cover for your guide or publication."},
{name:"Invitation card",price:4000,cat:"print",icon:"♡",desc:"A personalised invite for a special event."},
{name:"Menu / price list",price:5000,cat:"business",icon:"≡",desc:"Organised, easy-to-read offerings and prices."},
{name:"Brochure / company profile",price:8000,cat:"business",icon:"▥",desc:"Structured pages to introduce your business."},
{name:"Product label",price:7000,cat:"business",icon:"⬡",desc:"A label concept for your product presentation."},
{name:"Banner / flex layout",price:5000,cat:"print",icon:"▰",desc:"A large-format layout prepared for print."},
{name:"Presentation slides",price:1000,unit:"per slide",cat:"business",icon:"▱",desc:"Clear, consistent slides for your ideas."},
{name:"Website banner / graphics",price:5000,cat:"social",icon:"⌘",desc:"Visual assets for a website or digital launch."},
{name:"T-shirt / merch graphic",price:5000,cat:"brand",icon:"✺",desc:"Artwork for clothing and merchandise."},
{name:"Simple animated post",price:7000,cat:"social",icon:"◌",desc:"A short motion graphic for digital campaigns."},
{name:"Logo animation concept",price:10000,cat:"brand",icon:"✳",desc:"A simple animated treatment for your brand mark."},
{name:"Podcast / album cover",price:5000,cat:"social",icon:"◉",desc:"A strong cover visual for audio content."}
];
const money=n=>"₦"+Number(n).toLocaleString("en-NG");
const grid=document.getElementById("serviceGrid");
function render(filter="all"){grid.innerHTML="";services.filter(s=>filter==="all"||s.cat===filter).forEach((s,i)=>{const el=document.createElement("article");el.className="service";el.innerHTML=`<div class="servtop"><span>SERVICE / ${String(i+1).padStart(2,"0")}</span><span class="servicon">${s.icon}</span></div><h3>${s.name}</h3><p>${s.desc}</p><div class="servbottom"><div class="servprice">${money(s.price)}<small>${s.unit?" / "+s.unit:" / from"}</small></div><a href="#contact" data-service="${s.name}">Order ↗</a></div>`;grid.appendChild(el)})}
render();
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.filter)}));
const select=document.getElementById("clientService");
services.forEach(s=>{const o=document.createElement("option");o.value=s.name;o.textContent=`${s.name} — ${money(s.price)}${s.unit?" per slide":" from"}`;select.appendChild(o)});
document.addEventListener("click",e=>{const a=e.target.closest("[data-service],[data-package],[data-branch]");if(!a)return;if(a.dataset.service)select.value=a.dataset.service;if(a.dataset.package){select.value=a.dataset.package;document.getElementById("details").value=`I'm interested in the ${a.dataset.package} package.`}if(a.dataset.branch)document.getElementById("details").value=`I'm interested in: ${a.dataset.branch}.`});
document.getElementById("projectForm").addEventListener("submit",e=>{e.preventDefault();const error=document.getElementById("formError");if(!/^\d{10,15}$/.test(WHATSAPP_NUMBER)){error.textContent="Check the WhatsApp number in script.js before publishing.";alert(error.textContent);return}const msg=["Hello Harry Graphics! I'd like to discuss a design project.","",`Name: ${document.getElementById("clientName").value}`,`Service: ${select.value}`,`Budget: ${document.getElementById("budget").value}`,`Deadline: ${document.getElementById("deadline").value||"Flexible / to discuss"}`,`Project details: ${document.getElementById("details").value}`,"","Please let me know the next steps. Thank you!"].join("\n");window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");error.textContent=""});
document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"),nav=document.getElementById("nav");menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"×":"☰"});nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.textContent="☰"}));
const obs=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add("visible");obs.unobserve(x.target)}}),{threshold:.1});document.querySelectorAll(".reveal").forEach(el=>obs.observe(el));
