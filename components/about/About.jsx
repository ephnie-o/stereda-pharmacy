import { Phone, Clock, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8 text-[#80b949]" />,
      bgcolor: "bg-white",
      title: "Our Vision",
      description: "To expand our reach with the best health service provision to our client nation-wide, backed by the zeal to help all persons live a heathier life."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      bgcolor: "bg-[#80b949]",
      title: <p className="text-white">Our Mission</p>,
      description: <p className="text-white">To render a quality and trusted service to Ghanaians and the sub-region. To spearhead proper drug administration, health-care advice and products to the general public.</p>
    },
    {
      icon: <Clock className="h-8 w-8 text-[#80b949]" />,
      bgcolor: "bg-white",
      title: "Our Values",
      description: "We make it our mandate to provide you with the best pharmaceutical service, guided by the need to promote and facilitate your journey towards a healthy living."
    }
  ]

  const services = [
    {
        image: '/assets/images/ceo1.jpeg',
        title: "Prescription Services",
        description: "Accurate and timely dispensing of medications with professional consultation."
    },
    {
        image: '/assets/images/ceo2.jpeg',
        title: "Health Screenings",
        description: "Comprehensive health checks including blood pressure and glucose monitoring."
    },
    {
        image: '/assets/images/ceo4.jpg',
        title: "Immunizations",
        description: "Vaccinations for flu, COVID-19, and other preventable diseases."
    },
    {
        image: '/assets/images/ceo5.jpg',
        title: "Medication Therapy Management",
        description: "Personalized reviews of all your medications to optimize results."
    },
    {
        image: '/assets/images/ceo6.jpg',
        title: "Medication Therapy Management",
        description: "Personalized reviews of all your medications to optimize results."
    },
  ]

  return (
    <>
      <div>
        {/* Hero Section */}
        <section className="relative h-96 w-full overflow-hidden bg-primary pb-24">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/img12.jpg"
              alt="Pharmacy team"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 flex h-full items-center text-center mt-6">
            <div className="max-w-2xl space-y-4 text-white p-8 backdrop-blur-sm bg-black opacity-60 border border-gray-600/20 shadow-lg w-2/3 flex flex-col justify-center items-center ml-10">
              <h1 className="text-xl font-bold uppercase tracking-wide">About Our Pharmacy</h1>
              <p className="text-sm">
                We make it our mandate to provide you with the best pharmaceutical service, guided by the need to promote and facilitate your journey towards healthy living.
              </p>
              <Button className="bg-[#80b949] hover:bg-[#5b8432]" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-20 py-16 mx-10 -mt-24">
          <div className="container">
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className={`rounded-sm border p-8 text-center shadow-sm transition-all hover:shadow-md ${feature.bgcolor}`}>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold tracking-wide">{feature.title}</h3>
                  <div className="text-muted-foreground">{feature.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="bg-secondary py-16">
          <div className="container px-10">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <Image
                  src="/assets/images/ceo3.jpeg"
                  alt="Our Founder and CEO"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg w-sm lg:w-l md:w-xl"
                />
              </div>
              <div className="w-full">
                <h2 className="mb-4 text-2xl font-bold tracking-wide">Discover Our Pharmacy Story</h2>
                <div className="mb-6 text-md text-muted-foreground">
                    Founded in 2008, Stereda Pharmacy has become a beacon of excellence in Ghana's pharmaceutical industry. With over a decade of dedicated service, we have grown from a single location to multiple branches across the country,including our prominent locations in Weija, Adade, Kasoa, and Afrikiko. Our journey has been one of unwavering commitment to providing high-quality healthcare services, ensuring that every Ghanaian has access to the best pharmaceutical care, no matter their location or financial situation.
                </div>
                <div className="mb-6 text-md text-muted-foreground">
                    Our success is guided by the visionary leadership of our CEO, Mr. Stephen Kingsley Odoom. Under his stewardship, Stereda Pharmacy has not only expanded its reach but also earned recognition for its excellence. In 2023, Mr. Odoom was honored with several prestigious awards, including the Small Medium Enterprise of the Year Award by the Ghana CEO Awards, the Ghana Pharma Award, and the CEO of the Year by the Ghana - West Africa Healthcare Excellence Awards. These accolades are a testament to his dedication and the trust our clients place in us.
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 mx-10">
          <div className="container">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-wide">Our Commitment to You</h2>
              <div className="mt-4 text-md text-muted-foreground text-left">
                Stereda Pharmacy is more than just a place to get your prescriptions filled. We are a partner in your health journey, committed to ensuring that you receive the best possible care. Whether you visit us for a routine prescription, a health check-up, or expert advice, you can trust that you are in good hands.
              </div>
              <div className="mt-4 text-md text-muted-foreground text-left">
                Thank you for choosing Stereda Pharmacy. We look forward to continuing to serve you with integrity, dedication, and the highest standards of pharmaceutical care.
              </div>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2">
                {services.slice(0, 5).map((service, index) => (
                    <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        {/* <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div>
                            <h3 className="text-white font-semibold">{service.title}</h3>
                            <p className="text-white/80 text-sm">{service.description}</p>
                            </div>
                        </div> */}
                    </div>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}