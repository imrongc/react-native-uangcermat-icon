import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const PaperclipOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M11.38 3.59a4.6 4.6 0 0 1 4.505 0c.516.292.999.763 1.782 1.528l.077.075.08.079c.78.762 1.264 1.234 1.564 1.742a4.38 4.38 0 0 1 0 4.468c-.3.508-.784.98-1.564 1.742l-.08.078-6.119 5.978c-.434.424-.788.77-1.1 1.026-.322.266-.64.47-1.012.58a2.83 2.83 0 0 1-1.59 0c-.373-.11-.69-.314-1.013-.58-.311-.256-.665-.602-1.1-1.026l-.039-.038c-.434-.424-.788-.77-1.05-1.075-.271-.314-.486-.63-.601-1.005a2.7 2.7 0 0 1 0-1.596c.115-.376.33-.69.6-1.005.263-.305.617-.65 1.051-1.075l6.032-5.892.064-.063c.303-.297.559-.547.854-.686a1.94 1.94 0 0 1 1.647 0c.296.139.551.39.854.686l.065.063.066.065c.301.293.56.545.705.84.26.527.26 1.142 0 1.67a2 2 0 0 1-.32.45q-.177.19-.44.442L9.232 16.99a.607.607 0 0 1-.87-.02.637.637 0 0 1 .02-.887l6.054-5.916c.19-.185.312-.305.4-.402a.8.8 0 0 0 .124-.16.6.6 0 0 0 0-.54c-.037-.074-.118-.166-.524-.563-.403-.394-.5-.477-.583-.516a.73.73 0 0 0-.615 0c-.083.039-.18.122-.583.516l-6.012 5.873c-.458.448-.773.757-.997 1.016-.219.254-.309.415-.35.552a1.44 1.44 0 0 0 0 .844c.041.137.131.298.35.552.224.26.539.568.997 1.016.459.448.775.756 1.04.975.26.213.43.306.581.35.297.087.613.087.91 0 .15-.044.32-.137.58-.35.266-.219.582-.527 1.04-.975l6.1-5.959c.886-.866 1.236-1.216 1.44-1.562.581-.982.581-2.188 0-3.17-.203-.346-.554-.697-1.44-1.563-.885-.864-1.246-1.209-1.604-1.41a3.39 3.39 0 0 0-3.314 0c-.358.201-.718.546-1.603 1.41l-4.914 4.802a.607.607 0 0 1-.87-.02.637.637 0 0 1 .019-.887L9.52 5.193l.077-.075c.783-.765 1.265-1.236 1.782-1.528"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default PaperclipOutlineIcon;