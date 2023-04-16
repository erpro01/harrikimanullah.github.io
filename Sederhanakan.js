document.getElementById("isi-pragraf").innerHTML = "Founded in 2012, we specialized in real estate construction. " + 
"As company grows, we extent our business fields to mechanical, electrical, telecomunication, plumbing, " +
"& HVAC services for commercial and industrial buildings. We adopted a unique approach toward our clients, " + 
"catering their specific needs and delivering upon their expectation. In relatively short span of time. We have \
completed many projects, especially in pharmaceutical industry and we continue to work on even more upcoming projects \
that vary in complexity, size and value"; 

document.getElementById("isi-visimisi").innerHTML = "To become one of the most reliable MEP contracting company and a \
trustworthy business partner, renowned for excellenge, quality, and performance for maintaining lasting relationship \
with our clients. To ensure the longevity of our company through repeat and referral business, achieved by satisfaction \
in all areas, including timeliness, attention to detail and service-minded attitudes.";

document.getElementById("catatan").innerHTML = "We have qualified, fully trained and highly dedicated team with hands on experience to ensure the best result for our clients";


document.getElementById("qpolicy").innerHTML = "We are commited to meet clients requirments through continual improvement of their \
Quality Management System. We shall sustain organizational excellence through visionary leadership and innovative efforts.";

document.getElementById("qassurance").innerHTML = "We will comply to clients standards, codes of practice, specifications, regulations, and contractual obligations. We will maintain high level professionalism by providing \
adequate resources and continual improvement in the method of working";

document.getElementById("isi-organizational").innerHTML = "We continously enhance the effectiveness and efficiency of \
our organization and staffs for performing works to meet client's satisfaction";

document.getElementById("isi-mechanical").innerHTML = "We are ready to carry all diversified works including HVAC, Plumbing, Drainage, Fire Protection with the top quality, \
efficiency, productivity, and to the satisfaction of our clients. Design and Build all works related to mechanical services.";

document.getElementById("isi-electrical").innerHTML = "We are ready to carry all types of electrical from power distribution to low voltage system in accordance \
with the National Standards to the top quality, efficiency, productivity and to the satisfaction of our clients.";

document.getElementById("isi-our-clients").innerHTML = "We have completed many projects in pharmaceuticals industry, food and beverages industry, office buildings, hotel, and apartments";

function fungsiTombol() {
    document.getElementById("notifikasi").style.display = "block";
}

function fungsiTombol2() {
    document.getElementById("notifikasi").style.display = "none";
}


/*
-------------- Fungsi Tombol Show More ----------- 
------ Fungsi Tombol Show More pada Pharmaceutical & Others 
*/ 

function tampilkan() {
    document.getElementById("client-tampilkan").style.display = "block";
    document.getElementById("ganti-tombol").style.display = "none";
    document.getElementById("tombol-baru").style.display = "block"
}

function sembunyikan() {
    document.getElementById("client-tampilkan").style.display = "none";
    document.getElementById("ganti-tombol").style.display = "block";
    document.getElementById("tombol-baru").style.display = "none";
}

/* --------- Fungsi Tombol Show More pada Building & Hotel -------- */

function tampilkan2() {
    document.getElementById("client-tampilkan2").style.display = "block";
    document.getElementById("tombol-baru2").style.display = "block";
    document.getElementById("ganti-tombol2").style.display = "none";
}

function sembunyikan2() {
    document.getElementById("client-tampilkan2").style.display = "none";
    document.getElementById("tombol-baru2").style.display = "none";
    document.getElementById("ganti-tombol2").style.display = "block";
}

/* ------------------- Isi Footer --------------------- */
document.getElementById("footer-bawah").innerHTML = "Copyright &copy 2022 PT Pacific Electrical Enggineering. All Rights Reserved"