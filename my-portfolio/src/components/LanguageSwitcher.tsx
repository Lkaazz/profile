import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageSwitcher = () => {
  const { lang, setLang } = useContext(LanguageContext);
  return (
    <button onClick={() => setLang(lang === "en" ? "pt" : "en")}>
      {lang === "en" ? "PT-BR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
