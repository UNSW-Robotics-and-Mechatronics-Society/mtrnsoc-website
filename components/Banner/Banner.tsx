import React, { useEffect, useState } from "react";
import { Link as ScrollLink, scroller } from "react-scroll";
import styles from "./Banner.module.scss";

type BannerProps = {
  imgURL: string;
  isBrand?: boolean;
  text?: string;
  arrow: boolean;
  position: PositionType;
  scrollToID: string;
};

export type PositionType = "center" | "bottom-left";

type TextProps = {
  text: string;
  position: PositionType;
};

const Text = ( { text, position }: TextProps ): JSX.Element =>
{
  if ( position === "bottom-left" )
  {
    return (
      <div className={ styles.textContainerBottomLeft }>
        <h1 className={ styles.titleText }>{ text.toUpperCase() }</h1>
      </div>
    );
  } else
  {
    // Center
    return (
      <div className={ styles.textContainerCenter }>
        <h1 className={ `${ styles.titleText } ${ styles.titlePadding }` }>{ text.toUpperCase() }</h1>
      </div>
    );
  }
};

type BrandTextProps = {
  position: PositionType;
};

const BrandText = ( { position }: BrandTextProps ): JSX.Element =>
{
  const text = "UNSW Robotics And Mechatronics Society";

  // Function to add styles to specific letters and insert a new line after UNSW
  const getStyledText = () =>
  {
    return text.split( "" ).map( ( char, index ) =>
    {
      if ( char === " " )
      {
        // Add a line break after UNSW
        const prefix = text.slice( 0, index );
        if ( prefix === "UNSW" )
        {
          return <><br key={ `br-${ index }` } /></>;
        }
      }
      if ( [ "R", "A", "M" ].includes( char ) )
      {
        return (
          <span className={ styles.titleBrandTextHighlight } key={ index }>
            { char }
          </span>
        );
      }
      return <span key={ index }>{ char }</span>;
    } );
  };

  return (
    <div className={ styles.textContainerBottomLeft }>
      <h1 className={ styles.titleText }>{ getStyledText() }</h1>
    </div>
  );
};



export default function Banner ( {
  imgURL,
  isBrand = undefined,
  text = undefined,
  arrow = false,
  position = "bottom-left",
  scrollToID,
}: BannerProps ): JSX.Element
{
  const [ isScrolled, setIsScrolled ] = useState( false );

  useEffect( () =>
  {
    const handleScroll = () =>
    {
      if ( window.scrollY > 0 && !isScrolled )
      {
        setIsScrolled( true );
        scroller.scrollTo( scrollToID, {
          smooth: true,
          offset: -80,
          duration: 750,
        } );
      } else if ( window.scrollY === 0 && isScrolled )
      {
        setIsScrolled( false );
      }
    };

    window.addEventListener( "scroll", handleScroll );
    return () =>
    {
      window.removeEventListener( "scroll", handleScroll );
    };
  }, [ isScrolled, scrollToID ] );

  return (
    <div className={ styles.container }>
      <img src={ imgURL } alt="hero banner" className={ styles.image } draggable="false" />
      {/* if text exists, create div */ }
      { isBrand !== undefined && <BrandText position={ position } /> }
      { isBrand === undefined && text !== undefined && <Text position={ position } text={ text } /> }
      { arrow && (
        <div className={ styles.arrowDown }>
          <ScrollLink
            to={ scrollToID }
            smooth={ true }
            offset={ -80 } // 5 rem => 80px
            duration={ 750 }
          >
            <img src="/logos/arrowDown.svg" alt="" className={ styles.arrowDown } draggable={ false } />
          </ScrollLink>
        </div>
      ) }
    </div>
  );
}
