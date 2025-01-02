import styles from "./ContentContainer.module.scss";

type ContentContainerProps = {
  /**
   * Has to be valid TailWindCSS class colour name
   */
  noLimit?: boolean;
  customBackgroundColour?: string;
  children: React.ReactNode;
};

const ContentContainer = ( {
  children,
  noLimit = true,
  customBackgroundColour = undefined,
}: ContentContainerProps ): JSX.Element =>
{
  return (
    <section className={ `${ styles.mainContainer } ${ customBackgroundColour ?? "" }` }>
      <div className={ `w-full ${ noLimit ?? styles.limitingContainer }` }>
        <div className={ styles.paddingContainer }>{ children }</div>
      </div>
    </section>
  );
};

export default ContentContainer;
