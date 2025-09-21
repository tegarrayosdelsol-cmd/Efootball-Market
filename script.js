// Generate daftar akun di homepage
const akunListContainer = document.getElementById('akun-list');
if (akunListContainer) {
  akunList.forEach(akun => {
    const card = document.createElement('div');
    card.className = 'akun-card';
    card.innerHTML = `
      <img src="${akun.gambar}" alt="${akun.nama}" class="akun-img">
      <h3>${akun.nama}</h3>
      <p>${akun.harga}</p>
      <a href="detail.html?id=${akun.id}" class="button">Lihat Detail</a>
    `;
    akunListContainer.appendChild(card);
  });
}

// Detail akun page
const detailContainer = document.getElementById('akun-detail');
if (detailContainer) {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const akun = akunList.find(a => a.id === id);
  if (akun) {
    detailContainer.innerHTML = `
      <h2>${akun.nama}</h2>
      <img src="${akun.gambar}" alt="${akun.nama}" class="akun-img">
      <p>Harga: ${akun.harga}</p>
      <p>Deskripsi: ${akun.deskripsi}</p>
      <a href="https://facebook.com/" target="_blank" class="button">Hubungi via Facebook</a>
    `;
  } else {
    detailContainer.innerHTML = '<p>Akun tidak ditemukan</p>';
  }
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.querySelectorAll('.akun-img').forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});