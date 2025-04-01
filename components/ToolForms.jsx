
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function ToolForms() {
  const router = useRouter();
  const [language, setLanguage] = useState("sv");
  const [toolType, setToolType] = useState("");

  useEffect(() => {
    if (router.isReady && typeof router.query.lang === "string") {
      setLanguage(router.query.lang);
    }
  }, [router.isReady, router.query.lang]);

  const t = (sv, en) => (language === "sv" ? sv : en);

  const handleNext = () => {
    if (toolType) {
      router.push(`/${toolType.toLowerCase().replace(/ /g, "")}?lang=${language}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
          {t("FÖRFRÅGAN SPECIALVERKTYG", "SPECIAL TOOL REQUEST")}
        </h1>

        <div className="mb-4 text-center">
          <label className="mr-2 font-semibold">{t("Språk", "Language")}:</label>
          <select
            className="border rounded px-2 py-1"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="sv">Svenska</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2 text-center">
            {t("Välj verktygstyp", "Select Tool Type")}
          </label>
          <select
            value={toolType}
            onChange={(e) => setToolType(e.target.value)}
            className="w-full border rounded px-2 py-2"
          >
            <option value="">--</option>
            <option value="Borr">{t("Borr", "Drill")}</option>
            <option value="Fräs">{t("Fräs", "Milling")}</option>
            <option value="Gängtapp">{t("Gängtapp", "Tap")}</option>
            <option value="Brotsch">{t("Brotsch", "Reamer")}</option>
            <option value="ToolDesignTOM">Tool Design TOM</option>
          </select>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800"
        >
          {t("Nästa", "Next")}
        </button>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">{t("REKLAMATION", "CLAIM")}</h2>
          <button
            onClick={() => router.push(`/reklamation?lang=${language}`)}
            className="w-full mb-4 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded"
          >
            {t("Till formulär", "Go to form")}
          </button>

          <h2 className="text-xl font-semibold text-blue-900 mb-2">{t("TESTRAPPORT", "TEST REPORT")}</h2>
          <button
            onClick={() => router.push(`/testrapport?lang=${language}`)}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-2 rounded"
          >
            {t("Till formulär", "Go to form")}
          </button>
        </div>
      </div>
    </main>
  );
}
