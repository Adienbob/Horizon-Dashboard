

export default function Footer() {

   return (
      <footer className="text-(--secondary) text-sm text-center md:col-span-full lg:flex lg:justify-between lg:items-center lg:px-20 lg:mt-5">
         <p>© 2022 Horizon UI. All Rights Reserved.</p>
         <nav>
            <ul className="flex lg:gap-8 justify-evenly">
               <li><a href="">Marketplace</a></li>
               <li><a href="">License</a></li>
               <li><a href="">Terms of Use</a></li>
               <li><a href="">Blog</a></li>
            </ul>
         </nav>
      </footer>
   )
}