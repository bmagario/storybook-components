import './my-label.css';
/**
 *
 *
 * @interface LabelProps
 */
export interface LabelProps {
  /**
   * label content
   */
  label: string;
	/**
   * Size
   */
	size?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * AllCaps
   */
  allCaps?: boolean;
  /**
   * Personalized color
   */
  fontColor?: string;
	
}

/**
 * Primary UI component for user interaction
 */
export const MyLabel = ({
	label, 
	size = 'normal',
  allCaps = false,
  fontColor = '',
  ...props
}: LabelProps) => {
  return (
    <label
      className={`label ${size}`}
      style={{ color: fontColor }}
      {...props}
    >
      { !allCaps ? label : label.toUpperCase() }
    </label>
  );
};
