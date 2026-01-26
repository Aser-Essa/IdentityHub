import CopywriteAndSocialLinks from "../components/CopywriteAndSocialLinks";
import LogoAndFooterLinks from "../components/LogoAndFooterLinks";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="w-full space-y-5 p-4 pb-5 sm:p-8">
        <LogoAndFooterLinks />
        <CopywriteAndSocialLinks />
      </div>
    </footer>
  );
}
