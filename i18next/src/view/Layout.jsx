import { Link, Outlet } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import { useTranslationsContext } from '../contexts/useTranslationsContext';


function Layout() {
  const {t} = useTranslation('Common');
  const {language,changeLanguage} = useTranslationsContext();
  return (
    <>
        <nav>
            <ul>
            <li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            </ul>
        </nav>
        <p>{t("language")}: {language}</p>
        <button onClick={changeLanguage}>{t("button")}</button>
        <Outlet/>
    </>
  )
}

export default Layout