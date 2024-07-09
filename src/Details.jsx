import Mobel from "./assets/image/mobel.png"
import love from "./assets/image/love.png"
import zero from "./assets/image/zero.png"
import prod22 from "./assets/image/prod22.png"
import sec3 from "./assets/image/sec3.png"
import Frame264 from "./assets/image/Frame264.png"
import Group23 from "./assets/image/Group23.png"
import Group4 from "./assets/image/Group4.png"
import Group24 from "./assets/image/Group24.png"
import Frame108 from "./assets/image/Frame108.png"
import Frame106 from "./assets/image/Frame106.png"
import Frame107 from "./assets/image/Frame107.png"





export const Details = () => {
    return (
        <>
       <header>
        
          <div className="flex justify-between p-4 border-2">
             <div className="flex font-bold pl-12 gap-4 pt-6 text-gray-500">
                <p>Home</p>
                <p>Account</p>
                <p>Order History</p>
             </div>
              <div>
                    <img src={Mobel} alt="logo" width={160} height={40}/> 
              </div>
                <div className="flex pr-28 gap-4 pt-6  text-gray-500">
                        <p className="font-bold">Search</p>
                    <div className="flex gap-2 font-bold">
                         <p>Save</p>
                       <img className="w-4 h-6 pt-1" src={love} alt="" />
                    </div>
                    <div className="flex gap-2 font-bold">
                       <p>Cart:</p>
                        <img className="w-2 h-5 pt-1" src={zero} alt="" />
                    </div>
                </div>
          </div>
          <section>
                <div className="grid grid-cols-5">
                    <div className="grid col-span-3 ml-16 mr-16 pt-4 pb-4">
                     <div className="flex justify-between">
                       <p>New Release</p>
                       <p>Price</p>
                     </div>
                     <div className="flex justify-between">
                       <p>Fabricue en Nigeria</p>
                       <p className="text-red-500 font-bold">$1,200.00</p>
                     </div>
                        <div className="flex justify-between items-center">
                            <img className="w-6 h-6" src={Group23} alt="" />
                            <img src={Group4} alt="" />
                            <img className="w-6 h-6" src={Group24} alt="" />
                        </div>
                          <div className="flex justify-between">
                            <img src={Frame108} alt="" />
                            <div className="flex gap-2">
                                <img className="w-3 h-3" src={Frame106} alt="" />
                                <img className="w-14 h-3" src={Frame107} alt="" />
                            </div>
                          </div>

                    </div>
                           <div className="grid col-span-2">
                              <div>
                                  <p>Home</p>
                                  <p>Furniture</p>
                                  <p>Chair</p>
                              </div>
                              <div>
                                 <h1>Modern Armchair</h1>
                                 <p>Designed for both comfort and style, it features a sleek silhouette with clean lines, perfect for contemporary interiors. The chair is upholstered in high-quality, durable fabric, available in various colors to complement any decor.</p>
                                 <p>Size: Medium</p>
                                 <p>Manufacturer: Timbu</p>
                              </div>
                              <div className="grid grid-cols-5">
                                <p className="grid grid-cols-2">Select color</p>
                                <img src={prod22} alt="" />
                                <img src={sec3} alt="" />
                                <img src={Frame264} alt="" />
                              </div> 
                           <div>
                             
                        </div>
                    </div>
                </div>
          </section>
       
       </header>
        </>
      )
    
}