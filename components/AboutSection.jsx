export default function AboutSection() {
  return (
    <section className="text-red-500">
      <div data-aos="fade-right"className="bg-[#d9d9d9] text-center py-8">
        <h1 className="text-4xl font-bold uppercase">
          PRIGEN RAYA COOKIES
        </h1>

        <h2 className="text-4xl font-bold mt-5">
          “Kelezatan Lebaran, Setiap Saat”
        </h2>
      </div>

      <div data-aos="fade-right"className="px-8 py-12 grid grid-cols-3 gap-16 text-white">
        <div>
          <h3 className="text-center text-3xl font-bold mb-4 text-white">Siapa Kami?</h3>
          <p className="text-center text-2xl leading-relaxed text-white">
            Selamat datang di Prigen Raya Cookies, tempat di mana cita rasa
            manis dan kualitas terbaik berpadu dalam setiap gigitan. Kami hadir
            untuk menghadirkan aneka cookies premium yang dibuat dengan bahan
            pilihan, resep berkualitas, dan proses pembuatan yang higienis
            sehingga menghasilkan rasa yang lezat dan berkesan.
          </p>
        </div>

        <div>
          <h3 className="text-center text-3xl font-bold mb-4 text-white">Komitmen Kami</h3>
          <p className="text-center text-2xl leading-relaxed text-white">
            Prigen Raya Cookies berkomitmen untuk memberikan produk terbaik bagi
            pelanggan, mulai dari cookies klasik hingga varian modern yang cocok
            dinikmati bersama keluarga, teman, maupun sebagai hadiah spesial di
            berbagai momen istimewa seperti Hari Raya, ulang tahun, dan acara
            keluarga.
          </p>
        </div>

        <div data-aos="fade-right">
          <h3 className="text-center text-3xl font-bold mb-4 text-white">
            Kualitas dan Kepuasan Pelanggan
          </h3>
          <p className="text-center text-2xl leading-relaxed text-white">
            Dengan tampilan produk yang menarik serta rasa yang khas, kami ingin
            menjadi pilihan utama bagi pecinta kue kering di Indonesia.
            Kepuasan pelanggan adalah prioritas kami, sehingga kami selalu
            menjaga kualitas rasa, pelayanan, dan inovasi produk agar tetap
            menjadi favorit semua kalangan.
          </p>
        </div>
      </div>

      <div data-aos="fade-right" className="text-center max-w-4xl mx-auto pb-14">
        <h3 className="text-3xl font-bold mb-4 text-white">Harapan Kami</h3>
        <p className="text-2xl leading-relaxed text-white">
          Kami berharap Prigen Raya Cookies dapat menjadi bagian dari setiap
          momen manis Anda. Terima kasih telah mempercayai kami untuk
          menghadirkan kebahagiaan melalui setiap sajian cookies yang dibuat
          dengan penuh cinta dan kualitas terbaik.
        </p>
      </div>
    </section>
  );
}