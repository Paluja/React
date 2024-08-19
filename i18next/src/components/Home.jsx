
import { useTranslation } from 'react-i18next';
function Home() {
  const {t} = useTranslation('Home');
  
  return (
    <>
        <p>{t("title")}</p>
    </>
  )
}

export default Home