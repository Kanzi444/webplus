<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col justify-between bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950 overflow-hidden">
    
    <!-- KONTEN UTAMA KONTAK DENGAN ANIMASI HALUS -->
    <main class="max-w-7xl mx-auto px-4 py-8 sm:py-12 w-full flex-grow space-y-10 animate-smooth-fade-in">
      
      <!-- HEADER TITLE -->
      <div class="text-center max-w-3xl mx-auto space-y-3 animate-slide-down">
        <h2 class="text-3xl sm:text-5xl font-serif font-black text-emerald-950 tracking-tight uppercase drop-shadow-sm">
          KONTAK <span class="text-amber-500">— KAMI —</span>
        </h2>
        <div class="inline-block bg-white/90 border border-amber-500/50 px-6 py-2 rounded-full shadow-lg backdrop-blur-sm">
          <p class="text-xs sm:text-sm font-bold text-emerald-950 uppercase tracking-widest">
            PT PINUS LANCAR USAHA SEMESTA
          </p>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed">
          “Hubungi kami untuk informasi lebih lanjut mengenai kerja sama, layanan terpadu, atau konsultasi bisnis bersama tim profesional kami.”
        </p>
      </div>

      <!-- GRID KONTAK & PETA LOKASI -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <!-- INFORMASI KONTAK (1 Kolom) -->
        <div class="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 flex flex-col justify-between animate-fade-in-left">
          <div class="space-y-6">
            <h3 class="text-lg font-black text-emerald-950 uppercase tracking-wide border-b border-slate-200 pb-3 flex items-center gap-2">
              <span class="text-amber-500">📍</span> Kantor Pusat
            </h3>

            <!-- Alamat -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-950 text-amber-400 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                🏢
              </div>
              <div class="space-y-1">
                <h4 class="text-xs font-bold text-emerald-950 uppercase tracking-wider">Alamat</h4>
                <p class="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Jl. Arjuna No. 85, RT 007/RW 002, Arjuna, Kec. Cicendo, Kota Bandung, Jawa Barat 40172
                </p>
              </div>
            </div>

            <!-- Telepon / WhatsApp Kantor (022 5239 0070) -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-950 text-amber-400 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                📞
              </div>
              <div class="space-y-2 w-full">
                <h4 class="text-xs font-bold text-emerald-950 uppercase tracking-wider">Telepon Kantor</h4>
                
                <a 
                  href="https://wa.me/622252390070?text=Halo%20PT%20Pinus%20Lancar%20Usaha%20Semesta,%20saya%20ingin%20berkonsultasi." 
                  target="_blank"
                  class="text-xs sm:text-sm font-semibold text-emerald-900 hover:text-amber-600 transition-colors flex items-center gap-1"
                >
                  <span>022 5239 0070</span>
                  <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Chat WA ➔</span>
                </a>

                <!-- QR Code Nomor 1 -->
                <div class="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div class="w-24 h-24 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm flex-shrink-0">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/622252390070?text=Halo%20PT%20Pinus%20Lancar%20Usaha%20Semesta" 
                      alt="QR Code Telepon Kantor" 
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed space-y-1">
                    <p class="font-bold text-emerald-950 text-xs">Scan Barcode Kantor</p>
                    <p>Scan untuk terhubung ke nomor 022 5239 0070.</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Tambahan Nomor Baru (+62 817 0055 585) & Barcode-nya -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-950 text-amber-400 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                📱
              </div>
              <div class="space-y-2 w-full">
                <h4 class="text-xs font-bold text-emerald-950 uppercase tracking-wider">WhatsApp Alternatif / Layanan</h4>
                
                <a 
                  href="https://wa.me/628170055585?text=Halo%20PT%20Pinus%20Lancar%20Usaha%20Semesta,%20saya%20ingin%20berkonsultasi." 
                  target="_blank"
                  class="text-xs sm:text-sm font-semibold text-emerald-900 hover:text-amber-600 transition-colors flex items-center gap-1"
                >
                  <span>+62 817-0055-585</span>
                  <span class="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">Chat WA ➔</span>
                </a>

                <!-- QR Code Nomor Baru -->
                <div class="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4 hover:shadow-md transition-shadow">
                  <div class="w-24 h-24 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm flex-shrink-0">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://wa.me/628170055585?text=Halo%20PT%20Pinus%20Lancar%20Usaha%20Semesta" 
                      alt="QR Code WhatsApp Alternatif" 
                      class="w-full h-full object-contain"
                    />
                  </div>
                  <div class="text-[11px] text-slate-600 leading-relaxed space-y-1">
                    <p class="font-bold text-emerald-950 text-xs">Scan Barcode Alternatif</p>
                    <p>Scan untuk terhubung ke nomor +62 817 0055 585.</p>
                  </div>
                </div>

              </div>
            </div>

            <!-- Email (pinussemesta@pajajarancorp.id) -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-950 text-amber-400 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                ✉️
              </div>
              <div class="space-y-1">
                <h4 class="text-xs font-bold text-emerald-950 uppercase tracking-wider">Email Resmi</h4>
                <p class="text-xs sm:text-sm text-slate-600 font-semibold text-emerald-900">
                  pinussemesta@pajajarancorp.id
                </p>
              </div>
            </div>

            <!-- Jam Operasional -->
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-emerald-950 text-amber-400 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                ⏰
              </div>
              <div class="space-y-1">
                <h4 class="text-xs font-bold text-emerald-950 uppercase tracking-wider">Jam Kerja</h4>
                <p class="text-xs sm:text-sm text-slate-600">
                  Senin – Jumat: 08.00 - 17.00 WIB<br>
                  Sabtu – Minggu: Libur
                </p>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 text-center">
            <span class="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/50 block shadow-sm">
              Siap Melayani Mitra & Pelanggan
            </span>
          </div>
        </div>

        <!-- PETA LOKASI INTERAKTIF (2 Kolom) -->
        <div class="lg:col-span-2 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6 animate-fade-in-right">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-black text-emerald-950 uppercase tracking-wide flex items-center gap-2">
              <span class="text-amber-500">🗺️</span> Peta Lokasi Kantor
            </h3>
            <span class="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Bandung, Jawa Barat
            </span>
          </div>

          <!-- Bagian Tampilan Visual Pengganti Iframe -->
          <div class="w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-900 p-8 flex flex-col items-center justify-center text-center text-white relative shadow-inner border border-amber-500/30 space-y-4">
            
            <div class="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -left-10 -top-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <div class="w-16 h-16 rounded-2xl bg-amber-500 text-emerald-950 flex items-center justify-center text-3xl shadow-lg animate-bounce">
              📍
            </div>

            <div class="space-y-2 max-w-md z-10">
              <h4 class="font-serif font-bold text-lg sm:text-xl text-amber-400">PT Pinus Lancar Usaha Semesta</h4>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Jl. Arjuna No. 85, RT 007/RW 002, Arjuna, Kec. Cicendo, Kota Bandung, Jawa Barat 40172
              </p>
            </div>

            <div class="pt-2 z-10">
              <a 
                href="https://maps.google.com/?q=Jl.+Arjuna+No.85,+Arjuna,+Kec.+Cicendo,+Kota+Bandung,+Jawa+Barat+40172" 
                target="_blank" 
                class="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-950 bg-amber-400 hover:bg-amber-500 transition-all px-6 py-3 rounded-xl shadow-xl uppercase tracking-wider transform hover:scale-105"
              >
                <span>Buka Navigasi di Google Maps</span>
                <span>➔</span>
              </a>
            </div>
          </div>
          
          <div class="text-center text-xs text-slate-500 font-medium">
            Klik tombol di atas untuk membuka petunjuk arah lengkap menuju kantor pusat kami secara langsung via aplikasi Google Maps.
          </div>
        </div>

      </div>

    </main>

    <!-- FOOTER / MOTTO DENGAN ANIMASI FADE UP -->
    <footer class="bg-emerald-950 border-t border-amber-500/30 py-4 text-center mt-auto animate-fade-in-up">
      <p class="text-xs font-bold text-amber-400 tracking-widest uppercase">
        MITRA USAHA TERPERCAYA, TAAT HUKUM, DAN PROFESIONAL
      </p>
      <p class="text-[10px] text-slate-300 mt-1">
        &copy; 2026 PT PINUS LANCAR USAHA SEMESTA. All rights reserved.
      </p>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'KontakView'
}
</script>

<style>
/* Konfigurasi Durasi & Kurva Bezier untuk Animasi yang Sangat Smooth */
@keyframes smoothFadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInCardLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInCardRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUpFooter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Menerapkan kelas animasi dengan durasi dan jeda yang lembut */
.animate-smooth-fade-in {
  animation: smoothFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-down {
  animation: slideDown 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in-left {
  animation: fadeInCardLeft 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0; /* Mencegah kedipan sebelum animasi dimulai */
}

.animate-fade-in-right {
  animation: fadeInCardRight 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fadeInUpFooter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}
</style>