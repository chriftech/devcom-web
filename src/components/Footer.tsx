import { Facebook, Twitter, Linkedin } from "lucide-react"
import { Separator } from "./shadcn/separator"

export default function Footer() {
  return (
    <footer className="w-full border-t mt-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Brand / About */}
          <div>
            <h2 className="text-lg font-bold text-gray-900">YangaList</h2>
            <p className="text-sm text-gray-600 mt-2">
              Simplify your tasks and stay productive.  
              Manage todos with ease, anytime, anywhere.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-blue-600">Home</a></li>
              <li><a href="/pricing" className="hover:text-blue-600">Pricing</a></li>
              <li><a href="/about" className="hover:text-blue-600">About</a></li>
              <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Connect</h3>
            <div className="flex gap-3 mt-2">
              <a href="https://facebook.com" target="_blank" className="text-gray-600 hover:text-blue-600">
                <Facebook size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" className="text-gray-600 hover:text-blue-600">
                <Twitter size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-600 hover:text-blue-600">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-4" />

        {/* Bottom note */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} YangaList. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-blue-600">Privacy Policy</a>
            <a href="/terms" className="hover:text-blue-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
