"use client"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Shield, Lock, Cookie, Eye, EyeOff, ChevronDown, ChevronUp } from "lucide-react"
import { appConfig } from "@/data/config"

export default function PrivacyPage() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    data: true,
    usage: true,
    security: true,
    cookie: true,
    changes: true
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                <Lock className="w-8 h-8 text-blue-500" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
                  Kebijakan Privasi
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                {appConfig.nameHost}
              </p>
            </div>

            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      Privasi Anda penting bagi kami. Halaman ini menjelaskan bagaimana kami mengumpulkan, 
                      menggunakan, dan melindungi data Anda saat menggunakan layanan kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* 1. Data yang Kami Kumpulkan */}
            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer hover:bg-dark-450 transition-colors"
                  onClick={() => toggleSection('data')}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-blue-500 font-bold text-sm">1</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Data yang Kami Kumpulkan</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedSections.data ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
                
                {expandedSections.data && (
                  <div className="px-6 pb-6 border-t border-dark-300">
                    <div className="pt-4">
                      <p className="text-gray-300 mb-4">
                        Kami dapat mengumpulkan informasi seperti:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300">
                            Nama pengguna (username), email, dan ID transaksi
                          </p>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300">
                            Riwayat pembelian dan log aktivitas panel
                          </p>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300">
                            Informasi teknis (alamat IP, browser, waktu akses)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 2. Penggunaan Data */}
            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer hover:bg-dark-450 transition-colors"
                  onClick={() => toggleSection('usage')}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-green-500 font-bold text-sm">2</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Penggunaan Data</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedSections.usage ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
                
                {expandedSections.usage && (
                  <div className="px-6 pb-6 border-t border-dark-300">
                    <div className="pt-4">
                      <p className="text-gray-300 mb-4">
                        Data tersebut digunakan untuk:
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300">
                            Memproses transaksi dan membuat panel
                          </p>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300">
                            Mengirimkan notifikasi terkait layanan
                          </p>
                        </div>
                        <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-300">
                            Meningkatkan keamanan dan performa website
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 3. Keamanan Data */}
            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer hover:bg-dark-450 transition-colors"
                  onClick={() => toggleSection('security')}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-purple-500 font-bold text-sm">3</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Keamanan Data</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedSections.security ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
                
                {expandedSections.security && (
                  <div className="px-6 pb-6 border-t border-dark-300">
                    <div className="pt-4 space-y-4">
                      <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                        <Lock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Kami menggunakan sistem enkripsi dan database terproteksi untuk menjaga data pengguna.
                        </p>
                      </div>
                      <div className="flex items-start space-x-3 p-3 bg-dark-500 rounded-lg">
                        <Shield className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Kami tidak membagikan data pribadi kepada pihak ketiga, kecuali diwajibkan oleh hukum.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 4. Cookie */}
            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer hover:bg-dark-450 transition-colors"
                  onClick={() => toggleSection('cookie')}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-orange-500 font-bold text-sm">4</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Cookie</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedSections.cookie ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
                
                {expandedSections.cookie && (
                  <div className="px-6 pb-6 border-t border-dark-300">
                    <div className="pt-4">
                      <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg">
                        <Cookie className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Website ini dapat menggunakan cookie untuk menyimpan preferensi pengguna. 
                          Anda dapat menonaktifkannya melalui pengaturan browser.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 5. Perubahan Kebijakan */}
            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-0">
                <div 
                  className="p-6 cursor-pointer hover:bg-dark-450 transition-colors"
                  onClick={() => toggleSection('changes')}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center mr-4">
                        <span className="text-red-500 font-bold text-sm">5</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white">Perubahan Kebijakan</h2>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      {expandedSections.changes ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
                
                {expandedSections.changes && (
                  <div className="px-6 pb-6 border-t border-dark-300">
                    <div className="pt-4">
                      <div className="flex items-start space-x-3 p-4 bg-dark-500 rounded-lg">
                        <Eye className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <p className="text-gray-300">
                          Kebijakan ini dapat diperbarui sewaktu-waktu tanpa pemberitahuan. 
                          Tanggal pembaruan terakhir akan tercantum di bagian bawah halaman ini.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Footer Note */}
          <div className="mt-12">
            <Card className="bg-dark-400 border-dark-300">
              <CardContent className="p-6">
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan atau Kebijakan Privasi, 
                    silakan hubungi kami melalui email: 
                    <span className="text-blue-400 font-medium"> wbot0232@gmail.com</span>
                  </p>
                  <div className="text-sm text-gray-500">
                    Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
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
