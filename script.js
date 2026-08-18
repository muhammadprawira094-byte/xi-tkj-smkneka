

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('yt-player', {
    height: '0',
    width: '0',
    videoId: 'dQw4w9WgXcQ',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  document.getElementById('song-title').textContent = 'Player siap! ✅';
}
}

const searchInput = document.getElementById('studentSearch');
const cards = [...document.querySelectorAll('#carousel .card')];
const memberCount = document.getElementById('memberCount');
const noResults = document.getElementById('noResults');

if (searchInput) {
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim().toLowerCase();
    let visible = 0;

    cards.forEach(card => {
      const match = card.dataset.name.includes(query);

      card.style.display = match ? '' : 'none';

      if (match) visible++;
    });

    memberCount.textContent = query
      ? `${visible} ditemukan`
      : `${cards.length} siswa`;

    if (noResults) {
      noResults.style.display = visible === 0 ? 'block' : 'none';
    }
  });
}


const pilihHari = document.getElementById('pilihHari');
const jadwalTable = document.getElementById('jadwaltable');
const namaHari = document.getElementById('namaHari');
const jumlahJP = document.getElementById('jumlahJP');

const jadwal = {
  senin: [
    ['07.10 - 07.50', 'TKJ', '1', 'EB3'],
    ['07.50 - 08.30', 'TKJ', '1', 'EB3'],
    ['08.30 - 09.10', 'TKJ', '1', 'EB3'],
    ['09.10 - 09.50', 'TKJ', '1', 'EB3'],

    ['09.50 - 10.10', 'ISTIRAHAT', '-', '-'],

    ['10.10 - 10.50', 'Matematika', '1', 'IF'],
    ['10.50 - 11.30', 'Matematika', '1', 'IF'],
    ['11.30 - 12.10', 'Matematika', '1', 'IF'],

    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],

    ['12.50 - 13.30', 'TKJ', '1', 'MK'],
    ['13.30 - 14.10', 'TKJ', '1', 'MK'],
    ['14.10 - 14.50', 'TKJ', '1', 'MK']
  ],
  selasa: [
    ['07.10 - 07.50', 'Sejarah', '1', 'RZ2'],
    ['07.50 - 08.30', 'Sejarah', '1', 'RZ2'],
    ['08.30 - 09.10', 'Penjaskes', '1', 'TS'],
    ['09.10 - 09.50', 'Penjaskes', '1', 'TS'],

    ['09.50 - 10.10', 'ISTIRAHAT','-','-'],

    ['10.10 - 10.50', 'Bhs. Indonesia', '1', 'NC'],
    ['10.50 - 11.30', 'Bhs. Indonesia', '1', 'NC'],
    ['11.30 - 12.10', 'Bhs. Indonesia', '1', 'NC'],

    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],

    ['12.50 - 13.30', 'PAI', '1', 'SL'],
    ['13.30 - 14.10', 'PAI', '1', 'SL'],
    ['14.10 - 14.50', 'PAI', '1', 'SL']
  ],
  rabu: [
    ['07.10 - 07.50', 'Bhs. Jawa', '1', 'SA'],
    ['07.50 - 08.30', 'Kreatif, Inovatif & Kwu', '1', 'DW3'],
    ['08.30 - 09.10', 'Kreatif, Inovatif & Kwu', '1', 'DW3'],
    ['09.10 - 09.50', 'Kreatif, Inovatif & Kwu', '1', 'DW3'],

    ['09.50 - 10.10', 'ISTIRAHAT','-','-'],

    ['10.10 - 10.50', 'TKJ', '1', 'MZ2'],
    ['10.50 - 11.30', 'TKJ', '1', 'MZ2'],
    ['11.30 - 12.10', 'TKJ', '1', 'MZ2'],

    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],

    ['12.50 - 13.30', 'TKJ', '1', 'MZ2'],
    ['13.30 - 14.10', 'Pemrograman', '1', 'RD3'],
    ['14.10 - 14.50', 'Pemrograman', '1', 'RD3']
  ],
  kamis: [
    ['07.10 - 07.50', 'TKJ', '1', 'MK'],
    ['07.50 - 08.30', 'TKJ', '1', 'MK'],
    ['08.30 - 09.10', 'TKJ', '1', 'MK'],
    ['09.10 - 09.50', 'TKJ', '1', 'MK'],

    ['09.50 - 10.10', 'ISTIRAHAT','-','-'],

    ['10.10 - 10.50', 'TKJ', '1', 'MK'],
    ['10.50 - 11.30', 'Bhs. Inggris', '1', 'HH'],
    ['11.30 - 12.10', 'Bhs. Inggris', '1', 'HH'],

    ['12.10 - 12.50', 'ISTIRAHAT', '-', '-'],

    ['12.50 - 13.30', 'TKJ', '1', 'EB3'],
    ['13.30 - 14.10', 'TKJ', '1', 'EB3'],
    ['14.10 - 14.50', 'TKJ', '1', 'EB3']
  ],
  jumat: [
    ['07.10 - 07.40', 'Kreatif, Inovatif & Kwu', '1', 'DW3'],
    ['07.40 - 08.10', 'Kreatif, Inovatif & Kwu', '1', 'DW3'],
    ['08.10 - 08.40', 'Bhs. Inggris', '1', 'HH'],
    ['08.40 - 09.10', 'Bhs. Inggris', '1', 'HH'],

    ['09.10 - 09.30', 'ISTIRAHAT', '-', '-'],

    ['09.30 - 10.00', 'BK', '1', 'SN1'],
    ['10.00 - 10.30', 'Pendidikan Pancasila', '1', 'RQ3'],
    ['10.30 - 11.00', 'Pendidikan Pancasila', '1', 'RQ3']
  ]
};


function tampilkanJadwal(hari) {

  const data = jadwal[hari] || [];
  namaHari.textContent =
  hari.charAt(0).toUpperCase() + hari.slice(1);

const totalJP = data.reduce((total, item) => {
  const jp = Number(item[2]);
  return total + (isNaN(jp) ? 0 : jp);
}, 0);

jumlahJP.textContent = `${totalJP} JP`;

  if (data.length === 0) {
    jadwalTable.innerHTML = `
      <div class="jadwal-kosong">
        Jadwal ${hari} belum diisi.
      </div>
    `;
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
  const namaHari = [
    'minggu',
    'senin',
    'selasa',
    'rabu',
    'kamis',
    'jumat',
    'sabtu'
  ]
  const hari = namaHari[hariSekarang];

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
