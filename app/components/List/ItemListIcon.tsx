import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ItemListIconProps
{
    icon: IconProp;
    color: string;

}
export default function ItemListIcon( { icon, color }: ItemListIconProps )
{
    return (
        <FontAwesomeIcon className="w-10" icon={icon} color={color} />
    )
}