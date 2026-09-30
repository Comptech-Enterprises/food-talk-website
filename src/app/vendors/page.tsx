import type { Metadata } from "next";
import PartnerPage from "@/components/PartnerPage";

export const metadata: Metadata = {
  title: "For Vendors",
  description: "Work with Food Talk India as a venue or vendor partner.",
};

export default function VendorsPage() {
  return (
    <PartnerPage
      eyebrow="Work with us"
      title={["FOR", "VENDORS."]}
      intro="Run a venue or a food and drink business? Leave your details and we will get in touch."
      points={[
        {
          title: "Venues",
          text: "Restaurants, bars and spaces that can host chef-led dinners, pop-ups and nightlife formats.",
        },
        {
          title: "Vendors",
          text: "Makers, suppliers and food and drink businesses that want a place at our experiences.",
        },
        {
          title: "Built together",
          text: "We work with you on the format, the menu and the room, so every night feels considered.",
        },
      ]}
    />
  );
}
