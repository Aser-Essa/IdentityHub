import CopywriteAndSocialLinks from "../components/CopywriteAndSocialLinks";
import LogoAndFooterLinks from "../components/LogoAndFooterLinks";

export default function Footer() {
  return (
    <footer className="relative h-73.75 md:min-h-62.5">
      <div className="w-full space-y-5 p-4 pb-5 sm:p-8 flex flex-col">
        <LogoAndFooterLinks />
        <CopywriteAndSocialLinks />
      </div>
    </footer>
  );
}
