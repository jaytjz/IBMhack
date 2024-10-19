export default function Footer() {
    return (
      <footer className="bg-gray-800 p-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-sm">
            © 2024 IBM Datathon. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
          <div className="mt-6 text-gray-400">
            <p>Follow us on:</p>
            <div className="flex justify-center space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    );
}
