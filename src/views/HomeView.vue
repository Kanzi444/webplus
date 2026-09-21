<template>
  <div class="min-h-screen font-sans text-slate-800 flex flex-col overflow-hidden">
    
    <!-- 1. INDIKATOR STATUS OPERASIONAL REAL-TIME (08:30 - 17:00 WIB) -->
    <div class="bg-emerald-950 text-white text-xs py-2 px-4 border-b border-amber-500/30 flex flex-wrap justify-center items-center gap-2 shadow-inner z-20">
      <div class="flex items-center gap-2">
        <span :class="isOperational ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'" class="w-2.5 h-2.5 rounded-full inline-block"></span>
        <span class="font-medium tracking-wide">
          {{ operationalStatusText }}
        </span>
      </div>
      <span class="text-amber-400 font-semibold sm:ml-2">| Jam Kerja: Senin - Jumat (08:30 - 17:00 WIB)</span>
    </div>

    <!-- HERO SECTION DENGAN ANIMASI HALUS & TYPEWRITER -->
    <div class="w-full min-h-[calc(100vh-105px)] flex flex-col justify-between bg-gradient-to-b from-white via-emerald-800/20 to-emerald-950 text-slate-800 animate-smooth-fade-in">
      <div class="relative z-10 text-center space-y-5 max-w-5xl mx-auto px-6 py-8 animate-slide-down">
        
        <!-- LOGO UTAMA -->
        <div class="flex justify-center items-center py-2">
          <img src="/logo-soplus.jpg" alt="PT Pinus Lancar Usaha Semesta" class="h-20 sm:h-24 w-auto object-contain drop-shadow-md rounded-xl" />
        </div>

        <!-- 2. SLOGAN DENGAN EFEK KETIK OTOMATIS -->
        <div class="h-8 flex items-center justify-center">
          <p class="italic text-emerald-900 font-serif text-base sm:text-lg font-semibold tracking-wide border-r-2 border-amber-500 pr-1 animate-pulse">
            “{{ typedText }}”
          </p>
        </div>

        <!-- BANNER KHUSUS PENCARI KERJA / OPEN RECRUITMENT -->
        <div class="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 p-4 rounded-2xl shadow-lg max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border border-amber-400 animate-bounce-short">
          <div class="text-left">
            <span class="bg-slate-950 text-amber-400 text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">Peluang Karier</span>
            <h3 class="font-bold text-sm sm:text-base mt-1 text-slate-900">Ingin Berkembang Bersama Kami?</h3>
            <p class="text-xs text-slate-900/90">PT Pinus Lancar Usaha Semesta membuka kesempatan bagi talenta berbakat.</p>
          </div>
          <a href="https://wa.me/6280000000000?text=Halo%2C%20saya%20tertarik%20mengirimkan%20CV%20dan%20melamar%20pekerjaan%20di%20PT%20Pinus%20Lancar%20Usaha%20Semesta" target="_blank" class="bg-slate-900 hover:bg-slate-950 text-amber-400 text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md whitespace-nowrap">
            Kirim CV / Lamaran 🚀
          </a>
        </div>

        <!-- KARTU LAYANAN UTAMA -->
        <div class="bg-white/90 p-4 rounded-2xl border border-slate-200 backdrop-blur-sm max-w-2xl mx-auto text-left space-y-2.5 shadow-xl animate-fade-in-left">
          <div class="flex items-center space-x-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 transform hover:translate-x-2 transition-transform duration-300">
            <span class="text-2xl">✈️</span>
            <p class="text-xs sm:text-sm text-slate-700 font-medium">Solusi Logistik Kargo Kebandaraan Terpercaya</p>
          </div>
          <div class="flex items-center space-x-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 transform hover:translate-x-2 transition-transform duration-300">
            <span class="text-2xl">🚛</span>
            <p class="text-xs sm:text-sm text-slate-700 font-medium">Armada Pengiriman & Distribusi Nasional</p>
          </div>
          <div class="flex items-center space-x-4 p-2.5 rounded-xl bg-slate-50 border border-slate-100 transform hover:translate-x-2 transition-transform duration-300">
            <span class="text-2xl">🏗️</span>
            <p class="text-xs sm:text-sm text-slate-700 font-medium">Konstruksi Infrastruktur Berskala Besar</p>
          </div>
        </div>
      </div>

      <!-- FITUR BAWAH -->
      <div class="bg-emerald-950 p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center border-t border-amber-500/30 w-full text-white animate-fade-in-up">
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
      fullText: 'Delivering Excellence, Building the Future',
      typedText: '',
      typingIndex: 0,
      isOperational: false,
      operationalStatusText: 'Memeriksa status operasional...',
      features: [
        { icon: '🚛', label: 'DISTRIBUSI' },
        { icon: '🤝', label: 'TRADING' },
        { icon: '🏗️', label: 'CONSTRUCTION' },
        { icon: '🏢', label: 'WAREHOUSING' }
      ]
    }
  },
  mounted() {
    this.startTypewriter();
    this.checkOperationalHours();
    // Memperbarui status jam operasional setiap 1 menit secara otomatis
    this.timer = setInterval(this.checkOperationalHours, 60000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  methods: {
    startTypewriter() {
      if (this.typingIndex < this.fullText.length) {
        this.typedText += this.fullText.charAt(this.typingIndex);
        this.typingIndex++;
        setTimeout(this.startTypewriter, 75);
      }
    },
    checkOperationalHours() {
      const now = new Date();
      const options = { timeZone: 'Asia/Jakarta', hour: 'numeric', minute: 'numeric', weekday: 'short', hour12: false };
      
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      
      let weekday = '';
      let hour = 0;
      let minute = 0;

      parts.forEach(part => {
        if (part.type === 'weekday') weekday = part.value;
        if (part.type === 'hour') hour = parseInt(part.value, 10);
        if (part.type === 'minute') minute = parseInt(part.value, 10);
      });

      // Validasi Hari Kerja: Senin (Mon) sampai Jumat (Fri)
      const isWorkDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday);
      
      // Validasi Jam Kerja: 08:30 s.d. 17:00 WIB
      const isAfterOpen = (hour > 8) || (hour === 8 && minute >= 30);
      const isBeforeClose = hour < 17;
      const isWorkHour = isAfterOpen && isBeforeClose;

      if (isWorkDay && isWorkHour) {
        this.isOperational = true;
        this.operationalStatusText = '🟢 Status: Buka • Siap Melayani';
      } else {
        this.isOperational = false;
        this.operationalStatusText = '🔴 Status: Tutup • Buka Kembali Senin Pukul 08:30 WIB';
      }
    }
  }
}
</script>

<style>
@keyframes smoothFadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInCardLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fadeInUpFooter {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-smooth-fade-in {
  animation: smoothFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-slide-down {
  animation: slideDown 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.animate-fade-in-left {
  animation: fadeInCardLeft 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;
}
.animate-fade-in-up {
  animation: fadeInUpFooter 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}
</style>