import Image from 'next/image';
import "../styles.css";

export default function Market() {
  return (
    <main className="min-h-screen justify-between">
      <header className="bg-stone-700 text-white sticky top-0 z-50 ">
  <div className="container mx-auto flex items-center justify-between py-4 px-8">
    <div className="flex items-center">
      <img src="/logo.png" alt="Logo" className="h-12 mr-4" />
    </div>
    <nav className="space-x-4">
      <a href="#" className="hover:text-neutral-400">Home</a>
      <a href="#" className="hover:text-neutral-400">Markets</a>
      <div className="dropdown inline-block relative">
        <button className="hover:text-neutral-400">Company</button>
        <ul className="dropdown-content absolute hidden bg-white text-stone-700 pt-2">
          <li><a href="#">About</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
      <a href="#" className="hover:text-neutral-400">Education</a>
      <a href="#" className="hover:text-neutral-400">Resources</a>
    </nav>
    <button className="bg-red-500 hover:bg-red-400 hover:text-white font-bold text-stone-700 text-sm py-2 px-4 rounded">
      <a href="/register">CREATE ACCOUNT</a>
    </button>
  </div>
</header>

<section>
<div className='text-center mx-auto container px-8 py-8'>
   <h1 className='text-4xl font-bold'>Putting our clients first <span className='text-red-500'>since 1986.</span> </h1>
   <p className="text-gray-500 mt-4">For more than 30 years, we’ve been empowering clients by helping them take control of their financial lives.</p>
</div>
</section> 

<div className="hgh grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto container mb-20">
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Philosophy</h2>
        <p className="text-gray-600">At vero eos etme accusamus  iusto odio ent dignissimos  deleniti atque corrupti quos  ducimus moll quilla blanditiis expedita est distinctio..</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">History</h2>
        <p className="text-gray-600">At vero eos etme accusamus  iusto odio ent dignissimos  deleniti atque corrupti quos  ducimus moll quilla blanditiis expedita est distinctio..</p>
      </div>
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-2">Culture</h2>
        <p className="text-gray-600">At vero eos etme accusamus  iusto odio ent dignissimos  deleniti atque corrupti quos  ducimus moll quilla blanditiis expedita est distinctio..</p>
       </div>
    </div>


    <div className="bgg  w-3/4 h-full mx-auto bg-no-repeat bg-cover py-6 px-4 md:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Trust the Professionals</h1>
        <p className="text-lg text-center mb-8 mt-6">We are a group of passionate, independent thinkers who never stop exploring new ways to improve trading for the self-directed invest</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="mr-4">
              <Image src="/image1.jpg" alt="Image 1" width={100} height={100} />
            </div>
            <div>
              <p>Paragraph text 1</p>
              <p>Johnathan Taylor</p>
              <p>Small description</p>
              <div className="flex">
                <a href="#" className="mr-2">
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="mr-2">
                  <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="mr-4">
              <Image src="/image2.jpg" alt="Image 2" width={100} height={100} />
            </div>
            <div>
              <p>Paragraph text 2</p>
              <p>Johnathan Taylor</p>
              <p>Small description</p>
              <div className="flex">
                <a href="#" className="mr-2">
                  <Image src="/facebook-icon.png" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" className="mr-2">
                  <Image src="/twitter-icon.png" alt="Twitter" width={20} height={20} />
                </a>
                <a href="#">
                  <Image src="/instagram-icon.png" alt="Instagram" width={20} height={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


<footer className="bg-stone-700 py-4">
  <div className="container mx-auto flex items-center justify-between">
    <img src="/logo.png" alt="Company Logo" className=" h-16" />
    <div className="space-x-4">
      <button className="bg-transparent border-2 border-red-400 text-red-400 px-4 py-2 rounded">Company news</button>
      <button className="bg-transparent border-2 border-red-400 text-red-400 px-4 py-2 rounded">Partnership</button>
    </div>
  </div>

  <div className='container mx-auto py-10 text-gray-200'>Copyright ©2021 Liquid Inc. All Rights Reserved.</div>
  <div className='container mx-auto py-5 text-gray-200'>Trading derivatives and leveraged products carries a high level of risk, including the risk of losing substantially more than your initial investment. It is not suitable for everyone. Before you make any decision in relation to a financial product you should obtain and consider our Product Disclosure Statement (PDS) and Financial Services Guide (FSG) available on our website and seek independent advice if necessary</div>

</footer>
</main>
  )
}
