import React from 'react';

const DomesticAnimals = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 text-green-800">
        Uy hayvonlari
      </h1>
      <div className="max-w-3xl text-gray-700 text-[18px] leading-[1.8]">
        <p className="mb-5">
          <strong>Uy hayvonlari — inson bilan birga yashaydigan, unga yordam beradigan yoki do`st bo`lib qoladigan hayvonlardir.</strong>
          Ular ko`p asrlar davomida odamlar tomonidan boqib kelinadi va turli maqsadlarda ishlatiladi: qo`riqlash, ov qilish, transport,
          oziq-ovqat manbai va eng muhimi — sadoqatli hamroh sifatida.
        </p>
        <p className="mb-5">
          Eng mashhur uy hayvonlariga itlar, mushuklar, quyonlar, qushlar, baliqlar, qo`ylar, echkilar va otlar kiradi.
          Har bir turning o`ziga xos xulqi, odatlari va parvarish talab qiladigan jihatlari mavjud.
        </p>
        <p className="mb-5">
          Uy hayvonlari odamlar hayotiga quvonch, mehr va iliqlik olib kiradi. Ular stressni kamaytiradi, kayfiyatni ko`taradi
          va ko`plab oilalarda haqiqiy a`zoga aylanadi. Hayvonlarni to`g`ri parvarish qilish, ularni sevish va hurmat qilish —
          har bir egasining vazifasidir.
        </p>
        <p className="font-semibold text-gray-800">
          Uy hayvonlariga mehr — mas`uliyat va insoniylik belgisi.
        </p>
      </div>

    </div>
  );
};

export default DomesticAnimals;
