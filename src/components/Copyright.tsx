import { Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <Typography align="center" p={0.4} variant="h5" id="footer-text">
      <Link color="inherit" href={t("appData.websiteLink")}>
        {t("appData.copyright")}
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
