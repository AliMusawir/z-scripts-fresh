import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import Clip from "#/icons/clip.svg?react";
import { IoAttach } from "react-icons/io5";

export function AttachImageLabel() {
  const { t } = useTranslation();
  return (
    <div className="flex self-start items-center text-primary text-xs leading-[18px] -tracking-[0.08px] cursor-pointer">
      <IoAttach className="text-lg" />
      {t(I18nKey.LANDING$ATTACH_IMAGES)}
    </div>
  );
}
