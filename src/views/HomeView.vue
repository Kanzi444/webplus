<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col">
    
    <!-- HERO SECTION DENGAN GRADASI PUTIH KE HIJAU -->
    <div class="w-full min-h-[calc(100vh-69px)] flex flex-col justify-between bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950 text-slate-800">
      <div class="relative z-10 text-center space-y-6 max-w-5xl mx-auto px-6 py-10">
        
        <!-- LOGO UTAMA -->
        <div class="flex justify-center items-center py-4">
          <img src="/logo-soplus.jpg" alt="PT Pinus Lancar Usaha Semesta" class="h-20 sm:h-28 w-auto object-contain drop-shadow-md rounded-xl" />
        </div>

        <p class="italic text-emerald-900 font-serif text-base sm:text-lg font-semibold tracking-wide">“Delivering Excellence, Building the Future”</p>

        <div class="bg-white/90 p-5 rounded-2xl border border-slate-200 backdrop-blur-sm max-w-2xl mx-auto text-left space-y-3 shadow-xl">
          <div class="flex items-center space-x-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transform hover:translate-x-2 transition-transform duration-300">
            <span class="text-2xl">✈️</span>
            <p class="text-xs sm:text-sm text-slate-700 font-medium">Solusi Logistik Kargo Kebandaraan Terpercaya</p>
          </div>
          <div class="flex items-center space-x-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transform hover:translate-x-2 transition-transform duration-300">
            <span class="text-2xl">🚛</span>
            <p class="text-xs sm:text-sm text-slate-700 font-medium">Armada Pengiriman & Distribusi Nasional</p>
          </div>
          <div class="flex items-center space-x-4 p-3 rounded-xl bg-slate-50 border border-slate-100 transform hover:translate-x-2 transition-transform duration-300">
            <span class="text-2xl">🏗️</span>
            <p class="text-xs sm:text-sm text-slate-700 font-medium">Konstruksi Infrastruktur Berskala Besar</p>
          </div>
        </div>
      </div>

      <!-- FITUR BAWAH -->
      <div class="bg-emerald-950 p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-t border-amber-500/30 w-full text-white">
        <div v-for="item in features" :key="item.label" class="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 transform hover:scale-105 transition-transform duration-300">
          <span class="text-lg block">{{ item.icon }}</span>
          <span class="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block mt-1">{{ item.label }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      features: [
        { icon: '🚛', label: 'DISTRIBUSI' },
        { icon: '🤝', label: 'TRADING' },
        { icon: '🏗️', label: 'CONSTRUCTION' },
        { icon: '🏢', label: 'WAREHOUSING' }
      ]
    }
  }
}
</script>