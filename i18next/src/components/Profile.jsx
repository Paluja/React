import { useTranslation } from 'react-i18next';
function Profile() {
  const {t} = useTranslation('Profile');
  return (
    <>
        <p>{t("title")}</p>
    </>
  )
}

export default Profile