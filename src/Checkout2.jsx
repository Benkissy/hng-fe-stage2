import Mobel from "./assets/image/mobel.png"
import Tool from "./assets/image/tool.png"
import Building from "./assets/image/building.png"
import Order from "./assets/image/order.png"
import Search from "./assets/image/search.png"
import Design1 from "./assets/image/design1.png"
import Design2 from "./assets/image/design2.png"
import Design3 from "./assets/image/design3.png"
import Jacobsen4 from "./assets/image/jacobsen4.png"
import Group5 from "./assets/image/Group5.png"
import Chassidy6 from "./assets/image/Chassidy6.png"
import Plaid7 from "./assets/image/plaid7.png"
import Group8 from "./assets/image/Group8.png"
import Famous from "./assets/image/Famous.png"
import Frame2 from "./assets/image/Frame2.png"
import Frame3 from "./assets/image/Frame3.png"
import SVGRepo1 from "./assets/image/SVGRepo1.png"
import mastercard2 from "./assets/image/mastercard2.png"
import Frame03 from "./assets/image/Frame03.png"
import chase04 from "./assets/image/chase04.png"
import Frame80 from "./assets/image/Frame80.png"


export const Checkout2 = () => {
    return (
        <>
       <header>
        <div className="w-1920px p-8">
          <div className="flex justify-between mx-6">
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
          <div className="flex gap-10 px-10 py-31 font-bold">
            <p className="border-b border-b-black ">LATEST</p>
            <p>NEW PRODUCT</p>
            <p>POPULAR</p>
            <p>PRODUCT</p>
            <p>GADGET</p>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-4 gap-10 p-8">
            <div className="flex flex-col">
               <div className="">
                  <img src={Design1} alt="" />
               </div>
              <div className="pl-28">
                <p>Bella Desk</p>
                <p className="text-red-600">$241.99</p>
              </div>
            </div>
            <div className="p-12 pb-16 w-68 h-60 ">
               <div className="">
                 <img src={Design2} alt="" />
               </div>
              <div className="">
                <p>Proin Faucibus</p>
                <p className="text-red-600">$122.00</p>
              </div>
            </div>
            <div flex>
                <img src={Design3} alt="" />
              <div className="">
                <p>Terrakotovii Divan</p>
                <div className="flex">
                <p className="text-red-600">$110.00</p>
                <p className="text-zinc-400"><del>$110.00</del></p>
                </div>
              </div>
            </div>
            <div flex>
                <img src={Jacobsen4} alt="" />
              <div className="">
                <p>Jacobsen Egg Chair</p>
                <p className="text-red-600">$1,202.00</p>
              </div>
            </div>
          </div>
          <div>
          <div className="grid grid-cols-4 gap-10 p-8">
            <div className="flex flex-col">
               <div className="">
                  <img src={Group5} alt="" />
               </div>
              <div className="pl-28">
                <p>Lounch Chair</p>
                <p className="text-red-600">$2,000.00</p>
              </div>
            </div>
            <div className="p-12 pb-10">
               <div className="">
                 <img src={Chassidy6} alt="" />
               </div>
              <div className="">
                <p>Proin Faucibus</p>
                <p className="text-red-600">$1,202.00</p>
              </div>
            </div>
            <div flex>
                <img src={Plaid7} alt="" />
              <div className="">
                <p>Glen Plaid Suit</p>
                <p className="text-red-600">$602.00</p>
              </div>
            </div>
            <div flex>
                <img src={Group8} alt="" />
                  <div className="flex">
                     <p className="text-red-600">$110.00</p>
                  </div>
            </div>
          </div>
          </div>
         </section>
           <footer className=" bg-black text-white">
            <div className="grid grid-cols-5">
            <div className="p-6 pl-10 gap-6 leading-4">
              <h2 className="pt-2 pb-4">CONTACT US</h2>
              <div className="flex gap-2">
                <img className="w-10 h-10" src={Famous} alt="" />
                <div>
                  <p>888 South</p>
                  <p>Avenue Street,</p>
                  <p>New York</p>
                </div>
              </div>
              <div className="flex gap-2">
                <img className="w-10 h-10" src={Frame2} alt="" />
                <div>
                  <p>(12)3 458 7995  </p>
                  <p>(12)3 456 7890 </p>
                </div>
              </div>
              
            </div>
            <div className="p-6 pl-10">
              <h2 className="pt-2 pb-4">SERVICES</h2>
              <div>
                <p>Home Furnishing</p>
                <p>Secure Payments</p>
                <p>Delivery Time & Cost</p>
                <p>Returns & Exchanges</p>
                <p>FAQs</p>
              </div>
            </div>
            
            <div className="p-6 pl-10">
              <h2 className="pt-2 pb-4">INFORMATION</h2>
              <div>
                <p>Private Policy</p>
                <p>Client Portal</p>
                <p>Product Catalogue</p>
                <p>Quality Process</p>
                <p>Travel Tips</p>
              </div>
            </div>
            <div className="p-6 pr-16 col-span-2">
              <h2 className="pt-2 pb-4">NEWSLETTER</h2>
              <div>
                <p>By subscribing to our mailling list,you will always be up to date about the latest news.</p>
                <img className="w-56 h-6 pr-10" src={Frame80} alt="" />
                <p>SUBSCRIBE</p>
              </div>
            </div>
        </div>
           </footer>
       </header>
        </>
      )
    
}