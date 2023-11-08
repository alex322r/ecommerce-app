
import { link } from "fs"
import footerInfo from "../assets/info/footerInfo.json"
import style from "./Footer.module.css"

export default function Footer() {

  return (
    <footer className="bg-[#1e364b] main">
      <section className=" flex py-10 mx-10">
        <div className=" max-w-[1248px] flex w-full mx-auto" >
          {
            footerInfo.map((info, index) => {
              const { title, links } = info
              return (
                <div className="text-white w-full max-w-[308px]" key={index}>
                  <nav>
                    <div>
                      <h3 className="text-base font-extrabold">{title}</h3>
                    </div>
                    <ul className="mt-6">
                      {
                        links.map((linkItem, index) => {
                          const { label, link } = linkItem
                          return <li className=" text-[.875em] pb-3" key={index}><a href={link}>{label}</a></li>
                        })
                      }
                    </ul>
                  </nav>
                </div>
              )
            })
          }
        </div>
      </section>
      <section className="flex justify-center bg-[#0c2941]">
        <div className=" max-w-[1248px] flex flex-1 pt-[22px] pb-[21px] mx-10">
          <div className="flex-1">
            <ul className="flex">
              <li className="mr-4"><a className={style.facebook} target="_blank" rel="no-rel" href="https://facebook.com"></a><i></i></li>
              <li><a className={style.instagram} target="_blank" rel="no-rel" href="https://instagram.com"></a><i></i></li>
            </ul>
          </div>
          <div className="flex gap-x-8 text-sm text-white">
            <a href="#">Términos y condiciones</a>
            <a href="#">Política de cookies</a>
            <a href="#">Política de privacidad</a>
          </div>
          <div className="flex-1"></div>
        </div>
      </section>
      <section className="flex justify-center bg-[#0c2941]">
        <div className="flex w-full justify-between mx-10 pt-6 pb-10 max-w-[1248px] border-t-[1px] border-[#495867]">
          <div className="text-white text-[12px] flex flex-col">
            <span className=" font-bold">© TODOS LOS DERECHOS RESERVADOS</span>
            <span>Ecommerce.com Alexis Rodriguez.</span>
          </div>
          <a className=" w-16 h-14"></a>
        </div>

      </section>
    </footer>
  )
}