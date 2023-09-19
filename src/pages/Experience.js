
export const Experience = () => {
    return (
        <>
             <section className='dark:bg-gradient-to-r from-slate-900 to-slate-700 dark:text-white h-fit z-10 ' id='experience'>
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
                    EXPERIENCE
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
                            WebApps Engineer | PT Global Data Inspirasi
                        </h4>
                        <p className="text-sm text-gray-500 text-justify dark:text-emerald-400">
                            Okt 2022 - Jan 2023 · 4 bln
                        </p>

                        {/* Job Description */}
                        <ol className="list-decimal pl-5 space-y-2 text-justify mt-3">
                            <li className="text-sm text-gray-500 leading-relaxed">
                            Membantu pengerjaan development di bidang software
                            development untuk mendukung pengembangan produk dan
                            project Datains.
                            </li>
                            <li className="text-sm text-gray-500 leading-relaxed">
                            Membantu pengerjaan development di bidang software
                            development untuk mendukung pengembangan produk dan
                            project Datains.
                            </li>
                            {/* More descriptions if needed */}
                        </ol>
                        </div>
                    </div>
                    {/* Second Content on the Right */}
                    <div className="flex items-center justify-end">
                        <div className="w-full md:w-1/2 md:pl-4">
                        {/* Job Title & Duration */}
                        <h4 className="font-bold">Web Developer | Greensoft</h4>
                        <p className="text-sm text-gray-500 dark:text-emerald-400">
                            Feb 2022 - Mei 2022 · 4 bln
                        </p>

                        {/* Job Description */}
                        <ol className="list-decimal px-3 space-y-24 text-left mt-3">
                            <li className="text-sm text-gray-500 leading-relaxed">
                            Membantu pengerjaan development di bidang software
                            development untuk mendukung pengembangan produk dan
                            project.
                            </li>
                            {/* More descriptions if needed */}
                        </ol>
                        </div>
                    </div>
                    {/* Third Content on the Left */}
                    <div className="flex items-center">
                        <div className="w-full md:w-1/2 pr-4">
                        {/* Job Title & Duration */}
                        <h4 className="font-bold text-justify">
                            Web Developer | PT Global Intermedia
                        </h4>
                        <p className="text-sm text-gray-500 text-justify dark:text-emerald-400">
                            Okt 2022 - Jan 2023 · 4 bln
                        </p>

                        {/* Job Description */}
                        <ol className="list-decimal pl-5 space-y-2 text-justify mt-3">
                            <li className="text-sm text-gray-500 leading-relaxed">
                            Membantu pengerjaan development di bidang software
                            development untuk mendukung pengembangan produk dan
                            project Datains.
                            </li>
                            <li className="text-sm text-gray-500 leading-relaxed">
                            Membantu pengerjaan development di bidang software
                            development untuk mendukung pengembangan produk dan
                            project Datains.
                            </li>
                            {/* More descriptions if needed */}
                        </ol>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    )

}