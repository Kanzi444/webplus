<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col justify-between bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950">
    
    <!-- KONTEN UTAMA LAYANAN -->
    <main class="max-w-7xl mx-auto px-4 py-8 sm:py-12 w-full flex-grow space-y-10">
      
      <!-- HEADER TITLE -->
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h2 class="text-3xl sm:text-5xl font-serif font-black text-emerald-950 tracking-tight uppercase drop-shadow-sm">
          LAYANAN <span class="text-amber-500">— KAMI —</span>
        </h2>
        <div class="inline-block bg-white/90 border border-amber-500/50 px-6 py-2 rounded-full shadow-lg backdrop-blur-sm">
          <p class="text-xs sm:text-sm font-bold text-emerald-950 uppercase tracking-widest">
            PT PINUS LANCAR USAHA SEMESTA
          </p>
        </div>
        <p class="text-xs sm:text-sm text-slate-600 italic font-medium leading-relaxed">
          “Menyediakan layanan terpadu untuk mendukung kebutuhan pelanggan dengan solusi yang profesional, andal, dan berdaya saing tinggi di berbagai sektor industri di seluruh Indonesia.”
        </p>
      </div>

      <!-- GRID LAYANAN DENGAN GAMBAR/ILUSTRASI -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(layanan, index) in layananList" 
          :key="index" 
          class="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl overflow-hidden shadow-xl hover:border-amber-500 transition-all duration-300 flex flex-col justify-between group"
        >
          <!-- BAGIAN GAMBAR / ILUSTRASI LAYANAN -->
          <div class="relative h-48 w-full overflow-hidden bg-emerald-950">
            <img 
              :src="layanan.image" 
              :alt="layanan.title" 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-transparent to-transparent"></div>
            <div class="absolute bottom-3 left-4 right-4 flex items-center justify-between">
              <span class="bg-amber-500 text-emerald-950 font-black text-xs px-2.5 py-1 rounded-md shadow">
                {{ layanan.badge }}
              </span>
              <span class="text-white text-xs font-semibold tracking-wide drop-shadow">
                PT PINUS LANCAR USAHA
              </span>
            </div>
          </div>

          <!-- BAGIAN KONTEN TEKS -->
          <div class="p-6 space-y-3 flex-grow flex flex-col justify-between">
            <div class="space-y-2">
              <h4 class="font-bold text-emerald-950 uppercase text-base tracking-wide">{{ layanan.title }}</h4>
              <p class="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">{{ layanan.desc }}</p>
            </div>
            
            <div class="pt-4 border-t border-slate-100 mt-4">
              <span class="text-[10px] font-extrabold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200/50 block text-center shadow-sm">
                {{ layanan.footer }}
              </span>
            </div>
          </div>
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
  name: 'LayananView',
  data() {
    return {
      layananList: [
        { 
          badge: '01', 
          title: 'Distribusi', 
          desc: 'Layanan distribusi barang yang cepat, tepat, dan aman dengan jaringan luas untuk memastikan kebutuhan pelanggan terpenuhi secara efisien.', 
          footer: 'Armada Logistik Terpadu',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
        },
        { 
          badge: '02', 
          title: 'Pergudangan', 
          desc: 'Solusi pergudangan modern dan terintegrasi dengan sistem manajemen yang efektif untuk menjaga kualitas, keamanan, dan ketersediaan barang.', 
          footer: 'Gudang Modern & Sistematis',
          image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80'
        },
        { 
          badge: '03', 
          title: 'Wrapping Koper Bandara', 
          desc: 'Layanan wrapping koper bandara yang profesional untuk melindungi barang bawaan penumpang dari goresan, debu, dan manipulasi selama perjalanan.', 
          footer: 'Perlindungan Koper Penerbangan',
          image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80'
        },
        { 
          badge: '04', 
          title: 'Sewa Titik Videotron', 
          desc: 'Layanan penayangan iklan videotron (reklame luar ruang) di lokasi strategis untuk media promosi, kampanye, dan branding bisnis secara efektif.', 
          footer: 'Branding Videotron Strategis',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
        },
        { 
          badge: '05', 
          title: 'Aktifitas Kebandaraan', 
          desc: 'Dukungan layanan kebandaraan meliputi handling, kargo, dan layanan pendukung lainnya yang sesuai standar keselamatan dan keamanan penerbangan.', 
          footer: 'Handling & Kargo Kebandaraan',
          image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80'
        },
        { 
          badge: '06', 
          title: 'Konstruksi', 
          desc: 'Layanan konstruksi yang mengedepankan kualitas, ketepatan waktu, dan keselamatan kerja untuk mewujudkan hasil pembangunan yang kuat dan berkelanjutan.', 
          footer: 'Pembangunan Berkelanjutan',
          image: 'https://picsum.photos/seed/constructionpinus/600/400'
        }
      ]
    }
  }
}
</script>