<template>
  <div class="min-h-screen bg-slate-100 font-sans text-slate-800 flex flex-col">
    
    <!-- NAVBAR STICKY -->
    <nav class="sticky top-0 z-50 bg-emerald-950 border-b border-amber-500/40 text-white shadow-lg w-full">
      <div class="w-full px-6 sm:px-12 py-3 flex items-center justify-between">
        
        <!-- LOGO BRAND NAVBAR -->
        <div class="flex items-center space-x-3 cursor-pointer group" @click="activeTab = 'hero'">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 flex items-center justify-center font-black text-emerald-950 text-sm shadow-md border border-amber-300 transform group-hover:scale-110 transition-transform duration-300">
            SO
          </div>
          <div class="flex flex-col">
            <span class="text-white font-black tracking-wider text-base leading-none group-hover:text-amber-400 transition-colors duration-200">SO PLUS</span>
            <span class="text-[9px] text-amber-400 tracking-widest font-extrabold uppercase">PT PINUS LANCAR USAHA SEMESTA</span>
          </div>
        </div>

        <!-- MENU NAVIGASI -->
        <div class="flex space-x-1 sm:space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <button 
            @click="activeTab = 'hero'" 
            :class="activeTab === 'hero' ? 'bg-amber-500 text-emerald-950 shadow-md scale-105' : 'hover:text-amber-400 text-white hover:bg-emerald-900/50'"
            class="px-2.5 sm:px-3.5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Beranda
          </button>
          <button 
            @click="activeTab = 'about'" 
            :class="activeTab === 'about' ? 'bg-amber-500 text-emerald-950 shadow-md scale-105' : 'hover:text-amber-400 text-white hover:bg-emerald-900/50'"
            class="px-2.5 sm:px-3.5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Tentang
          </button>
          <button 
            @click="activeTab = 'visi-misi'" 
            :class="activeTab === 'visi-misi' ? 'bg-amber-500 text-emerald-950 shadow-md scale-105' : 'hover:text-amber-400 text-white hover:bg-emerald-900/50'"
            class="px-2.5 sm:px-3.5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Visi & Misi
          </button>
          <button 
            @click="activeTab = 'layanan'" 
            :class="activeTab === 'layanan' ? 'bg-amber-500 text-emerald-950 shadow-md scale-105' : 'hover:text-amber-400 text-white hover:bg-emerald-900/50'"
            class="px-2.5 sm:px-3.5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Layanan
          </button>
          <button 
            @click="activeTab = 'legalitas'" 
            :class="activeTab === 'legalitas' ? 'bg-amber-500 text-emerald-950 shadow-md scale-105' : 'hover:text-amber-400 text-white hover:bg-emerald-900/50'"
            class="px-2.5 sm:px-3.5 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
            Legalitas
          </button>
        </div>

      </div>
    </nav>

    <!-- AREA UTAMA HALAMAN -->
    <main class="flex-1 w-full">
      
      <!-- ==================== HALAMAN 1: BERANDA ==================== -->
      <div v-if="activeTab === 'hero'" class="w-full min-h-[calc(100vh-61px)] flex flex-col justify-between bg-gradient-to-b from-emerald-950 via-emerald-900 to-slate-950 text-white">
        
        <div class="relative z-10 text-center space-y-6 max-w-5xl mx-auto px-6 py-10">
          <div>
            <h3 class="text-amber-400 font-serif tracking-[0.4em] text-base sm:text-2xl font-bold uppercase drop-shadow">COMPANY</h3>
            <h1 class="text-5xl sm:text-7xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500 tracking-wider drop-shadow-md">PROFILE</h1>
            <div class="w-32 h-1.5 bg-amber-500 mx-auto mt-3 rounded-full"></div>
          </div>

          <div class="relative max-w-xl mx-auto my-6 p-8 rounded-3xl bg-slate-900/70 border border-amber-500/40 backdrop-blur-xl shadow-2xl overflow-hidden group transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <div class="relative z-10 flex flex-col items-center text-center space-y-4">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-200 flex items-center justify-center shadow-lg border border-amber-300 transform group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9 text-emerald-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4" />
                </svg>
              </div>

              <div>
                <h2 class="text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-yellow-500">
                  SO PLUS
                </h2>
                <p class="text-xs font-bold text-emerald-200 tracking-[0.25em] uppercase mt-1">
                  PT PINUS LANCAR USAHA SEMESTA
                </p>
              </div>

              <div class="w-20 h-0.5 bg-amber-500/40 my-1"></div>

              <div class="flex flex-wrap justify-center gap-2 pt-1">
                <span class="px-3 py-1 text-[10px] font-extrabold tracking-wider text-amber-300 bg-emerald-950/80 rounded-full border border-amber-500/30">DISTRIBUTION</span>
                <span class="px-3 py-1 text-[10px] font-extrabold tracking-wider text-amber-300 bg-emerald-950/80 rounded-full border border-amber-500/30">TRADING</span>
                <span class="px-3 py-1 text-[10px] font-extrabold tracking-wider text-amber-300 bg-emerald-950/80 rounded-full border border-amber-500/30">CONSTRUCTION</span>
              </div>
            </div>
          </div>

          <p class="italic text-amber-300 font-serif text-base sm:text-lg tracking-wide">“Delivering Excellence, Building the Future”</p>

          <div class="bg-emerald-900/60 p-5 rounded-xl border border-emerald-700/50 backdrop-blur-sm max-w-2xl mx-auto text-left space-y-3 shadow-lg">
            <div class="flex items-center space-x-4 p-2 rounded-lg bg-emerald-800/30 transform hover:translate-x-2 transition-transform duration-300">
              <span class="text-2xl">✈️</span>
              <p class="text-xs sm:text-sm text-emerald-100">Solusi Logistik Kargo Kebandaraan Terpercaya</p>
            </div>
            <div class="flex items-center space-x-4 p-2 rounded-lg bg-emerald-800/30 transform hover:translate-x-2 transition-transform duration-300">
              <span class="text-2xl">🚛</span>
              <p class="text-xs sm:text-sm text-emerald-100">Armada Pengiriman & Distribusi Nasional</p>
            </div>
            <div class="flex items-center space-x-4 p-2 rounded-lg bg-emerald-800/30 transform hover:translate-x-2 transition-transform duration-300">
              <span class="text-2xl">🏗️</span>
              <p class="text-xs sm:text-sm text-emerald-100">Konstruksi Infrastruktur Berskala Besar</p>
            </div>
          </div>
        </div>

        <div class="bg-emerald-950 p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-t border-amber-500/30 w-full">
          <div class="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 transform hover:scale-105 transition-transform duration-300">
            <span class="text-lg block">🚛</span>
            <span class="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block mt-1">DISTRIBUTION</span>
          </div>
          <div class="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 transform hover:scale-105 transition-transform duration-300">
            <span class="text-lg block">🤝</span>
            <span class="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block mt-1">TRADING</span>
          </div>
          <div class="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 transform hover:scale-105 transition-transform duration-300">
            <span class="text-lg block">🏗️</span>
            <span class="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block mt-1">CONSTRUCTION</span>
          </div>
          <div class="bg-emerald-900/40 p-2.5 rounded-xl border border-emerald-700/40 transform hover:scale-105 transition-transform duration-300">
            <span class="text-lg block">🏢</span>
            <span class="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block mt-1">WAREHOUSING</span>
          </div>
        </div>
      </div>


      <!-- ==================== HALAMAN 2: TENTANG ==================== -->
      <div v-else-if="activeTab === 'about'" class="max-w-7xl mx-auto px-6 py-10">
        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-12">
          <div class="flex justify-end mb-6">
            <span class="text-xs font-bold text-emerald-800 tracking-widest uppercase border-b-2 border-amber-500 pb-1">COMPANY PROFILE 2026</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div class="lg:col-span-4 space-y-6">
              <div class="border-l-4 border-amber-500 pl-4 py-1">
                <h3 class="text-2xl font-black text-emerald-950 tracking-wider">SO PLUS</h3>
                <p class="text-[10px] font-extrabold text-amber-600 tracking-widest uppercase mt-0.5">DISTRIBUTION • TRADING • CONSTRUCTION</p>
              </div>

              <p class="text-sm italic text-emerald-800 font-serif font-medium">“Delivering Excellence, Building the Future”</p>

              <div class="space-y-4">
                <div class="bg-gradient-to-br from-emerald-900 to-emerald-950 p-5 rounded-xl text-white shadow-md border border-emerald-800 transform hover:scale-105 transition-all duration-300">
                  <div class="text-3xl mb-2">✈️ 🚛</div>
                  <h4 class="text-sm font-bold text-amber-400">Logistik & Distribusi</h4>
                  <p class="text-xs text-emerald-100 mt-1 leading-relaxed">Armada pengiriman darat & udara siap melayani seluruh wilayah Indonesia.</p>
                </div>
                <div class="bg-gradient-to-br from-slate-900 to-emerald-950 p-5 rounded-xl text-white shadow-md border border-emerald-800 transform hover:scale-105 transition-all duration-300">
                  <div class="text-3xl mb-2">🚢 🏗️</div>
                  <h4 class="text-sm font-bold text-amber-400">Konstruksi & Kargo</h4>
                  <p class="text-xs text-slate-200 mt-1 leading-relaxed">Dukungan infrastruktur pelabuhan & proyek konstruksi berskala nasional.</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-6">
              <div>
                <h2 class="text-3xl sm:text-4xl font-serif font-extrabold text-amber-600 tracking-wide uppercase">TENTANG</h2>
                <h2 class="text-4xl sm:text-5xl font-serif font-black text-emerald-950 tracking-tight leading-none uppercase">PERUSAHAAN</h2>
                <div class="w-20 h-1.5 bg-amber-500 mt-3 rounded-full"></div>
              </div>

              <h3 class="text-xl font-black text-emerald-900 tracking-wide uppercase">PT PINUS LANCAR USAHA SEMESTA</h3>

              <div class="space-y-4">
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-300">
                  <div class="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-base shrink-0 shadow-sm">🏢</div>
                  <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-justify"><strong class="text-emerald-950">PT Pinus Lancar Usaha Semesta</strong> merupakan perusahaan nasional yang bergerak di bidang <strong>Distribusi, Perdagangan Umum,</strong> dan <strong>Konstruksi</strong> dengan komitmen menghadirkan solusi bisnis yang profesional, terpercaya, dan berkelanjutan.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-300">
                  <div class="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-base shrink-0 shadow-sm">👥</div>
                  <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">Didukung oleh sumber daya manusia yang kompeten, sistem kerja yang efektif, serta jaringan kemitraan yang luas, perusahaan terus berkembang menjadi mitra strategis bagi pemerintah, BUMN, swasta, maupun berbagai sektor industri di Indonesia.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-300">
                  <div class="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-base shrink-0 shadow-sm">🤝</div>
                  <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">Kami percaya bahwa keberhasilan perusahaan dibangun melalui integritas, kualitas layanan, inovasi, serta kepuasan pelanggan sebagai prioritas utama.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.02] transition-transform duration-300">
                  <div class="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-base shrink-0 shadow-sm">📈</div>
                  <p class="text-sm sm:text-base text-slate-700 leading-relaxed text-justify">Dengan semangat <em>Delivering Excellence, Building the Future</em>, kami berkomitmen untuk terus memberikan nilai terbaik dan berkontribusi nyata dalam mendukung pertumbuhan ekonomi dan pembangunan Indonesia secara berkelanjutan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- ==================== HALAMAN 3: VISI & MISI ==================== -->
      <div v-else-if="activeTab === 'visi-misi'" class="max-w-7xl mx-auto px-6 py-10">
        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-12 space-y-10">
          <div class="flex justify-between items-center border-b pb-4 border-slate-100">
            <div class="border-l-4 border-amber-500 pl-3">
              <span class="text-xl font-black text-emerald-950 tracking-wider">SO PLUS</span>
            </div>
            <span class="text-xs font-bold text-emerald-800 tracking-widest uppercase border-b-2 border-amber-500 pb-1">COMPANY PROFILE 2026</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-4">
              <div class="bg-gradient-to-br from-emerald-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-8 shadow-xl border-2 border-amber-500/30 text-center space-y-4 transform hover:scale-105 transition-all duration-300">
                <div class="text-5xl">✈️ 🚛</div>
                <div class="text-4xl">🏗️ 🚢</div>
                <div class="bg-emerald-800/80 backdrop-blur-sm p-3 rounded-xl border border-emerald-600/50">
                  <p class="text-xs font-bold text-amber-400 uppercase">Infrastruktur Strategis</p>
                  <p class="text-[10px] text-emerald-100 mt-1">Pengiriman & Logistik Terpadu</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <div class="flex items-center space-x-3">
                <h2 class="text-4xl font-serif font-black text-emerald-950 tracking-wide uppercase">VISI</h2>
                <div class="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-xl">🎯</div>
              </div>
              
              <div class="bg-slate-50 p-6 rounded-2xl border-l-4 border-amber-500 text-slate-700 leading-relaxed text-base text-justify shadow-sm transform hover:scale-[1.01] transition-transform duration-300">
                Menjadi perusahaan nasional yang <strong class="text-amber-600">unggul</strong>, <strong class="text-amber-600">terpercaya</strong>, dan <strong class="text-amber-600">berdaya saing tinggi</strong> dalam bidang distribusi, perdagangan, dan konstruksi yang mampu memberikan nilai tambah bagi seluruh pemangku kepentingan.
              </div>
            </div>
          </div>

          <div class="w-full h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4">
              <div class="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border-2 border-emerald-800 text-center space-y-4 transform hover:scale-105 transition-all duration-300">
                <div class="w-20 h-20 mx-auto rounded-full bg-emerald-900/80 border-2 border-amber-400 flex items-center justify-center text-3xl shadow-lg">🏔️</div>
                <h4 class="text-sm font-bold text-amber-400 uppercase tracking-wider">Komitmen Utama</h4>
                <div class="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  <div class="bg-emerald-950 p-2 rounded border border-emerald-800">🏢 Perusahaan</div>
                  <div class="bg-emerald-950 p-2 rounded border border-emerald-800">🤝 Kemitraan</div>
                  <div class="bg-emerald-950 p-2 rounded border border-emerald-800">💡 Inovasi</div>
                  <div class="bg-emerald-950 p-2 rounded border border-emerald-800">🌱 Keberlanjutan</div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-8 space-y-4">
              <div class="flex items-center space-x-3">
                <h2 class="text-4xl font-serif font-black text-emerald-950 tracking-wide uppercase">MISI</h2>
                <div class="w-10 h-10 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl">🏔️</div>
              </div>

              <div class="space-y-3">
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
                  <div class="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">📦</div>
                  <p class="text-sm text-slate-700 leading-relaxed text-justify"><strong>Memberikan produk dan layanan berkualitas tinggi</strong> yang memenuhi kebutuhan pelanggan secara tepat dan berkelanjutan.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
                  <div class="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">🤝</div>
                  <p class="text-sm text-slate-700 leading-relaxed text-justify"><strong>Membangun hubungan jangka panjang</strong> yang saling menguntungkan dengan pelanggan, mitra kerja, dan seluruh pemangku kepentingan.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
                  <div class="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">💡</div>
                  <p class="text-sm text-slate-700 leading-relaxed text-justify"><strong>Mengembangkan inovasi dan teknologi</strong> untuk meningkatkan nilai tambah serta daya saing perusahaan.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
                  <div class="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">⚖️</div>
                  <p class="text-sm text-slate-700 leading-relaxed text-justify"><strong>Menjalankan bisnis dengan tata kelola</strong> perusahaan yang baik, berintegritas, profesional, dan berorientasi pada keberlanjutan.</p>
                </div>
                <div class="flex items-start space-x-4 p-3 bg-slate-50 rounded-xl border border-slate-100 transform hover:scale-[1.01] transition-transform duration-300">
                  <div class="w-8 h-8 rounded-full bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">👥</div>
                  <p class="text-sm text-slate-700 leading-relaxed text-justify"><strong>Memberikan kontribusi nyata</strong> terhadap pembangunan nasional dan kesejahteraan masyarakat.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- ==================== HALAMAN 4: LAYANAN KAMI (SESUAI FOTO) ==================== -->
      <div v-else-if="activeTab === 'layanan'" class="max-w-7xl mx-auto px-6 py-10">
        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-12 space-y-8">
          
          <!-- HEADER LAYANAN -->
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <h2 class="text-3xl sm:text-5xl font-serif font-black text-emerald-950 tracking-tight leading-none uppercase">
              LAYANAN <span class="text-amber-500">— KAMI —</span>
            </h2>
            <h3 class="text-sm sm:text-lg font-bold text-emerald-900 uppercase tracking-widest bg-emerald-100/60 py-1 px-4 rounded-full inline-block">
              PT PINUS LANCAR USAHA SEMESTA
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed pt-2">
              “Kami menyediakan layanan terpadu untuk mendukung kebutuhan pelanggan dengan solusi yang profesional, andal, dan berdaya saing tinggi di berbagai sektor industri di seluruh Indonesia.”
            </p>
          </div>

          <!-- GRID 6 LAYANAN -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- 01 DISTRIBUSI -->
            <div class="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-amber-500 transform hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
              <div>
                <!-- HEADER CARD LAYANAN -->
                <div class="bg-emerald-950 text-white p-3 flex items-center space-x-3 border-b-2 border-amber-500">
                  <span class="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-black text-sm flex items-center justify-center border border-amber-300 shrink-0">01</span>
                  <h3 class="text-sm font-black tracking-wider uppercase">DISTRIBUSI</h3>
                </div>
                <!-- DESKRIPSI & IKON -->
                <div class="p-4 flex items-start space-x-3 bg-slate-50 min-h-[90px]">
                  <div class="w-10 h-10 rounded-full bg-emerald-900/10 text-emerald-950 flex items-center justify-center text-xl shrink-0 border border-emerald-900/20">
                    🚚
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed text-justify">
                    Layanan distribusi barang yang cepat, tepat, dan aman dengan jaringan luas untuk memastikan kebutuhan pelanggan terpenuhi secara efisien dan tepat waktu.
                  </p>
                </div>
              </div>
              <!-- ILUSTRASI GAMBAR -->
              <div class="h-44 bg-gradient-to-t from-slate-900 to-slate-700 relative overflow-hidden flex items-center justify-center group">
                <div class="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div class="text-center space-y-2 z-20 text-white p-4">
                  <div class="text-4xl transform group-hover:scale-125 transition-transform duration-300">🚛 📦</div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300 block bg-black/60 px-2 py-1 rounded">Armada Logistik Logistik Terpadu</span>
                </div>
              </div>
            </div>

            <!-- 02 PERGUDANGAN -->
            <div class="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-amber-500 transform hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="bg-emerald-950 text-white p-3 flex items-center space-x-3 border-b-2 border-amber-500">
                  <span class="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-black text-sm flex items-center justify-center border border-amber-300 shrink-0">02</span>
                  <h3 class="text-sm font-black tracking-wider uppercase">PERGUDANGAN</h3>
                </div>
                <div class="p-4 flex items-start space-x-3 bg-slate-50 min-h-[90px]">
                  <div class="w-10 h-10 rounded-full bg-emerald-900/10 text-emerald-950 flex items-center justify-center text-xl shrink-0 border border-emerald-900/20">
                    🏢
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed text-justify">
                    Solusi pergudangan modern dan terintegrasi dengan sistem manajemen yang efektif untuk menjaga kualitas, keamanan dan ketersediaan barang.
                  </p>
                </div>
              </div>
              <div class="h-44 bg-gradient-to-t from-slate-900 to-slate-700 relative overflow-hidden flex items-center justify-center group">
                <div class="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div class="text-center space-y-2 z-20 text-white p-4">
                  <div class="text-4xl transform group-hover:scale-125 transition-transform duration-300">🏗️ 🏭</div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300 block bg-black/60 px-2 py-1 rounded">Gudang Modern & Sistematis</span>
                </div>
              </div>
            </div>

            <!-- 03 WRAPPING / BUNGKUS KOPER BANDARA -->
            <div class="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-amber-500 transform hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="bg-emerald-950 text-white p-3 flex items-center space-x-3 border-b-2 border-amber-500">
                  <span class="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-black text-sm flex items-center justify-center border border-amber-300 shrink-0">03</span>
                  <h3 class="text-xs sm:text-sm font-black tracking-wider uppercase">WRAPPING / BUNGKUS KOPER BANDARA</h3>
                </div>
                <div class="p-4 flex items-start space-x-3 bg-slate-50 min-h-[90px]">
                  <div class="w-10 h-10 rounded-full bg-emerald-900/10 text-emerald-950 flex items-center justify-center text-xl shrink-0 border border-emerald-900/20">
                    🧳
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed text-justify">
                    Layanan wrapping koper bandara yang profesional untuk melindungi barang bawaan penumpang dari goresan, debu, dan manipulasi selama perjalanan.
                  </p>
                </div>
              </div>
              <div class="h-44 bg-gradient-to-t from-slate-900 to-slate-700 relative overflow-hidden flex items-center justify-center group">
                <div class="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div class="text-center space-y-2 z-20 text-white p-4">
                  <div class="text-4xl transform group-hover:scale-125 transition-transform duration-300">🧳 ✈️</div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300 block bg-black/60 px-2 py-1 rounded">Perlindungan Koper Penerbangan</span>
                </div>
              </div>
            </div>

            <!-- 04 SEWA TITIK VIDEOTRON (REKLAME LUAR RUANG) -->
            <div class="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-amber-500 transform hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="bg-emerald-950 text-white p-3 flex items-center space-x-3 border-b-2 border-amber-500">
                  <span class="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-black text-sm flex items-center justify-center border border-amber-300 shrink-0">04</span>
                  <h3 class="text-xs sm:text-sm font-black tracking-wider uppercase">SEWA TITIK VIDEOTRON (REKLAME LUAR RUANG)</h3>
                </div>
                <div class="p-4 flex items-start space-x-3 bg-slate-50 min-h-[90px]">
                  <div class="w-10 h-10 rounded-full bg-emerald-900/10 text-emerald-950 flex items-center justify-center text-xl shrink-0 border border-emerald-900/20">
                    📺
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed text-justify">
                    Layanan penyewaan titik videotron (reklame luar ruang) di lokasi strategis untuk media promosi, kampanye, dan branding bisnis secara efektif dan luas.
                  </p>
                </div>
              </div>
              <div class="h-44 bg-gradient-to-t from-slate-900 to-slate-700 relative overflow-hidden flex items-center justify-center group">
                <div class="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div class="text-center space-y-2 z-20 text-white p-4">
                  <div class="text-4xl transform group-hover:scale-125 transition-transform duration-300">📺 🏙️</div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300 block bg-black/60 px-2 py-1 rounded">Branding Videotron Strategis</span>
                </div>
              </div>
            </div>

            <!-- 05 AKTIFITAS KEBANDARAAN -->
            <div class="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-amber-500 transform hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="bg-emerald-950 text-white p-3 flex items-center space-x-3 border-b-2 border-amber-500">
                  <span class="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-black text-sm flex items-center justify-center border border-amber-300 shrink-0">05</span>
                  <h3 class="text-sm font-black tracking-wider uppercase">AKTIFITAS KEBANDARAAN</h3>
                </div>
                <div class="p-4 flex items-start space-x-3 bg-slate-50 min-h-[90px]">
                  <div class="w-10 h-10 rounded-full bg-emerald-900/10 text-emerald-950 flex items-center justify-center text-xl shrink-0 border border-emerald-900/20">
                    ✈️
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed text-justify">
                    Dukungan layanan kebandaraan meliputi handling, kargo, dan layanan pendukung lainnya yang sesuai standar keselamatan dan keamanan penerbangan.
                  </p>
                </div>
              </div>
              <div class="h-44 bg-gradient-to-t from-slate-900 to-slate-700 relative overflow-hidden flex items-center justify-center group">
                <div class="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div class="text-center space-y-2 z-20 text-white p-4">
                  <div class="text-4xl transform group-hover:scale-125 transition-transform duration-300">✈️ 🛄</div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300 block bg-black/60 px-2 py-1 rounded">Handling & Kargo Kebandaraan</span>
                </div>
              </div>
            </div>

            <!-- 06 KONTRUKSI -->
            <div class="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-md hover:border-amber-500 transform hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div class="bg-emerald-950 text-white p-3 flex items-center space-x-3 border-b-2 border-amber-500">
                  <span class="w-8 h-8 rounded-full bg-amber-500 text-emerald-950 font-black text-sm flex items-center justify-center border border-amber-300 shrink-0">06</span>
                  <h3 class="text-sm font-black tracking-wider uppercase">KONTRUKSI</h3>
                </div>
                <div class="p-4 flex items-start space-x-3 bg-slate-50 min-h-[90px]">
                  <div class="w-10 h-10 rounded-full bg-emerald-900/10 text-emerald-950 flex items-center justify-center text-xl shrink-0 border border-emerald-900/20">
                    🏗️
                  </div>
                  <p class="text-xs text-slate-700 leading-relaxed text-justify">
                    Layanan konstruksi yang mengedepankan kualitas, ketepatan waktu, dan keselamatan kerja untuk mewujudkan hasil pembangunan yang kuat dan berkelanjutan.
                  </p>
                </div>
              </div>
              <div class="h-44 bg-gradient-to-t from-slate-900 to-slate-700 relative overflow-hidden flex items-center justify-center group">
                <div class="absolute inset-0 bg-emerald-950/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <div class="text-center space-y-2 z-20 text-white p-4">
                  <div class="text-4xl transform group-hover:scale-125 transition-transform duration-300">🏗️ 🏙️</div>
                  <span class="text-[10px] uppercase font-bold tracking-widest text-amber-300 block bg-black/60 px-2 py-1 rounded">Pembangunan Berkelanjutan</span>
                </div>
              </div>
            </div>

          </div>

          <!-- FOOTER KOMITMEN LAYANAN -->
          <div class="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-amber-500/40 space-y-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-emerald-800/80 pb-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-2xl shadow-lg shrink-0">
                  🛡️
                </div>
                <div>
                  <h3 class="text-xl font-black text-amber-400 tracking-wider uppercase">KOMITMEN KAMI</h3>
                  <p class="text-xs sm:text-sm text-emerald-100 mt-0.5 leading-relaxed">
                    Memberikan layanan terbaik dengan integritas, profesionalisme, keselamatan, dan kepuasan pelanggan.
                  </p>
                </div>
              </div>
            </div>

            <!-- 5 PILAR LAYANAN -->
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-2xl block mb-1">🛡️</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase tracking-wider">AMAN</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-2xl block mb-1">🤝</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase tracking-wider">TERPERCAYA</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-2xl block mb-1">👔</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase tracking-wider">PROFESIONAL</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-2xl block mb-1">⚙️</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase tracking-wider">EFISIEN</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1">
                <span class="text-2xl block mb-1">⭐</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase tracking-wider">BERKUALITAS</span>
              </div>
            </div>
          </div>

          <!-- SUB FOOTER -->
          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white rounded-2xl p-4 text-center shadow-xl border border-amber-500/40 transform hover:scale-[1.01] transition-transform duration-300">
            <h4 class="text-xs sm:text-sm font-black text-amber-400 tracking-widest uppercase">
              MITRA USAHA TERPERCAYA, TAAT HUKUM, DAN PROFESIONAL
            </h4>
          </div>

        </div>
      </div>


      <!-- ==================== HALAMAN 5: LEGALITAS PERUSAHAAN ==================== -->
      <div v-else-if="activeTab === 'legalitas'" class="max-w-7xl mx-auto px-6 py-10">
        <div class="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-12 space-y-8">
          
          <div class="text-center max-w-3xl mx-auto space-y-3">
            <h2 class="text-3xl sm:text-5xl font-serif font-black text-emerald-950 tracking-tight leading-none uppercase">
              LEGALITAS <span class="text-amber-500">— PERUSAHAAN —</span>
            </h2>
            <h3 class="text-lg font-bold text-emerald-900 uppercase tracking-widest bg-emerald-100/60 py-1 px-4 rounded-full inline-block">
              PT PINUS LANCAR USAHA SEMESTA
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 leading-relaxed pt-2">
              <strong class="text-emerald-950">PT Pinus Lancar Usaha Semesta</strong> memiliki legalitas usaha yang lengkap dan sah sesuai ketentuan Pemerintah Republik Indonesia. Seluruh dokumen legal diterbitkan oleh instansi yang berwenang sebagai dasar hukum berdirinya perusahaan serta sebagai bukti kepatuhan terhadap peraturan perundang-undangan yang berlaku.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <!-- 01 AKTA PENDIRIAN PERSEROAN TERBATAS -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-sm rounded-lg shadow-sm">01</span>
                <h3 class="text-xs sm:text-sm font-black text-emerald-950 tracking-wider uppercase">AKTA PENDIRIAN PERSEROAN TERBATAS</h3>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-slate-700">
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Nomor Akta</span>
                  <span class="col-span-2 font-black text-emerald-950">: 16</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Tanggal</span>
                  <span class="col-span-2 font-semibold text-slate-800">: 24 Februari 2022</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Notaris</span>
                  <span class="col-span-2 font-semibold text-slate-800">: Endah Suliyanti, S.H., M.Kn.</span>
                </div>
                <div class="pt-2 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  Sebagai dasar berdirinya PT Pinus Lancar Usaha Semesta sesuai dengan ketentuan Undang-Undang Perseroan Terbatas.
                </div>
              </div>
            </div>

            <!-- 02 PENGESAHAN BADAN HUKUM (AHU) PENDIRIAN -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-sm rounded-lg shadow-sm">02</span>
                <h3 class="text-xs sm:text-sm font-black text-emerald-950 tracking-wider uppercase">PENGESAHAN BADAN HUKUM (AHU) PENDIRIAN</h3>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-slate-700">
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Nomor SK</span>
                  <span class="col-span-2 font-black text-emerald-950 break-all">: AHU-0017317.AH.01.01.TAHUN 2022</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Tanggal</span>
                  <span class="col-span-2 font-semibold text-slate-800">: 09 Maret 2022</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Instansi</span>
                  <span class="col-span-2 font-semibold text-slate-800">: Kementerian Hukum dan HAM RI</span>
                </div>
                <div class="pt-2 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  Pengesahan pendirian badan hukum Perseroan Terbatas PT Pinus Lancar Usaha Semesta oleh Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia.
                </div>
              </div>
            </div>

            <!-- 03 AKTA PERUBAHAN PERSEROAN -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-sm rounded-lg shadow-sm">03</span>
                <h3 class="text-xs sm:text-sm font-black text-emerald-950 tracking-wider uppercase">AKTA PERUBAHAN PERSEROAN</h3>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-slate-700">
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Nomor Akta</span>
                  <span class="col-span-2 font-black text-emerald-950">: 05</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Tanggal</span>
                  <span class="col-span-2 font-semibold text-slate-800">: 12 Maret 2025</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Notaris</span>
                  <span class="col-span-2 font-semibold text-slate-800">: Suri Paramita, S.H., M.Kn.</span>
                </div>
                <div class="pt-2 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  Akta Pernyataan Keputusan Rapat Umum Pemegang Saham Luar Biasa mengenai perubahan Anggaran Dasar, kegiatan usaha, dan susunan pengurus Perseroan.
                </div>
              </div>
            </div>

            <!-- 04 PENGESAHAN PERUBAHAN (AHU) -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-sm rounded-lg shadow-sm">04</span>
                <h3 class="text-xs sm:text-sm font-black text-emerald-950 tracking-wider uppercase">PENGESAHAN PERUBAHAN (AHU)</h3>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-slate-700">
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Nomor SK</span>
                  <span class="col-span-2 font-black text-emerald-950 break-all">: AHU-0019014.AH.01.02.TAHUN 2025</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Tanggal</span>
                  <span class="col-span-2 font-semibold text-slate-800">: 17 Maret 2025</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Instansi</span>
                  <span class="col-span-2 font-semibold text-slate-800">: Kementerian Hukum Republik Indonesia</span>
                </div>
                <div class="pt-2 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  Persetujuan Perubahan Anggaran Dasar Perseroan Terbatas PT Pinus Lancar Usaha Semesta oleh Menteri Hukum Republik Indonesia.
                </div>
              </div>
            </div>

            <!-- 05 NIB -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300 md:col-span-2">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div class="flex items-center space-x-3">
                  <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-base rounded-lg shadow-sm">05</span>
                  <div>
                    <h3 class="text-sm font-black text-emerald-950 tracking-wider uppercase">NIB (NOMOR INDUK BERUSAHA)</h3>
                  </div>
                </div>
                <span class="text-xs bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-300">OSS Berbasis Risiko</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-700">
                <div class="space-y-2 border-r-0 md:border-r border-slate-200 pr-0 md:pr-4">
                  <div class="flex justify-between py-1 border-b border-dashed border-slate-200">
                    <span class="font-bold text-slate-500">NIB</span>
                    <span class="font-black text-emerald-950 text-base">1103220032209</span>
                  </div>
                  <div class="flex justify-between py-1 border-b border-dashed border-slate-200">
                    <span class="font-bold text-slate-500">Status Penanaman Modal</span>
                    <span class="font-bold text-slate-800">PMDN</span>
                  </div>
                  <div class="flex justify-between py-1 border-b border-dashed border-slate-200">
                    <span class="font-bold text-slate-500">Sistem</span>
                    <span class="font-bold text-slate-800">OSS Berbasis Risiko</span>
                  </div>
                  <div class="flex justify-between py-1 border-b border-dashed border-slate-200">
                    <span class="font-bold text-slate-500">Tanggal Terbit</span>
                    <span class="font-bold text-slate-800">11 Maret 2022</span>
                  </div>
                  <div class="flex justify-between py-1">
                    <span class="font-bold text-slate-500">Berlaku</span>
                    <span class="font-semibold text-slate-800 text-right">Berlaku di seluruh wilayah NKRI selama menjalankan kegiatan usaha.</span>
                  </div>
                </div>

                <div class="space-y-3">
                  <span class="font-bold text-emerald-950 block">KBLI USAHA:</span>
                  <div class="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">46900</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">49415</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">52109</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">52230</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">52240</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">52299</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">53201</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">70201</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">77305</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">78300</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">79120</span>
                    <span class="px-2 py-1 bg-white border border-slate-300 rounded font-bold">85499</span>
                  </div>
                  <div class="mt-3 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                    NIB merupakan identitas resmi pelaku usaha dan berlaku sebagai legalitas utama dalam menjalankan kegiatan berusaha di Indonesia.
                  </div>
                </div>
              </div>
            </div>

            <!-- 06 NPWP -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div class="flex items-center space-x-3">
                  <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-base rounded-lg shadow-sm">06</span>
                  <div>
                    <h3 class="text-xs sm:text-sm font-black text-emerald-950 tracking-wider uppercase">NPWP (NOMOR POKOK WAJIB PAJAK)</h3>
                  </div>
                </div>
                <span class="text-xs bg-amber-100 text-amber-900 font-bold px-3 py-1 rounded-full border border-amber-300">KPP Bandung Bojonagara</span>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-slate-700">
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">NPWP</span>
                  <span class="col-span-2 font-black text-emerald-950 text-base">: 63.618.769.2-423.000</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">NPWP16</span>
                  <span class="col-span-2 font-bold text-slate-800">: 0636 1876 9242 3000</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Nama Wajib Pajak</span>
                  <span class="col-span-2 font-bold text-emerald-950">: PT PINUS LANCAR USAHA SEMESTA</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">KPP Terdaftar</span>
                  <span class="col-span-2 font-semibold text-slate-800">: KPP Pratama Bandung Bojonagara</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Tanggal Terdaftar</span>
                  <span class="col-span-2 font-semibold text-slate-800">: 08 Maret 2022</span>
                </div>
                <div class="pt-2 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  NPWP digunakan sebagai sarana dalam administrasi perpajakan sesuai ketentuan peraturan perpajakan yang berlaku.
                </div>
              </div>
            </div>

            <!-- 07 PKP -->
            <div class="bg-slate-50 border-2 border-emerald-900/20 rounded-2xl p-6 shadow-md hover:border-amber-500 transform hover:scale-[1.02] transition-all duration-300">
              <div class="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
                <div class="flex items-center space-x-3">
                  <span class="px-3 py-1 bg-emerald-950 text-amber-400 font-extrabold text-base rounded-lg shadow-sm">07</span>
                  <div>
                    <h3 class="text-xs sm:text-sm font-black text-emerald-950 tracking-wider uppercase">PKP (PENGUSAHA KENA PAJAK)</h3>
                  </div>
                </div>
                <span class="text-xs bg-emerald-100 text-emerald-900 font-bold px-3 py-1 rounded-full border border-emerald-300">Resmi Terpengukuhan</span>
              </div>
              <div class="space-y-3 text-xs sm:text-sm text-slate-700">
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Status</span>
                  <span class="col-span-2 font-black text-emerald-950">: Pengusaha Kena Pajak (PKP)</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Nomor Surat Pengukuhan</span>
                  <span class="col-span-2 font-mono font-bold text-slate-800">: S-00036/SPPKP-CT/KPP.0901/2025</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Tanggal Pengukuhan</span>
                  <span class="col-span-2 font-semibold text-slate-800">: 28 Februari 2025</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-b border-dashed border-slate-200 pb-2">
                  <span class="font-bold text-slate-500">Instansi</span>
                  <span class="col-span-2 font-semibold text-slate-800">: Direktorat Jenderal Pajak - KPP Pratama Bandung Bojonagara</span>
                </div>
                <div class="pt-2 text-xs text-slate-600 italic bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                  Sebagai PKP, perusahaan berhak dan berkewajiban melaksanakan administrasi Pajak Pertambahan Nilai (PPN) sesuai ketentuan perpajakan.
                </div>
              </div>
            </div>

          </div>

          <!-- KOMITMEN KAMI DAN PILAR -->
          <div class="bg-gradient-to-br from-emerald-950 via-emerald-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-amber-500/40 space-y-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-emerald-800/80 pb-6">
              <div class="flex items-center space-x-4">
                <div class="w-12 h-12 rounded-xl bg-amber-500 text-emerald-950 flex items-center justify-center font-bold text-2xl shadow-lg shrink-0">
                  ⚖️
                </div>
                <div>
                  <h3 class="text-xl font-black text-amber-400 tracking-wider">KOMITMEN KAMI</h3>
                  <p class="text-xs text-emerald-100 mt-0.5 leading-relaxed">
                    PT Pinus Lancar Usaha Semesta senantiasa menjalankan kegiatan usaha berdasarkan prinsip kepatuhan hukum, integritas, profesionalisme, dan transparansi guna memberikan nilai tambah serta membangun kepercayaan kepada seluruh pelanggan, mitra bisnis, dan pemangku kepentingan.
                  </p>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-xl block mb-1">⚖️</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase">LEGAL</span>
                <span class="text-[9px] text-emerald-200 block mt-0.5 leading-tight">Kepatuhan terhadap hukum dan regulasi yang berlaku.</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-xl block mb-1">🛡️</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase">INTEGRITAS</span>
                <span class="text-[9px] text-emerald-200 block mt-0.5 leading-tight">Menjunjung tinggi kejujuran dan etika dalam berusaha.</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-xl block mb-1">🤝</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase">PROFESIONALISME</span>
                <span class="text-[9px] text-emerald-200 block mt-0.5 leading-tight">Bekerja secara profesional dan berorientasi pada kualitas layanan.</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300">
                <span class="text-xl block mb-1">👥</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase">TRANSPARANSI</span>
                <span class="text-[9px] text-emerald-200 block mt-0.5 leading-tight">Terbuka dalam informasi dan proses bisnis.</span>
              </div>
              <div class="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50 transform hover:scale-105 transition-transform duration-300 col-span-2 sm:col-span-1">
                <span class="text-xl block mb-1">⭐</span>
                <span class="text-[11px] font-black text-amber-400 block uppercase">KEPERCAYAAN</span>
                <span class="text-[9px] text-emerald-200 block mt-0.5 leading-tight">Menjadi mitra usaha yang dapat dipercaya dan diandalkan.</span>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-emerald-950 via-emerald-900 to-emerald-950 text-white rounded-2xl p-6 text-center shadow-xl border border-amber-500/40 transform hover:scale-[1.01] transition-transform duration-300">
            <h4 class="text-sm sm:text-base font-black text-amber-400 tracking-widest uppercase">
              LEGAL • COMPLIANT • TRUSTED
            </h4>
            <p class="text-xs text-emerald-100 font-semibold mt-1">
              Mitra Usaha Terpercaya, Taat Hukum, dan Profesional
            </p>
          </div>

        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      activeTab: 'layanan' // Default diset langsung ke tab Layanan
    }
  }
}
</script>