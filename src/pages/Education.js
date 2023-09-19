export const Education = () => {
    return (
        <div>
             <section className='dark:bg-gradient-to-r from-slate-900 to-slate-700 dark:text-white h-fit z-10 ' id='education'>
                <div
                className="
                container 
                mx-auto
                px-5
                py-5
                md:py-12
                
            "
                >
                <div className="z-30">
                    <h1
                    className="
                    text-4xl
                    font-bold
                    pb-2
                    text-center
                    z-10
                    "
                    >
                    EDUCATION
                    </h1>
                    <hr
                    className="
                    mb-2 
                    w-24
                    h-1
                    bg-emerald-400
                    mx-auto
                "
                    />
                </div>
                <div className="relative my-6">
                    {/* Vertical Line in the Middle */}
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        aria-hidden="true"
                        >
                        <div className="h-full w-px bg-gray-300 relative hidden md:block">
                            {/* Dot for the first content's header */}
                            <div className="absolute -left-1.5 w-2.5 h-2.5 bg-black rounded-full top-0 dark:bg-emerald-400"></div>

                            {/* Dot for the second content's header */}
                            <div className="absolute -left-1.5 w-2.5 h-2.5 bg-black rounded-full top-[70%] dark:bg-emerald-400"></div>
                        </div>
                        </div>

                        {/* Content on Left and Right */}
                        <div className="relative flex flex-col space-y-16">
                        {/* First Content on the Left */}
                        <div className="flex items-center">
                            <div className="w-full md:w-1/2 pr-4 ">
                            {/* Job Title & Duration */}
                            <h4 className="font-bold text-justify">
                                Politeknik Negeri Jember | Kabupaten Jember
                            </h4>
                            <p className="text-sm text-gray-500 text-justify dark:text-emerald-400">
                            Teknik Informatika · IPK : 3.73
                            </p>

                            {/* Job Description */}
                            <ol className="list-decimal pl-5 space-y-2 text-justify mt-3">
                                <li className="text-sm text-gray-500 leading-relaxed">
                                    Tugas Akhir (Skripsi) mengambil judul <strong className="font-bold">PENGEMBANGAN SISTEM INFORMASI PERAMALAN HASIL 
                                    PRODUKSI TAMBAK UDANG MENGGUNAKAN METODE REGRESI LINIER BERGANDA</strong> 
                                </li>
                                <li className="text-sm text-gray-500 leading-relaxed">
                                    Aktif di organisasi kampus yaitu BSO HMJTI menjabat di Kepala Divisi Perhubungan merupakan divisi sebagai wadah untuk menyampaikan 
                                    informasi dan anspirasi mahasiswa Politeknik Negeri Jember Kampus Bondowoso
                                </li>
                                <li className="text-sm text-gray-500 leading-relaxed">
                                    Aktif juga di organisasi eksternal yaitu PKPT IPNU-IPPNU POLIJE sebagai Koordinator Lembaga Media PERS yang merupakan lembaga 
                                    untuk mengelola segala informasi dari kegiatan PKPT IPNU-IPPNU Politeknik Negeri Jember dan juga konten pada sosial media seperti Instagram, Twitter, Tiktok dll. 
                                </li>
                                {/* More descriptions if needed */}
                            </ol>
                            </div>
                        </div>
                        {/* Second Content on the Right */}
                        <div className="flex items-center justify-end">
                            <div className="w-full md:w-1/2 md:pl-4">
                            {/* Job Title & Duration */}
                            <h4 className="font-bold">SMKS Nurul Jadid | Kab. Probolinggo</h4>
                            <p className="text-sm text-gray-500 dark:text-emerald-400">
                                Rekayasa Perangkat Lunak
                            </p>

                            {/* Job Description */}
                            <ol className="list-decimal px-3 space-y-24 text-left mt-3">
                                <li className="text-sm text-gray-500 leading-relaxed">
                                    Aktif di lembaga jurnalistik sekolah yaitu Media Aktualisasi Siswa Aktif (MASA). Dan juga aktif dalam organisasi 
                                    Forum Komunikasi Osis Pondok Pesantren Nurul Jadid.
                                </li>
                                {/* More descriptions if needed */}
                            </ol>
                            </div>
                        </div>
                   
                    </div>
                </div>
                </div>
            </section>
        </div>
    )

}