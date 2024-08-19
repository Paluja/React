
import { useTranslation } from 'react-i18next';

function About() {
  const {t} = useTranslation('About');  
  
  return (
    <>
        <h2>About</h2>
        <p>{t("title")}</p>
    </>
  )
}

export default About