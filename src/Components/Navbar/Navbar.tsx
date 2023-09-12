import logo from '../../../public/images/app-logo.png'
import backImage from '../../../public/images/headerBgDesktop.png'

type Props = {}

function Navbar({ }: Props) {
    const themeHandler = () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }
    return (
        <div className='w-full h-screen relative'>
            <div className='relative w-full h-full'>
                {/* BackGround Image */}
                <div className='relative'>
                    <img className='absolute top-0  right-0 z-0 bg-cover bg-center w-full' src={backImage} alt="golden-coffe" />
                </div>

                {/* Header */}
                <header className='bg-black/50 h-24 w-[90%] px-10 py-5 mx-auto rounded-3xl flex fixed top-9 right-0 left-0 items-center backdrop-blur-[6px] z-50 '>
                    <div className='flex w-full justify-between items-center '>
                        {/* Logo Menu */}
                        <nav className='flex gap-x-9 items-center h-14'>
                            {/* Logo */}
                            <div>
                                <img src={logo} alt='Golend Coffe ' />
                            </div>
                            {/* Menu */}
                            <ul className='flex gap-x-9 text-xl text-gray-300 tracking-tightest h-full items-center child:leading-[56px]'>
                                <li className='font-DanaMedium text-orange-200'>
                                    <a href="#">صفحه اصلی</a>
                                </li>
                                <li className='relative group'>
                                    <a className='group-hover:text-orange-300' href="#">فروشگاه</a>
                                    <div className='absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                    p-6 w-52 bg-white text-zinc-700 dark:text-white dark:bg-zinc-700 text-base rounded-2xl border-t-[3px]
                                     border-t-orange-300 shadow  tracking-normal transition-all child:inline-block space-y-4 child-hover:text-orange-300 child:transition-colors'>
                                        <a href="#">قهوه ویژه</a>
                                        <a href="#">ویژه در سطح جهانی</a>
                                        <a href="#">قهوه درجه یک</a>
                                        <a href="#">ترکیبات تجاری</a>
                                        <a href="#">کپسول قهوه</a>
                                        <a href="#">قهوه زینو برزیلی</a>
                                    </div>
                                </li>

                                <li>
                                    <a href="#">دیکشنری</a>
                                </li>
                                <li>
                                    <a href="#">بلاگ</a>
                                </li>
                                <li>
                                    <a href="#">درباره ما</a>
                                </li>
                                <li>
                                    <a href="#">تماس با ما</a>
                                </li>
                            </ul>
                        </nav>

                        {/* ThemeTogle & Cart & Login */}
                        <div className='flex text-xl text-orange-200 gap-x-10'>
                            {/* Cart & Theme switcher*/}
                            <div className='flex gap-x-5 items-center'>
                                <div className='relative group'>
                                    {/* Cart icon hover */}
                                    <div className='py-3 cursor-pointer'>
                                        <svg className='w-8 h-8'>
                                            <use href='#shopping-cart'></use>
                                        </svg>
                                    </div>
                                    {/* Cart box */}
                                    <div className='absolute left-0 w-[400px] p-5 top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white text-zinc-700 dark:text-white dark:bg-zinc-700
                                    rounded-2xl border-t-[3px] border-t-orange-300 shadow transition-all'>
                                        <div className='flex items-center justify-between font-DanaMedium text-xs tracking-tighter'>
                                            <span className='text-gray-300 '>1 مورد</span>
                                            <a className='flex items-center text-orange-300' href="#"> مشاهده سبد خرید
                                                <svg className='w-4 h-4'>
                                                    <use href='#chevron'></use>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='cursor-pointer' onClick={themeHandler}>
                                        <svg className='inline-block dark:hidden w-8 h-8'>
                                            <use href='#moon'></use>
                                        </svg>
                                        <svg className='hidden dark:inline-block w-8 h-8'>
                                            <use href='#sun'></use>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <span className='block bg-white/20 w-px h-14 '></span>
                            {/* Login */}
                            <div className='flex items-center gap-x-2.5'>
                                <svg className='w-8 h-8 rotate-180'>
                                    <use href='#arrow-left'></use>
                                </svg>
                                <div>
                                    <a href="#">ورود  |  ثبت نام</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </header>
            </div>

        </div>

    )
}

export default Navbar