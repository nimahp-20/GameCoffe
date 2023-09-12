import logo from '../../../public/images/app-logo.png'
import backImage from '../../../public/images/headerBgDesktop.png'

type Props = {}

function Navbar({ }: Props) {
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
                        <nav className='flex gap-x-9 items-center'>
                            {/* Logo */}
                            <div>
                                <img src={logo} alt='Golend Coffe' />
                            </div>
                            {/* Menu */}
                            <ul className='flex gap-x-9 text-xl text-gray-300 tracking-tightest'>
                                <li className='font-DanaMedium text-orange-200'>
                                    <a href="#">صفحه اصلی</a>
                                </li>
                                <li>
                                    <a href="#">فروشگاه</a>
                                    <ul className='hidden'>
                                        <li>
                                            <a href="#">قهوه ویژه</a>
                                        </li>
                                        <li>
                                            <a href="#">ویژه در سطح جهانی</a>
                                        </li>
                                        <li>
                                            <a href="#">قهوه درجه یک</a>
                                        </li>
                                        <li>
                                            <a href="#">ترکیبات تجاری</a>
                                        </li>
                                        <li>
                                            <a href="#">کپسول قهوه</a>
                                        </li>
                                        <li>
                                            <a href="#">قهوه زینو برزیلی</a>
                                        </li>
                                    </ul>
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

                        {/* ThemeTogle & Card & Login */}
                        <div className='flex text-xl text-orange-200 gap-x-10'>
                            {/* Card & Theme switcher*/}
                            <div className='flex gap-x-5 items-center'>
                                <div>
                                    <svg className='w-8 h-8'>
                                        <use xlinkHref='#shopping-cart'></use>
                                    </svg>
                                </div>
                                <div>
                                    <svg className='w-8 h-8'>
                                        <use xlinkHref='#moon'></use>
                                    </svg>
                                </div>
                            </div>
                            <span className='block bg-white/20 w-px h-14 '></span>
                            {/* Login */}
                            <div className='flex items-center gap-x-2.5'>
                                <svg className='w-8 h-8 rotate-180'>
                                    <use xlinkHref='#arrow-left'></use>
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