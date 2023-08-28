/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react"
import style from "./SideBar.module.css"
import Arrow from "./Arrow"
import appStyle from "../App.module.css"

interface props {
  closeSideBar: () => void
}

export default function SideBar({ closeSideBar }: props) {
  useEffect(() => {
    const $body = document.querySelector("body")
    $body?.classList.add(appStyle.HamburguerBtnNavigationOpen)
    let $overlay: HTMLDivElement
    $overlay = document.createElement("div")
    $overlay.addEventListener("click", closeSideBar)
    $overlay.classList.add(appStyle.overlay)
    $body?.appendChild($overlay)
    return () => {
      $body?.classList.remove(appStyle.HamburguerBtnNavigationOpen)
      $body?.removeChild($overlay)
      $overlay.removeEventListener("click", closeSideBar)
    }
  }, [closeSideBar])

  return (
    <div className={style.sideBarDesktop}>
      <div className={style.sideBarDesktopContainer}>
        <div className={style.sideBarDesktopTitle}>
          <div className={style.sideBarDesktopText}>¡Hola!</div>
          <div onClick={closeSideBar} className={style.sideBarDesktopCloseIcon}>
          </div>
        </div>
        <div className={style.sideBarDesktopScrollWrapper}>
          <div className={style.sideBarDesktopModuleBox}>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>
                  Hot Sale<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>SALE</span>
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>
                  Promociones<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>SALE
                  </span>
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Electrohogar
                </div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Tecnología
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Mujer
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Hombre
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Accesorios Moda
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Muebles y Organización</div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Dormitorio
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Niños y Juguetes
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                  <Arrow />
                </div>
              </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}>
              <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Zapatos
              </div>
              <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                <Arrow />
              </div>
            </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Deportes y aire libre
                </div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Belleza y salud
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Cocina y menaje</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Baño</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Supermercado</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Bebés</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Jardín y terraza</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Decoración e Iluminación</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Mascotas</div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Automotriz<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>NUEVO</span></div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Herramientas y Maquinaria<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>NUEVO</span></div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Construcción<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>NUEVO</span></div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Pisos, pinturas y terminaciones<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>NUEVO</span></div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}><div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Ferretería<span className={style.sideBarDesktopFirstLevelCategoriesLabel}>NUEVO</span></div><div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow /></div></div></div><div className={style.sideBarDesktopCategoryWrapper}><div className={style.sideBarDesktopFirstLevelCategories}>
                  <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Otras categorías
                  </div>
                  <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv">
                    <Arrow />
                  </div>
                </div>
            </div>
            <div className={style.sideBarDesktopCategoryWrapper}>
              <div className={style.sideBarDesktopFirstLevelCategories}>
                <div className={style.sideBarDesktopFirstLevelCategoriesTitle}>Emprendedores
                </div>
                <div className="FirstLevelCategories-module_chevronRightIcon__3qHuv"><Arrow />
                </div>
              </div>
            </div>
          </div>
          <a rel="noreferrer noopener" target="_self" href="https://www.falabella.com.pe/falabella-pe" className={style.sideBarDesktopBrandLogo}>
            <img className="TaxonomyDesktop-module_logo__15yuB" src="https://images.falabella.com/v3/assets/bltf4ed0b9a176c126e/bltd2c33100e8cd1b5f/62c733c26a8fb133b0ff6a45/logo-falabella-menu.svg" alt="falabella" />
          </a>
        </div>
      </div>
    </div>
  )
}