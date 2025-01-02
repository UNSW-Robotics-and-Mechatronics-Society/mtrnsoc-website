import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useWindowDimensions from "util/useWindowDimensions";
import type { PageInformation } from "data/navLinksData";
import navLinks from "data/navLinksData";
import ContentContainer from "../ContentContainer/ContentContainer";
import styles from "./NavBar.module.scss";
import ReactSlidingPane from "./SlidingPane";

const Logo = () =>
{
  return (
    <Link legacyBehavior href="/">
      <a>
        <img
          src="/logos/RAMSocLogo.svg"
          alt="RAMSoc Logo"
          aria-label="logo"
          className={ styles.logo }
        />
      </a>
    </Link>
  );
};

type DesktopButtonProps = NavLinksSectionProps & PageInformation;

const DesktopButton = ( { navBarName, route, currentRoute }: DesktopButtonProps ): JSX.Element =>
{
  const boldIfRouteIsCurrent = route === currentRoute ? "font-semibold" : "";

  return (
    <div className={ styles.buttonContainer }>
      <Link legacyBehavior href={ route }>
        <a>
          <div className={ `${ styles.buttonText } ${ boldIfRouteIsCurrent }` }>{ navBarName }</div>
        </a>
      </Link>
    </div>
  );
};

type NavLinksSectionProps = {
  currentRoute: string;
};

const NavLinksSection = ( { currentRoute }: NavLinksSectionProps ): JSX.Element =>
{
  return (
    <div className={ styles.navLinksContainer }>
      { navLinks.map( ( item ) => (
        <DesktopButton key={ item.navBarName } { ...item } currentRoute={ currentRoute } />
      ) ) }
    </div>
  );
};

const DesktopNavBar = ( { currentRoute }: NavLinksSectionProps ): JSX.Element =>
{
  return (
    <div className={ styles.DesktopNavBarContainer }>
      <Logo />
      <NavLinksSection currentRoute={ currentRoute } />
    </div>
  );
};

interface MobileNavBarProps extends NavLinksSectionProps
{
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavBar = ( { setIsOpen }: MobileNavBarProps ): JSX.Element =>
{
  return (
    <div className={ styles.mobileNavBarContainer }>
      <button aria-label="menu">
        <img
          src="/logos/menu.svg"
          alt="menu"
          className={ styles.navigationBurger }
          onClick={ () => setIsOpen( true ) }
        />
      </button>
      <Logo />
      {/* As a placeholder for flex */ }
      <img
        src="/logos/menu.svg"
        alt=""
        className={ `${ styles.navigationBurger } invisible` }
        onClick={ () => setIsOpen( true ) }
      />
    </div>
  );
};

const NavBar = (): JSX.Element =>
{
  const [ isTop, setIsTop ] = React.useState( false );
  const [ isOpen, setIsOpen ] = React.useState( false );

  const router = useRouter();
  const { route } = router;

  if ( typeof window !== "undefined" )
  {
    window.addEventListener( "scroll", () =>
    {
      setIsTop( window.scrollY <= 0 );
    } );
  }

  return (
    <div className={ `${ styles.mainContainer } ${ isTop ? "" : "shadow-md" }` }>
      <ContentContainer noLimit={ false }>
        <div className="w-full max-md:hidden">
          <DesktopNavBar currentRoute={ route } />
        </div>
        <div className="w-full hidden max-md:block">
          <MobileNavBar currentRoute={ route } isOpen={ isOpen } setIsOpen={ setIsOpen } />
        </div>
      </ContentContainer>
      <ReactSlidingPane
        isOpen={ isOpen }
        from="left"
        width="15rem"
        onRequestClose={ () => setIsOpen( false ) }
      >
        <nav>
          <ul>
            { navLinks.map( ( item ) => (
              <li
                key={ item.navBarName }
                className={ `${ styles.mobileNavButton } ${ item.route === route ? "font-semibold" : ""
                }` }
                onClick={ () => setIsOpen( false ) }
              >
                <Link legacyBehavior href={ item.route }>
                  <a>{ item.navBarName }</a>
                </Link>
              </li>
            ) ) }
          </ul>
        </nav>
      </ReactSlidingPane>
    </div>
  );
};

export default NavBar;
