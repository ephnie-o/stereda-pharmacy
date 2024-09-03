import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'

export const metadata = {
  title: 'You’re subscribed',
  description: 'Thanks for subscribing.',
}

export default function ThankYou() {
  return (
      <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen">
        <SimpleLayout
        title="Thanks for subscribing."
        intro="An email would be sent to you any time there is something interesting. You can unsubscribe at any time, no hard feelings."
        />
        <div className="mt-6 flex justify-center">
            <Link href="/">
                <button className='bg-green-700 rounded-full p-2 text-gray-100'>
                    Go back to Homepage
                </button>
            </Link>
        </div>
    </div>
  )
}