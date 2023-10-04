import React from "react";

const Portofolio = () => {
  return (
    <section
      id="portofolio"
      className="w-full min-h-screen bg-light2 text-dark dark:bg-dark2 dark:text-white flex justify-center"
    >
      <div className="flex flex-col min-h-screen w-full items-center">
        {/* Portofolio Title */}
        <div
          className="h-28 flex items-end w-full justify-center py-6 mt-4"
          data-aos="fade-down"
        >
          <h1 className="text-4xl font-semibold text-primary">Portofolio</h1>
        </div>

        {/* Portofolio Content */}
        <div className="max-w-5xl h-full flex justify-center items-center flex-wrap gap-20 py-5">
          <div
            id="card"
            className="w-80 lg:w-96 text-dark dark:text-white rounded-md overflow-hidden"
            data-aos="zoom-in-up"
          >
            <div className="rounded-md overflow-hidden border border-primary">
              <img
                src="/portofolio-img/portofolio-4.png"
                alt="portofolio-img-1"
              />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-2xl font-bold text-center text-primary">
                Landing Page
              </h4>
              <p className="text-base">
                Membuat website landing page. Website yang bertujuan untuk
                pemasaran atau promosi. Berisi informasi dari sebuah perusahaan
                atau brand tertentu agar dapat menjangkau klien lebih luas.
                Dibuat menggunakan Bootstrap.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="w-80 lg:w-96 text-dark dark:text-white rounded-md overflow-hidden"
            data-aos="zoom-in-up"
          >
            <div className="rounded-md overflow-hidden border border-primary">
              <img
                src="/portofolio-img/portofolio-1.png"
                alt="portofolio-img-1"
              />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-2xl font-bold text-center text-primary">
                Contact App
              </h4>
              <p className="text-base">
                Membuat aplikasi pengelola daftar kontak. Aplikasi yang dapat
                menambahkan data kontak seseorang, membaca detail kontak,
                mengedit dan menghapus data kontak. Dibuat menggunakan
                Bootstrap, NodeJS, dan Express.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="w-80 lg:w-96 text-dark dark:text-white rounded-md overflow-hidden"
            data-aos="zoom-in-up"
          >
            <div className="rounded-md overflow-hidden border border-primary">
              <img
                src="/portofolio-img/portofolio.png"
                alt="portofolio-img-1"
              />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-2xl font-bold text-center text-primary">
                Search Movie App
              </h4>
              <p className="text-base">
                Membuat aplikasi pencari film. Aplikasi yang dapat digunakan
                untuk mencari film beserta informasi dari film tersebut. Seperti
                judul, genre, tahun rilis, sutradara, dll. Dibuat menggunakan
                teknik Fetch API menggunakan Javascript, Bootstrap dan bantuan
                library JQuery.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="w-80 lg:w-96 text-dark dark:text-white rounded-md overflow-hidden"
            data-aos="zoom-in-up"
          >
            <div className="rounded-md overflow-hidden border border-primary">
              <img
                src="/portofolio-img/portofolio-3.png"
                alt="portofolio-img-1"
              />
            </div>
            <div className="p-4">
              <h4 className="mb-2 text-2xl font-bold text-center text-primary">
                Blog Posts App
              </h4>
              <p className="text-base">
                Membuat aplikasi pengelola blog postingan. Aplikasi yang dapat
                menambahkan data postingan, membaca, mengubah, menghapus dan
                bahkan user dapat Registrasi jika belum mempunyai akun, kemudian
                login atau logout. Dibuat menggunakan Bootstrap dan Laravel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
