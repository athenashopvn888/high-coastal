import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";

export const metadata: Metadata = {
  title: "Delivery Coming Soon — High Coastal Cannabis | Mississauga",
  description: "Get notified when High Coastal Cannabis launches same-day weed delivery across Mississauga and surrounding areas.",
  alternates: {
    canonical: "https://highcoastalcannabis.com/delivery",
  },
};

export default function DeliveryPage() {
  return <DeliveryContent />;
}
