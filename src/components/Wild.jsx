import React from 'react';

const Wild = () => {
  return (
    <div className="w-full flex flex-col items-center px-4 md:px-10 lg:px-20 py-10">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 text-green-800">
        Yovvoyi hayvonlar
      </h1>
      <div className="max-w-3xl text-gray-700 text-[18px] leading-[1.8]">
        <p className="mb-5">
          <strong>Yovvoyi hayvonlar — tabiatning eng qiziqarli va sirli mavjudotlaridan biridir.</strong> 
          Ular o`rmon, sahro, tog`, cho`l, daryo va savannalarda yashaydi. Har bir turning o`ziga xos 
          odatlari, yashash uslubi va himoya strategiyalari mavjud.
        </p>
        <p className="mb-5">
          Yovvoyi hayvonlar ekologik muvozanatni saqlashda muhim rol o`ynaydi. Ular nafaqat tabiat 
          go`zalligini boyitadi, balki butun ekotizimning barqaror ishlashiga hissa qo`shadi. Shuning 
          uchun ularni himoya qilish va tabiatni asrash har birimizning vazifamizdir.
        </p>
        <p className="mb-5">
          Bugungi kunda yo`lbars, sher, gepard, ayiqlar, bo`rilar va boshqa ko`plab yovvoyi hayvonlar 
          yo`qolib ketish xavfi ostida turibdi. Ularni asrash uchun maxsus qo`riqxonalar va tabiat 
          bog`lari tashkil etilgan.
        </p>
        <p className="font-semibold text-gray-800">
          Tabiatni sevish — hayvonlarni himoya qilishdan boshlanadi.
        </p>
      </div>

    </div>
  );
};

export default Wild;
