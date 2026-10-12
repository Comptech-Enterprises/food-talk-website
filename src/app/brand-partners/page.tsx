import type { Metadata } from "next";
import PartnerPage from "@/components/PartnerPage";

export const metadata: Metadata = {
  title: "For Brand Partners",
  description: "Partner with Food Talk India as a brand.",
};

export default function BrandPartnersPage() {
  return (
    <PartnerPage
      eyebrow="Work with us"
      title={["FOR BRAND", "PARTNERS."]}
      intro="Want your brand at our tables? Leave your details and we will get in touch."
    />
  );
}
