import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const updates = [
  { id: "1", title: "Sharing Supplements", img: "/assets/images/img19.jpeg", description: "Visit any of our branches and get Steremed and Sterevite syrup for free.", },
  { id: "2", title: "Loyalty Card!!!", img: "/assets/images/img4.jpg", description: "Our loyal customers have not been forggotten. Visit any of our branch and get your loyalty card. This will ensure 5% off any product you get from us!!!", },
  { id: "3", title: "Delivery", img: "/assets/images/img20.jpeg", description: "We deliver nationwide. Just make a call and your delivery will be made ASAP!!", },
];

export function LatestUpdates() {
  return (
    <section className="container mx-auto px-4 mt-12">
      <h3 className="text-xl font-semibold mb-4 text-[#2d3738] tracking-wider uppercase">Latest Updates</h3>
      <div className="overflow-x-auto pb-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {updates.map((u) => (
            <Link key={u.id} href='/' className="group block">
                <Card className="flex-shrink-0 relative overflow-hidden h-60 bg-gray-200 rounded-none">
                    <img src={u.img} alt={u.title} className="hidden lg:block h-40 w-full object-cover" />
                    <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center p-4">
                        <h4 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">{u.title}</h4>
                        <p className="text-center text-white text-sm tracking-wide">
                            {u.description}
                        </p>
                    </div>
                    <CardContent>
                        <CardTitle className="text-sm tracking-wide uppercase text-[#2d3738] pt-10 lg:pt-7">{u.title}</CardTitle>
                        <p className="mt-2 text-xs lg:hidden text-[#2d3738] tracking-wide">{u.description}</p>
                    </CardContent>
                </Card>
            </Link>
        ))}
      </div>
    </section>
  );
}
