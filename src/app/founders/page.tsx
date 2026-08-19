import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Founders from "@/components/Founders";

export const metadata: Metadata = {
  title: "Founders",
  description:
    "Meet Shuchir Suri and Anjali Batra — the pair behind Food Talk India.",
};

export default function FoundersPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Founders standalone />
      </main>
      <Footer />
    </>
  );
}
