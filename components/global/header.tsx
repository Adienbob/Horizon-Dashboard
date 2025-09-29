import Link from "next/link"
import IconButton from "../Buttons/iconButton";

export default function Header() {

   return (
      <header>
         <nav>
            <div>
               <button>pages</button>
               <p>/</p>
               <button>NFT Marketplace</button>
            </div>
            <Link href="/">
               <p>the name of the current page</p>
            </Link>
            <div>
               <div>
                  <label htmlFor="searchBar"></label>
                  <input type="search" id="searchBar" placeholder="search" />
               </div>
               <ul>
                  <li><IconButton src="../assets/global/Buttons/notifications_none.svg" alt="Notification bell" width={24} height={24} /></li>
                  <li><IconButton src="../assets/global/Buttons/moon-solid.svg" alt="Theme Icon" width={18} height={18} /></li>
                  <li><IconButton src="../assets/global/Buttons/info_outline.svg" alt="Info Outline" width={24} height={24} /></li>
               </ul>
               <IconButton src="../assets/global/Buttons/avatar.svg" alt="Avatar" width={41} height={41} />
            </div>
         </nav>
      </header>
   )
}