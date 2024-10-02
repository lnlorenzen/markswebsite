'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Eye, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const translations = {
  en: {
    name: "ClearView Optometry",
    services: "Services",
    about: "About",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    heroTitle: "Your Vision, Our Priority",
    heroSubtitle: "Expert eye care services for the whole family",
    scheduleExam: "Schedule an Eye Exam",
    ourServices: "Our Services",
    comprehensiveExams: "Comprehensive Eye Exams",
    contactLensFittings: "Contact Lens Fittings",
    eyewearSelection: "Eyewear Selection",
    drName: "Dr. Jane Smith",
    hours: "Hours",
    quickLinks: "Quick Links",
    patientForms: "Patient Forms",
    insurance: "Insurance",
  },
  pl: {
    name: "Optometria ClearView",
    services: "Usługi",
    about: "O nas",
    contact: "Kontakt",
    bookAppointment: "Umów wizytę",
    heroTitle: "Twój wzrok, nasz priorytet",
    heroSubtitle: "Profesjonalna opieka okulistyczna dla całej rodziny",
    scheduleExam: "Umów badanie wzroku",
    ourServices: "Nasze usługi",
    comprehensiveExams: "Kompleksowe badania wzroku",
    contactLensFittings: "Dobór soczewek kontaktowych",
    eyewearSelection: "Wybór okularów",
    drName: "Dr Jane Smith",
    hours: "Godziny otwarcia",
    quickLinks: "Szybkie linki",
    patientForms: "Formularze dla pacjentów",
    insurance: "Ubezpieczenie",
  },
}

export default function OptometristWebsite() {
  const [language, setLanguage] = useState<"en" | "pl">("en")
  const t = translations[language]

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === "en" ? "pl" : "en")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Eye className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">{t.name}</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#services" className="text-gray-600 hover:text-blue-600">{t.services}</Link>
            <Link href="#about" className="text-gray-600 hover:text-blue-600">{t.about}</Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600">{t.contact}</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button onClick={toggleLanguage}>
              {language === "en" ? "Polski" : "English"}
            </Button>
            <Button>{t.bookAppointment}</Button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t.heroTitle}</h1>
            <p className="text-xl text-gray-600 mb-8">{t.heroSubtitle}</p>
            <Button size="lg">{t.scheduleExam}</Button>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">{t.ourServices}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t.comprehensiveExams}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Thorough evaluations to ensure optimal eye health and vision.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.contactLensFittings}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Expert fittings for comfortable and clear vision with contact lenses.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>{t.eyewearSelection}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Wide range of frames and lenses to suit your style and vision needs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/placeholder.svg"
                  alt={t.drName}
                  width={400}
                  height={400}
                  className="rounded-full"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t.drName}</h2>
                <p className="text-gray-600 mb-4">
                  Dr. Jane Smith is a board-certified optometrist with over 15 years of experience. She is passionate about
                  providing personalized eye care and helping patients maintain healthy vision throughout their lives.
                </p>
                <p className="text-gray-600">
                  Dr. Smith graduated from the New England College of Optometry and has been serving the local community
                  since 2008. She specializes in pediatric optometry and hard-to-fit contact lenses.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.contact}</h3>
              <p className="flex items-center mb-2">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </p>
              <p>1234 Eye Care Lane, Vision City, VC 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.hours}</h3>
              <p className="flex items-center mb-2">
                <Clock className="h-5 w-5 mr-2" />
                Mon-Fri: 9am - 6pm
              </p>
              <p className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                Sat: 10am - 4pm, Sun: Closed
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.quickLinks}</h3>
              <nav className="flex flex-col space-y-2">
                <Link href="#services" className="hover:text-blue-300">{t.services}</Link>
                <Link href="#about" className="hover:text-blue-300">{t.about}</Link>
                <Link href="#" className="hover:text-blue-300">{t.patientForms}</Link>
                <Link href="#" className="hover:text-blue-300">{t.insurance}</Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} {t.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}