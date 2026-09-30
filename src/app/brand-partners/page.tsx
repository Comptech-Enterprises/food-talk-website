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
      points={[
        {
          title: "Real audience",
          text: "Put your brand in front of people who care deeply about food, drink and the stories behind them.",
        },
        {
          title: "Inside the experience",
          text: "From Serious Eaters Club dinners to Cookout and Liquid Studio, the partnership becomes part of the night.",
        },
        {
          title: "Native, not an ad",
          text: "We shape the collaboration with you so it feels like it belongs in the room.",
        },
      ]}
    />
  );
}
