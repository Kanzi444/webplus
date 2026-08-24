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

      <!-- Visi Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div class="lg:col-span-4">
          <div class="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-8 shadow-xl border-2 border-amber-500/30 text-center space-y-4">
            <div class="text-4xl">✈️ 🚛 🏗️ 🚢</div>
            <div class="bg-emerald-800/80 p-3 rounded-xl border border-emerald-600/50">
              <p class="text-xs font-bold text-amber-400 uppercase">Infrastruktur Strategis</p>
              <p class="text-[10px] text-emerald-100 mt-1">Pengiriman & Logistik Terpadu</p>
            </div>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-4">
          <h2 class="text-3xl sm:text-4xl font-serif font-black text-emerald-950 tracking-wide uppercase">VISI</h2>
          <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-amber-500 text-slate-700 leading-relaxed text-sm sm:text-base text-justify shadow-sm">
            Menjadi perusahaan nasional yang <strong class="text-amber-600">unggul</strong>, <strong class="text-amber-600">terpercaya</strong>, dan <strong class="text-amber-600">berdaya saing tinggi</strong> dalam bidang distribusi, perdagangan, dan konstruksi yang mampu memberikan nilai tambah bagi seluruh pemangku kepentingan.
          </div>
        </div>
      </div>

      <div class="w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <!-- Misi Section -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div class="lg:col-span-4">
          <div class="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border-2 border-emerald-800 text-center space-y-4">
            <div class="w-16 h-16 mx-auto rounded-full bg-emerald-900/80 border-2 border-amber-400 flex items-center justify-center text-2xl shadow-lg">🏔️</div>
            <h4 class="text-sm font-bold text-amber-400 uppercase tracking-wider">Komitmen Utama</h4>
          </div>
        </div>

        <div class="lg:col-span-8 space-y-4">
          <h2 class="text-3xl sm:text-4xl font-serif font-black text-emerald-950 tracking-wide uppercase">MISI</h2>
          <div class="space-y-3">
            <div v-for="(misi, index) in misiList" :key="index" class="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl border border-slate-100 shadow-sm">
              <div class="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">{{ misi.icon }}</div>
              <p class="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify"><strong>{{ misi.boldText }}</strong> {{ misi.text }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'VisiMisiView',
  data() {
    return {
      misiList: [
        { icon: '📦', boldText: 'Memberikan produk dan layanan berkualitas tinggi', text: 'yang memenuhi kebutuhan pelanggan secara tepat dan berkelanjutan.' },
        { icon: '🤝', boldText: 'Membangun hubungan jangka panjang', text: 'yang saling menguntungkan dengan pelanggan, mitra kerja, dan seluruh pemangku kepentingan.' },
        { icon: '💡', boldText: 'Mengembangkan inovasi dan teknologi', text: 'untuk meningkatkan nilai tambah serta daya saing perusahaan.' },
        { icon: '⚖️', boldText: 'Menjalankan bisnis dengan tata kelola', text: 'perusahaan yang baik, berintegritas, profesional, dan berorientasi pada keberlanjutan.' }
      ]
    }
  }
}
</script>