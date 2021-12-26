import React from "react";

function Contact() {
  return (
    <>
      <div class="grid grid-flow-col grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4">
        <form class="p-10">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Ad
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Rahmi"
              />
              <p class="text-red-500 text-xs italic">
                Lütfen tam şekilde doldurunuz
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Soyad
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Köse"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-Mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
                required={true}
              />
            </div>
          </div>

          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Mesajınız
              </label>
              <textarea
                rows="5"
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div class="flex justify-between w-full px-3">
              <div class="md:flex md:items-center">
                <label class="block text-gray-500 font-bold">
                  <input class="mr-2 leading-tight" type="checkbox" />
                  <span class="text-m font-bold">Kaydet</span>
                </label>
              </div>
              <button
                class="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                Mesaj Gönder
              </button>
            </div>
          </div>
          <p className="py-2 px-2 w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600 font-bold">
            İstiklal Yerleşkesi 15030 / BURDUR
          </p>
          <p className="py-2 px-2 w-full border-b border-gray-200 dark:border-gray-600 font-bold">
            +90 248 213 10 00
          </p>
          <p className="py-2 px-2 w-full border-b border-gray-200 dark:border-gray-600 font-bold">
            rektorluk@mehmetakif.edu.tr
          </p>
          <p className="py-2 px-2 w-full rounded-b-lg font-bold">
            destek@mehmetakif.edu.tr
          </p>
        </form>
        <div
          class="w-full object-cover h-48 lg:w-full md:h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)",
          }}
        ></div>
      </div>
    </>
  );
}

export default Contact;
