import { Svg, Path } from 'react-native-svg';
import type { DuotoneIconType } from './DuotoneIcon.type';

const PaperclipDuotoneIcon = ({
  fill,
  secondary,
  size = 24,
}: DuotoneIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.3798 3.59006C12.7746 2.80331 14.4898 2.80331 15.8846 3.59006C16.4013 3.88147 16.8835 4.35267 17.6668 5.11817C17.6921 5.14288 17.7177 5.16789 17.7436 5.19321C17.9891 5.43303 17.9976 5.83049 17.7625 6.08096C17.5275 6.33142 17.1379 6.34005 16.8924 6.10023C16.0076 5.23584 15.6473 4.89106 15.2892 4.68907C14.2649 4.11133 12.9995 4.11133 11.9753 4.68907C11.6171 4.89106 11.2568 5.23584 10.372 6.10023L5.45761 10.9013C5.21212 11.1411 4.82258 11.1325 4.58753 10.882C4.35248 10.6316 4.36093 10.2341 4.60642 9.9943L9.52082 5.19321C9.54674 5.16788 9.57233 5.14287 9.59761 5.11817C10.381 4.35267 10.8631 3.88147 11.3798 3.59006ZM14.4163 7.61303C14.6514 7.36256 15.0409 7.35393 15.2864 7.59375C15.3088 7.61558 15.3309 7.63716 15.3528 7.65853C15.654 7.95192 15.9129 8.20421 16.0581 8.49878C16.3177 9.02533 16.3177 9.64121 16.0581 10.1678C15.9129 10.4623 15.654 10.7146 15.3528 11.008C15.3309 11.0294 15.3088 11.051 15.2864 11.0728L9.23117 16.9884C8.98568 17.2282 8.59614 17.2196 8.36109 16.9692C8.12604 16.7187 8.13449 16.3212 8.37998 16.0814L14.4352 10.1658C14.8413 9.76909 14.9222 9.67727 14.9586 9.60352C15.0432 9.43195 15.0432 9.2346 14.9586 9.06302C14.9222 8.98928 14.8413 8.89746 14.4352 8.50078C14.1897 8.26096 14.1813 7.8635 14.4163 7.61303Z"
        fill={fill}
      />
      <Path
        d="M16.8925 6.10091C17.7788 6.96674 18.1295 7.31703 18.3339 7.66282C18.9144 8.64507 18.9144 9.85137 18.3339 10.8336C18.1295 11.1794 17.7788 11.5297 16.8925 12.3955L10.7934 18.354C10.335 18.8018 10.0187 19.1101 9.7529 19.3289C9.49366 19.5422 9.32381 19.6346 9.17251 19.679C8.87619 19.7659 8.55966 19.7659 8.26334 19.679C8.11204 19.6346 7.94219 19.5422 7.68294 19.3289C7.41715 19.1101 7.10082 18.8018 6.64244 18.354C6.18391 17.9061 5.86853 17.5972 5.64496 17.3379C5.426 17.084 5.33631 16.923 5.29433 16.7865C5.20958 16.5107 5.20958 16.2175 5.29433 15.9418C5.33631 15.8052 5.426 15.6442 5.64496 15.3903C5.86853 15.131 6.1839 14.8222 6.64244 14.3742L12.6538 8.50146C13.0574 8.10714 13.1543 8.02437 13.2368 7.98553C13.4306 7.89436 13.6585 7.89436 13.8523 7.98553C13.9349 8.02437 14.0317 8.10714 14.4353 8.50146C14.4352 8.50136 14.4354 8.50155 14.4353 8.50146C14.1899 8.26164 14.1813 7.86365 14.4164 7.61319C14.6469 7.36756 15.026 7.35451 15.2721 7.58029L15.2225 7.53176C14.9194 7.23496 14.6635 6.98433 14.3677 6.84516C13.8468 6.60013 13.2423 6.60013 12.7215 6.84516C12.4257 6.98433 12.1697 7.23496 11.8667 7.53176L5.77148 13.4865C5.33751 13.9105 4.98349 14.2563 4.72092 14.5608C4.44976 14.8753 4.23538 15.1905 4.11996 15.566C3.96001 16.0864 3.96001 16.6419 4.11996 17.1622C4.23538 17.5377 4.44976 17.853 4.72092 18.1674C4.98348 18.4719 5.33749 18.8178 5.77145 19.2417L5.81071 19.2801C6.24496 19.7043 6.59886 20.0501 6.91024 20.3063C7.23279 20.5718 7.55041 20.7765 7.92324 20.8859C8.44179 21.038 8.99405 21.038 9.51261 20.8859C9.88544 20.7765 10.2031 20.5718 10.5256 20.3063C10.837 20.0501 11.1909 19.7043 11.6251 19.2801L17.8239 13.2242C18.6042 12.4622 19.0877 11.99 19.3879 11.4821C20.2041 10.101 20.204 8.39548 19.3879 7.01438C19.0877 6.50644 18.6042 6.03429 17.8239 5.27222L17.7579 5.20776C17.9894 5.44884 17.993 5.83559 17.7625 6.08111C17.5275 6.33158 17.138 6.34073 16.8925 6.10091Z"
        fill={secondary}
      />
    </Svg>
  );
};

export default PaperclipDuotoneIcon;