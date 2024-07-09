import Mobel from "./assets/image/mobel.png"
import Tool from "./assets/image/tool.png"
import Building from "./assets/image/building.png"
import Order from "./assets/image/order.png"
import Search from "./assets/image/search.png"
import Product from "./assets/image/product.png"
import sofa1 from "./assets/image/sofa1.png"
import sofa2 from "./assets/image/sofa2.png"
import sofa3 from "./assets/image/sofa3.png"
import Design1 from "./assets/image/design1.png"
import Design2 from "./assets/image/design2.png"
import Design3 from "./assets/image/design3.png"
import Jacobsen4 from "./assets/image/jacobsen4.png"
import Group5 from "./assets/image/Group5.png"
import Chassidy6 from "./assets/image/Chassidy6.png"
import Plaid7 from "./assets/image/plaid7.png"
import Group8 from "./assets/image/Group8.png"
import Sec3 from "./assets/image/sec3.png"
import Sec4 from "./assets/image/sec4.png"
import Chair1 from "./assets/image/Chair1.png"
import Chair2 from "./assets/image/Chair2.png"
import Chair3 from "./assets/image/Chair3.png"
import Electronic1 from "./assets/image/electronic1.png"
import Cart from "./assets/image/cart.png"
import Electronic2 from "./assets/image/electronic2.png"
import Electronic3 from "./assets/image/electronic3.png"
import Electronic4 from "./assets/image/electronic4.png"
import Electronic5 from "./assets/image/electronic5.png"
import Electronic6 from "./assets/image/electronic6.png"
import Electronic7 from "./assets/image/electronic7.png"
import Electronic8 from "./assets/image/electronic8.png"
import Famous from "./assets/image/Famous.png"
import Frame2 from "./assets/image/Frame2.png"
import Frame3 from "./assets/image/Frame3.png"
import SVGRepo1 from "./assets/image/SVGRepo1.png"
import mastercard2 from "./assets/image/mastercard2.png"
import Frame03 from "./assets/image/Frame03.png"
import chase04 from "./assets/image/chase04.png"
import Frame80 from "./assets/image/Frame80.png"
import hamburger from "./assets/image/hamburger.png"




function Home() {
  return (
    <>
   <header>
    <div className="p-4 lg:p-8">
      <div className="flex justify-between items-center lg:mx-6">
       <div>
          <img src={Mobel} alt="logo" width={180} height={40}/>
          <div className="pt-6 hidden md:block">
          <p className="italic text-slate-600 text-xl pt-24px">a tinbu cloud store</p>
          </div>
       </div>
        <div className="hidden md:flex w-25 h-10 m-x-8 gap-12">
         <img src={Tool} alt="logo" />
         <img src={Building} alt="logo" />
         <img src={Order} alt="logo" />
        </div>
        {/* mobile togle */}
        <button className="lg:hidden">
             <img src={hamburger} alt="" />
          </button>
      </div>
    </div>
    <section className="border hidden md:flex ">
        <div className="flex p-8 gap-4 font-bold">
           <p>HOME</p>
           <p>FURNITURE</p>
           <p>MOBILE</p>
           <p>BLOG</p>
           <p>JOIN US</p>
           <p>CONTACT</p>
        </div>
        <div className="mt-6 ">
          <img src={Search} alt="logo" width={780} height={21} />
        </div>
    </section>
    <section>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 p-10 gap-4">
          <img className="h-full w-full object-cover col-span-2 row-span-2" src={Product} alt="photo" />
          <img className="h-full w-full object-cover col-span-2" src={sofa1} alt="" />
          <img className="h-full w-full object-cover" src={sofa2} alt="" />
          <img className="h-full w-full object-cover " src={sofa3} alt="" />
               
         </div>
    </section>
    <section>
      <div className="flex gap-2 lg:gap-10 px-3 lg:px-10 py-4 lg:font-bold overflow-x-auto text-xs lg:text-base">
        <p className="border-b border-b-black ">LATEST</p>
        <p className="text-center">NEW PRODUCT</p>
        <p className="text-center">POPULAR</p>
        <p className="text-center">PRODUCT</p>
        <p className="text-center">GADGET</p>
      </div>
    </section>
    <section>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10 p-4 lg:p-8">
        <div className="flex flex-col">
           <div className="">
              <img src={Design1} alt="" />
           </div>
          <div className="">
            <p>Bella Desk</p>
            <p className="text-red-600">$241.99</p>
          </div>
        </div>
        <div className="flex flex-col ">
           <div className="">
             <img src={Design2} alt="" />
           </div>
          <div className="">
            <p>Proin Faucibus</p>
            <p className="text-red-600">$122.00</p>
          </div>
        </div>
        <div className="flex flex-col ">
            <img src={Design3} alt="" />
          <div className="">
            <p>Terrakotovii Divan</p>
            <div className="flex">
            <p className="text-red-600">$110.00</p>
            <p className="text-zinc-400"><del>$110.00</del></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
            <img src={Jacobsen4} alt="" />
          <div className="">
            <p>Jacobsen Egg Chair</p>
            <p className="text-red-600">$1,202.00</p>
          </div>
        </div>
        <div className="flex flex-col">
           <div className="">
              <img src={Group5} alt="" />
           </div>
          <div className="">
            <p>Lounch Chair</p>
            <p className="text-red-600">$2,000.00</p>
          </div>
        </div>
        <div className="flex flex-col">
           <div className="">
             <img src={Chassidy6} alt="" />
           </div>
          <div className="">
            <p>Proin Faucibus</p>
            <p className="text-red-600">$1,202.00</p>
          </div>
        </div>
        <div className="flex flex-col">
            <img src={Plaid7} alt="" />
          <div className="">
            <p>Glen Plaid Suit</p>
            <p className="text-red-600">$602.00</p>
          </div>
        </div>
        <div className="flex flex-col">
            <img src={Group8} alt="" />
              <div className="flex">
                 <p className="text-red-600">$110.00</p>
              </div>
        </div>
      </div>
     </section>
     <section>
      <div className="flex px-4">
        <div className="flex p-6 bg-gray-200">
        <div>
          <img src={Sec3} alt="" />
        </div>
        <div>
          <img src={Sec4} alt="" />
        </div>
        </div>
      </div>
    </section>
    <div className="font-bold pl-4 lg:pl-12 pt-5">
      <p className="text-lg lg:text-3xl">OFFERS</p>
    </div>
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-12 h-90 overflow-hidden">
            <div>
              <img className="h-full object-cover" src={Chair1} alt="" />
            </div>
          <div className="flex gap-4 lg:gap-8">
            <div className="">
              <img className="h-full object-cover" src={Chair2} alt="" />
            </div>
            <div className="">
              <img className="h-full object-cover" src={Chair3} alt="" />
            </div>
          </div>
      </div>
    </section>
       <div className="font-bold pl-12">
        <p className="text-lg lg:text-3xl">GADGET</p>
       </div>
       <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 border-white  leading-8">
          <div className="flex flex-col gap-4 lg:flex-row">
           <div className="w-44 h-44">
           <img src={Electronic1} alt="" />
           </div>
            <div flex>
              <p>Tablet</p>
              <p>$122.00</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <img src={Electronic2} alt="" />
            <div>
              <p>Macbook</p>
              <p>$1,460.90</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <img src={Electronic3} alt="" />
            <div>
              <p>Scanner</p>
              <p>$560.00</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <img src={Electronic4} alt="" />
            <div>
              <p>Monitor</p>
              <p>$122.00</p>
              <div>
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <img src={Electronic5} alt="" />
            <div>
              <p>Console</p>
              <p>$1,460.90</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <img src={Electronic6} alt="" />
            <div>
              <p>Desktop</p>
              <p>$560.00</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row">
            <img src={Electronic7} alt="" />
            <div>
              <p>Tablet</p>
              <p>$122.00</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center lg:flex-row">
            <img src={Electronic8} alt="" />
            <div>
              <p>Tablet</p>
              <p>$122.00</p>
              <div className="flex">
                 <img src={Cart} alt="" />
                  <p>Add to Cart</p>
              </div>
            </div>
          </div>
       </section>
       <footer className=" bg-black text-white">
        <div className="grid grid-cols-2 lg:grid-cols-5 ">
        <div className="p-6 lg:pl-10 gap-6 leading-4">
          <h2 className="pt-2 pb-4">CONTACT US</h2>
          <div className="flex ">
            <img className="w-10 h-10" src={Famous} alt="" />
            <div >
              <p>888 South</p>
              <p>Avenue Street,</p>
              <p>New York</p>
            </div>
          </div>className="leading-4"
          <div className="flex gap-2">
            <img className="w-10 h-10" src={Frame2} alt="" />
            <div className="gap-4">
              <p>(12)3 458 7995  </p>
              <p>(12)3 456 7890 </p>
            </div>
          </div>
          <div className="flex gap-2">
            <img className="w-10 h-10" src={Frame3} alt="" />
            <div>
              <p>info@tinbucloudshop.com</p>
              <p>hr@mobel.com</p>
            </div>
          </div>
        </div>
        <div className="p-6 lg:pl-10">
          <h2 className="pt-2 pb-4">SERVICES</h2>
          <div>
            <p>Home Furnishing</p>
            <p>Secure Payments</p>
            <p>Delivery Time & Cost</p>
            <p>Returns & Exchanges</p>
            <p>FAQs</p>
          </div>
        </div>
        <div className="p-6 lg:pl-10">
          <h2 className="pt-2 pb-4">ACCOUNT</h2>
          <div>
            <p>My Account</p>
            <p>Wishlist</p>
            <p>Order History</p>
            <p>Specials</p>
            <p>Gift Vouchers</p>
          </div>
        </div>
        <div className="p-6 lg:pl-10">
          <h2 className="pt-2 pb-4">INFORMATION</h2>
          <div>
            <p>Private Policy</p>
            <p>Client Portal</p>
            <p>Product Catalogue</p>
            <p>Quality Process</p>
            <p>Travel Tips</p>
          </div>
        </div>
        <div className="p-6 pr-16">
          <h2 className="pt-2 pb-4">NEWSLETTER</h2>
          <div>
            <p>By subscribing to our mailling list,you will always be up to date about the latest news.</p>
            <img className="w-38 h-6 pr-10" src={Frame80} alt="" />
            <p>SUBSCRIBE</p>
          </div>
        </div>
    </div>
            <div className="flex flex-col lg:flex-row justify-between p-4">
                 <div>
                  <p className="p-6 lg:pl-16" >Power by HNG-11&copy;2024 Design by <b>Luthern</b></p>
                 </div>

               <div className="flex w-26 h-8 lg:mr-28 gap-2">
                 <img src={SVGRepo1} alt="" />
                 <img src={mastercard2} alt="" />
                 <img src={Frame03} alt="" />
                 <img src={chase04} alt="" />
               </div>
             </div>
       </footer>
   </header>
    </>
  )
}

export default Home
