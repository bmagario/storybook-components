/// <reference types="react" />
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
export declare const MyLabel: ({ label, size, allCaps, fontColor, ...props }: LabelProps) => JSX.Element;
