import {getProviders, signIn} from 'next-auth/react'
import Header from '../../components/header'
import {LoginIcon} from '@heroicons/react/outline'

function signin({ providers }) {
    return (
        <>
        <Header />

        <div className='flex flex-col items-center justify-center min-h-screen py-2 mt-5 px-14 text-center'>

            <img
                src='data:image/png;base64,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'
                className='w-80' 
            />
            <p className='font-xs italic'>
                This is not a real app. It is built for educational purposes only
            </p>

            <div className='mt-32'>
                {Object.values(providers).map((provider) => (
                    <div key={provider.name} className='w-48'>
                        <button onClick={() => signIn(provider.id, {callbackUrl: "/"})} className='p-3 bg-blue-500 rounded-lg text-white flex hover:scale-110'>
                            <LoginIcon className='h-7' />
                            <p className='flex-1'>
                                Sign in with {provider.name}
                            </p>
                        </button>
                    </div>
                ))}
            </div>
        </div>

    </>
    )
}

export async function getServerSideProps () {
    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default signin;