<template>
  <section class="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-65px)] flex flex-col justify-center">
    <div class="max-w-4xl mx-auto text-center space-y-6">
      
      <div class="inline-block text-xs font-bold text-amber-400 tracking-widest uppercase bg-amber-500/10 px-3 py-1 rounded border border-amber-500/30">
        Tentang Perusahaan
      </div>
      
      <h2 class="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
        PT PINUS LANCAR USAHA SEMESTA
      </h2>
      
      <p class="text-emerald-100 leading-relaxed text-sm sm:text-base text-justify sm:text-center">
        <strong>PT Pinus Lancar Usaha Semesta</strong> merupakan perusahaan nasional berbadan hukum resmi yang bergerak di bidang <strong>Distribusi, Perdagangan Umum, Konstruksi, Pergudangan,</strong> serta <strong>Layanan Kebandaraan</strong>.
      </p>

      <p class="text-emerald-200/80 leading-relaxed text-xs sm:text-sm text-justify sm:text-center">
        Berlokasi strategis di Kota Bandung, kami berkomitmen untuk menjadi mitra bisnis tepercaya dengan menghadirkan standar operasional tinggi, efisiensi rantai pasok, integritas legalitas yang lengkap, serta solusi layanan yang berorientasi pada kepuasan mitra kerja dan klien di seluruh wilayah Indonesia.
      </p>

      <!-- Informasi Alamat & Telepon -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-emerald-800/60 text-left">
        <div class="bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/40 flex items-start space-x-3">
          <span class="text-amber-400 text-xl">📍</span>
          <div>
            <h4 class="text-xs font-bold text-amber-300 uppercase tracking-wider">Alamat Operasional</h4>
            <p class="text-xs text-emerald-100 mt-1">Jl. Arjuna No. 85, Kel. Arjuna, Kec. Cicendo, Kota Bandung, Jawa Barat</p>
          </div>
        </div>

        <div class="bg-emerald-900/40 p-4 rounded-xl border border-emerald-700/40 flex items-start space-x-3">
          <span class="text-amber-400 text-xl">📞</span>
          <div>
            <h4 class="text-xs font-bold text-amber-300 uppercase tracking-wider">Kontak Resmi</h4>
            <p class="text-xs text-emerald-100 mt-1">Telepon: 022 5239 0070</p>
          </div>
        </div>
      </div>

      <div class="pt-6">
        <router-link to="/" class="inline-block text-xs font-bold text-amber-300 hover:text-amber-200 uppercase tracking-wider border-b border-amber-400/50 pb-1">
          ← Kembali ke Beranda
        </router-link>
      </div>

    </div>
  </section>
</template>