"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, FileText, AlertTriangle, CheckCircle } from "lucide-react"
import { appConfig } from "@/data/config"

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState<string>("penggunaan")

  const sections = [
    { id: "penggunaan", title: "Penggunaan Layanan" },
    { id: "pembayaran", title: "Pembayaran" },
    { id: "tanggungjawab", title: "Tanggung Jawab Pengguna" },
    { id: "pemeliharaan", title: "Layanan dan Pemeliharaan" },
    { id: "perubahan", title: "Perubahan Syarat" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 via-dark-700 to-dark-900">
      <Navbar />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-red-400 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Link>
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-4">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Syarat dan Ketentuan Layanan
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                {appConfig.nameHost}
              </p>
            </div>

            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      Selamat datang di layanan Buy Panel Pterodactyl kami ("Layanan"). Dengan menggunakan website ini, 
                      Anda dianggap telah membaca, memahami, dan menyetujui syarat serta ketentuan berikut ini.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "outline"}
                  className={`${
                    activeSection === section.id 
                      ? "bg-red-600 hover:bg-red-700 text-white" 
                      : "bg-dark-500 border-dark-300 text-gray-300 hover:bg-dark-600"
                  } transition-colors`}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Penggunaan Layanan */}
            {activeSection === "penggunaan" && (
              <Card className="bg-dark-400 border-dark-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-blue-500 font-bold text-sm">1</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Penggunaan Layanan</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Layanan Panel Pterodactyl</h3>
                        <p className="text-gray-300">
                          Layanan ini digunakan untuk pembelian panel hosting berbasis Pterodactyl.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Data yang Valid</h3>
                        <p className="text-gray-300">
                          Pengguna wajib memberikan data yang benar saat melakukan pemesanan.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Larangan Penggunaan</h3>
                        <p className="text-gray-300">
                          Dilarang menggunakan panel untuk aktivitas ilegal (seperti phishing, DDoS, malware, botnet, atau konten terlarang).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Pembayaran */}
            {activeSection === "pembayaran" && (
              <Card className="bg-dark-400 border-dark-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-green-500 font-bold text-sm">2</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Pembayaran</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Kebijakan Non-Refundable</h3>
                        <p className="text-gray-300">
                          Semua transaksi bersifat final dan tidak dapat dikembalikan (non-refundable) kecuali terjadi kesalahan dari pihak kami.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Konfirmasi Pembayaran</h3>
                        <p className="text-gray-300">
                          Pembayaran dianggap sah setelah sistem kami menerima konfirmasi otomatis (auto confirm).
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Tanggung Jawab Pengguna */}
            {activeSection === "tanggungjawab" && (
              <Card className="bg-dark-400 border-dark-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-yellow-500 font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Tanggung Jawab Pengguna</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Konten dan Aktivitas</h3>
                        <p className="text-gray-300">
                          Pengguna bertanggung jawab atas isi, file, dan aktivitas dalam panel yang mereka miliki.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Penangguhan Akun</h3>
                        <p className="text-gray-300">
                          Jika ditemukan penyalahgunaan, akun dapat ditangguhkan tanpa pemberitahuan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Layanan dan Pemeliharaan */}
            {activeSection === "pemeliharaan" && (
              <Card className="bg-dark-400 border-dark-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-500 font-bold text-sm">4</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Layanan dan Pemeliharaan</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Hak Penghentian Layanan</h3>
                        <p className="text-gray-300">
                          Kami berhak menghentikan sementara atau permanen layanan tanpa pemberitahuan sebelumnya jika diperlukan untuk pemeliharaan atau alasan keamanan.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Perubahan Syarat */}
            {activeSection === "perubahan" && (
              <Card className="bg-dark-400 border-dark-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-500 font-bold text-sm">5</span>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Perubahan Syarat</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg border border-dark-300">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Perubahan Ketentuan</h3>
                        <p className="text-gray-300">
                          Kami dapat mengubah syarat & ketentuan ini sewaktu-waktu. Versi terbaru akan selalu tersedia di halaman ini.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center">
            <Card className="bg-dark-400 border-dark-300 inline-block">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-gray-300">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  <p className="text-sm">
                    Dengan menggunakan layanan kami, Anda menyetujui semua syarat dan ketentuan di atas.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
