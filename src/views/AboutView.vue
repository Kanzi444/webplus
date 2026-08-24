<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950 py-10 px-4 sm:px-6">
    <div class="max-w-7xl mx-auto w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-12 space-y-10">
      
      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-center border-b pb-4 border-slate-100 gap-4">
        <div class="flex items-center space-x-3">
          <img src="/logo-soplus.jpg" alt="SO PLUS" class="h-10 w-auto object-contain" />
          <span class="text-xl font-black text-emerald-950 tracking-wider">PT PINUS LANCAR USAHA SEMESTA</span>
        </div>
        <span class="text-xs font-bold text-emerald-800 tracking-widest uppercase border-b-2 border-amber-500 pb-1">COMPANY PROFILE 2026</span>
      </div>

      <!-- Konten Utama -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-4 space-y-4">
          <div class="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-6 shadow-xl border-2 border-amber-500/30 text-center space-y-4">
            <h3 class="text-sm font-bold text-amber-400 uppercase tracking-wider">SO PLUS</h3>
            <p class="text-xs text-slate-200">DISTRIBUSI - TRADING - CONSTRUCTION</p>
            <p class="text-xs italic text-amber-300 font-serif">“Delivering Excellence, Building the Future”</p>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-6">
          <h2 class="text-3xl sm:text-4xl font-serif font-black text-emerald-950 tracking-wide uppercase">TENTANG PERUSAHAAN</h2>
          
          <div class="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base text-justify">
            <div class="p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500 shadow-sm">
              <strong>PT Pinus Lancar Usaha Semesta</strong> merupakan perusahaan nasional yang bergerak di bidang Distribusi, Perdagangan Umum, dan Konstruksi dengan komitmen menghadirkan solusi bisnis yang profesional, terpercaya, dan berkelanjutan.
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border-l-4 border-emerald-800 shadow-sm">
              Didukung oleh sumber daya manusia yang kompeten, sistem kerja yang efektif, serta jaringan kemitraan yang luas, perusahaan terus berkembang menjadi mitra strategis bagi pemerintah, BUMN, swasta, maupun berbagai sektor industri di Indonesia.
            </div>
            <div class="p-4 bg-slate-50 rounded-xl border-l-4 border-amber-500 shadow-sm">
              Kami percaya bahwa keberhasilan perusahaan dibangun melalui integritas, kualitas layanan, inovasi, serta kepuasan pelanggan sebagai prioritas utama.
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>