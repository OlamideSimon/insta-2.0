import Image from 'next/image';
import {
    SearchIcon,
    MenuIcon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon
} from '@heroicons/react/outline';
import {HomeIcon} from '@heroicons/react/solid';
import { signOut, signIn, useSession } from 'next-auth/react';
import {useRouter} from 'next/router'
import { useRecoilState } from 'recoil';
import {modalState} from '../atoms/modalAtom'

function header() {

    const {data: session} = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const router = useRouter();


    return (
        <div className='shadow-sm border-b bg-white sticky-top-0 z-50'>
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                {/* Left */}
                <div onClick={() => router.push('/')} className="relative cursor-pointer hidden lg:inline-grid w-24">
                    <Image 
                        src='data:image/png;base64,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'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

                <div onClick={() => router.push('/')} className="relative cursor-pointer w-10 lg:hidden flex-shrink-0">
                    <Image 
                        src='data:image/png;base64,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'
                        layout='fill'
                        objectFit='contain'
                        />
                </div>

                {/* Middle - Search input field */}
                <div className='max-w-xs'>
                    <div className='relative mt-1 p-3 rounded-md'>
                        <div 
                            className="absolute inset-y-0 pl-3 flex items-center pointer-events-none"
                            >
                                <SearchIcon 
                                className="h-5 w-5 text-gray-500" 
                                />
                        </div>
                        <input 
                            className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md hover:border-black' 
                            type='text' 
                            placeholder='Search' 
                            />
                    </div>
                </div>

                {/* Right */}
                {}
                <div className='flex items-center justify-end space-x-4'>
                    <HomeIcon onClick={() => router.push('/')} className='navBtn' />
                    <MenuIcon className='h-6 md:hidden cursor-pointer' />
                    
                    {session ? (
                        <>
                            <div className="relative navBtn">
                                <PaperAirplaneIcon className='navBtn rotate-45' />
                                <div 
                                className='
                                absolute -top-1 -right-2 text-xs 
                                w-5 h-5 bg-red-500 flex items-center 
                                justify-center animate-pulse 
                                rounded-full text-white'>
                                    3
                                </div>
                            </div>
                            <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn' />
                            <UserGroupIcon className='navBtn'/>
                            <HeartIcon className='navBtn' />
        
                            <img 
                                onClick={signOut}
                                src={session.user.image}
                                alt="Profile Pic"
                                className='h-14 rounded-full cursor-pointer'
                            />
                        </>
                    ): (
                        <button onClick={signIn}>
                            SignIn
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default header;

