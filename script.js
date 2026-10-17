
const dataSiswa = [
  { id: "01", name: "Ahmad Azka Aulia Fawwaz", search: "ahmad azka aulia fawwaz", avatar: '<div class="avatar">FA</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" 
  },
  { id: "02", name: "Al Amin Mukromin", search: "al amin mukromin", avatar: '<div class="avatar"><img src="foto4.jpg" alt="amen"></div>', role: "Anggota", quote: "-", hobby: "-", about: "-" 
  },
  { id: "03", name: "Alfano Axila Fabio Septriaka", search: "alfano axila fabio septriaka", avatar: '<div class="avatar"><img src="alpan.jpg" alt="alpan"></div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "04", name: "Alvino Andika Pratama", search: "alvino andika pratama", avatar: '<div class="avatar">AP</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "05", name: "Ariel Aditya Umiriansyah", search: "ariel aditya umiriansyah", avatar: '<div class="avatar">AU</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "06", name: "Bilal Raffi Irsyatul Firdaus Ibad", search: "bilal raffi irsyatul firdaus ibad", avatar: '<div class="avatar">BI</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "07", name: "Cici Yunita Sari", search: "cici yunita sari", avatar: '<div class="avatar">CS</div>', role: "Sekretaris", quote: "-", hobby: "-", about: "-" },
  { id: "08", name: "Eka Frananda Adhitya Ramadhani", search: "eka frananda adhitya ramadhani", avatar: '<div class="avatar">ER</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "09", name: "Fakhrie Zahfran Khairy", search: "fakhrie zahfran khairy", avatar: '<div class="avatar">FK</div>', role: "Wakil Ketua", quote: "-", hobby: "-", about: "-" },
  { id: "10", name: "Galang Raya Anugrah", search: "galang raya anugrah", avatar: '<div class="avatar">GA</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "11", name: "Iman Nur Rhomim Huda", search: "iman nur rhomim huda", avatar: '<div class="avatar">IH</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "12", name: "Julian Gatan Putrantono", search: "julian gatan putrantono", avatar: '<div class="avatar">JP</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "13", name: "Maulana Rifki Setiawan", search: "maulana rifki setiawan", avatar: '<div class="avatar">MS</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "14", name: "Mochamad Nooh Alfaridzi", search: "mochamad nooh alfaridzi", avatar: '<div class="avatar">MA</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "15", name: "Moh. Ibra Bima Sakti", search: "moh. ibra bima sakti", avatar: '<div class="avatar">MB</div>', role: "Ketua", quote: "-", hobby: "-", about: "-" },
  { id: "16", name: "Mohammad Makhis Ubaidillah", search: "mohammad makhis ubaidillah", avatar: '<div class="avatar"><img src="makis.jpg" alt="makis"></div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "17", name: "Mohammad Priyo Budi Santoso", search: "mohammad priyo budi santoso", avatar: '<div class="avatar">MS</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "18", name: "Muhammad Alif Fadhil Putra", search: "muhammad alif fadhil putra", avatar: '<div class="avatar">MP</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "19", name: "Muhammad Dafi Ibrahim", search: "muhammad dafi ibrahim", avatar: '<div class="avatar"><img src="sipon.jpg" alt="sipon"></div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "20", name: "Muhammad Fakhrul Ramadhani", search: "muhammad fakhrul ramadhani", avatar: '<div class="avatar">MR</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "21", name: "Muhammad Jalaluddin Prawira", search: "muhammad jalaluddin prawira", avatar: '<div class="avatar">MP</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "22", name: "Muhammad Rhafi Ramadhan", search: "muhammad rhafi ramadhan", avatar: '<div class="avatar">MR</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "23", name: "Mustika Cantik Amelia", search: "mustika cantik amelia", avatar: '<div class="avatar">MA</div>', role: "Sekretaris", quote: "-", hobby: "-", about: "-" },
  { id: "24", name: "Nizzar Mahendra", search: "nizzar mahendra", avatar: '<div class="avatar">NM</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "25", name: "Noval Alsano Raditya", search: "noval alsano raditya", avatar: '<div class="avatar">NR</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "26", name: "Nur Fitriyah Ningsih", search: "nur fitriyah ningsih", avatar: '<div class="avatar">NN</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "27", name: "Raditya Wildan Saputra", search: "raditya wildan saputra", avatar: '<div class="avatar">RS</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "28", name: "Rizky Aditya Putra Pratama", search: "rizky aditya putra pratama", avatar: '<div class="avatar">RP</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "29", name: "Sahrul Zamzamana Fahmi", search: "sahrul zamzamana fahmi", avatar: '<div class="avatar">SF</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "30", name: "Tita Kurnia Sari", search: "tita kurnia sari", avatar: '<div class="avatar">TS</div>', role: "Bendahara", quote: "-", hobby: "-", about: "-" },
  { id: "31", name: "Ulung Dwi Pertiwi", search: "ulung dwi pertiwi", avatar: '<div class="avatar">UP</div>', role: "Bendahara", quote: "-", hobby: "-", about: "-" },
  { id: "32", name: "Wildan Ahmad Robbany", search: "wildan ahmad robbany", avatar: '<div class="avatar">WR</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" },
  { id: "33", name: "Zahrotus Shita", search: "zahrotus shita", avatar: '<div class="avatar">ZS</div>', role: "Anggota", quote: "-", hobby: "-", about: "-" }
];


const carousel = document.getElementById('carousel');
const searchInput = document.getElementById('studentSearch');
const memberCount = document.getElementById('memberCount');
const noResults = document.getElementById('noResults');


function renderCards(data) {
  carousel.innerHTML = data.map(siswa => `
    <div class="card" data-name="${siswa.search}" data-hobby="${siswa.hobby}" data-about="${siswa.about}">
      <span class="student-number">#${siswa.id}</span>
      ${siswa.avatar}
      <span class="badge">${siswa.role}</span>
      <h2>${siswa.name}</h2>
      <blockquote>${siswa.quote}</blockquote>
    </div>
  `).join('');
}


renderCards(dataSiswa);
let renderedCards = [...document.querySelectorAll('#carousel .card')];


if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    renderedCards.forEach(card => {
      const match = card.dataset.name.includes(query);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    memberCount.textContent = query ? `${visible} ditemukan` : `${dataSiswa.length} siswa`;
    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  });
}

const pilihHari = document.getElementById('pilihHari');
const jadwalTable = document.getElementById('jadwaltable');
const namaHariDisplay = document.getElementById('namaHari');
const jumlahJP = document.getElementById('jumlahJP');

const jadwal = {
  senin: [
    ['07.10 - 07.50', 'TKJ', '1', 'EB3'], ['07.50 - 08.30', 'TKJ', '1', 'EB3'], ['08.30 - 09.10', 'TKJ', '1', 'EB3'], ['09.10 - 09.50', 'TKJ', '1', 'EB3'],
    ['09.50 - 10.10', 'ISTIRAHAT', '-', '-'],
    ['10.10 - 10.50', 'Matematika', '1', 'IF'], ['10.50 - 11.30', 'Matematika', '1', 'IF'], ['11.30 - 12.10', 'Matematika', '1', 'IF'],
    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],
    ['12.50 - 13.30', 'TKJ', '1', 'MK'], ['13.30 - 14.10', 'TKJ', '1', 'MK'], ['14.10 - 14.50', 'TKJ', '1', 'MK']
  ],
  selasa: [
    ['07.10 - 07.50', 'Sejarah', '1', 'RZ2'], ['07.50 - 08.30', 'Sejarah', '1', 'RZ2'], ['08.30 - 09.10', 'Penjaskes', '1', 'TS'], ['09.10 - 09.50', 'Penjaskes', '1', 'TS'],
    ['09.50 - 10.10', 'ISTIRAHAT','-','-'],
    ['10.10 - 10.50', 'Bhs. Indonesia', '1', 'NC'], ['10.50 - 11.30', 'Bhs. Indonesia', '1', 'NC'], ['11.30 - 12.10', 'Bhs. Indonesia', '1', 'NC'],
    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],
    ['12.50 - 13.30', 'PAI', '1', 'SL'], ['13.30 - 14.10', 'PAI', '1', 'SL'], ['14.10 - 14.50', 'PAI', '1', 'SL']
  ],
  rabu: [
    ['07.10 - 07.50', 'Bhs. Jawa', '1', 'SA'], ['07.50 - 08.30', 'Kreatif, Inovatif & Kwu', '1', 'DW3'], ['08.30 - 09.10', 'Kreatif, Inovatif & Kwu', '1', 'DW3'], ['09.10 - 09.50', 'Kreatif, Inovatif & Kwu', '1', 'DW3'],
    ['09.50 - 10.10', 'ISTIRAHAT','-','-'],
    ['10.10 - 10.50', 'TKJ', '1', 'MZ2'], ['10.50 - 11.30', 'TKJ', '1', 'MZ2'], ['11.30 - 12.10', 'TKJ', '1', 'MZ2'],
    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],
    ['12.50 - 13.30', 'TKJ', '1', 'MZ2'], ['13.30 - 14.10', 'Pemrograman', '1', 'RD3'], ['14.10 - 14.50', 'Pemrograman', '1', 'RD3']
  ],
  kamis: [
    ['07.10 - 07.50', 'TKJ', '1', 'MK'], ['07.50 - 08.30', 'TKJ', '1', 'MK'], ['08.30 - 09.10', 'TKJ', '1', 'MK'], ['09.10 - 09.50', 'TKJ', '1', 'MK'],
    ['09.50 - 10.10', 'ISTIRAHAT','-','-'],
    ['10.10 - 10.50', 'TKJ', '1', 'MK'], ['10.50 - 11.30', 'Bhs. Inggris', '1', 'HH'], ['11.30 - 12.10', 'Bhs. Inggris', '1', 'HH'],
    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],
    ['12.50 - 13.30', 'TKJ', '1', 'EB3'], ['13.30 - 14.10', 'TKJ', '1', 'EB3'], ['14.10 - 14.50', 'TKJ', '1', 'EB3']
  ],
  jumat: [
    ['07.10 - 07.40', 'Kreatif, Inovatif & Kwu', '1', 'DW3'], ['07.40 - 08.10', 'Kreatif, Inovatif & Kwu', '1', 'DW3'], ['08.10 - 08.40', 'Bhs. Inggris', '1', 'HH'], ['08.40 - 09.10', 'Bhs. Inggris', '1', 'HH'],
    ['09.10 - 09.30', 'ISTIRAHAT', '-', '-'],
    ['09.30 - 10.00', 'BK', '1', 'SN1'], ['10.00 - 10.30', 'Pendidikan Pancasila', '1', 'RQ3'], ['10.30 - 11.00', 'Pendidikan Pancasila', '1', 'RQ3']
  ]
};

function tampilkanJadwal(hari) {
  const data = jadwal[hari] || [];
  namaHariDisplay.textContent = hari.charAt(0).toUpperCase() + hari.slice(1);

  const totalJP = data.reduce((total, item) => {
    const jp = Number(item[2]);
    return total + (isNaN(jp) ? 0 : jp);
  }, 0);

  jumlahJP.textContent = `${totalJP} JP`;

  if (data.length === 0) {
    jadwalTable.innerHTML = `<div class="jadwal-kosong">Jadwal ${hari} belum diisi.</div>`;
    return;
  }

  jadwalTable.innerHTML = `
    <div class="jadwal-header">
      <span>JAM</span>
      <span>MATA PELAJARAN</span>
      <span>JP</span>
      <span>GURU</span>
    </div>
    ${data.map(item => `
      <div class="jadwal-row ${item[1] === 'ISTIRAHAT' ? 'istirahat' : ''}">
        <span>${item[0]}</span>
        <strong>${item[1]}</strong>
        <span>${item[2]}</span>
        <span>${item[3]}</span>
      </div>
    `).join('')}
  `;
}

if (pilihHari && jadwalTable) {
  const hariSekarang = new Date().getDay();
  const namaHariList = ['minggu', 'senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu'];
  const hari = namaHariList[hariSekarang];

  if (jadwal[hari]) {
    pilihHari.value = hari;
    tampilkanJadwal(hari);
  } else tampilkanJadwal('senin');

  pilihHari.addEventListener('change', () => {
    jadwalTable.classList.add('fade-out');
    setTimeout(() => {
      tampilkanJadwal(pilihHari.value);
      jadwalTable.classList.remove('fade-out');
    }, 200);
  });
}


const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light-theme');
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  const isLight = document.body.classList.contains('light-theme');
  themeToggle.textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});


const overlay = document.getElementById("studentDetailOverlay");
const closeButton = document.getElementById("studentDetailClose");
const detailAvatar = document.getElementById("studentDetailAvatar");
const detailName = document.getElementById("studentDetailName");
const detailRole = document.getElementById("studentDetailRole");
const detailQuote = document.getElementById("studentDetailQuote");
const detailHobby = document.getElementById("studentDetailHobby");
const detailAbout = document.getElementById("studentDetailAbout");


carousel.addEventListener("click", function (event) {
  const card = event.target.closest(".card");
  if (!card) return;

  detailName.textContent = card.querySelector("h2")?.textContent.trim() || "Nama Siswa";
  detailRole.textContent = card.querySelector(".badge")?.textContent.trim() || "Member";
  detailQuote.textContent = card.querySelector("blockquote")?.textContent.trim() || "-";
  detailHobby.textContent = card.dataset.hobby || "-";
  detailAbout.textContent = card.dataset.about || "-";

  const avatar = card.querySelector(".avatar");
  if (avatar) {
    detailAvatar.innerHTML = avatar.innerHTML;
  }

  overlay.classList.add("show");
  document.body.style.overflow = "hidden";
});

closeButton.addEventListener("click", () => {
  overlay.classList.remove("show");
  document.body.style.overflow = "";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  }
});
