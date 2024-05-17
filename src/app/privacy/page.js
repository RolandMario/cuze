import Footer from '@/components/footer'
import Privacy_Policy from '@/components/privacy_cookie/privacy'

export default function Privacy() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
        <Privacy_Policy/>
        <Footer/>
    </main>
  )
}
