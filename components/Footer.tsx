import FooterContent from "./FooterContent";
import LogoAndFooterLinks from "./LogoAndFooterLinks";
import CopywriteAndSocialLinks from "./CopywriteAndSocialLinks";

export default function Footer() {
  return (
    <footer className="relative mt-36.5">
      <FooterContent />

      <div className="w-full space-y-5 p-4 pb-5 sm:p-8">
        <LogoAndFooterLinks />

        <CopywriteAndSocialLinks />
      </div>
    </footer>
  );
}
