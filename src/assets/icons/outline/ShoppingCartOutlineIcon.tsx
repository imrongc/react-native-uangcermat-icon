import type { OutlineIconType } from './OutlineIcon.type';
import Svg, { Path } from 'react-native-svg';
const ShoppingCartOutlineIcon = ({ fill, size = 24 }: OutlineIconType) => {
  return (
    <Svg
      width={size.toString()}
      height={size.toString()}
      fill="none"
      viewBox="0 0 24 24"
    >
      <Path
        fill={fill}
        d="M10.134 8.548c.359-.064.698.19.76.567l.463 2.878c.06.377-.18.735-.54.798-.358.064-.698-.19-.758-.566l-.464-2.878c-.061-.377.18-.735.539-.799M14.888 9.115c.06-.377.4-.63.76-.567.358.064.6.422.538.799l-.463 2.878c-.061.377-.401.63-.76.566-.358-.063-.6-.42-.539-.798z"
      />
      <Path
        fill={fill}
        fillRule="evenodd"
        d="M3.877 3.04a.65.65 0 0 0-.84.423c-.12.36.06.756.403.883l.23.084c.586.217.971.36 1.255.507.266.137.383.248.46.367.08.122.14.29.175.625.037.351.037.808.037 1.491v2.512c0 1.341.012 2.308.133 3.047.128.788.385 1.353.864 1.885.522.578 1.183.83 1.97.947.753.112 1.71.112 2.892.112h4.746c.651 0 1.2 0 1.643-.057.47-.06.9-.193 1.274-.514.374-.32.584-.735.735-1.207.143-.445.254-1.01.385-1.68l.447-2.28v-.004l.01-.048c.144-.761.266-1.402.296-1.917.032-.541-.026-1.075-.362-1.533-.206-.282-.496-.442-.76-.539-.269-.1-.573-.157-.88-.193-.604-.07-1.336-.07-2.055-.07H6.879l-.01-.1c-.046-.46-.149-.877-.396-1.258-.25-.384-.581-.63-.968-.83-.362-.186-.822-.356-1.363-.556zm3.038 4.225h9.992c.752 0 1.414 0 1.936.062q.388.046.59.123c.112.042.15.075.155.08.054.075.113.212.09.6-.024.41-.126.957-.282 1.778v.002l-.439 2.234c-.142.723-.237 1.203-.35 1.558-.109.338-.21.483-.32.577s-.266.17-.602.213c-.354.045-.82.046-1.523.046h-4.656c-1.244 0-2.107-.001-2.757-.098-.628-.094-.96-.264-1.199-.53-.28-.31-.433-.616-.522-1.165-.098-.6-.113-1.438-.113-2.813zM8.488 21c-1.091 0-1.976-.93-1.976-2.077s.885-2.077 1.976-2.077 1.976.93 1.976 2.077S9.579 21 8.488 21m-.659-2.077c0 .382.295.692.659.692s.658-.31.658-.692-.294-.692-.658-.692-.659.31-.659.692M16.39 21c-1.09 0-1.975-.93-1.975-2.077s.884-2.077 1.975-2.077 1.976.93 1.976 2.077S17.48 21 16.39 21m-.658-2.077c0 .383.295.692.658.692s.659-.31.659-.692-.295-.692-.659-.692c-.363 0-.658.31-.658.692"
        clipRule="evenodd"
      />
    </Svg>
  );
};

export default ShoppingCartOutlineIcon;