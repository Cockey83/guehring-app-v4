
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function BorrForm() {
  const router = useRouter();
  const [language, setLanguage] = useState(router.query.lang || "sv");
  const t = (sv, en) => (language === "sv" ? sv : en);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          {t("Förfrågan Specialverktyg – Borr", "Special Tool Request – Drill")}
        </h1>

        <form className="space-y-4">
          <input type="text" placeholder={t("Kundnamn", "Customer Name")} className="w-full border p-2 rounded" />
          <input type="text" placeholder={t("Kontaktperson", "Contact Person")} className="w-full border p-2 rounded" />
          <input type="text" placeholder={t("Artikelnummer", "Article Number")} className="w-full border p-2 rounded" />
          <input type="text" placeholder={t("Håldiameter", "Hole Diameter")} className="w-full border p-2 rounded" />
          <input type="text" placeholder={t("Tolerans (t.ex. H7)", "Tolerance (e.g. H7)")} className="w-full border p-2 rounded" />
          <input type="text" placeholder={t("Verktygslängd", "Tool Length")} className="w-full border p-2 rounded" />
          <input type="text" placeholder={t("Antal verktyg", "Number of Tools")} className="w-full border p-2 rounded" />

          <div>
            <label className="block font-semibold mb-1">{t("Material som bearbetas", "Material to be machined")}</label>
            <select className="w-full border p-2 rounded">
              <option value="">--</option>
              <option>Stål / Steel</option>
              <option>Gjutjärn / Cast Iron</option>
              <option>Aluminium</option>
              <option>Rostfritt / Stainless</option>
            </select>
          </div>

          <textarea placeholder={t("Användningsområde / Kommentar", "Application / Comment")} className="w-full border p-2 rounded" rows={4} />

          <div>
            <label className="block font-semibold mb-1">{t("Bifoga filer eller ta bild", "Attach files or take photo")}</label>
            <input type="file" accept="image/*" capture="environment" className="w-full" />
          </div>

          <div className="flex space-x-4 mt-6">
            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded">
              {t("Skicka som e-post", "Send as Email")}
            </button>
            <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded">
              {t("Spara som PDF", "Save as PDF")}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
