<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950">
    
    <!-- NAVBAR UTAMA -->
    <nav class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-sm w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        
        <!-- LOGO GAMBAR -->
        <router-link to="/" class="flex items-center space-x-3 cursor-pointer group">
          <img src="/logo-soplus.jpg" alt="SO PLUS Logo" class="h-10 sm:h-12 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300" />
        </router-link>

        <!-- MENU NAVBAR -->
        <div class="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <router-link 
            to="/" 
            class="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-900"
            active-class="bg-emerald-900 text-white shadow-md font-black"
          >
            Beranda
          </router-link>

          <router-link 
            to="/about" 
            class="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-900"
            active-class="bg-emerald-900 text-white shadow-md font-black"
          >
            Tentang
          </router-link>

          <router-link 
            to="/visimisi" 
            class="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-900"
            active-class="bg-emerald-900 text-white shadow-md font-black"
          >
            Visi & Misi
          </router-link>

          <router-link 
            to="/layanan" 
            class="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-900"
            active-class="bg-emerald-900 text-white shadow-md font-black"
          >
            Layanan
          </router-link>

          <router-link 
            to="/legalitas" 
            class="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-900"
            active-class="bg-emerald-900 text-white shadow-md font-black"
          >
            Legalitas
          </router-link>

          <router-link 
            to="/kontak" 
            class="px-3 py-2 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-900"
            active-class="bg-emerald-900 text-white shadow-md font-black"
          >
            Kontak
          </router-link>
        </div>

      </div>
    </nav>

    <!-- KONTEN HALAMAN (OTOMATIS MENGIKUTI GRADASI DARI ATAS KE BAWAH) -->
    <main class="flex-1 w-full">
      <router-view />
    </main>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>