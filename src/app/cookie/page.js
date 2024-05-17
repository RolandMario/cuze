import Footer from '@/components/footer'
import Cookie_policy from '@/components/privacy_cookie/cookie'


export default function Cookie(){
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
        <Cookie_policy/>
        <Footer/>
    </main>
  )
}
