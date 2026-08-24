<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col justify-between bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950">
    
    <!-- KONTEN UTAMA KONTAK -->
    <main class="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full flex-grow">
      
      <!-- HEADER TITLE -->
      <div class="text-center mb-8 space-y-3">
        <h1 class="text-3xl sm:text-5xl font-black tracking-wider text-emerald-950 uppercase drop-shadow-sm">
          — KONTAK KAMI —
        </h1>
        <div class="inline-block bg-white/90 border border-amber-500/50 px-6 py-2 rounded-full shadow-lg backdrop-blur-sm">
          <p class="text-sm sm:text-base font-bold text-emerald-950 tracking-widest uppercase">
            PT PINUS LANCAR USAHA SEMESTA
          </p>
        </div>
        <p class="text-slate-600 text-xs sm:text-sm mt-2 max-w-md mx-auto font-medium">
          Kami siap melayani dan bekerja sama untuk mendukung kebutuhan bisnis Anda.
        </p>
      </div>

      <!-- KARTU INFORMASI UTAMA -->
      <div class="bg-white/90 backdrop-blur-md border-2 border-amber-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl mb-10">
        <div class="space-y-6">
          
          <!-- ALAMAT -->
          <div class="flex items-start gap-4 border-b border-slate-200 pb-4">
            <div class="w-12 h-12 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              📍
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-emerald-950">Alamat :</h3>
              <p class="text-sm sm:text-base text-slate-700 mt-1 leading-relaxed font-medium">
                Jl. Arjuna No. 85 Kel. Arjuna, Kec. Cicendo, Kota Bandung, Jawa Barat
              </p>
            </div>
          </div>

          <!-- TELEPON -->
          <div class="flex items-center gap-4 border-b border-slate-200 pb-4">
            <div class="w-12 h-12 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              📞
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-emerald-950">Telepon :</h3>
              <p class="text-sm sm:text-base text-slate-700 font-semibold mt-1">
                022 5239 0070
              </p>
            </div>
          </div>

          <!-- EMAIL -->
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-md">
              ✉️
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-emerald-950">Email :</h3>
              <p class="text-sm sm:text-base text-slate-700 font-semibold mt-1">
                pinussemesta@pajajarancorp.id
              </p>
            </div>
          </div>

        </div>
      </div>

      <!-- BADGE NILAI KOMITMEN (BAGIAN BAWAH) -->
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
        <div class="bg-emerald-950/90 border border-amber-500/40 p-3 rounded-xl text-white shadow-md">
          <div class="text-xl mb-1">🛡️</div>
          <div class="text-xs font-bold text-amber-400">AMAN</div>
        </div>
        <div class="bg-emerald-950/90 border border-amber-500/40 p-3 rounded-xl text-white shadow-md">
          <div class="text-xl mb-1">🤝</div>
          <div class="text-xs font-bold text-amber-400">TERPERCAYA</div>
        </div>
        <div class="bg-emerald-950/90 border border-amber-500/40 p-3 rounded-xl text-white shadow-md">
          <div class="text-xl mb-1">📈</div>
          <div class="text-xs font-bold text-amber-400">PROFESIONAL</div>
        </div>
        <div class="bg-emerald-950/90 border border-amber-500/40 p-3 rounded-xl text-white shadow-md">
          <div class="text-xl mb-1">⚙️</div>
          <div class="text-xs font-bold text-amber-400">EFISIEN</div>
        </div>
        <div class="bg-emerald-950/90 border border-amber-500/40 p-3 rounded-xl text-white shadow-md col-span-2 sm:col-span-1">
          <div class="text-xl mb-1">👥</div>
          <div class="text-xs font-bold text-amber-400">BERKUALITAS</div>
        </div>
      </div>

    </main>

    <!-- FOOTER / MOTTO -->
    <footer class="bg-emerald-950 border-t border-amber-500/30 py-4 text-center mt-auto">
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