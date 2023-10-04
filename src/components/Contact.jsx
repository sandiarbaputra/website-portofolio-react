import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Kirim data ke SheetDB API menggunakan fetch atau Axios
    const formDataToSend = new FormData();
    formDataToSend.append("data[nama]", formData.nama);
    formDataToSend.append("data[email]", formData.email);
    formDataToSend.append("data[pesan]", formData.pesan);

    fetch("https://sheetdb.io/api/v1/zem95hzon6kxz", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle respons di sini (misalnya, tampilkan pesan sukses)
        console.log(data);
        setFormSubmitted(true); // Setel state formSubmitted menjadi true
        setFormData({ nama: "", email: "", pesan: "" }); // Kosongkan formulir
        setTimeout(() => {
          setFormSubmitted(false); // Setel formSubmitted kembali menjadi false setelah beberapa detik
        }, 3000); // Misalnya, kembali ke keadaan semula setelah 3 detik
      });
  };

  return (
    <section
      id="contact"
      className="w-full min-h-screen bg-light text-dark dark:bg-dark dark:text-white pb-10"
    >
      <div className="w-full min-h-screen md:px-20 lg:flex lg:justify-center">
        {/* Div LG */}
        <div className="hidden lg:block min-h-screen w-full">
          <div className="flex min-h-screen items-center">
            <div className="hidden lg:block w-1/2 min-h-screen">
              <div className="min-h-screen w-full flex flex-col justify-center">
                {/* Content Title | LG */}
                <div className="font-semibold px-10 flex flex-col items-start justify-center gap-y-5 min-h-screen">
                  <div
                    className="w-full h-24 flex justify-center items-end -mt-[90px]"
                    data-aos="fade-down"
                  >
                    <h1 className="text-4xl font-semibold text-primary">
                      Contact Me
                    </h1>
                  </div>
                  <div data-aos="fade-up">
                    <p>
                      Jika anda tertarik ingin menggunakan jasa pembuatan
                      website saya. Silahkan hubungi social media saya atau
                      langsung isi form berikut.
                    </p>
                  </div>

                  <div
                    className="flex flex-col items-start gap-y-4 w-full"
                    data-aos="fade-up"
                  >
                    {/* Contact Mobile */}
                    <div className="flex gap-x-4 md:hidden">
                      <a href="https://wa.link/c4mnrp">
                        <img
                          src="/icon-contact/whatsapp.png"
                          alt="whatsapp"
                          width={25}
                        />
                        <p>+62-838-4133-0243</p>
                      </a>
                    </div>
                    <div className="flex gap-x-4 md:hidden">
                      <img src="/icon-contact/mail.png" alt="" width={25} />
                      <p>sandiarba09@gmail.com</p>
                    </div>
                    <div className="flex gap-x-4 md:hidden">
                      <a
                        href="https://github.com/sandiarbaputra"
                        target="_blank"
                        className="flex"
                      >
                        <img src="/icon-contact/github.png" alt="" width={25} />
                        <p className="ms-4">sandiarbaputra</p>
                      </a>
                    </div>
                    <div className="flex gap-x-4 md:hidden">
                      <a
                        href="https://web.facebook.com/sandi.ar.52"
                        target="_blank"
                        className="flex"
                      >
                        <img
                          src="/icon-contact/facebook.png"
                          alt=""
                          width={25}
                        />
                        <p className="ms-4">Sandi Ar</p>
                      </a>
                    </div>
                    <div className="flex gap-x-4 md:hidden">
                      <a
                        href="https://www.instagram.com/_arbaa_/"
                        target="_blank"
                        className="flex"
                      >
                        <img
                          src="/icon-contact/instagram.png"
                          alt=""
                          width={25}
                        />
                        <p className="ms-4">_arbaa_</p>
                      </a>
                    </div>
                    <div className="flex gap-x-4 md:hidden">
                      <a
                        href="https://github.com/sandiarbaputra"
                        target="_blank"
                        className="flex"
                      >
                        <img
                          src="/icon-contact/tik-tok.png"
                          alt=""
                          width={25}
                        />
                        <p className="ms-4">twoliong</p>
                      </a>
                    </div>

                    {/* Contact Icon | MD & LG */}
                    <div className="hidden md:block w-full">
                      <div className="flex justify-around">
                        <div className="w-full flex flex-col gap-y-2 items-start">
                          <div className="flex gap-x-4">
                            <a
                              href="https://wa.link/c4mnrp"
                              target="_blank"
                              className="flex"
                            >
                              <img
                                src="/icon-contact/whatsapp.png"
                                alt="github"
                                width={25}
                              />
                              <p className="ms-4">+62-838-4133-0243</p>
                            </a>
                          </div>
                          <div className="flex gap-x-4">
                            <img
                              src="/icon-contact/mail.png"
                              alt=""
                              width={25}
                            />
                            <p>sandiarba09@gmail.com</p>
                          </div>
                          <div className="flex gap-x-4">
                            <a
                              href="https://github.com/sandiarbaputra"
                              target="_blank"
                              className="flex"
                            >
                              <img
                                src="/icon-contact/github.png"
                                alt="github"
                                width={25}
                              />
                              <p className="ms-4">sandiarbaputra</p>
                            </a>
                          </div>
                          <div className="flex gap-x-4">
                            <a
                              href="https://web.facebook.com/sandi.ar.52"
                              target="_blank"
                              className="flex"
                            >
                              <img
                                src="/icon-contact/facebook.png"
                                alt="facebook"
                                width={25}
                              />
                              <p className="ms-4">Sandi Ar</p>
                            </a>
                          </div>
                          <div className="flex gap-x-4">
                            <a
                              href="https://www.instagram.com/_arbaa_/"
                              target="_blank"
                              className="flex"
                            >
                              <img
                                src="/icon-contact/instagram.png"
                                alt="instagram"
                                width={25}
                              />
                              <p className="ms-4">_arbaa_</p>
                            </a>
                          </div>
                          <div className="flex gap-x-4">
                            <a
                              href="https://www.tiktok.com/@twoliong"
                              target="_blank"
                              className="flex"
                            >
                              <img
                                src="/icon-contact/tik-tok.png"
                                alt="tiktok"
                                width={25}
                              />
                              <p className="ms-4">twoliong</p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form LG*/}
            <div className="mt-4 w-1/2 min-h-screen flex flex-col justify-center">
              <div
                className="flex justify-center items-center"
                data-aos="fade-down"
              >
                <h1 className="text-4xl font-semibold text-primary">Form</h1>
              </div>
              <form
                action="https://sheetdb.io/api/v1/zem95hzon6kxz"
                method="post"
                id="sheetdb-form"
                className="flex flex-col w-10/12 md:w-11/12"
                onSubmit={handleSubmit}
                data-aos="fade-up"
              >
                <label htmlFor="namaL">Nama</label>
                <input
                  type="text"
                  name="nama"
                  id="namaL"
                  className="rounded-md h-10 mb-2 p-2 text-dark bg-slate-300 dark:bg-white"
                  value={formData.nama}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="emailL">Email</label>
                <input
                  type="email"
                  name="email"
                  id="emailL"
                  className="rounded-md h-10 mb-2 p-2 text-dark bg-slate-300 dark:bg-white"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="pesanL">Pesan</label>
                <textarea
                  name="pesan"
                  id="pesanL"
                  cols="30"
                  rows="10"
                  className="h-28 rounded-md mb-2 p-2 text-dark bg-slate-300 dark:bg-white"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="py-2 text-white bg-primary rounded-full my-4"
                >
                  Kirim Pesan!
                </button>
                {formSubmitted && (
                  <div className="text-green-500">
                    Terimakasih. Pesan berhasil dikirim!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Content Mobile & MD */}
        <div
          className="font-semibold px-10 flex flex-col items-start gap-y-5 lg:hidden mb-10"
          data-aos="fade-up"
        >
          <div
            className="w-full h-24 flex justify-center items-end lg:hidden"
            data-aos="fade-down"
          >
            <h1 className="text-4xl font-semibold text-primary">Contact Me</h1>
          </div>
          <div>
            <p>
              Jika anda tertarik ingin menggunakan jasa pembuatan website saya.
              Silahkan hubungi social media saya atau langsung isi form berikut.
            </p>
          </div>
          <div className="flex flex-col items-start gap-y-2 w-full">
            <div className="flex gap-x-4 md:hidden">
              <img src="/icon-contact/whatsapp.png" alt="" width={25} />
              <p>+62-838-4133-0243</p>
            </div>
            <div className="flex gap-x-4 md:hidden">
              <img src="/icon-contact/mail.png" alt="" width={25} />
              <p>sandiarba09@gmail.com</p>
            </div>
            <div className="flex gap-x-4 md:hidden">
              <a href="" target="_blank" className="flex">
                <img src="/icon-contact/github.png" alt="" width={25} />
                <p className="ms-4">sandiarbaputra.github.io</p>
              </a>
            </div>
            <div className="flex gap-x-4 md:hidden">
              <a
                href="https://web.facebook.com/sandi.ar.52"
                target="_blank"
                className="flex"
              >
                <img src="/icon-contact/facebook.png" alt="" width={25} />
                <p className="ms-4">Sandi Ar</p>
              </a>
            </div>
            <div className="flex gap-x-4 md:hidden">
              <a
                href="https://www.instagram.com/_arbaa_/"
                target="_blank"
                className="flex"
              >
                <img src="/icon-contact/instagram.png" alt="" width={25} />
                <p className="ms-4">_arbaa_</p>
              </a>
            </div>
            <div className="flex gap-x-4 md:hidden">
              <a href="" target="_blank" className="flex">
                <img src="/icon-contact/tik-tok.png" alt="" width={25} />
                <p className="ms-4">twoliong</p>
              </a>
            </div>

            {/* Contact Icon | MD */}
            <div className="hidden md:block w-full">
              <div className="flex justify-around">
                <div className="w-1/2 flex flex-col gap-y-2">
                  <div className="flex gap-x-4">
                    <img src="/icon-contact/whatsapp.png" alt="" width={25} />
                    <p>+62-838-4133-0243</p>
                  </div>
                  <div className="flex gap-x-4">
                    <img src="/icon-contact/mail.png" alt="" width={25} />
                    <p>sandiarba09@gmail.com</p>
                  </div>
                  <div className="flex gap-x-4">
                    <a href="" target="_blank" className="flex">
                      <img src="/icon-contact/github.png" alt="" width={25} />
                      <p className="ms-4">sandiarbaputra.github.io</p>
                    </a>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-2">
                  <div className="flex gap-x-4">
                    <a
                      href="https://web.facebook.com/sandi.ar.52"
                      target="_blank"
                      className="flex"
                    >
                      <img src="/icon-contact/facebook.png" alt="" width={25} />
                      <p className="ms-4">Sandi Ar</p>
                    </a>
                  </div>
                  <div className="flex gap-x-4">
                    <a
                      href="https://www.instagram.com/_arbaa_/"
                      target="_blank"
                      className="flex"
                    >
                      <img
                        src="/icon-contact/instagram.png"
                        alt=""
                        width={25}
                      />
                      <p className="ms-4">_arbaa_</p>
                    </a>
                  </div>
                  <div className="flex gap-x-4">
                    <a href="" target="_blank" className="flex">
                      <img src="/icon-contact/tik-tok.png" alt="" width={25} />
                      <p className="ms-4">twoliong</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Mobile & MD*/}
        <div
          className="flex flex-col items-center justify-center lg:hidden"
          data-aos="fade-up"
        >
          <div className="flex justify-center items-center" data-aos="fade-up">
            <h1 className="text-4xl font-semibold text-primary">Form</h1>
          </div>
          <form
            action="https://sheetdb.io/api/v1/zem95hzon6kxz"
            method="post"
            id="sheetdb-form"
            className="flex flex-col w-10/12 md:w-11/12"
            onSubmit={handleSubmit}
          >
            <label htmlFor="namaL">Nama</label>
            <input
              type="text"
              name="nama"
              id="namaL"
              className="rounded-md h-10 mb-2 p-2 text-dark"
              value={formData.nama}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="emailL">Email</label>
            <input
              type="email"
              name="email"
              id="emailL"
              className="rounded-md h-10 mb-2 p-2 text-dark"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="pesanL">Pesan</label>
            <textarea
              name="pesan"
              id="pesanL"
              cols="30"
              rows="10"
              className="h-28 rounded-md mb-2 p-2 text-dark"
              value={formData.pesan}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit" className="py-2 bg-primary rounded-full my-4">
              Kirim Pesan!
            </button>
            {formSubmitted && (
              <div className="text-green-500">
                Terimakasih. Pesan berhasil dikirim!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
